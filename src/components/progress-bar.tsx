"use client";

import { useEffect, useState } from "react";
import { useLoading } from "@/components/loading-context";

export function ProgressBar() {
  const { isNavigating, isApiLoading } = useLoading();
  const [hidden, setHidden] = useState(true);
  const [progress, setProgress] = useState(0);

  const isLoading = isNavigating || isApiLoading;

  useEffect(() => {
    if (isLoading) {
      setHidden(false);
      setProgress(0);

      // Smooth progress increment
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return 90;
          return prev + Math.random() * 30;
        });
      }, 200);

      return () => clearInterval(interval);
    } else {
      // Complete the progress bar
      setProgress(100);
      const timeout = setTimeout(() => {
        setHidden(true);
        setProgress(0);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 transition-opacity duration-300"
      style={{
        width: `${progress}%`,
        opacity: hidden ? 0 : 1,
      }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
