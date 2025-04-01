"use client";
import { useState, useEffect } from "react";
import HeroP from "@/components/heroP";
import AboutP from "@/components/aboutP";
import ProjectP from "@/components/projectP";
import Loader from "@/components/ui/Loader";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Ensure loader is shown instantly

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulating delay

    return () => clearTimeout(timer);
  }, []);

  // Render the loader immediately
  if (loading) {
    return <Loader />;
  }
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
