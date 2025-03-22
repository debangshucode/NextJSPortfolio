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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl border border-neutral-800 transition-all duration-300 
                          hover:shadow-[0_0_30px_1px_rgba(220,38,38,0.5)]   ${
                            index === 1 || index === 2 ? "md:col-span-2" : ""
                          } ${
                index === industries.length - 1 ? "lg:col-span-3" : ""
              }`}
            >
              {/* Outer gradient container */}
              <div className="h-full rounded-2xl p-[1px] bg-transparent transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-purple group-hover:shadow-[0_0_30px_1px_rgba(220,38,38,0.5)]">
                {/* Inner content container */}
                <div className="relative h-full rounded-2xl bg-neutral-900 transition-all duration-300 group-hover:scale-[0.98] group-hover:rounded-2xl overflow-hidden">
                  {/* Background Image with Hover Zoom Effect */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${industry.bg})`,
                    }}
                  />

                  {/* Dark Overlay with Hover Effect */}
                  <div className="absolute inset-0 bg-black/70 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative z-10 p-8">
                    <div className="bg-black/50 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-red-500/50 animate-glow">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white/70 shadow-lg">
                        <img
                          src={industry.icon}
                          alt={industry.title}
                          className="w-12 h-12"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {industry.description}
                    </p>
                  </div>
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
