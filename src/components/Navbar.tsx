"use client";

import { usePathname, useRouter } from "@/libs/i18n/navigation";
import { useOnClickOutside } from "@/utils/clickOutside";
import { handleLanguageSwitch } from "@/utils/helpers";
import { ActionControl } from "@/utils/mixpanel";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import DownloadMenu from "./DownloadMenu";

const Navbar = () => {
  const pathname = usePathname();
  const t = useTranslations("Header");
  const tDownload = useTranslations("Home.Download");
  const tTestimonials = useTranslations("Home.Testimonials");
  const tPartners = useTranslations("Home.Partners");
  const locale = useLocale();
  const router = useRouter();
  const getButtonColor = (isActive: boolean, isScrolled: boolean): string => {
    if (isActive) return "#FFFFFF";
    if (selectedItem === tDownload("title2")) return "#FFFFFF";
    if (isScrolled) return "#027669";
    return "#FFFFFF";
  };
  const links = [
    { name: t("home"), href: "#home" },
    { name: t("services"), href: "#features" },
    { name: t("aboutUs"), href: "#about" },
    { name: t("careers"), href: "#why-us" },
    { name: tDownload("title2"), href: "#download" },
    { name: tTestimonials("title"), href: "#testimonials" },
    { name: tPartners("title"), href: "#partners" },
  ];
  const ref = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(links[0].name);

  useOnClickOutside(ref, () => setDrawerOpen(false));

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 80);

      // Scrollspy logic
      let currentSection = "";
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop <= 100 && sectionTop >= -section.clientHeight + 100) {
            currentSection = link.name;
          }
        }
      });

      if (currentSection && currentSection !== selectedItem) {
        setSelectedItem(currentSection);
        ActionControl(`Home scrolled to section (${currentSection.trim()})`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call initially to set the active item on page load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [links, selectedItem]); // Add links and selectedItem to dependency array

  const getDisplayValue = () => {
    if (
      pathname === "/terms" ||
      pathname === "/privacy" ||
      pathname === "/cookies"
    )
      return "none";
    return drawerOpen ? "none" : "flex";
  };

  return (
    <>
      {/* Main Navbar - Hidden when drawer is open */}
      <Box
        sx={{
          width: { xs: "85%", md: "90%" },
          height: "76px",
          position: "fixed",
          top: { xs: "10px", md: "32px" },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 99999999999999,
          backdropFilter: "blur(10px)",
          display: getDisplayValue(),
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 4 },
          borderRadius: "8px",
          boxShadow: `-2px -2px 100px 0px rgba(255, 255, 255, 0.10) inset,
                     2px 2px 100px 0px rgba(66, 66, 66, 0.10) inset`,
          backgroundSize: "cover",
          backgroundRepeat: "round",
        }}
      >
        {/* Logo */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          onClick={() => {
            setSelectedItem(links[0].name);
            const section = document.querySelector("#home");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          sx={{ cursor: "pointer" }}
        >
          {scrolled && selectedItem !== tDownload("title2") ? (
            // <GreenLogoSVG />
            <></>
          ) : (
            // <Image priority src={logo} alt="logo" />
            <></>
          )}
          <Typography
            variant="h6"
            color={
              scrolled && selectedItem !== tDownload("title2")
                ? "#027669"
                : "white"
            }
            fontWeight="bold"
          >
            {t("title")}
          </Typography>
        </Box>

        {/* Desktop Nav Links */}
        <Box
          display={{ xs: "none", md: "flex" }}
          gap={2}
          ml={{ xs: 0, md: 10 }}
        >
          {links.map(({ name, href }) => {
            const isActive = selectedItem === name;
            return (
              <Button
                key={href}
                onClick={() => {
                  setSelectedItem(name);
                  const section = document.querySelector(href);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: isActive ? "bold" : 500,
                  backgroundColor: isActive
                    ? "linear-gradient(96deg, #00796B 0.34%, #05554C 48.24%, #0F9182 99.8%)"
                    : "rgba(255, 255, 255, 0.35)",
                  color: getButtonColor(isActive, scrolled),
                  fontSize: "16px",
                  boxShadow: isActive
                    ? undefined
                    : "0px 0px 10px 0px rgba(255, 255, 255, 0.10) inset",
                  display:
                    name === tDownload("title2") ||
                    name === tTestimonials("title") ||
                    name === tPartners("title")
                      ? "none"
                      : "flex",
                }}
              >
                {name}
              </Button>
            );
          })}
        </Box>

        {/* Mobile Menu Button */}
        <Box sx={{ ml: "auto", display: { xs: "block", md: "none" } }}>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Language & Download Buttons */}
        <Box display="flex" gap={2} alignItems="center">
          {/* Language Switch Button */}
          <Button
            onClick={() => handleLanguageSwitch(locale, pathname, router)}
            sx={{
              borderRadius: "8px",
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "rgba(255, 255, 255, 0.35)",
              color: "#FFFFFF",
              px: { xs: 1, md: 2 },
              minWidth: 0,
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.45)" },
              display: { xs: "none", md: "flex" },
              gap: 1,
            }}
          >
            <LanguageIcon
              fontSize="small"
              sx={{ color: scrolled ? "#027669" : "#FFFFFF" }}
            />
            <Typography
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                  color: scrolled ? "#027669" : "#FFFFFF",
                },
              }}
            >
              {t("language")}
            </Typography>
          </Button>

          {/* Download Button with Dropdown */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <DownloadMenu />
          </Box>
        </Box>
      </Box>

      {/* Close Button (only visible when drawer is open) */}
      {drawerOpen && (
        <IconButton
          onClick={() => setDrawerOpen(false)}
          sx={{
            position: "fixed",
            top: "32px",
            right: "32px",
            zIndex: 1001,
            backgroundColor: "#00796B",
            color: "white",
            "&:hover": { backgroundColor: "#005a4f" },
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Mobile Drawer */}
      <Drawer
        anchor={"left"}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            background: "linear-gradient(180deg, #00917A 0%, #006A59 100%)",
            color: "white",
            borderTopRightRadius: "12px",
            pt: 3,
          },
          zIndex: 999999,
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Logo in drawer */}
          <Box display="flex" alignItems="center" gap={1} mb={4}>
            {/* <Image src={logo} alt="logo" /> */}
            <></>
            <Typography variant="h6" color="white" fontWeight="bold">
              Mashrouk
            </Typography>
          </Box>
          {/* Nav links */}
          <List>
            {links.map(({ name, href }) => {
              const isActive = selectedItem === name;
              return (
                <ListItem
                  key={href}
                  onClick={() => {
                    setSelectedItem(name);
                    setDrawerOpen(false);
                    const section = document.querySelector(href);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  sx={{
                    backgroundColor: isActive
                      ? "rgba(255, 255, 255, 0.15)"
                      : "transparent",
                    borderRadius: "8px",
                    mb: 1,
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                    display:
                      name === tTestimonials("title") ||
                      name === tPartners("title")
                        ? "none"
                        : "flex",
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography
                        fontWeight={isActive ? "bold" : "normal"}
                        textTransform="capitalize"
                      >
                        {name}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
          {/* Language Switch Button in Drawer */}
          {/* Download button */}
          <Button
            onClick={() => handleLanguageSwitch(locale, pathname, router)}
            sx={{
              borderRadius: "8px",
              fontWeight: "bold",
              textTransform: "none",
              backgroundColor: "rgb(0 84 74 / 30%)",
              color: "#FFFFFF",
              py: 1,
              mb: 2,
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.25)" },
              display: "flex",
              gap: 1,
            }}
          >
            <LanguageIcon fontSize="small" />
            {t("language")}
          </Button>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <DownloadMenu />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
