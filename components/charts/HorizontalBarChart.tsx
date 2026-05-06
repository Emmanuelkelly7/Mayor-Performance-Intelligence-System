"use client";

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  LabelList
} from "recharts";
import { cn } from "@/lib/utils";

interface DataItem {
  name: string;
  value: number;
  color?: string;
}

interface HorizontalBarChartProps {
  data: DataItem[];
  height?: number;
  className?: string;
  xAxisDomain?: [number, number];
}

export function HorizontalBarChart({ 
  data, 
  height = 400, 
  className,
  xAxisDomain = [0, 2000]
}: HorizontalBarChartProps) {
  return (
    <div className={cn("w-full", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%" debounce={50}>
        <BarChart 
          layout="vertical" 
          data={data} 
          margin={{ top: 5, right: 80, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#DBEAFE" />
          <XAxis 
            type="number" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#94A3B8", fontSize: 12 }}
            domain={xAxisDomain}
          />
          <YAxis 
            dataKey="name" 
            type="category" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#475569", fontSize: 12, fontWeight: 600 }}
            width={100}
          />
          <Tooltip 
            cursor={{ fill: "#F0F4FF" }}
            contentStyle={{ borderRadius: "12px", border: "1px solid #BFDBFE", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }}
            formatter={(value: any) => [value.toLocaleString(), "Estimated Votes"]}
          />
          <Bar 
            dataKey="value" 
            radius={[0, 8, 8, 0]} 
            animationDuration={1000}
            barSize={24}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || "#2563EB"} />
            ))}
            <LabelList 
              dataKey="value" 
              position="right" 
              formatter={(val: any) => val.toLocaleString()}
              style={{ fill: "#475569", fontSize: 11, fontWeight: 600 }}
              offset={10}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
