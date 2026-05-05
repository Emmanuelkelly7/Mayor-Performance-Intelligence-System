'use client';

import { useState } from 'react';
import {
  CalendarRange,
  Download,
  FileText,
  Filter,
  SlidersHorizontal,
  BarChart3,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardDescription, CardHeader, CardTitle, MetricCard } from '@/components/ui/Card';
import { Select } from '@/components/ui/Field';
import PageHeader from '@/components/ui/PageHeader';
import { mockMetrics } from '@/lib/mock-db';

const efficiencyData = [
  { name: 'Public Works', value: 92 },
  { name: 'Education', value: 78 },
  { name: 'Health Services', value: 85 },
  { name: 'Sanitation', value: 64 },
];

const reportingHistory = [
  { name: 'Q1 Fiscal Performance Report', date: 'May 11, 2026', type: 'PDF' },
  { name: 'Constituent Sentiment Rollup', date: 'May 16, 2026', type: 'CSV' },
  { name: 'Channel Engagement Benchmark', date: 'May 19, 2026', type: 'PDF' },
  { name: 'Project Delivery Snapshot', date: 'May 22, 2026', type: 'CSV' },
];

export default function AnalyticsPage() {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = (type: 'csv' | 'pdf') => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      alert(`Simulation: ${type.toUpperCase()} report generated and downloaded.`);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <PageHeader
        eyebrow="Analytics workspace"
        title="Cross-channel analytics and reporting"
        description="Structured reporting for civic performance, departmental efficiency, and executive communication outcomes."
        actions={
          <>
            <Button variant="secondary" leadingIcon={<Download className="h-4 w-4" />} onClick={() => handleExport('csv')} disabled={isExporting}>
              Export CSV
            </Button>
            <Button leadingIcon={<FileText className="h-4 w-4" />} onClick={() => handleExport('pdf')} disabled={isExporting}>
              {isExporting ? 'Generating report...' : 'Download PDF'}
            </Button>
          </>
        }
      />

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
        <Card className="p-5 sm:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/82">Reporting period</label>
              <Select defaultValue="30" className="pr-10">
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/82">Data source</label>
              <Select defaultValue="all" className="pr-10">
                <option value="all">All channels</option>
                <option value="social">Social only</option>
                <option value="newsletter">Newsletter only</option>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/82">Audience slice</label>
              <Select defaultValue="citywide" className="pr-10">
                <option value="citywide">Citywide</option>
                <option value="district4">District 4</option>
                <option value="business">Business owners</option>
              </Select>
            </div>
          </div>
        </Card>

        <Card className="p-5 sm:p-6">
          <div className="flex h-full flex-wrap items-center gap-3">
            <Badge variant="neutral">
              <CalendarRange className="h-3.5 w-3.5" />
              Active filters
            </Badge>
            <Badge variant="gold">
              <Filter className="h-3.5 w-3.5" />
              Executive view
            </Badge>
            <Badge variant="neutral">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Comparable trends
            </Badge>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {mockMetrics.map((metric) => (
          <MetricCard
            key={metric.id}
            eyebrow={metric.name}
            value={`${metric.value}${metric.unit}`}
            meta={<span>{metric.trend > 0 ? '+' : ''}{metric.trend}% period change</span>}
            icon={<BarChart3 className="h-5 w-5" />}
          />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.8fr)]">
        <Card className="p-6 sm:p-7">
          <CardHeader className="mb-8">
            <CardTitle>Cross-metric comparison</CardTitle>
            <CardDescription>
              Relative strength and movement across the core civic KPI stack.
            </CardDescription>
          </CardHeader>
          <div className="h-[380px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockMetrics} barGap={14}>
                <CartesianGrid stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff4d" tickLine={false} axisLine={false} fontSize={11} />
                <YAxis stroke="#ffffff4d" tickLine={false} axisLine={false} fontSize={11} />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                  contentStyle={{
                    backgroundColor: '#0f0f0f',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '18px',
                  }}
                />
                <Legend />
                <Bar dataKey="value" name="Current value" fill="#d4af37" radius={[8, 8, 0, 0]} />
                <Bar dataKey="trend" name="Trend %" fill="#5a5548" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 sm:p-7">
          <CardHeader className="mb-8">
            <CardTitle>Department efficiency</CardTitle>
            <CardDescription>
              Resource utilization against internal benchmarks across key departments.
            </CardDescription>
          </CardHeader>
          <div className="space-y-5">
            {efficiencyData.map((dept) => (
              <div key={dept.name} className="space-y-2.5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">{dept.name}</p>
                  <span className="font-display text-lg font-semibold text-primary">{dept.value}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/6">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#f2ca50,#d4af37)]"
                    style={{ width: `${dept.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Card className="overflow-hidden">
          <div className="border-b border-white/10 px-6 py-5 sm:px-7">
            <CardTitle>Reporting history</CardTitle>
            <CardDescription className="mt-2">
              Recently generated reports ready for distribution or download.
            </CardDescription>
          </div>
          <div className="divide-y divide-white/8">
            {reportingHistory.map((report) => (
              <div
                key={report.name}
                className="flex flex-col gap-3 px-6 py-4 transition hover:bg-white/4 sm:flex-row sm:items-center sm:justify-between sm:px-7"
              >
                <div>
                  <p className="text-sm font-medium text-white">{report.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/38">
                    {report.date}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="neutral">{report.type}</Badge>
                  <Button variant="ghost" size="sm" leadingIcon={<Download className="h-4 w-4" />}>
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 sm:p-7">
          <CardHeader className="mb-8">
            <CardTitle>Executive notes</CardTitle>
            <CardDescription>
              Keep high-level interpretation close to the metrics to support cabinet and public communications.
            </CardDescription>
          </CardHeader>
          <div className="space-y-4">
            {[
              'Civic trust remains stable despite transport concerns, which suggests targeted messaging should outperform broad reassurance.',
              'Departmental efficiency indicates sanitation is the biggest operational improvement opportunity this cycle.',
              'Budget utilization is pacing safely, allowing room for late-quarter acceleration where public visibility is highest.',
            ].map((note) => (
              <div key={note} className="rounded-2xl border border-white/8 bg-white/4 p-4 text-sm leading-6 text-white/64">
                {note}
              </div>
            ))}
          </div>
        </Card>
      </section>
    </DashboardLayout>
  );
}
