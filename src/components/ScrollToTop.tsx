"use client";

import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
        backgroundColor: "#008C7D",
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
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default ScrollToTop;
