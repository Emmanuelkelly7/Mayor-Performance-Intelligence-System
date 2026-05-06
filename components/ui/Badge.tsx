import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  variant?: "PROTECT" | "MAINTAIN" | "EXPAND" | "MOBILIZE" | "COMPETE" | "neutral";
  className?: string;
}

export function Badge({ label, variant = "neutral", className }: BadgeProps) {
  const variants = {
    PROTECT: "bg-amber-100 text-amber-800 border-amber-300",
    MAINTAIN: "bg-blue-100 text-blue-800 border-blue-300",
    EXPAND: "bg-green-100 text-green-800 border-green-300",
    MOBILIZE: "bg-red-100 text-red-800 border-red-300 animate-pulse-ring",
    COMPETE: "bg-orange-100 text-orange-800 border-orange-300",
    neutral: "bg-slate-100 text-slate-800 border-slate-300",
  };

  return (
    <span
      className={cn(
        "px-2.5 py-0.5 rounded-full text-xs font-semibold border",
        variants[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
