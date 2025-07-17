"use client";
import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import {
  ApproachSVG,
  ImpactBusinessImageSVG,
  ImpactSVG,
  KeySVG,
  SolutionChartsSVG,
  SolutionTitleLineSVG,
} from "../../../public/SVGs";

const iconMap = {
  KeySVG,
  ImpactSVG,
  ApproachSVG,
};

interface Capability {
  icon?: string;
  title?: string;
  description?: string;
  isImage?: boolean;
}

interface Impact {
  icon?: string;
  title?: string;
  description?: string;
  isImage?: boolean;
}

interface ImplementationStep {
  icon?: string;
  step?: string;
  title?: string;
  description?: string;
  isImage?: boolean;
}

interface Solution {
  id: string;
  heroImage: string;
  pageTitle: string;
  pageDescription1: string;
  pageDescription: string;
  capabilitiesDescription?: string;
  impactDescription?: string;
  implementationTopDescription?: string;
  finalCTA: string;
  keyCapabilities: Capability[];
  businessImpact: Impact[];
  implementationApproach: ImplementationStep[];
}

const SolutionDetails = ({ solution }: { solution: Solution }) => {
  const t = useTranslations();

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: "40vh", md: "100vh" },
          backgroundImage: `url(${solution.heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "45%", md: "67%" },
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            maxWidth: 900,
            mx: "auto",
            width: "100%",
          }}
        >
          <Typography
            variant="h2"
            color="black"
            fontWeight={700}
            sx={{ fontSize: { xs: 24, md: 48 } }}
          >
            {t(solution.pageTitle)}
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box>
          <Typography
            variant="h4"
            color="#161C2D"
            fontWeight={700}
            sx={{ fontSize: { xs: 24, md: 32 } }}
            textAlign="center"
          >
            {t(solution.pageTitle)}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <KeySVG width={24} height={24} />
              <Typography
                variant="h6"
                color="black"
                fontWeight={700}
                sx={{ fontSize: { xs: 10, md: 20 } }}
              >
                {t("Solutions.keyCapabilitiesLabel")}
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <ImpactSVG width={24} height={24} />
              <Typography
                variant="h6"
                color="black"
                fontWeight={700}
                sx={{ fontSize: { xs: 10, md: 20 } }}
              >
                {t("Solutions.businessImpactLabel")}
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <ApproachSVG width={24} height={24} />
              <Typography
                variant="h6"
                color="black"
                fontWeight={700}
                sx={{ fontSize: { xs: 10, md: 20 } }}
              >
                {t("Solutions.implementationApproachLabel")}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            mt: 4,
          }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              mb: 4,
              fontSize: 18,
              fontWeight: 400,
              color: "rgba(0, 0, 0, 0.60)",
            }}
          >
            {t(solution.pageDescription1 || "")}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              mb: 4,
              fontSize: 18,
              fontWeight: 400,
              color: "rgba(0, 0, 0, 0.60)",
            }}
          >
            {t(solution.pageDescription || "")}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              mb: 4,
              fontSize: 18,
              fontWeight: 400,
              color: "rgba(0, 0, 0, 0.60)",
            }}
          >
            {t(solution.impactDescription || "")}
          </Typography>
        </Box>

        <Box sx={{ my: 8, position: "relative" }}>
          <Typography
            variant="h3"
            textAlign="center"
            gutterBottom
            fontWeight={700}
            sx={{ mb: 4 }}
          >
            {t("Solutions.keyCapabilitiesLabel")}
          </Typography>
          <Box sx={{ position: "absolute", top: -40, right: 325 }}>
            <SolutionChartsSVG />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <SolutionTitleLineSVG />
          </Box>
          <Grid container spacing={2} mt={2}>
            {solution.keyCapabilities.map((cap: Capability, index: number) => {
              const Icon = cap.icon
                ? iconMap[cap.icon as keyof typeof iconMap]
                : undefined;
              return (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
                    {Icon && <Icon width={60} height={60} />}
                    <Typography variant="h6" fontWeight={700}>
                      {t(cap.title || "")}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary">
                    {t(cap.description || "")}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box sx={{ my: 8, position: "relative" }}>
          <Typography
            variant="h3"
            textAlign="center"
            gutterBottom
            fontWeight={700}
            sx={{ mb: 4 }}
          >
            {t("Solutions.businessImpactLabel")}
          </Typography>

          <Box sx={{ position: "absolute", top: -40, right: 300 }}>
            <SolutionChartsSVG />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <SolutionTitleLineSVG />
          </Box>
          <Grid container spacing={4} mt={2} alignItems="stretch">
            {solution.businessImpact.map((impact: Impact, index: number) => {
              const Icon = impact.icon
                ? iconMap[impact.icon as keyof typeof iconMap]
                : undefined;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} mb={6} key={index}>
                  {impact.isImage ? (
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 3,
                      }}
                    >
                      <ImpactBusinessImageSVG />
                    </Box>
                  ) : (
                    <Paper
                      elevation={1}
                      sx={{ p: 3, borderRadius: "16px", height: "100%" }}
                    >
                      <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
                        {Icon && <Icon width={60} height={60} />}
                        <Typography variant="h6" fontWeight={700}>
                          {t(impact.title || "")}
                        </Typography>
                      </Box>
                      <Typography color="text.secondary">
                        {t(impact.description || "")}
                      </Typography>
                    </Paper>
                  )}
                </Grid>
              );
            })}
          </Grid>
          {solution.impactDescription && (
            <Box
              sx={{
                boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.16)",
                p: 2,
                borderRadius: "16px",
                mt: 4,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  mx: "auto",
                  fontSize: 18,
                  color: "rgba(0, 0, 0, 0.60)",
                }}
              >
                {t(solution.impactDescription)}
              </Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ my: 8, position: "relative" }}>
          <Typography
            variant="h3"
            textAlign="center"
            gutterBottom
            fontWeight={700}
          >
            {t("Solutions.implementationApproachLabel")}
          </Typography>

          <Box sx={{ position: "absolute", top: -40, right: 200 }}>
            <SolutionChartsSVG />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <SolutionTitleLineSVG />
          </Box>
          {solution.implementationTopDescription && (
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                mt: 2,
                mb: 4,
                maxWidth: 900,
                mx: "auto",
              }}
            >
              {t(solution.implementationTopDescription)}
            </Typography>
          )}
          <Grid
            container
            spacing={4}
            mt={2}
            justifyContent="center"
            alignItems="stretch"
          >
            {solution.implementationApproach.map(
              (step: ImplementationStep, index: number) => {
                const Icon = step.icon
                  ? iconMap[step.icon as keyof typeof iconMap]
                  : undefined;
                return (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} mb={6} key={index}>
                    {step.isImage ? (
                      <Box
                        sx={{
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          p: 3,
                        }}
                      >
                        <ImpactBusinessImageSVG />
                      </Box>
                    ) : (
                      <Paper
                        elevation={1}
                        sx={{
                          p: 3,
                          borderRadius: "16px",
                          textAlign: "center",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        {Icon && <Icon width={60} height={60} />}

                        <Typography variant="h6" fontWeight={700}>
                          {t(step.title || "")}
                        </Typography>
                        <Typography color="text.secondary">
                          {t(step.description || "")}
                        </Typography>
                      </Paper>
                    )}
                  </Grid>
                );
              }
            )}
          </Grid>
        </Box>

        <Box
          sx={{
            mt: 8,
            p: { xs: 2, md: 4 },
            backgroundColor: "#f9f9f9",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, md: 3 },
          }}
        >
          <CheckCircle
            sx={{ color: "#E9B838", fontSize: { xs: 30, md: 40 } }}
          />
          <Typography variant="h6" sx={{ fontSize: { xs: 16, md: 20 } }}>
            {t(solution.finalCTA)}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SolutionDetails;
