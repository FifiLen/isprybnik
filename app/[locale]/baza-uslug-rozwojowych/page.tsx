"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { BookOpen, Globe2, Clock, CalendarDays } from "lucide-react";
import Markdown from "markdown-to-jsx";

export default function BazaUslugRozwojowychPage() {
  const regions = [
    {
      name: "mazowieckim",
      slug: "mazowieckie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-mazowieckie",
      img: "/assets/warszawa-bur.png",
    },
    {
      name: "pomorskim",
      slug: "pomorskie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-pomorskie",
      img: "/assets/gdansk-bur.jpg",
    },
    {
      name: "zachodniopomorskim",
      slug: "zachodniopomorskie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-zachodniopomorskie",
      img: "/assets/szczecin-bur.jpg",
    },
    {
      name: "wielkopolskim",
      slug: "wielkopolskie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-wielkopolskie",
      img: "/assets/poznan-bur.jpg",
    },
    {
      name: "warminsko-mazurskim",
      slug: "warminsko-mazurskie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-warminsko-mazurskie",
      img: "/assets/olsztyn-bur.jpg",
    },
    {
      name: "świętokrzyskim",
      slug: "swietokrzyskie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-swietokrzyskie",
      img: "/assets/kielce-bur.jpg",
    },
    {
      name: "śląskim",
      slug: "slaskie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-slaskie",
      img: "/assets/katowice.jpg",
    },
    {
      name: "podlaskim",
      slug: "podlaskie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-podlaskie",
      img: "/assets/bialystok-bur.jpg",
    },
    {
      name: "dolnośląskim",
      slug: "dolnoslaskie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-dolnoslaskie",
      img: "/assets/wroclaw-bur.jpg",
    },
    {
      name: "kujawsko-pomorskim",
      slug: "kujawsko-pomorskie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-kujawsko-pomorskie",
      img: "/assets/bydgoszcz-bur.jpg",
    },
    {
      name: "lubelskim",
      slug: "lubelskie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-lubelskie",
      img: "/assets/lublin.jpg",
    },
    {
      name: "lubuskim",
      slug: "lubuskie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-lubuskie",
      img: "/assets/zielonagora-bur.jpg",
    },
    {
      name: "łódzkim",
      slug: "lodzkie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-lodzkie",
      img: "/assets/lodz-bur.jpg",
    },
    {
      name: "małopolskim",
      slug: "malopolskie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-malopolskie",
      img: "/assets/krakow-bur.jpg",
    },
    {
      name: "opolskim",
      slug: "opolskie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-opolskie",
      img: "/assets/opole-bur.jpg",
    },
    {
      name: "podkarpackim",
      slug: "podkarpackie",
      href: "https://www.parp.gov.pl/component/site/site/bur-psf-podkarpackie",
      img: "/assets/rzeszow-bur.jpg",
    },
  ];

  const categories = [
    "Studia podyplomowe",
    "Szkolenia zawodowe",
    "Kursy językowe",
    "Warsztaty kompetencji miękkich",
    "Szkolenia IT",
    "Doradztwo biznesowe",
  ];
  const trainings = [
    {
      title:
        "Trener TUS – Trener Umiejętności Społecznych w przedszkolu i wychowaniu wczesnoszkolnym (stopień I)",
      desc: "Szkolenie z dodatkowym pakietem 24h wykładów e-learningowych do odsłuchania po zakończeniu zajęć na żywo.",
      time: "24 godziny",
      date: "01.10.2025 – 05.11.2025",
      link: "https://uslugirozwojowe.parp.gov.pl/uslugi/view?id=2685226",
    },
    {
      title:
        "Diagnoza kliniczna ADOS-2 – szkolenie certyfikowane i kwalifikacyjne z Marianną Murin",
      desc: "Zaawansowane szkolenie z protokołu obserwacji ADOS-2 do diagnozowania zaburzeń ze spektrum autyzmu.",
      time: "56 godzin",
      date: "29.11.2025 – 14.12.2025",
      link: "https://uslugirozwojowe.parp.gov.pl/uslugi/view?id=2771436",
    },
    {
      title:
        "Diagnoza zaburzeń przetwarzania sensorycznego i tworzenie ścieżek terapeutycznych",
      desc: "Praktyczne szkolenie prowadzone przez Marcina Machowskiego (Pan Niedźwiadek), łączące teorię z projektowaniem terapii.",
      time: "40 godzin",
      date: "04.10.2025 – 25.10.2025",
      link: "https://uslugirozwojowe.parp.gov.pl/uslugi/view?id=2686144",
    },
  ];
  const steps = [
    {
      n: "1",
      t: "Zgłoś się do operatora",
      d: "Wybierz operatora realizującego projekt w Twoim województwie i skontaktuj się z nim.",
    },
    {
      n: "2",
      t: "Złóż fiszkę zgłoszeniową",
      d: "Złóż fiszkę u operatora. Po pozytywnej weryfikacji zostaniesz zakwalifikowany/a do udziału w projekcie.",
    },
    {
      n: "3",
      t: "Załóż konto w BUR i wybierz nasze szkolenie",
      d: "Zarejestruj się w Bazie Usług Rozwojowych, wybierz nasze szkolenie i przekaż kartę operatorowi do akceptacji.",
    },
    {
      n: "4",
      t: "Podpisz umowę i rozpocznij szkolenie",
      d: "Po akceptacji usługi podpisz umowę z operatorem i rozpocznij szkolenie zgodnie z harmonogramem.",
    },
    {
      n: "5",
      t: "Oceń szkolenie po zakończeniu",
      d: "Wypełnij ankietę w BUR w ciągu 7 dni – to warunek rozliczenia dofinansowania.",
    },
  ];

  const faqs = [
    {
      q: "Czy muszę mieć firmę?",
      a: "Nie. Dostępne są projekty dla osób indywidualnych (self-learning).",
    },
    {
      q: "Jakie dofinansowanie mogę uzyskać?",
      a: "Od 50 % do 95 % kosztów usługi – w zależności od regionu.",
    },
    {
      q: "Czy mogę łączyć wsparcia?",
      a: "Tak, o ile inny program nie wyklucza kumulacji pomocy publicznej.",
    },
    {
      q: "Czy muszę być zatrudniony, żeby skorzystać z kursu?",
      a: "To zależy od województwa i projektu. W wielu przypadkach osoby bezrobotne lub nieaktywne zawodowo również mogą uzyskać dofinansowanie.",
    },
    {
      q: "⁠Czy osoby z całej Polski mogą skorzystać z BUR?",
      a: "Tak. Program działa w całej Polsce, ale rodzaj dofinansowania zależy od Twojego województwa. Każde województwo ma swoich operatorów i zasady.",
    },
  ];

  return (
    <>
      <Image
        src="/assets/baner-bur-studia.jpg"
        alt="Baza Usług Rozwojowych – baner"
        width={0}
        height={0}
        quality={100}
        sizes="100vw"
        priority
        className="w-screen h-auto object-cover"
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold border-l-4 border-blue-700 pl-4">
            Czym jest BUR?
          </h2>

          <p>
            <strong>Baza Usług Rozwojowych (BUR)</strong> to ogólnopolska
            platforma Polskiej Agencji Rozwoju Przedsiębiorczości, na której
            przedsiębiorcy i osoby dorosłe mogą znaleźć sprawdzone usługi
            edukacyjne i doradcze współfinansowane z funduszy UE.
          </p>

          <div className="space-y-4 divide-y divide-gray-300">
            <div className="pt-4 first:pt-0">
              <h3 className="font-semibold">Dla kogo?</h3>
              <p className="text-sm text-gray-600">
                Mikro-, małe i średnie firmy oraz osoby prywatne inwestujące we
                własny rozwój.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold">Skala oferty</h3>
              <p className="text-sm text-gray-600">
                Ponad 10 000 aktywnych szkoleń, studiów podyplomowych i usług
                doradczych z całej Polski.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold">Finansowanie</h3>
              <p className="text-sm text-gray-600">
                Nawet 95 % kosztów usługi pokrywane jest z bonów otrzymanych od
                operatora regionalnego.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold border-l-4 border-blue-700 pl-4">
            Dla kogo przeznaczone są środki z&nbsp;projektu?
          </h2>

          <p>
            <strong>Baza Usług Rozwojowych (BUR)</strong> wraz
            z&nbsp;regionalnym
            <em> Podmiotowym Systemem Finansowania (PSF)</em> działa w&nbsp;14
            województwach i&nbsp;zapewnia dofinansowanie od&nbsp;
            <strong>50&nbsp;%</strong> do&nbsp;<strong>95&nbsp;%</strong>
            kosztu usługi rozwojowej. Ze środków mogą skorzystać zarówno
            przedsiębiorcy, jak i&nbsp;osoby dorosłe uczące się z&nbsp;własnej
            inicjatywy (projekty indywidualne). Mazowsze i&nbsp;Pomorze
            korzystają z&nbsp;odrębnych mechanizmów wsparcia.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Mikro, małe i średnie przedsiębiorstwa (MŚP)",
                desc: "Firmy do 249 pracowników mogą zgłaszać siebie i zatrudnionych.",
              },
              {
                title: "Pracownicy MŚP",
                desc: "Właściciele i personel podnoszący kwalifikacje zawodowe.",
              },
              {
                title: "Osoby samozatrudnione",
                desc: "Jednoosobowe działalności gospodarcze i freelancerzy.",
              },
              {
                title: "Osoby dorosłe (projekty indywidualne)",
                desc: "Każdy dorosły mieszkaniec województw PSF, niezależnie od etatu.",
              },
              {
                title: "Organizacje non-profit / JST",
                desc: "Fundacje, stowarzyszenia i jednostki samorządu – w ramach reguł PSF.",
              },
              {
                title: "Zakres terytorialny",
                desc: "Dofinansowanie w 14 województwach; Mazowieckie i Pomorskie posiadają własne instrumenty.",
              },
            ].map(({ title, desc }) => (
              <Card key={title} className="shadow-sm">
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-sm text-gray-600">
            Cel szczegółowy&nbsp;EFS+.CP4.G &ndash; wspieranie uczenia się przez
            całe życie, elastycznych ścieżek podnoszenia i zmiany kwalifikacji
            oraz mobilności zawodowej.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-l-4 border-blue-700 pl-4">
            Poziom i terminy wsparcia
          </h2>
          <p>
            Intensywność pomocy wynosi od 50 % do 95 % kosztów usługi – zależnie
            od województwa. Projekty trwają do 31&nbsp;grudnia&nbsp;2027&nbsp;r.
          </p>
        </section>

        <section id="jak-skorzystac" className="space-y-8">
          <h2 className="text-2xl font-semibold border-l-4 border-blue-700 pl-4">
            Jak skorzystać z BUR? – 5 kroków
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(({ n, t, d }) => (
              <Card key={n} className="shadow-sm h-full">
                <CardContent className="p-6 space-y-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white font-semibold">
                    {n}
                  </span>
                  <h3 className="font-medium">{t}</h3>
                  <p className="text-sm text-gray-600">{d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-10 py-16 bg-blue-50 rounded-3xl px-4 sm:px-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
              Przykładowe szkolenia z dofinansowaniem
            </h2>
            <p className="text-blue-800 text-sm sm:text-base">
              Sprawdź nasze autorskie programy dostępne w Bazie Usług
              Rozwojowych (BUR)
            </p>
            <button className=" py-2 px-4 text-center bg-blue-700 text-white rounded-lg">
              <a
                href="https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/szukaj?dostawcyUslug%5B%5D=53144&mozliwoscDofinansowania=0"
                target="_blank"
              >
                Spawdź nasze usługi
              </a>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title:
                  "Diagnoza kliniczna ADOS-2 – szkolenie certyfikowane i kwalifikacyjne z Marianną Murin",
                desc: "Zaawansowane szkolenie z protokołu obserwacji ADOS-2 do diagnozowania zaburzeń ze spektrum autyzmu.",
                time: "56 godzin",
                date: "02.08.2025 – 19.08.2025",
                link: "https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/szukaj?dostawcyUslug%5B%5D=53144&mozliwoscDofinansowania=0",
                mode: "Zdalna w czasie rzeczywistym",
              },
              {
                title:
                  "Trener TUS – Trener Umiejętności Społecznych – młodzież i osoby dorosłe – stopień II",
                desc: "Intensywne szkolenie dla osób chcących prowadzić treningi umiejętności społecznych dla młodzieży i dorosłych.",
                time: "24 godziny",
                date: "07.08.2025 – 11.09.2025",
                link: "https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/szukaj?dostawcyUslug%5B%5D=53144&mozliwoscDofinansowania=0",
                mode: "Zdalna w czasie rzeczywistym",
              },
              {
                title:
                  "Diagnoza zaburzeń przetwarzania sensorycznego i tworzenie ścieżek terapeutycznych",
                desc: "Praktyczne szkolenie prowadzone przez Marcina Machowskiego (Pan Niedźwiadek), łączące teorię z projektowaniem terapii.",
                time: "40 godzin",
                date: "04.10.2025 – 25.10.2025",
                link: "https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/szukaj?dostawcyUslug%5B%5D=53144&mozliwoscDofinansowania=0",
                mode: "Stacjonarne / tryb mieszany <br/> (do potwierdzenia)",
              },
              {
                title:
                  "Asystent nauczyciela w przedszkolu – wsparcie dzieci w wieku 3–7 lat",
                desc: "Kurs w placówce z akredytacją Śląskiego Kuratora Oświaty. KOD ZAWODU: 531202",
                time: "120 godzin",
                date: "01.08.2025 – 24.08.2025",
                link: "https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/szukaj?dostawcyUslug%5B%5D=53144&mozliwoscDofinansowania=0",
                mode: "Zdalna w czasie rzeczywistym",
              },
              {
                title:
                  "Asystent nauczyciela w szkole podstawowej oraz w klasach integracyjnych i szkole specjalnej",
                desc: "Kurs w placówce z akredytacją Śląskiego Kuratora Oświaty. KOD ZAWODU: 531204",
                time: "120 godzin",
                date: "04.08.2025 – 03.09.2025",
                link: "https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/szukaj?dostawcyUslug%5B%5D=53144&mozliwoscDofinansowania=0",
                mode: "Zdalna w czasie rzeczywistym",
              },
              {
                title:
                  "Diagnoza dzieci z zaburzeniami rozwojowymi – Etapy diagnozy, opiniowanie, przygotowanie Indywidualnego Planu Terapii",
                desc: "Kompleksowe szkolenie dotyczące diagnozy i planowania terapii dzieci z zaburzeniami rozwojowymi.",
                time: "44 godziny",
                date: "04.08.2025 – 06.10.2025",
                link: "https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/szukaj?dostawcyUslug%5B%5D=53144&mozliwoscDofinansowania=0",
                mode: "Zdalna w czasie rzeczywistym",
              },
              {
                title: "Międzynarodowy egzamin TELC B2 – język angielski",
                desc: "Egzamin dożywotni, bez potrzeby powtarzania go co kilka lat.",
                time: "6 godzin",
                date: "10.09.2025 – 10.09.2025",
                link: "https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/szukaj?dostawcyUslug%5B%5D=53144&mozliwoscDofinansowania=0",
                mode: "Rybnik / stacjonarnie",
              },
              {
                title:
                  "Międzynarodowy egzamin TELC B1/B2 – język polski jako obcy dla osób starających się o rezydencję w Polsce",
                desc: "Egzamin państwowy z języka polskiego dla cudzoziemców ubiegających się o pobyt w Polsce.",
                time: "4 godziny",
                date: "11.09.2025 – 11.09.2025",
                link: "https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/szukaj?dostawcyUslug%5B%5D=53144&mozliwoscDofinansowania=0",
                mode: "Rybnik / stacjonarnie",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                <CardContent className="p-6 space-y-4 flex flex-col h-full">
                  <div className="flex items-center gap-2 text-sm text-blue-700 font-semibold">
                    <BookOpen className="w-5 h-5" /> Szkolenie z dofinansowaniem
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex-grow">{item.desc}</p>
                  <div className="space-y-1 text-sm text-gray-500"></div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-700 hover:text-blue-900 font-medium text-sm"
                  >
                    Zobacz w BUR →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-l-4 border-blue-700 pl-4">
            Najczęstsze pytania (FAQ)
          </h2>
          <Accordion type="single" collapsible>
            {faqs.map(({ q, a }) => (
              <AccordionItem value={q} key={q}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {regions.map(({ name, href, img }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              className="group block overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-4 space-y-2 bg-white">
                <h3 className="font-semibold leading-snug">
                  Podmiotowy System Finansowania w&nbsp;woj. {name}
                </h3>
                <span className="block h-0.5 w-10 bg-gray-800" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
