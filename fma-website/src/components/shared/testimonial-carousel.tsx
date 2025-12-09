"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { slideLeft, slideRight, quoteIcon, viewportConfig } from "@/lib/animations";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
  className?: string;
}

export function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 6000,
  className,
}: TestimonialCarouselProps) {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      const newIndex =
        (currentIndex + newDirection + testimonials.length) %
        testimonials.length;
      setCurrentIndex([newIndex, newDirection]);
    },
    [currentIndex, testimonials.length]
  );

  // Auto-advance
  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, paginate, autoPlayInterval, testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] },
    }),
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main testimonial card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.6 }}
        className="relative bg-card rounded-card-xl p-8 md:p-12 shadow-card"
      >
        {/* Quote icon */}
        <motion.div
          variants={quoteIcon}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="absolute -top-4 left-8 md:left-12"
        >
          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <Quote className="h-6 w-6 text-white" />
          </div>
        </motion.div>

        {/* Content container with fixed height for smooth transitions */}
        <div className="min-h-[200px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              {/* Quote text */}
              <blockquote className="text-body-xl md:text-2xl font-display leading-relaxed mb-8 relative">
                <span className="text-foreground">{currentTestimonial.quote}</span>
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                  {currentTestimonial.avatar ? (
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.author}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-lg font-bold text-primary">
                      {currentTestimonial.author.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Name and role */}
                <div>
                  <div className="font-display font-semibold">
                    {currentTestimonial.author}
                  </div>
                  {currentTestimonial.role && (
                    <div className="text-sm text-muted-foreground">
                      {currentTestimonial.role}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const dir = index > currentIndex ? 1 : -1;
                  setCurrentIndex([index, dir]);
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted hover:bg-muted-foreground/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-display font-bold text-foreground">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span>{String(testimonials.length).padStart(2, "0")}</span>
          </div>

          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => paginate(-1)}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Simpler quote card for grids
interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative bg-card rounded-card-lg p-6 shadow-card hover-lift",
        className
      )}
    >
      {/* Quote mark */}
      <div className="absolute -top-2 left-6 text-5xl font-display text-primary/20 select-none">
        "
      </div>

      {/* Quote */}
      <blockquote className="text-base leading-relaxed mb-6 pt-4">
        {testimonial.quote}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="font-display text-sm font-bold text-primary">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div>
          <div className="font-medium text-sm">{testimonial.author}</div>
          {testimonial.role && (
            <div className="text-xs text-muted-foreground">
              {testimonial.role}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCarousel;
