"use client";

import React from "react";
import { Module } from "@/utils/types";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import Markdown from "markdown-to-jsx";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface ModulesProps {
  modules: Module[];
}

export function CourseProgram({ modules }: ModulesProps) {
  const t = useTranslations("CourseProgram");

  return (
    <section className="w-full bg-[#172554]">
      {" "}
      <div
        id="program-studiow"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("courseProgram")}
          </h2>
          <p className="text-lg text-blue-100">{t("courseDescription")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="multiple" className="space-y-4">
            {modules.map((module, index) => (
              <AccordionItem
                key={index}
                value={`module-${index}`}
                className="border-none"
              >
                <AccordionTrigger className="flex text-white w-full px-6 py-4 text-xl md:text-2xl tracking-tight font-semibold text-left bg-[#1e3a8a] hover:bg-[#1e40af] rounded-xl data-[state=open]:rounded-b-none transition-colors duration-200">
                  <div className="prose prose-invert max-w-none">
                    <Markdown>{module.title}</Markdown>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-[#1e3a8a] rounded-b-xl">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="mb-8 last:mb-0">
                      <h3 className="text-xl font-semibold tracking-tight text-white mb-4">
                        {topic.title}
                      </h3>
                      <ul className="grid gap-3 ml-4">
                        {topic.subtopics?.map((subtopic, subtopicIndex) => (
                          <li
                            key={subtopicIndex}
                            className="flex items-start gap-2 group"
                          >
                            <ChevronRight className="h-5 w-5 mt-0.5 text-blue-300 transition-transform duration-200 group-hover:translate-x-0.5" />
                            <span className="text-blue-50 leading-relaxed">
                              {subtopic.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
