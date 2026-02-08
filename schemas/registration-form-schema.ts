import { z } from "zod";

const currentYear = new Date().getFullYear();

export const contactFormSchema = z.object({
  // Nowe pole studyFormat
  studyFormat: z.enum(["stacjonarnie", "hybrydowo"], {
    required_error: "Wybierz format studiów",
    invalid_type_error: "Wybierz format studiów",
  }),

  program: z.string().nonempty("Wybierz kierunek studiów"),

  name: z
    .string()
    .min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki")
    .max(100, "Imię i nazwisko nie może przekraczać 100 znaków"),
  birthYear: z
    .string()
    .regex(/^\d{4}$/, "Rok urodzenia musi być 4-cyfrową liczbą")
    .refine(
      (year) => {
        const numYear = Number.parseInt(year, 10);
        return numYear >= 1900 && numYear <= currentYear;
      },
      { message: `Rok urodzenia musi być pomiędzy 1900 a ${currentYear}` },
    ),
  birthMonth: z
    .string()
    .regex(/^(0[1-9]|1[0-2])$/, "Miesiąc musi być liczbą od 01 do 12"),
  birthDay: z
    .string()
    .regex(/^(0[1-9]|[12]\d|3[01])$/, "Dzień musi być liczbą od 01 do 31"),
  birthCity: z
    .string()
    .min(2, "Miasto urodzenia musi mieć co najmniej 2 znaki")
    .max(100, "Miasto urodzenia nie może przekraczać 100 znaków"),
  birthProvince: z
    .string()
    .min(2, "Województwo urodzenia musi mieć co najmniej 2 znaki")
    .max(100, "Województwo urodzenia nie może przekraczać 100 znaków"),
  birthCountry: z
    .string()
    .min(2, "Kraj urodzenia musi mieć co najmniej 2 znaki")
    .max(100, "Kraj urodzenia nie może przekraczać 100 znaków"),
  citizenship: z
    .string()
    .min(2, "Obywatelstwo musi mieć co najmniej 2 znaki")
    .max(100, "Obywatelstwo nie może przekraczać 100 znaków"),
  pesel: z.string().regex(/^\d{11}$/, "PESEL musi składać się z 11 cyfr"),

  street: z
    .string()
    .min(2, "Nazwa ulicy musi mieć co najmniej 2 znaki")
    .max(100, "Nazwa ulicy nie może przekraczać 100 znaków"),
  buildingNumber: z.string().min(1, "Numer budynku jest wymagany"),
  city: z
    .string()
    .min(2, "Nazwa miejscowości musi mieć co najmniej 2 znaki")
    .max(100, "Nazwa miejscowości nie może przekraczać 100 znaków"),
  province: z
    .string()
    .min(2, "Nazwa województwa musi mieć co najmniej 2 znaki")
    .max(100, "Nazwa województwa nie może przekraczać 100 znaków"),
  postalCode: z
    .string()
    .regex(/^\d{2}-\d{3}$/, "Kod pocztowy musi być w formacie XX-XXX"),
  phoneNumber: z
    .string()
    .regex(/^\d{9}$/, "Numer telefonu musi składać się z 9 cyfr"),
  email: z.string().email("Nieprawidłowy adres email"),

  // Pola dla adresu korespondencyjnego (opcjonalne)
  correspondenceStreet: z
    .string()
    .min(2, "Nazwa ulicy korespondencyjnej musi mieć co najmniej 2 znaki")
    .max(100, "Nazwa ulicy korespondencyjnej nie może przekraczać 100 znaków")
    .optional(),
  correspondenceBuildingNumber: z
    .string()
    .min(1, "Numer budynku korespondencyjnego jest wymagany")
    .optional(),
  correspondenceCity: z
    .string()
    .min(
      2,
      "Nazwa miejscowości korespondencyjnej musi mieć co najmniej 2 znaki",
    )
    .max(
      100,
      "Nazwa miejscowości korespondencyjnej nie może przekraczać 100 znaków",
    )
    .optional(),
  correspondenceProvince: z
    .string()
    .min(
      2,
      "Nazwa województwa korespondencyjnego musi mieć co najmniej 2 znaki",
    )
    .max(
      100,
      "Nazwa województwa korespondencyjnego nie może przekraczać 100 znaków",
    )
    .optional(),
  correspondencePostalCode: z
    .string()
    .regex(
      /^\d{2}-\d{3}$/,
      "Kod pocztowy korespondencyjny musi być w formacie XX-XXX",
    )
    .optional(),

  professionalTitle: z
    .string()
    .min(2, "Tytuł zawodowy musi mieć co najmniej 2 znaki")
    .max(100, "Tytuł zawodowy nie może przekraczać 100 znaków"),
  universityName: z
    .string()
    .min(2, "Nazwa uczelni musi mieć co najmniej 2 znaki")
    .max(200, "Nazwa uczelni nie może przekraczać 200 znaków"),
  graduationYear: z
    .string()
    .regex(/^\d{4}$/, "Rok ukończenia musi być 4-cyfrową liczbą")
    .refine(
      (year) => {
        const numYear = Number.parseInt(year, 10);
        return numYear >= 1900 && numYear <= currentYear;
      },
      { message: `Rok ukończenia musi być pomiędzy 1900 a ${currentYear}` },
    ),
  diplomaNumber: z.string().min(1, "Numer dyplomu jest wymagany"),
  diplomaFile: z
    .instanceof(File)
    .refine(
      (file) => file.size <= 5 * 1024 * 1024,
      "Rozmiar pliku nie może przekraczać 5MB",
    )
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
      "Plik musi być w formacie JPEG, PNG lub PDF",
    ),
  otherFiles: z
    .array(
      z
        .instanceof(File)
        .refine(
          (file) => file.size <= 5 * 1024 * 1024,
          "Rozmiar pliku nie może przekraczać 5MB",
        )
        .refine(
          (file) =>
            ["image/jpeg", "image/png", "application/pdf"].includes(file.type),
          "Plik musi być w formacie JPEG, PNG lub PDF",
        ),
    )
    .optional(),

  paymentAgreement: z
    .boolean()
    .refine((val) => val === true, "Zgoda na opłaty jest wymagana"),
  regulationsAgreement: z
    .boolean()
    .refine(
      (val) => val === true,
      "Zgoda na przestrzeganie regulaminów jest wymagana",
    ),
  dataProcessingAgreement: z
    .boolean()
    .refine(
      (val) => val === true,
      "Zgoda na przetwarzanie danych osobowych jest wymagana",
    ),
  contactAgreement: z
    .boolean()
    .refine((val) => val === true, "Zgoda na kontakt jest wymagana"),

  // Pola opcjonalne
  marketingAgreement: z.boolean().optional(),
  commercialInfoAgreement: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
