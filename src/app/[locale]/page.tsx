import { setRequestLocale } from "next-intl/server";
import { use } from "react";
export default function Home({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <div>Hello</div>;
}
