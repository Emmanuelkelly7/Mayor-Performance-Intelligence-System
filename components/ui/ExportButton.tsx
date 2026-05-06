"use client";

import { useState } from "react";
import { Download, FileText, Table as TableIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { exportToPDF } from "@/lib/exportPDF";
import { exportToCSV } from "@/lib/exportCSV";

interface ExportButtonProps {
  variant: "PDF" | "CSV";
  data?: any[];
  filename: string;
  targetId?: string;
  className?: string;
}

export function ExportButton({ variant, data, filename, targetId, className }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      if (variant === "PDF" && targetId) {
        await exportToPDF(targetId, filename);
      } else if (variant === "CSV" && data) {
        exportToCSV(data, filename);
      }
    } catch (error) {
      console.error("Export failed", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all disabled:opacity-50",
        variant === "PDF" 
          ? "border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white"
          : "bg-accent-primary text-white hover:bg-blue-700 shadow-sm hover:shadow-md",
        className
      )}
    >
      {isExporting ? (
        <Loader2 className="animate-spin" size={18} />
      ) : variant === "PDF" ? (
        <FileText size={18} />
      ) : (
        <TableIcon size={18} />
      )}
      <span>{isExporting ? "Exporting..." : `Export ${variant}`}</span>
    </button>
  );
}
