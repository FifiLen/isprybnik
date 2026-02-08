"use client";

import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/UseMediaQuery";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Markdown from "markdown-to-jsx";
import { useTranslations } from "next-intl";

interface ProgramProps {
  course: {
    id: string;
    modules: Array<{
      title: string;
      topics: Array<{ title: string }>;
    }>;
  };
}

export function CourseProgramPsychotherapy({ course }: ProgramProps) {
  const t = useTranslations("CourseProgramPsychotherapy");
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  const renderTopics = (topics: Array<{ title: string }>) => (
    <ol className="space-y-4 ml-4 mt-4 list-decimal marker:text-blue-600 marker:font-semibold">
      {topics.map((topic, i) => (
        <li key={i} className="text-gray-700 tracking-tight pl-2">
          <span className="font-medium">{topic.title}</span>
        </li>
      ))}
    </ol>
  );

  const renderModuleContent = (
    module: { title: string; topics: Array<{ title: string }> },
    index: number,
  ) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      key={index}
      className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      {isLargeScreen ? (
        <div className="p-6">
          <h3 className="text-xl font-semibold tracking-tight text-blue-700 mb-4">
            <Markdown>{module.title}</Markdown>
          </h3>
          {renderTopics(module.topics)}
        </div>
      ) : (
        <Accordion type="single" collapsible>
          <AccordionItem value={`module-${index}`} className="border-none">
            <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-blue-700 hover:text-blue-800 hover:no-underline">
              <Markdown>{module.title}</Markdown>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              {renderTopics(module.topics)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </motion.div>
  );

  if (!course || !Array.isArray(course.modules)) {
    return (
      <section className="w-full bg-blue-950 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg text-blue-200">
            {t("noCourseProgram")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="program-studiow" className="w-full bg-blue-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("courseProgram")}
          </h2>
          <p className="text-lg text-blue-200">{t("courseDescription")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {course.modules.map((module, index) =>
            renderModuleContent(module, index),
          )}
        </motion.div>
      </div>
    </section>
  );
}
