"use client";

import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export function FlipCard({ front, back, className }: FlipCardProps) {
  return (
    <div className={cn("group perspective-1000", className)}>
      <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-card rounded-card-lg shadow-card p-6">
          {front}
        </div>
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary text-primary-foreground rounded-card-lg shadow-card p-6">
          {back}
        </div>
      </div>
    </div>
  );
}
