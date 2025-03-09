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
          {/* Small Card */}
          <div
            className="glaze-hover bg-neutral-900 rounded-2xl p-8 border border-neutral-800 
                          hover:border-neutral-700 transition-all duration-300"
          >
            <div className="bg-black/50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <div className="text-red-500">
                <Globe2 className="w-12 h-12" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Logistics Industry</h3>
            <p className="text-neutral-400 leading-relaxed">
              We helped simplify one of the most complex and challenging
              processes for a leading logistics company in India and the Middle
              East.
            </p>
          </div>

          {/* Big Card */}
          <div
            className="glaze-hover bg-neutral-900 rounded-2xl p-8 border border-neutral-800 
                          hover:border-neutral-700 transition-all duration-300 md:col-span-2"
          >
            <div className="bg-black/50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <div className="text-red-500">
                <CreditCard className="w-12 h-12" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Fintech Industry</h3>
            <p className="text-neutral-400 leading-relaxed">
              We helped prominent banks and high-tech start-ups revolutionize
              the payment and banking sector in India, Middle-East, and Africa.
            </p>
          </div>

          {/* Big Card */}
          <div
            className="glaze-hover bg-neutral-900 rounded-2xl p-8 border border-neutral-800 
                          hover:border-neutral-700 transition-all duration-300 md:col-span-2"
          >
            <div className="bg-black/50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <div className="text-red-500">
                <Wine className="w-12 h-12" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Liquor Industry</h3>
            <p className="text-neutral-400 leading-relaxed">
              We digitized the whole sales process and the MIS of leading liquor
              stores.
            </p>
          </div>

          {/* Small Card */}
          <div
            className="glaze-hover bg-neutral-900 rounded-2xl p-8 border border-neutral-800 
                          hover:border-neutral-700 transition-all duration-300"
          >
            <div className="bg-black/50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <div className="text-red-500">
                <GraduationCap className="w-12 h-12" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Ed-tech Industry</h3>
            <p className="text-neutral-400 leading-relaxed">
              We made learning fun and intriguing by creating engaging learning
              formats for an Ed-tech app.
            </p>
          </div>

          {/* Full-Width Card */}
          <div
            className="glaze-hover bg-neutral-900 rounded-2xl p-8 border border-neutral-800 
                          hover:border-neutral-700 transition-all duration-300 lg:col-span-3"
          >
            <div className="bg-black/50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <div className="text-red-500">
                <ShoppingCart className="w-12 h-12" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">FMCG Industry</h3>
            <p className="text-neutral-400 leading-relaxed">
              We helped one of the largest retail supermarkets launch their
              social media presence and take their business to greater heights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;
