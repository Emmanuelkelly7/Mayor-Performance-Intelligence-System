"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { cn } from "@/lib/utils";

interface DataItem {
  name: string;
  value: number;
  votes?: number;
  color: string;
}

interface DonutChartProps {
  data: DataItem[];
  centerLabel?: string;
  height?: number;
  className?: string;
}

export function DonutChart({ data, centerLabel, height = 300, className }: DonutChartProps) {
  return (
    <div 
      className={cn("w-full relative", className)} 
      style={{ height: `${height}px`, minHeight: `${height}px` }}
    >
      <ResponsiveContainer width="100%" height="100%" debounce={50}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            animationBegin={0}
            animationDuration={800}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: any, name: any, props: any) => {
              const votes = props.payload.votes;
              return [`${value}% ${votes ? `(${votes.toLocaleString()} votes)` : ""}`, name];
            }}
            contentStyle={{ borderRadius: "12px", border: "1px solid #BFDBFE", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36} 
            formatter={(value, entry, index) => (
              <span className="text-xs font-medium text-text-secondary">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
      {centerLabel && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-[10px] text-text-muted font-bold uppercase tracking-tight text-center max-w-[120px] leading-tight">
            {centerLabel}
          </p>
        </div>
      )}
    </div>
  );
}
