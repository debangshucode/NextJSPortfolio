"use client";
import { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" "); // Split words into an array

  useEffect(() => {
    if (!scope.current) return; // Ensure scope exists

    animate(
      "span", // Select all spans inside scope
      { opacity: 1, y: 0 }, // Animate to visible
      { duration: 0.6, delay: stagger(0.1) } // Apply staggered effect
    );
  }, [animate]); // Only run once when the component mounts

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <motion.div
          ref={scope}
          className="dark:text-white text-black leading-snug tracking-wide"
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className={`inline-block ${
                idx > 3 ? "text-red-700" : "dark:text-white text-black"
              }`}
              initial={{ opacity: 0, y: 10 }} // Start hidden and slightly down
              animate={{ opacity: 1, y: 0 }} // Fade in and move up
              transition={{ delay: idx * 0.1, duration: 0.5 }} // Staggered delay
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
