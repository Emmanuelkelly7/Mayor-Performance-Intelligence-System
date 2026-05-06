import { SectionHeader } from "@/components/ui/SectionHeader";
import { TimelineStep } from "@/components/ui/TimelineStep";
import { campaignTimeline } from "@/data/electionData";

export function CampaignTimeline() {
  return (
    <section>
      <SectionHeader title="September Campaign Timeline" />
      <div className="card p-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          {campaignTimeline.map((step, i) => (
            <TimelineStep 
              key={i}
              week={step.week}
              title={step.title}
              description={step.description}
              isLast={i === campaignTimeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
