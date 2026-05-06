"use client";

import { DonutChart } from "@/components/charts/DonutChart";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { votingChannels, totalBallots2022 } from "@/data/electionData";

export function VotingChannelAnalysis() {
  const chartData = votingChannels.map(c => ({
    name: c.name,
    value: c.percentage,
    votes: c.ballots,
    color: c.color
  }));

  return (
    <section className="space-y-6">
      <SectionHeader 
        title="Voting Channel Analysis" 
        description="Internet and advance voting are central to the path to victory."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-bold text-text-primary mb-4">2022 Ballots by Major Channel</h3>
          <DonutChart data={chartData} centerLabel={`${totalBallots2022.toLocaleString()} total ballots`} />
        </div>
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 flex flex-col justify-center space-y-6">
          <div>
            <p className="text-primary text-3xl font-black">4,437 internet ballots</p>
            <p className="text-muted-foreground font-bold text-lg">= 39.42% of all votes cast</p>
          </div>
          <div className="h-px bg-border w-full" />
          <div>
            <p className="text-primary text-3xl font-black">1,516 advance ballots</p>
            <p className="text-muted-foreground font-bold text-lg">across two advance periods</p>
          </div>
          <div className="mt-4">
            <p className="text-foreground leading-relaxed italic opacity-80">
              &quot;The campaign should treat digital and early voting as the main vote-banking engine.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
