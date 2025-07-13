"use client";
import { Box, Paper, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { whoWeAre } from "../../utils";
import { whoWeAreFeatures } from "../../utils/Constants";

interface FeatureCardProps {
  icon: React.ReactNode;
  label: string;
  index: number;
  t: (key: string) => string;
}

interface ImageSectionProps {
  isArabic: boolean;
}

const WhoWeAre = () => {
  const t = useTranslations("Home.WhoWeAre");
  const isArabic = useLocale() === "ar";

  return (
    <Box id="about" sx={styles.container}>
      <ImageSection isArabic={isArabic} />

      <Box sx={styles.contentContainer}>
        <TitleSection t={t} />
        <FeaturesList t={t} />
      </Box>
    </Box>
  );
};

//______________________________________ C O M P O N E N T S ______________________________________//

const ImageSection = ({ isArabic }: ImageSectionProps) => (
  <Box
    data-aos={isArabic ? "fade-down-left" : "fade-down-right"}
    data-aos-offset="100"
    data-aos-duration="1200"
    data-aos-delay="300"
    sx={styles.imageContainer}
  >
    <Image
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "500px",
        maxHeight: "500px",
      }}
      priority
      src={whoWeAre}
      alt="Who We Are"
    />
  </Box>
);

const FeatureCard = ({ icon, label, index, t }: FeatureCardProps) => (
  <Paper
    data-aos="fade-up"
    data-aos-duration="1200"
    data-aos-delay={index * 200}
    elevation={0}
    sx={styles.featureCard}
  >
    <Box sx={styles.iconContainer}>{icon}</Box>
    <Typography variant="body1" sx={styles.featureText}>
      {t(label)}
    </Typography>
  </Paper>
);

const TitleSection = ({ t }: { t: (key: string) => string }) => (
  <Box
    data-aos="fade-down"
    data-aos-offset="-100"
    data-aos-duration="1200"
    data-aos-delay="300"
    sx={styles.titleContainer}
  >
    <Typography variant="h4" sx={styles.title}>
      {t("title")}
    </Typography>
    <Typography variant="body1" sx={styles.description}>
      {t("description")}
    </Typography>
  </Box>
);

const FeaturesList = ({ t }: { t: (key: string) => string }) => (
  <Box sx={styles.featuresContainer}>
    {whoWeAreFeatures.map((feature, idx) => (
      <FeatureCard
        key={feature.label}
        icon={feature.icon}
        label={feature.label}
        index={idx}
        t={t}
      />
    ))}
  </Box>
);

//______________________________________ S T Y L E S ______________________________________//
const styles = {
  container: {
    width: "100%",
    mx: "auto",
    mt: "-1px",
    py: { xs: 10, md: 15 },
    background: "rgb(237 245 244)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: { xs: "column-reverse", md: "row" },
    gap: 2,
    position: "relative",
    flexWrap: "nowrap",
    overflow: "hidden",
  },
  imageContainer: {
    width: { xs: "100%", md: "40%" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    justifyContent: "center",
    alignItems: { xs: "center", md: "flex-start" },
    width: "100%",
  },
  titleContainer: {
    textAlign: { xs: "center", md: "left" },
    p: { xs: 2, md: 0 },
  },
  title: {
    fontSize: { xs: 36, md: 48 },
    textTransform: "capitalize" as const,
    color: "#2d2d2d",
    fontWeight: "bold",
  },
  description: {
    mt: 2,
    maxWidth: 838,
    fontSize: 20,
    fontWeight: 500,
    color: "#2d2d2d",
  },
  featuresContainer: {
    width: "95%",
    display: "flex",
    flexWrap: "wrap",
    gap: 3,
    justifyContent: { xs: "center", md: "space-between" },
    p: { xs: 2, md: 0 },
  },
  featureCard: {
    p: 3,
    width: { xs: "100%", md: "40%" },
    minWidth: 250,
    display: "flex",
    alignItems: "center",
    gap: 3,
    borderRadius: 3,
    border: "1px solid #e5f4f2",
  },
  iconContainer: {
    bgcolor: "#E5F4F2",
    p: "13px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12.195px",
  },
  featureText: {
    fontSize: 21,
    color: "#2d2d2d",
  },
} as const;

export default WhoWeAre;
