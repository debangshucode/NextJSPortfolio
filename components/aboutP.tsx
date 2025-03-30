import React from "react";
import { Plus } from "lucide-react";
import { BoxReveal } from "./ui/BoxReveal";

function AboutP() {
  return (
    <div className="bg-black text-white p-8 mt-5 md:mt-32">
      <div className=" mx-auto ">
        <BoxReveal>
          <div className="mb-10 flex items-center gap-4">
            <h1 className="text-6xl font-bold">
              About<span className="text-red-500">.</span>
            </h1>
            <div className="w-[8rem]  h-1 bg-gray-500 xl:w-[30rem]"></div>
          </div>
        </BoxReveal>

        <div className="space-y-8">
          <div className="flex gap-8">
            <div className="flex-grow space-y-6">
              {/* <BoxReveal>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">H</span>ello there!
                  We&aposre a team of passionate full-stack developers
                  specializing in creating engaging and responsive websites
                  tailored for businesses and individuals.
                </p>
              </BoxReveal> */}

              <BoxReveal>
                <p className="text-gray-300">
                  Your vision deserves more than just development—it needs
                  strategy, security, and seamless execution. We specialize in
                  Web & E-commerce Development, App Development, UI/UX Design,
                  SEO, Logo Design, Power BI, QA, and Cybersecurity, delivering
                  tailored solutions that elevate brands.
                </p>
              </BoxReveal>

              <BoxReveal>
                <p className="text-gray-300">
                  From creating stunning digital experiences to securing your
                  online presence, we blend creativity, technology, and
                  analytics to help you grow. Whether it&apos;s crafting a
                  high-performing website, optimizing for search engines, or
                  ensuring top-tier security, we make every detail count.
                </p>
              </BoxReveal>

              <BoxReveal>
                <p className="text-gray-300">
                  Let&apos;s build something remarkable together.
                </p>
              </BoxReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutP;
