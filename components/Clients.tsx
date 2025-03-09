"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import Image from "next/image";

const Clients = () => {
  return (
    <section id="testimonials" className="py-10 px-4">
      <h1 className="heading">
        Kind words from
        <span className="text-red-700"> satisfied clients</span>
      </h1>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-red-700 dark:border-gray-600  
          shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
                       hover:drop-shadow-[0_0_25px_rgba(255,0,0,1)] 
                       transition-all duration-300"
          >
            <div className="flex items-center mt-4 mb-3">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full border border-gray-300 dark:border-gray-600 
                           filter drop-shadow-[0_0_10px_rgba(255,0,0,0.6)] 
                           hover:drop-shadow-[0_0_20px_rgba(255,0,0,1)] 
                           transition-all duration-300"
              />
              <h3 className="ml-3 font-semibold text-lg text-red-700">
                {testimonial.name}
              </h3>
            </div>
            <p className="text-gray-200">{testimonial.quote}</p>

            {/* Image & Name Container */}
          </div>
        ))}
      </div>

      {/* Company Logos */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
        {companies.map((company) => (
          <div
            className="flex md:max-w-60 max-w-32 gap-2 
                       filter drop-shadow-[0_0_10px_rgba(0,0,255,0.4)] 
                       hover:drop-shadow-[0_0_20px_rgba(0,0,255,1)] 
                       transition-all duration-300"
            key={company.id}
          >
            <img src={company.img} alt={company.name} className="md:w-10 w-5" />
            <img
              src={company.nameImg}
              alt={company.name}
              width={company.id === 4 || company.id === 5 ? 100 : 150}
              className="md:w-24 w-20"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
