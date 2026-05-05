'use client';

import { Bell, Menu, Search, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { navItems } from './Sidebar';

const routeLabels = Object.fromEntries(navItems.map((item) => [item.href, item.name]));

export default function Header({
  pathname,
  onOpenMobile,
}: {
  pathname: string;
  onOpenMobile: () => void;
}) {
  const sectionLabel = routeLabels[pathname] ?? 'Dashboard';

  return (
    <header
      className="sticky top-0 z-30 border-b border-white/10 bg-[rgba(8,8,8,0.82)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onOpenMobile}
            className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-2.5 text-white/70 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-4 w-4" />
          </button>

          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/74">
              Mayor Tom Mrakas
            </p>
            <div className="mt-1 flex items-center gap-3">
              <h2 className="truncate font-display text-lg font-semibold text-white sm:text-xl">
                {sectionLabel}
              </h2>
              <Badge variant="neutral" className="hidden sm:inline-flex">
                Last 30 days
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden rounded-2xl border border-white/10 bg-white/5 p-2.5 text-white/60 transition hover:bg-white/10 hover:text-white lg:inline-flex"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-white/60 transition hover:bg-white/10 hover:text-white"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
          </button>
          <Button
            variant="secondary"
            size="md"
            className="hidden sm:inline-flex"
            leadingIcon={<Sparkles className="h-4 w-4 text-primary" />}
          >
            Executive summary
          </Button>
          <div className="hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 lg:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
              TM
            </div>
            <div>
              <p className="text-sm font-medium text-white">Tom Mrakas</p>
              <p className="text-xs text-white/45">Mayor</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
