"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VideoItem {
  id: string;
  title: string;
}

interface Direction {
  key: string; // unikalny slug zakładki
  name: string; // widoczna nazwa kierunku
  cover: string; // mini-hero w tabie
  videos: VideoItem[];
}

const directions: Direction[] = [
  {
    key: "zosw",
    name: "Zarządzanie oświatą",
    cover: "/assets/zarzadzanie-filmiki.jpg",
    videos: [
      {
        id: "5TrlWNsWuo0",
        title: "Parafilie - Bogusław Barański",
      },
      {
        id: "xdle6x8KB5Q",
        title: "Tajemnica skuteczności..? - Marek Florczyk",
      },
      {
        id: "Yx-6Sa5D49M",
        title: "Realizacja wydatków w placówce - Małgorzata Solowska",
      },
      {
        id: "T118UVm55ow",
        title: "Dzieci do 3 lat (odkrywanie i badanie) - Anna Ławniczak",
      },
      {
        id: "fGZVHgjFDsk",
        title: "Cykl życia zespołu - Marek Florczyk",
      },
      {
        id: "d1Gpzvrs7LM",
        title: "Prawo wewnętrzne - zasady tworzenia - Marek Florczyk",
      },
    ],
  },
  {
    key: "logo",
    name: "Logopedia",
    cover: "/assets/logopedia-filmiki.jpg",
    videos: [
      {
        id: "OyBqB-1jWkM",
        title:
          "Mózg dziecka a wysoka technologia – co warto wiedzieć? - Natalia Chruściel Janas",
      },
      {
        id: "Wuwu0Rr39Wk",
        title: "Metody w pracy logopedycznej - Natalia Chruściel Janas",
      },
      {
        id: "qYKaA-sajJk",
        title: "Rozwój mowy dziecka - Natalia Chruściel Janas",
      },
      {
        id: "VwBZrzf_8ck",
        title: "Propozycja programu terapii logopedycznej - Julita Rozmus",
      },
      {
        id: "iR3QT4BW2qU",
        title: "Bazowe funkcje komunikacyjne - Natalia Chruściel Janas",
      },
      {
        id: "3oh6h-ajlDE",
        title: "Czerwone flagi rozwoju mowy - Natalia Chruściel Janas",
      },
    ],
  },
  {
    key: "prep",
    name: "Przygotowanie pedagogiczne",
    cover: "/assets/pedagogiczne-filmiki.jpg",
    videos: [
      {
        id: "-p5uiipzzdI",
        title: "Porozumienie bez przemocy - Anna Ławniczak",
      },
      {
        id: "QvpaG_Aid0I",
        title: "Sztuczna inteligencja a mózg człowieka - Małgorzata Solowska",
      },
      {
        id: "m4Fan1TR9x8",
        title:
          "Wprowadzenie do zagadnienia pedagogiki outdoor. Funkcja i rola wycieczki w szkolnych - Anna Falkowska",
      },
      {
        id: "B_Ky8Zp0XEg",
        title: "Praca z klasą zróżnicowaną - Małgorzata Solowska",
      },
      {
        id: "Bo0_xZfEn3c",
        title:
          "Jakie kompetencje powinnien mieć nauczyciel? - Małgorzata Solowska",
      },
    ],
  },
  {
    key: "si",
    name: "SI",
    cover: "/assets/integracjasensoryczna-filmiki.jpg",
    videos: [
      {
        id: "2z6gOWzfD6g",
        title:
          "Zachowania charakteryzujące syndrom Zaburzeń Modulacji Sensorycznej - Marcin Machowski",
      },
      {
        id: "4J6TPMi2soc",
        title:
          "Krótka i szybka obserwacja zaburzeń małej motoryki - Marcin Machowski",
      },
      {
        id: "xpC8PKwyIdU",
        title:
          "Nieprawidłowości, które mogą się pojawić w poszczególnych systemach - Marcin Machowski",
      },
      {
        id: "lTpAeWnJk3s",
        title: "Co to jest terapia ręki i po co ona jest?  - Marcin Machowski",
      },
      {
        id: "_4yx0pAb1kE",
        title: "Terapia ręki - pisanie - Monika Kromolan",
      },
      {
        id: "3XOdZZ_toXE",
        title: "Terapia ręki - Kolorowanie - Monika Kromolan",
      },
    ],
  },
  {
    key: "aut",
    name: "Autyzm",
    cover: "/assets/autyzm-filmiki.jpg",
    videos: [
      {
        id: "WQm9tPg5YyE",
        title: "Zaburzenia neurorozwojowe – rozwój",
      },
      {
        id: "UJl3YlzI8zY",
        title: "Definicja ASD",
      },
      {
        id: "fbKTbwM0U3U",
        title: "Etiologia zaburzeń ze spektrum autyzmu",
      },
      {
        id: "QoTi9TBtWUc",
        title: "Biologiczne uwarunkowania autyzmu - Julita Rozmus",
      },
      {
        id: "gdcvp2amV4A",
        title: "Autyzm – geneza słowa – jego znaczenie – Julita Rozmus",
      },
      {
        id: "h7PcNsgZal4",
        title:
          "Charakterystyczne cechy zaburzeń mowy w autyzmie wczesnodziecięcym – Julita Rozmus",
      },
    ],
  },
];

export default function ZajeciaPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <section className="space-y-6 text-center max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight"
        >
          Zobacz nasze zajęcia
        </motion.h1>
        <p className="text-gray-600">
          Krótkie fragmenty wykładów i warsztatów pozwolą Ci poczuć atmosferę
          studiów i poznać prowadzących.
        </p>
        <Button asChild size="lg" className="mx-auto">
          <Link href="/rekrutacja">Aplikuj na studia</Link>
        </Button>
      </section>

      <Tabs defaultValue={directions[0].key} className="space-y-10">
        <TabsList className="max-w-full overflow-x-auto whitespace-nowrap rounded-xl bg-slate-100 p-2">
          {directions.map(({ key, name }) => (
            <TabsTrigger key={key} value={key} className="px-5">
              {name}
            </TabsTrigger>
          ))}
        </TabsList>

        {directions.map(({ key, cover, videos, name }) => (
          <TabsContent key={key} value={key} className="space-y-8">
            <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow">
              <Image
                src={cover}
                alt={name}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/60 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold">{name}</h2>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map(({ id, title }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
                    <div className="relative w-full h-0 pb-[56.25%]">
                      <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full rounded-t-md"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="font-medium">{title}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
