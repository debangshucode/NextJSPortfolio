import React from "react";
import { Plus } from "lucide-react";
import { BoxReveal } from "./ui/BoxReveal";

function AboutP() {
  return (
    <div className="bg-black text-white p-8 mt-32">
      <div className=" mx-auto ">
        <BoxReveal>
          <div className="mb-10 flex items-center gap-4">
            <h1 className="text-6xl font-bold">
              About<span className="text-red-500">.</span>
            </h1>
            <div className="w-[30rem] h-1 bg-gray-500"></div>
          </div>
        </BoxReveal>

        <div className="space-y-8">
          <div className="flex gap-8">
            <div className="flex-grow space-y-6">
              <BoxReveal>
                <p className="text-xl">
                  <span className="text-2xl font-semibold">H</span>ello there!
                  We&aposre a team of passionate full-stack developers
                  specializing in creating engaging and responsive websites
                  tailored for businesses and individuals.
                </p>
              </BoxReveal>

              {/* <BoxReveal>
                <p className="text-gray-300">
                  We specialize in **user-centered design**, crafting visually
                  striking interfaces that enhance both usability and
                  accessibility. Our goal is to create seamless digital
                  experiences that captivate users.
                </p>
              </BoxReveal>

              <BoxReveal>
                <p className="text-gray-300">
                  Our expertise lies in **React and Next.js** for frontend
                  development, while our backend proficiency includes **Node.js,
                  PostgreSQL, and MongoDB**, allowing us to build robust
                  full-stack applications.
                </p>
              </BoxReveal>

              <BoxReveal>
                <p className="text-gray-300">
                  Our workflow integrates AI-driven tools like **ChatGPT, GitHub
                  Copilot, and Midjourney**, ensuring efficient development and
                  innovative solutions tailored to your needs.
                </p>
              </BoxReveal> */}

              <BoxReveal>
                <p className="text-gray-300">
                  Beyond coding, we focus on adaptability, communication, and
                  organization to provide top-notch services. Whether it&aposs
                  development, **SEO**, or performance optimization, we ensure
                  your project stands out.
                </p>
              </BoxReveal>

              <BoxReveal>
                <p className="text-gray-300">
                  Let&aposs collaborate to bring your vision to life with
                  **clean, efficient code**, ensuring a smooth and consistent
                  experience across all devices. Get in touch today!
                </p>
              </BoxReveal>
            </div>

            <div className="w-[50rem] space-y-8">
              <BoxReveal>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Plus className="text-red-500" />
                    <h2 className="text-xl font-semibold">Stack</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "React",
                      "Next.js",
                      "JavaScript",
                      "TypeScript",
                      "Redux",
                      "Tailwind",
                      "Bootstrap",
                      "Node.js",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-900 rounded-md text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </BoxReveal>

              <BoxReveal>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Plus className="text-red-500" />
                    <h2 className="text-xl font-semibold">Tools</h2>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      "Git",
                      "GitHub",
                      "Copywriting",
                      "SEO",
                      "Figma",
                      "Photoshop",
                      "Git Copilot",
                      "React Native",
                    ].map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-zinc-900 rounded-md text-sm text-gray-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </BoxReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutP;
