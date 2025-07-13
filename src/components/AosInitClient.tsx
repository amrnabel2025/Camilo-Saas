"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocale } from "next-intl";

export default function AosInitClient() {
  const locale = useLocale();

  useEffect(() => {
    const onLoad = () => {
      AOS.init({
        duration: 1000,
        once: false,
        offset: 120,
      });
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }, [locale]);

  return null;
}
