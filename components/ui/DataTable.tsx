"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DataTableProps {
  headers: string[];
  children: ReactNode;
  className?: string;
}

export function DataTable({ headers, children, className }: DataTableProps) {
  return (
    <div className={cn("card overflow-hidden", className)}>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-sidebar-bg text-white">
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="px-6 py-4 text-xs font-bold uppercase tracking-wider border-b border-sidebar-active/20"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function DataTableRow({ children, className, highlighted }: { children: ReactNode; className?: string; highlighted?: boolean }) {
  return (
    <tr className={cn(
      "transition-colors",
      highlighted ? "bg-accent-light/30" : "hover:bg-bg-primary/50",
      className
    )}>
      {children}
    </tr>
  );
}

export function DataTableCell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <td className={cn("px-6 py-4 text-sm text-text-secondary", className)}>
      {children}
    </td>
  );
}
