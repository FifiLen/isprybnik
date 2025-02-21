"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  FaGraduationCap,
  FaLaptopHouse,
  FaArrowRight,
  FaCircle,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import { CgArrowRightO, CgArrowTopRightO } from "react-icons/cg";
import Markdown from "markdown-to-jsx";
import { useUserPreferences } from "@/components/providers/UserPreferencesContext";
import ComingSoonOverlay from "@/components/coming-soon-component";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { loadCourseData } from "@/utils/loadCourseData";
import { Course } from "@/utils/types";

const availableCourseIds = [
  "psychoterapia",
  "trener-umiejetnosci-spolecznych",
  "seksuologia-praktyczna",
  "cyberpsychologia",
  "diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
  "psychologia-uzaleznien-z-terapia-uzaleznien",
  "psychologia-uzaleznien-uzaleznienia-behawioralne",
];

const fontSizeStyles = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

function ImageLoader({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className="absolute object-cover inset-0 w-full h-full z-0"
    />
  );
}

export default function HeroHomePage() {
  const t = useTranslations("HeroHomePage");
  const locale = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { fontSize, highContrast } = useUserPreferences();
  const [coursesData, setCoursesData] = useState<Course[]>([]);

  const contrastStyles = highContrast
    ? "bg-[#FFFF00] text-black border-black"
    : "bg-gray-50 text-gray-900";

  const linkContrastStyles = highContrast
    ? "bg-black hover:bg-gray-800 text-white"
    : "bg-blue-800 hover:bg-blue-500 text-white";

  const badgeContrastStyles = highContrast
    ? "bg-black text-[#FFFF00]"
    : "bg-purple-500 text-white";

  useEffect(() => {
    async function fetchCoursesData() {
      const loadedCourses = await Promise.all(
        availableCourseIds.slice(0, 5).map(async (courseId) => {
          return await loadCourseData(courseId, locale);
        })
      );
      setCoursesData(loadedCourses);
    }
    fetchCoursesData();
  }, [locale]);

  const startAutoSlide = useCallback(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % coursesData.length);
      }, 10000);
      return () => clearInterval(interval);
    }
    return () => {}; // Return a no-op function if no interval is set
  }, [isPaused, coursesData.length]);

  useEffect(() => {
    if (!isPaused) {
      const cleanup = startAutoSlide();
      return () => cleanup();
    }
  }, [startAutoSlide, isPaused]);

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(currentIndex);
    }
  }, [currentIndex, carouselApi]);

  // Preload images
  useEffect(() => {
    coursesData.forEach((course) => {
      const img = new window.Image();
      img.src = `/assets/${course.id}.jpg`;
    });
  }, [coursesData]);

  const handleNavigation = (direction: "next" | "previous") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % coursesData.length;
      } else {
        return (prevIndex - 1 + coursesData.length) % coursesData.length;
      }
    });
  };

  const togglePause = () => setIsPaused((prev) => !prev);

  return (
    <div
      className={`relative isolate overflow-hidden h-[85vh] w-full ${contrastStyles} bg-gradient-to-br from-gray-50 to-gray-100`}
    >
      <Carousel setApi={setCarouselApi}>
        <CarouselContent className="h-[85vh]">
          {coursesData.map((course, index) => {
            return (
              <CarouselItem
                key={course.id}
                className="relative flex items-center justify-center h-full w-full transition-opacity duration-500 ease-in-out"
              >
                <Suspense
                  fallback={
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  }
                >
                  <ImageLoader
                    src={`/assets/${course.id}.jpg`}
                    alt={t("courseImageAlt", { title: course.title })}
                    priority={index === 0}
                  />
                </Suspense>
                {!availableCourseIds.includes(course.id) && (
                  <ComingSoonOverlay />
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 w-full h-full flex items-center"
                >
                  <div
                    className={`w-full lg:w-1/2 mx-4 md:mx-8 p-4 md:p-6 space-y-4 md:space-y-6 rounded-xl ${
                      fontSizeStyles[fontSize]
                    } lg:ml-16 bg-opacity-85 ${
                      highContrast ? "bg-gray-900" : "bg-blue-600"
                    }`}
                  >
                    <div className="mb-4 flex flex-wrap justify-start gap-2">
                      <Badge
                        className={`text-white ${badgeContrastStyles} flex items-center gap-2`}
                      >
                        <FaGraduationCap />
                        {t("postgraduateStudies")}
                      </Badge>
                    </div>
                    <h1
                      className={`text-2xl md:text-4xl font-extrabold tracking-tighter ${
                        highContrast ? "text-white" : "text-white"
                      }`}
                      dangerouslySetInnerHTML={{ __html: course.title }}
                    />
                    <p
                      className={`leading-6 md:leading-7 text-sm md:text-lg tracking-tight font-medium ${
                        highContrast ? "text-white" : "text-gray-200"
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: course.banerDescription.replace(/&nbsp;/g, " "),
                      }}
                    />
                    <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-2">
                      <Link
                        href="/rekrutacja"
                        className={`flex items-center gap-2 w-fit rounded-xl px-4 py-2 md:px-5 md:py-3 font-semibold ${linkContrastStyles} ${
                          !availableCourseIds.includes(course.id)
                            ? "opacity-50 cursor-not-allowed pointer-events-none"
                            : ""
                        }`}
                      >
                        {t("enrollButton")}{" "}
                        <CgArrowTopRightO className="text-xl md:text-2xl" />
                      </Link>
                      <Link
                        href={`/kierunek/${course.id}`}
                        className={`flex items-center gap-2 w-fit rounded-xl px-4 py-2 md:px-5 md:py-3 font-semibold ${
                          highContrast
                            ? "bg-black hover:bg-gray-800 text-white"
                            : "bg-gray-900 hover:bg-gray-700 text-white"
                        } ${
                          !availableCourseIds.includes(course.id)
                            ? "opacity-50 cursor-not-allowed pointer-events-none"
                            : ""
                        }`}
                      >
                        {t("learnMoreButton")}{" "}
                        <CgArrowRightO className="text-xl md:text-2xl" />
                      </Link>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-1 md:bottom-20 right-4 flex items-center space-x-2 p-2 rounded-full bg-zinc-800/40">
        <button
          aria-label={t("previousSlideAriaLabel")}
          onClick={() => handleNavigation("previous")}
          className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors duration-200 ease-in-out"
        >
          <FaArrowRight className="rotate-180" />
        </button>
        <div className="flex space-x-1">
          {Array.from({ length: coursesData.length }).map((_, index) => (
            <FaCircle
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer ${
                index === currentIndex ? "text-[#9E5AE2]" : "text-gray-100"
              }`}
              size={10}
              aria-label={t("goToSlideAriaLabel", { slideNumber: index + 1 })}
            />
          ))}
        </div>
        <button
          aria-label={t("nextSlideAriaLabel")}
          onClick={() => handleNavigation("next")}
          className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors duration-200 ease-in-out"
        >
          <FaArrowRight />
        </button>
        <button
          aria-label={
            isPaused ? t("resumeSlideAriaLabel") : t("pauseSlideAriaLabel")
          }
          onClick={togglePause}
          className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors duration-200 ease-in-out"
        >
          {isPaused ? <FaPlay /> : <FaPause />}
        </button>
      </div>
    </div>
  );
}
