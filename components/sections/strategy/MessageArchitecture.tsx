import { MessageSquare, MapPin, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function MessageArchitecture() {
  const cards = [
    {
      title: "Proven Leadership",
      description: "Aurora chose stability and results. Keep the momentum going.",
      icon: MessageSquare,
    },
    {
      title: "Local Delivery",
      description: "Roads, parks, safety, taxes, planning, community services, and responsible growth.",
      icon: MapPin,
    },
    {
      title: "Accessibility",
      description: "You know where to find Tom. He shows up, listens, and follows through.",
      icon: Users,
    },
  ];

  return (
    <section>
      <SectionHeader title="Message Architecture" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div key={i} className="card p-8 flex flex-col items-center text-center space-y-4 card-hover">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-accent-primary flex items-center justify-center">
              <card.icon size={32} />
            </div>
            <h4 className="text-xl font-bold text-text-primary">{card.title}</h4>
            <p className="text-text-secondary text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
