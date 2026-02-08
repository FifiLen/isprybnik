"use client";

import React from "react";
import {
  FaBars,
  FaHome,
  FaGraduationCap,
  FaUserPlus,
  FaQuestionCircle,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

interface Product {
  name: string;
  description: string;
  href: string;
  icon: JSX.Element;
}

/**
 * Root navigation bar
 * – Collapses to a Sheet below **xl** break‑point instead of **lg**
 * – Uses flex‑wrap & smaller horizontal gaps so long labels (eg. "Dofinansuj…") don’t overflow
 * – Responsive padding (px‑4 → sm:px‑6 → lg:px‑8) for tighter look on narrow view‑ports
 */
export default function RootNavbar() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const products: Product[] = [
    {
      name: t("home"),
      description: t("homeDescription"),
      href: "/",
      icon: <FaHome />,
    },
    {
      name: t("courses"),
      description: t("coursesDescription"),
      href: "/kierunek",
      icon: <FaGraduationCap />,
    },
    {
      name: t("recruitment"),
      description: t("recruitmentDescription"),
      href: "/rekrutacja",
      icon: <FaUserPlus />,
    },
    {
      name: t("faq"),
      description: t("faqDescription"),
      href: "/faq",
      icon: <FaQuestionCircle />,
    },
    {
      name: t("bur"),
      description: t("faqDescription"),
      href: "/baza-uslug-rozwojowych",
      icon: <FaQuestionCircle />,
    },
    {
      name: t("videos"),
      description: t("faqDescription"),
      href: "/zobacz-nasze-zajecia",
      icon: <FaQuestionCircle />,
    },
    {
      name: t("contact"),
      description: t("contactDescription"),
      href: "/kontakt",
      icon: <FaEnvelope />,
    },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === "pl" ? "en" : "pl";
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-blue-950/95 backdrop-blur-sm text-white shadow-sm">
      <nav
        className="mx-auto flex w-full  items-center justify-between px-4 sm:px-6 lg:px-8 py-4"
        aria-label="Global"
      >
        <div className="flex xl:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">{t("logoAlt")}</span>
            <Image src={"/logo.png"} height={60} width={60} alt="logo" />
            <h2 className="tracking-tighter text-lg font-semibold whitespace-nowrap">
              {t("logoText")}
            </h2>
          </Link>
        </div>

        <div className="flex xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <span className="sr-only">{t("openMenu")}</span>
                <FaBars className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-blue-950 text-white overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                  <span className="sr-only">{t("logoAlt")}</span>
                  <Image src={"/logo.png"} height={60} width={60} alt="logo" />
                  <h2 className="tracking-tighter text-lg font-semibold whitespace-nowrap">
                    {t("logoText")}
                  </h2>
                </Link>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/20">
                  <div className="space-y-2 py-6">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="flex items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-blue-700/60"
                      >
                        <span className="mr-3 text-xl">{product.icon}</span>
                        {product.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6 flex flex-col gap-3">
                    <Link
                      href="/rekrutacja"
                      className="text-sm flex items-center justify-center gap-1 p-3 rounded-lg border font-semibold leading-6 border-white text-white hover:bg-white/10"
                    >
                      {t("enrollButton")}
                    </Link>
                    <button
                      onClick={toggleLanguage}
                      className="text-sm flex items-center justify-center gap-1 p-3 rounded-lg border font-semibold leading-6 border-white text-white hover:bg-white/10"
                    >
                      <FaGlobe className="mr-2" />
                      {locale === "pl" ? "EN" : "PL"}
                    </button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden xl:flex flex-wrap gap-x-10 whitespace-nowrap max-w-[60%]">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="text-sm font-semibold leading-6 hover:text-blue-300/90 transition-colors duration-200"
            >
              {product.name}
            </Link>
          ))}
        </div>

        <div className="hidden xl:flex xl:flex-1 xl:justify-end items-center gap-3">
          <Link
            href="/rekrutacja"
            className="text-sm flex items-center gap-1 p-2 px-3 rounded-lg font-semibold leading-6 bg-white text-blue-950 hover:bg-blue-100 transition-colors duration-200 whitespace-nowrap"
          >
            {t("enrollButton")}
          </Link>
          <button
            onClick={toggleLanguage}
            className="text-sm flex items-center gap-1 p-2 px-3 rounded-lg font-semibold leading-6 bg-white text-blue-950 hover:bg-blue-100 transition-colors duration-200 whitespace-nowrap"
          >
            <FaGlobe className="mr-1" />
            {locale === "pl" ? "EN" : "PL"}
          </button>
        </div>
      </nav>
    </header>
  );
}
