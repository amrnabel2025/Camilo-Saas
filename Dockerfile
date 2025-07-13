# Stage 1: Build Stage
FROM node:23.11-slim AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies, including devDependencies needed for building
RUN npm install

# Copy all the source files
COPY . .

# Run the build process to generate the production build
RUN npm run build

# Stage 2: Production Stage
FROM node:23.11-slim

# Set the working directory inside the container
WORKDIR /app

# Copy only the built app from the build stage
COPY --from=build /app /app

# Expose the port that Next.js will run on
EXPOSE 3000

# Set the environment variable to bind to all interfaces
ENV HOST=0.0.0.0

# Set the default command to start the app in production mode
CMD ["npm", "run", "start"]