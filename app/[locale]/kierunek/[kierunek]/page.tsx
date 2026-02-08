import { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadCourseData } from "@/utils/loadCourseData";
import { HeroCoursePage } from "@/components/course-page-components/hero-course-page";
import { NavigationCourse } from "@/components/course-page-components/navigation-course";
import { AboutCourse } from "@/components/course-page-components/about-course";
import { CoursePractises } from "@/components/course-page-components/course-practises";
import { CourseProgramPsychotherapy } from "@/components/course-page-components/course-program-psychotherapy";
import { CourseProgram } from "@/components/course-page-components/course-program";
import { BannerFinanceCoursePage } from "@/components/course-page-components/baner-finance-course-page";
import { ScheduleCourseSection } from "@/components/course-page-components/schedule-course-section";
import { CtaCoursePageSection } from "@/components/course-page-components/cta-course-page-section";
import FaqSection from "@/app/[locale]/faq/page";

import { courses } from "@/utils/Kierunki";
import TKA from "@/components/course-page-components/tka-certyficate";
import { StudyFormatsSection } from "@/components/course-page-components/study-formats-section";

export async function generateStaticParams() {
  return courses.flatMap((course) =>
    ["pl", "en"].map((locale) => ({
      kierunek: course.id,
      locale,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kierunek: string; locale: string }>;
}): Promise<Metadata> {
  const { kierunek, locale } = await params;
  const course = await loadCourseData(kierunek, locale);
  if (!course) return {};

  return {
    title: `${course.title} | ISP Rybnik`,
    description: course.description,
  };
}

interface CoursePageProps {
  params: Promise<{ kierunek: string; locale: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { kierunek, locale } = await params;

  const course = await loadCourseData(kierunek, locale);

  if (!course) {
    notFound();
  }

  const sections = [
    { id: "opis", titleKey: "opis" },
    { id: "program-studiow", titleKey: "program-studiow" },
    { id: "praktyki", titleKey: "praktyki" },

    { id: "faq", titleKey: "faq" },
  ];

  return (
    <>
      <HeroCoursePage course={course} />

      <NavigationCourse sections={sections} />
      <AboutCourse course={course} />
      <StudyFormatsSection />
      {course.id === "psychoterapia" ? (
        <CourseProgramPsychotherapy course={course} />
      ) : (
        <CourseProgram modules={course.modules} />
      )}
      <TKA />
      <CoursePractises course={course} />

      <CtaCoursePageSection course={course} />
      <BannerFinanceCoursePage />
      <FaqSection />
    </>
  );
}
