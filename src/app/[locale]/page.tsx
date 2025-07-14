"use client";
import Results from "@/components/homepage/happyClient";
import Hero from "@/components/homepage/Hero";
import OurFeatures from "@/components/homepage/OurFeatures";
import SharingIsBlessing from "@/components/homepage/SharingIsBlessing";
import { useTranslations } from "next-intl";

export default function Home() {
  const tHero = useTranslations("Hero");
  const tResults = useTranslations("Results");
  const tFeatures = useTranslations("Features");
  const tPricing = useTranslations("Pricing");

  return (
    <div>
      <Hero t={tHero} />
      <Results t={tResults} />
      <OurFeatures t={tFeatures} />
      <SharingIsBlessing t={tPricing} />
    </div>
  );
}
