import { PageWrapper } from "@/components/layout/PageWrapper";
import { ExecutiveBanner } from "@/components/sections/overview/ExecutiveBanner";
import { ElectionOverviewKPIs } from "@/components/sections/overview/ElectionOverviewKPIs";
import { SecondaryElectionKPIs } from "@/components/sections/overview/SecondaryElectionKPIs";
import { VoteShareCharts } from "@/components/sections/overview/VoteShareCharts";
import { TurnoutChartSection } from "@/components/sections/overview/TurnoutChartSection";
import { InterpretationCard } from "@/components/sections/overview/InterpretationCard";

export default function OverviewPage() {
  return (
    <PageWrapper>
      <div className="space-y-12">
        <ExecutiveBanner />
        
        <ElectionOverviewKPIs />
        
        <SecondaryElectionKPIs />
        
        <VoteShareCharts />
        
        <TurnoutChartSection />
        
        <InterpretationCard />
      </div>
    </PageWrapper>
  );
}
