"use client";

import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import {
  MdOutlineDocumentScanner,
  MdSchool,
  MdSchedule,
  MdVerifiedUser,
  MdContactSupport,
  MdAttachMoney,
  MdEventNote,
  MdOutlineGroupAdd,
  MdSignalWifiStatusbarNotConnected,
} from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { RiFileUserLine } from "react-icons/ri";
import Link from "next/link";
import { LuPenLine } from "react-icons/lu";
import { TfiFiles } from "react-icons/tfi";
import { useTranslations } from "next-intl";
import Markdown from "markdown-to-jsx";
import { IoBagCheckOutline } from "react-icons/io5";
import { TbUserQuestion } from "react-icons/tb";

const FaqSection = () => {
  const t = useTranslations("FaqSection");

  const recruitmentQuestions = [
    {
      icon: (
        <MdOutlineDocumentScanner className="w-7 h-7 mb-2" aria-hidden="true" />
      ),
      question: "documentDeadline",
      answer: "documentDeadlineAnswer",
    },

    {
      icon: <IoIosPaper className="w-7 h-7 mb-2" aria-hidden="true" />,
      question: "diplomaCopy",
      answer: "diplomaCopyAnswer",
    },

    {
      icon: <MdVerifiedUser className="w-7 h-7 mb-2" aria-hidden="true" />,
      question: "doctoralDiploma",
      answer: "doctoralDiplomaAnswer",
    },
    {
      icon: (
        <HiOutlineClipboardCheck className="w-7 h-7 mb-2" aria-hidden="true" />
      ),
      question: "shortenTwoSemesters",
      answer: "shortenTwoSemestersAnswer",
    },
    {
      icon: <MdOutlineGroupAdd className="w-7 h-7 mb-2" aria-hidden="true" />,
      question: "groupRec",
      answer: "groupRecAnswer",
    },
  ];

  const internshipQuestions = [
    {
      icon: <LuPenLine className="w-7 h-7 mb-2" aria-hidden="true" />,
      question: "observationSheet",
      answer: "observationSheetAnswer",
    },
    {
      icon: <RiFileUserLine className="w-7 h-7 mb-2" aria-hidden="true" />,
      question: "observationSheetModule",
      answer: "observationSheetModuleAnswer",
    },
    {
      icon: <MdSchedule className="w-7 h-7 mb-2" aria-hidden="true" />,
      question: "internshipDeadline",
      answer: "internshipDeadlineAnswer",
    },
    {
      icon: <MdEventNote className="w-7 h-7 mb-2" aria-hidden="true" />,
      question: "internshipSettlement",
      answer: "internshipSettlementAnswer",
    },
    {
      icon: <TfiFiles className="w-7 h-7 mb-2" aria-hidden="true" />,
      question: "completeDocuments",
      answer: "completeDocumentsAnswer",
    },
    {
      icon: <MdContactSupport className="w-7 h-7 mb-2" aria-hidden="true" />,
      question: "documentStatus",
      answer: "documentStatusAnswer",
    },
    {
      icon: <TbUserQuestion className="w-7 h-7 mb-2" aria-hidden="true" />,
      question: "parcticsMagnolia",
      answer: "parcticsMagnoliaAnswer",
    },
    {
      icon: (
        <MdSignalWifiStatusbarNotConnected
          className="w-7 h-7 mb-2"
          aria-hidden="true"
        />
      ),
      question: "parcticsOnline",
      answer: "parcticsOnlineAnswer",
    },
    {
      icon: <IoBagCheckOutline className="w-7 h-7 mb-2" aria-hidden="true" />,
      question: "courseOrder",
      answer: "courseOrderAnswer",
    },
  ];

  return (
    <div id="faq" className="bg-gray-200 py-12 md:py-28">
      <div className="max-w-full mx-auto px-4 lg:px-20">
        <FaRegQuestionCircle className="w-10 h-10 mb-5" aria-hidden="true" />
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tighter">
              {t("title")}
            </h2>
            <p className="mt-4 text-base md:text-lg leading-7 text-gray-600">
              {t("description")}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-3 mt-6 md:mt-0">
            <Link
              aria-label={t("browseCourses")}
              href="/kierunek"
              className="px-3 py-2 bg-[#9E5AE2] text-white font-medium rounded-md"
            >
              {t("browseCourses")}
            </Link>
            <Link
              aria-label={t("askQuestion")}
              href="/kontakt"
              className="px-3 py-2 bg-white text-zinc-700 font-medium rounded-md"
            >
              {t("askQuestion")}
            </Link>
          </div>
        </div>
        <h4 className="mt-12 md:mt-20 mb-10 text-4xl text-white bg-[#9E5AE2] w-fit p-1 px-2 rounded-md font-medium tracking-tighter">
          {t("recruitment")}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 text-gray-600">
          {recruitmentQuestions.map((item, index) => (
            <div key={index}>
              {item.icon}
              <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
                {t(item.question)}
              </h4>
              <p className="mt-2 text-base md:text-lg">
                <Markdown>{t(item.answer)}</Markdown>
              </p>
            </div>
          ))}
        </div>

        <h4 className="mt-12 md:mt-20 mb-10 text-4xl text-white bg-[#9E5AE2] w-fit p-1 px-2 rounded-md font-medium tracking-tighter">
          {t("internships")}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 text-gray-600">
          {internshipQuestions.map((item, index) => (
            <div key={index}>
              {item.icon}
              <h4 className="font-medium text-zinc-800 tracking-tight text-xl md:text-2xl">
                {t(item.question)}
              </h4>
              <p className="mt-2 text-base md:text-lg">{t(item.answer)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
