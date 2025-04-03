import React from "react";

const CurveGlow = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-10 w-full h-[300px] flex items-end justify-center pointer-events-none 
                  transition-opacity duration-700 ease-in-out ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
    >
      <svg
        viewBox="0 0 1440 400"
        className="w-full"
        style={{ filter: "blur(50px)" }} // Stronger glow
      >
        {/* Gradient Background to Blend Smoothly */}
        <defs>
          <linearGradient id="fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" stopOpacity="0" />
            <stop
              offset="40%"
              stopColor="rgba(246, 59, 59, 0.6)"
              stopOpacity="0.6"
            />
            <stop offset="100%" stopColor="rgba(0,0,0,1)" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Reverse Curve with Gradient */}
        <path fill="url(#fade)" d="M0,100 Q720,400 1440,100 L1440,0 L0,0 Z" />
      </svg>
    </div>
  );
};

export default CurveGlow;
