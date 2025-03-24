import React from "react";
import {
  Globe2,
  CreditCard,
  Wine,
  GraduationCap,
  ShoppingCart,
} from "lucide-react";

function Industries() {
  const industries = [
    {
      title: "Logistics Industry",
      icon: "/cargo.png",
      description:
        "We helped simplify one of the most complex and challenging processes for a leading logistics company in India and the Middle East.",
      bg: "inds.png",
    },
    {
      title: "Fintech Industry",
      icon: "/fintech.png",
      description:
        "We helped prominent banks and high-tech start-ups revolutionize the payment and banking sector in India, Middle-East, and Africa.",
      bg: "inds.png",
    },
    {
      title: "Liquor Industry",
      icon: "/liquor.png",
      description:
        "We digitized the whole sales process and the MIS of leading liquor stores.",
      bg: "inds.png",
    },
    {
      title: "Ed-tech Industry",
      icon: "/graduation-cap.png",
      description:
        "We made learning fun and intriguing by creating engaging learning formats for an Ed-tech app.",
      bg: "inds.png",
    },
    {
      title: "FMCG Industry",
      icon: "/conveyor-belt.png",
      description:
        "We helped one of the largest retail supermarkets launch their social media presence and take their business to greater heights.",
      bg: "inds.png",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-5 px-4" id="industries">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="heading">
            Industries <span className="text-red-700">We Touched With</span>
          </h1>
          <p className="text-gray-400 text-lg text-center md:mt-10 my-5">
            We have worked with a diverse range of industries and helped them
            grow their business with our cutting-edge solutions.
          </p>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl border border-neutral-700 transition-all duration-300 w-full h-[285px] mx-auto 
              bg-gradient-to-r from-transparent via-transparent to-transparent
              hover:bg-gradient-to-r hover:from-red-600 hover:via-violet-600 hover:to-red-600
              hover:shadow-[0_0_30px_rgba(220,38,38,0.3),0_0_30px_rgba(139,92,246,0.3)]
              p-[2px]
              ${index === 0 ? "md:col-span-1 lg:col-span-1" : ""} 
              ${index === 1 ? "md:col-span-1 lg:col-span-2" : ""} 
              ${index > 1 ? "md:col-span-1 lg:col-span-1" : ""}`}
            >
              {/* Inner content container */}
              <div className="relative h-full w-full rounded-2xl transition-all duration-300 overflow-hidden bg-black">
                {/* Background Image with Hover Zoom Effect */}
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-2xl transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${industry.bg})`,
                    borderRadius: "16px",
                  }}
                />

                {/* Dark Overlay with Hover Effect */}
                <div className="absolute inset-0 bg-black/70 transition-opacity duration-500 rounded-2xl group-hover:bg-black/60" />

                {/* Content */}
                <div className="rounded-2xl relative z-10 p-8">
                  <div className="bg-black/50 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-red-500/50 group-hover:shadow-violet-500/50 transition-all duration-300">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white/70 shadow-lg">
                      <img
                        src={industry.icon}
                        alt={industry.title}
                        className="w-12 h-12"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Industries;
