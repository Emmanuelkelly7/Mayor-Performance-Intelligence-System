"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

import { cn } from "@/lib/utils";

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const isLoginPage = pathname === "/login";

  if (!isMounted) return null;

  return (
    <div className="flex min-h-screen">
      {!isLoginPage && <Sidebar />}
      <div className={cn(
        "flex-1 transition-all duration-300",
        !isLoginPage ? "md:ml-16" : ""
      )}>
        {!isLoginPage && <Header />}
        <main id={!isLoginPage ? "dashboard-content" : undefined}>
          {children}
        </main>
      </div>
    </div>
  );
}
