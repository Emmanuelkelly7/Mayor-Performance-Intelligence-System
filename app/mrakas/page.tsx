import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CandidateSummaryTable } from "@/components/sections/mrakas/CandidateSummaryTable";
import { StrengthCards } from "@/components/sections/mrakas/StrengthCards";
import { VoteSourceChart } from "@/components/sections/mrakas/VoteSourceChart";

export default function MrakasPage() {
  return (
    <PageWrapper>
      <div className="space-y-12">
        <SectionHeader 
          title="Tom Mrakas — Candidate Summary" 
          description="Performance shift from competitive challenger/incumbent contest to dominant incumbent consolidation."
        />
        
        <CandidateSummaryTable />
        
        <StrengthCards />
        
        <VoteSourceChart />
      </div>
    </PageWrapper>
  );
}
