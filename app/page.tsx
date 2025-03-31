"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import Industries from "@/components/industries";

const Home = () => {
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
