import AosInitClient from "@/components/AosInitClient";
import DisableZoom from "@/components/DisableZoom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NextAuthProvider from "@/components/NextAuthProvider";
import ScrollToTop from "@/components/ScrollToTop";
import { routing } from "@/libs/i18n/routing";
import ThemeRegistry from "@/utils/ThemeProvider";
import cn from "clsx";
import type { Viewport } from "next";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.css";

// ✅ Disable Zoom on Safari
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// ✅ Generate static params for locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// ✅ Layout
export default async function RootLayout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: { readonly locale: "en" | "ar" };
}) {
  const { locale } = params;
  if (!routing.locales.includes(locale)) {
    notFound();
  } else {
    setRequestLocale(locale);
  }

  const lang = await getLocale();
  const messages = await getMessages();
  const isRtl = lang === "ar";

  return (
    <html lang={lang} dir={isRtl ? "rtl" : "ltr"}>
      <body className={cn(isRtl ? "rtl" : "ltr")}>
        <NextIntlClientProvider messages={messages}>
          <AosInitClient />
          <NextAuthProvider>
            <ThemeRegistry>
              <DisableZoom />
              <Navbar />
              <div
                style={{
                  minHeight: "calc(100vh - 80px)",
                  direction: isRtl ? "rtl" : "ltr",
                  textAlign: isRtl ? "right" : "left",
                }}
              >
                {children}
              </div>
              <Footer />
              <ScrollToTop />
            </ThemeRegistry>
          </NextAuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: "en" | "ar" };
}): Promise<Metadata> {
  const { locale } = params;
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    messages = {
      Home: {
        Hero: {
          title: "Mashrouk For Transport",
          description: "Mashrouk For Transport",
        },
      },
    };
  }
  return {
    title: messages.Home?.Hero?.title
      ? `${messages.Home.Hero.title} | Book Shared Rides, Safe Transport, Eco-Friendly Carpooling & Seamless Travel in Saudi Arabia with Mashrouk App`
      : "Mashrouk For Transport | Book Shared Rides, Safe Transport, Eco-Friendly Carpooling & Seamless Travel in Saudi Arabia with Mashrouk App",
    description: messages.Home?.Hero?.description
      ? `${messages.Home.Hero.description} - Discover Mashrouk: The leading app for booking shared rides, safe and efficient transport, eco-friendly carpooling, and seamless travel experiences across Saudi Arabia. Download now for a smarter, greener journey!`
      : "Discover Mashrouk: The leading app for booking shared rides, safe and efficient transport, eco-friendly carpooling, and seamless travel experiences across Saudi Arabia. Download now for a smarter, greener journey!",
  };
}
