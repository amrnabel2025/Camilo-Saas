import AosInitClient from "@/components/AosInitClient";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <AosInitClient />
      {children}
    </NextIntlClientProvider>
  );
}
