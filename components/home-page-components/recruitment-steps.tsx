"use client";
import React from "react";
import Link from "next/link";
import { GiFootsteps } from "react-icons/gi";
import { CgArrowTopRightO } from "react-icons/cg";
import { useTranslations } from "next-intl";

const EnrollmentSteps: React.FC = () => {
  const t = useTranslations("RecruitmentPage");

  return (
    <div className="bg-gray-200 py-12 md:py-28">
      <div className="max-w-full mx-auto px-4 lg:px-20">
        <GiFootsteps
          className="w-10 h-10 md:w-14 md:h-14 mb-5"
          aria-hidden="true"
        />
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tighter">
              {t("steps.title")}
            </h2>
            <p className="mt-4 text-base md:text-lg leading-7 text-gray-600">
              {t("steps.description")}
            </p>
            <p className="mt-3 text-purple-600 font-medium tracking-tight">
              {t("steps.enrollmentFee")}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-3 mt-6 md:mt-0">
            <Link
              aria-label={t("steps.exploreCoursesAriaLabel")}
              href="/kierunek"
              className="px-3 py-2 bg-[#9E5AE2] text-white font-medium rounded-md"
            >
              {t("steps.exploreCourses")}
            </Link>
            <Link
              aria-label={t("steps.askQuestionAriaLabel")}
              href="/kontakt"
              className="px-3 py-2 bg-white text-zinc-700 font-medium rounded-md"
            >
              {t("steps.askQuestion")}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 lg:gap-32 mt-12 md:mt-20">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step}>
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center justify-center border-[1.5px] border-black h-7 w-7 rounded-full mb-2"
                  aria-hidden="true"
                >
                  <p className="font-semibold">{step}</p>
                </div>
                {step === 1 && (
                  <a
                    href="https://zgloszeniaisp.rybnikonline.eu/?page_id=9380"
                    target="_blank"
                    className="bg-[#9E5AE2] py-1 px-2 mb-2 text-white rounded-xl flex items-center gap-2"
                  >
                    {t("steps.recruitmentForm")}
                    <CgArrowTopRightO />
                  </a>
                )}
              </div>
              <h4 className="font-medium tracking-tight text-xl md:text-2xl">
                {t(`steps.step${step}.title`)}
              </h4>
              <p className="mt-2 text-base">
                {t(`steps.step${step}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnrollmentSteps;
