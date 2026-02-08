"use client";
import { useFormContext } from "react-hook-form";
import type { ContactFormData } from "@/schemas/registration-form-schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export function StepOne() {
  const { control } = useFormContext<ContactFormData>();

  return (
    <>
      <FormField
        control={control}
        name="program"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Kierunek studiów podyplomowych</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Wybierz kierunek" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="gerontologia">Gerontologia</SelectItem>
                <SelectItem value="terapia-zajeciowa">
                  Pedagogika specjalna - Terapia zajęciowa
                </SelectItem>
                <SelectItem value="doradztwo-zawodowe">
                  Doradztwo zawodowe
                </SelectItem>
                <SelectItem value="pedagogika-opiekunczo-wychowawcza">
                  Pedagogika opiekuńczo-wychowawcza z poradnictwem młodzieżowym
                  i rodzinnym
                </SelectItem>
                <SelectItem value="socjoterapia">Socjoterapia</SelectItem>

                <SelectItem value="psychologia_i_psychoterapia">
                  Psychologia i psychoterapia
                </SelectItem>
                <SelectItem value="psychoterapia">Psychoterapia</SelectItem>
                <SelectItem value="neurologopedia">Neurologopedia</SelectItem>
                <SelectItem value="pedagogika_marii_montessori">
                  Pedagogika Marii Montessori
                </SelectItem>
                <SelectItem value="pedagogika_specjalna_i_korekcyjna">
                  Pedagogika specjalna i korekcyjna
                </SelectItem>
                <SelectItem value="zarzadzanie_i_dydaktyka_edukacyjna">
                  Zarządzanie i dydaktyka edukacyjna
                </SelectItem>

                <SelectItem value="seksuologia_praktyczna">
                  Seksuologia praktyczna
                </SelectItem>
                <SelectItem value="cyberpsychologia">
                  Cyberpsychologia
                </SelectItem>
                <SelectItem value="diagnoza_hiperseksualnosc">
                  Diagnoza i strategie terapeutyczne w leczeniu
                  hiperseksualności
                </SelectItem>
                <SelectItem value="psychologia_uzaleznien">
                  Psychologia uzależnień z terapią uzależnień
                </SelectItem>
                <SelectItem value="uzaleznienia_behawioralne">
                  Psychologia uzależnień - uzależnienia behawioralne
                </SelectItem>
                <SelectItem value="trener_umiejetnosci">
                  Trener umiejętności społecznych
                </SelectItem>
                <SelectItem value="logopedia">Logopedia</SelectItem>
                <SelectItem value="pedagogika-specjalna-edukacja-terapia-i-wspomaganie-osob-z-zaburzeniami-ze-spektrum-autyzmu">
                  Pedagogika specjalna edukacja terapia i wspomaganie osób z
                  zaburzeniami ze spektrum autyzmu
                </SelectItem>
                <SelectItem value="pedagogika_korekcyjna">
                  Pedagogika korekcyjna (terapia pedagogiczna)
                </SelectItem>
                <SelectItem value="pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-intelektualna-oligofrenopedagogika">
                  Pedagogika specjalna edukacja i rehabilitacja osób z
                  niepełnosprawnością intelektualną (oligofrenopedagogika)
                </SelectItem>
                <SelectItem value="pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-wzrokowa-tyflopedagogika">
                  Pedagogika specjalna edukacja i rehabilitacja osób z
                  niepełnosprawnością wzrokową (tyflopedagogika)
                </SelectItem>
                <SelectItem value="edukacja_integracyjna">
                  Edukacja integracyjna i włączająca
                </SelectItem>
                <SelectItem value="integracja_sensoryczna">
                  Integracja sensoryczna z terapią ręki
                </SelectItem>
                <SelectItem value="przygotowanie_pedagogiczne">
                  Przygotowanie pedagogiczne
                </SelectItem>
                <SelectItem value="przygotowanie_pedagogiczne_do_nauczania_przedmiotow_zawodowych">
                  Przygotowanie pedagogiczne do nauczania przedmiotów zawodowych
                </SelectItem>
                <SelectItem value="przygotowanie_pedagogiczne_dla_psychologow">
                  Przygotowanie pedagogiczne dla psychologów
                </SelectItem>
                <SelectItem value="przygotowanie_pedagogiczne_do_nauczania_jezyka">
                  Przygotowanie pedagogiczne do nauczania języka
                </SelectItem>
                <SelectItem value="pedagogika-specjalna-wczesne-wspomaganie-rozwoju-dziecka">
                  Pedagogika specjalna wczesne wspomaganie rozwoju dziecka
                </SelectItem>
                <SelectItem value="pedagogika-specjalna-edukacja-i-rehabilitacja-osob-z-niepelnosprawnoscia-sluchowa-surdopedagogika">
                  Pedagogika specjalna edukacja i rehabilitacja osób z
                  niepełnosprawnością słuchową (surdopedagogika)
                </SelectItem>
                <SelectItem value="zarzadzanie_oswiata">
                  Zarządzanie oświatą
                </SelectItem>
                <SelectItem value="przyroda">
                  Przyroda w szkole podstawowej
                </SelectItem>
                <SelectItem value="etyka">Etyka</SelectItem>
                <SelectItem value="informatyka">
                  Informatyka w szkole
                </SelectItem>
                <SelectItem value="wychowanie_fizyczne">
                  Wychowanie fizyczne w szkole
                </SelectItem>
                <SelectItem value="chemia">Chemia w szkole</SelectItem>
                <SelectItem value="angielski_wczesna_edukacja">
                  Język angielski w wychowaniu przedszkolnym i edukacji
                  wczesnoszkolnej
                </SelectItem>
                <SelectItem value="niemiecki">
                  Dydaktyka języka obcego (język niemiecki)
                </SelectItem>
                <SelectItem value="edukacja_zdrowotna">
                  Edukacja zdrowotna
                </SelectItem>
                <SelectItem value="jezyk_polski">Język polski</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="studyFormat"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Format studiów</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={typeof field.value === "string" ? field.value : ""}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Wybierz format studiów" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="stacjonarnie">Stacjonarne</SelectItem>
                <SelectItem value="hybrydowo">Hybrydowe</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Imię i nazwisko</FormLabel>
            <FormControl>
              <Input placeholder="Jan Kowalski" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="birthYear"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Rok urodzenia</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Rok" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from(
                    { length: 100 },
                    (_, i) => new Date().getFullYear() - i,
                  ).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="birthMonth"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Miesiąc urodzenia</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Miesiąc" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <SelectItem
                      key={month}
                      value={month.toString().padStart(2, "0")}
                    >
                      {new Date(2000, month - 1, 1).toLocaleString("pl", {
                        month: "long",
                      })}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="birthDay"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Dzień urodzenia</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Dzień" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <SelectItem
                      key={day}
                      value={day.toString().padStart(2, "0")}
                    >
                      {day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="birthCity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Miasto urodzenia</FormLabel>
            <FormControl>
              <Input placeholder="Miasto" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="birthProvince"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Województwo urodzenia</FormLabel>
            <FormControl>
              <Input placeholder="Województwo" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="birthCountry"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Kraj urodzenia</FormLabel>
            <FormControl>
              <Input placeholder="Kraj" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="citizenship"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Obywatelstwo</FormLabel>
            <FormControl>
              <Input placeholder="Obywatelstwo" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="pesel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>PESEL</FormLabel>
            <FormControl>
              <Input placeholder="Twój numer PESEL" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
