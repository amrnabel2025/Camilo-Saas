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
      <div id="home">
        <Hero t={tHero} />
      </div>
      <div id="services">
        <Results t={tResults} />
      </div>
      <div style={{ padding: "0 50px" }}>
        <div id="book-ride">
          <OurFeatures t={tFeatures} />
        </div>
        <div id="join-agent">
          <SharingIsBlessing t={tPricing} />
        </div>
        <Contact t={tContact} />
      </div>
    </div>
  );
}
