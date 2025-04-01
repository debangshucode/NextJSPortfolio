"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Industries from "@/components/industries";
import Loader from "@/components/ui/Loader";

const Home = () => {
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
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        <Hero />
        <Grid />
        <Services />
        <Approach />
        <Industries />
        {/* <RecentProjects /> */}
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
