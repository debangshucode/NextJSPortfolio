"use client";
import HeroP from "@/components/heroP";
import AboutP from "@/components/aboutP";
import ProjectP from "@/components/projectP";

const Portfolio = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="w-full">
        {/* Hero and About side by side */}
        <div className="flex flex-col sm:flex-row justify-between w-full">
          <div className="w-full sm:w-1/2">
            <HeroP />
          </div>
          <div className="w-full sm:w-1/2">
            <AboutP />
          </div>
        </div>

        {/* Projects Section */}
        <ProjectP />
      </div>
    </main>
  );
};

export default Portfolio;
