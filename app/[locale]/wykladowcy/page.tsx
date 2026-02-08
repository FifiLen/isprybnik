"use client";
import WykladowcaCard from "@/components/WykladowcaCard";
import type React from "react";
import { useTranslations } from "next-intl";

const WykladowcyPage: React.FC = () => {
  const t = useTranslations("WykladowcyPage");

  const wykladowcy = t.raw("wykladowcy");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl tracking-tight font-bold text-center py-10">
        {t("title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wykladowcy.map(
          (
            wykladowca: {
              imieNazwisko: string;
              tytulZawodowy: string;
              opis: string;
            },
            index: React.Key | null | undefined,
          ) => (
            <WykladowcaCard
              key={index}
              imieNazwisko={wykladowca.imieNazwisko}
              tytulZawodowy={wykladowca.tytulZawodowy}
              opis={wykladowca.opis}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default WykladowcyPage;
