"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { HerocircleSVG, HeroLineSVG } from "../../../public/SVGs";

type HeroProps = { t: ReturnType<typeof useTranslations> };
export default function Hero({ t }: HeroProps) {
  const isAr = usePathname().includes("ar");

  return (
    <Box
      data-aos="fade-up"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "stretch", md: "flex-start" },
        justifyContent: "space-between",
        px: { xs: 1, sm: 2, md: 10 },
        pt: { xs: 4, md: 20 },
        minHeight: { md: "71vh" },
        background: "linear-gradient(90deg, #fff7e6 0%, #fff 100%)",
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Left: Text and Buttons */}
      <Box
        data-aos="fade-right"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          mb: { xs: 4, md: 0 },
          mt: { xs: 8, md: 2 },
          zIndex: 2,
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontWeight: "bold",
            mb: { xs: 2, md: 4 },
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "2rem", sm: "2.2rem", md: "65px" },
            color: "#0e0e11",
            lineHeight: { xs: "2.6rem", sm: "3rem", md: "90px" },
          }}
        >
          {t("title1")}
          <br />
          {t("title2")}
        </Typography>
        <HeroLineSVG />
        <Typography
          variant="body1"
          sx={{
            mt: { xs: 2, md: 3 },
            mb: 4,
            maxWidth: 400,
            textAlign: { xs: "center", md: "left" },
            color: "#222",
            fontSize: { xs: "1rem", sm: "1.08rem", md: "18px" },
            lineHeight: { xs: "1.7rem", sm: "2rem", md: "38px" },
            fontWeight: 500,
          }}
        >
          {t("subtitle")}
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            width: { xs: "100%", md: "auto" },
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e9b838",
              color: "#0e0e11",
              px: 6,
              py: 1.5,
              borderRadius: 2,
              fontFamily: "Poppins",
              fontWeight: 500,
              textTransform: "none",
              boxShadow: "none",
              fontSize: "16px",
              lineHeight: "24px",
              width: { xs: "100%", sm: "auto" },
              mb: { xs: 1, sm: 0 },
              "&:hover": { backgroundColor: "#d1a72e" },
            }}
          >
            {t("explore")}
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#0e0e11",
              borderColor: "#0e0e11",
              px: 6,
              py: 1.5,
              borderRadius: 2,
              fontFamily: "Poppins",
              fontWeight: 500,
              textTransform: "none",
              backgroundColor: "transparent",
              fontSize: "16px",
              lineHeight: "24px",
              width: { xs: "100%", sm: "auto" },
              "&:hover": { borderColor: "#e9b838", color: "#e9b838" },
            }}
          >
            {t("demo")}
          </Button>
        </Stack>
      </Box>

      {/* Right: Laptop Image with SVGs */}
      <Box
        data-aos="fade-left"
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: { xs: 220, sm: 300, md: 350 },
          width: "100%",
          zIndex: 1,
          mt: { xs: 6, md: 0 },
        }}
      >
        {/* Top left SVG */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: -30, sm: -40, md: isAr ? 7 : 0 },
            left: { xs: 10, sm: isAr ? 71 : 45 },
            width: { xs: 60, sm: 90, md: 120 },
            zIndex: 2,
            transform: isAr ? "rotate(100deg)" : "rotate(0deg)",
          }}
        >
          <HerocircleSVG />
        </Box>
        {/* Bottom right SVG */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: -20, sm: -16 },
            right: { xs: 0, sm: 0 },
            width: { xs: 60, sm: 90, md: 120 },
            transform: isAr ? "rotate(275deg)" : "rotate(180deg)",
            zIndex: 2,
          }}
        >
          <HerocircleSVG />
        </Box>
        {/* Laptop/dashboard image */}
        <img
          src="/hero-img.png"
          alt="Dashboard on laptop"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
}
