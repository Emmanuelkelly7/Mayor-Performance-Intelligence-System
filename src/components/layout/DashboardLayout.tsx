'use client';

import { useState, type CSSProperties, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Plus } from 'lucide-react';
import Button from '@/components/ui/Button';
import Header from './Header';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const desktopRailWidth = collapsed ? 92 : 280;
  const shellStyle = {
    '--sidebar-width': `${desktopRailWidth}px`,
  } as CSSProperties;

  return (
    <div className="min-h-screen bg-background text-on-surface" style={shellStyle}>
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onToggleCollapse={() => setCollapsed((value) => !value)}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="min-h-screen transition-[margin-left] duration-300 md:[margin-left:var(--sidebar-width)]">
        <Header pathname={pathname} onOpenMobile={() => setMobileOpen(true)} />

        <main className="px-4 pb-10 pt-6 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[1440px] space-y-8">{children}</div>
        </main>
      </div>

      <div className="fixed bottom-5 right-5 z-30 md:bottom-8 md:right-8">
        <Button
          className="h-[52px] rounded-full px-5"
          leadingIcon={<Plus className="h-4 w-4" />}
        >
          New briefing
        </Button>
      </div>
    </div>
  );
}
