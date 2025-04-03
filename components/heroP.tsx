import React from "react";
import Link from "next/link";
import Button from "./ui/contactbtn";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
function HeroP() {
  return (
    <div className="bg-gradient-to-b from-[#551515] via-black to-black text-white p-8 min-h-screen flex flex-col items-center justify-center  rounded-b-lg">
      {/* Main Content */}
      <div className="text-center">
        <h2 className=" text-xl font-bold tracking-wider">
          welcome <span className="text-red-500">to</span> our{" "}
        </h2>
        <h1 className="text-8xl font-extrabold mb-6 tracking-wide">
          PORT<span className="text-gray-300">FOLIO</span>
        </h1>
        {/* Signature Style */}
        <div className="text-red-500 italic text-xl font-bold mt-4">
          SystemR
        </div>
        <a href="#contact">
          <MagicButton
            title="Get in Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
}

export default HeroP;
