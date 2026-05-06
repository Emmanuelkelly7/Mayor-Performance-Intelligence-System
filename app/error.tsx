"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-destructive/10 text-destructive flex items-center justify-center">
        <AlertCircle size={32} />
      </div>
      <div className="space-y-2 max-w-md">
        <h2 className="text-2xl font-black text-foreground">Something went wrong</h2>
        <p className="text-muted-foreground">
          An error occurred while rendering this page. The institutional dashboard is recovering.
        </p>
      </div>
      <button
        onClick={() => reset()}
        className="btn-primary"
      >
        <RefreshCcw size={18} />
        <span>Try Again</span>
      </button>
    </div>
  );
}
