"use client";
import Contact from "@/components/homepage/Contact";
import Hero from "@/components/homepage/Hero";
import OurFeatures from "@/components/homepage/OurFeatures";
import SharingIsBlessing from "@/components/homepage/Pricing";
import Results from "@/components/homepage/Results";
import { useTranslations } from "next-intl";

export default function Home() {
  const tHero = useTranslations("Hero");
  const tResults = useTranslations("Results");
  const tFeatures = useTranslations("Features");
  const tPricing = useTranslations("Pricing");
  const tContact = useTranslations("Contact");

  return (
    <div style={{ overflow: "hidden", margin: 0 }}>
      <Hero t={tHero} />
      <Results t={tResults} />
      <div style={{ padding: "0 50px" }}>
        <OurFeatures t={tFeatures} />
        <SharingIsBlessing t={tPricing} />
        <Contact t={tContact} />
      </div>
    </div>
  );
}
