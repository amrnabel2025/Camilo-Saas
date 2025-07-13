"use client";
import { Box, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { appStore, googlePlay, yourRide } from "../../utils";

interface AppButtonProps {
  href: string;
  image: string;
  delay: string;
}

interface DescriptionProps {
  t: (key: string) => string;
  isArabic: boolean;
}

const YourRide = () => {
  const isArabic = useLocale() === "ar";
  const t = useTranslations("Home.YourRide");

  return (
    <Box sx={styles.container}>
      <Box id="features" sx={styles.contentWrapper}>
        <ContentSection t={t} isArabic={isArabic} />
        <ImageSection />
      </Box>
    </Box>
  );
};

const APP_STORE_LINKS = {
  googlePlay: "https://play.google.com/store/games?device=windows",
  appStore: "https://apps.apple.com/app/id1592200000",
} as const;

//______________________________________ C O M P O N E N T S ______________________________________//
const AppButton = ({ href, image, delay }: AppButtonProps) => (
  <Box
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    data-aos="fade-up"
    data-aos-duration="1200"
    data-aos-delay={delay}
    sx={styles.appButton(image)}
  />
);

const Description = ({ t, isArabic }: DescriptionProps) => {
  if (isArabic) {
    return (
      <Typography sx={styles.description}>
        <Box component="span" sx={styles.descriptionText}>
          {t("description1")}
        </Box>
      </Typography>
    );
  }

  return (
    <Typography sx={styles.description}>
      <Box component="span" sx={styles.descriptionText}>
        {t("description1")}
      </Box>
      <Box component="span" sx={styles.descriptionHighlight}>
        {t("description2")}{" "}
      </Box>
      <Box component="span" sx={styles.descriptionText}>
        {t("description3")}{" "}
      </Box>
      <Box component="span" sx={styles.descriptionHighlight}>
        {t("description4")}{" "}
      </Box>
      <Box component="span" sx={styles.descriptionText}>
        {t("description5")}
      </Box>
    </Typography>
  );
};

const ContentSection = ({
  t,
  isArabic,
}: {
  t: (key: string) => string;
  isArabic: boolean;
}) => (
  <Box
    data-aos="fade-down"
    data-aos-offset="100"
    data-aos-duration="1200"
    data-aos-delay="300"
    sx={styles.contentSection}
  >
    <Typography sx={styles.title}>
      {t("title")}{" "}
      {isArabic && (
        <Box component="span" sx={{ ...styles.title, display: "block" }}>
          {t("titleHighlight")}
        </Box>
      )}
    </Typography>

    <Description t={t} isArabic={isArabic} />

    <Box sx={styles.appButtonsContainer}>
      <AppButton
        href={APP_STORE_LINKS.googlePlay}
        image={googlePlay.src}
        delay="300"
      />
      <AppButton
        href={APP_STORE_LINKS.appStore}
        image={appStore.src}
        delay="600"
      />
    </Box>
  </Box>
);

const ImageSection = () => (
  <Box
    data-aos={"zoom-in"}
    data-aos-offset="-100"
    data-aos-duration="1200"
    data-aos-delay="300"
    className="custom-aos"
    sx={styles.imageSection}
  >
    <Image src={yourRide} alt="Your Ride" style={styles.mainImage} />
  </Box>
);

//______________________________________ S T Y L E S ______________________________________//
const styles = {
  container: {
    width: "100%",
    minHeight: { xs: "auto", md: "741px" },
    backgroundColor: "rgb(220 237 235)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: { xs: "column", md: "row" },
    width: "100%",
    maxWidth: { xs: "100%", lg: "1600px" },
    position: "relative",
    zIndex: 2,
    p: "0 30px",
    overflow: "hidden",
  },
  contentSection: {
    position: "relative",
    width: { xs: "100%", md: "45%" },
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", md: "flex-start" },
    pt: { xs: 4, md: 0 },
  },
  title: {
    fontSize: { xs: "32px", sm: "40px", md: "56px" },
    fontWeight: 800,
    lineHeight: { xs: "40px", sm: "48px", md: "70px", lg: "78px" },
    color: "#272727",
    textTransform: "capitalize" as const,
    mb: 3,
    zIndex: 2,
    textAlign: { xs: "center", md: "left" },
  },
  description: {
    fontSize: { xs: "16px", md: "18px" },
    fontWeight: 500,
    lineHeight: { xs: "28px", md: "35px" },
    width: "100%",
    maxWidth: "524px",
    zIndex: 2,
    textAlign: { xs: "center", md: "left" },
  },
  descriptionText: {
    color: "#272727",
    textTransform: "capitalize" as const,
  },
  descriptionHighlight: {
    color: "#00796B",
    textTransform: "capitalize" as const,
    fontWeight: "bold",
  },
  appButtonsContainer: {
    display: "flex",
    gap: { xs: 1, sm: 2 },
    mt: { xs: 4, md: 6 },
    flexWrap: "wrap",
    width: "100%",
    justifyContent: { xs: "center", md: "flex-start" },
  },
  appButton: (image: string) => ({
    width: { xs: "25%", sm: 200 },
    height: { xs: 65, sm: 85 },
    minWidth: { xs: 100, sm: 200 },
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  }),
  imageSection: {
    position: "relative",
    width: { xs: "100%", md: "55%" },
    mb: { xs: 4, md: 0 },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    width: "100%",
    height: "100%",
    maxWidth: "646.696px",
    maxHeight: "709px",
  },
} as const;

export default YourRide;
