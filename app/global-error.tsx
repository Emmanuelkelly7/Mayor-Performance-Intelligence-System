"use client";

import { AlertCircle, RefreshCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#09090F] text-[#E4E1EA] font-sans">
        <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-red-900/20 text-red-500 flex items-center justify-center">
            <AlertCircle size={32} />
          </div>
          <div className="space-y-2 max-w-md">
            <h2 className="text-3xl font-black">Critical System Error</h2>
            <p className="text-slate-400">
              A fatal error occurred in the root layout. The campaign command center needs to be reinitialized.
            </p>
          </div>
          <button
            onClick={() => reset()}
            className="bg-[#C9A84C] text-black font-bold px-8 py-3 rounded-xl flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <RefreshCcw size={18} />
            <span>Reinitialize Dashboard</span>
          </button>
        </div>
      </body>
    </html>
  );
}
