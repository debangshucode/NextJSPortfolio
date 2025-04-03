"use client";
import { useState, useEffect, useRef } from "react";
import HeroP from "@/components/heroP";
import AboutP from "@/components/aboutP";
import ProjectP from "@/components/projectP";
import FooterP from "@/components/footerp";
import CurveGlow from "@/components/CurveGlow";
import { TextRevealDemo } from "@/components/textp";

const Portfolio = () => {
  const [showGlow, setShowGlow] = useState(true);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!projectRef.current) return;

      const projectTop = projectRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // If ProjectP is in view, hide the glow
      if (projectTop <= windowHeight * 0.5) {
        setShowGlow(false);
      } else {
        setShowGlow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto">
      {/* Curve Glow */}
      <CurveGlow isVisible={showGlow} />

      <div className="w-full">
        {/* Hero and About side by side */}
        <HeroP />
        <AboutP />
        <TextRevealDemo />

        {/* ProjectP Component */}
        <div ref={projectRef}>
          <ProjectP />
        </div>

        <FooterP />
      </div>
    </main>
  );
};

export default Portfolio;
