import AosInitClient from "@/components/AosInitClient";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

export default async function RootLayout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: { locale: string };
}) {
  const { locale } = params; // Use params as a plain object

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
