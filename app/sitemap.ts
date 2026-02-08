import { locales } from "@/i18n/i18n.config";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://isp.rybnikonline.eu";

  const staticRoutes = [
    "",
    "/kierunki",
    "/rekrutacja",
    "/faq",
    "/kontakt",
    "/odbior-dokumentow",
    "/polityka-prywatnosci",
    "/referencje",
    "/regulamin",
    "/standardy-ochrony-maloletnich-w-placowkach-oswiatowych",
    "/wazne-dokumenty",
    "/wykladowcy",
  ];

  const sitemap: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1 : 0.8,
    })),
  );

  const courses = [
    "zarzadzanie-oswiata",
    "pedagogika-specjalna-edukacja-terapia-i-wspomaganie-osob-z-zaburzeniami-ze-spektrum-autyzmu",
    "psychoterapia",
    "edukacja-integracyjna-wlaczajaca",
    "pedagogika-specjalna-wczesne-wspomaganie-rozwoju-dziecka",
    "logopedia",
    "trener-umiejetnosci-spolecznych",
    "seksuologia-praktyczna",
    "cyberpsychologia",
    "diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci",
    "psychologia-uzaleznien-z-terapia-uzaleznien",
    "psychologia-uzaleznien-uzaleznienia-behawioralne",
    "przyroda-w-szkole-podstawowej",
    "pedagogika-korekcyjna",
    "pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-intelektualna-oligofrenopedagogika",
    "integracja-sensoryczna-z-terapia-reki",
    "przygotowanie-pedagogiczne",
    "etyka",
    "edukacja-dla-bezpieczenstwa",
    "pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-sluchowa-surdopedagogika",
    "pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-wzrokowa-tyflopedagogika",
    "informatyka-w-szkole",
    "pedagogika-marii-montessori",
    "wychowanie-fizyczne-w-szkole",
    "chemia-w-szkole",
    "jezyk-angielski-w-wychowaniu-przedszkolnym-i-edukacji-wczesnoszkolnej",
    "dydaktyka-jezyka-obcego-niemiecki",
    "edukacja-zdrowotna",
    "jezyk-polski",
  ];

  const courseUrls: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    courses.map((course) => ({
      url: `${baseUrl}/${locale}/kierunek/${course}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    })),
  );

  const recruitmentRoutes = ["formularz-rekrutacyjny"];
  const recruitmentUrls: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    recruitmentRoutes.map((route) => ({
      url: `${baseUrl}/${locale}/rekrutacja/${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    })),
  );

  return [...sitemap, ...courseUrls, ...recruitmentUrls];
}
