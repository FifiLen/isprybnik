"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import type { ContactFormData } from "@/schemas/registration-form-schema";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";

interface StepTwoProps {
  isDifferentAddress: boolean;
  setIsDifferentAddress: (value: boolean) => void;
}

export function StepTwo({
  isDifferentAddress,
  setIsDifferentAddress,
}: StepTwoProps) {
  const { control } = useFormContext<ContactFormData>();

  return (
    <>
      <FormField
        control={control}
        name="street"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="street">Ulica</FormLabel>
            <FormControl>
              <Input id="street" placeholder="Nazwa ulicy" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="buildingNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="buildingNumber">Numer budynku</FormLabel>
            <FormControl>
              <Input
                id="buildingNumber"
                placeholder="Numer budynku"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="city">Miejscowość</FormLabel>
            <FormControl>
              <Input id="city" placeholder="Miejscowość" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="province"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="province">Województwo</FormLabel>
            <FormControl>
              <Input id="province" placeholder="Województwo" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="postalCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="postalCode">Kod Pocztowy</FormLabel>
            <FormControl>
              <Input id="postalCode" placeholder="00-000" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="phoneNumber">Numer Telefonu</FormLabel>
            <FormControl>
              <Input id="phoneNumber" placeholder="123456789" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormControl>
              <Input
                type="email"
                id="email"
                placeholder="jan.kowalski@example.com"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-2 mt-4">
        <p className="text-sm text-gray-500 mb-2">
          Zaznacz jeśli adres jest inny, jeśli nie kliknij dalej
        </p>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="differentAddress"
            checked={isDifferentAddress}
            onCheckedChange={(checked) =>
              setIsDifferentAddress(checked as boolean)
            }
          />
          <Label htmlFor="differentAddress">
            Czy adres korespondencyjny jest INNY od adresu zamieszkania?
          </Label>
        </div>
      </div>
    </>
  );
}
