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
  const wordsArray = words.split(" "); // Split words into an array

  useEffect(() => {
    // Simulate background load and start text animation after 0.2s
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 200); // 0.2s delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <motion.div className="dark:text-white text-black leading-snug tracking-wide">
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className={`inline-block ${
                idx > 3 ? "text-red-700" : "dark:text-white text-black"
              }`}
              initial={{ opacity: 0, y: 10 }} // Start hidden
              animate={startAnimation ? { opacity: 1, y: 0 } : {}} // Only animate if allowed
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }} // Extra 0.2s delay
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
