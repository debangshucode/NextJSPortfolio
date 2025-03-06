"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import Image from "next/image";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 px-4">
      <h1 className="heading">
        Kind words from
        <span className="text-red-700"> satisfied clients</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            <p className="text-gray-600 dark:text-gray-300">
              {testimonial.quote}
            </p>

            {/* Image & Name Container */}
            <div className="flex items-center mt-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full border border-gray-300 dark:border-gray-600"
              />
              <h3 className="ml-3 font-semibold text-lg text-gray-900 dark:text-white">
                - {testimonial.name}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Company Logos */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
        {companies.map((company) => (
          <div className="flex md:max-w-60 max-w-32 gap-2" key={company.id}>
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
