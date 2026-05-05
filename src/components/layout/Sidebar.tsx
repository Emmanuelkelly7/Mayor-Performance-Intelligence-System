'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  BrainCircuit,
  ChevronLeft,
  LayoutDashboard,
  LogOut,
  Mail,
  Settings,
  Upload,
  X,
} from 'lucide-react';
import { logout } from '@/lib/auth';
import { cn } from '@/lib/utils';

export const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Upload', href: '/upload', icon: Upload },
  { name: 'Insights', href: '/insights', icon: BrainCircuit },
  { name: 'Newsletter', href: '/newsletter', icon: Mail },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar({
  collapsed,
  mobileOpen,
  onToggleCollapse,
  onCloseMobile,
}: {
  collapsed: boolean;
  mobileOpen: boolean;
  onToggleCollapse: () => void;
  onCloseMobile: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition md:hidden',
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={onCloseMobile}
      />

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex h-full flex-col border-r border-white/10 bg-[rgba(8,8,8,0.96)] px-4 py-5 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all duration-300',
          collapsed ? 'md:w-[92px]' : 'md:w-[280px]',
          mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
          'w-[280px]'
        )}
      >
        <div className="mb-8 flex items-center justify-between gap-3">
          <div className={cn('flex items-center gap-3 overflow-hidden', collapsed && 'md:justify-center')}>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              TM
            </div>
            <div className={cn('min-w-0', collapsed && 'md:hidden')}>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                Mayor Intel
              </p>
              <p className="text-sm text-white/45">Tom Mrakas executive system</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleCollapse}
              className="hidden rounded-xl border border-white/10 bg-white/5 p-2 text-white/60 transition hover:bg-white/10 hover:text-white md:inline-flex"
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <ChevronLeft className={cn('h-4 w-4 transition', collapsed && 'rotate-180')} />
            </button>
            <button
              type="button"
              onClick={onCloseMobile}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/60 transition hover:bg-white/10 hover:text-white md:hidden"
              aria-label="Close navigation"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1.5">
          {navItems.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                onClick={onCloseMobile}
                className={cn(
                  'group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition duration-200',
                  isActive
                    ? 'bg-primary/12 text-primary'
                    : 'text-white/62 hover:bg-white/6 hover:text-white',
                  collapsed && 'md:justify-center md:px-0'
                )}
              >
                <span
                  className={cn(
                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition',
                    isActive
                      ? 'border-primary/20 bg-primary/10'
                      : 'border-white/6 bg-white/4 group-hover:border-white/12'
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span className={cn('truncate', collapsed && 'md:hidden')}>{name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
          <div className={cn('flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 p-3', collapsed && 'md:justify-center')}>
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              TM
            </div>
            <div className={cn('min-w-0', collapsed && 'md:hidden')}>
              <p className="truncate text-sm font-semibold text-white">Mayor Tom Mrakas</p>
              <p className="truncate text-xs text-white/45">Executive access active</p>
            </div>
          </div>

          <button
            onClick={() => logout()}
            className={cn(
              'flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-white/55 transition hover:bg-white/6 hover:text-[#ffb4ab]',
              collapsed && 'md:justify-center'
            )}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/6 bg-white/4">
              <LogOut className="h-4 w-4" />
            </span>
            <span className={cn(collapsed && 'md:hidden')}>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
