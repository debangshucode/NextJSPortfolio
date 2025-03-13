"use client";

import { FaLocationArrow } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { counterData } from "@/data";

// Dynamically import heavy components (for faster load time)
const MagicButton = dynamic(() => import("./MagicButton"), { ssr: false });
const CounterCard = dynamic(() => import("./ui/CounterCard"), { ssr: false });

interface Wave {
  id: number;
  x: number;
  y: number;
  scale: number;
  opacity: number;
}

const Hero = () => {
  const [waves, setWaves] = useState<Wave[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setWaves((waves) => waves.filter((wave) => wave.opacity > 0));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const createWave = useCallback((x: number, y: number) => {
    setWaves((waves) => [
      ...waves,
      { id: Date.now(), x, y, scale: 0, opacity: 0.5 },
    ]);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      createWave(e.clientX, e.clientY);
    },
    [createWave]
  );

  return (
    <div className="pb-10 pt-36 relative" onMouseMove={handleMouseMove}>
      {/* Mouse Ripple Effect */}
      {waves.map((wave) => (
        <motion.div
          key={wave.id}
          className="fixed border-1.5 border-white/20 rounded-full pointer-events-none"
          style={{
            width: "100px",
            height: "100px",
            left: "0",
            top: "0",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
          }}
          initial={{ x: wave.x, y: wave.y, scale: 0, opacity: 0.5 }}
          animate={{ scale: [0, 4], opacity: [0.5, 0], x: wave.x, y: wave.y }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      ))}

      {/* Main Content */}
      <div className="flex justify-center relative z-10">
        <div className="md:max-w-2xl flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-red-100 max-w-80">
            Dynamic Web Magic with SystemR
          </p>
          {/* Normal Text Instead of Animated Effect */}
          <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold">
            Transforming Ideas Into Seamless Digital Experiences
          </h1>
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            System<span className="text-red-500">R</span> – Delivering
            cutting-edge IT solutions with Next.js and modern web technologies.
          </p>
          <a href="#contact">
            <MagicButton
              title="Get in Touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          {/* Counter Data (Optimized) */}
          <div className="flex w-full justify-center items-center flex-row text-center mt-10">
            <div className="grid w-full grid-cols-3 gap-4">
              {useMemo(
                () =>
                  counterData.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="relative"
                    >
                      <CounterCard count={item.count} label={item.label} />
                    </motion.div>
                  )),
                []
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
