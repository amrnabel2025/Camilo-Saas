"use client";
import { plansTemplate } from "@/utils/constants";
import { Box, Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { GraycheckSVG, GreenCheckSVG, PricingSVG } from "../../../public/SVGs";

type SharingIsBlessingProps = { t: ReturnType<typeof useTranslations> };

const SharingIsBlessing = ({ t }: SharingIsBlessingProps) => {
  const plans = plansTemplate.map((plan) => ({
    ...plan,
    name: t(plan.name),
    priceNote: t(plan.priceNote),
    billedNote: {
      month: t(plan.billedNote.month),
      year: t(plan.billedNote.year),
    },
    features: plan.features.map((f) => t(f)),
    ideal: t(plan.ideal),
  }));

  function PricingCard({
    plan,
    selected,
    billing,
  }: {
    plan: (typeof plans)[0];
    selected: boolean;
    billing: "month" | "year";
  }) {
    return (
      <Box
        sx={{
          flex: "1 1 320px",
          maxWidth: 370,
          minWidth: 0,
          bgcolor: selected ? "#fff" : "#FCFBF7",
          borderRadius: 4,
          p: { xs: 2, md: 3 },
          boxShadow: selected
            ? "0 4px 24px 0 rgba(233,184,56,0.18)"
            : "0 2px 12px 0 rgba(0,0,0,0.04)",
          border: selected ? "2.5px solid #E9B838" : "1px solid #eee",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          mb: 2,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          minHeight: 600,
          zIndex: selected ? 10 : 1,
          transform: selected
            ? "translateY(-18px) scale(1.02)"
            : "translateY(0) scale(1)",
          cursor: "pointer",
          backdropFilter: "blur(2px)",
        }}
      >
        {/* Most Popular Badge */}
        {plan.mostPopular && (
          <Box
            sx={{
              position: "absolute",
              top: 30,
              right: 18,
              bgcolor: "rgba(233, 184, 56, 0.16)",
              color: "#D79B1B",
              fontWeight: 700,
              fontSize: 13,
              px: 2,
              py: 1,
              borderRadius: 2,
              zIndex: 2,
            }}
          >
            {t("mostPopularBadge")}
          </Box>
        )}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 20,
            mb: 2,
            mt: 1,
            textAlign: "left",
            width: "100%",
          }}
        >
          {plan.name}
        </Typography>
        {/* Pricing Icon, Price, Plan Type */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
            mb: 2,
            mt: 2,
            width: "100%",
          }}
        >
          <PricingSVG />
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 38,
              color: "#222",
              mt: 1,
              mb: 0.5,
            }}
          >
            {plan.price[billing]}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "#888", fontSize: 15, fontWeight: 500 }}>
              {plan.priceNote}
            </Typography>
            <Typography sx={{ color: "#bbb", fontSize: 13, fontWeight: 400 }}>
              {plan.billedNote[billing]}
            </Typography>
          </Box>
        </Box>
        {/* Features */}
        <Box sx={{ width: "100%", mt: 1, mb: 2 }}>
          {plan.features.map((f, i) => (
            <Box
              key={i}
              sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  mr: 1,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#EBEFF0",
                }}
              >
                <GraycheckSVG />
              </Box>
              <Typography
                sx={{ ml: 1, color: "#222", fontWeight: 500, fontSize: 15 }}
              >
                {f}
              </Typography>
            </Box>
          ))}
        </Box>
        {/* Ideal for */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
            bgcolor: "rgba(245, 245, 245, 0.75)",
            borderRadius: 2,
            p: 1.5,
            mt: "auto",
            mb: 2,
          }}
        >
          <GreenCheckSVG />
          <Typography
            sx={{
              ml: 1,
              color: "rgba(76, 76, 76, 0.82)",
              fontWeight: 500,
              fontSize: 11,
              textAlign: "left",
            }}
          >
            {plan.ideal}
          </Typography>
        </Box>
        <Button
          variant={selected ? "contained" : "outlined"}
          sx={{
            mt: "auto",
            background: selected
              ? "linear-gradient(90deg, #D79B1B -7.65%, #FEF8A1 99.94%)"
              : undefined,
            color: selected ? "#222" : "#E9B838",
            borderColor: "#E9B838",
            borderRadius: 2,
            fontWeight: 700,
            fontSize: 16,
            px: 4,
            py: 1.5,
            boxShadow: selected
              ? "0 2px 8px 0 rgba(233,184,56,0.12)"
              : undefined,
            textTransform: "none",
            width: "100%",
            "&:hover": {
              background: selected
                ? "linear-gradient(90deg, #D79B1B -7.65%, #FEF8A1 99.94%)"
                : "#FFF8E1",
              color: "#222",
              borderColor: "#E9B838",
            },
          }}
        >
          {t("choosePlanButton")}
        </Button>
      </Box>
    );
  }

  const Pricing = () => {
    const [billing, setBilling] = useState<"month" | "year">("month");
    const [selected, setSelected] = useState(1); // Default to Standard

    return (
      <Box
        sx={{
          width: "100%",
          maxWidth: 1400,
          mx: "auto",
          py: { xs: 4, md: 8 },
          px: { xs: 1, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 4,
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
              width: "80%",
              lineHeight: "24px",
            }}
          >
            {t("sectionSubtitle")}
          </Typography>
          {/* Billing Toggle */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
              bgcolor: "#F3F5F6",
              borderRadius: 999,
              p: 1,
              width: { xs: 1, sm: "auto" },
              minWidth: 400,
              boxShadow: "0 1px 4px 0 rgba(0,0,0,0.03)",
            }}
            role="tablist"
            aria-label="Billing period toggle"
          >
            <Box
              role="tab"
              tabIndex={0}
              aria-selected={billing === "month"}
              onClick={() => setBilling("month")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setBilling("month");
              }}
              sx={{
                flex: 1,
                px: 4,
                py: 1.5,
                cursor: "pointer",
                borderRadius: 999,
                transition: "all 0.2s",
                fontWeight: 500,
                fontSize: 18,
                color: billing === "month" ? "#6B6B6B" : "#6B6B6B",
                background: billing === "month" ? "#fff" : "transparent",
                boxShadow:
                  billing === "month"
                    ? "0 2px 8px 0 rgba(0,0,0,0.04)"
                    : undefined,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                outline: "none",
                ...(billing === "month" && {
                  fontWeight: 700,
                  color: "#222",
                }),
              }}
            >
              {t("monthlyOption")}
            </Box>
            <Box
              role="tab"
              tabIndex={0}
              aria-selected={billing === "year"}
              onClick={() => setBilling("year")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setBilling("year");
              }}
              sx={{
                flex: 1,
                px: 4,
                py: 1.5,
                cursor: "pointer",
                borderRadius: 999,
                transition: "all 0.2s",
                fontWeight: 500,
                fontSize: 18,
                color: billing === "year" ? "#222" : "#6B6B6B",
                background: billing === "year" ? "#fff" : "transparent",
                boxShadow:
                  billing === "year"
                    ? "0 2px 8px 0 rgba(0,0,0,0.04)"
                    : undefined,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                outline: "none",
                ...(billing === "year" && {
                  fontWeight: 700,
                }),
              }}
            >
              <span style={{ fontWeight: 700 }}>{t("yearlyOption")}</span>
              <span
                style={{
                  fontWeight: 400,
                  fontSize: 15,
                  marginLeft: 6,
                  color: "#6B6B6B",
                }}
              >
                {t("yearlyDiscount")}
              </span>
            </Box>
          </Box>
        </Box>
        {/* Pricing Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
            justifyContent: "center",
            alignItems: "stretch",
            flexWrap: "wrap",
            mt: "70px",
          }}
        >
          {plans.map((plan, idx) => (
            <Box
              key={plan.name}
              sx={{
                flex: "1 1 320px",
                minWidth: 260,
                maxWidth: 370,
                width: "100%",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                alignSelf: "center",
              }}
              onClick={() => setSelected(idx)}
            >
              <PricingCard
                plan={plan}
                selected={selected === idx}
                billing={billing}
              />
            </Box>
          ))}
        </Box>
      </Box>
    );
  };
  return <Pricing />;
};

export default SharingIsBlessing;
