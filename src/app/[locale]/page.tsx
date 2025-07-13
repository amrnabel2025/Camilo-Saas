import Hero from "@/components/homepage/Hero";
import YourRide from "@/components/homepage/YourRide";
import WhoWeAre from "@/components/homepage/WhoWeAre";
import WhyWe from "@/components/homepage/WhyWe";
import FeaturesSection from "@/components/homepage/OurFeatures";
import TestimonialSection from "@/components/homepage/happyClient";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import SharingIsBlessing from "@/components/homepage/SharingIsBlessing";
import PartnersSection from "@/components/homepage/Parteners";
import DownloadSection from "@/components/homepage/DownloadNow";
import Waves from "@/components/waves/Waves";
export default function Home({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <div>
      <Hero />
      <Waves customStyle={{transform:"rotate(180deg)"}} bg={"rgb(0, 121, 107)"} showSecondWave={true}/>
      <SharingIsBlessing />
      <Waves  bg={"rgb(238, 251, 249)"} showSecondWave={true}/>
      <FeaturesSection />
      <Waves/>
      <YourRide />
      <Waves customStyle={{transform:"rotate(180deg)", background:"rgb(237 245 244)"}} bg={"rgb(220, 237, 235)"} />
      <WhoWeAre />
      <Waves customStyle={{background:"rgb(237, 245, 244)"}} bg={"rgb(255, 255, 255)"} showSecondWave={true}/>
      <WhyWe />
      <Waves customStyle={{ background:"rgb(255, 255, 255)"}} bg={"rgb(238 251 249)"} showSecondWave={true}/>
      <TestimonialSection />
      <PartnersSection />
      <DownloadSection />
    </div>
  );
}
