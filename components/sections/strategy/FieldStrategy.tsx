import { Users, Home, Bell } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FieldStrategy() {
  const strategies = [
    {
      title: "Ward Captains",
      description: "One captain per ward, with extra capacity in Wards 3, 4, and 6.",
      icon: Users,
    },
    {
      title: "Canvassing",
      description: "Begin with known supporters and frequent municipal voters, then expand to low-turnout households.",
      icon: Home,
    },
    {
      title: "Reminder System",
      description: "Use phone, email, and consent-based SMS to push early and internet voting.",
      icon: Bell,
    },
  ];

  return (
    <section>
      <SectionHeader title="Field Strategy" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {strategies.map((s, i) => (
          <div key={i} className="card p-6 flex gap-4 card-hover">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent-primary flex items-center justify-center shrink-0">
              <s.icon size={24} />
            </div>
            <div>
              <h4 className="font-bold text-text-primary mb-1">{s.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
