import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { projects } from "@/data"; // Importing projects from data file

const RecentProjects = () => {
  return (
    <section id="projects" className="relative w-full py-16 text-white">
      <div className="container mx-auto text-center mt-10">
        <h1 className="heading">
          Completed
          <span className="text-red-700"> Live Projects</span>
        </h1>
        {/* Calling InfiniteMovingCards component with the projects data */}
        <InfiniteMovingCards items={projects} direction="left" speed="normal" />
      </div>
    </section>
  );
};

export default RecentProjects;
