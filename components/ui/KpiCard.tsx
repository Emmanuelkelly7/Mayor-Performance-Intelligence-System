"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { TrendingUp, TrendingDown, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface KpiCardProps {
  label: string;
  value: string;
  subValue?: string;
  trend?: "up" | "down";
  status?: "positive" | "negative" | "warning" | "info";
  accent?: boolean;
}

export function KpiCard({ label, value, subValue, status, accent }: KpiCardProps) {
  const [displayValue, setDisplayValue] = useState("0");
  
  // Simple numeric extraction for count-up
  const numericValue = value ? parseFloat(value.replace(/[^0-9.]/g, "")) : NaN;
  const suffix = value ? value.replace(/[0-9.,]/g, "") : "";
  const prefix = value?.startsWith("$") ? "$" : "";

  useEffect(() => {
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, numericValue, {
      duration: 1.2,
      onUpdate: (latest) => {
        const formatted = latest.toLocaleString(undefined, {
          minimumFractionDigits: value.includes(".") ? 1 : 0,
          maximumFractionDigits: value.includes(".") ? 2 : 0,
        });
        setDisplayValue(`${prefix}${formatted}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [numericValue, prefix, suffix, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "card p-6 flex flex-col justify-between min-h-[140px] group",
        accent && "border-primary border-t-4",
        !accent && "card-hover"
      )}
    >
      <div>
        <p className="text-muted-foreground text-xs font-black uppercase tracking-[0.2em] mb-2 opacity-60">
          {label}
        </p>
        <div className="flex items-center justify-between">
          <h3 className={cn(
            "text-2xl md:text-3xl font-black tracking-tighter",
            accent ? "text-primary" : "text-foreground"
          )}>
            {displayValue}
          </h3>
          <div className="shrink-0 p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/10 transition-colors">
            {status === "positive" && <TrendingUp className="text-positive h-4 w-4 md:h-5 md:w-5" />}
            {status === "negative" && <TrendingDown className="text-negative h-4 w-4 md:h-5 md:w-5" />}
            {status === "warning" && <AlertTriangle className="text-warning h-4 w-4 md:h-5 md:w-5" />}
            {(status === "info" || !status) && <Info className="text-primary h-4 w-4 md:h-5 md:w-5" />}
          </div>
        </div>
      </div>
      
      {subValue && (
        <p className={cn(
          "text-[11px] md:text-xs mt-4 font-black uppercase tracking-widest",
          status === "positive" && "text-positive",
          status === "negative" && "text-negative",
          status === "warning" && "text-warning",
          !status && "text-muted-foreground"
        )}>
          {subValue}
        </p>
      )}
    </motion.div>
  );
}
