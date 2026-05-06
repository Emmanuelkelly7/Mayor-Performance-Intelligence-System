import { Info } from "lucide-react";

export function InterpretationCard() {
  return (
    <section className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl transition-all hover:bg-primary/10">
      <div className="flex gap-4">
        <div className="text-primary shrink-0">
          <Info size={24} />
        </div>
        <div>
          <p className="text-foreground leading-relaxed">
            Aurora had more eligible voters in 2022 than 2018, but fewer total voters. This means the campaign should not only focus on persuasion. It should <span className="font-bold text-primary">aggressively focus on vote activation, voter reminders, internet voting education, and early vote capture.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
