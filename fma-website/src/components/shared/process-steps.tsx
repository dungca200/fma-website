"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeRight, drawLine, staggerContainer, viewportConfig } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  cta?: {
    text: string;
    href: string;
  };
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ProcessSteps({
  steps,
  title,
  subtitle,
  className,
}: ProcessStepsProps) {
  const staggerDelay = 0.15;

  return (
    <div className={cn("relative", className)}>
      {/* Section header */}
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {title && (
            <h2 className="text-display-lg font-display mb-4">{title}</h2>
          )}
          {subtitle && (
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}

      {/* Steps container */}
      <div className="relative">
        {/* Vertical timeline line - SVG for animation */}
        <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block">
          <motion.svg
            width="2"
            height="100%"
            className="absolute inset-0"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/20"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </motion.svg>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{
                duration: 0.6,
                delay: index * staggerDelay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex gap-8 group"
            >
              {/* Step number circle */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportConfig}
                  transition={{
                    duration: 0.4,
                    delay: index * staggerDelay + 0.2,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="relative"
                >
                  {/* Background circle */}
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary">
                    {step.icon ? (
                      <div className="text-primary group-hover:text-white transition-colors">
                        {step.icon}
                      </div>
                    ) : (
                      <span className="font-display text-xl font-bold text-primary group-hover:text-white transition-colors">
                        {String(step.number).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-grow pt-2">
                {/* Step label */}
                <div className="text-sm font-medium text-primary mb-2">
                  Step {String(step.number).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="text-display-sm font-display mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed max-w-xl mb-4">
                  {step.description}
                </p>

                {/* CTA */}
                {step.cta && (
                  <Button
                    variant="ghost"
                    asChild
                    className="group/btn -ml-4 text-primary hover:text-primary-dark"
                  >
                    <Link href={step.cta.href}>
                      {step.cta.text}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Horizontal variant for smaller lists
interface ProcessStepsHorizontalProps {
  steps: ProcessStep[];
  className?: string;
}

export function ProcessStepsHorizontal({
  steps,
  className,
}: ProcessStepsHorizontalProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Horizontal line */}
      <div className="absolute top-8 left-0 right-0 h-px bg-border hidden md:block" />

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative text-center group"
          >
            {/* Number circle */}
            <div className="relative z-10 inline-flex mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-16 w-16 rounded-full bg-card shadow-card flex items-center justify-center border-4 border-background transition-shadow group-hover:shadow-card-hover"
              >
                {step.icon ? (
                  <div className="text-primary">{step.icon}</div>
                ) : (
                  <span className="font-display text-xl font-bold text-gradient">
                    {String(step.number).padStart(2, "0")}
                  </span>
                )}
              </motion.div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-display font-semibold mb-2">
              {step.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProcessSteps;
