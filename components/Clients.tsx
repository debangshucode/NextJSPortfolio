"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import Image from "next/image";

const Clients = () => {
  return (
    <section id="testimonials" className="py-10 px-4">
      <h1 className="heading">
        Kind words from
        <span className="text-red-700"> satisfied clients</span>
      </h1>

      {/* Testimonials Infinite Moving Cards */}
      <InfiniteMovingCards
        items={
          testimonials.map((testimonial) => ({
            title: testimonial.name,
            des: testimonial.quote,
            img: testimonial.image.src, // Ensure it's a string
            iconLists: [], // Explicitly define as string[]
          })) as {
            title: string;
            des: string;
            img: string;
            iconLists: string[];
          }[]
        }
        direction="left"
        speed="normal"
        pauseOnHover={true}
        className="mt-10"
      />

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
            <Image
              src={company.img}
              alt={company.name}
              width={40}
              height={40}
              className="md:w-10 w-5"
            />

            <Image
              src={company.nameImg}
              alt={company.name}
              width={company.id === 4 || company.id === 5 ? 100 : 150}
              height={40}
              className="md:w-24 w-20"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
