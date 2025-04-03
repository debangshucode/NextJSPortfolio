"use client";

import { ComponentPropsWithoutRef, FC, useState } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string | string[];
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const lines = Array.isArray(children) ? children : children.split("\n");

  // State to track which line is hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("relative z-0", className)}>
      <div className="sticky top-0 mx-auto flex flex-col items-center bg-transparent px-[1rem] py-[5rem] space-y-4">
        {lines.map((line, i) => (
          <Line
            key={i}
            isHovered={hoveredIndex === i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {line}
          </Line>
        ))}
      </div>
    </div>
  );
};

interface LineProps {
  children: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Line: FC<LineProps> = ({
  children,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "text-center text-6xl font-bold text-black dark:text-white transition-opacity duration-300",
        isHovered ? "opacity-30" : "opacity-100"
      )}
    >
      {children}
    </div>
  );
};
