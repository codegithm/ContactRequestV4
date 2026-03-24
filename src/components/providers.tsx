"use client";

import { Suspense, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { LoadingProvider } from "@/components/loading-context";
import { NavigationLoader } from "@/components/navigation-loader";
import { ProgressBar } from "@/components/progress-bar";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <TooltipProvider>
          <Suspense fallback={null}>
            <NavigationLoader />
          </Suspense>
          <ProgressBar />
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </LoadingProvider>
    </QueryClientProvider>
  );
}
