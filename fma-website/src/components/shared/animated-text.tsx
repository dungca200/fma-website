"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

export function AnimatedText({
  words,
  className,
  interval = 3000,
}: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className={cn(
        "inline-block transition-all duration-300",
        isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
        className
      )}
    >
      {words[currentIndex]}
    </span>
  );
}
