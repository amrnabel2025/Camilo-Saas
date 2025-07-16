"use client";
import { Link } from "@/libs/i18n/navigation";
import { featuresTemplate } from "@/utils/constants";
import { Box, Paper, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

type OurFeaturesProps = { t: ReturnType<typeof useTranslations> };

const OurFeatures = ({ t }: OurFeaturesProps) => {
  const features = featuresTemplate.map((f) => ({
    ...f,
    title: t(f.title),
    desc: t(f.desc),
    label: t(f.label),
  }));

  function FeatureCard({
    title,
    desc,
    image,
    label,
    dataAos,
  }: {
    title: string;
    desc: string;
    image: string;
    label: string;
    dataAos?: string;
  }) {
    return (
      <Paper
        elevation={0}
        sx={{
          flex: "1 1 540px",
          maxWidth: 570,
          minWidth: 0,
          borderRadius: 4,
          p: { xs: 2, md: 3 },
          boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          mb: 2,
        }}
        data-aos={dataAos}
      >
        <Box
          sx={{
            width: "100%",
            mb: 2,
            borderRadius: 3,
            overflow: "hidden",
            background: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={image}
            alt={label}
            style={{
              width: "100%",
              maxWidth: 570,
              height: "auto",
              display: "block",
              // maxHeight: 320,
            }}
          />
        </Box>
        <Typography sx={{ fontWeight: 700, fontSize: 18, mb: 1 }}>
          {title}
        </Typography>
        <Typography sx={{ color: "#555", fontSize: 15 }}>{desc}</Typography>
      </Paper>
    );
  }

  return (
    <Box
      data-aos="fade-up"
      sx={{
        width: "100%",
        maxWidth: 1400,
        mx: "auto",
        py: { xs: 4, md: 8 },
        px: { xs: 1, md: 0 },
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: 22, md: 32 },
          textAlign: "center",
          mb: 1,
        }}
      >
        {t("sectionTitle")}
      </Typography>
      <Typography
        sx={{
          color: "#888",
          textAlign: "center",
          fontSize: { xs: 13, md: 16 },
          mb: 4,
        }}
      >
        {t("sectionSubtitle")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 8 },
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {features.map((feature, idx) => (
          <Link
            key={idx}
            href="/solutions"
            style={{
              textDecoration: "none",
              flex: "1 1 540px",
              maxWidth: 570,
              minWidth: 0,
            }}
          >
            <FeatureCard
              {...feature}
              dataAos={idx % 2 === 0 ? "fade-right" : "fade-left"}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default OurFeatures;
