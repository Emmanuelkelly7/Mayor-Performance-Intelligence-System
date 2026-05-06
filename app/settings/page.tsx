"use client";

import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { 
  User, 
  Bell, 
  Download, 
  Palette, 
  Shield, 
  Globe, 
  ChevronRight,
  Sun,
  Moon,
  Monitor
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    reports: true
  });

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: User, label: "Account Info" },
    { icon: Bell, label: "Notifications" },
    { icon: Download, label: "Export Prefs" },
    { icon: Palette, label: "Interface" },
    { icon: Shield, label: "Security" },
    { icon: Globe, label: "Regional" }
  ];

  return (
    <PageWrapper>
      <div className="space-y-8">
        <SectionHeader 
          title="System Settings" 
          description="Configure your dashboard preferences, notification alerts, and account security."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-4 space-y-2 overflow-x-auto lg:overflow-visible flex lg:flex-col pb-4 lg:pb-0 gap-2 scrollbar-hide">
            {tabs.map((item, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "flex-1 lg:w-full flex items-center justify-between p-4 rounded-xl transition-all whitespace-nowrap",
                  activeTab === i 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "bg-secondary text-muted-foreground hover:bg-primary/5 border border-transparent hover:border-primary/20"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} />
                  <span className="font-bold text-sm">{item.label}</span>
                </div>
                <ChevronRight size={16} className={cn("hidden lg:block transition-transform", activeTab === i ? "translate-x-1" : "opacity-0")} />
              </button>
            ))}
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Account Settings */}
            <motion.div 
              key={`tab-${activeTab}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card p-6 md:p-8"
            >
              <h3 className="text-xl font-black text-foreground mb-6">Account Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] opacity-60">Full Name</label>
                  <input 
                    type="text" 
                    defaultValue="Tom Mrakas" 
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] opacity-60">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue="tom@mrakas.ca" 
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium"
                  />
                </div>
              </div>
              <button className="btn-primary mt-8 w-full md:w-auto">Save Changes</button>
            </motion.div>

            {/* Interface Selection (Unified into main view for better mobile flow) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card p-6 md:p-8"
            >
              <h3 className="text-xl font-black text-foreground mb-6 flex items-center gap-2">
                <Palette className="text-primary" size={24} />
                Interface Theme
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: "light", icon: Sun, label: "Light Mode" },
                  { id: "dark", icon: Moon, label: "Dark Mode" },
                  { id: "system", icon: Monitor, label: "System Default" }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={cn(
                      "p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all",
                      theme === t.id 
                        ? "border-primary bg-primary/5" 
                        : "border-border bg-secondary hover:border-primary/50"
                    )}
                  >
                    <t.icon size={32} className={theme === t.id ? "text-primary" : "text-muted-foreground"} />
                    <span className={cn("text-sm font-bold", theme === t.id ? "text-primary" : "text-foreground")}>
                      {t.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Notifications */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-6 md:p-8"
            >
              <h3 className="text-xl font-black text-foreground mb-6">Notification Preferences</h3>
              <div className="space-y-6">
                {[
                  { key: "email", label: "Email Notifications", desc: "Weekly performance reports." },
                  { key: "push", label: "Push Notifications", desc: "Real-time data shift alerts." },
                  { key: "reports", label: "Automated Export", desc: "Monthly PDF summaries." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-bold text-foreground text-sm md:text-base">{item.label}</p>
                      <p className="text-xs md:text-sm text-muted-foreground opacity-80">{item.desc}</p>
                    </div>
                    <button 
                      onClick={() => setNotifications(prev => ({ ...prev, [item.key]: !prev[item.key as keyof typeof notifications] }))}
                      className={cn(
                        "w-12 h-6 rounded-full transition-colors relative shrink-0",
                        notifications[item.key as keyof typeof notifications] ? "bg-primary" : "bg-border"
                      )}
                    >
                      <div className={cn(
                        "absolute top-1 w-4 h-4 rounded-full bg-white transition-all",
                        notifications[item.key as keyof typeof notifications] ? "left-7" : "left-1"
                      )} />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
