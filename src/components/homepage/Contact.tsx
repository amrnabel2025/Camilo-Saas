"use client";

import { useIsAr } from "@/hooks/useIsAr";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import {
  CircleImageSVG,
  CirclsSVG,
  ContactSVG,
  HeroLineSVG,
  LargeDotSVG,
  LocationSVG,
  MailSVG,
  MediamDotSVG,
  PhoneSVG,
  SmallDotSVG,
} from "../../../public/SVGs";

export default function Main({ t }: { t: any }) {
  const isAr = useIsAr();
  return (
    <Box
      data-aos="fade-up"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, md: 2 },
        alignItems: "flex-start",
        mx: "auto",
        width: "100%",
        maxWidth: "1440px",
        pb: { xs: 6, md: 20 },
        overflow: "hidden",
        flexWrap: "wrap",
        px: { xs: 1, md: 0 },
      }}
    >
      {/* Contact Us Button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, md: 3 },
          p: { xs: 0.5, md: 1.25 },
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#fff",
            borderRadius: 2,
            border: "1px solid #d0d5dd",
            px: 1.5,
            py: 1,
            width: "fit-content",
            cursor: "pointer",
            mx: { xs: "auto", md: 0 },
          }}
        >
          <Box sx={{ width: 20, height: 20 }}>{<ContactSVG />}</Box>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, color: "#344054" }}
          >
            {t("contactUs")}
          </Typography>
        </Box>

        {/* Heading and CTA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: { xs: "center", md: "center" },
            flexWrap: "wrap",
            width: "100%",
            gap: { xs: 2, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: 24, sm: 28, md: 48 },
              fontWeight: "bold",
              lineHeight: { xs: "32px", sm: "36px", md: "61.6px" },
              color: "#000",
              maxWidth: { xs: "100%", md: 726 },
              textAlign: { xs: "center", md: "inherit" },
              mb: { xs: 1, md: 0 },
            }}
          >
            {t("heading")}
          </Typography>

          <Button
            variant="outlined"
            sx={{
              mr: { xs: 0, md: isAr ? 0 : 2 },
              ml: { xs: 0, md: isAr ? 4 : 0 },
              background: isAr
                ? "linear-gradient(270deg, #D79B1B 0%, #FEF8A1 100%)"
                : "linear-gradient(90deg, #D79B1B 0%, #FEF8A1 100%)",

              "&:hover": {
                background: isAr
                  ? "linear-gradient(270deg, #D79B1B 0%, #FEF8A1 100%)"
                  : "linear-gradient(90deg, #D79B1B 0%, #FEF8A1 100%)",
              },

              color: "#222",
              borderColor: "#E9B838",
              borderRadius: 2,
              fontWeight: 700,
              fontSize: { xs: 14, md: 16 },
              px: { xs: 2, md: 6 },
              py: { xs: 1, md: 1.5 },
              boxShadow: "0 2px 8px 0 rgba(233,184,56,0.12)",

              textTransform: "none",
              width: { xs: "100%", md: "fit-content" },
              alignSelf: { xs: "center", md: "unset" },
            }}
          >
            {t("requestDemo")}
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "100%", my: { xs: 2, md: 0 } }}>
        <HeroLineSVG />
      </Box>
      <Box
        data-aos="fade-up"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 2 },
          width: "100%",
          justifyContent: { xs: "center", md: "center" },
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          data-aos="fade-right"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 2 },
            flex: 1,
            position: "relative",
            minWidth: { xs: "100%", md: "500px" },
          }}
        >
          {/* Sub Text */}
          <Typography
            sx={{
              maxWidth: { xs: "100%", md: 512 },
              fontFamily: "Poppins",
              fontSize: { xs: 15, sm: 18, md: 24 },
              lineHeight: { xs: "22px", sm: "28px", md: "36px" },
              color: "#393939",
              textAlign: { xs: "center", md: "inherit" },
              mb: { xs: 2, md: 0 },
            }}
          >
            {t.rich("subheading", {
              camelo: (chunks: any) => (
                <Box
                  component="span"
                  sx={{ fontWeight: "bold", color: "#e9b838" }}
                >
                  {chunks}
                </Box>
              ),
              gray: (chunks: any) => (
                <Box component="span" sx={{ color: "#878787" }}>
                  {chunks}
                </Box>
              ),
            })}
          </Typography>

          {/* Contact Info Box */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: 1.5, md: 2 },
              p: { xs: 2, md: 3 },
              bgcolor: "#fff",
              borderRadius: 2,
              boxShadow: "0 0 4px rgba(0,0,0,0.08)",
              maxWidth: { xs: "100%", md: 400 },
              position: "relative",
              zIndex: 999999999,
              alignSelf: { xs: "center", md: "flex-start" },
            }}
          >
            {[
              {
                label: t("emailLabel"),
                value: t("emailValue"),
                icon: <MailSVG />,
              },
              {
                label: t("phoneLabel"),
                value: t("phoneValue"),
                icon: <PhoneSVG />,
              },
              {
                label: t("addressLabel"),
                value: t("addressValue"),
                icon: <LocationSVG />,
              },
            ].map((item) => (
              <Box
                key={item.label}
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  border: "1px solid rgba(233,184,56,0.22)",
                  borderRadius: 2,
                  p: { xs: 1, md: 2 },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 36, md: 48 },
                    height: { xs: 36, md: 48 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(233, 184, 56, 0.16)",
                    borderRadius: "16px",
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "rgba(0,0,0,0.5)", fontFamily: "Poppins" }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 600,
                      fontSize: { xs: 12, md: 14 },
                      textDecoration:
                        item.label === "Email:" ? "underline" : "none",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          {/* Responsive SVG Dots - hide or reposition on mobile */}
          {/* Only show these SVGs on md+ screens */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 0,
              left: 156,
              zIndex: 999,
            }}
          >
            <CirclsSVG />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 17,
              left: 456,
              zIndex: 999,
            }}
          >
            <SmallDotSVG />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 500,
              left: 556,
              zIndex: 999,
            }}
          >
            <MediamDotSVG />
          </Box>
        </Box>
        <Box
          data-aos="fade-left"
          sx={{
            position: "relative",
            width: { xs: "100%", md: "auto" },
            mt: { xs: 4, md: 0 },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: { xs: "center", md: "flex-end" },
            minHeight: { xs: 220, md: 550 },
            maxWidth: { xs: "100%", md: 550 },
            mx: { xs: "auto", md: 0 },
          }}
        >
          {/* Only show these SVGs on md+ screens */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 400,
              right: 510,
              zIndex: 999,
            }}
          >
            <LargeDotSVG />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 220,
              right: -200,
              zIndex: 99,
            }}
          >
            <CirclsSVG />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: -30,
              right: 30,
              zIndex: 99,
              display: { xs: "none", md: "block" },
            }}
          >
            <CircleImageSVG />
          </Box>

          <Box
            sx={{
              width: { xs: 220, sm: 320, md: 550 },
              height: { xs: 220, sm: 320, md: 550 },
              position: "relative",
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Image
              src="/contact-img.png"
              alt="parteners"
              fill
              style={{
                borderRadius: "688.5px",
                border: "7px solid #E9B838",
                zIndex: 99999,
                objectFit: "cover",
                transform: isAr ? "scaleX(-1)" : "none",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
