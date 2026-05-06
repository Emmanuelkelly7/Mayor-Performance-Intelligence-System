"use client";

import { usePathname } from "next/navigation";
import { Search, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { ExportButton } from "@/components/ui/ExportButton";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import Link from "next/link";
import Image from "next/image";

const routeNames: Record<string, string> = {
  "/overview": "Dashboard Overview",
  "/mrakas": "Candidate Analysis",
  "/wards": "Ward Analysis",
  "/strategy": "Campaign Strategy",
  "/profile": "Candidate Profile",
  "/settings": "System Settings",
};

export function Header() {
  const pathname = usePathname();
  const pageTitle = routeNames[pathname] || "Dashboard";

  return (
    <header className="sticky top-0 z-40 h-16 bg-background/80 backdrop-blur-md border-b border-border px-4 md:px-8 flex items-center justify-between">
      {/* Mobile Spacer for Toggle Button */}
      <div className="w-12 md:hidden shrink-0" />

      <div className="flex items-center gap-4">
        <h1 className="text-lg md:text-xl font-black text-foreground truncate max-w-[150px] sm:max-w-none">
          {pageTitle}
        </h1>
      </div>

      <div className="flex-1 max-w-md mx-4 hidden lg:block">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
          <input
            type="text"
            placeholder="Search dashboard..."
            className="w-full bg-secondary border border-border rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <ExportButton 
          variant="PDF" 
          filename={`aurora-dashboard-${pageTitle.toLowerCase().replace(/ /g, "-")}.pdf`} 
          targetId="dashboard-content"
          className="hidden sm:flex"
        />
        
        <ThemeToggle />
        
        <button className="p-2 text-muted-foreground hover:bg-secondary rounded-xl transition-colors relative hidden sm:block">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-background" />
        </button>
        
        <div className="h-8 w-px bg-border mx-1 hidden sm:block" />
        
        <Link href="/profile" className="flex items-center gap-3 group shrink-0">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-foreground leading-tight">Tom Mrakas</p>
            <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">Mayor</p>
          </div>
          <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-primary/50 overflow-hidden shadow-lg group-hover:border-primary transition-colors bg-white/10 p-1">
            <Image 
              src="/profile_image/Mayor-Mrakas-Masked.png" 
              alt="Mayor Tom Mrakas" 
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
