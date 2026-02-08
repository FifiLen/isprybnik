import { cn } from "@/lib/utils";
import { Progress } from "../ui/progress";

export const ProgressBar = ({ step }: { step: number }) => (
  <div className="mb-6 w-full">
    <Progress value={(step / 5) * 100} className="h-3 bg-blue-100" />
    <div className="flex justify-between mt-2 text-xs font-medium">
      <span
        className={cn(step >= 1 ? "text-blue-600" : "text-muted-foreground")}
      >
        Dane osobowe
      </span>
      <span
        className={cn(step >= 2 ? "text-blue-600" : "text-muted-foreground")}
      >
        Adres zamieszkania
      </span>
      <span
        className={cn(step >= 3 ? "text-blue-600" : "text-muted-foreground")}
      >
        Adres korespondencyjny
      </span>
      <span
        className={cn(step >= 4 ? "text-blue-600" : "text-muted-foreground")}
      >
        Wykształcenie
      </span>
      <span
        className={cn(step >= 5 ? "text-blue-600" : "text-muted-foreground")}
      >
        Zgody i oświadczenia
      </span>
    </div>
  </div>
);
