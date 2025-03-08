import React from "react";
import { Github, Globe, ExternalLink } from "lucide-react";

interface ProjectCard {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: ProjectCard[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory management",
    image: "project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking with interactive maps",
    image: "project2.jpg",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Task Management",
    description: "Collaborative task management system with real-time updates",
    image: "project3.jpg",
    technologies: ["React", "Firebase", "Material-UI"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Social Media Analytics",
    description: "Advanced analytics dashboard for social media metrics",
    image: "project4.jpg",
    technologies: ["React", "D3.js", "Node.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Fitness Tracker",
    description: "Personal fitness tracking with progress visualization",
    image: "project5.jpg",
    technologies: ["React", "Chart.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate unique images using machine learning",
    image: "project6.jpg",
    technologies: ["React", "TensorFlow.js", "Python"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

function ProjectCard({ project }: { project: ProjectCard }) {
  return (
    <div className="flex-shrink-0 w-[350px] bg-zinc-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 border border-red-800/20 hover:border-red-600/50">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-50 object-cover opacity-80 hover:opacity-100 transition-opacity"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-red-500">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-zinc-800 text-red-400 rounded-full text-sm border border-red-900/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors"
            >
              <Github size={20} />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function RecentProjects() {
  return (
    <div className=" bg-black" id="projects">
      <div className="container mx-auto ">
        <div className="text-center mb-12">
          <h1 className="heading">
            Our <span className="text-red-700">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest work and innovative solutions
          </p>
        </div>

        <div className="relative overflow-hidden h-[500px] group">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
          <div className="animate-scroll-vertical">
            <div className="flex justify-center gap-6 mb-6">
              {projects.slice(0, 3).map((project, index) => (
                <ProjectCard key={`row1-${index}`} project={project} />
              ))}
            </div>
            <div className="flex justify-center gap-6 mb-6">
              {projects.slice(3, 6).map((project, index) => (
                <ProjectCard key={`row2-${index}`} project={project} />
              ))}
            </div>
            {/* Duplicate rows for seamless scrolling */}
            <div className="flex justify-center gap-6 mb-6">
              {projects.slice(0, 3).map((project, index) => (
                <ProjectCard
                  key={`row1-duplicate-${index}`}
                  project={project}
                />
              ))}
            </div>
            <div className="flex justify-center gap-6 mb-6">
              {projects.slice(3, 6).map((project, index) => (
                <ProjectCard
                  key={`row2-duplicate-${index}`}
                  project={project}
                />
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
