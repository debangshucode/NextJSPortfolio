"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  animationStarted,
  className,
}: {
  words: string;
  animationStarted: boolean;
  className?: string;
}) => {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("font-bold", className)}>
      <div className="relative min-h-[3em]">
        <motion.div
          className="dark:text-white text-black leading-snug tracking-wide"
          initial="hidden"
          animate={animationStarted ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
          }}
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className={`inline-block ${
                idx > 3 ? "text-red-700" : "dark:text-white text-black"
              }`}
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
