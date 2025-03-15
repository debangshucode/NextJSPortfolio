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
      {/* Reserve space to prevent shrinking */}
      <div className="relative min-h-[4em] whitespace-pre-wrap">
        <motion.div
          className="dark:text-white text-black leading-snug tracking-wide"
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, visibility: "hidden" }, // Prevent height collapse
            visible: {
              opacity: 1,
              visibility: "visible",
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className={`inline-block ${
                idx > 3 ? "text-red-700" : "dark:text-white text-black"
              }`}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 5,
                  position: "absolute", // Prevents layout shift
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  position: "relative", // Stabilizes final layout
                  transition: { duration: 0.3 },
                },
              }}
              style={{ willChange: "opacity, transform" }} // GPU optimization
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
