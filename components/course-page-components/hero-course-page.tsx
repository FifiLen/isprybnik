"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";
import { Course } from "@/utils/types";
import {
  TbCircleDashedCheck,
  TbPigMoney,
  TbCalendar,
  TbReportMoney,
} from "react-icons/tb";
import { GrWorkshop } from "react-icons/gr";
import { useTranslations } from "next-intl";
import Markdown from "markdown-to-jsx";

interface HeroCoursePageProps {
  course: Course;
}

export const HeroCoursePage = ({ course }: HeroCoursePageProps) => {
  const t = useTranslations("CoursesPage");

  return (
    <section className="w-full h-fit bg-white/90">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-full">
        <div className="px-4 sm:px-6 md:px-10 py-20 md:py-32 relative overflow-hidden baner">
          <h4 className="text-2xl md:text-3xl font-semibold text-zinc-700 tracking-[-0.2rem]">
            {t("heroPostgraduateStudies")}
          </h4>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mt-3">
            <Markdown>{course.title}</Markdown>
          </h2>

          <div className="flex flex-wrap gap-2 md:gap-2 mt-6">
            <div className="p-1 px-2 rounded-md flex items-center gap-1 bg-green-200 border border-green-800 shadow-md">
              <p className="text-xs font-semibold text-green-800 tracking-tight">
                {t("heroGuaranteeStablePrice")}
              </p>
              <TbCircleDashedCheck className="text-green-800" />
            </div>
            <div className="p-1 px-2 rounded-md flex items-center gap-1 bg-green-200 border border-green-800 shadow-md">
              <p className="text-xs font-semibold text-green-800 tracking-tight">
                {t("heroNoAdditionalFees")}
              </p>
              <TbCircleDashedCheck className="text-green-800" />
            </div>
            <div className="p-1 px-2 rounded-md flex items-center gap-1 bg-green-200 border border-green-800 shadow-md">
              <p className="text-xs font-semibold text-green-800 tracking-tight">
                {t("heroNoSummerFee")}
              </p>
              <TbCircleDashedCheck className="text-green-800" />
            </div>
            <div className="p-1 px-2 rounded-md flex items-center gap-1 bg-green-200 border border-green-800 shadow-md">
              <p className="text-xs font-semibold text-green-800 tracking-tight">
                {t("heroInstallmentsPayment")}
              </p>
              <TbCircleDashedCheck className="text-green-800" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-5">
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-700 shadow-md">
              <TbPigMoney className="w-8 h-8 text-blue-700" />
              <h4 className="text-lg md:text-xl font-semibold tracking-tight text-blue-700">
                {t("heroStudyCost")}
              </h4>
              <p className="text-blue-600/80 font-medium">{course.price}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-700 shadow-md">
              <TbCalendar className="w-8 h-8 text-blue-700" />
              <h4 className="text-lg md:text-xl font-semibold tracking-tight text-blue-700">
                {t("heroStudyDuration")}
              </h4>
              <p className="text-blue-600/80 font-medium">{course.duration}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-5 border border-purple-700 shadow-md">
              <TbReportMoney className="w-8 h-8 text-purple-700" />
              <h4 className="text-lg md:text-xl font-semibold tracking-tight text-purple-700">
                {t("heroPaymentsCount")}
              </h4>
              <p className="text-purple-600/80 font-medium">
                {course.payments}
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 border border-blue-700 shadow-md">
              <GrWorkshop className="w-8 h-8 text-blue-700" />
              <h4 className="text-lg md:text-xl font-semibold tracking-tight text-blue-700">
                {t("heroPracticalHours")}
              </h4>
              <p className="text-blue-600/80 font-medium">
                {course.practicalHours}
              </p>
            </div>
          </div>

          <Link href="/rekrutacja">
            <button className="bg-blue-900 text-white font-semibold md:w-fit w-full rounded-lg px-6 md:px-4 py-3 flex gap-2 items-center justify-center mt-4">
              {t("heroEnrollOnThisCourse")}
              <CircleArrowRight />
            </button>
          </Link>
        </div>

        <div className="relative w-full h-64 md:h-auto">
          <Image
            src={`/assets/${course.id}.jpg`}
            fill
            alt={course.title}
            className="object-cover"
            priority
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};
