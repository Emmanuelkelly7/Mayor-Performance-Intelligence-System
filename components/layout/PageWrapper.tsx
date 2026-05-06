"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="p-4 md:p-8 pt-20 md:pt-8"
    >
      <div className="max-w-[1600px] mx-auto">
        {children}
      </div>
    </motion.div>
  );
}
