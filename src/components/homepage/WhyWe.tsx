"use client";
import { ActionControl } from "@/utils/mixpanel";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { defaultArabicImage, defaultImage, image1 } from "../../utils";
import { reasons } from "../../utils/Constants";

const WhyChooseUsSection = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const allReasons = [
    {
      id: "default",
      text: "default",
      top: 0,
      smallTop: 0,
      image: isArabic ? defaultArabicImage : defaultImage,
    },
    ...reasons,
  ];
  const [selected, setSelected] = useState("default");
  const [animateImage, setAnimateImage] = useState(false);
  const [letterColors, setLetterColors] = useState<string[]>([]);
  const [letterWeights, setLetterWeights] = useState<number[]>([]);
  const t = useTranslations("Home.WhyUs");
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [currentImage, setCurrentImage] = useState(allReasons[0].image);
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    if (selected) {
      setAnimateImage(true);
      const timer = setTimeout(() => {
        setCurrentImage(
          allReasons.find((r) => r.id === selected)?.image ?? image1
        );
        setIsScaled(isArabic && selected !== "default");
        setAnimateImage(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, isArabic]);

  useEffect(() => {
    allReasons.forEach((reason) => {
      const img = document.createElement("img");
      img.src = reason.image.src;
      console.log(reason.text, img.src);
    });
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setSelected(allReasons[index].id);
      index = (index + 1) % allReasons.length;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = t("description");
    if (selected === "default") {
      if (isArabic) {
        // For Arabic: animate by words to preserve letter connections
        const words = text.split(" ");
        let currentWordIndex = 0;
        const newColors = Array(words.length).fill("#272727");
        const newWeights = Array(words.length).fill(500);

        const wordInterval = setInterval(() => {
          if (currentWordIndex < words.length) {
            newColors[currentWordIndex] = "#00796B";
            newWeights[currentWordIndex] = 600;
            setLetterColors([...newColors]);
            setLetterWeights([...newWeights]);
            currentWordIndex++;
          } else {
            clearInterval(wordInterval);
          }
        }, 150);

        return () => clearInterval(wordInterval);
      } else {
        // For English: keep the original letter-by-letter animation
        let currentIndex = 0;
        const newColors = Array(text.length).fill("#272727");
        const newWeights = Array(text.length).fill(500);

        const colorInterval = setInterval(() => {
          if (currentIndex < text.length) {
            newColors[currentIndex] = "#00796B";
            newWeights[currentIndex] = 600;
            setLetterColors([...newColors]);
            setLetterWeights([...newWeights]);
            currentIndex++;
          } else {
            clearInterval(colorInterval);
          }
        }, 24);

        return () => clearInterval(colorInterval);
      }
    } else {
      const colors = isArabic
        ? Array(text.split(" ").length).fill("#272727")
        : Array(text.length).fill("#272727");
      const weights = isArabic
        ? Array(text.split(" ").length).fill(500)
        : Array(text.length).fill(500);
      setLetterColors(colors);
      setLetterWeights(weights);
    }
  }, [selected, t, isArabic]);

  return (
    <Box id="why-us" sx={WhyWeStyles}>
      <Box
        data-aos={isArabic ? "zoom-in-left" : "zoom-in-right"}
        data-aos-offset="-100"
        data-aos-duration="1200"
        data-aos-delay="300"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          textAlign: { xs: "center", md: "left" },
          maxWidth: { xs: "100%", md: 500 },
          p: { xs: 4, md: 2 },
        }}
      >
        <Typography sx={typographyStyles.title}>{t("title")}</Typography>

        <Typography sx={typographyStyles.description}>
          {isArabic
            ? t("description")
                .split(" ")
                .map((word, index) => (
                  <span key={`word-${index}`}>
                    <span
                      style={{
                        color: letterColors[index] || "#272727",
                        fontWeight: letterWeights[index] || 500,
                        transition: "color 0.3s ease, font-weight 0.3s ease",
                      }}
                    >
                      {word}
                    </span>
                    {index < t("description").split(" ").length - 1 && " "}
                  </span>
                ))
            : t("description")
                .split("")
                .map((letter, index) => (
                  <span
                    key={`letter-${index}`}
                    style={{
                      color: letterColors[index] || "#272727",
                      fontWeight: letterWeights[index] || 500,
                      transition: "color 0.3s ease, font-weight 0.3s ease",
                    }}
                  >
                    {letter}
                  </span>
                ))}
        </Typography>

        {/* Clickable Options */}
        <Box sx={{ width: "100%" }}>
          {reasons.map((reason) => (
            <Box
              key={reason.id}
              sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}
            >
              <Box
                sx={{
                  width: { xs: 14, sm: 18 },
                  height: { xs: 14, sm: 18 },
                  borderRadius: "50%",
                  zIndex: 11,
                  bgcolor: selected === reason.id ? "#00796b" : "gray",
                }}
              />
              <Typography
                onClick={() => setSelected(reason.id)}
                sx={{
                  ...typographyStyles.reason,
                  color: selected === reason.id ? "#272727" : "#8a8a8a",
                }}
              >
                {t(reason.text)}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mt: { xs: 4, sm: "40px" },
            position: "relative",
            width: { xs: "100%", sm: 217 },
            height: { xs: 48, sm: 60 },
          }}
        >
          <Button
            variant="contained"
            component="a"
            href="https://wa.me/+966558339229"
            target="_blank"
            rel="noopener noreferrer"
            sx={buttonStyles}
            onClick={() => ActionControl(`Clicked Whatsapp Button`)}
          >
            {t("learnMore")}
          </Button>
        </Box>
      </Box>

      <Box
        data-aos={isArabic ? "zoom-out-right" : "zoom-out-left"}
        data-aos-offset="-100"
        data-aos-duration="1200"
        data-aos-delay="300"
        sx={{ width: { xs: "100%", md: "50%" }, height: "auto" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            ...(isScaled && { transform: "scaleX(-1)" }),
            willChange: "transform",
            backfaceVisibility: "hidden",
            perspective: "1000px",
          }}
        >
          <Image
            priority
            src={currentImage}
            alt="feature image"
            style={{
              ...commonImageStyles(isMobile),
              opacity: animateImage ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

//______________________________________ S T Y L E S ______________________________________//
const WhyWeStyles = {
  height: "100%",
  minHeight: "600px",
  width: "100%",
  mx: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: { xs: "column", md: "row" },
  gap: { xs: 4, md: 0 },
  py: 8,
  overflow: "hidden",
  position: "relative",
};

const commonImageStyles = (isMobile: boolean) => ({
  width: "100%",
  height: "100%",
  maxWidth: isMobile ? "330px" : "800px",
  maxHeight: isMobile ? "330px" : "600px",
  minWidth: isMobile ? "330px" : "800px",
  minHeight: isMobile ? "330px" : "600px",
  objectFit: "contain" as const,
  opacity: 1,
  transition: "opacity 0.5s ease-in-out",
  transformOrigin: "center",
  position: "relative" as const,
  zIndex: 100,
  transformStyle: "preserve-3d" as const,
  backfaceVisibility: "hidden" as const,
});

const typographyStyles = {
  title: {
    fontSize: { xs: 36, sm: 48, md: 56 },
    fontWeight: "bold",
    lineHeight: { xs: "42px", sm: "54px", md: "62px", lg: "70px" },
    color: "#272727",
    textTransform: "capitalize",
  },
  description: {
    fontSize: { xs: 16, sm: 18 },
    lineHeight: { xs: "28px", sm: "35px" },
    width: { xs: "100%", md: 479 },
    mt: 3,
    textTransform: "capitalize",
    height: "100%",
    minHeight: "140px",
    marginBottom: { xs: -3, md: 0 },
  },
  reason: {
    fontSize: { xs: 16, sm: 18 },
    fontWeight: 600,
    lineHeight: "24px",
    textTransform: "capitalize",
    cursor: "pointer",
    zIndex: 12,
    transition: "color 0.3s ease",
    textAlign: "left",
  },
};

const buttonStyles = {
  width: { xs: "50%", md: "auto" },
  minWidth: "200px",
  height: "100%",
  backgroundColor: "#00796b",
  borderRadius: "4px",
  fontWeight: 600,
  fontSize: { xs: 14, sm: 16 },
  textTransform: "capitalize",
};

export default WhyChooseUsSection;
