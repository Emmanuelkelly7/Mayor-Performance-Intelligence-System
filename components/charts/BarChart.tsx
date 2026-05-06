"use client";

import { 
  BarChart as ReBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  ReferenceLine,
  LabelList
} from "recharts";
import { cn } from "@/lib/utils";

interface DataItem {
  name: string;
  value: number;
  color?: string;
  subLabel?: string;
}

interface BarChartProps {
  data: DataItem[];
  height?: number;
  className?: string;
  referenceLineValue?: number;
  referenceLineLabel?: string;
  yAxisDomain?: [number, number];
}

export function BarChart({ 
  data, 
  height = 350, 
  className, 
  referenceLineValue, 
  referenceLineLabel,
  yAxisDomain = [0, 40]
}: BarChartProps) {
  return (
    <div 
      className={cn("w-full", className)} 
      style={{ height: `${height}px`, minHeight: `${height}px` }}
    >
      <ResponsiveContainer width="100%" height="100%" debounce={50}>
        <ReBarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DBEAFE" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#94A3B8", fontSize: 12, fontWeight: 500 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#94A3B8", fontSize: 12 }}
            domain={yAxisDomain}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip 
            cursor={{ fill: "#F0F4FF" }}
            contentStyle={{ borderRadius: "12px", border: "1px solid #BFDBFE", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }}
            formatter={(value: any) => [`${value}%`, "Turnout"]}
          />
          {referenceLineValue !== undefined && (
            <ReferenceLine 
              y={referenceLineValue} 
              stroke="#2563EB" 
              strokeDasharray="3 3"
              label={{ 
                value: referenceLineLabel, 
                position: "right", 
                fill: "#2563EB", 
                fontSize: 10, 
                fontWeight: "bold" 
              }} 
            />
          )}
          <Bar 
            dataKey="value" 
            radius={[8, 8, 0, 0]} 
            animationDuration={1000}
            barSize={40}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || "#2563EB"} />
            ))}
            <LabelList 
              dataKey="value" 
              position="top" 
              formatter={(val: any) => `${val}%`}
              style={{ fill: "#475569", fontSize: 11, fontWeight: 600 }}
            />
          </Bar>
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
}
