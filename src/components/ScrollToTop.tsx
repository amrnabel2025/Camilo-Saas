"use client";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab } from "@mui/material";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleVisibleButton = () => {
      setShowGoTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleVisibleButton);
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showGoTop) return null;

  return (
    <Fab
      color="warning"
      onClick={scrollToTop}
      size="medium"
      sx={{
        backgroundColor: "#E9B838",
        position: "fixed",
        bottom: { xs: 16, lg: 32 },
        right: { xs: 16, lg: 32 },
        zIndex: 999999999999999,
        "&:hover": {
          backgroundColor: "#008C7D",
        },
      }}
      aria-label="scroll back to top"
    >
      <KeyboardArrowUpIcon sx={{ color: "#FFFFFF" }} />
    </Fab>
  );
};

export default ScrollToTop;
