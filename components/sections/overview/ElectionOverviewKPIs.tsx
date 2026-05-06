"use client";

import { KpiCard } from "@/components/ui/KpiCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { executiveKPIs } from "@/data/electionData";

export function ElectionOverviewKPIs() {
  return (
    <section>
      <SectionHeader 
        title="Executive Snapshot" 
        description="Mrakas moved from a competitive plurality win in 2018 to a dominant majority win in 2022, while overall turnout declined. The next opportunity is protecting the base while reactivating low-turnout wards."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {executiveKPIs.map((kpi, i) => (
          <KpiCard
            key={i}
            label={kpi.label}
            value={kpi.value}
            accent={kpi.accent}
            status={kpi.warning ? "warning" : kpi.info ? "info" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
