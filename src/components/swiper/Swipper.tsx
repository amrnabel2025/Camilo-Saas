"use client";

import { Box, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import partner1 from "../../../public/parteners/1.png";
import partner2 from "../../../public/parteners/2.png";
import partner3 from "../../../public/parteners/3.png";
import partner4 from "../../../public/parteners/4.png";
import partner5 from "../../../public/parteners/5.png";
import "./marquee.css";

const partners: { image: StaticImageData; link: string }[] = [
  { image: partner1, link: "https://ejourney.sa" },
  { image: partner2, link: "https://hayya.qa" },
  { image: partner3, link: "https://www.kafd.sa/ar" },
  { image: partner4, link: "https://www.kaust.edu.sa/ar" },
  { image: partner5, link: "https://rekab.sa/ar" },
];

const OurClientsSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        px: { xs: 2, sm: 4 },
        maxWidth: "100%",
      }}
    >
      <Box
        className="marquee"
        sx={{
          flexDirection: theme.direction === "rtl" ? "row-reverse" : "row",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Gradient overlays */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "auto",
            width: { xs: 64, sm: 120, md: 192 },
            background: `linear-gradient(270deg,#FFFFFF 0%,rgba(255,255,255,0) 100%)`,
            zIndex: 10,
            transform: theme.direction === "rtl" ? "rotate(180deg)" : "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "auto",
            width: { xs: 64, sm: 120, md: 192 },
            background: `linear-gradient(90deg,#FFFFFF 0%,rgba(255,255,255,0) 100%)`,
            zIndex: 10,
            transform: theme.direction === "rtl" ? "rotate(180deg)" : "none",
          }}
        />

        {/* Duplicated scrolling logos */}
        {[...Array(2)].map((_, index) => (
          <Box
            key={index + "marquee"}
            component="ul"
            className="marquee__content"
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, sm: 4, md: 6 },
              minWidth: "100%",
              flexShrink: 0,
              willChange: "transform",
            }}
            aria-hidden={index === 1 ? "true" : undefined}
          >
            {partners.map((partner, key) => (
              <Box
                onClick={() => window.open(partner.link, "_blank")}
                key={key + 1}
                component="li"
                sx={{
                  minWidth: 120,
                  maxWidth: 180,
                  flex: "0 0 auto",
                  cursor: "pointer",
                }}
              >
                <Image
                  src={partner.image}
                  alt={`logo-${key}`}
                  width={180}
                  height={90}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurClientsSection;
