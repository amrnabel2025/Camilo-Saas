import { Box, Divider, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { ShadowSVG2 } from "../../../public/SVGs";
import { features } from "../../utils/Constants";

const FeaturesSection = () => {
  const t = useTranslations("Home.OurFeatures");

  return (
    <Box id="features" sx={styles.container}>
      <Stack
        spacing={{ xs: 4, sm: 5, md: 7 }}
        justifyContent="center"
        alignItems="center"
        position="relative"
        sx={{ width: "100%", zIndex: 8 }}
      >
        <ShadowBox top={150} right="80%" width="50%" />
        {/* <ShadowBox top={-100} right="35%" width="30%" opacity={0.5} /> */}
        <ShadowBox top={100} right="-30%" width="50%" />

        <Stack
          spacing={{ xs: 2, md: 3 }}
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Typography variant="h2" sx={styles.title}>
            {t("title")}
          </Typography>
          <Typography sx={styles.description}>{t("description")}</Typography>
        </Stack>

        <Box sx={styles.featuresContainer}>
          {features.map((feature, idx) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={idx}
              t={t}
            />
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

//______________________________________ C O M P O N E N T S ______________________________________//

const ShadowBox = ({
  top,
  right,
  width,
  opacity,
}: {
  top: number;
  right: string;
  width: string;
  opacity?: number;
}) => (
  <Box sx={styles.shadowBox(top, right, width, opacity)}>
    <ShadowSVG2 />
  </Box>
);

const FeatureCard = ({
  feature,
  index,
  t,
}: {
  feature: (typeof features)[0];
  index: number;
  t: (key: string) => string;
}) => (
  <React.Fragment>
    <Stack
      data-aos-duration="3000"
      data-aos="zoom-in"
      data-aos-offset="0"
      data-aos-delay={index * 200}
      spacing={2}
      sx={styles.featureStack}
    >
      <Box sx={styles.iconContainer(feature.bgcolor)}>{feature.icon}</Box>
      <Typography sx={styles.featureTitle}>{t(feature.title)}</Typography>
      <Typography sx={{ ...styles.featureDescription, width: feature.width }}>
        {t(feature.desc)}
      </Typography>
    </Stack>
    {index < features.length - 1 && <Divider sx={styles.divider} />}
  </React.Fragment>
);

//______________________________________ S E C T I O N  S T Y L E S ______________________________________//

const styles = {
  container: {
    width: "100%",
    zIndex: 360,
    mb: { xs: 5, sm: 8, md: 10 },
    overflow: "hidden",
    pt: { xs: 8, md: 6 },
    background:"linear-gradient(180deg, rgb(238 251 249), transparent)"
  },
  shadowBox: (top: number, right: string, width: string, opacity = .3) => ({
    overflow: "hidden",
    width,
    height: "200px",
    position: "absolute",
    top,
    right,
    background: "#B0D5CE",
    filter: "blur(114.99298858642578px)",
    display: { xs: "none", md: "block" },
    opacity,
    zIndex: 0,
  }),
  title: {
    fontSize: { xs: "32px", sm: "48px", md: "64px" },
    fontWeight: 800,
    lineHeight: { xs: "38px", sm: "54px", md: "70px" },
    textAlign: "center",
    textTransform: "capitalize" as const,
    fontFamily: "Cabinet Grotesk, sans-serif",
    color: "#272727",
    zIndex: 2,
  },
  description: {
    maxWidth: { xs: "100%", sm: "600px", md: "701px" },
    fontSize: { xs: "16px", sm: "17px", md: "18px" },
    fontWeight: 500,
    lineHeight: { xs: "26px", md: "30px" },
    textAlign: "center",
    textTransform: "capitalize" as const,
    fontFamily: "Manrope, sans-serif",
    color: "#272727",
    px: { xs: 1, sm: 0 },
    zIndex: 2,
  },
  featuresContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    gap: { xs: 5, md: 10 },
    width: "90%",
    mx: "auto",
    maxWidth: { xs: "100%", md: "1261px" },
    zIndex: 13,
  },
  featureStack: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 250,
  },
  iconContainer: (bgcolor: string) => ({
    width: "80px",
    height: "80px",
    bgcolor,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: 0,
  }),
  featureTitle: {
    fontSize: { xs: "26px", sm: "28px", md: "32px" },
    fontWeight: 700,
    textAlign: "center",
    textTransform: "capitalize" as const,
    fontFamily: "Cabinet Grotesk, sans-serif",
    color: "#272727",
  },
  featureDescription: {
    fontSize: { xs: "15px", md: "16px" },
    fontWeight: 500,
    lineHeight: { xs: "24px", md: "26px" },
    textAlign: "center",
    fontFamily: "Manrope, sans-serif",
    color: "#272727",
    maxWidth: "280px",
  },
  divider: {
    width: { xs: "60%", md: "1px" },
    height: { xs: "100%", md: "165px" },
    backgroundColor: "rgba(0, 0, 0, 0.20)",
    display: "block",
  },
};

export default FeaturesSection;
