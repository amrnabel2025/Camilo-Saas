"use client";
import { usePathname, useRouter } from "@/libs/i18n/navigation";
import { handleLanguageSwitch } from "@/utils/helpers";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LanguageIcon from "@mui/icons-material/Language";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

export default function Cookies() {
  const t = useTranslations("Legal");
  const Header = useTranslations("Header");
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1000px",
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
        mx: "auto",
        my: { xs: 0, md: 2 },
      }}
    >
      <Box
        dir="ltr"
        sx={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: "auto",
          mt: 2,
        }}
      >
        <Box component="a" href={`/${locale}`}>
          <ArrowBackIcon sx={{ color: "#027669", cursor: "pointer" }} />
        </Box>

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
            gap: 1,
          }}
        >
          <LanguageIcon fontSize="small" sx={{ color: "#027669" }} />
          <Typography
            sx={{
              display: {
                xs: "none",
                md: "block",
                color: "#027669",
              },
            }}
          >
            {Header("language")}
          </Typography>
        </Button>
      </Box>

      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontSize: { xs: "26px", md: "58px" },
          fontWeight: "bold",
          lineHeight: { xs: "54px", md: "87px" },
          color: "#00796b",
          textAlign: "center",
          whiteSpace: "nowrap",
          mb: "50px",
        }}
      >
        {t("CookiesPolicy.title")}
      </Typography>

      <Container>
        <Stack gap="64px" alignItems="flex-start" sx={{ width: "100%" }}>
          {/* Types of Cookies Section */}
          <Stack gap="16px" alignItems="flex-start" sx={{ width: "100%" }}>
            <Box sx={{ pt: "8px", pb: "8px", width: "100%" }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: "bold",
                  lineHeight: { xs: "36px", md: "48px" },
                  color: "#090909",
                  whiteSpace: "nowrap",
                }}
              >
                {t("CookiesPolicy.types.title")}
              </Typography>
            </Box>
            <Stack component="ul" sx={{ pl: 2 }}>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  mb: 1,
                }}
              >
                {t("CookiesPolicy.types.essential")}
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  mb: 1,
                }}
              >
                {t("CookiesPolicy.types.analytics")}
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  mb: 1,
                }}
              >
                {t("CookiesPolicy.types.advertising")}
              </Typography>
            </Stack>
          </Stack>

          {/* Consent Section */}
          <Stack gap="16px" alignItems="flex-start" sx={{ width: "100%" }}>
            <Box sx={{ pt: "8px", pb: "8px", width: "100%" }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: "bold",
                  lineHeight: { xs: "36px", md: "48px" },
                  color: "#090909",
                  whiteSpace: "nowrap",
                }}
              >
                {t("CookiesPolicy.consent.title")}
              </Typography>
            </Box>
            <Stack component="ul" sx={{ pl: 2 }}>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  mb: 1,
                }}
              >
                {t("CookiesPolicy.consent.management")}
              </Typography>
              <Typography
                component="li"
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: "normal",
                  lineHeight: "24px",
                  color: "#090909",
                  mb: 1,
                }}
              >
                {t("CookiesPolicy.consent.newUsers")}
              </Typography>
            </Stack>
          </Stack>

          {/* Third-Party Cookies Section */}
          <Stack gap="16px" alignItems="flex-start" sx={{ width: "100%" }}>
            <Box sx={{ pt: "8px", pb: "8px", width: "100%" }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontSize: { xs: "24px", md: "32px" },
                  fontWeight: "bold",
                  lineHeight: { xs: "36px", md: "48px" },
                  color: "#090909",
                  whiteSpace: "nowrap",
                }}
              >
                {t("CookiesPolicy.thirdParty.title")}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: "normal",
                lineHeight: "24px",
                color: "#090909",
                width: "100%",
                wordBreak: "break-word",
              }}
            >
              {t("CookiesPolicy.thirdParty.description")}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
