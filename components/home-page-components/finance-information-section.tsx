import Link from "next/link";
import React from "react";
import { CgArrowTopRightO } from "react-icons/cg";
import { BsInfoCircleFill } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { FaPhone } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Markdown from "markdown-to-jsx";

export const FinanceInformationSection = () => {
  const t = useTranslations("FinanceInformationSection");

  return (
    <section className="w-full bg-blue-950">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        <div className="flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col">
          <p className="text-2xl md:text-3xl font-semibold text-blue-600 tracking-tight flex gap-2 items-center">
            <GiTwoCoins />
            {t("funding")}
          </p>
          <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tighter mt-3">
            {t("fundingTitle")}
          </h2>
          <p className="text-base md:text-lg text-zinc-300 mt-4">
            <Markdown>{t("fundingDescription")}</Markdown>
          </p>
          <div className="flex items-center gap-5">
            <button className="bg-blue-600 text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              516 826 025
              <FaPhone className="text-xl" />
            </button>
            <button className="bg-blue-600 text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              502 162 365
              <FaPhone className="text-xl" />
            </button>
            <button className="bg-blue-600 text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              797 173 501
              <FaPhone className="text-xl" />
            </button>
          </div>
          <a
            href="https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/dostawca-uslug/podglad?id=53144"
            target="_blank"
            aria-label={t("burOfferAriaLabel")}
          >
            <button className="bg-blue-700 text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              {t("burOfferButton")}
              <CgArrowTopRightO className="text-2xl" />
            </button>
          </a>
        </div>

        <div className="bg-gray-50 flex justify-center items-start px-8 md:px-20 py-16 md:py-36 flex-col">
          <h4 className="text-2xl md:text-3xl font-semibold text-[#9E5AE2] tracking-tight flex gap-2 items-center">
            <BsInfoCircleFill />
            {t("information")}
          </h4>
          <h2 className="text-3xl md:text-5xl text-zinc-800 font-semibold tracking-tighter mt-3">
            {t("loansTitle")}
          </h2>
          <p className="text-base md:text-lg text-zinc-600 mt-4">
            {t("loansDescription")}
          </p>
          <Link
            href="https://inwestujwrozwoj.pl/"
            target="_blank"
            aria-label={t("learnMoreAriaLabel")}
          >
            <button className="bg-[#9E5AE2] text-white font-semibold rounded-lg px-4 py-3 flex gap-3 items-center justify-center mt-8">
              inwestujwrozwoj.pl
              <CgArrowTopRightO className="text-2xl" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
