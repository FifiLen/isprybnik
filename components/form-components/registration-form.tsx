"use client";

import * as React from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "./progress-bar";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
import { StepFour } from "./step-four";
import { StepFive } from "./step-five";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import {
  type ContactFormData,
  contactFormSchema,
} from "@/schemas/registration-form-schema";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isDifferentAddress, setIsDifferentAddress] = React.useState(false);
  const { toast } = useToast();

  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    trigger,
  } = methods;

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (Array.isArray(value) && value[0] instanceof File) {
          value.forEach((file) => {
            formData.append(`${key}`, file);
          });
        } else {
          formData.append(key, String(value));
        }
      });

      const response = await fetch("/api/register-form", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok && result.success) {
        toast({
          title: "Zgłoszenie przyjęte!",
          description:
            "Twój formularz został pomyślnie wysłany. Wkrótce otrzymasz email z informacjami o kolejnych krokach rekrutacji. Upewnij się, że sprawdzasz również folder spam/wiadomości-śmieci.",
          duration: 5000,
        });
        reset();
        setCurrentStep(1);
      } else {
        throw new Error(result.message || "Nie udało się przesłać formularza.");
      }
    } catch (error) {
      toast({
        title: "Błąd!",
        description:
          error instanceof Error ? error.message : "Wystąpił nieznany błąd.",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  const validateStep = async (step: number) => {
    let fieldsToValidate: (keyof ContactFormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = [
          "program",
          "name",
          "birthYear",
          "birthMonth",
          "birthDay",
          "birthCity",
          "birthProvince",
          "birthCountry",
          "citizenship",
          "pesel",
        ];
        break;
      case 2:
        fieldsToValidate = [
          "street",
          "buildingNumber",
          "city",
          "province",
          "postalCode",
          "phoneNumber",
          "email",
        ];
        if (isDifferentAddress) {
          fieldsToValidate = [
            ...fieldsToValidate,
            "correspondenceStreet",
            "correspondenceBuildingNumber",
            "correspondenceCity",
            "correspondenceProvince",
            "correspondencePostalCode",
          ];
        }
        break;
      case 3:
        fieldsToValidate = [
          "correspondenceStreet",
          "correspondenceBuildingNumber",
          "correspondenceCity",
          "correspondenceProvince",
          "correspondencePostalCode",
        ];
        break;
      case 4:
        fieldsToValidate = [
          "professionalTitle",
          "universityName",
          "graduationYear",
          "diplomaNumber",
          "diplomaFile",
        ];
        break;
      case 5:
        fieldsToValidate = [
          "paymentAgreement",
          "regulationsAgreement",
          "dataProcessingAgreement",
          "contactAgreement",
          "marketingAgreement",
          "commercialInfoAgreement",
        ];

        if (window && (window as any).validateFileAcknowledgement) {
          const isFileAcknowledged = (
            window as any
          ).validateFileAcknowledgement();
          if (!isFileAcknowledged) {
            return false;
          }
        }
        break;
    }

    const isValid = await trigger(fieldsToValidate);

    if (!isValid) {
      const errorMessages = fieldsToValidate
        .filter((field) => errors[field])
        .map((field) => errors[field]?.message)
        .filter((message): message is string => message !== undefined)
        .join(", ");

      toast({
        title: "Błąd walidacji",
        description: errorMessages,
        variant: "destructive",
        duration: 5000,
      });
    }

    return isValid;
  };

  const handleNext = async () => {
    const isStepValid = await validateStep(currentStep);
    if (isStepValid) {
      if (currentStep === 2 && !isDifferentAddress) {
        setCurrentStep(4);
      } else {
        setCurrentStep((prev) => Math.min(5, prev + 1));
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-7xl p-6 md:p-12">
        <FormProvider {...methods}>
          <ProgressBar step={currentStep} />
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Formularz rekrutacyjny</CardTitle>
              <CardDescription>
                Zapisz się na wybrany kierunek studiów.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                  {currentStep === 1 && <StepOne />}
                  {currentStep === 2 && (
                    <StepTwo
                      isDifferentAddress={isDifferentAddress}
                      setIsDifferentAddress={setIsDifferentAddress}
                    />
                  )}
                  {currentStep === 3 && <StepThree />}
                  {currentStep === 4 && <StepFour />}
                  {currentStep === 5 && <StepFive />}

                  <div className="flex justify-between mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() =>
                        setCurrentStep((prev) => Math.max(1, prev - 1))
                      }
                      disabled={currentStep === 1 || isSubmitting}
                    >
                      Cofnij
                    </Button>
                    <Button
                      type={currentStep === 5 ? "submit" : "button"}
                      onClick={currentStep === 5 ? undefined : handleNext}
                      disabled={isSubmitting}
                    >
                      {currentStep === 5 ? "Wyślij" : "Dalej"}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </FormProvider>
      </div>
    </div>
  );
}
