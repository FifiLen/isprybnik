"use client";

import type React from "react";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, CircleArrowRight } from "lucide-react";
import type { Course } from "@/utils/types";
import { PsychotherapyInfoCard } from "@/components/psychotherapy-info-card";
import Markdown from "markdown-to-jsx";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { loadCourseData } from "@/utils/loadCourseData";
import { TbPigMoney } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";

const MAX_DESCRIPTION_LENGTH = 82;
const MAX_POPULAR_COURSES = 9;

const InfoBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <Badge
    variant="secondary"
    className="flex items-center gap-2 bg-blue-50 text-blue-700 p-2"
  >
    {icon}
    <span className="truncate text-sm">{text}</span>
  </Badge>
);

const CourseCard = ({ course }: { course: Course }) => {
  const t = useTranslations("CoursesPage");

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + "...";
  };

  return (
    <Card className="flex flex-col h-full">
      <div className="relative h-48 order-last sm:order-first">
        <Image
          src={`/assets/${course.id}.jpg`}
          alt={course.title}
          fill
          className="object-cover rounded-b-lg sm:rounded-t-lg sm:rounded-b-none"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute right-0 top-4 flex flex-col gap-2">
          <div className="bg-blue-600 text-white py-1 px-3 text-sm font-medium rounded-l-md">
            studiuj stacjonarnie
          </div>
          <div className="bg-purple-600 text-white py-1 px-3 text-sm font-medium rounded-l-md">
            studiuj hybrydowo
          </div>
        </div>
      </div>
      <CardContent className="flex flex-col flex-grow p-8 sm:p-4">
        <CardHeader className="p-0 mb-6">
          <div className="min-h-[4rem] sm:min-h-[3rem]">
            <CardTitle className="text-3xl font-bold text-gray-900 lg:text-lg xl:text-xl tracking-tighter">
              <Markdown>{course.title}</Markdown>
            </CardTitle>
          </div>
          <CardDescription className="mb-4 text-sm line-clamp-3">
            <Markdown>
              {truncateDescription(
                course.banerDescription,
                MAX_DESCRIPTION_LENGTH,
              )}
            </Markdown>
          </CardDescription>
        </CardHeader>

        <div className="grid grid-cols-1 gap-4 mb-auto">
          <InfoBadge
            icon={<CalendarDays className="h-4 w-4" />}
            text={course.duration}
          />
          <InfoBadge
            icon={<Clock className="h-4 w-4" />}
            text={course.practicalHours}
          />
          <InfoBadge
            icon={<TbPigMoney className="h-4 w-4" />}
            text={course.price}
          />
          <InfoBadge
            icon={<MdOutlinePayments className="h-4 w-4" />}
            text={course.payments}
          />
        </div>

        <CardFooter className="p-0 pt-10 sm:pt-6">
          <Button
            asChild
            className="w-full text-lg sm:text-base rounded-xl py-6 bg-blue-600"
            variant="default"
          >
            <Link href={`/kierunek/${course.id}`}>
              {t("learnMore")}
              <span className="sr-only">
                {t("aboutCourse", { title: course.title })}
              </span>
              <CircleArrowRight className="ml-2 h-6 w-6 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default function fCoursesPage() {
  const t = useTranslations("CoursesPage");
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [popularCourses, setPopularCourses] = useState<Course[]>([]);
  const [otherCourses, setOtherCourses] = useState<Course[]>([]);

  const categories = useMemo(
    () => [
      { id: "all", name: t("allCategories") },
      {
        id: "psychologia-i-psychoterapia",
        name: t("psychologyAndPsychotherapy"),
      },
      {
        id: "pedagogika-specjalna-i-korekcyjna",
        name: t("specialAndCorrectivePedagogy"),
      },
      {
        id: "zarzadzanie-i-dydaktyka-edukacyjna",
        name: t("educationalManagementAndDidactics"),
      },
    ],
    [t],
  );

  useEffect(() => {
    async function fetchCourses() {
      const popularCourseIds = [
        "zarzadzanie-oswiata",
        "pedagogika-specjalna-edukacja-terapia-i-wspomaganie-osob-z-zaburzeniami-ze-spektrum-autyzmu",
        "pedagogika-specjalna-logopedia",
        "przyroda-w-szkole-podstawowej",
        "pedagogika-korekcyjna",
        "pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-intelektualna-oligofrenopedagogika",
        "integracja-sensoryczna-z-terapia-reki",
        "pedagogika-specjalna-edukacja-integracyjna-wlaczajaca",
        "pedagogika-specjalna-edukacja-integracyjna-wlaczajaca",
      ];

      const otherCourseIds = [
        "chemia-w-szkole",
        "cyberpsychologia",
        "diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
        "dydaktyka-jezyka-obcego-niemiecki",
        "edukacja-dla-bezpieczenstwa",
        "edukacja-zdrowotna",
        "etyka",
        "informatyka-w-szkole",
        "jezyk-angielski-w-wychowaniu-przedszkolnym-i-edukacji-wczesnoszkolnej",
        "jezyk-polski",
        "neurologopedia",
        "pedagogika-marii-montessori",
        "pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-sluchowa-surdopedagogika",
        "pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-wzrokowa-tyflopedagogika",
        "pedagogika-specjalna-wczesne-wspomaganie-rozwoju-dziecka",
        "przygotowanie-pedagogiczne",
        "gerontologia",
        "doradztwo-zawodowe",
        "psychologia-uzaleznien-uzaleznienia-behawioralne",
        "psychologia-uzaleznien-z-terapia-uzaleznien",
        "psychoterapia",
        "seksuologia-praktyczna",
        "trener-umiejetnosci-spolecznych",
        "wychowanie-fizyczne-w-szkole",
      ];

      const loadedPopularCourses = await Promise.all(
        popularCourseIds.map((id) => loadCourseData(id, locale)),
      );
      setPopularCourses(
        loadedPopularCourses.filter(
          (course): course is Course => course !== null && course.isPopular,
        ),
      );

      const loadedOtherCourses = await Promise.all(
        otherCourseIds.map((id) => loadCourseData(id, locale)),
      );
      setOtherCourses(
        loadedOtherCourses.filter((course): course is Course => course !== null),
      );
    }
    fetchCourses();
  }, [locale]);

  const filteredAndGroupedOtherCourses = useMemo(() => {
    const filtered = otherCourses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.banerDescription
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
    );

    return categories.reduce(
      (acc, category) => {
        if (category.id === "all") {
          acc[category.id] = filtered;
        } else {
          acc[category.id] = filtered.filter(
            (course) =>
              course.category.toLowerCase().replace(/ /g, "-") === category.id,
          );
        }
        return acc;
      },
      {} as Record<string, Course[]>,
    );
  }, [otherCourses, searchTerm, categories]);

  return (
    <div id="kierunki" className="w-full bg-gray-100 py-12">
      <div className="max-w-full mx-auto py-6 px-4 sm:py-10 sm:px-6 lg:px-20">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tracking-tighter">
            {t("courses")}
          </h1>
          <div>
            <Link
              href={"/kierunek"}
              className="px-4 py-2 font-semibold text-base bg-purple-500 rounded-xl text-white tracking-tight hover:bg-purple-700"
            >
              {t("button-more")}
            </Link>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{t("popularCourses")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.slice(0, MAX_POPULAR_COURSES).map((course) =>
              course.id === "psychoterapia" ? (
                <div
                  key={course.id}
                  className="col-span-1 sm:col-span-2 lg:col-span-3"
                >
                  <PsychotherapyInfoCard course={course} />
                </div>
              ) : (
                <CourseCard key={course.id} course={course} />
              ),
            )}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl tracking-tighter font-semibold mb-6">
            {t("otherCourses")}
          </h2>
          <div className="mb-6">
            <Input
              type="search"
              placeholder={t("searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-1/2 lg:w-1/3 bg-blue-50 border border-blue-700 placeholder:text-blue-700 text-blue-700"
            />
          </div>
          {categories.slice(1).map((category) => (
            <div key={category.id} className="mb-8">
              <h3 className="text-xl tracking-tighter font-semibold mb-4">
                {category.name}
              </h3>
              <div className="grid gap-4 bg-white rounded-lg p-6">
                {filteredAndGroupedOtherCourses[category.id].map((course) => (
                  <div
                    key={course.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-grow">
                      <h4 className="font-semibold text-lg mb-2">
                        <Markdown>{course.title}</Markdown>
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <TbPigMoney className="h-4 w-4" />
                          {course.price}
                        </span>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="min-w-[140px] whitespace-nowrap"
                    >
                      <Link href={`/kierunek/${course.id}`}>
                        {t("learnMore")}
                        <CircleArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
