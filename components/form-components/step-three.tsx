"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import type { ContactFormData } from "@/schemas/registration-form-schema";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

export function StepThree() {
  const { control } = useFormContext<ContactFormData>();

  return (
    <>
      <FormField
        control={control}
        name="correspondenceStreet"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="correspondenceStreet">
              Ulica korespondencyjna
            </FormLabel>
            <FormControl>
              <Input
                id="correspondenceStreet"
                placeholder="Nazwa ulicy korespondencyjnej"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="correspondenceBuildingNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="correspondenceBuildingNumber">
              Numer budynku korespondencyjnego
            </FormLabel>
            <FormControl>
              <Input
                id="correspondenceBuildingNumber"
                placeholder="Numer budynku korespondencyjnego"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="correspondenceCity"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="correspondenceCity">
              Miejscowość korespondencyjna
            </FormLabel>
            <FormControl>
              <Input
                id="correspondenceCity"
                placeholder="Miejscowość korespondencyjna"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="correspondenceProvince"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="correspondenceProvince">
              Województwo korespondencyjne
            </FormLabel>
            <FormControl>
              <Input
                id="correspondenceProvince"
                placeholder="Województwo korespondencyjne"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="correspondencePostalCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="correspondencePostalCode">
              Kod pocztowy korespondencyjny
            </FormLabel>
            <FormControl>
              <Input
                id="correspondencePostalCode"
                placeholder="00-000"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
