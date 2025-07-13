"use client";
import { ActionControl } from "@/utils/mixpanel";
import { Box, Container, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { ShadowSVG2 } from "../../../public/SVGs";
import { appStore, googlePlay } from "../../utils";

// Types
interface ShadowBoxProps {
  top: number;
  left: string;
  hasShadow?: boolean;
}

interface AppButtonProps {
  href: string;
  image: string;
  delay: string;
  name: string;
}

interface TitleProps {
  t: (key: string) => string;
}

interface VideoProps {
  poster: string;
  source: string;
}

const SharingIsBlessing = () => {
  const t = useTranslations("Home.SharingIsBlessing");

  return (
    <Box id="hero" sx={styles.container}>
      <Container maxWidth="md" sx={styles.contentContainer}>
        <ShadowBox top={100} left="25%" />

        <Box sx={styles.contentWrapper}>
          <Title t={t} />

          <Typography
            data-aos="zoom-out"
            variant="subtitle1"
            sx={styles.subtitle}
          >
            {t("subtitle")}
          </Typography>

          <AppButtons />

          <Video poster="/Property 1=Position 6.png" source="/Sharing.mp4" />
        </Box>
      </Container>
    </Box>
  );
};

//______________________________________ C O N S T A N T S ______________________________________//

const APP_STORE_LINKS = {
  googlePlay: "https://play.google.com/store/games?device=windows",
  appStore: "https://apps.apple.com/app/id1592200000",
} as const;

//______________________________________ C O M P O N E N T S ______________________________________//

const ShadowBox = ({ top, left, hasShadow = true }: ShadowBoxProps) => (
  <Box sx={styles.shadowBox(top, left)}>{hasShadow && <ShadowSVG2 />}</Box>
);

const AppButton = ({ href, image, delay, name }: AppButtonProps) => (
  <Box
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    data-aos="fade-up"
    data-aos-duration="1200"
    data-aos-delay={delay}
    sx={styles.appButton(image)}
    onClick={() => ActionControl(`Clicked Download App from ${name}`)}
  />
);

const Title = ({ t }: TitleProps) => (
  <Typography
    data-aos="zoom-out"
    data-aos-duration="1200"
    data-aos-offset="100"
    variant="h1"
    component="h1"
    sx={styles.title}
  >
    <Box component="span" sx={styles.titleDesktop}>
      {t("title")}
    </Box>
  </Typography>
);

const Video = ({ poster, source }: VideoProps) => (
  <Box
    sx={{
      height: { xs: "50vh", md: "100vh" },
      width: "100%",
      overflow: "hidden",
    }}
  >
    <video autoPlay loop muted playsInline poster={poster} style={styles.video}>
      <source src={source} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Box>
);

//______________________________________ S T Y L E S ______________________________________//

const styles = {
  container: {
    width: "100%",
    height: "auto",
    background: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    pt: "50px",
  },
  shadowBox: (top: number, left: string) => ({
    overflow: "hidden",
    width: "50%",
    height: "200px",
    position: "absolute",
    top,
    left,
    background: "rgba(199, 249, 240, 0.61)",
    filter: "blur(114.99298858642578px)",
    display: { xs: "none", md: "block" },
    zIndex: 0,
  }),
  contentContainer: {
    position: "relative",
    zIndex: 100000,
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontWeight: 800,
    fontSize: { xs: "2.5rem", sm: "4rem" },
    color: "#212121",
    mb: "10px",
  },
  titleMobile: {
    display: { xs: "inline", sm: "none" },
  },
  titleDesktop: {
    textTransform: "capitalize" as const,
  },
  subtitle: {
    mb: 4,
    color: "#424242",
    zIndex: 100000,
    textTransform: "capitalize" as const,
  },
  appButtonsContainer: {
    display: "flex",
    gap: { xs: 1, sm: 2 },
    mt: { xs: 4, md: 6 },
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    zIndex: 100000,
  },
  appButton: (image: string) => ({
    width: { xs: "35%", sm: 200 },
    height: { xs: 60, sm: 80 },
    minWidth: { xs: 100, sm: 200 },
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    justifyContent: "center",
    display:"flex",
    backgroundPositionX:"center"
  }),
  video: {
    width: "100%",
    height: "100%",
    borderRadius: "16px",
    overflow: "hidden",
    borderBottom: "ridge",
    borderColor: "rgb(255 255 255 / 0%)",
  },
} as const;

const AppButtons = () => (
  <Box sx={styles.appButtonsContainer}>
    <AppButton
      href={APP_STORE_LINKS.googlePlay}
      image={googlePlay.src}
      delay="300"
      name="GooglePlay"
    />
    <AppButton
      href={APP_STORE_LINKS.appStore}
      image={appStore.src}
      delay="600"
      name="AppStore"
    />
  </Box>
);

export default SharingIsBlessing;
