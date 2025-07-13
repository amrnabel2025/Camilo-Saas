"use client";

import { BACKGROUND_VIDEOS } from "@/utils/Constants";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { LogoSVG } from "../../../public/SVGs";
import CarLoading from "../lottie/CarLoading";

const VideoBackground = () => {
  const t = useTranslations("Home.Hero");
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstActive, setIsFirstActive] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  // Preload all videos
  useEffect(() => {
    let loadedVideos = 0;

    const checkAllVideosLoaded = () => {
      loadedVideos++;
      if (loadedVideos === 2) {
        setIsLoading(false);
      }
    };

    BACKGROUND_VIDEOS.forEach((src) => {
      const vid = document.createElement("video");
      vid.src = src;
      vid.preload = "auto";

      vid.addEventListener("canplaythrough", checkAllVideosLoaded, {
        once: true,
      });
      vid.addEventListener("error", checkAllVideosLoaded, { once: true });
    });
  }, []);

  useEffect(() => {
    const currentVideo = isFirstActive ? videoRef1.current : videoRef2.current;
    if (!currentVideo) return;

    const videoSrc = BACKGROUND_VIDEOS[currentIndex];
    currentVideo.src = videoSrc;

    const playPromise = new Promise<void>((resolve) => {
      const checkReady = () => {
        if (currentVideo.readyState >= 3) {
          resolve();
        } else {
          setTimeout(checkReady, 50);
        }
      };
      checkReady();
    });

    playPromise.then(() => {
      currentVideo.play().catch((err) => {
        console.warn("Autoplay prevented:", err);
      });
    });

    const handleEnded = () => {
      const nextIndex = (currentIndex + 1) % BACKGROUND_VIDEOS.length;
      setIsFirstActive(!isFirstActive);
      setCurrentIndex(nextIndex);
    };

    currentVideo.addEventListener("ended", handleEnded);

    return () => {
      currentVideo.removeEventListener("ended", handleEnded);
    };
  }, [currentIndex, isFirstActive]);

  return (
    <Box id="home">
      {isLoading && <CarLoading />}
      <VideoContainer
        sx={{
          height: {
            xs: "calc(100vw * 13 / 16)",
            md: "100vh",
          },
        }}
      >
        {/* الفيديو النشط */}
        <VideoElement
          ref={videoRef1}
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{ opacity: isFirstActive ? 1 : 0 }}
        />

        {/* الفيديو الثاني */}
        <VideoElement
          ref={videoRef2}
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{ opacity: isFirstActive ? 0 : 1 }}
        />

        <GradientOverlay />

        <ContentContainer maxWidth="md">
          <Box
            sx={{
              width: { xs: 100, md: 200 },
              height: { xs: 100, md: 200 },
              "& svg": {
                width: "100%",
                height: "100%",
              },
              marginTop: { xs: 10, md: 0 },
            }}
          >
            {LogoSVG(200, 200)}
          </Box>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "4rem" },
              mb: 2,
            }}
          >
            {t("title")}
          </Typography>
        </ContentContainer>
      </VideoContainer>
    </Box>
  );
};

//______________________________________ S T Y L E S ______________________________________//

const VideoContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
});

const VideoElement = styled("video")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
  transition: "opacity 1s ease-in-out",
});

const GradientOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(180deg, rgba(0, 121, 107, 0.00) 0%, #00796B 100%)",
  zIndex: 1,
});

const ContentContainer = styled(Container)({
  position: "relative",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  zIndex: 2,
  color: "white",
  textAlign: "center",
});

export default VideoBackground;
