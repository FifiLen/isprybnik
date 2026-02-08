import { Course } from "./types";

export async function loadCourseData(
  courseId: string,
  locale: string,
): Promise<Course | null> {
  try {
    const base = (await import(`../courses/${courseId}`)).default;
    const lang = (await import(`../i18n/courses/${locale}/${courseId}.json`))
      .default;

    return {
      ...base,
      ...lang,
    } as Course;
  } catch (error) {
    console.error(`Error loading course data for ${courseId}:`, error);
    return null;
  }
}
