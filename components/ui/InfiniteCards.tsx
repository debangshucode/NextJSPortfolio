"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

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
        speed === "fast" ? "40s" : speed === "normal" ? "60s" : "100s";
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
            className="w-[70vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-4 md:p-6 md:w-[40vw] bg-gradient-to-r from-[#1D0404] to-[#230C0D] flex flex-col items-center text-center"
          >
            {/* Profile Image at the Top Center */}
            <div className="w-10 h-10 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-red-500 shadow-lg mb-4">
              <Image
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
                width={80}
                height={80}
              />
            </div>

            {/* Client Name */}
            <h3 className="text-lg md:text-xl tracking-wide font-semibold text-red-700 mb-2">
              {item.title}
            </h3>

            {/* Quote (Testimonial Text) */}
            <blockquote className="text-white-200 text-base md:text-lg italic leading-[1.6]">
              &ldquo;{item.des}&rdquo;
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
