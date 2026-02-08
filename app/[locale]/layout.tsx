import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout-components/root-navbar";
import { UserPreferencesProvider } from "@/components/providers/UserPreferencesContext";
import { Analytics } from "@vercel/analytics/react";
import { TopBar } from "@/components/layout-components/contact-info-baner-top";
import { FooterComponent } from "@/components/layout-components/footer-component";
import { Toaster } from "@/components/ui/toaster";
import { AccessibilityPanel } from "@/components/providers/accessibility-panel";
import BanerIviteHomePage from "@/components/home-page-components/baner-invite-home-page";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations, getMessages } from "next-intl/server";
import { StructuredData } from "@/components/structured-data";
import { Locale, locales } from "@/i18n/i18n.config";

const dmsans = DM_Sans({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://isp.rybnikonline.eu"),
    title: {
      default: t("site.name"),
      template: `%s | ${t("site.name")}`,
    },
    description: t("site.description"),
    keywords: t("site.keywords"),
    authors: [{ name: "ISP Rybnik" }],
    creator: "ISP Rybnik",
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: `https://isp.rybnikonline.eu/${locale}`,
      siteName: t("site.name"),
      title: t("site.name"),
      description: t("site.description"),
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: t("site.name"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("site.name"),
      description: t("site.description"),
      images: ["/twitter-image.jpg"],
    },
    alternates: {
      canonical: `https://isp.rybnikonline.eu/${locale}`,
      languages: {
        pl: "https://isp.rybnikonline.eu/pl",
        en: "https://isp.rybnikonline.eu/en",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <StructuredData />
        {locales.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc}
            href={`https://isp.rybnikonline.eu/${loc}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://isp.rybnikonline.eu/pl"
        />
      </head>
      <body className={`${dmsans.className} overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <UserPreferencesProvider>
            <TopBar />
            <Navbar />
            <BanerIviteHomePage />
            <main>
              {children}
              <Toaster />
            </main>
            <AccessibilityPanel />
            <Analytics />
            <FooterComponent />
          </UserPreferencesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
