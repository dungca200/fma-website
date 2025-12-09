"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHover, fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

interface NumberedCardProps {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function NumberedCard({
  number,
  title,
  description,
  icon,
  className,
}: NumberedCardProps) {
  return (
    <motion.div
      variants={cardHover}
      initial="initial"
      whileHover="hover"
      className={cn(
        "group relative bg-card rounded-card-lg p-8 shadow-card cursor-pointer overflow-hidden",
        className
      )}
    >
      {/* Large background number */}
      <div className="absolute -top-4 -left-2 font-display text-8xl font-bold leading-none text-gradient opacity-10 select-none transition-opacity group-hover:opacity-20">
        {String(number).padStart(2, "0")}
      </div>

      {/* Hover accent border */}
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        {icon && (
          <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            {icon}
          </div>
        )}

        {/* Small number label */}
        <div className="text-sm font-medium text-primary mb-2">
          {String(number).padStart(2, "0")}
        </div>

        {/* Title */}
        <h3 className="text-display-sm font-display mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-card-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      </div>
    </motion.div>
  );
}

interface NumberedCardGridProps {
  children: React.ReactNode;
  className?: string;
}

export function NumberedCardGrid({ children, className }: NumberedCardGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

// Animated wrapper for individual cards in a grid
export function NumberedCardItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

export default NumberedCard;
