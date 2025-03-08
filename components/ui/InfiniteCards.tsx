"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    des: string;
    img: string;
    iconLists: string[];
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "40s" : speed === "normal" ? "60s" : "100s"; // Slowed down
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-10 md:w-[60vw] bg-gradient-to-r from-[#1D0404] to-[#230C0D]"
          >
            {/* Image Wrapper for Proper Containment */}
            <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden rounded-lg">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <blockquote className="mt-4">
              <h3 className="text-2xl tracking-wider font-bold text-red-700">
                {item.title}
              </h3>
              <p className="text-white-200 text-sm md:text-lg leading-[1.6]">
                {item.des}
              </p>

              {/* Icon List */}
              <div className="flex justify-center items-center flex-wrap gap-3 mt-4">
                {item.iconLists.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt="tech icon"
                    className="w-12 h-12 md:w-14 md:h-14 border-2 border-red-500 p-2 
                 rounded-full bg-black 
                 filter drop-shadow-[0_0_15px_rgba(255,0,0,0.8)] 
                 hover:drop-shadow-[0_0_25px_rgba(255,0,0,1)] 
                 transition-all duration-300"
                  />
                ))}
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
