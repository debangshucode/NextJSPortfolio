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
  const wordsArray = useMemo(() => words.split(" "), [words]);

  useEffect(() => {
    if (!animationStarted || !scope?.current) return;

    animate(scope.current.children, {
      opacity: 1,
      y: 0,
    });
  }, [animate, animationStarted, wordsArray, scope]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="relative min-h-[3em]">
        {/* Parent div now handles staggerChildren */}
        <motion.div
          ref={scope}
          className="dark:text-white text-black leading-snug tracking-wide"
          initial="hidden"
          animate={animationStarted ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.05 } }, // ✅ Stagger applied here
          }}
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className={`inline-block opacity-0 ${
                idx > 3 ? "text-red-700" : "dark:text-white text-black"
              }`}
              variants={{
                hidden: { opacity: 0, y: 10 },
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
