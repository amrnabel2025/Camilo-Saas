import Results from "@/components/homepage/happyClient";
import Hero from "@/components/homepage/Hero";
import OurFeatures from "@/components/homepage/OurFeatures";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
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
      <Results />
      <OurFeatures />
    </div>
  );
}
