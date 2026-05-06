"use client";

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  ReferenceLine,
  Cell
} from "recharts";
import { cn } from "@/lib/utils";

interface DataItem {
  year: string;
  turnout: number;
}

interface GroupedBarChartProps {
  data: DataItem[];
  height?: number;
  className?: string;
}

export function GroupedBarChart({ data, height = 350, className }: GroupedBarChartProps) {
  // We want to show 2018 vs 2022
  // Recharts BarChart usually takes data as [{name: 'X', val1: 1, val2: 2}]
  // But here we have two separate points. We can render them as separate bars in one series.
  
  const colors = ["#2563EB", "#93C5FD"];

  return (
    <div className={cn("w-full", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%" debounce={50}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DBEAFE" />
          <XAxis 
            dataKey="year" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#475569", fontSize: 14, fontWeight: 600 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#94A3B8", fontSize: 12 }}
            domain={[0, 40]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip 
            cursor={{ fill: "#F0F4FF" }}
            contentStyle={{ borderRadius: "12px", border: "1px solid #BFDBFE", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }}
            formatter={(value: any) => [`${value}%`, "Turnout"]}
          />
          <ReferenceLine 
            y={26.1} 
            stroke="#93C5FD" 
            strokeDasharray="3 3" 
            label={{ value: "2022 avg", position: "right", fill: "#93C5FD", fontSize: 10, fontWeight: "bold" }} 
          />
          <Bar 
            dataKey="turnout" 
            radius={[8, 8, 0, 0]} 
            animationDuration={1000}
            barSize={60}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
