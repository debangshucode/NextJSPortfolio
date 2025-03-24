import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

type SpotlightProps = {
  className?: string;
  fill?: string;
  animationStarted: boolean;
};

export const Spotlight = ({
  className,
  fill,
  animationStarted,
}: SpotlightProps) => {
  return (
    <motion.svg
      className={cn(
        "spotlight pointer-events-none absolute z-[1] h-[100%] w-[90%] lg:w-[84%] opacity-0",
        className
      )}
      style={{ willChange: "transform, opacity" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={animationStarted ? { opacity: 1, scale: 1.05 } : {}}
      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
    >
      <g>
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
    </motion.svg>
  );
};
