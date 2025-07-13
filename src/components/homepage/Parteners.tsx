"use client";

import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useLocale, useTranslations } from "next-intl";
import OurClientsSection from "../swiper/Swipper";

const PartnersSection = () => {
  const t = useTranslations("Home.Partners");
  const isArabic = useLocale() === "ar";

  return (
    <Box id="partners" sx={partnersStyles}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#272727",
          fontSize: { xs: "32px", md: "48px" },
          lineHeight: { xs: "50px", md: "80px" },
          textAlign: "center",
          fontFamily: "Exo, Cabinet Grotesk, sans-serif",
          mb: 2,
          px: 1,
        }}
      >
        {t("title")}
        {isArabic && (
          <>
            {t("title3")}
            <br />
            {t("title2")}
          </>
        )}
      </Typography>
      <OurClientsSection />
    </Box>
  );
};

const partnersStyles = {
  bgcolor: "#FFFFFF",
  width: "100%",
  pt: 12,
  pb: 7,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 3,
  overflow: "hidden",
  position: "relative",
};

export default PartnersSection;
