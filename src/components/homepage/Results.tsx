"use client";
import { statCardsTemplate } from "@/utils/constants";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import {
  CarSVG,
  HeroLineSVG,
  ResultShapeSVG,
  RightArrowSVG,
  SittingsSVG,
  StarsSVG,
  TimerSVG,
} from "../../../public/SVGs";

type HappyClientProps = { t: ReturnType<typeof useTranslations> };

const Results = ({ t }: HappyClientProps) => {
  const iconMap = {
    SittingsSVG,
    StarsSVG,
    CarSVG,
    TimerSVG,
  };
  const statCards: Array<{
    value: string;
    label: string;
    desc: string;
    Icon: React.ElementType;
  }> = statCardsTemplate.map((card) => ({
    ...card,
    label: t(card.label),
    desc: t(card.desc),
    Icon: iconMap[card.iconKey as keyof typeof iconMap],
  }));

  function StatCard({
    value,
    label,
    desc,
    Icon,
  }: {
    value: string;
    label: string;
    desc: string;
    Icon: React.ElementType;
  }) {
    return (
      <Paper
        elevation={0}
        sx={{
          flex: 1,
          p: { xs: 1.5, md: 2 },
          background:
            "linear-gradient(110deg, rgba(215, 155, 27, 0.12) -0.09%, rgba(254, 248, 161, 0.12) 97.44%)",
          borderRadius: 3,
          minHeight: 110,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#E9B838",
              mr: 1,
              fontSize: { xs: 20, md: 38 },
            }}
          >
            {value}
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: 600, mb: 0.5, fontSize: "18px" }}>
          {label}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography
            sx={{ color: "#666", fontSize: 13, width: "60%", mt: -1 }}
          >
            {desc}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
            <Icon />
          </Box>
        </Box>
      </Paper>
    );
  }

  return (
    <Box
      data-aos="fade-up"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "stretch", md: "center" },
        justifyContent: { xs: "flex-start", md: "space-around" },
        px: { xs: 1, sm: 2, md: 8 },
        py: { xs: 4, md: 0 },
        gap: { xs: 6, md: 4 },
        background: "linear-gradient(90deg, #fff7e6 0%, #fff 100%)",
      }}
    >
      {/* Left Side */}
      <Box sx={{ flex: 1, minWidth: 280, width: "100%" }}>
        {/* Heading with accent */}
        <Box sx={{ position: "relative", mb: 2 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.7rem", md: "48px" },
              lineHeight: 1.2,
              mb: 2,
              zIndex: 10,
            }}
          >
            {t("sectionTitle")}
            <br />
            {t("sectionSubtitle")}
          </Typography>
          <HeroLineSVG />
          <Box sx={{ position: "absolute", top: -45, left: -65, zIndex: 1 }}>
            <ResultShapeSVG />
          </Box>
        </Box>
        {/* Subheading */}
        <Typography
          sx={{
            color: "#878787",
            mb: 4,
            fontSize: { xs: 14, md: 20 },
            lineHeight: "30px",
            width: { xs: "100%", md: "70%" },
          }}
        >
          {t("sectionSubtitle2")}
        </Typography>
        {/* Stat Cards 2x2 Flexbox */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            data-aos="fade-right"
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <StatCard {...statCards[0]} />
            <StatCard {...statCards[1]} />
          </Box>
          <Box
            data-aos="fade-left"
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <StatCard {...statCards[2]} />
            <StatCard {...statCards[3]} />
          </Box>
        </Box>
      </Box>

      {/* Right Side: Image and Button */}
      <Box
        sx={{
          flex: 1,
          minWidth: 280,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-end", lg: "center" },
          justifyContent: "space-around",
          position: "relative",
          mt: { xs: 4, md: 0 },
          minHeight: { xs: 300, md: 850 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end", lg: "flex-end" },
            width: "100%",
            maxWidth: 500,
            mb: { xs: 2, md: 4 },
          }}
        >
          <Button
            sx={{
              backgroundColor: "#E9B838",
              color: "#000",
              borderRadius: "8px",
              textTransform: "capitalize",
              fontSize: { xs: "13px", md: "14px" },
              fontWeight: 600,
              px: 3,
              py: 1.5,
              display: "flex",
              alignItems: "center",
              gap: 1,
              boxShadow: "none",
              minWidth: 150,
              "&:hover": {
                backgroundColor: "#E9B838",
              },
            }}
          >
            {t("button")}
            <RightArrowSVG />
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/result-img.png"
            alt="Results visual"
            style={{
              width: "100%",
              borderRadius: 24,
              background: "#f5e1a1",
              display: "block",
              objectFit: "cover",
              maxHeight: 400,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Results;
