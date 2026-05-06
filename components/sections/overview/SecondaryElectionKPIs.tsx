"use client";

import { KpiCard } from "@/components/ui/KpiCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { electionOverviewKPIs } from "@/data/electionData";

export function SecondaryElectionKPIs() {
  return (
    <section>
      <SectionHeader 
        title="Election Overview" 
        description="Top-level comparison of 2018 and 2022 municipal election performance."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {electionOverviewKPIs.map((kpi, i) => (
          <KpiCard
            key={i}
            label={kpi.label}
            value={kpi.value}
            status={kpi.positive ? "positive" : kpi.negative ? "negative" : undefined}
            subValue={kpi.positive ? "Growth trend" : kpi.negative ? "Activation risk" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
