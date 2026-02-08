import Script from "next/script";

export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "ISP Rybnik",
    legalName: "Instytut Studiów Podyplomowych Rybnik",
    url: "https://isp.rybnikonline.eu",
    logo: "https://isp.rybnikonline.eu/logo.png",
    description:
      "Instytut Studiów Podyplomowych w Rybniku oferuje szeroki wybór kierunków studiów podyplomowych dla osób chcących zdobyć nowe kwalifikacje i rozwijać swoje kompetencje zawodowe. Dołącz do nas i podnieś swoje kwalifikacje w dogodnych warunkach. Sprawdź naszą ofertę i wybierz kierunek, który najlepiej odpowiada Twoim potrzebom!",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Magnolii 25, 44-207",
      addressLocality: "Rybnik",
      addressRegion: "Śląskie",
      addressCountry: "PL",
    },
    telephone: ["+48 797 173 501", "+48 502 162 365"],
    email: "nowekwalifikacjerybnik@gmail.com",
    sameAs: [],
    offers: {
      "@type": "Offer",
      category: "Studia podyplomowe online",
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kierunki studiów podyplomowych",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Zarządzanie Oświatą",
          url: "https://isp.rybnikonline.eu/pl/kierunek/zarzadzanie-oswiata",
          description:
            "Kierunek przygotowujący do efektywnego zarządzania placówkami oświatowymi.",
          price: "2600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Pedagogika Specjalna (Spektrum Autyzmu)",
          url: "https://isp.rybnikonline.eu/pl/kierunek/pedagogika-specjalna-edukacja-terapia-i-wspomaganie-osob-z-zaburzeniami-ze-spektrum-autyzmu",
          description:
            "Kierunek poświęcony terapii i wspomaganiu rozwoju osób z autyzmem.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Psychoterapia",
          url: "https://isp.rybnikonline.eu/pl/kierunek/psychoterapia",
          description:
            "Studia przygotowujące do prowadzenia psychoterapii zaburzeń psychicznych dzieci, młodzieży i dorosłych.",
          price: "40000",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Edukacja integracyjna i włączająca",
          url: "https://isp.rybnikonline.eu/pl/kierunek/edukacja-integracyjna-wlaczajaca",
          description:
            "Program nauczania uwzględniający techniki integracyjne i włączające uczniów z niepełnosprawnościami.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Pedagogika Specjalna (Wczesne wspomaganie rozwoju dziecka)",
          url: "https://isp.rybnikonline.eu/pl/kierunek/pedagogika-specjalna-wczesne-wspomaganie-rozwoju-dziecka",
          description:
            "Koncentracja na metodyce i terapii wspierającej prawidłowy rozwój dziecka.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Logopedia",
          url: "https://isp.rybnikonline.eu/pl/kierunek/logopedia",
          description:
            "Przygotowanie do diagnozy i terapii zaburzeń mowy u dzieci i dorosłych.",
          price: "5200",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Trener Umiejętności Społecznych",
          url: "https://isp.rybnikonline.eu/pl/kierunek/trener-umiejetnosci-spolecznych",
          description:
            "Wspieranie i rozwijanie kompetencji społecznych w różnych grupach.",
          price: "2500",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Seksuologia praktyczna",
          url: "https://isp.rybnikonline.eu/pl/kierunek/seksuologia-praktyczna",
          description:
            "Teoria i praktyka w zakresie terapii i doradztwa seksuologicznego.",
          price: "6000",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Cyberpsychologia",
          url: "https://isp.rybnikonline.eu/pl/kierunek/cyberpsychologia",
          description:
            "Analiza wpływu technologii i internetu na funkcjonowanie psychiczne jednostek.",
          price: "8000",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Diagnoza i strategie terapeutyczne w leczeniu hiperseksualności",
          url: "https://isp.rybnikonline.eu/pl/kierunek/diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
          description:
            "Specjalistyczne studia z zakresu diagnozy i terapii zaburzeń hiperseksualnych.",
          price: "6000",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Psychologia uzależnień z terapią uzależnień",
          url: "https://isp.rybnikonline.eu/pl/kierunek/psychologia-uzaleznien-z-terapia-uzaleznien",
          description:
            "Połączenie psychologii z metodami terapeutycznymi w leczeniu uzależnień.",
          price: "7500",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Psychologia uzależnień (Uzależnienia behawioralne)",
          url: "https://isp.rybnikonline.eu/pl/kierunek/psychologia-uzaleznien-uzaleznienia-behawioralne",
          description:
            "Diagnoza i terapia uzależnień od czynności (np. hazard, internet).",
          price: "4200",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Przyroda w szkole podstawowej",
          url: "https://isp.rybnikonline.eu/pl/kierunek/przyroda-w-szkole-podstawowej",
          description:
            "Metodyka nauczania przyrody na etapie szkoły podstawowej.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Pedagogika korekcyjna (terapia pedagogiczna)",
          url: "https://isp.rybnikonline.eu/pl/kierunek/pedagogika-korekcyjna",
          description:
            "Diagnoza i terapia trudności w uczeniu się oraz zachowaniu.",
          price: "4200",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Pedagogika Specjalna (Oligofrenopedagogika)",
          url: "https://isp.rybnikonline.eu/pl/kierunek/pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-intelektualna-oligofrenopedagogika",
          description:
            "Przygotowanie do pracy z osobami z niepełnosprawnością intelektualną.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Integracja sensoryczna z terapią ręki",
          url: "https://isp.rybnikonline.eu/pl/kierunek/integracja-sensoryczna-z-terapia-reki",
          description:
            "Diagnostyka i terapia zaburzeń integracji sensorycznej i motoryki małej.",
          price: "4200",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Przygotowanie pedagogiczne",
          url: "https://isp.rybnikonline.eu/pl/kierunek/przygotowanie-pedagogiczne",
          description: "Kwalifikacje do wykonywania zawodu nauczyciela.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Etyka",
          url: "https://isp.rybnikonline.eu/pl/kierunek/etyka",
          description:
            "Studia z zakresu etyki i filozofii moralności w kontekście nauczania.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Edukacja dla bezpieczeństwa",
          url: "https://isp.rybnikonline.eu/pl/kierunek/edukacja-dla-bezpieczenstwa",
          description:
            "Przygotowanie do prowadzenia zajęć z bezpieczeństwa i obronności.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Pedagogika specjalna (Surdopedagogika)",
          url: "https://isp.rybnikonline.eu/pl/kierunek/pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-sluchowa-surdopedagogika",
          description:
            "Metodyka edukacji i rehabilitacji osób niesłyszących lub niedosłyszących.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Pedagogika specjalna (Tyflopedagogika)",
          url: "https://isp.rybnikonline.eu/pl/kierunek/pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-wzrokowa-tyflopedagogika",
          description:
            "Metodyka pracy z osobami z niepełnosprawnością wzrokową.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Informatyka w szkole",
          url: "https://isp.rybnikonline.eu/pl/kierunek/informatyka-w-szkole",
          description:
            "Przygotowanie do nauczania informatyki na poziomie szkolnym.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Pedagogika Marii Montessori",
          url: "https://isp.rybnikonline.eu/pl/kierunek/pedagogika-marii-montessori",
          description:
            "Metoda Montessori w edukacji przedszkolnej i wczesnoszkolnej.",
          price: "4200",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Wychowanie fizyczne w szkole",
          url: "https://isp.rybnikonline.eu/pl/kierunek/wychowanie-fizyczne-w-szkole",
          description:
            "Metodyka nauczania wychowania fizycznego i organizacji zajęć sportowych.",
          price: "4200",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Chemia w szkole",
          url: "https://isp.rybnikonline.eu/pl/kierunek/chemia-w-szkole",
          description:
            "Wiedza i metodyka nauczania chemii na szczeblu szkoły podstawowej i średniej.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Język angielski w wychowaniu przedszkolnym i edukacji wczesnoszkolnej",
          url: "https://isp.rybnikonline.eu/pl/kierunek/jezyk-angielski-w-wychowaniu-przedszkolnym-i-edukacji-wczesnoszkolnej",
          description:
            "Nauczanie języka angielskiego wśród najmłodszych dzieci.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Dydaktyka języka obcego (język niemiecki)",
          url: "https://isp.rybnikonline.eu/pl/kierunek/dydaktyka-jezyka-obcego-niemiecki",
          description: "Metodyka kształcenia języka niemieckiego w szkołach.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Edukacja zdrowotna",
          url: "https://isp.rybnikonline.eu/pl/kierunek/edukacja-zdrowotna",
          description:
            "Prozdrowotne podejście do edukacji na różnych etapach nauczania.",
          price: "3600",
          priceCurrency: "PLN",
        },
        {
          "@type": "Offer",
          name: "Język polski",
          url: "https://isp.rybnikonline.eu/pl/kierunek/jezyk-polski",
          description:
            "Warsztat dydaktyczny w zakresie nauczania języka polskiego.",
          price: "3600",
          priceCurrency: "PLN",
        },
      ],
    },
  };

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
};
