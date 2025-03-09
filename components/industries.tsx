import React from "react";
import {
  Globe2,
  CreditCard,
  Wine,
  GraduationCap,
  ShoppingCart,
} from "lucide-react";

function Industries() {
  return (
    <div
      className="min-h-screen bg-black text-white py-20 px-4"
      id="industries"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading">
            Industies <span className="text-red-700">We Touched With</span>
          </h1>
          <p className="text-gray-400 text-lg text-center md:mt-10 my-5">
            We have worked with a diverse range of industries and helped them
            grow their business with our cutting-edge solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Logistics Industry",
              icon: <Globe2 className="w-12 h-12" />,
              description:
                "We helped simplify one of the most complex and challenging processes for a leading logistics company in India and the Middle East.",
            },
            {
              title: "Fintech Industry",
              icon: <CreditCard className="w-12 h-12" />,
              description:
                "We helped prominent banks and high-tech start-ups revolutionize the payment and banking sector in India, Middle-East, and Africa.",
            },
            {
              title: "Liquor Industry",
              icon: <Wine className="w-12 h-12" />,
              description:
                "We digitized the whole sales process and the MIS of leading liquor stores.",
            },
            {
              title: "Ed-tech Industry",
              icon: <GraduationCap className="w-12 h-12" />,
              description:
                "We made learning fun and intriguing by creating engaging learning formats for an Ed-tech app.",
            },
            {
              title: "FMCG Industry",
              icon: <ShoppingCart className="w-12 h-12" />,
              description:
                "We helped one of the largest retail supermarkets launch their social media presence and take their business to greater heights.",
            },
          ].map((industry, index) => (
            <div
              key={index}
              className="glaze-hover bg-neutral-900 rounded-2xl p-8 border border-neutral-800
                         hover:border-neutral-700 transition-all duration-300"
            >
              <div className="bg-black/50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <div className="text-red-500">{industry.icon}</div>
              </div>

              <h3 className="text-xl font-bold mb-4">{industry.title}</h3>

              <p className="text-neutral-400 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Industries;
