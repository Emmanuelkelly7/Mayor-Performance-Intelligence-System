'use client';

import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  CircleAlert,
  Mail,
  MessagesSquare,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  MetricCard,
} from '@/components/ui/Card';
import PageHeader from '@/components/ui/PageHeader';
import { mockMetrics, mockSocialPosts } from '@/lib/mock-db';
import { formatMetric } from '@/lib/utils';

const sentimentData = [
  { name: 'Positive', value: 65, color: '#d4af37' },
  { name: 'Neutral', value: 24, color: '#6f6757' },
  { name: 'Negative', value: 11, color: '#c7685b' },
];

const engagementByChannel = [
  { name: 'X / Twitter', volume: 12402, percent: 85 },
  { name: 'Facebook', volume: 8290, percent: 55 },
  { name: 'Newsletter', volume: 5112, percent: 35 },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <PageHeader
        eyebrow="Executive overview"
        title="Mayor Tom Mrakas performance command center"
        description="Real-time civic sentiment, engagement health, and operational signals in one briefing surface designed for executive review."
        actions={
          <>
            <Badge variant="gold">Operational intelligence live</Badge>
            <Button variant="secondary" size="md" leadingIcon={<Mail className="h-4 w-4 text-primary" />}>
              Export briefing
            </Button>
          </>
        }
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {mockMetrics.map((metric) => {
          const trendPositive = metric.trend >= 0;

          return (
            <MetricCard
              key={metric.id}
              eyebrow={metric.name}
              value={formatMetric(metric.value, metric.unit)}
              icon={<Activity className="h-5 w-5" />}
              meta={
                <div className="flex items-center gap-2">
                  {trendPositive ? (
                    <TrendingUp className="h-4 w-4 text-primary" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-[#ffb4ab]" />
                  )}
                  <span className={trendPositive ? 'text-primary' : 'text-[#ffb4ab]'}>
                    {trendPositive ? '+' : ''}
                    {metric.trend}% from prior period
                  </span>
                </div>
              }
            />
          );
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.9fr)]">
        <Card className="p-6 sm:p-7">
          <CardHeader className="mb-8 flex-row items-start justify-between gap-4">
            <div className="space-y-2">
              <CardTitle>Performance trajectory</CardTitle>
              <CardDescription>
                The mayoral composite score combines civic trust, service delivery, completion velocity, and budget execution.
              </CardDescription>
            </div>
            <Badge variant="neutral">30 day trend</Badge>
          </CardHeader>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockMetrics[0].history}>
                <defs>
                  <linearGradient id="dashboardArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d4af37" stopOpacity={0.34} />
                    <stop offset="95%" stopColor="#d4af37" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#ffffff10" vertical={false} />
                <XAxis
                  dataKey="date"
                  stroke="#ffffff55"
                  tickLine={false}
                  axisLine={false}
                  fontSize={11}
                  tickFormatter={(value) =>
                    new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })
                  }
                />
                <YAxis
                  stroke="#ffffff55"
                  tickLine={false}
                  axisLine={false}
                  fontSize={11}
                  width={42}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f0f0f',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '18px',
                    color: '#efe6d7',
                  }}
                  labelStyle={{ color: '#efe6d7' }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#d4af37"
                  strokeWidth={3}
                  fill="url(#dashboardArea)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 sm:p-7">
          <CardHeader className="mb-8">
            <CardTitle>Sentiment distribution</CardTitle>
            <CardDescription>
              Public response is holding above the quarterly target after the infrastructure announcement.
            </CardDescription>
          </CardHeader>
          <div className="flex flex-col gap-7 sm:flex-row xl:flex-col xl:items-center">
            <div className="relative h-52 w-52 self-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    innerRadius={66}
                    outerRadius={88}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {sentimentData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-4xl font-semibold text-white">82%</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/42">
                  confidence
                </span>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              {sentimentData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-white/78">{item.name}</span>
                  </div>
                  <span className="font-display text-lg font-semibold text-white">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,1fr)]">
        <Card className="p-6 sm:p-7">
          <CardHeader className="mb-8">
            <CardTitle>Channel engagement health</CardTitle>
            <CardDescription>
              Executive communications remain strongest on social, with newsletters providing high-value follow-up.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {engagementByChannel.map((channel) => (
              <div key={channel.name} className="space-y-3">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">{channel.name}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                      {channel.volume.toLocaleString()} interactions
                    </p>
                  </div>
                  <span className="font-display text-lg font-semibold text-primary">
                    {channel.percent}%
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/6">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#f2ca50,#d4af37)]"
                    style={{ width: `${channel.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="p-6 sm:p-7">
          <CardHeader className="mb-8 flex-row items-start justify-between">
            <div className="space-y-2">
              <CardTitle>Recent public signals</CardTitle>
              <CardDescription>
                Latest high-signal constituent posts and reactions requiring attention.
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" trailingIcon={<ArrowUpRight className="h-4 w-4" />}>
              View feed
            </Button>
          </CardHeader>

          <div className="space-y-4">
            {mockSocialPosts.map((post) => {
              const sentimentVariant =
                post.sentiment === 'positive'
                  ? 'success'
                  : post.sentiment === 'negative'
                    ? 'danger'
                    : 'neutral';

              return (
                <div
                  key={post.id}
                  className="rounded-2xl border border-white/8 bg-white/4 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/8 bg-white/6 text-primary">
                        <MessagesSquare className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-semibold text-white">{post.author}</p>
                          <Badge variant={sentimentVariant}>{post.sentiment}</Badge>
                        </div>
                        <p className="text-sm leading-6 text-white/62">{post.content}</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-xs text-white/40">{post.timestamp}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-white/6 pt-4 text-xs text-white/45">
                    <span>{post.platform}</span>
                    <span>{post.engagement} engagements</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <BadgeCheck className="h-5 w-5 text-emerald-300" />
            <div>
              <h3 className="font-display text-lg font-semibold text-white">Operational status</h3>
              <p className="text-sm text-white/55">All core systems are within expected ranges.</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <CircleAlert className="h-5 w-5 text-primary" />
            <div>
              <h3 className="font-display text-lg font-semibold text-white">Priority watchlist</h3>
              <p className="text-sm text-white/55">District 4 engagement and transit reliability remain active.</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <div>
              <h3 className="font-display text-lg font-semibold text-white">Comms readiness</h3>
              <p className="text-sm text-white/55">Newsletter audience and export channels are ready to send.</p>
            </div>
          </div>
        </Card>
      </section>
    </DashboardLayout>
  );
}
