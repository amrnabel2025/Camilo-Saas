"use client";

import { ActionControl } from "@/utils/mixpanel";
import { Box, Link, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
  AMKSVG,
  EmailSVG,
  PhoneSVG,
  SmallLogoSVG,
  WhitePhone1SVG,
  WhitePhoneSVG,
  WhyWeShadowSvg,
} from "../../public/SVGs/index";

const Footer = () => {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.startsWith("/ar") ? "ar" : "en";
  const homePath = `/${currentLocale}`;

  const pageLinks = [
    { key: "home", text: t("home"), href: `${homePath}#home` },
    { key: "features", text: t("our_features"), href: `${homePath}#features` },
    { key: "why_choose_us", text: t("why_choose_us"), href: `${homePath}#why-us` },
    { key: "who_we_are", text: t("who_we_are"), href: `${homePath}#about` },
  ];

  const legalLinks = [
    { key: "terms_of_use", text: t("terms_of_use"), href: `/${currentLocale}/terms` },
    { key: "privacy_policy", text: t("privacy_policy"), href: `/${currentLocale}/privacy` },
    { key: "cookie_policy", text: t("cookie_policy"), href: `/${currentLocale}/cookies` },
  ];

  const handleScrollOrRedirect = (href: string) => {
    const targetId = href.replace(homePath, ""); 

    if (pathname === homePath) {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {/* Mobile Footer */}
      <Box
        sx={{
          bgcolor: "#f5fdfc",
          py: 4,
          px: 2,
          display: { xs: "block", sm: "none" },
        }}
      >
        <Box
          onClick={() => handleScrollOrRedirect(`${homePath}#home`)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            mb: 3,
            cursor: "pointer",
          }}
        >
          <SmallLogoSVG />
          <Typography variant="h6" fontWeight="bold" color="#00796B">
            {t("company_name")}
          </Typography>
        </Box>

        {/* Contact Info */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 1,
              color: "#333",
            }}
          >
            <Box sx={{ bgcolor: "#00796B", borderRadius: "50%", p: 1 }}>
              <WhitePhoneSVG />
            </Box>
            <Box
              component="a"
              href="mailto:mashrouk.support@amk.com.sa"
              sx={{ textDecoration: "none", color: "inherit" }}
              onClick={() => ActionControl("Clicked Mail")}
            >
              <Typography variant="body2">{t("email")}</Typography>
            </Box>
          </Box>

          <Box
            component="a"
            href="https://wa.me/+966558339229"
            target="_blank"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              color: "#333",
              textDecoration: "none",
            }}
            onClick={() => ActionControl("Clicked Whatsapp Button")}
          >
            <Box sx={{ bgcolor: "#00796B", borderRadius: "50%", p: 1 }}>
              <WhitePhone1SVG />
            </Box>
            <Typography variant="body2" dir="ltr">
              {t("phone")}
            </Typography>
          </Box>
        </Box>

        {/* Pages and Legal */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            mb: 4,
          }}
        >
          {[pageLinks, legalLinks].map((section, index) => (
            <Box
              key={index}
              sx={{
                width: "calc(50% - 8px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {t(index === 0 ? "pages" : "legal")}
              </Typography>
              {section.map((item) => (
                <Typography variant="body2" key={item.key} sx={{ mb: 1.5 }}>
                  <Link
                    href={item.href}
                    underline="hover"
                    color="inherit"
                    onClick={(e) => {
                      if (item.href.includes("#")) {
                        e.preventDefault();
                        handleScrollOrRedirect(item.href);
                      }
                    }}
                  >
                    {item.text}
                  </Link>
                </Typography>
              ))}
            </Box>
          ))}
        </Box>

        {/* Branding */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 3,
            borderTop: "1px solid #ddd",
          }}
        >
          <Box
            component="a"
            href="https://www.amk.sa"
            target="_blank"
            sx={{ textDecoration: "none" }}
          >
            <Typography variant="caption" color="#00796B">
              {t("powered_by")}
            </Typography>
            <Box>
              <AMKSVG />
            </Box>
          </Box>
          <Typography variant="body2" color="#000" mt={1} textAlign="center">
            {t("copyright")}
          </Typography>
        </Box>
      </Box>

      {/* Desktop Footer */}
      <Box
        sx={{
          bgcolor: "#f5fdfc",
          px: { sm: 6, md: 10, lg: 20 },
          pt: { sm: 8, md: 12 },
          pb: 2,
          display: { xs: "none", sm: "block" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { sm: -180, md: -280 },
            left: { sm: "5%", md: "10%" },
            width: "100%",
            zIndex: 1,
            transform: { sm: "scale(0.85)", md: "scale(1)" },
          }}
        >
          <WhyWeShadowSvg />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { sm: "column", md: "row" },
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: { sm: 6, md: 4 },
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Company Info */}
          <Box sx={{ minWidth: { sm: "45%", md: 200 }, display: "flex", flexDirection: "column", gap: 2 }}>
            <Box
              onClick={() => handleScrollOrRedirect(`${homePath}#home`)}
              sx={{ cursor: "pointer" }}
              display="flex"
              alignItems="center"
              gap={1}
            >
              <SmallLogoSVG />
              <Typography variant="h6" fontWeight="bold" color="#00796B">
                {t("company_name")}
              </Typography>
            </Box>
            <Box
              component="a"
              href="mailto:mashrouk.support@amk.com.sa"
              sx={{ textDecoration: "none", color: "inherit" }}
              display="flex"
              alignItems="center"
              onClick={() => ActionControl("Clicked Mail")}
            >
              <EmailSVG />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {t("email")}
              </Typography>
            </Box>
            <Box
              component="a"
              href="https://wa.me/+966558339229"
              target="_blank"
              sx={{ textDecoration: "none", color: "inherit" }}
              display="flex"
              alignItems="center"
              onClick={() => ActionControl("Clicked Whatsapp Button")}
            >
              <PhoneSVG />
              <Typography variant="body2" dir="ltr" sx={{ ml: 1 }}>
                {t("phone")}
              </Typography>
            </Box>
          </Box>

          {/* Pages + Legal */}
          {[pageLinks, legalLinks].map((section, index) => (
            <Box key={index} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="h6" fontWeight="bold">
                {t(index === 0 ? "pages" : "legal")}
              </Typography>
              {section.map((item) => (
                <Typography key={item.key} variant="body2">
                  <Link
                    href={item.href}
                    underline="hover"
                    color="inherit"
                    target={item.href.includes("http") ? "_blank" : undefined}
                    onClick={(e) => {
                      if (item.href.includes("#")) {
                        e.preventDefault();
                        handleScrollOrRedirect(item.href);
                      }
                    }}
                  >
                    {item.text}
                  </Link>
                </Typography>
              ))}
            </Box>
          ))}
        </Box>

        {/* Bottom Branding */}
        <Box
          mt={6}
          pt={2}
          borderTop="1px solid #ddd"
          display="flex"
          justifyContent="space-between"
          flexDirection={{ sm: "row" }}
          alignItems="center"
          flexWrap="wrap"
        >
          <Box
            component="a"
            href="https://www.amk.sa"
            target="_blank"
            sx={{ textDecoration: "none" }}
            display="flex"
            flexDirection="column"
          >
            <Typography variant="caption" color="#00796B">
              {t("powered_by")}
            </Typography>
            <AMKSVG />
          </Box>
          <Typography variant="body2" color="#000">
            {t("copyright")}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
