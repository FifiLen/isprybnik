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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, CircleArrowRight } from "lucide-react";
import type { CategoryId, SortOption, Course } from "@/utils/types";
import Markdown from "markdown-to-jsx";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { loadCourseData } from "@/utils/loadCourseData";
import { TbPigMoney } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";

const MAX_DESCRIPTION_LENGTH = 82;
const MAX_COURSES = 10;

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
  const isAvailable = true; // Assume all courses are available unless specified

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

export default function CoursesPage() {
  const t = useTranslations("CoursesPage");
  const locale = useLocale();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<CategoryId>("all");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    async function fetchCourses() {
      const courseIds = [
        "zarzadzanie-oswiata",
        "pedagogika-specjalna-edukacja-terapia-i-wspomaganie-osob-z-zaburzeniami-ze-spektrum-autyzmu",

        "integracja-sensoryczna-z-terapia-reki",
        "pedagogika-specjalna-edukacja-integracyjna-wlaczajaca",
        "pedagogika-specjalna-wczesne-wspomaganie-rozwoju-dziecka",
        "pedagogika-specjalna-logopedia",

        "neurologopedia",
        "trener-umiejetnosci-spolecznych",
        "pedagogika-korekcyjna",
        "przygotowanie-pedagogiczne",
        "przygotowanie-pedagogiczne-do-nauczania-przedmiotow-zawodowych",
        "przygotowanie-pedagogiczne-do-nauczania-jezyka",
        "przygotowanie-pedagogiczne-dla-psychologow",
        "pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-sluchowa-surdopedagogika",
        "pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-wzrokowa-tyflopedagogika",
        "pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-intelektualna-oligofrenopedagogika",
        "etyka",
        "edukacja-dla-bezpieczenstwa",
        "przyroda-w-szkole-podstawowej",
        "informatyka-w-szkole",
        "pedagogika-marii-montessori",
        "wychowanie-fizyczne-w-szkole",
        "chemia-w-szkole",
        "jezyk-angielski-w-wychowaniu-przedszkolnym-i-edukacji-wczesnoszkolnej",
        "dydaktyka-jezyka-obcego-niemiecki",
        "edukacja-zdrowotna",
        "jezyk-polski",
        "psychoterapia",
        "seksuologia-praktyczna",
        "cyberpsychologia",
        "diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
        "psychologia-uzaleznien-z-terapia-uzaleznien",
        "psychologia-uzaleznien-uzaleznienia-behawioralne",
        "gerontologia",
        "socjoterapia",
        "doradztwo-zawodowe",
        "terapia-zajeciowa",
        "pedagogika-opiekunczo-wychowawcza",
      ];

      const uniqueCourseIds = [...new Set(courseIds)];

      const loadedCourses = await Promise.all(
        uniqueCourseIds.map((id) => loadCourseData(id, locale)),
      );

      setCourses(
        loadedCourses.filter((course): course is Course => course !== null),
      );
    }
    fetchCourses();
  }, [locale, searchTerm, sortBy]);

  const categories = [
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
  ];

  const filteredCourses = useMemo(() => {
    const filtered = courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.banerDescription
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeTab === "all" ||
        (activeTab === "popular" && course.isPopular) ||
        course.category.toLowerCase().replace(/ /g, "-") === activeTab;
      return matchesSearch && matchesCategory;
    });

    if (sortBy === "title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "price") {
      filtered.sort((a, b) => {
        const priceA = Number.parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
        const priceB = Number.parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
        return priceA - priceB;
      });
    }

    return filtered;
  }, [courses, activeTab, searchTerm, sortBy]);

  return (
    <div id="kierunki" className="w-full bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
          {t("courses")}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Input
            type="search"
            placeholder={t("searchPlaceholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/2 lg:w-1/3 bg-blue-50 border border-blue-700 placeholder:text-blue-700 text-blue-700"
          />
          <Select
            value={sortBy}
            onValueChange={(value) => setSortBy(value as SortOption)}
          >
            <SelectTrigger className="w-full sm:w-auto border border-blue-700 text-blue-700 bg-blue-50">
              <SelectValue placeholder={t("sortBy")} />
            </SelectTrigger>
            <SelectContent className="bg-blue-50 border border-blue-700 text-blue-700">
              <SelectItem value="default">{t("sortDefault")}</SelectItem>
              <SelectItem value="title">{t("sortTitle")}</SelectItem>
              <SelectItem value="price">{t("sortPrice")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs
          defaultValue="all"
          onValueChange={(value) => setActiveTab(value as CategoryId)}
          className="space-y-4"
        >
          <TabsList className="flex flex-wrap justify-start gap-2 w-fit h-auto ">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-3 py-1 text-sm sm:text-base font-normal whitespace-nowrap text-blue-700 border bg-blue-50 border-blue-700 data-[state=active]:bg-blue-700 data-[state=active]:text-blue-50"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
