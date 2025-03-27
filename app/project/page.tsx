"use client";
import HeroP from "@/components/heroP";
import AboutP from "@/components/aboutP";
import ProjectP from "@/components/projectP";
const Project = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <HeroP />
        <AboutP />
        <ProjectP />
      </div>
    </main>
  );
};

export default Project;
