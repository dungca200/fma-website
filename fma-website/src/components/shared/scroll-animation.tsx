"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, fadeDown, fadeLeft, fadeRight, fadeIn, scaleIn } from "@/lib/animations";

type AnimationDirection = "up" | "down" | "left" | "right" | "fade" | "scale";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: AnimationDirection;
  duration?: number;
  once?: boolean;
  amount?: number;
  as?: keyof JSX.IntrinsicElements;
}

const directionVariants: Record<AnimationDirection, Variants> = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  fade: fadeIn,
  scale: scaleIn,
};

export function ScrollAnimation({
  children,
  className,
  delay = 0,
  direction = "up",
  duration,
  once = true,
  amount = 0.15,
  as = "div",
}: ScrollAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  // Get base variants for direction
  const baseVariants = directionVariants[direction];

  // Create variants with custom delay and duration
  const variants: Variants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVariants.visible,
      transition: {
        ...(typeof baseVariants.visible === "object" &&
        "transition" in baseVariants.visible
          ? baseVariants.visible.transition
          : {}),
        delay,
        ...(duration && { duration }),
      },
    },
  };

  // If user prefers reduced motion, skip animations
  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={className}>{children}</Component>;
  }

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "-50px" }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

// Stagger container for animating children in sequence
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
  once?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  childDelay = 0.2,
  once = true,
  as = "div",
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay,
      },
    },
  };

  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={className}>{children}</Component>;
  }

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

// Stagger item to be used inside StaggerContainer
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  if (shouldReduceMotion) {
    const Component = as;
    return <Component className={className}>{children}</Component>;
  }

  return (
    <MotionComponent variants={itemVariants} className={className}>
      {children}
    </MotionComponent>
  );
}

// Animated counter for stats
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  className,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <span className={className}>
        {prefix}
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {value}
      </motion.span>
      {suffix}
    </motion.span>
  );
}

// Reveal text animation (character by character or word by word)
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  mode?: "word" | "character";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  mode = "word",
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const items = mode === "word" ? text.split(" ") : text.split("");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn("inline-flex flex-wrap", className)}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: delay + i * 0.05,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="inline-block"
        >
          {item}
          {mode === "word" && i < items.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default ScrollAnimation;
