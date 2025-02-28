import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

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
    const newWave: Wave = {
      id: Date.now(),
      x,
      y,
      scale: 0,
      opacity: 0.5,
    };
    setWaves((waves) => [...waves, newWave]);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
    createWave(clientX, clientY);
  };

  return (
    <div className="pb-20 pt-36 relative " onMouseMove={handleMouseMove}>
      {/* Background Grid with Cursor Effect */}
      {waves.map((wave) => (
        <motion.div
          key={wave.id}
          className="fixed border-1.5 border-white/20 rounded-full pointer-events-none"
          style={{
            width: "100px",
            height: "100px",
            left: "0",
            top: "0",
            // transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
          }}
          initial={{
            x: wave.x,
            y: wave.y,
            scale: 0,
            opacity: 0.5,
          }}
          animate={{
            scale: [0, 4],
            opacity: [0.5, 0],
            x: wave.x,
            y: wave.y,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="red" />
        </div>
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-red-100 max-w-80">
            Dynamic Web Magic with SystemR
          </p>

          <TextGenerateEffect
            words="Transforming Ideas Into Seamless Digital Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            SystemR – Delivering cutting-edge IT solutions with Next.js and
            modern web technologies.
          </p>

          <a href="#about">
            <MagicButton
              title="Get in Touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
