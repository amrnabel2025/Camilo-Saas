"use client";
import { usePathname, useRouter } from "@/libs/i18n/navigation";
import { handleLanguageSwitch } from "@/utils/helpers";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LanguageIcon from "@mui/icons-material/Language";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

export default function Privacy() {
  const t = useTranslations("Legal.PrivacyPolicy");
  const Header = useTranslations("Header");
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const sections = t.raw("sections");

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1000px",
        backgroundColor: "#fff",
        position: "relative",
        overflow: "hidden",
        mx: "auto",
        my: 4,
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
          fontSize: { xs: "26px", md: "48px" },
          fontWeight: "bold",
          lineHeight: { xs: "54px", md: "64px" },
          color: "#00796b",
          textAlign: "center",
          mb: "32px",
        }}
      >
        {t("title")}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", mb: 2, color: "#555" }}
      >
        {t("subtitle")}
      </Typography>

      <Container>
        <Stack gap="32px" alignItems="flex-start" sx={{ width: "100%" }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t("introduction")}
          </Typography>

          {/* 1. Information We Collect */}
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            {sections.informationWeCollect.title}
          </Typography>
          <Stack component="ul" sx={{ pl: 3 }}>
            <li>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {sections.informationWeCollect.provided.title}
              </Typography>
              <ul style={{ marginTop: 4 }}>
                {sections.informationWeCollect.provided.points.map(
                  (point: string, idx: number) => (
                    <li key={"provided-" + idx}>
                      <Typography variant="body1">{point}</Typography>
                    </li>
                  )
                )}
              </ul>
            </li>
            <li style={{ marginTop: 12 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {sections.informationWeCollect.automatic.title}
              </Typography>
              <ul style={{ marginTop: 4 }}>
                {sections.informationWeCollect.automatic.points.map(
                  (point: string, idx: number) => (
                    <li key={"automatic-" + idx}>
                      <Typography variant="body1">{point}</Typography>
                    </li>
                  )
                )}
              </ul>
            </li>
            <li style={{ marginTop: 12 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {sections.informationWeCollect.thirdParty.title}
              </Typography>
              <ul style={{ marginTop: 4 }}>
                {sections.informationWeCollect.thirdParty.points.map(
                  (point: string, idx: number) => (
                    <li key={"thirdParty-" + idx}>
                      <Typography variant="body1">{point}</Typography>
                    </li>
                  )
                )}
              </ul>
            </li>
          </Stack>

          {/* 2. How We Use Your Information */}
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mt: 2 }}
          >
            {sections.howWeUse.title}
          </Typography>
          <Stack component="ul" sx={{ pl: 3 }}>
            {sections.howWeUse.points.map((point: string, idx: number) => (
              <li key={"howWeUse-" + idx}>
                <Typography variant="body1">{point}</Typography>
              </li>
            ))}
          </Stack>

          {/* 3. How We Share Your Information */}
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mt: 2 }}
          >
            {sections.howWeShare.title}
          </Typography>
          <Stack component="ul" sx={{ pl: 3 }}>
            {sections.howWeShare.points.map((point: string, idx: number) => (
              <li key={"howWeShare-" + idx}>
                <Typography variant="body1">{point}</Typography>
              </li>
            ))}
          </Stack>
          <Typography variant="body1">{sections.howWeShare.note}</Typography>

          {/* 4. Your Choices and Rights */}
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mt: 2 }}
          >
            {sections.choicesRights.title}
          </Typography>
          <Stack component="ul" sx={{ pl: 3 }}>
            {sections.choicesRights.points.map((point: string, idx: number) => (
              <li key={"choicesRights-" + idx}>
                <Typography variant="body1">{point}</Typography>
              </li>
            ))}
          </Stack>

          {/* 5. Data Security */}
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mt: 2 }}
          >
            {sections.security.title}
          </Typography>
          <Typography variant="body1">
            {sections.security.description}
          </Typography>

          {/* 6. Data Retention */}
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mt: 2 }}
          >
            {sections.retention.title}
          </Typography>
          <Typography variant="body1">
            {sections.retention.description}
          </Typography>

          {/* 7. Children's Privacy */}
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mt: 2 }}
          >
            {sections.children.title}
          </Typography>
          <Typography variant="body1">
            {sections.children.description}
          </Typography>

          {/* 8. Changes to This Policy */}
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mt: 2 }}
          >
            {sections.changes.title}
          </Typography>
          <Typography variant="body1">
            {sections.changes.description}
          </Typography>

          {/* 9. Contact Us */}
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mt: 2 }}
          >
            {sections.contact.title}
          </Typography>
          <Typography variant="body1">
            {sections.contact.description}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <b>{sections.contact.deletionRequest.split(":")[0]}:</b>{" "}
            {sections.contact.deletionRequest
              .split(":")
              .slice(1)
              .join(":")
              .trim()}
          </Typography>
          <Stack component="ul" sx={{ pl: 3, mt: -2 }}>
            <li>
              <Typography variant="body1">
                <b>Link Of Deletion:</b>{" "}
                <Link
                  href={`${sections.contact.website}`}
                  target="_blank"
                  rel="noopener"
                >
                  {sections.contact.website}
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <b>Email:</b>{" "}
                <Link href={`mailto:${sections.contact.email}`}>
                  {sections.contact.email}
                </Link>
              </Typography>
            </li>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
