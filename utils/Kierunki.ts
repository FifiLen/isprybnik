import { cyberpsychologia } from "../courses/cyberpsychologia";
import { diagnozaStrategieTerapeutyczneLeczeniuHiperseksualnosci } from "../courses/diagnoza-i-strategie-terapeutyczne-w-leczeniu-hiperseksualnosci";
import { edukacjaIntegracyjnaWlaczajaca } from "../courses/pedagogika-specjalna-edukacja-integracyjna-wlaczajaca";
import { etyka } from "../courses/etyka";
import { integracjaSensorycznaTerapiaReki } from "../courses/integracja-sensoryczna-z-terapia-reki";
import { logopedia } from "../courses/pedagogika-specjalna-logopedia";
import { oligofrenopedagogika } from "../courses/pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-intelektualna-oligofrenopedagogika";
import { pedagogikaKorekcyjna } from "../courses/pedagogika-korekcyjna";
// import { pedagogika-specjalna-edukacja-terapia-i-wspomaganie-osób-z-zaburzeniami-ze-spektrum-autyzmu } from "../courses/pedagogika-specjalna-autyzm";
import { przygotowaniePedagogiczne } from "../courses/przygotowanie-pedagogiczne";
import { psychologiaUzaleznienUzaleznieniaBehawioralne } from "../courses/psychologia-uzaleznien-uzaleznienia-behawioralne";
import { psychologiaUzaleznienTerapiaUzaleznien } from "../courses/psychologia-uzaleznien-z-terapia-uzaleznien";
import { psychoterapia } from "../courses/psychoterapia";

import { trenerUmiejetnosciSpolecznych } from "../courses/trener-umiejetnosci-spolecznych";
import { tyflopedagogika } from "../courses/pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-wzrokowa-tyflopedagogika";
import { wczesneWspomaganieRozwojuDziecka } from "../courses/pedagogika-specjalna-wczesne-wspomaganie-rozwoju-dziecka";
import { wychowanieDoZyciaWRodzinie } from "../courses/wychowanie-do-zycia-w-rodzinie";
import { zarzadzanieOswiata } from "../courses/zarzadzanie-oswiata";
import { informatyka } from "../courses/informatyka-w-szkole";
import { dydaktykaJezykaObcegoNiemiecki } from "../courses/dydaktyka-jezyka-obcego-niemiecki";
import { pedagogikaMariiMontessori } from "../courses/pedagogika-marii-montessori";
import { przyrodaWSzkolePodstawowej } from "../courses/przyroda-w-szkole-podstawowej";
import { edukacjaDlaBezpieczenstwa } from "../courses/edukacja-dla-bezpieczenstwa";
// import { rolnictwo } from "./Rolnictwo";
import { wychowanieFizyczneWSzkole } from "../courses/wychowanie-fizyczne-w-szkole";
import { chemiaWSzkole } from "../courses/chemia-w-szkole";
import { jezykAngielskiWWychowaniuPrzedszkolnymIEdukacjiWczesnoszkolnej } from "../courses/jezyk-angielski-w-wychowaniu-przedszkolnym-i-edukacji-wczesnoszkolnej";
import { Course } from "@/utils/types";
import { edukacjaZdrowotna } from "../courses/edukacja-zdrowotna";
import { jezykPolski } from "../courses/jezyk-polski";
import { seksuologiaPraktyczna } from "@/courses/seksuologia-praktyczna";
import { pedagogikaSpecjalnaAutyzm } from "@/courses/pedagogika-specjalna-edukacja-terapia-i-wspomaganie-osob-z-zaburzeniami-ze-spektrum-autyzmu";
import { surdopedagogika } from "@/courses/pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-sluchowa-surdopedagogika";
import { neurologopedia } from "@/courses/neurologopedia";
import gerontologia from "@/courses/gerontologia";
import doradztwoZawodowe from "@/courses/doradztwo-zawodowe";

export const courses: Course[] = [
  //   category: "psychologia i psychoterapia",

  psychoterapia,
  psychologiaUzaleznienTerapiaUzaleznien,
  psychologiaUzaleznienUzaleznieniaBehawioralne,
  diagnozaStrategieTerapeutyczneLeczeniuHiperseksualnosci,
  cyberpsychologia,
  seksuologiaPraktyczna,
  neurologopedia,
  gerontologia,
  //  category: "psychologia i psychoterapia",

  // category: "pedagogika specjalna i korekcyjna",

  logopedia,
  pedagogikaKorekcyjna,
  pedagogikaSpecjalnaAutyzm,
  // zrobione
  oligofrenopedagogika,
  // zrobione
  surdopedagogika,
  // zrobione
  tyflopedagogika,
  integracjaSensorycznaTerapiaReki,
  wczesneWspomaganieRozwojuDziecka,
  // zrobione
  edukacjaIntegracyjnaWlaczajaca,
  przygotowaniePedagogiczne,
  trenerUmiejetnosciSpolecznych,
  pedagogikaMariiMontessori,
  doradztwoZawodowe,

  // category: "pedagogika specjalna i korekcyjna",

  //  category: "zarządzanie i dydaktyka edukacyjna",

  zarzadzanieOswiata,

  etyka,
  // zrobione

  // wychowanieDoZyciaWRodzinie,
  informatyka,
  dydaktykaJezykaObcegoNiemiecki,

  // zrobione
  przyrodaWSzkolePodstawowej,

  //zrobione
  edukacjaDlaBezpieczenstwa,
  // rolnictwo, nie ma programu

  //zrobione
  wychowanieFizyczneWSzkole,
  // zrobione
  chemiaWSzkole,
  jezykAngielskiWWychowaniuPrzedszkolnymIEdukacjiWczesnoszkolnej,
  edukacjaZdrowotna,
  jezykPolski,

  // category: "zarządzanie i dydaktyka edukacyjna",
];
