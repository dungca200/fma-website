"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { heroSlide, heroText, fadeUp } from "@/lib/animations";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";

export interface HeroSlide {
  headline: string;
  subheadline: string;
  cta: {
    text: string;
    href: string;
  };
  image?: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
  className?: string;
}

export function HeroCarousel({
  slides,
  autoPlayInterval = 5000,
  className,
}: HeroCarouselProps) {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      const newIndex =
        (currentIndex + newDirection + slides.length) % slides.length;
      setCurrentIndex([newIndex, newDirection]);
    },
    [currentIndex, slides.length]
  );

  const goToSlide = (index: number) => {
    const direction = index > currentIndex ? 1 : -1;
    setCurrentIndex([index, direction]);
  };

  // Auto-advance
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const timer = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, paginate, autoPlayInterval, slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <section
      className={cn(
        "relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <Container className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-white">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={heroSlide}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                {/* Step indicator */}
                <motion.div
                  variants={heroText}
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-2 text-sky-200"
                >
                  <span className="font-display text-sm tracking-wider uppercase">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-8 bg-sky-200/50" />
                  <span className="font-display text-sm tracking-wider uppercase">
                    {String(slides.length).padStart(2, "0")}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  variants={heroText}
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  className="text-display-xl font-display"
                >
                  {currentSlide.headline}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  variants={heroText}
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  className="text-body-xl text-sky-100/80 max-w-lg"
                >
                  {currentSlide.subheadline}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  variants={heroText}
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  className="pt-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-sky-50 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    <Link href={currentSlide.cta.href}>
                      {currentSlide.cta.text}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Visual element - placeholder for image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-72 w-72 rounded-full border-2 border-white/10 animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-56 w-56 rounded-full border border-white/20" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-40 w-40 rounded-full bg-gradient-to-br from-sky-400/30 to-sky-600/30 backdrop-blur-sm" />
              </div>
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-7xl font-display font-bold">20+</div>
                  <div className="text-sm uppercase tracking-widest text-sky-200">
                    Years
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between mt-12">
          {/* Slide indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "w-4 bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow controls */}
          <div className="flex gap-2">
            <button
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-8 w-px bg-white/30"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroCarousel;
