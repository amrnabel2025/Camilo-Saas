// Features array template for OurFeatures
export const featuresTemplate = [
  {
    title: "feature1.title",
    desc: "feature1.desc",
    image: "/feature1.png",
    label: "feature1.label",
  },
  {
    title: "feature2.title",
    desc: "feature2.desc",
    image: "/feature2.png",
    label: "feature2.label",
  },
  {
    title: "feature3.title",
    desc: "feature3.desc",
    image: "/feature3.png",
    label: "feature3.label",
  },
  {
    title: "feature4.title",
    desc: "feature4.desc",
    image: "/feature4.png",
    label: "feature4.label",
  },
  {
    title: "feature5.title",
    desc: "feature5.desc",
    image: "/feature5.png",
    label: "feature5.label",
  },
  {
    title: "feature6.title",
    desc: "feature6.desc",
    image: "/feature6.png",
    label: "feature6.label",
  },
];

// Plans array template for SharingIsBlessing
export const plansTemplate = [
  {
    name: "basicPlan.name",
    price: { month: 0, year: 0 },
    priceNote: "basicPlan.priceNote",
    billedNote: {
      month: "basicPlan.billedNote.month",
      year: "basicPlan.billedNote.year",
    },
    features: [
      "basicPlan.features.0",
      "basicPlan.features.1",
      "basicPlan.features.2",
      "basicPlan.features.3",
      "basicPlan.features.4",
      "basicPlan.features.5",
    ],
    ideal: "basicPlan.ideal",
    mostPopular: false,
  },
  {
    name: "standardPlan.name",
    price: { month: 24, year: 20 },
    priceNote: "standardPlan.priceNote",
    billedNote: {
      month: "standardPlan.billedNote.month",
      year: "standardPlan.billedNote.year",
    },
    features: [
      "standardPlan.features.0",
      "standardPlan.features.1",
      "standardPlan.features.2",
      "standardPlan.features.3",
      "standardPlan.features.4",
      "standardPlan.features.5",
      "standardPlan.features.6",
    ],
    ideal: "standardPlan.ideal",
    mostPopular: true,
  },
  {
    name: "proPlan.name",
    price: { month: 48, year: 40 },
    priceNote: "proPlan.priceNote",
    billedNote: {
      month: "proPlan.billedNote.month",
      year: "proPlan.billedNote.year",
    },
    features: [
      "proPlan.features.0",
      "proPlan.features.1",
      "proPlan.features.2",
      "proPlan.features.3",
      "proPlan.features.4",
      "proPlan.features.5",
      "proPlan.features.6",
    ],
    ideal: "proPlan.ideal",
    mostPopular: false,
  },
  {
    name: "unlimitedPlan.name",
    price: { month: 96, year: 80 },
    priceNote: "unlimitedPlan.priceNote",
    billedNote: {
      month: "unlimitedPlan.billedNote.month",
      year: "unlimitedPlan.billedNote.year",
    },
    features: [
      "unlimitedPlan.features.0",
      "unlimitedPlan.features.1",
      "unlimitedPlan.features.2",
      "unlimitedPlan.features.3",
      "unlimitedPlan.features.4",
      "unlimitedPlan.features.5",
      "unlimitedPlan.features.6",
    ],
    ideal: "unlimitedPlan.ideal",
    mostPopular: false,
  },
];

// Stat cards template for happyClient
export const statCardsTemplate = [
  {
    value: "20%",
    label: "stat1.label",
    desc: "stat1.desc",
    iconKey: "SittingsSVG",
  },
  {
    value: "95%",
    label: "stat2.label",
    desc: "stat2.desc",
    iconKey: "StarsSVG",
  },
  {
    value: "30%",
    label: "stat3.label",
    desc: "stat3.desc",
    iconKey: "CarSVG",
  },
  {
    value: "40%",
    label: "stat4.label",
    desc: "stat4.desc",
    iconKey: "TimerSVG",
  },
];

// Solutions page templates (iconKey should be mapped to actual SVG in the component)
export const solutionsTemplate = [
  {
    id: "real-time-fleet-intelligence",
    iconKey: "Solution1SVG",
    titleKey: "realTimeFleetIntelligenceTitle",
    descKey: "realTimeFleetIntelligenceDesc",
  },
  {
    id: "predictive-maintenance",
    iconKey: "Solution2SVG",
    titleKey: "predictiveMaintenanceTitle",
    descKey: "predictiveMaintenanceDesc",
  },
  {
    id: "driver-safety-and-performance",
    iconKey: "Solution3SVG",
    titleKey: "driverSafetyPerformanceTitle",
    descKey: "driverSafetyPerformanceDesc",
  },
  {
    id: "enterprise-integration-and-scalability-fuel",
    iconKey: "Solution4SVG",
    titleKey: "enterpriseIntegrationScalabilityFuelTitle",
    descKey: "enterpriseIntegrationScalabilityFuelDesc",
  },
  {
    id: "enterprise-integration-and-scalability-systems",
    iconKey: "Solution5SVG",
    titleKey: "enterpriseIntegrationScalabilitySystemsTitle",
    descKey: "enterpriseIntegrationScalabilitySystemsDesc",
  },
];

export const costEffectiveTemplate = [
  {
    iconKey: "Scalability1SVG",
    titleKey: "flexiblePricingTiersTitle",
    descKey: "flexiblePricingTiersDesc",
  },
  {
    iconKey: "Scalability2SVG",
    titleKey: "reducedOperationalOverheadsTitle",
    descKey: "reducedOperationalOverheadsDesc",
  },
  {
    iconKey: "Scalability3SVG",
    titleKey: "noHiddenFeesTitle",
    descKey: "noHiddenFeesDesc",
  },
];

export const onboardingTemplate = [
  {
    iconKey: "Onboarding1SVG",
    titleKey: "rapidDeploymentTitle",
    descKey: "rapidDeploymentDesc",
  },
  {
    iconKey: "Onboarding2SVG",
    titleKey: "userFriendlyInterfaceTitle",
    descKey: "userFriendlyInterfaceDesc",
  },
  {
    iconKey: "Onboarding3SVG",
    titleKey: "dedicatedOnboardingSpecialistTitle",
    descKey: "dedicatedOnboardingSpecialistDesc",
  },
];

export const futureProofTemplate = [
  {
    iconKey: "Operations1SVG",
    titleKey: "continuousFeatureUpdatesTitle",
    descKey: "continuousFeatureUpdatesDesc",
  },
  {
    iconKey: "Operations2SVG",
    titleKey: "apiFirstArchitectureTitle",
    descKey: "apiFirstArchitectureDesc",
  },
  {
    iconKey: "Operations3SVG",
    titleKey: "dataDrivenGrowthTitle",
    descKey: "dataDrivenGrowthDesc",
  },
];
