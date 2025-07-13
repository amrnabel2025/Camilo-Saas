// Define groovy script in script.groovy file
def gv

// Notify GitHub with the build status after finishing the execution of the pipeline
void setBuildStatus(String message, String state, String context = "ci/jenkins/build-status", String targetUrl = null) {
    withCredentials([string(credentialsId: 'github-token-mashrouk', variable: 'GITHUB_TOKEN')]) {
        def repoUrl = "https://api.github.com/repos/AMK-LLC/mashrouk-website-v4/statuses/${env.GIT_COMMIT}"
        def payload = [
            state: state.toLowerCase(),
            target_url: targetUrl ?: "${env.BUILD_URL}/console",
            description: message,
            context: context
        ]
        httpRequest(
            url: repoUrl,
            httpMode: 'POST',
            contentType: 'APPLICATION_JSON',
            customHeaders: [[name: 'Authorization', value: "token ${GITHUB_TOKEN}"]],
            requestBody: groovy.json.JsonOutput.toJson(payload)
        )
    }
}

// start of pipeline
pipeline {
    agent any

    // Declare pipeline variables
    environment {
        IMAGE_REPO = "mohamedalabbar/amk"
        IMAGE_TAG_DEV="mashrouk-website-dev-${BUILD_NUMBER}"
        IMAGE_TAG_PROD="mashrouk-website-prod-${BUILD_NUMBER}"
        IMAGE_TAG_TEST="mashrouk-website-test-${BUILD_NUMBER}"
        SONAR_SCANNER = tool name: 'SonarQubeScanner'
        SONAR_PROJECT_KEY = 'mashrouk-website'
        SONAR_PROJECT_NAME = 'Mashrouk-Website'
        SONAR_TOKEN = credentials('sonarqube-token')
    }

    // define pipeline stages
    stages {

        stage("Init") {
            steps {
                script {
                    gv = load "script.groovy"
                }
            }
        }

        stage("SonarQube Analysis") {
            steps {
                script {
                    def scannerHome = tool 'SonarQubeScanner'; // SonarQube Scanner tool installation
                    withSonarQubeEnv('SonarQube') {
                        env.SONAR_USER_HOME = "${WORKSPACE}/.sonar"
                        sh "${scannerHome}/bin/sonar-scanner " +
                        "-Dsonar.projectKey=${SONAR_PROJECT_KEY} " +
                        "-Dsonar.projectName=${SONAR_PROJECT_NAME} " +
                        "-Dsonar.host.url=http://104.248.129.157:9000 " +
                        "-Dsonar.token=${SONAR_TOKEN} " +
                        "-Dsonar.sources=. " +
                        "-Dsonar.exclusions=**/node_modules/**,**/dist/** "

                    }
                }
            }
        }

        stage("Check SonarQube Quality Gate") {
            steps {
                script {
                    def sonarQubeUrl = "https://sonarqube.amk.sa/dashboard?id=${SONAR_PROJECT_KEY}"
                    timeout(time: 5, unit: 'MINUTES') {
                        def qualityGate = waitForQualityGate()
                        if (qualityGate.status != 'OK') {
                            setBuildStatus("SonarQube Quality Gate Failed", "failure", "ci/jenkins/sonarqube-quality-gate", sonarQubeUrl)
                            error("Pipeline failed due to SonarQube quality gate failure")
                        } else {
                            setBuildStatus("SonarQube Quality Gate Passed", "success", "ci/jenkins/sonarqube-quality-gate", sonarQubeUrl)
                        }
                    }
                }
            }
        }
        
        stage("Build image") {
            steps {
                script {
                    gv.buildImage()
                }
            }
        }

        stage("Push to docker hub") {
            steps {
                script {
                    gv.pushImage()
                }
            }
        }

        stage("Deploy to server") {
            steps {
                script {
                    gv.deployImage()
                }
            }
        }        
    }
    
    post {
        success {
            script {
                def commitMessage = sh(script: "git log -1 --pretty=%s", returnStdout: true).trim()
                def committer = sh(script: "git log -1 --pretty=%an", returnStdout: true).trim()
                setBuildStatus("Deployed successfully", "SUCCESS");
                slackSend (
                    channel: 'amk-jenkins-notifications',
                    color: 'good',
                    message: "✅ *Build Successful!* \nProject: ${env.JOB_NAME} \nBuild Number: ${env.BUILD_NUMBER} \nBranch: ${env.GIT_BRANCH} \nCommit: ${env.GIT_COMMIT} \nCommitter: ${committer} \nMessage: ${commitMessage} \nDuration: ${currentBuild.durationString} \n<${env.BUILD_URL}|View Build>"
                )
            }
        }
        failure {
            script {
                def commitMessage = sh(script: "git log -1 --pretty=%s", returnStdout: true).trim()
                def committer = sh(script: "git log -1 --pretty=%an", returnStdout: true).trim()
                setBuildStatus("Deploy failed", "FAILURE");
                slackSend (
                    channel: 'amk-jenkins-notifications',
                    color: 'danger',
                    message: "❌ *Build Failed!* \nProject: ${env.JOB_NAME} \nBuild Number: ${env.BUILD_NUMBER} \nBranch: ${env.GIT_BRANCH} \nCommit: ${env.GIT_COMMIT} \nCommitter: ${committer} \nMessage: ${commitMessage} \nDuration: ${currentBuild.durationString} \n<${env.BUILD_URL}|View Build>"
                )
                mail to: 'mohamed.s@amk.com.sa',
                    subject: "Jenkins mashrouk website Pipeline Failure",
                    body: "The Jenkins pipeline failed. Please check the Jenkins console output for more information.";
            }
        }
    }
}
