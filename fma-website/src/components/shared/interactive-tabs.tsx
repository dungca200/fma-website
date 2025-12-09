"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { tabPanel, panelImage, staggerTabs, tabItem } from "@/lib/animations";
import Image from "next/image";

export interface Tab {
  id: string;
  label: string;
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  features?: string[];
}

interface InteractiveTabsProps {
  tabs: Tab[];
  className?: string;
}

export function InteractiveTabs({ tabs, className }: InteractiveTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Navigation */}
      <motion.div
        className="relative flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12"
        variants={staggerTabs}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            variants={tabItem}
            onClick={() => setActiveTab(index)}
            className={cn(
              "relative px-5 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition-all duration-300",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              activeTab === index
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-blue-50 dark:bg-blue-900/20 text-foreground hover:bg-blue-100 dark:hover:bg-blue-900/30"
            )}
          >
            <span className="relative z-10 flex items-center gap-2">
              {tab.icon && <span className="w-5 h-5">{tab.icon}</span>}
              {tab.label}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Tab Content */}
      <div className="relative min-h-[400px] md:min-h-[450px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Image Side */}
            <motion.div
              variants={panelImage}
              initial="hidden"
              animate="visible"
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 order-2 lg:order-1"
            >
              {tabs[activeTab].image ? (
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    {tabs[activeTab].icon || (
                      <span className="text-4xl text-primary font-display font-bold">
                        {activeTab + 1}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-300/20 rounded-full blur-xl" />
            </motion.div>

            {/* Content Side */}
            <div className="space-y-6 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                  {tabs[activeTab].label}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {tabs[activeTab].description}
                </p>
              </motion.div>

              {/* Features List */}
              {tabs[activeTab].features && tabs[activeTab].features.length > 0 && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="space-y-3"
                >
                  {tabs[activeTab].features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-foreground/80">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots (Mobile) */}
      <div className="flex justify-center gap-2 mt-8 lg:hidden">
        {tabs.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              activeTab === index
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to tab ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
