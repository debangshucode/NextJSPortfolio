"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useAnimate } from "framer-motion";
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
  const [scope, animate] = useAnimate();
  const wordsArray = useMemo(() => words.split(" "), [words]); // Memoized words array

  useEffect(() => {
    if (!animationStarted || !scope.current) return;

    animate("span", { opacity: 1, y: 0 }, { duration: 0.3, stagger: 0.05 });
  }, [animate, animationStarted, wordsArray, scope]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="relative min-h-[3em]">
        <motion.div ref={scope} className="dark:text-white text-black leading-snug tracking-wide">
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className={`inline-block opacity-0 ${
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
