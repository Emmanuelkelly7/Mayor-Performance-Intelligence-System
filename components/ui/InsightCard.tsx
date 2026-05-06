import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: "success" | "info" | "error" | "warning";
  className?: string;
}

export function InsightCard({ title, description, icon: Icon, variant = "info", className }: InsightCardProps) {
  const variants = {
    success: "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-400",
    info: "bg-primary/10 border-primary/20 text-primary",
    error: "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-400",
    warning: "bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-400",
  };

  const iconColors = {
    success: "text-green-600 dark:text-green-400",
    info: "text-primary",
    error: "text-red-600 dark:text-red-400",
    warning: "text-amber-600 dark:text-amber-400",
  };

  return (
    <div className={cn(
      "p-6 rounded-2xl border flex gap-4 transition-all hover:scale-[1.01]",
      variants[variant],
      className
    )}>
      <div className={cn("p-2 rounded-xl bg-background/50 h-fit shadow-sm", iconColors[variant])}>
        <Icon size={24} />
      </div>
      <div>
        <h4 className="font-black text-lg mb-1 tracking-tight">{title}</h4>
        <p className="text-sm font-medium opacity-80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
