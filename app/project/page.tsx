"use client";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import React, { useState } from "react";
import {
  Globe2,
  CreditCard,
  Wine,
  GraduationCap,
  ShoppingCart,
  Building2,
  ChefHat,
} from "lucide-react";
import { projects } from "@/data";

type Industry = {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  projects: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
};

function Project() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries: Industry[] = [
    {
      id: "fintech",
      title: "Fintech Industry",
      icon: <CreditCard className="w-12 h-12" />,
      description: "Revolutionary solutions for the financial sector",
      projects: [
        {
          title: "Digital Banking Platform",
          description:
            "Next-generation banking experience with advanced security features",
          imageUrl:
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Payment Gateway",
          description: "Seamless payment processing solution for businesses",
          imageUrl:
            "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
    {
      id: "food",
      title: "Food Industry",
      icon: <ChefHat className="w-12 h-12" />,
      description: "Digital solutions for restaurants and food services",
      projects: [
        {
          title: "Restaurant Management System",
          description: "Complete solution for modern restaurant operations",
          imageUrl:
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
    {
      id: "edtech",
      title: "Ed-tech Industry",
      icon: <GraduationCap className="w-12 h-12" />,
      description: "Innovative educational technology solutions",
      projects: [
        {
          title: "Learning Management System",
          description: "Comprehensive platform for online education",
          imageUrl:
            "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
    {
      id: "realestate",
      title: "Real Estate Industry",
      icon: <Building2 className="w-12 h-12" />,
      description: "Digital solutions for property management",
      projects: [
        {
          title: "Property Management Platform",
          description: "All-in-one solution for real estate operations",
          imageUrl:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* <FloatingNav navItems={navItems} /> */}
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-red-900/30 to-black"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="text-white">Make </span>
            <span className="text-red-500">Things</span>
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-white">To Change </span>
            <span className="text-red-500">Things</span>
          </h2>
          <p className="text-xl text-gray-300">
            We design, build, operate and evolve digital experiences rooting
            everything in research and data. Our goal is to understand problems
            and identify elegant solutions.
          </p>
        </div>
      </div>
      {/* Industry Filter */}
      <div className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => setSelectedIndustry(null)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedIndustry === null
                  ? "bg-red-600 text-white"
                  : "bg-neutral-800 text-gray-300 hover:bg-red-600/20"
              }`}
            >
              Show All
            </button>
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedIndustry === industry.id
                    ? "bg-red-600 text-white"
                    : "bg-neutral-800 text-gray-300 hover:bg-red-600/20"
                }`}
              >
                {industry.title}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {industries
              .filter(
                (industry) =>
                  !selectedIndustry || industry.id === selectedIndustry
              )
              .map((industry) =>
                industry.projects.map((project, index) => (
                  <div
                    key={`${industry.id}-${index}`}
                    className="glaze-hover bg-neutral-900 rounded-2xl overflow-hidden"
                  >
                    <div className="h-64 relative">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-red-600/20 p-3 rounded-full">
                          {industry.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-red-500">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {industry.title}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </div>
                ))
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
