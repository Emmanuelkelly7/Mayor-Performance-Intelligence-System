import { cn } from "@/lib/utils";

interface TimelineStepProps {
  week: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function TimelineStep({ week, title, description, isLast }: TimelineStepProps) {
  return (
    <div className="flex flex-col md:flex-row flex-1 relative group">
      <div className="flex flex-col items-center md:items-start md:flex-1">
        {/* Connector Line */}
        {!isLast && (
          <div className="absolute top-6 left-1/2 md:left-6 md:right-0 w-0.5 h-full md:w-full md:h-0.5 bg-blue-200 -z-10" />
        )}
        
        {/* Step Circle */}
        <div className="w-12 h-12 rounded-full bg-accent-primary text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform mb-4">
          {week.replace("Week ", "")}
        </div>
        
        {/* Content */}
        <div className="text-center md:text-left md:pr-8">
          <p className="text-text-muted text-xs font-bold uppercase tracking-wider mb-1">{week}</p>
          <h4 className="text-text-primary font-bold text-lg mb-2">{title}</h4>
          <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
