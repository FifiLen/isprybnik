"use client";

import { motion } from "framer-motion";
import {
  TbSchool,
  TbDeviceLaptop,
  TbCalendarEvent,
  TbUsers,
  TbArrowRight,
} from "react-icons/tb";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function StudyFormatsSection() {
  const t = useTranslations("StudyFormats");

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="bg-blue-600 p-6 flex items-center gap-4">
              <div className="bg-white p-3 rounded-full">
                <TbSchool className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t("inPersonTitle")}
              </h3>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-700 mb-6">{t("inPersonDescription")}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <TbCalendarEvent className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("schedule")}
                    </h4>
                    <p className="text-gray-600">{t("inPersonSchedule")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TbUsers className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("interaction")}
                    </h4>
                    <p className="text-gray-600">{t("inPersonInteraction")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">
                  {t("bestFor")}
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <TbArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      {t("inPersonBestFor1")}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TbArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      {t("inPersonBestFor2")}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TbArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      {t("inPersonBestFor3")}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <Link href="/rekrutacja" className="block w-full">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    {t("enrollButton")}
                    <TbSchool className="h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
          >
            <div className="bg-purple-600 p-6 flex items-center gap-4">
              <div className="bg-white p-3 rounded-full">
                <TbDeviceLaptop className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t("hybridTitle")}
              </h3>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-700 mb-6">{t("hybridDescription")}</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <TbCalendarEvent className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("schedule")}
                    </h4>
                    <p className="text-gray-600">{t("hybridSchedule")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TbUsers className="h-6 w-6 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("interaction")}
                    </h4>
                    <p className="text-gray-600">{t("hybridInteraction")}</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
                <h4 className="font-semibold text-purple-800 mb-2">
                  {t("bestFor")}
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <TbArrowRight className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{t("hybridBestFor1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TbArrowRight className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{t("hybridBestFor2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TbArrowRight className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{t("hybridBestFor3")}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <Link href="/rekrutacja" className="block w-full">
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    {t("enrollButton")}
                    <TbDeviceLaptop className="h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            {t("additionalInfo")}
          </p>
          <Link href="/kontakt">
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              {t("contactButton")}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
