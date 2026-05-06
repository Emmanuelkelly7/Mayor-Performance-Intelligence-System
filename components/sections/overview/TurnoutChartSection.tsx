"use client";

import { GroupedBarChart } from "@/components/charts/GroupedBarChart";
import { turnoutComparison } from "@/data/electionData";

export function TurnoutChartSection() {
  return (
    <section className="card p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-text-primary">Voter Turnout: 2018 vs 2022</h3>
          <p className="text-sm text-text-secondary">Year-over-year participation comparison</p>
        </div>
        <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-100">
          −6.03 pts drop
        </div>
      </div>
      <GroupedBarChart data={turnoutComparison} />
    </section>
  );
}
