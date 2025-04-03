import React from "react";
import {
  Globe2,
  X,
  Home,
  User,
  Briefcase,
  Wrench,
  BookOpen,
} from "lucide-react";

// Updated ProjectCard to accept className
function ProjectCard({
  year,
  title,
  image,
  tag,
  link,
  className = "",
}: {
  year: string;
  title: string;
  image: string;
  tag: string;
  link?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative group overflow-hidden rounded-[20px] bg-[#0A0A0B] border border-white/[0.08] ${className}`}
    >
      <img src={image} alt={title} className="w-full h-[200px] object-cover" />
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex justify-between items-start">
          <span className="text-white/70 text-sm">{year}</span>
          <span className="text-white/70 text-sm">{tag}</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <h3 className="text-white text-xl font-medium">{title}</h3>
          {link && (
            <a
              href={link}
              className="text-white/70 hover:text-white transition-colors"
            >
              <Globe2 size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function IconGrid() {
  const logos = [
    { id: "webflow", src: "https://i.imgur.com/8vLIBWa.png" },
    { id: "wordpress", src: "https://i.imgur.com/5uQVVFt.png" },
    { id: "wix", src: "https://i.imgur.com/ZWVlGm7.png" },
    { id: "framer", src: "https://i.imgur.com/yPVZYV1.png" },
    { id: "hostinger", src: "https://i.imgur.com/c0XuIwV.png" },
    { id: "squarespace", src: "https://i.imgur.com/LvhD3XA.png" },
    { id: "shopify", src: "https://i.imgur.com/SZ3NwZF.png" },
    { id: "bubble", src: "https://i.imgur.com/6Dg2BBX.png" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 bg-[#0A0A0B] rounded-[20px] p-8 border border-white/[0.08]">
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="aspect-square bg-[#141415] rounded-2xl p-6 flex items-center justify-center"
        >
          <img
            src={logo.src}
            alt={logo.id}
            className="w-12 h-12 object-contain opacity-50"
          />
        </div>
      ))}
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#0A0A0B] p-10 rounded-[20px] border border-white/[0.08] relative overflow-hidden">
      <h3 className="text-white text-2xl font-medium mb-3">{title}</h3>
      <p className="text-white/60 text-base leading-relaxed">{description}</p>
    </div>
  );
}

function ProjectP() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Updated Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* First Row - 4 Cards */}
          <ProjectCard
            year="2025"
            title="My Portfolio"
            image="..."
            tag="Currently Viewing"
            link="#"
          />
          <ProjectCard
            year="2024"
            title="School"
            image="..."
            tag="School"
            link="#"
          />
          <ProjectCard
            year="2025"
            title="Blog"
            image="..."
            tag="Green Earth"
            link="#"
          />
          <ProjectCard
            year="2024"
            title="Ecommerce"
            image="..."
            tag="Watches"
            link="#"
          />

          {/* Second Row - 1 Large Card Spanning 2 Rows + 2 Cards (One Big, One Small) */}
          <ProjectCard
            year="2025"
            title="Featured Project"
            image="..."
            tag="Highlight"
            link="#"
            className="md:row-span-2 md:col-span-1"
          />
          <ProjectCard
            year="2024"
            title="Tech Blog"
            image="..."
            tag="Articles"
            link="#"
            className="md:col-span-2 md:row-span-1"
          />
          <ProjectCard
            year="2025"
            title="Case Study"
            image="..."
            tag="Research"
            link="#"
          />

          {/* Third Row - 2 Cards (One Big on Left, One Small on Right) */}
          <ProjectCard
            year="2024"
            title="Startup Insights"
            image="..."
            tag="Entrepreneurship"
            link="#"
            className="md:col-span-2 md:row-span-1"
          />
          <ProjectCard
            year="2025"
            title="Photography"
            image="..."
            tag="Gallery"
            link="#"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectP;
