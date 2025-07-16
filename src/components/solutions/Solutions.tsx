"use client";
import { Link } from "@/libs/i18n/navigation";
import {
  costEffectiveTemplate,
  futureProofTemplate,
  onboardingTemplate,
  solutionsTemplate,
} from "@/utils/constants";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import {
  Onboarding1SVG,
  Onboarding2SVG,
  Onboarding3SVG,
  Operations1SVG,
  Operations2SVG,
  Operations3SVG,
  RightArrowSVG,
  Scalability1SVG,
  Scalability2SVG,
  Scalability3SVG,
  Solution1SVG,
  Solution2SVG,
  Solution3SVG,
  Solution4SVG,
  Solution5SVG,
} from "../../../public/SVGs";

const Solutions = ({ t }: SolutionsProps) => {
  // Map templates to actual data with icons and translations
  const solutions = solutionsTemplate.map((item) => ({
    id: item.id,
    icon: iconMap[item.iconKey],
    title: t(item.titleKey),
    description: t(item.descKey),
  }));

  const costEffective = costEffectiveTemplate.map((item) => ({
    icon: iconMap[item.iconKey],
    title: t(item.titleKey),
    description: t(item.descKey),
  }));

  const onboarding = onboardingTemplate.map((item) => ({
    icon: iconMap[item.iconKey],
    title: t(item.titleKey),
    description: t(item.descKey),
  }));

  const futureProof = futureProofTemplate.map((item) => ({
    icon: iconMap[item.iconKey],
    title: t(item.titleKey),
    description: t(item.descKey),
  }));

  return (
    <Container maxWidth="xl" sx={{ py: 8 }} data-aos="fade-up">
      <Grid container spacing={4} alignItems="flex-start">
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ mt: { xs: 8, md: 20 } }}
          data-aos="fade-right"
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            fontWeight={700}
            sx={{ fontSize: { xs: 24, md: 32 } }}
          >
            {t("heroTitle")}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: { xs: 16, md: 20 } }}
          >
            {t("heroSubtitle")}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 5 }} data-aos="fade-left">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src="/solution-img.png"
              alt="Fleet Management"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Key Solutions Section */}
      <Box data-aos="fade-up">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          fontWeight={700}
        >
          {t("keySolutionsTitle")}
        </Typography>
        <SolutionList solutions={solutions} t={t} />
      </Box>

      {/* Cost Effective Scalability Section */}
      <Box sx={{ my: 15 }} data-aos="fade-up">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          fontWeight={700}
        >
          {t("costEffectiveScalabilityTitle")}
        </Typography>
        <Typography
          variant="h6"
          color="#656565"
          textAlign="center"
          sx={{ mb: 4, fontSize: "20px", fontWeight: 400 }}
          maxWidth={1000}
          mx="auto"
        >
          {t("costEffectiveScalabilityDesc")}
        </Typography>
        <SectionGridCards
          items={costEffective}
          borderLogic={(index) =>
            index === 0 || index === 2 ? "1px solid #E9B838" : "none"
          }
        />
      </Box>

      {/* Quick Start Onboarding Section */}
      <Box sx={{ my: 15 }} data-aos="fade-up">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          fontWeight={700}
        >
          {t("quickStartOnboardingTitle")}
        </Typography>
        <Typography
          variant="h6"
          color="#656565"
          textAlign="center"
          sx={{ mb: 4, fontSize: "20px", fontWeight: 400 }}
          maxWidth={1000}
          mx="auto"
        >
          {t("quickStartOnboardingDesc")}
        </Typography>
        <SectionGridCards
          items={onboarding}
          borderLogic={(index) => (index === 1 ? "1px solid #E9B838" : "none")}
        />
      </Box>

      {/* Future Proof Section */}
      <Box data-aos="fade-up">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          fontWeight={700}
        >
          {t("futureProofTitle")}
        </Typography>
        <Typography
          variant="h6"
          color="#656565"
          textAlign="center"
          sx={{ mb: 4, fontSize: "20px", fontWeight: 400 }}
          maxWidth={900}
          mx="auto"
        >
          {t("futureProofDesc")}
        </Typography>
        <SectionGridCards
          items={futureProof}
          borderLogic={(index) =>
            index === 0 || index === 2 ? "1px solid #E9B838" : "none"
          }
        />
      </Box>
    </Container>
  );
};

