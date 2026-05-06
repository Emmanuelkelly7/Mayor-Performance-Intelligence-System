"use client";

import { InsightCard } from "@/components/ui/InsightCard";
import { TrendingUp, Lightbulb, AlertTriangle } from "lucide-react";

export function StrengthCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <InsightCard 
        title="Strength"
        description="Mrakas increased his vote share from 38.33% to 69.5%, showing major consolidation and broad trust across the electorate."
        icon={TrendingUp}
        variant="success"
      />
      <InsightCard 
        title="Opportunity"
        description="His 2022 total grew despite lower turnout. Rebuilding turnout toward 2018 levels creates room to expand beyond 7,743 votes."
        icon={Lightbulb}
        variant="info"
      />
      <InsightCard 
        title="Risk"
        description="The main vulnerability is complacency. A strong opponent can exploit low turnout if Mrakas supporters assume the race is already secure."
        icon={AlertTriangle}
        variant="error"
      />
    </section>
  );
}
