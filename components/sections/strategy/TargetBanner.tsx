"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

export function TargetBanner() {
  const [count, setCount] = useState(0);
  const target = 8500;
  const current = 7743;
  const progress = (current / target) * 100;

  useEffect(() => {
    const controls = animate(0, target, {
      duration: 1.5,
      onUpdate: (latest) => setCount(Math.round(latest)),
    });
    return () => controls.stop();
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl text-center md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        <div>
          <motion.h2 
            className="text-6xl md:text-8xl font-black mb-2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            {count.toLocaleString()}+
          </motion.h2>
          <p className="text-xl md:text-2xl font-bold opacity-90 mb-4">Target votes for Mrakas</p>
          <p className="text-sm md:text-base text-blue-100 max-w-md opacity-80">
            Exceeds the 2022 total by approximately 750 votes, creating a stronger buffer against challenger momentum.
          </p>
        </div>
        
        <div className="w-full">
          <div className="flex justify-between items-end mb-3">
            <span className="text-sm font-bold uppercase tracking-wider text-blue-100">Current Progress</span>
            <span className="text-2xl font-black">{progress.toFixed(1)}%</span>
          </div>
          <div className="h-6 bg-white/20 rounded-full overflow-hidden border border-white/30 backdrop-blur-sm">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            />
          </div>
          <div className="flex justify-between mt-2 text-xs font-bold text-blue-100">
            <span>7,743 (2022 RESULT)</span>
            <span>8,500 (GOAL)</span>
          </div>
        </div>
      </div>
      
      {/* Decorative */}
      <div className="absolute top-[-50%] left-[-10%] w-[80%] h-[200%] bg-white/5 rotate-12 pointer-events-none" />
    </section>
  );
}
