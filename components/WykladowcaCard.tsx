"use client";

import type React from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface WykladowcaProps {
  imieNazwisko: string;
  tytulZawodowy: string;
  opis: string;
}

const WykladowcaCard: React.FC<WykladowcaProps> = ({
  imieNazwisko,
  tytulZawodowy,
  opis,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const skroconyOpis =
    opis.length > 120 ? opis.substring(0, 120) + "..." : opis;
  const t = useTranslations("WykladowcyPage");

  return (
    <div className="bg-white shadow-lg rounded-lg border-2 border-blue-700/50 overflow-hidden m-4">
      <div className="px-6 py-4">
        <h2 className="font-bold tracking-tight text-2xl mb-2">
          {imieNazwisko}
        </h2>
        <p className="text-blue-700 font-semibold tracking-tighter text-base mb-2">
          {tytulZawodowy}
        </p>
        <p className="text-gray-600 text-sm mb-4">{skroconyOpis}</p>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-blue-100 border-blue-700 text-blue-700"
            >
              {t("readMore")}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[825px]">
            <DialogHeader>
              <DialogTitle>{imieNazwisko}</DialogTitle>
              <DialogDescription>{tytulZawodowy}</DialogDescription>
            </DialogHeader>
            <p className="text-gray-600">{opis}</p>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default WykladowcaCard;
