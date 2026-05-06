import { Target, AlertTriangle } from "lucide-react";
import { InsightCard } from "@/components/ui/InsightCard";

export function CoreFormula() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InsightCard 
        title="Core Formula"
        description="Protect Ward 1 and Ward 2. Expand in Ward 3. Mobilize hard in Ward 4 and Ward 6. Stabilize Ward 5 with local issue messaging."
        icon={Target}
        variant="info"
      />
      <InsightCard 
        title="Main Threat"
        description="Low turnout and voter complacency. The campaign must repeatedly communicate that strong support only matters if supporters actually vote."
        icon={AlertTriangle}
        variant="error"
      />
    </section>
  );
}
