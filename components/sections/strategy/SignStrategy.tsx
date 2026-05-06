import { SectionHeader } from "@/components/ui/SectionHeader";
import { signStrategy } from "@/data/electionData";
import { cn } from "@/lib/utils";

export function SignStrategy() {
  return (
    <section>
      <SectionHeader title="Sign Strategy" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {signStrategy.map((s, i) => (
          <div 
            key={i} 
            className={cn(
              "p-6 rounded-2xl border flex flex-col justify-between",
              s.color === "red" && "bg-red-50 border-red-200 text-red-800",
              s.color === "amber" && "bg-amber-50 border-amber-200 text-amber-800",
              s.color === "blue" && "bg-blue-50 border-blue-200 text-blue-800"
            )}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70">{s.priority}</p>
              <h4 className="text-lg font-bold mb-4">{s.wards}</h4>
            </div>
            {s.color === "blue" && (
              <p className="text-xs italic opacity-80">maintain existing strength and prevent complacency</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
