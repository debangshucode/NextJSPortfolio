import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { BoxReveal } from "./ui/BoxReveal";

function HeroP() {
  return (
    <div className=" bg-black text-white p-8">
      {/* Navigation */}

      {/* Main Content */}
      <div className="max-w-3xl mt-32">
        <BoxReveal boxColor="#ef4444" duration={0.5}>
          <h1 className="text-7xl font-bold mb-8">
            SystemR<span className="text-red-500">.</span>
          </h1>
        </BoxReveal>

        <BoxReveal boxColor="#ef4444" duration={0.5}>
          <h2 className="text-5xl text-red-500 font-bold mb-8">
            Innovate Faster
          </h2>
        </BoxReveal>

        <div className="space-y-4 text-gray-400 text-xl">
          <BoxReveal boxColor="#ef4444" duration={0.5}>
            <p>
              With 3+ years of expertise in React and Next.js, we create fast,
              scalable, and user-friendly websites.
            </p>
          </BoxReveal>

          <BoxReveal boxColor="#ef4444" duration={0.5}>
            <p>
              We embrace innovation, constantly refining our skills to deliver
              cutting-edge solutions.
            </p>
          </BoxReveal>

          <BoxReveal boxColor="#ef4444" duration={0.5}>
            <p>Let’s bring your vision to life.</p>
          </BoxReveal>
        </div>

        <BoxReveal boxColor="#ef4444" duration={0.5}>
          <button className="mt-12 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg transition-colors">
            Contact
          </button>
        </BoxReveal>
      </div>

      {/* Background Pattern */}
      {/* <div className="fixed top-[100px] right-0 w-1/2 h-[75%] pointer-events-none">
        <div className="w-full h-full grid grid-cols-12 gap-4 opacity-20">
          {Array.from({ length: 180 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-700 rounded-full"></div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default HeroP;
