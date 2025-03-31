import { FaGithub, FaFigma, FaExternalLinkAlt } from "react-icons/fa";
import { BoxReveal } from "./ui/BoxReveal";
const projects = [
  {
    title: "iPhone 15",
    tech: "React - Three.js - Tailwind - GSAP",
    description:
      "A clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of Three.js and GSAP for 3D and animations.",
    image: "/project1.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Flowers Shop",
    tech: "Next.js - TypeScript - MongoDB - Tailwind - Stripe",
    description:
      "Event management platform built on Next.js. This app serves as a hub for showcasing events and features secure payment through Stripe.",
    image: "/project8.png",
    github:
      "https://www.figma.com/design/uEhFdZA5q7jwgOSugjb9IZ/Flowers-Shop?node-id=1-2&t=NZ6F2OCS1nzsK52w-0",
    live: "#",
  },
  {
    title: "Evently",
    tech: "Next.js - TypeScript - MongoDB - Tailwind - Stripe",
    description:
      "Event management platform built on Next.js. This app serves as a hub for showcasing events and features secure payment through Stripe.",
    image: "/project3.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "HK Shoes",
    tech: "Next.js - TypeScript - MongoDB - Tailwind - Stripe",
    description:
      "Event management platform built on Next.js. This app serves as a hub for showcasing events and features secure payment through Stripe.",
    image: "/project9.png",
    github:
      "https://www.figma.com/design/8CcFpBRf7TMQdGmKf0ttiE/HK-shoes?node-id=0-1&p=f&t=Wbb2jgk8MxYYXQXz-0",
    live: "#",
  },
  {
    title: "Evently",
    tech: "Next.js - TypeScript - MongoDB - Tailwind - Stripe",
    description:
      "Event management platform built on Next.js. This app serves as a hub for showcasing events and features secure payment through Stripe.",
    image: "/project5.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Evently",
    tech: "Next.js - TypeScript - MongoDB - Tailwind - Stripe",
    description:
      "Event management platform built on Next.js. This app serves as a hub for showcasing events and features secure payment through Stripe.",
    image: "/project6.jpg",
    github: "#",
    live: "#",
  },
];

export default function ProjectP() {
  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Title */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold relative inline-block">
          Projects<span className="text-purple-500"></span>
        </h2>
        <div className="w-full h-px bg-gray-600 mt-3"></div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-12">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg   overflow-hidden shadow-lg">
            <div className="bg-gray-700 p-6 pb-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <BoxReveal>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </BoxReveal>
                <BoxReveal>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFigma className="text-gray-400 hover:text-white text-lg" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="text-gray-400 hover:text-white text-lg" />
                    </a>
                  </div>
                </BoxReveal>
              </div>
              <div className="w-20 h-0.5 bg-gray-500 mt-2"></div>
              <BoxReveal>
                <p className="text-purple-400 mt-2">{project.tech}</p>
              </BoxReveal>
              <BoxReveal>
                <p className="text-gray-400 mt-2">{project.description}</p>
              </BoxReveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
