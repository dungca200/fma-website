"use client";

import { cn } from "@/lib/utils";

interface FloatingShapesProps {
  className?: string;
  variant?: "hero" | "section";
}

export function FloatingShapes({ className, variant = "hero" }: FloatingShapesProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)}>
      {variant === "hero" ? (
        <>
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-48 h-48 bg-blue-300/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          <svg
            className="absolute top-32 right-1/4 w-12 h-12 text-primary/20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
          <svg
            className="absolute bottom-40 right-10 w-8 h-8 text-blue-400/30"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <rect x="4" y="4" width="16" height="16" rx="4" transform="rotate(15 12 12)" />
          </svg>
        </>
      ) : (
        <>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-300/5 rounded-full blur-2xl" />
        </>
      )}
    </div>
  );
}
