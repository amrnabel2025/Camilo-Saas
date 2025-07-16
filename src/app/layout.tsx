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
  const { locale } = params;

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <AosInitClient />
      {children}
    </NextIntlClientProvider>
  );
}
