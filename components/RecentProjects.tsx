import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const RecentProjects = () => {
  const projects = [
    {
      quote:
        "Developed a real-time OPD delay forecasting system using machine learning.",
      name: "Healthcare AI",
      title: "Machine Learning Model",
    },
    {
      quote: "Built a movie recommendation app with TMDB API integration.",
      name: "MovieFlix",
      title: "Flutter & Bloc Pattern",
    },
    {
      quote:
        "Designed an interactive hardware inventory management system for law enforcement.",
      name: "Police Inventory",
      title: "Django & React",
    },
    {
      quote:
        "Implemented a DJ mix automation tool for seamless music transitions.",
      name: "AutoMix DJ",
      title: "AI & Signal Processing",
    },
    {
      quote: "Developed a web-based customer churn prediction dashboard.",
      name: "ChurnPredictor",
      title: "Data Science & Web UI",
    },
  ];

  return (
    <section id="" className="relative w-full py-16 text-white">
      <div className="container mx-auto text-center mt-10">
        <h1 className="heading">
          Completed
          <span className="text-red-700"> Live Projects</span>
        </h1>
        <InfiniteMovingCards items={projects} direction="left" speed="normal" />
      </div>
    </section>
  );
};

export default RecentProjects;
