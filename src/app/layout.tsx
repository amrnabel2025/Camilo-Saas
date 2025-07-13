import { setRequestLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import AosInitClient from "@/components/AosInitClient";

export default async function RootLayout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; // Wait for the locale from params

  // Set the request locale globally
  setRequestLocale(locale);

  // Fetch localized messages for the current locale
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <AosInitClient />
      {children}
    </NextIntlClientProvider>
  );
}
