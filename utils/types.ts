export type CategoryId =
  | "popular"
  | "all"
  | "psychologia-i-psychoterapia"
  | "pedagogika-specjalna-i-korekcyjna"
  | "zarzadzanie-i-dydaktyka-edukacyjna";
export type SortOption = "default" | "title" | "price";

export interface CoursesPageProps {
  maxCourses?: number;
}

export interface CoursePageProps {
  params: { kierunek: string };
}

export type Subtopic = {
  title: string;
};

export type Topic = {
  title: string;
  subtopics?: Subtopic[];
};

export type Module = {
  title: string;
  topics: Topic[];
};

export type Schedule = string[];

export type Course = {
  category: string;
  id: string;
  isPopular: boolean;
  title: string;
  banerDescription: string;
  description: string;
  description2: string;
  description3?: string;
  description4?: string;
  descriptionP1?: string;
  duration: string;
  practicalHours: string;
  price: string;
  payments: string;
  scheduleInfo: string;
  schedule: Schedule;
  modules: Module[];
  faculty: string;
  practices: string;
  evaluation: string;
  jobOpportunities: string;
  invite: string;
  deliveryFormat?: string[];
};
