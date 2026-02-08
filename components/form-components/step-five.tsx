"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import type { ContactFormData } from "@/schemas/registration-form-schema";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { FileText } from "lucide-react";
import Link from "next/link";

export function StepFive() {
  const { control, formState } = useFormContext<ContactFormData>();
  const [fileAcknowledged, setFileAcknowledged] = useState(false);
  const [fileAcknowledgeError, setFileAcknowledgeError] = useState(false);

  React.useEffect(() => {
    const originalSubmitFn = formState.isSubmitSuccessful;

    const handleBeforeSubmit = () => {
      if (!fileAcknowledged) {
        setFileAcknowledgeError(true);
        return false;
      }
      setFileAcknowledgeError(false);
      return true;
    };

    if (window) {
      (window as any).validateFileAcknowledgement = handleBeforeSubmit;
    }

    return () => {
      if (window) {
        delete (window as any).validateFileAcknowledgement;
      }
    };
  }, [fileAcknowledged, formState]);

  return (
    <>
      <Label className="text-lg font-semibold">Zgody i oświadczenia</Label>
      <div className="space-y-4">
        <div className="flex flex-row items-start space-x-3 space-y-0">
          <Checkbox
            id="fileAcknowledgement"
            checked={fileAcknowledged}
            onCheckedChange={(checked) => {
              setFileAcknowledged(checked === true);
              if (checked) setFileAcknowledgeError(false);
            }}
          />
          <div className="space-y-1 leading-none">
            <div className="flex items-center gap-2 flex-wrap">
              <label
                htmlFor="fileAcknowledgement"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Oświadczam, że zapoznałem/am się z treścią dokumentu
                <span className="text-destructive"> *</span>
              </label>
              <Link
                href="/assets/informacja-rodo-studia.pdf"
                target="_blank"
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                <FileText className="h-4 w-4" />
                <span>Pokaż dokument</span>
              </Link>
            </div>
            {fileAcknowledgeError && (
              <p className="text-sm font-medium text-destructive">
                Musisz zapoznać się z dokumentem i zaznaczyć to pole
              </p>
            )}
          </div>
        </div>

        <FormField
          control={control}
          name="paymentAgreement"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  id="paymentAgreement"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel htmlFor="paymentAgreement">
                  Zobowiązuję się do wniesienia wpisowego przy składaniu
                  dokumentów oraz opłat czesnego zgodnie z umową o zasadach
                  odpłatności za studia w wysokości 150zł.{" "}
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="regulationsAgreement"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  id="regulationsAgreement"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel htmlFor="regulationsAgreement">
                  Zobowiązuję się do przestrzegania wszelkich regulaminów
                  obowiązujących w Wyższej Szkole Humanistyczno-Ekonomicznej w
                  Brzegu oraz ISP w Rybniku, ul. Magnolii 25, 44-207 Rybnik.{" "}
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="dataProcessingAgreement"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  id="dataProcessingAgreement"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel htmlFor="dataProcessingAgreement">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                  udziału w rekrutacji na studia prowadzone przez Wyższą Szkołę
                  Humanistyczno-Ekonomiczną w Brzegu, 49-300 Brzeg, ul.
                  Piastowska 14, REGON:532372445, NIP: 7471684705, jako
                  administratora moich danych osobowych. Administrator
                  powiadomił mnie, że niniejsza zgoda nie wpływa na zgodność z
                  prawem przetwarzania, którego dokonano na podstawie zgody
                  przed jej wycofaniem. Zgodę mogę wycofać poprzez zgłoszenie
                  oświadczenia na adres: iod@wshe.edu.pl.{" "}
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="contactAgreement"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  id="contactAgreement"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel htmlFor="contactAgreement">
                  Wyrażam zgodę na kontakt ze strony administratora danych
                  osobowych, z użyciem telekomunikacyjnych urządzeń końcowych
                  oraz automatycznych systemów wywołujących, zgodnie z art. 172
                  par. 1. Prawa telekomunikacyjnego.{" "}
                  <span className="text-destructive">*</span>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="marketingAgreement"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  id="marketingAgreement"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel htmlFor="marketingAgreement">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych przez
                  administratora danych osobowych w celach marketingowych i
                  reklamowych.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="commercialInfoAgreement"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  id="commercialInfoAgreement"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel htmlFor="commercialInfoAgreement">
                  Wyrażam zgodę na otrzymywanie od administratora danych
                  osobowych informacji handlowej i materiałów promocyjnych
                  środkami komunikacji elektronicznej.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <p className="text-sm text-muted-foreground mt-4">
          Jestem świadoma/świadomy, że moja zgoda może być odwołana w każdym
          czasie. Szczegóły dotyczące sposobu oraz skutków cofnięcia każdej ze
          zgód znajdziesz w Polityce Prywatności. Zapoznaj się z Polityką
          Prywatności. Administratorem Twoich danych osobowych jest BiS Groups /
          NODN ul. Magnolii 25, 44-207 Rybnik. Jeśli masz pytania dotyczące
          przetwarzania Twoich danych osobowych oraz przysługujących Ci praw,
          skontaktuj się z naszym Inspektorem Ochrony Danych:
          odn.rybnik@gmail.com.
        </p>
      </div>
    </>
  );
}
