"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { counterData } from "@/data";
import { motion } from "framer-motion";
import { Meteors } from "./ui/meteors";
const CounterCard = dynamic(() => import("./ui/CounterCard"), { ssr: false });

const Hero = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100); // Ensures synchronized animation start

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pb-10 pt-36 relative">
      {/* Spotlight Effects */}
      <Meteors number={30} className="absolute inset-0" />

      {/* Main Content */}
      <div className="flex justify-center relative z-10">
        <div className="md:max-w-2xl flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-red-100 max-w-80">
            Dynamic Web Magic with SystemR
          </p>

          {/* Text Animation */}

          <TextGenerateEffect
            words="Transforming Ideas Into Seamless Digital Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            // animationStarted={animationStarted}
          />
          

          <h1 className="text-center mb-5 text-[40px] md:text-5xl lg:text-6xl font-bold">
            Transforming Ideas Into{" "}
            <span className="text-red-700">Digital Experiences</span>
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

          {/* Counter Data (For Large Screens) */}
          <div className="hidden xl:flex absolute top-1/2 right-[-130px] transform -translate-y-1/2 flex-col gap-4">
            {counterData.map((item, index) => (
              <div
                key={item.id}
                className={`relative ${
                  index === 1 ? "ml-8" : index === 2 ? "ml-16" : ""
                }`}
              >
                <CounterCard count={item.count} label={item.label} />
              </div>
            ))}
          </div>

          {/* Counter Data (For Mobile) */}
          <div className="flex w-full justify-center items-center flex-row text-center mt-10 xl:hidden">
            <div className="grid w-full grid-cols-3 gap-4">
              {counterData.map((item) => (
                <div key={item.id} className="relative">
                  <CounterCard count={item.count} label={item.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
