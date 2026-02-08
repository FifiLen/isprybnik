import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HeroHomePage from "@/components/home-page-components/hero-home-page";
import { CtaHomePage } from "@/components/home-page-components/cta-home-page";
import CoursesPage from "@/components/home-page-components/courses-home-page";
import { FinanceInformationSection } from "@/components/home-page-components/finance-information-section";
import FaqSection from "./faq/page";
import { ContactMainPageSection } from "@/components/home-page-components/contant-main-page-section";
import EnrollmentSteps from "@/components/home-page-components/recruitment-steps";
import Image from "next/image";
import FullWidthBanner from "@/components/home-page-components/baner-image";

export const metadata: Metadata = {
  title: "Instytut Studiów Podyplomowych w Rybniku | ISP Rybnik",
  description:
    "Instytut Studiów Podyplomowych w Rybniku oferuje szeroki wybór wysokiej jakości studiów podyplomowych. Rozwijaj swoją karierę z nami!",
  keywords: "studia podyplomowe, edukacja online, rozwój zawodowy, ISP Rybnik",
  openGraph: {
    title: "Instytut Studiów Podyplomowych w Rybniku | ISP Rybnik",
    description:
      "Szeroka oferta studiów podyplomowych online. Rozwijaj swoją karierę z ISP Rybnik!",
    images: [
      {
        url: "https://www.isprybnik.eu/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ISP Rybnik - Studia Podyplomowe Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instytut Studiów Podyplomowych w Rybniku | ISP Rybnik",
    description:
      "Szeroka oferta studiów podyplomowych online. Rozwijaj swoją karierę z ISP Rybnik!",
    images: ["https://www.isprybnik.pl/twitter-image.jpg"],
  },
};

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  await setRequestLocale(locale);

  return (
    <main>
      <HeroHomePage />

      <CtaHomePage />
      <EnrollmentSteps />
      <CoursesPage />
      <FinanceInformationSection />
      <FaqSection />
      <ContactMainPageSection />
    </main>
  );
}

export async function generateStaticParams() {
  return [{ locale: "pl" }, { locale: "en" }];
}
