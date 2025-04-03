"use client";
import { useState, useEffect } from "react";
import HeroP from "@/components/heroP";
import AboutP from "@/components/aboutP";
import ProjectP from "@/components/projectP";
import Loader from "@/components/ui/Loader";
import { TextRevealDemo } from "@/components/textp";
import FooterP from "@/components/footerp";

const Portfolio = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto ">
      <div className="w-full">
        {/* Hero and About side by side */}
        <HeroP />
        {/* <div className="flex flex-col sm:flex-row justify-between w-full"> */}
        {/* <div className="w-full ">
          </div> */}
        {/* <div className="w-full sm:w-1/2">
            <AboutP />
          </div>
        </div>

        {/* Projects Section */}
        <ProjectP />
        <FooterP />
      </div>
    </main>
  );
};

export default Portfolio;
