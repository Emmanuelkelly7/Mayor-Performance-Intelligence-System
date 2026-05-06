"use client";

import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExportButton } from "@/components/ui/ExportButton";
import { WardTurnoutChart } from "@/components/sections/wards/WardTurnoutChart";
import { WardPriorityTable } from "@/components/sections/wards/WardPriorityTable";
import { GeographicInterpretation } from "@/components/sections/wards/GeographicInterpretation";
import { VotingChannelAnalysis } from "@/components/sections/wards/VotingChannelAnalysis";
import { wardData } from "@/data/electionData";

export default function WardsPage() {
  return (
    <PageWrapper>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <SectionHeader 
            title="Ward-Level Breakdown" 
            description="Turnout patterns, councillor strength, and priority campaign geography."
            className="mb-0"
          />
          <ExportButton 
            variant="CSV" 
            data={wardData} 
            filename="aurora-ward-data-2022.csv" 
          />
        </div>
        
        <WardTurnoutChart />
        
        <WardPriorityTable />
        
        <GeographicInterpretation />
        
        <VotingChannelAnalysis />
      </div>
    </PageWrapper>
  );
}
