"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import {
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

export default function Main() {
  return (
    <Box
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
            borderRadius: 1,
            border: "1px solid #d0d5dd",
            px: 1.5,
            py: 1,
            width: "fit-content",
          }}
        >
          <Box sx={{ width: 20, height: 20 }}>{<ContactSVG />}</Box>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, color: "#344054" }}
          >
            Contact Us
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
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: 28, sm: 36, md: 48 },
              fontWeight: "bold",
              lineHeight: { xs: "36px", sm: "48px", md: "61.6px" },
              color: "#000",
              maxWidth: { xs: "100%", md: 726 },
              textAlign: { xs: "left", md: "inherit" },
            }}
          >
            Get in Touch & Request a Demo
          </Typography>

          <Button
            variant="outlined"
            sx={{
              background:
                "linear-gradient(90deg, #D79B1B -7.65%, #FEF8A1 99.94%)",

              color: "#222",
              borderColor: "#E9B838",
              borderRadius: 2,
              fontWeight: 700,
              fontSize: { xs: 14, md: 16 },
              px: { xs: 2, md: 4 },
              py: { xs: 1, md: 1.5 },
              boxShadow: "0 2px 8px 0 rgba(233,184,56,0.12)",
              "&:hover": {
                background:
                  "linear-gradient(90deg, #D79B1B -7.65%, #FEF8A1 99.94%)",
                color: "#222",
                borderColor: "#E9B838",
              },
              textTransform: "none",
              width: "fit-content",
            }}
          >
            Request a Personalized Demo
          </Button>
        </Box>
      </Box>
      <HeroLineSVG />
      <Box
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
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 2 },
            flex: 1,
            position: "relative",
            mb: { xs: 4, md: 0 },
            minWidth: { xs: "100%", md: "500px" },
          }}
        >
          {/* Sub Text */}
          <Typography
            sx={{
              maxWidth: { xs: "100%", md: 512 },
              fontFamily: "Poppins",
              fontSize: { xs: 16, sm: 18, md: 24 },
              lineHeight: { xs: "24px", sm: "28px", md: "36px" },
              color: "#393939",
              textAlign: { xs: "left", md: "inherit" },
            }}
          >
            Ready to revolutionize your fleet operations?{" "}
            <Box component="span" sx={{ color: "#878787" }}>
              Contact{" "}
            </Box>
            <Box component="span" sx={{ fontWeight: "bold", color: "#e9b838" }}>
              Camelo
            </Box>
            <Box component="span" sx={{ color: "#878787" }}>
              {" "}
              today for a personalized consultation or to schedule a live demo.
            </Box>
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
            }}
          >
            {[
              {
                label: "Email:",
                value: "support.camelo@amk.com.sa",
                icon: <MailSVG />,
              },
              {
                label: "Phone:",
                value: "+966 53 006 1555",
                icon: <PhoneSVG />,
              },
              {
                label: "Address:",
                value: "Saudi Arabia, Al-Riyadh, Wadah st.",
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
          sx={{
            position: "relative",
            width: { xs: "100%", md: "auto" },
            mt: { xs: 4, md: 0 },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          {/* Only show these SVGs on md+ screens */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: 400,
              right: 450,
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

          <Image
            src="/contact-img.png"
            alt="parteners"
            width={500}
            height={500}
            style={{
              borderRadius: "688.5px",
              border: "7px solid #E9B838",
              zIndex: 99999,
              position: "relative",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
