"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <div className="flex flex-col items-start space-y-2">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mx-auto">
        <motion.span
          layout
          className="relative w-fit overflow-hidden rounded-md border border-transparent bg-white px-4 py-2 font-mono text-xl sm:text-2xl font-bold tracking-tight text-purple-700 shadow-sm shadow-black/10 ring-1 ring-black/10 drop-shadow-lg md:text-4xl dark:bg-neutral-900 dark:text-white dark:shadow-sm dark:ring-white/10"
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={currentIndex}
              initial={{ y: -40, filter: "blur(10px)", opacity: 0 }}
              animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={cn("inline-block whitespace-nowrap")}
            >
              {words[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.span>

        <motion.span
          layoutId="subtext"
          className="text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl bg-gradient-to-r from-emerald-500 to-purple-500 bg-clip-text text-transparent hover:from-emerald-600 hover:to-purple-700"
        >
          {text}
        </motion.span>
      </div>

      {/* Subtext */}
      <p className="text-white/80 font-mono text-sm md:text-base mx-auto ">
        // Join the waitlist to get early access to{" "}
        <span className="text-emerald-500 font-bold">enops.dev</span>
      </p>
    </div>
  );
};
