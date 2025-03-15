"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const wordsArray = words.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 100); // Reduced delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("font-bold leading-relaxed", className)}>
      {/* Prevent shrinking effect */}
      <div className="relative min-h-[4em] whitespace-pre-wrap">
        <motion.div
          className="dark:text-white text-black leading-snug tracking-wide"
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
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
              } opacity-0`}
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3 },
                },
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
