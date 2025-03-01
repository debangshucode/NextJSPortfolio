"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { logos } from "@/data";

const LogoDrop: React.FC = () => {
  const controls = useAnimation();
  const [shake, setShake] = useState(false);
  const [logoPositions, setLogoPositions] = useState<number[]>([]);

  // Generate non-overlapping positions
  useEffect(() => {
    const positions: number[] = [];
    const gap = 8; // Minimum spacing in percentage
    for (let i = 0; i < logos.length; i++) {
      let pos: number;
      do {
        pos = Math.random() * (90 - gap) + gap; // Ensures spacing
      } while (positions.some((p) => Math.abs(p - pos) < gap));
      positions.push(pos);
    }
    setLogoPositions(positions);
  }, []);

  // Detect phone shake
  useEffect(() => {
    const handleShake = (event: DeviceMotionEvent) => {
      if (event.acceleration && Math.abs(event.acceleration.x || 0) > 10) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
      }
    };

    if (window.DeviceMotionEvent) {
      window.addEventListener("devicemotion", handleShake);
    }
    return () => window.removeEventListener("devicemotion", handleShake);
  }, []);

  return (
    <div className="relative flex flex-wrap justify-center items-end w-full h-64 mt-10 bg-gradient-to-r from-[#210B13] to-[#3B1725] backdrop-blur-lg overflow-hidden">
      {logos.map((logo, index) => (
        <motion.img
          key={index}
          src={logo.src}
          alt={`logo-${index}`}
          className="w-20 h-auto absolute"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: index * 0.2,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          style={{
            left: `${logoPositions[index]}%`,
            bottom: 0,
            transform: shake
              ? `translate(${Math.random() * 50 - 25}px, ${
                  Math.random() * 50 - 25
                }px) rotate(${Math.random() * 10 - 5}deg)`
              : "none",
          }}
        />
      ))}
    </div>
  );
};

export default LogoDrop;
