import type { ContactFormData } from "@/schemas/registration-form-schema";

function sanitizeString(input: string): string {
  // Remove any HTML tags and encode special characters
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function sanitizeInput(data: ContactFormData): ContactFormData {
  const sanitizedData = { ...data };

  // Sanitize string fields
  const stringFields: (keyof ContactFormData)[] = [
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
    "street",
    "buildingNumber",
    "city",
    "province",
    "postalCode",
    "phoneNumber",
    "email",
    "correspondenceStreet",
    "correspondenceBuildingNumber",
    "correspondenceCity",
    "correspondenceProvince",
    "correspondencePostalCode",
    "professionalTitle",
    "universityName",
    "graduationYear",
    "diplomaNumber",
  ];

  stringFields.forEach((field) => {
    if (typeof sanitizedData[field] === "string") {
      (sanitizedData[field] as unknown) = sanitizeString(
        sanitizedData[field] as string,
      );
    }
  });

  // Boolean fields don't need sanitization
  // File fields are handled separately in the API route

  const typedSanitizedData = sanitizedData as ContactFormData;
  return typedSanitizedData;
}
