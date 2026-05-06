"use client";

import { HorizontalBarChart } from "@/components/charts/HorizontalBarChart";
import { wardData } from "@/data/electionData";

export function VoteSourceChart() {
  const chartData = [...wardData]
    .sort((a, b) => b.mrakasEst - a.mrakasEst)
    .map(w => ({
      name: w.ward,
      value: w.mrakasEst,
      color: w.mrakasEst > 1500 ? "#2563EB" : w.mrakasEst > 1000 ? "#3B82F6" : w.mrakasEst > 750 ? "#60A5FA" : "#93C5FD"
    }));

  return (
    <section className="card p-6">
      <h3 className="text-lg font-bold text-text-primary mb-2">Top 2022 Vote Sources by Ward (Estimated)</h3>
      <p className="text-sm text-text-secondary mb-6 italic">
        Estimated based on 69.5% town-wide vote share applied proportionally to ward ballot totals.
      </p>
      <HorizontalBarChart data={chartData} />
    </section>
  );
}
