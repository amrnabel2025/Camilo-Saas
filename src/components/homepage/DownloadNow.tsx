"use client";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import {
  Phone1,
  Phone2,
  Phone4,
  downloadForArabic,
  googlePlay,
  partenerBackground,
  whiteAppStore,
} from "../../utils";

import { ActionControl } from "@/utils/mixpanel";
import { useLocale, useTranslations } from "next-intl";

interface PhoneImageProps {
  src: string;
  alt: string;
  delay: number;
  isArabic: boolean;
  sx?: SxProps<Theme>;
}

interface DownloadButtonProps {
  href: string;
  delay: number;
  backgroundImage: string;
  width?: string | number;
  name: string;
}

const DownloadSection = () => {
  const t = useTranslations("Home.Download");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <Box id="download" sx={getDownloadContainerStyles(locale)}>
      {/* Left side: Text */}
      <Box sx={containerStyles.textContainer}>
        <Typography
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="300"
          sx={typographyStyles.title}
        >
          {t("title")} <br />
          
          {t("title2")}
        </Typography>

        <Typography
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="400"
          sx={typographyStyles.description}
        >
          {t("description")}
        </Typography>

        <Box sx={containerStyles.buttonContainer}>
          <DownloadButton
            href="https://play.google.com/store/games?device=windows"
            delay={700}
            backgroundImage={googlePlay.src}
            name="GooglePlay"
          />
          <DownloadButton
            href="https://apps.apple.com/app/id1592200000"
            delay={800}
            backgroundImage={whiteAppStore.src}
            name="AppStore"
          />
        </Box>
      </Box>

      {/* Right side: Images */}
      <Box sx={containerStyles.imageContainer}>
        <PhoneImage
          src={Phone1.src}
          alt="Image 1"
          delay={300}
          isArabic={isArabic}
          sx={{
            right: { xs: "auto", md: 150 },
            left: { xs: "40%", md: "auto" },
            transform: { xs: "translateX(-50%)", md: "none" },
            bottom: { xs: -140, md: -280 },
            zIndex: 10000,
          }}
        />
        <PhoneImage
          src={Phone2.src}
          alt="Image 2"
          delay={400}
          isArabic={isArabic}
          sx={{
            right: { xs: "auto", md: 0 },
            left: { xs: "25%", md: "auto" },
            transform: { xs: "translateX(-50%)", md: "none" },
            bottom: { xs: -120, md: -250 },
            zIndex: 1000,
            height: { xs: "300px", md: "auto" },
          }}
        />
        <PhoneImage
          src={Phone4.src}
          alt="Image 3 Mobile"
          delay={500}
          isArabic={isArabic}
          sx={{
            bottom: { xs: -100, md: -210 },
            zIndex: 100,
            height: { xs: "300px", md: "450px" },
            right: { xs: "auto", md: -130 },
            left: { xs: "8%", md: "auto" },
            transform: { xs: "translateX(-50%)", md: "none" },
          }}
        />
      </Box>
    </Box>
  );
};

//______________________________________ C O M P O N E N T S ______________________________________//

const PhoneImage = ({ src, alt, delay, isArabic, sx }: PhoneImageProps) => (
  <Box
    data-aos={isArabic ? "fade-right" : "fade-left"}
    data-aos-duration="1200"
    data-aos-delay={delay}
    data-aos-offset="-100"
    component="img"
    src={src}
    alt={alt}
    sx={{
      position: "absolute",
      zIndex: 100,
      height: { xs: "280px", md: "auto" },
      width: { xs: "auto", md: "auto" },
      ...sx,
    }}
  />
);

const DownloadButton = ({
  href,
  delay,
  backgroundImage,
  width = "45%",
  name,
}: DownloadButtonProps) => (
  <Box
    component="a"
    href={href}
    target="_blank"
    data-aos="fade-up"
    data-aos-duration="1200"
    data-aos-offset="-100"
    data-aos-delay={delay}
    sx={{
      width: { xs: width, sm: 200 },
      height: { xs: 60, sm: 80 },
      minWidth: { xs: 100, sm: 200 },
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    }}
    onClick={() => ActionControl(`Clicked Download App from ${name}`)}
  />
);

//______________________________________ S T Y L E S ______________________________________//

const typographyStyles = {
  title: {
    fontSize: { xs: "40px", md: "68px" },
    fontWeight: 700,
    lineHeight: { xs: "46px", md: "80px" },
    color: "#fff",
    textTransform: "capitalize" as const,
    textAlign: { xs: "center", md: "left" },
  },
  description: {
    fontSize: { xs: "18px", md: "20px" },
    fontWeight: 400,
    lineHeight: { xs: "26px", md: "30px" },
    color: "#fff",
    textTransform: "capitalize" as const,
    mt: 2,
    textAlign: { xs: "center", md: "left" },
  },
};

const containerStyles = {
  textContainer: {
    maxWidth: { xs: "100%", md: "50%" },
    display: "flex",
    flexDirection: "column",
    gap: 1,
    alignItems: { xs: "center", md: "flex-start" },
    mb: { xs: 4, md: 0 },
  },
  buttonContainer: {
    display: "flex",
    gap: { xs: 1, sm: 2 },
    mt: { xs: 4, md: 6 },
    flexWrap: "wrap",
    width: "100%",
    position: "relative",
    zIndex: 100,
    justifyContent: { xs: "center", md: "flex-start" },
  },
  imageContainer: {
    display: "flex",
    position: { xs: "absolute", md: "relative" },
    bottom: { xs: 150, md: "auto" },
    left: { xs: "50%", md: "auto" },
    transform: { xs: "translateX(-50%)", md: "none" },
    width: { xs: "100%", md: "auto" },
    height: { xs: "300px", md: "auto" },
    maxWidth: "500px",
  },
};

const getDownloadContainerStyles = (locale: string) => ({
  width: "100%",
  height: { xs: "auto", md: "600px" },
  mt: "56px",
  backgroundImage: `url(${locale === "ar" ? downloadForArabic.src : partenerBackground.src})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "space-between",
  alignItems: "center",
  p: { xs: "32px", md: "64px 64px" },
  boxSizing: "border-box",
  overflow: "hidden",
  pb: { xs: "320px", md: "64px" },
  position: "relative",

  pt: { xs: 10, md: 0 },
});

export default DownloadSection;
