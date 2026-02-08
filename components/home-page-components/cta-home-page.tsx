import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgArrowTopRightO } from "react-icons/cg";
import { useTranslations } from "next-intl";

export const CtaHomePage = () => {
  const t = useTranslations("CtaHomePage");

  return (
    <section className="w-full bg-blue-950">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        <div className="flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col rekrutacja">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-100 tracking-[-0.2rem]">
            {t("recruitmentTitle")}
          </h4>
          <h2 className="text-4xl md:text-5xl text-white font-semibold tracking-tighter mt-3">
            {t("semesterTitle")}
          </h2>
          <p className="text-base md:text-lg text-zinc-300 mt-4">
            {t("description")}
          </p>
          <Link href="/kierunek">
            <button
              aria-label={t("exploreOfferAriaLabel")}
              className="bg-blue-800 text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8"
            >
              {t("exploreOfferButton")}
              <CgArrowTopRightO className="text-2xl" />
            </button>
          </Link>
        </div>

        <div className="relative hidden sm:block w-full h-64 md:h-auto">
          <Image
            src="/assets/studentka.png"
            fill
            alt={t("imageAlt")}
            className="object-cover"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};
