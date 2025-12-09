// Framer Motion Animation Variants & Utilities
// Based on The Online School design patterns

import { Variants, Transition } from "framer-motion";

// Easing curves
export const easing = {
  easeOut: [0.16, 1, 0.3, 1] as const,
  easeInOut: [0.65, 0, 0.35, 1] as const,
  gentle: [0.4, 0, 0.2, 1] as const,
};

// Duration constants (in seconds)
export const duration = {
  micro: 0.15,
  hover: 0.25,
  transition: 0.4,
  reveal: 0.6,
  page: 0.4,
  carousel: 0.5,
};

// Spring configurations
export const spring = {
  default: { type: "spring", damping: 25, stiffness: 300 },
  gentle: { type: "spring", damping: 30, stiffness: 200 },
  bouncy: { type: "spring", damping: 15, stiffness: 400 },
} as const;

// ===== FADE VARIANTS =====

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.transition, ease: easing.easeOut },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: easing.easeOut },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.reveal, ease: easing.easeOut },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.reveal, ease: easing.easeOut },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.reveal, ease: easing.easeOut },
  },
};

// ===== SCALE VARIANTS =====

export const scaleIn: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: duration.transition, ease: easing.easeOut },
  },
};

export const scaleUp: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: duration.hover, ease: easing.easeOut },
  },
};

// ===== SLIDE VARIANTS (Carousel) =====

export const slideLeft: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: duration.carousel, ease: easing.easeInOut },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { duration: duration.carousel, ease: easing.easeInOut },
  },
};

export const slideRight: Variants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: duration.carousel, ease: easing.easeInOut },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: duration.carousel, ease: easing.easeInOut },
  },
};

// ===== STAGGER VARIANTS =====

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.transition, ease: easing.easeOut },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// ===== TEXT REVEAL VARIANTS =====

export const textReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0 0 0 0)",
    transition: { duration: 0.8, ease: easing.easeOut },
  },
};

export const letterReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing.easeOut },
  },
};

// ===== PAGE TRANSITION VARIANTS =====

export const pageTransition: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.page, ease: easing.easeOut },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: duration.page * 0.75, ease: easing.easeInOut },
  },
};

// ===== OVERLAY VARIANTS =====

export const overlayFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const mobileMenuExpand: Variants = {
  hidden: {
    clipPath: "circle(0% at calc(100% - 40px) 32px)",
    opacity: 0,
  },
  visible: {
    clipPath: "circle(150% at calc(100% - 40px) 32px)",
    opacity: 1,
    transition: { duration: 0.5, ease: easing.easeOut },
  },
  exit: {
    clipPath: "circle(0% at calc(100% - 40px) 32px)",
    opacity: 0,
    transition: { duration: 0.3, ease: easing.easeInOut },
  },
};

// ===== ACCORDION VARIANTS =====

export const accordionContent: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: easing.easeOut },
      opacity: { duration: 0.2, delay: 0.1 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: easing.easeInOut },
      opacity: { duration: 0.1 },
    },
  },
};

export const accordionIcon: Variants = {
  closed: { rotate: 0 },
  open: { rotate: 180, transition: { duration: 0.3, ease: easing.easeOut } },
};

// ===== CARD HOVER VARIANTS =====

export const cardHover: Variants = {
  initial: {
    y: 0,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  },
  hover: {
    y: -6,
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
    transition: { duration: duration.hover, ease: easing.easeOut },
  },
};

export const cardGlow: Variants = {
  initial: { boxShadow: "0 0 0 rgba(14, 165, 233, 0)" },
  hover: {
    boxShadow: "0 0 40px rgba(14, 165, 233, 0.15)",
    transition: { duration: 0.3 },
  },
};

// ===== IMAGE VARIANTS =====

export const imageReveal: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: easing.easeOut },
  },
};

export const imageHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.4, ease: easing.easeOut },
  },
};

// ===== LINE DRAW VARIANT (for SVG) =====

export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1, ease: easing.easeOut },
  },
};

// ===== UTILITY FUNCTIONS =====

/**
 * Create a stagger container with custom timing
 */
export const createStaggerContainer = (
  staggerDelay = 0.1,
  childDelay = 0.2
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childDelay,
    },
  },
});

/**
 * Create a fade variant with custom direction and distance
 */
export const createFadeVariant = (
  direction: "up" | "down" | "left" | "right" = "up",
  distance = 30
): Variants => {
  const isVertical = direction === "up" || direction === "down";
  const value =
    direction === "up" || direction === "left" ? distance : -distance;

  if (isVertical) {
    return {
      hidden: { opacity: 0, y: value },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: duration.reveal, ease: easing.easeOut as [number, number, number, number] },
      },
    };
  }
  return {
    hidden: { opacity: 0, x: value },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: duration.reveal, ease: easing.easeOut as [number, number, number, number] },
    },
  };
};

/**
 * Create delayed transition
 */
export const withDelay = (delay: number): Transition => ({
  delay,
  duration: duration.reveal,
  ease: easing.easeOut as [number, number, number, number],
});

/**
 * Viewport settings for scroll animations
 */
export const viewportConfig = {
  once: true,
  margin: "-50px",
  amount: 0.15,
};

// ===== HERO CAROUSEL SPECIFIC =====

export const heroSlide: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: duration.carousel, ease: easing.easeInOut },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: { duration: duration.carousel, ease: easing.easeInOut },
  }),
};

export const heroText: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: easing.easeOut,
    },
  }),
};

// ===== TESTIMONIAL CAROUSEL =====

export const quoteIcon: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: easing.easeOut },
  },
};

// ===== TEAM GRID =====

export const teamCardImage: Variants = {
  initial: { filter: "grayscale(100%)" },
  hover: {
    filter: "grayscale(0%)",
    transition: { duration: 0.4 },
  },
};

export const teamOverlay: Variants = {
  initial: { y: "100%", opacity: 0 },
  hover: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: easing.easeOut },
  },
};

// ===== BUTTON VARIANTS =====

export const buttonPress: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

export const buttonUnderline: Variants = {
  initial: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    transition: { duration: 0.3, ease: easing.easeOut },
  },
};
