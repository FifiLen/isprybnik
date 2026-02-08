"use client";

import { Course } from "@/utils/types";
import { Poppins } from "next/font/google";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

interface Practices {
  course: Course;
}

export function CoursePractises({ course }: Practices) {
  const t = useTranslations("CoursePractises");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        <section id="praktyki">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div {...fadeInUp} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
                {t("internships")}
              </h2>
              <div
                className={`prose prose-lg max-w-none text-gray-600 ${poppins.className}`}
              >
                <Markdown>{course.practices}</Markdown>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/assets/about3.jpg"
                alt={t("internshipsImageAlt")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </section>

        <section id="ocena-i-ewaluacja">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 md:order-1"
            >
              <Image
                src="/assets/about5.jpg"
                alt={t("evaluationImageAlt")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div {...fadeInUp} className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
                {t("evaluationTitle")}
              </h2>
              <div
                className={`prose prose-lg max-w-none text-gray-600 ${poppins.className}`}
              >
                <Markdown>{course.evaluation}</Markdown>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="mozliwosci-zatrudnienia">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div {...fadeInUp} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
                {t("jobOpportunitiesTitle")}
              </h2>
              <div
                className={`prose prose-lg max-w-none text-gray-600 ${poppins.className}`}
              >
                <Markdown>{course.jobOpportunities}</Markdown>
              </div>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/assets/about6.jpg"
                alt={t("jobOpportunitiesImageAlt")}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
