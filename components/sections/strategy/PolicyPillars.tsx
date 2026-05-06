"use client";

import { Home, Shield, DollarSign, Wrench, Handshake, Megaphone } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { policyPillars } from "@/data/electionData";

const iconMap: any = {
  Home,
  Shield,
  DollarSign,
  Wrench,
  Handshake,
  Megaphone,
};

export function PolicyPillars() {
  return (
    <section>
      <SectionHeader title="Recommended Platform Positioning" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {policyPillars.map((p, i) => {
          const Icon = iconMap[p.icon];
          return (
            <div key={i} className="card p-6 flex flex-col space-y-4 card-hover">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent-primary flex items-center justify-center shrink-0">
                <Icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-text-primary mb-1">{p.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{p.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
