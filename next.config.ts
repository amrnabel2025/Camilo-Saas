import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // For development/testing images
      "res.cloudinary.com", // If you're using Cloudinary
      "localhost", // For local development
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // Enable image optimization
    unoptimized: false,
    // Configure image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
const withNextIntl = createNextIntlPlugin("./src/libs/i18n/request.ts");
export default withNextIntl(nextConfig);