// Reusable component for grid card sections
const SectionGridCards = ({
  items,
  borderLogic,
}: {
  items: { icon: React.ReactNode; title: string; description: string }[];
  borderLogic?: (index: number) => string;
}) => (
  <Grid container spacing={4}>
    {items.map((item, index) => (
      <Grid size={{ xs: 12, md: 4 }} key={index}>
        <Card
          sx={{
            borderRadius: "16px",
            minHeight: "250px",
            border: borderLogic ? borderLogic(index) : undefined,
          }}
        >
          <CardContent sx={{ textAlign: "center", p: 4 }}>
            <Box sx={{ mb: 2, height: 60 }}>{item.icon}</Box>
            <Typography variant="h6" component="h3" fontWeight={700} mb={1}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

// Reusable component for the main solutions list
const SolutionList = ({
  solutions,
  t,
}: {
  solutions: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  t: ReturnType<typeof useTranslations>;
}) => (
  <Grid container spacing={4} sx={{ mt: 4 }}>
    {solutions.map((solution, index) => (
      <Grid size={12} key={index}>
        <Link
          href={`/solutions/${solution.id}`}
          style={{ textDecoration: "none" }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, md: 3 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              gap: { xs: 2, md: 3 },
              borderRadius: "16px",
              border: "1px dashed #d0d5dd",
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: { xs: 56, sm: 64, md: 80 },
                height: { xs: 56, sm: 64, md: 80 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: { xs: 1, md: 0 },
              }}
            >
              {solution.icon}
            </Box>
            <Box
              sx={{
                flex: 1,
                minWidth: 0,
                mb: { xs: 2, md: 0 },
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                fontWeight={700}
                sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}
              >
                {solution.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: { xs: 13, sm: 15, md: 16 }, mt: 0.5 }}
              >
                {solution.description}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                ml: { xs: 0, md: "auto" },
                mt: { xs: 1, md: 0 },
                width: { xs: "100%", md: "auto" },
                justifyContent: { xs: "flex-end", md: "flex-end" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  minWidth: { xs: 120, sm: 140, md: 150 },
                  fontSize: { xs: 13, sm: 15, md: 16 },
                  borderRadius: "20px",
                  px: { xs: 2, md: 3 },
                  py: { xs: 0.5, md: 1 },
                  color: "#000",
                  fontWeight: "bold",
                  background:
                    "linear-gradient(90deg, #D79B1B 0%, #FEF8A1 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #D79B1B 0%, #FEF8A1 100%)",
                  },
                  textTransform: "none",
                  width: { xs: "auto", md: "auto" },
                }}
              >
                {t("seeDetails")}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "50%",
                  minWidth: { xs: 40, md: 50 },
                  height: { xs: 40, md: 50 },
                  borderColor: "#E9B838",
                  p: 0,
                  ml: { xs: 0, md: 1 },
                }}
              >
                <RightArrowSVG />
              </Button>
            </Box>
          </Paper>
        </Link>
      </Grid>
    ))}
  </Grid>
);

type SolutionsProps = { t: ReturnType<typeof useTranslations> };

// Map iconKey to SVG component
const iconMap: Record<string, React.ReactNode> = {
  Solution1SVG: <Solution1SVG />,
  Solution2SVG: <Solution2SVG />,
  Solution3SVG: <Solution3SVG />,
  Solution4SVG: <Solution4SVG />,
  Solution5SVG: <Solution5SVG />,
  Scalability1SVG: <Scalability1SVG />,
  Scalability2SVG: <Scalability2SVG />,
  Scalability3SVG: <Scalability3SVG />,
  Onboarding1SVG: <Onboarding1SVG />,
  Onboarding2SVG: <Onboarding2SVG />,
  Onboarding3SVG: <Onboarding3SVG />,
  Operations1SVG: <Operations1SVG />,
  Operations2SVG: <Operations2SVG />,
  Operations3SVG: <Operations3SVG />,
};

export default Solutions;
