'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BrainCircuit,
  CircleAlert,
  Lightbulb,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import PageHeader from '@/components/ui/PageHeader';
import { mockInsights } from '@/lib/mock-db';

export default function InsightsPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  function runAnalysis() {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2500);
  }

  return (
    <DashboardLayout>
      <PageHeader
        eyebrow="AI operations"
        title="Insight generation for Mayor Tom Mrakas"
        description="Policy-ready summaries, anomaly detection, and recommended actions generated from city-wide engagement, performance, and operational data."
        actions={
          <Button
            onClick={runAnalysis}
            leadingIcon={<BrainCircuit className={`h-4 w-4 ${isAnalyzing ? 'animate-pulse' : ''}`} />}
          >
            {isAnalyzing ? 'Analyzing data streams...' : 'Run intelligence scan'}
          </Button>
        }
      />

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_360px]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mockInsights.map((insight) => {
            const variant =
              insight.priority === 'high'
                ? 'danger'
                : insight.priority === 'medium'
                  ? 'warning'
                  : 'neutral';

            const icon =
              insight.priority === 'high' ? (
                <ShieldAlert className="h-4 w-4" />
              ) : insight.priority === 'medium' ? (
                <CircleAlert className="h-4 w-4" />
              ) : (
                <Lightbulb className="h-4 w-4" />
              );

            return (
              <Card key={insight.id} className="flex flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <Badge variant={variant}>
                    {icon}
                    {insight.priority} priority
                  </Badge>
                  <span className="text-xs text-white/40">{insight.timestamp}</span>
                </div>

                <div className="mt-5 space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/38">
                    {insight.category}
                  </p>
                  <h2 className="font-display text-xl font-semibold text-white">{insight.title}</h2>
                  <p className="text-sm leading-6 text-white/62">{insight.description}</p>
                </div>

                <div className="mt-6 rounded-2xl border border-white/8 bg-white/4 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/75">
                    Recommended action
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/76">{insight.actionable}</p>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-5 justify-start px-0"
                  trailingIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Generate full briefing
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="space-y-4">
          <Card className="p-6 sm:p-7">
            <CardHeader className="mb-6">
              <CardTitle>System brief</CardTitle>
              <CardDescription>
                Snapshot of current inference posture and platform readiness.
              </CardDescription>
            </CardHeader>
            <div className="space-y-3">
              {[
                ['Inference engine', 'Stable'],
                ['Anomaly detector', 'Monitoring'],
                ['Narrative summarizer', 'Ready'],
                ['Public sentiment model', 'High confidence'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm">
                  <span className="text-white/56">{label}</span>
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-xl font-semibold text-white">
                  Narrative generation layer
                </h3>
                <p className="text-sm leading-6 text-white/62">
                  The current implementation simulates AI summaries. Production deployment should connect
                  to a secured LLM workflow for executive briefings, constituent sentiment rollups, and
                  policy-ready messaging.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </DashboardLayout>
  );
}
