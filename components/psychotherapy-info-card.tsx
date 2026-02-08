"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  ClockIcon,
  BanknoteIcon,
  GraduationCapIcon,
  CircleArrowRight,
} from "lucide-react";
import { Course } from "@/utils/types";

interface InfoItem {
  icon: React.ReactNode;
  text: string;
  bgColor: string;
}

const InfoBadge = ({ icon, text, bgColor }: InfoItem) => (
  <Badge
    variant="secondary"
    className={`flex items-center gap-2 ${bgColor} text-purple-700 p-3 text-sm`}
  >
    {icon}
    <span className="truncate">{text}</span>
  </Badge>
);

export function PsychotherapyInfoCard({ course }: { course: Course }) {
  const infoItems: InfoItem[] = [
    {
      icon: <CalendarIcon className="h-5 w-5" />,
      text: course.duration,
      bgColor: "bg-purple-50",
    },
    {
      icon: <ClockIcon className="h-5 w-5" />,
      text: course.practicalHours,
      bgColor: "bg-purple-50",
    },
    {
      icon: <BanknoteIcon className="h-5 w-5" />,
      text: course.price,
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <Card className="overflow-hidden h-full">
      <div className="flex flex-col lg:flex-row h-full">
        <CardContent className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <CardHeader className="p-0 space-y-4 mb-6">
              <CardTitle className="text-3xl font-bold text-gray-900 lg:text-4xl xl:text-4xl tracking-tighter">
                {course.title}
              </CardTitle>
              <CardDescription className="text-sm text-zinc-500 lg:text-lg xl:text-base">
                {course.banerDescription}
              </CardDescription>
            </CardHeader>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 my-8">
              {infoItems.map((item, index) => (
                <InfoBadge key={index} {...item} />
              ))}
            </div>
          </div>
          <CardFooter className="p-0 mt-auto">
            <Button
              asChild
              size="lg"
              className="w-full text-lg rounded-xl py-6 bg-[#9E5AE2] tracking-tight"
            >
              <Link href={`/kierunek/${course.id}`}>
                Dowiedz się więcej
                <span className="sr-only"> o kierunku {course.title}</span>
                <CircleArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </CardFooter>
        </CardContent>
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
          <Image
            src={`/assets/${course.id}.jpg`}
            alt={`Zdjęcie przedstawiające kurs: ${course.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>
    </Card>
  );
}
