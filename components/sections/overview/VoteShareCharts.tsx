"use client";

import { DonutChart } from "@/components/charts/DonutChart";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { voteShare2018, voteShare2022, totalBallots2018, totalBallots2022, turnout2018, turnout2022 } from "@/data/electionData";

export function VoteShareCharts() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="card p-6">
        <h3 className="text-lg font-bold text-text-primary mb-4">2018 Mayoral Vote Share</h3>
        <DonutChart 
          data={voteShare2018} 
          centerLabel={`${totalBallots2018.toLocaleString()} ballots · ${turnout2018}% turnout`} 
        />
      </div>
      <div className="card p-6">
        <h3 className="text-lg font-bold text-text-primary mb-4">2022 Mayoral Vote Share</h3>
        <DonutChart 
          data={voteShare2022} 
          centerLabel={`${totalBallots2022.toLocaleString()} ballots · ${turnout2022}% turnout`} 
        />
      </div>
    </section>
  );
}
