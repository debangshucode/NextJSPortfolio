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
    // Ensure animation starts quickly after background load
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 100); // Reduced delay to 100ms for faster response

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("font-bold", className)}>
      <motion.div
        className="dark:text-white text-black leading-snug tracking-wide"
        initial="hidden"
        animate={startAnimation ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.05 } }, // Faster stagger
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
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Reduced duration
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
