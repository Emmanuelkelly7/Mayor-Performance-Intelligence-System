'use client';

import { useState } from 'react';
import { AlertTriangle, KeyRound, ShieldCheck, UserCog } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Button from '@/components/ui/Button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { FieldLabel, Input, Select } from '@/components/ui/Field';
import PageHeader from '@/components/ui/PageHeader';
import Toggle from '@/components/ui/Toggle';

export default function SettingsPage() {
  const [twoFactor, setTwoFactor] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState(false);

  return (
    <DashboardLayout>
      <PageHeader
        eyebrow="Administration"
        title="Executive settings and platform governance"
        description="Manage profile information, account protections, and service-level controls for the Mayor Performance Intelligence System."
        actions={
          <>
            <Button variant="secondary">Discard changes</Button>
            <Button>Save settings</Button>
          </>
        }
      />

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_360px]">
        <div className="space-y-4">
          <Card className="p-6 sm:p-7">
            <CardHeader className="mb-8">
              <div className="flex items-center gap-3">
                <UserCog className="h-5 w-5 text-primary" />
                <div>
                  <CardTitle>Profile</CardTitle>
                  <CardDescription className="mt-2">
                    Identity and contact details used across executive workflows.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <FieldLabel htmlFor="full-name">Full name</FieldLabel>
                <Input id="full-name" defaultValue="Tom Mrakas" />
              </div>
              <div className="space-y-2">
                <FieldLabel htmlFor="email-address">Email address</FieldLabel>
                <Input id="email-address" type="email" defaultValue="mayor@demo.com" />
              </div>
              <div className="space-y-2">
                <FieldLabel htmlFor="role">Role</FieldLabel>
                <Input id="role" defaultValue="Mayor" />
              </div>
              <div className="space-y-2">
                <FieldLabel htmlFor="timezone">Timezone</FieldLabel>
                <Select id="timezone" defaultValue="est">
                  <option value="est">Eastern Time</option>
                  <option value="cst">Central Time</option>
                  <option value="pst">Pacific Time</option>
                </Select>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-7">
            <CardHeader className="mb-8">
              <div className="flex items-center gap-3">
                <KeyRound className="h-5 w-5 text-primary" />
                <div>
                  <CardTitle>Security controls</CardTitle>
                  <CardDescription className="mt-2">
                    Account-level safeguards for executive sessions and privileged access.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/4 p-4">
                <div>
                  <p className="text-sm font-medium text-white">Two-factor authentication</p>
                  <p className="mt-1 text-sm leading-6 text-white/56">
                    Require a second factor before opening the executive dashboard.
                  </p>
                </div>
                <Toggle checked={twoFactor} onClick={() => setTwoFactor((value) => !value)} />
              </div>

              <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/4 p-4">
                <div>
                  <p className="text-sm font-medium text-white">Session timeout</p>
                  <p className="mt-1 text-sm leading-6 text-white/56">
                    Automatically sign out after 30 minutes of inactivity on shared devices.
                  </p>
                </div>
                <Toggle checked={sessionTimeout} onClick={() => setSessionTimeout((value) => !value)} />
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="p-6">
            <CardHeader className="mb-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <div>
                  <CardTitle>System status</CardTitle>
                  <CardDescription className="mt-2">
                    Operational state of major platform services.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <div className="space-y-3">
              {[
                ['Core engine', 'Operational'],
                ['API bridge', 'Operational'],
                ['Data ingestion', 'Optimal'],
                ['OCR processing', 'Operational'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm">
                  <span className="text-white/56">{label}</span>
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 h-5 w-5 text-[#ffb4ab]" />
              <div>
                <h3 className="font-display text-lg font-semibold text-white">Danger zone</h3>
                <p className="mt-2 text-sm leading-6 text-white/62">
                  Cache purge and hard resets should be tightly controlled because they affect executive data visibility.
                </p>
                <Button variant="danger" className="mt-5">
                  Purge analytics cache
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </DashboardLayout>
  );
}
