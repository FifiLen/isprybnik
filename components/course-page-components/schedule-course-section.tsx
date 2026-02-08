import React from "react";
import { useTranslations } from "next-intl";

interface ScheduleProps {
  schedule: string[];
  scheduleInfo: string;
}

const groupDatesByMonth = (dates: string[]): Record<string, string[]> => {
  if (!Array.isArray(dates)) {
    return {};
  }

  const t = useTranslations("ScheduleCourseSection");

  const months = t("months").split(",");

  return dates.reduce((acc: Record<string, string[]>, date) => {
    const [day, month, year] = date.split(".");
    const monthIndex = parseInt(month, 10) - 1;
    const monthName = `${months[monthIndex]} ${year}`;

    if (!acc[monthName]) {
      acc[monthName] = [];
    }

    acc[monthName].push(date);
    return acc;
  }, {});
};

export const ScheduleCourseSection: React.FC<ScheduleProps> = ({
  schedule = [],
  scheduleInfo,
}) => {
  const t = useTranslations("ScheduleCourseSection");
  const groupedSchedule = Array.isArray(schedule)
    ? groupDatesByMonth(schedule)
    : {};

  return (
    <section id="harmonogram" className="w-full bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="mb-3 text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-800">
          {t("schedule")}
        </h2>
        <p className="text-xl text-zinc-700 tracking-tighter mb-8">
          {scheduleInfo}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(groupedSchedule).map((month, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tighter text-zinc-700">
                {month}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {groupedSchedule[month].map((date, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center"
                  >
                    <span className="text-2xl font-bold text-blue-800">
                      {date.split(".")[0]}
                    </span>
                    <span className="text-sm text-gray-600">
                      {month.split(" ")[0]}
                    </span>
                    <span className="text-sm text-gray-600">
                      {date.split(".")[2]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
