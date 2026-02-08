"use client";

import type React from "react";
import { useFormContext, useController } from "react-hook-form";
import type { ContactFormData } from "@/schemas/registration-form-schema";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export function StepFour() {
  const { control } = useFormContext<ContactFormData>();

  const { field: diplomaFileField } = useController({
    name: "diplomaFile",
    control,
  });

  const { field: otherFilesField } = useController({
    name: "otherFiles",
    control,
  });

  const handleDiplomaFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      diplomaFileField.onChange(e.target.files[0]);
    }
  };

  const handleOtherFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      otherFilesField.onChange(Array.from(e.target.files));
    }
  };

  return (
    <>
      <FormField
        control={control}
        name="professionalTitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tytuł zawodowy</FormLabel>
            <FormControl>
              <Input placeholder="Np. magister, inżynier" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="universityName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nazwa ukończonej uczelni wyższej</FormLabel>
            <FormControl>
              <Input placeholder="Nazwa uczelni" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="graduationYear"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Rok ukończenia</FormLabel>
            <FormControl>
              <Input placeholder="Rok ukończenia" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="diplomaNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Numer dyplomu</FormLabel>
            <FormControl>
              <Input placeholder="Numer dyplomu" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="diplomaFile"
        render={() => (
          <FormItem>
            <FormLabel>
              Potwierdzenie ukończenia uczelni wyższej (dyplom)
            </FormLabel>
            <FormControl>
              <Input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleDiplomaFileChange}
              />
            </FormControl>
            <p className="text-sm text-muted-foreground">
              Dozwolone formaty: PDF, JPG, PNG. Maksymalny rozmiar pliku: 5MB.
            </p>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="otherFiles"
        render={() => (
          <FormItem>
            <FormLabel>Inne pliki</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleOtherFilesChange}
                multiple
              />
            </FormControl>
            <p className="text-sm text-muted-foreground">
              Dozwolone formaty: PDF, JPG, PNG. Maksymalny rozmiar pliku: 5MB.
            </p>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
