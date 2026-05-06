"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  LayoutDashboard, 
  User, 
  Map, 
  Target, 
  ChevronRight,
  Menu,
  X,
  Settings,
  LogOut,
  UserCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/overview" },
  { icon: UserCircle, label: "Profile", href: "/profile" },
  { icon: User, label: "Mrakas", href: "/mrakas" },
  { icon: Map, label: "Wards", href: "/wards" },
  { icon: Target, label: "Strategy", href: "/strategy" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Toggle Button (Persistent) */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-[60] p-2.5 bg-sidebar-bg text-white rounded-xl shadow-lg border border-white/10 active:scale-95 transition-all"
        aria-label="Toggle Navigation"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence mode="wait">
        {isMobileOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[50]"
          />
        )}
        {isMobileOpen && (
          <motion.aside
            key="mobile-sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed left-0 top-0 h-full w-[280px] bg-sidebar-bg text-sidebar-text z-[55] shadow-2xl flex flex-col"
          >
            {/* Logo Area (Mobile) */}
            <div className="h-20 flex items-center px-6 border-b border-white/5">
              <div className="relative w-10 h-10 rounded-full border border-primary overflow-hidden shrink-0 bg-white/10 p-1">
                <Image 
                  src="/profile_image/Mayor-Mrakas-Masked.png" 
                  alt="Mayor Tom Mrakas" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="ml-3">
                <p className="text-white font-bold text-sm">Tom Mrakas</p>
                <p className="text-[10px] text-sidebar-text/60">Mayor of Aurora</p>
              </div>
            </div>

            {/* Navigation (Mobile) */}
            <nav className="flex-1 mt-6 px-4 space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center h-12 px-4 rounded-xl transition-all",
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                        : "hover:bg-white/5 text-sidebar-text"
                    )}
                  >
                    <item.icon size={20} className="shrink-0" />
                    <span className="ml-3 font-bold text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Footer (Mobile) */}
            <div className="p-4 border-t border-white/5 space-y-4">
              <Link
                href="/login"
                className="flex items-center h-12 px-4 rounded-xl transition-all text-sidebar-text hover:bg-red-500/10 hover:text-red-400"
              >
                <LogOut size={20} />
                <span className="ml-3 font-bold text-sm">Log Out</span>
              </Link>
                <div className="flex items-center justify-center gap-2 opacity-40">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <p className="text-[10px] uppercase font-black tracking-widest">Powered by Northly AI</p>
                </div>
              </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isExpanded ? 240 : 64 }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="hidden md:flex flex-col fixed left-0 top-0 h-full bg-sidebar-bg text-sidebar-text z-50 transition-colors duration-300 overflow-hidden"
      >
        {/* Logo Area */}
        <Link href="/profile" className="h-16 flex items-center px-4 shrink-0 overflow-hidden group">
          <div className="relative w-8 h-8 rounded-full border border-primary overflow-hidden shrink-0 shadow-lg bg-white/10 p-1">
            <Image 
              src="/profile_image/Mayor-Mrakas-Masked.png" 
              alt="Mayor Tom Mrakas" 
              fill
              className="object-contain transition-transform group-hover:scale-110"
            />
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="ml-3 whitespace-nowrap"
              >
                <p className="text-white font-bold text-sm">Tom Mrakas</p>
                <p className="text-[10px] text-sidebar-text/60">Mayor · Aurora</p>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 mt-6 px-2 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center h-10 px-3 rounded-xl transition-all relative group",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-white/10 text-sidebar-text"
                )}
              >
                <item.icon className="shrink-0" size={20} />
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="ml-3 font-medium text-sm whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
                
                {isActive && !isExpanded && (
                  <div className="absolute left-0 w-1 h-6 bg-primary rounded-r-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-2 border-t border-white/5 space-y-2">
          <Link
            href="/login"
            className="flex items-center h-10 px-3 rounded-xl transition-all text-sidebar-text hover:bg-red-500/10 hover:text-red-400 group"
          >
            <LogOut size={20} className="shrink-0" />
            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="ml-3 font-medium text-sm whitespace-nowrap"
                >
                  Log Out
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-2 opacity-40 hover:opacity-100 transition-opacity pb-2"
            >
              <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
              <p className="text-[9px] uppercase font-black tracking-widest whitespace-nowrap">
                Powered by Northly AI
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </motion.aside>
    </>
  );
}
