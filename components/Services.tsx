"use client"; // Required for interactive components

import Card from "@/components/ui/Card";
import { skillsData } from "@/data";
import LogoDrop from "./LogoDrop";

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Skills Section */}
      <h1 className="heading mb-5">
        My <span className="text-red-500">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {skillsData.map((skillCategory, index) => (
          <Card
            key={index}
            heading={skillCategory.heading}
            skills={skillCategory.skills}
          />
        ))}
      </div>
      {/* <LogoDrop /> */}
    </div>
  );
};

export default Services;
