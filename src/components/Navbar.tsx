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
import { signIn, signOut, useSession } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import { AppLogoSVG } from "../../public/SVGs";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();

  const links = useMemo(
    () => [
      { name: t("home"), href: "#home" },
      { name: t("services"), href: "#services" },
      { name: t("bookRide"), href: "#book-ride" },
      { name: t("joinAgent"), href: "#join-agent" },
    ],
    [t]
  );

  const ref = useRef(null);

  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(links[0]?.name || "");

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
          width: "100%",
          height: "76px",
          zIndex: 99999999999999,
          display: getDisplayValue(),
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#FFFFFF",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Logo */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          onClick={() => {
            setSelectedItem(links[0]?.name || "");
            const section = document.querySelector("#home");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          sx={{ cursor: "pointer" }}
        >
          <AppLogoSVG />
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
                variant={isActive ? "contained" : "text"}
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: isActive ? "bold" : 500,
                  backgroundColor: isActive ? "#E9B838" : "transparent",
                  color: "#000",
                  fontSize: "16px",
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
              color: "#FFFFFF",
              px: { xs: 1, md: 2 },
              minWidth: "60px",
              display: { xs: "none", md: "flex" },
              gap: 1,
              height: "40px",
            }}
          >
            <LanguageIcon fontSize="small" sx={{ color: "#000" }} />
            <Typography sx={{ color: "#000" }}>{t("language")}</Typography>
          </Button>

          {/* Download Button with Dropdown */}

          {session ? (
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#000" }}>
                {session.user?.name}
              </Typography>
              <Button
                onClick={() => signOut()}
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                {t("signOut")}
              </Button>
            </Box>
          ) : (
            <Button
              onClick={() => signIn("google")}
              variant="text"
              sx={{
                display: { xs: "none", md: "flex" },
                textTransform: "capitalize",
                borderRadius: "8px",
                fontWeight: 500,
                color: "#000",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                height: "40px",
                width: "100%",
              }}
            >
              {t("signIn")}
            </Button>
          )}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              borderRadius: "8px",
              border: "1px solid #000",
              fontWeight: "bold",
              textTransform: "none",
              gap: 1,
              background: { xs: "#E9B838", md: "white" },
              cursor: "pointer",
              minWidth: "150px",
              width: "100%",
              height: { xs: "40px", md: "35px" },
              justifyContent: "center",
              alignItems: "center",
              color: "#000",
            }}
          >
            {t("createAccount")}
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
              display: "flex",
              gap: 1,
            }}
          >
            <LanguageIcon fontSize="small" />
            {t("language")}
          </Button>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              borderRadius: "8px",
              fontWeight: "bold",
              textTransform: "none",
              pl: { xs: 2, md: 2 },
              gap: 1,
              background: { xs: "#164941", md: "white" },
              width: "100%",
              justifyContent: "space-between",
              color: { xs: "white", md: "#008e77" },
            }}
          ></Box>
          {session ? (
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ textAlign: "center", mb: 1 }}>
                {session.user?.name}
              </Typography>
              <Button
                onClick={() => signOut()}
                variant="contained"
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "8px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                {t("signOut")}
              </Button>
            </Box>
          ) : (
            <Button
              onClick={() => signIn("google")}
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                textTransform: "capitalize",
                borderRadius: "8px",
                fontWeight: 500,
                color: "#FFFFFF",
              }}
            >
              {t("signIn") + " with Google"}
            </Button>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
