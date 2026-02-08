import React from "react";
import Image from "next/image";
import { CgArrowTopRightO } from "react-icons/cg";
import { GiTwoCoins } from "react-icons/gi";
import { useTranslations } from "next-intl";

export const BannerFinanceCoursePage = () => {
  const t = useTranslations("BannerFinanceCoursePage");

  return (
    <section className="w-full bg-zinc-200">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        <div className="relative w-full h-64 md:h-auto">
          <Image
            src="/assets/money.jpg"
            fill
            alt={t("imageAlt")}
            className="object-cover"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex justify-center items-start px-6 py-16 md:px-20 md:py-36 flex-col">
          <p className="text-2xl md:text-3xl font-semibold text-blue-600 tracking-[-0.2rem] flex gap-2 items-center">
            <GiTwoCoins />
            {t("funding")}
          </p>
          <h2 className="text-3xl md:text-5xl text-zinc-800 font-semibold tracking-tighter mt-3">
            {t("title")}
          </h2>
          <div className="text-base md:text-lg text-zinc-600 mt-4">
            <div className=" flex flex-col gap-4">
              <p>{t("description1")}</p>
              <p>{t("description2")}</p>
              <p>{t("description3")}</p>
              <p>{t("description4")}</p>
              <p>{t("description5")}</p>
            </div>
          </div>
          <a
            href="https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/dostawca-uslug/podglad?id=53144"
            target="_blank"
            aria-label={t("buttonAriaLabel")}
          >
            <button className="bg-blue-700 text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              {t("buttonText")}
              <CgArrowTopRightO className="text-2xl" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
