import { Box, Divider, IconButton, Link, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { AppLogoSVG, BlackMailSVG, BlackPhoneSVG } from "../../public/SVGs";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        background: "#fff",
        borderTop: "1px solid #e0e0e0",
        pt: 3,
        pb: 1,
        mt: "auto",
      }}
    >
      <Box
        sx={{
          maxWidth: 1450,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Top Row */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            px: 3,
          }}
        >
          {/* Logo and Brand */}
          <AppLogoSVG />

          {/* Navigation Links */}
          <Box component="nav" sx={{ display: "flex", gap: 4 }}>
            <Link
              href="#home"
              underline="none"
              sx={{ color: "#222", fontSize: 14 }}
            >
              {t("home")}
            </Link>
            <Link
              href="#services"
              underline="none"
              sx={{ color: "#222", fontSize: 14 }}
            >
              {t("services")}
            </Link>
            <Link
              href="#vehicle-type"
              underline="none"
              sx={{ color: "#222", fontSize: 14 }}
            >
              {t("vehicleType")}
            </Link>
            <Link
              href="#join-agent"
              underline="none"
              sx={{ color: "#222", fontSize: 14 }}
            >
              {t("joinAgent")}
            </Link>
          </Box>
          {/* Icons */}
          <Box display="flex" gap={1.5}>
            <IconButton
              sx={{
                background: "#E9B838",
                width: 28,
                height: 28,
                p: 0,
                "&:hover": { background: "#e9b838cc" },
              }}
            >
              <BlackMailSVG />
            </IconButton>
            <IconButton
              sx={{
                background: "#E9B838",
                width: 28,
                height: 28,
                p: 0,
                "&:hover": { background: "#e9b838cc" },
              }}
            >
              <BlackPhoneSVG />
            </IconButton>
          </Box>
        </Box>
        {/* Divider */}
        <Divider sx={{ my: 2, borderColor: "#e0e0e0" }} />
        {/* Bottom Row */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            px: 3,
          }}
        >
          <Typography sx={{ color: "#222", fontSize: 12 }}>
            {t("copyright")}
          </Typography>
          <Box display="flex" gap={3}>
            <Link
              href="/terms"
              sx={{ color: "#222", fontSize: 12, textDecoration: "underline" }}
            >
              {t("terms")}
            </Link>
            <Link
              href="/cookies"
              sx={{ color: "#222", fontSize: 12, textDecoration: "underline" }}
            >
              {t("cookies")}
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
