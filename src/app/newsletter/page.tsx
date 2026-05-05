'use client';

import { useState } from 'react';
import { Eye, Mail, Send, Sparkles, Users } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { FieldLabel, Input, Select, Textarea } from '@/components/ui/Field';
import PageHeader from '@/components/ui/PageHeader';

const defaultDraft = `Subject: Weekly Executive Update: Investing in Our Future

Dear Constituents,

This week, our administration advanced several initiatives that directly improve daily life for residents across the city. From infrastructure delivery to stronger public engagement, the latest signals show tangible progress and a constructive response from the community.

Key updates:
- Infrastructure sentiment has improved following the recent announcement.
- Community engagement remains strongest on social and neighborhood channels.
- Newsletter performance opportunities remain highest in district-specific messaging.

Thank you for continuing to share your feedback and priorities.

Mayor Tom Mrakas`;

export default function NewsletterPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [content, setContent] = useState(defaultDraft);
  const [theme, setTheme] = useState('Infrastructure Progress & Community Engagement');

  function generateAIContent() {
    setIsGenerating(true);
    setTimeout(() => {
      setContent(defaultDraft);
      setIsGenerating(false);
    }, 2000);
  }

  return (
    <DashboardLayout>
      <PageHeader
        eyebrow="Communications"
        title="Newsletter builder and executive preview"
        description="Draft, refine, and prepare official constituent communications with structured campaign controls and live preview."
        actions={
          <>
            <Badge variant="gold">Mailing sync ready</Badge>
            <Button variant="secondary" leadingIcon={<Mail className="h-4 w-4 text-primary" />}>
              Save draft
            </Button>
            <Button leadingIcon={<Send className="h-4 w-4" />}>Send campaign</Button>
          </>
        }
      />

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <Card className="p-6 sm:p-7">
          <CardHeader className="mb-8">
            <CardTitle>Editor</CardTitle>
            <CardDescription>
              Prepare newsletter content, targeting, and scheduling before distribution.
            </CardDescription>
          </CardHeader>

          <div className="space-y-6">
            <div className="space-y-2">
              <FieldLabel htmlFor="campaign-theme">Campaign theme</FieldLabel>
              <Input
                id="campaign-theme"
                value={theme}
                onChange={(event) => setTheme(event.target.value)}
                placeholder="Infrastructure Progress & Community Engagement"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <FieldLabel htmlFor="audience">Audience segment</FieldLabel>
                <Select id="audience" defaultValue="all">
                  <option value="all">All Constituents (245,032)</option>
                  <option value="district4">District 4 Residents</option>
                  <option value="business">Business Owners</option>
                  <option value="volunteers">Public Safety Volunteers</option>
                </Select>
              </div>
              <div className="space-y-2">
                <FieldLabel htmlFor="schedule">Delivery window</FieldLabel>
                <Select id="schedule" defaultValue="immediate">
                  <option value="immediate">Send immediately</option>
                  <option value="tomorrow">Tomorrow at 8:00 AM</option>
                  <option value="next">Next Monday at 9:00 AM</option>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <FieldLabel htmlFor="newsletter-content">Newsletter content</FieldLabel>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={generateAIContent}
                  leadingIcon={<Sparkles className="h-4 w-4 text-primary" />}
                >
                  {isGenerating ? 'Generating draft...' : 'Generate AI draft'}
                </Button>
              </div>
              <Textarea
                id="newsletter-content"
                rows={18}
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Start writing or generate an AI draft..."
                className="min-h-[360px] leading-7"
              />
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="p-6 sm:p-7">
            <CardHeader className="mb-8 flex-row items-start justify-between">
              <div>
                <CardTitle>Live preview</CardTitle>
                <CardDescription className="mt-2">
                  Final presentation view for executive review.
                </CardDescription>
              </div>
              <Badge variant="neutral">
                <Eye className="h-3.5 w-3.5" />
                Preview
              </Badge>
            </CardHeader>
            <div className="rounded-[24px] border border-white/8 bg-white/4 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/74">
                Mayor Tom Mrakas
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">{theme}</h3>
              <div className="mt-5 whitespace-pre-wrap text-sm leading-7 text-white/70">
                {content}
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <CardHeader className="mb-6">
              <CardTitle>Campaign settings</CardTitle>
              <CardDescription>Mailing and segmentation health before release.</CardDescription>
            </CardHeader>
            <div className="space-y-3">
              {[
                ['Mail service', 'Ready to link'],
                ['Audience sync', 'Daily refresh active'],
                ['Open rate benchmark', '39% target'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm">
                  <span className="text-white/56">{label}</span>
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-primary/16 bg-primary/10 p-4 text-sm leading-6 text-white/64">
              District-level variants can be layered in later without disrupting the current approval flow.
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-3">
              <Users className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-display text-lg font-semibold text-white">Audience note</h3>
                <p className="mt-2 text-sm leading-6 text-white/62">
                  Use citywide sends for broad progress updates and reserve district variants for issue-specific follow-up.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </DashboardLayout>
  );
}
