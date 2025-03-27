"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = useMemo(() => words.split(" "), [words]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="relative min-h-[3em]">
        <motion.div
          className="dark:text-white text-black leading-snug tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className={`inline-block ${
                idx > 3 ? "text-red-700" : "dark:text-white text-black"
              }`}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
