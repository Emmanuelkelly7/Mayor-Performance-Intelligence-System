"use client";

import { BarChart } from "@/components/charts/BarChart";
import { wardData, townAverageTurnout } from "@/data/electionData";

export function WardTurnoutChart() {
  const chartData = wardData.map(w => ({
    name: w.ward,
    value: w.turnout,
    color: w.turnout > 30 ? "#1E40AF" : w.turnout > 27 ? "#2563EB" : w.turnout > 26 ? "#3B82F6" : w.turnout > 25 ? "#60A5FA" : w.turnout > 21.5 ? "#93C5FD" : "#BFDBFE",
    subLabel: `${w.eligible.toLocaleString()} eligible`
  }));

  return (
    <section className="card p-6">
      <h3 className="text-lg font-bold text-text-primary mb-6">2022 Turnout by Ward</h3>
      <BarChart 
        data={chartData} 
        referenceLineValue={townAverageTurnout} 
        referenceLineLabel={`Town Average ${townAverageTurnout}%`}
      />
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
        {wardData.map((w, i) => (
          <div key={i} className="text-center">
            <p className="text-[10px] text-text-muted font-medium">{w.eligible.toLocaleString()} eligible</p>
          </div>
        ))}
      </div>
    </section>
  );
}
