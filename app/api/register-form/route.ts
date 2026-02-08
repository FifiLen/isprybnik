import { NextResponse, type NextRequest } from "next/server";
import { ID } from "appwrite";
import { contactFormSchema } from "@/schemas/registration-form-schema";
import { rateLimit } from "@/lib/rate-limit";
import { sanitizeInput } from "@/lib/sanitize-input";
import { storage, databases } from "@/appwrite";

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export async function POST(req: NextRequest) {
  try {
    try {
      await limiter.check(req, 10, "CACHE_TOKEN");
    } catch {
      console.warn("Rate limit exceeded for form submission");
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const formData = await req.formData();

    const rawData: Record<string, any> = {};
    formData.forEach((value, key) => {
      if (key === "otherFiles") {
        if (!rawData[key]) {
          rawData[key] = [];
        }
        if (value instanceof File) {
          rawData[key].push(value);
        }
      } else if (key.endsWith("Agreement")) {
        rawData[key] = value === "true";
      } else if (key === "diplomaFile") {
        if (value instanceof File) {
          rawData[key] = value;
        }
      } else {
        rawData[key] = value;
      }
    });

    const validatedData = contactFormSchema.parse(rawData);

    const sanitizedData = sanitizeInput(validatedData);

    const databaseId = process.env.APPWRITE_DATABASE_ID as string;
    const collectionId = process.env.APPWRITE_COLLECTION_ID as string;
    const bucketId = process.env.APPWRITE_BUCKET_ID as string;

    let diplomaFileId = null;
    const otherFilesIds: string[] = [];

    if (sanitizedData.diplomaFile) {
      if (sanitizedData.diplomaFile.size > 5 * 1024 * 1024) {
        throw new Error("Diploma file size exceeds 5MB limit");
      }
      const uploadedFile = await storage.createFile(
        bucketId,
        ID.unique(),
        sanitizedData.diplomaFile,
      );
      diplomaFileId = uploadedFile.$id;
    }

    if (sanitizedData.otherFiles) {
      for (const file of sanitizedData.otherFiles) {
        if (file.size > 5 * 1024 * 1024) {
          throw new Error("Other file size exceeds 5MB limit");
        }
        const uploadedFile = await storage.createFile(
          bucketId,
          ID.unique(),
          file,
        );
        otherFilesIds.push(uploadedFile.$id);
      }
    }

    const document = await databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      {
        ...sanitizedData,
        diplomaFile: diplomaFileId,
        otherFiles: otherFilesIds,
      },
    );

    console.info(`Form submitted successfully. Document ID: ${document.$id}`);

    return NextResponse.json({
      success: true,
      message: "Formularz został pomyślnie przesłany",
    });
  } catch (error) {
    let errorMessage =
      "Wystąpił nieoczekiwany błąd podczas przetwarzania formularza";
    let statusCode = 500;

    if (error instanceof Error) {
      console.error("Error processing form submission:", error.message);

      if (error.message.includes("file size exceeds")) {
        errorMessage = "Rozmiar pliku przekracza dozwolony limit";
        statusCode = 400;
      } else if (error.message.includes("Invalid document structure")) {
        errorMessage = "Nieprawidłowa struktura danych formularza";
        statusCode = 400;
      }
    } else {
      console.error("Unknown error during form submission:", error);
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: statusCode },
    );
  }
}
