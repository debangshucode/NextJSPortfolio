"use client";
import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { counterData } from "@/data";

const CounterCard = dynamic(() => import("./ui/CounterCard"), { ssr: false });

const Hero = () => {
  return (
    <div className="pb-10 pt-36 relative">
      {/* Main Content */}
      <div className="flex justify-center relative z-10">
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
        <div className="md:max-w-2xl flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-red-100 max-w-80">
            Dynamic Web Magic with SystemR
          </p>
          <TextGenerateEffect
            words="Transforming Ideas Into Seamless Digital Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
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
