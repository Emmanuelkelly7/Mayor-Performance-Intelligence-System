import { PageWrapper } from "@/components/layout/PageWrapper";
import { TargetBanner } from "@/components/sections/strategy/TargetBanner";
import { CoreFormula } from "@/components/sections/strategy/CoreFormula";
import { MessageArchitecture } from "@/components/sections/strategy/MessageArchitecture";
import { CampaignTimeline } from "@/components/sections/strategy/CampaignTimeline";
import { FieldStrategy } from "@/components/sections/strategy/FieldStrategy";
import { SignStrategy } from "@/components/sections/strategy/SignStrategy";
import { PolicyPillars } from "@/components/sections/strategy/PolicyPillars";
import { BottomLine } from "@/components/sections/strategy/BottomLine";

export default function StrategyPage() {
  return (
    <PageWrapper>
      <div className="space-y-12">
        <TargetBanner />
        
        <CoreFormula />
        
        <MessageArchitecture />
        
        <CampaignTimeline />
        
        <FieldStrategy />
        
        <SignStrategy />
        
        <PolicyPillars />
        
        <BottomLine />
      </div>
    </PageWrapper>
  );
}
