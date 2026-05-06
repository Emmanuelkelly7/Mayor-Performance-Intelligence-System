"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function ExecutiveBanner() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-2xl p-6 md:p-10 text-primary-foreground relative overflow-hidden shadow-2xl">
      <div className="relative z-10">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl md:text-5xl font-black mb-4 leading-tight"
        >
          Tom Mrakas <br className="md:hidden" />
          <span className="opacity-80">Campaign Dashboard</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl leading-relaxed text-sm md:text-lg opacity-90 font-medium"
        >
          Strategic election intelligence platform integrating 2018–2022 performance data, ward-level turnout patterns, and voter activation strategies for the Town of Aurora.
        </motion.p>
      </div>
      
      <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 group cursor-default">
        <span className="text-[10px] font-black tracking-[0.2em] uppercase">Executive Intelligence</span>
        <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-48 h-48 bg-black/10 rounded-full blur-[80px] pointer-events-none" />
    </section>
  );
}
