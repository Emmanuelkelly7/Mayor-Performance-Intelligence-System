// src/lib/mock-db.ts

export interface Metric {
  id: string;
  name: string;
  value: number;
  unit: string;
  trend: number; // percentage change
  history: { date: string; value: number }[];
}

export interface Insight {
  id: string;
  category: 'efficiency' | 'engagement' | 'budget' | 'sentiment';
  priority: 'low' | 'medium' | 'high';
  title: string;
  description: string;
  actionable: string;
  timestamp: string;
}

export interface SocialPost {
  id: string;
  platform: 'twitter' | 'facebook' | 'instagram';
  author: string;
  content: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  engagement: number;
  timestamp: string;
}

export const mockMetrics: Metric[] = [
  {
    id: '1',
    name: 'Civic Trust Score',
    value: 78.4,
    unit: '%',
    trend: 2.1,
    history: [
      { date: '2026-04-01', value: 75.0 },
      { date: '2026-04-15', value: 76.5 },
      { date: '2026-05-01', value: 78.4 },
    ],
  },
  {
    id: '2',
    name: 'Public Safety Rating',
    value: 82.1,
    unit: '%',
    trend: -1.2,
    history: [
      { date: '2026-04-01', value: 83.5 },
      { date: '2026-04-15', value: 83.0 },
      { date: '2026-05-01', value: 82.1 },
    ],
  },
  {
    id: '3',
    name: 'Project Completion Rate',
    value: 64.8,
    unit: '%',
    trend: 5.4,
    history: [
      { date: '2026-04-01', value: 58.0 },
      { date: '2026-04-15', value: 61.2 },
      { date: '2026-05-01', value: 64.8 },
    ],
  },
  {
    id: '4',
    name: 'Budget Utilization',
    value: 42.0,
    unit: '%',
    trend: 0.5,
    history: [
      { date: '2026-04-01', value: 41.0 },
      { date: '2026-04-15', value: 41.5 },
      { date: '2026-05-01', value: 42.0 },
    ],
  },
];

export const mockInsights: Insight[] = [
  {
    id: 'i1',
    category: 'engagement',
    priority: 'high',
    title: 'Engagement Drop in District 4',
    description: 'Digital interactions have decreased by 15% following the zoning announcement.',
    actionable: 'Schedule a town hall or release an explanatory newsletter.',
    timestamp: '2 hours ago',
  },
  {
    id: 'i2',
    category: 'efficiency',
    priority: 'medium',
    title: 'Sanitation Route Optimization',
    description: 'AI predicts a 10% fuel saving if routes are re-sequenced for Tuesdays.',
    actionable: 'Review and approve new route sequences.',
    timestamp: '5 hours ago',
  },
  {
    id: 'i3',
    category: 'sentiment',
    priority: 'high',
    title: 'Rising Transport Concerns',
    description: 'Negative sentiment regarding subway delays has spiked 25% this week.',
    actionable: 'Issue a statement on the upcoming infrastructure upgrades.',
    timestamp: '1 day ago',
  },
];

export const mockSocialPosts: SocialPost[] = [
  {
    id: 's1',
    platform: 'twitter',
    author: '@city_watcher',
    content: "The new park in Eastside is amazing! Thank you @MayorOffice for making this happen.",
    sentiment: 'positive',
    engagement: 450,
    timestamp: '10m ago',
  },
  {
    id: 's2',
    platform: 'twitter',
    author: '@frustrated_commuter',
    content: "Still waiting for the 7 train... 20 minutes and counting. This is unacceptable! #CityTransit",
    sentiment: 'negative',
    engagement: 120,
    timestamp: '30m ago',
  },
];
