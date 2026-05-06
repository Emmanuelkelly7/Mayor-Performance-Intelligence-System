"use client";

import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, Calendar, TrendingUp, Award, Users } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <PageWrapper>
      <div className="space-y-8">
        <SectionHeader 
          title="Candidate Profile" 
          description="Detailed overview of Mayor Tom Mrakas' campaign role and institutional history."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Profile Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-8 flex flex-col items-center text-center space-y-6"
          >
            <div className="relative w-40 h-40 rounded-full border-4 border-accent-light shadow-xl overflow-hidden group bg-white dark:bg-secondary/50 p-2">
              <Image 
                src="/profile_image/Mayor-Mrakas-Masked.png" 
                alt="Mayor Tom Mrakas" 
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105 p-1"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-black text-text-primary">Tom Mrakas</h2>
              <p className="text-accent-primary font-bold text-lg">Mayor · Town of Aurora</p>
              <div className="flex items-center justify-center gap-2 mt-2 text-text-muted">
                <MapPin size={14} />
                <span className="text-sm">Aurora, Ontario</span>
              </div>
            </div>

            <div className="w-full h-px bg-border" />

            <div className="w-full space-y-4">
              <div className="flex items-center gap-4 text-left">
                <div className="p-2 rounded-lg bg-bg-primary text-accent-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-text-muted tracking-widest">Email Address</p>
                  <p className="text-sm font-bold text-text-primary">tom@mrakas.ca</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left">
                <div className="p-2 rounded-lg bg-bg-primary text-accent-primary">
                  <Briefcase size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-text-muted tracking-widest">Role</p>
                  <p className="text-sm font-bold text-text-primary">Incumbent Mayor</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left">
                <div className="p-2 rounded-lg bg-bg-primary text-accent-primary">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-text-muted tracking-widest">Member Since</p>
                  <p className="text-sm font-bold text-text-primary">2014 (Council)</p>
                </div>
              </div>
            </div>

            <button className="w-full btn-primary mt-4">
              Edit Profile
            </button>
          </motion.div>

          {/* Right Column: Activity & Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card p-8"
            >
              <h3 className="text-xl font-black text-text-primary mb-6 flex items-center gap-2">
                <Award className="text-accent-primary" size={24} />
                Campaign Leadership Overview
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Tom Mrakas has served as Mayor of Aurora since 2018, leading the town through a period of significant growth and revitalization. His leadership is defined by a commitment to responsible development, fiscal transparency, and community engagement. Under his tenure, Aurora has seen major infrastructure improvements and a strengthened local economy.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-bg-primary rounded-xl border border-border">
                  <p className="text-text-muted text-xs font-bold uppercase mb-1">2022 Mandate</p>
                  <p className="text-xl font-black text-text-primary">69.5% Vote Share</p>
                </div>
                <div className="p-4 bg-bg-primary rounded-xl border border-border">
                  <p className="text-text-muted text-xs font-bold uppercase mb-1">Town Engagement</p>
                  <p className="text-xl font-black text-text-primary">All 6 Wards Won</p>
                </div>
              </div>
            </motion.div>

            {/* Recent Insights Placeholder */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-8"
            >
              <h3 className="text-xl font-black text-text-primary mb-6 flex items-center gap-2">
                <TrendingUp className="text-accent-primary" size={24} />
                Strategic Activity Summary
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Users, label: "Voter Outreach", value: "2,450 households contacted in Q1" },
                  { icon: Award, label: "Platform Policy", value: "6 core pillars finalized for 2026" },
                  { icon: Mail, label: "Digital Engagement", value: "39.4% internet voting conversion achieved" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-accent-light text-accent-primary flex items-center justify-center group-hover:bg-accent-primary group-hover:text-white transition-colors">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">{item.label}</p>
                      <p className="text-xs text-text-secondary">{item.value}</p>
                    </div>
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
