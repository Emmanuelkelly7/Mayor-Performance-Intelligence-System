import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-8 md:mb-10", className)}>
      <h2 className="text-xl md:text-3xl font-black text-foreground tracking-tighter leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-4xl font-medium leading-relaxed opacity-80">
          {description}
        </p>
      )}
      <div className="h-1 w-12 bg-primary rounded-full mt-4" />
    </div>
  );
}
