// Psychoterapia.ts
import { Course } from "../utils/types";

export const psychoterapia: Course = {
  category: "psychologia i psychoterapia",
  isPopular: false,
  id: "psychoterapia",
  title: "Psychoterapia",
  banerDescription:
    "Przygotowanie do samodzielnego prowadzenia psychoterapii zaburzeń psychicznych dzieci, młodzieży oraz osób dorosłych.",
  description: `<ul className="list-disc list-inside space-y-2">
    <li>
      kadra zarządzająca placówkami oświatowymi
      <br />
      <span className="ml-4">(szkoły, przedszkola, żłobki, poradnie, ośrodki wychowawcze, inne)</span>
    </li>
    <li>pedagogów</li>
    <li>psychologów</li>
    <li>logopedów</li>
    <li>terapeutów</li>
    <li>nauczycieli</li>
    <li>rodziców</li>
    <li>opiekunów prawnych</li>
    <li>wychowawców</li>
    <li>osób pracujących z dziećmi, młodzieżą, osobami dorosłymi, seniorami</li>
    <li>
      osób pracujących z dziećmi, młodzieżą i osobami dorosłymi z&nbsp;niepełnosprawnościami,
      powodującymi brak lub ograniczenie możliwości komunikacji i funkcjonowania w społeczeństwie
    </li>
  </ul>`,
  description2:
    "Studia specjalistyczne kwalifikacyjne, które spełniają wymogi określone przez Narodowy Fundusz Zdrowia, niezbędne do&nbsp;ubiegania się o&nbsp;pracę na&nbsp;stanowisku psychoterapeuty (zgodnie z&nbsp;nowelizacją ustawy o&nbsp;ochronie zdrowia psychicznego art. 5 ustawy z&nbsp;dn. 19 sierpnia 1994r., która weszła w&nbsp;życie z&nbsp;dniem 1 stycznia 2024r.) oraz Ustawy o&nbsp;niektórych zawodach medycznych z&nbsp;dnia 17 sierpnia 2023r. (Dz.U. 2023 poz.1972) Art. 87 obowiązujący od&nbsp;01 stycznia 2024r. w&nbsp;którym została doprecyzowana definicja psychoterapii oraz wymagań wobec psychoterapeuty. <br /><br /> Celem dwustopniowych, ośmiosemestralnych studiów podyplomowych jest przygotowanie słuchaczy do&nbsp;samodzielnego prowadzenia psychoterapii zaburzeń psychicznych dzieci, młodzieży oraz osób dorosłych.",
  description3: "",
  description4: "Po ukończeniu studiów absolwent ma możliwość certyfikacji.",
  descriptionP1:
    "<b>Program czteroletnich, dwustopniowych studiów podyplomowych w&nbsp;wymiarze 1200 godzin</b> obejmuje zagadnienia specjalistyczne z&nbsp;psychoterapii oraz&nbsp;zagadnienia ogólne związane z&nbsp;funkcjonowaniem psychicznym człowieka, psychopatologią i&nbsp;zróżnicowanymi metodami diagnozy i&nbsp;leczenia zaburzeń psychicznych, metodami weryfikacji empirycznej skuteczności oddziaływań terapeutycznych, oraz zagadnienia etyczne i&nbsp;prawne w&nbsp;psychoterapii. <br /><br /> Po&nbsp;ukończeniu studiów absolwent ma&nbsp;możliwość certyfikacji.",
  duration: "8 semestrów",
  price: "40000zł",
  payments: "40 x 1000zł",
  // form: "100% wykłady online w czasie rzeczywistym",
  scheduleInfo: "",
  schedule: [
    "26.10.2024",
    "27.10.2024",
    "16.11.2024",
    "17.11.2024",
    "23.11.2024",
    "24.11.2024",
    "30.11.2024",
    "01.12.2024",
    "07.12.2024",
    "08.12.2024",
    "14.12.2024",
    "15.12.2024",
    "18.01.2025",
    "19.01.2025",
    "25.01.2025",
    "26.01.2025",
    "15.02.2025",
    "16.02.2025",
    "01.03.2025",
    "02.03.2025",
    "08.03.2025",
    "09.03.2025",
    "15.03.2025",
    "16.03.2025",
    "22.03.2025",
    "23.03.2025",
    "29.03.2025",
    "30.03.2025",
    "05.04.2025",
    "06.04.2025",
    "12.04.2025",
    "13.04.2025",
    "10.05.2025",
    "11.05.2025",
    "17.05.2025",
    "18.05.2025",
    "24.05.2025",
    "25.05.2025",
    "25.10.2025",
    "26.10.2025",
    "01.11.2025",
    "02.11.2025",
    "15.11.2025",
    "16.11.2025",
    "22.11.2025",
    "23.11.2025",
    "29.11.2025",
    "30.11.2025",
    "05.12.2025",
    "06.12.2025",
    "12.12.2025",
    "13.12.2025",
    "17.01.2026",
    "18.01.2026",
    "07.02.2026",
    "08.02.2026",
    "21.02.2026",
    "22.02.2026",
    "28.02.2026",
    "14.03.2026",
    "15.03.2026",
    "21.03.2026",
    "22.03.2026",
    "11.04.2026",
    "12.04.2026",
    "18.04.2026",
    "19.04.2026",
    "25.04.2026",
    "26.04.2026",
    "09.05.2026",
    "10.05.2026",
    "23.05.2026",
    "24.05.2026",
    "30.05.2026",
    "31.05.2026",
    "06.06.2026",
    "07.06.2026",
    "20.06.2026",
    "21.06.2026",
  ],
  practicalHours: "150h praktyk/semestr",
  modules: [
    {
      title:
        "Pierwszy poziom kształcenia <br /> <span className='text-blue-50 tracking-tight text-sm'>(4 semestry, 600 godz. , 150 godz. /semestr)</span>",
      topics: [
        {
          title: "Semestr 1",
          subtopics: [
            { title: "Etyka w pracy/zawodzie psychoterapeuty" },
            { title: "Prawo i regulacje w toku psychoterapii" },
            {
              title:
                "Wprowadzenie do psychoterapii dzieci i nastolatków, rodzin, par, grupowej, indywidualnej",
            },
            { title: "Nurty w psychoterapii" },
            { title: "Aspekty rozwoju psychospołecznego człowieka" },
            {
              title: "Diagnoza dla potrzeb psychoterapii – narzędzia badawcze",
            },
            {
              title: "Wskazania i konsekwencje farmakoterapii w psychoterapii",
            },
          ],
        },
        {
          title: "Semestr 2",
          subtopics: [
            { title: "Diagnoza psychiatryczna" },
            { title: "Diagnoza psychometryczna" },
            { title: "Diagnoza różnicowa" },
            { title: "Diagnoza funkcjonalna" },
            { title: "Diagnoza osobowości" },
            { title: "Diagnoza uzależnień behawioralnych" },
            { title: "Diagnoza uzależnień chemicznych" },
            { title: "Diagnoza par" },
            { title: "Diagnoza psychoterapeutyczna" },
          ],
        },
        {
          title: "Semestr 3",
          subtopics: [
            { title: "Psychoanaliza i psychoterapia psychodynamiczna" },
            { title: "Psychoterapia behawioralna" },
            { title: "Psychoterapia poznawczo-behawioralna (CBT)" },
            { title: "Psychoterapia Gestalt" },
            { title: "Terapia skoncentrowana na rozwiązaniach" },
            { title: "Psychoterapia systemowa" },
            { title: "Psychoterapia psychodynamiczna" },
            { title: "Terapia akceptacji i zaangażowania (ACT)" },
            { title: "Psychoterapia humanistyczna" },
          ],
        },
        {
          title: "Semestr 4",
          subtopics: [
            {
              title:
                "Mechanizmy występowania zaburzeń psychicznych, czynniki biologiczne, psychologiczne, społeczne",
            },
            {
              title:
                "Choroba psychiczna a zaburzenie psychiczne. Podział zaburzeń psychicznych według klasyfikacji ICD-10",
            },
            {
              title:
                "Zaburzenia psychiczne organiczne, włącznie z zespołami objawowymi, np. otępienie w chorobie Alzheimera, Picka, Creutzfeldta-Jakoba, Huntingtona, Parkinsona lub otępienie naczyniowe, majaczenie, amnestia, halucynacje",
            },
            {
              title:
                "Zaburzenia psychiczne i zaburzenia zachowania spowodowane używaniem substancji psychoaktywnych, np. spowodowane używaniem alkoholu, substancji uspokajających i nasennych, tytoniu, substancji psychoaktywnych",
            },
            {
              title:
                "Schizofrenia, zaburzenia typu schizofrenii (schizotypowe) i urojeniowe, np. schizofrenia paranoidalna, schizofrenia katatoniczna, zaburzenia urojeniowe, wielopostaciowe zaburzenia psychotyczne",
            },
            {
              title:
                "Zaburzenia nastroju (afektywne), np. epizod maniakalny, epizod depresyjny, choroba afektywna dwubiegunowa",
            },
            {
              title:
                "Zaburzenia nerwicowe, związane ze stresem i pod postacią somatyczną, np. fobia społeczna, zaburzenia lękowe z napadami lęku, natręctwa, ciężka reakcja na stres, zaburzenia dysocjacyjne, uporczywe bóle psychogenne, zaburzenia hipochondryczne, nerwica",
            },
            {
              title:
                "Zespoły behawioralne związane z zaburzeniami fizjologicznymi i czynnikami fizycznymi, np. zaburzenia odżywiania, nieorganiczne zaburzenia snu (bezsenność, somnambulizm, lęki nocne, koszmary senne), zaburzenia seksualne (awersja seksualna i brak przyjemności seksualnej, zaburzenia orgazmu, wytrysk przedwczesny, pochwica, dyspareunia, nadmierny popęd seksualny), zaburzenia psychiczne związane z porodem",
            },
            {
              title:
                "Zaburzenia osobowości i zachowania dorosłych, np. specyficzne zaburzenia osobowości (osobowość paranoiczna, schizoidalna, dyssocjalna, chwiejna emocjonalnie, lękliwa), patologiczny hazard, patologiczne podpalanie (piromania), patologiczne kradzieże (kleptomania), transseksualizm, zaburzenia identyfikacji płciowej w dzieciństwie, zaburzenia preferencji seksualnych, fetyszyzm, ekshibicjonizm, pedofilia, sadomasochizm, zaburzenia dojrzewania seksualnego, orientacja seksualna niezgodna z ego, zaburzenie związków seksualnych",
            },
            { title: "Niepełnosprawność umysłowa" },
            {
              title:
                "Zaburzenia rozwoju psychicznego (psychologicznego), np. specyficzne zaburzenia rozwoju mowy i języka, specyficzne zaburzenia rozwoju umiejętności szkolnych, całościowe zaburzenia rozwojowe (autyzm, zespół Aspergera)",
            },
            {
              title:
                "Zaburzenia zachowania i emocji rozpoczynające się zwykle w dzieciństwie i w wieku młodzieńczym, np. zaburzenie aktywności i uwagi, depresyjne zaburzenie zachowania, lęk przed separacją w dzieciństwie, zaburzenie lękowe w postaci fobii w dzieciństwie, lęk społeczny w dzieciństwie, tiki nerwowe",
            },
            { title: "Nieokreślone zaburzenia psychiczne" },
          ],
        },
      ],
    },
    {
      title:
        "Drugi poziom kształcenia <br /> <span className='text-blue-50 tracking-tight text-base'>Staż kliniczny V – VIII semestr</span> <br /><span className='text-blue-50 tracking-tight text-sm'> W tym:  <br />- 150 godz. zegarowych w oddziale psychiatrii całodobowej lub w izbie przyjęć przy oddziale psychiatrycznym całodobowym lub w oddziale psychiatrycznym w oddziale dziennym; w tym 50 godz. zegarowych superwizja dzieci, młodzieży i dorosłych <br /> - 250 godz. zegarowych pracy klinicznej pod opieką merytoryczną psychiatry lub psychoterapeuty lub psychologa klinicznego; w tym 50 godz. zegarowych  superwizja dzieci, młodzieży i dorosłych <br /> 50 godz zajęć /semestr </span>",
      topics: [
        {
          title: "Semestr 5",
          subtopics: [
            { title: "Psychoterapia dzieci" },
            { title: "Psychoterapia młodzieży" },
            { title: "Psychoterapia rodzin" },
            { title: "Psychoterapia par" },
            { title: "Psychoterapia indywidualna" },
            { title: "Psychoterapia grupowa" },
            { title: "Psychoterapia zaburzeń seksualnych" },
            { title: "Psychoterapia uzależnień" },
            { title: "Staż kliniczny" },
            { title: "Superwizja" },
          ],
        },
        {
          title: "Semestr 6",
          subtopics: [
            { title: "Psychiatria" },
            { title: "Seksuologia" },
            { title: "Psychopatologia człowieka dorosłego" },
            { title: "Zaburzenia obsesyjno-kompulsyjne" },
            { title: "Psychopatologia dzieci" },
            { title: "Staż kliniczny" },
            { title: "Superwizja" },
          ],
        },
        {
          title: "Semestr 7",
          subtopics: [
            { title: "Psychopatologia dzieci" },
            { title: "Hipnoza: kurs podstawowy i zaawansowany" },
            { title: "Staż kliniczny" },
            { title: "Superwizja" },
          ],
        },
        {
          title: "Semestr 8",
          subtopics: [
            {
              title:
                "Studiowanie wybranego z nurtów: psychodynamiczne, behawioralne, kognitywne, terapii zorientowanej na klienta, hipnoza naturalistyczna, mindfulness, body-work, metody systemowe, BSFT i inne techniki psychoterapeutyczne są asymilowane do teorii integratywnej systemowej",
            },
            { title: "Staż kliniczny" },
            { title: "Superwizja" },
          ],
        },
      ],
    },
  ],
  faculty:
    "Program będzie prowadzony przez wykwalifikowaną kadrę specjalistów z dziedziny psychologii, psychiatrii, terapii uzależnień oraz innych pokrewnych dziedzin. W skład kadry wejdą zarówno wykładowcy akademiccy, jak i praktycy z wieloletnim doświadczeniem klinicznym.",
  practices: `<ul className="list-disc list-inside space-y-2">
    <li>
      150 godz. zegarowych w&nbsp;oddziale psychiatrii całodobowej&nbsp;lub w&nbsp;izbie przyjęć przy
      oddziale psychiatrycznym całodobowym lub&nbsp;w&nbsp;oddziale psychiatrycznym w&nbsp;oddziale
      dziennym; w&nbsp;tym 50 godz. zegarowych superwizja dzieci, młodzieży i&nbsp;dorosłych
    </li>
    <li>
      250 godz. zegarowych pracy klinicznej pod opieką merytoryczną psychiatry lub psychoterapeuty lub
      psychologa klinicznego; w&nbsp;tym 50 godz. zegarowych superwizja dzieci, młodzieży i&nbsp;dorosłych
    </li>
  </ul>`,
  evaluation:
    "Ocena efektów kształcenia będzie opierać się na: przygotowaniu pracy projektowej w obszarze psychoterapii, odbyciu stażu klinicznego oraz zaliczeniu egzaminów końcowych.",
  jobOpportunities:
    "Absolwenci kierunku 'Psychoterapia' będą przygotowani do&nbsp;pracy w&nbsp;różnorodnych placówkach terapeutycznych, takich jak ośrodki zdrowia psychicznego, poradnie psychoterapeutyczne, szpitale psychiatryczne, a&nbsp;także w&nbsp;organizacjach pozarządowych zajmujących się zdrowiem psychicznym. Dodatkowo, będą mogli prowadzić własną praktykę terapeutyczną oraz&nbsp;uczestniczyć w&nbsp;badaniach naukowych i&nbsp;programach profilaktycznych.",
  invite: `<div class="">
    <p class="text-gray-100">
      Rozpocznij swoją zawodową przygodę jako <strong class="font-semibold">psychoterapeuta</strong>.
      <br />
      Inwestuj w swoją przyszłość i realizuj swoje nowe perspektywy zawodowe.
    </p>
  </div>`,
};
