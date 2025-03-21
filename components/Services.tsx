import React, { useState } from "react";
import {
  Globe,
  Smartphone,
  Palette,
  Search,
  Paintbrush,
  Wine,
  Lightbulb,
} from "lucide-react";

type PortfolioItem = {
  name: string;
  description: string;
  image: string;
};

type Service = {
  icon: JSX.Element;
  name: string;
  category: string;
  portfolioItems: PortfolioItem[];
};

const services: Service[] = [
  {
    icon: <Globe className="w-8 h-8" />,
    name: "Web & Ecommerce Development",
    category: "Web & Ecommerce Development",
    portfolioItems: [
      {
        name: "E-commerce Platform",
        description: "Full-featured online store",
        image:
          "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Company Website",
        description: "Modern corporate presence",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Portfolio Site",
        description: "Showcase creative work",
        image:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Landing Page",
        description: "High conversion design",
        image:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Web Application",
        description: "Complex web solutions",
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    name: "App Development",
    category: "App Development",
    portfolioItems: [
      {
        name: "iOS App",
        description: "Native iPhone application",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Android App",
        description: "Material design interface",
        image:
          "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Cross-platform App",
        description: "React Native solution",
        image:
          "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Mobile Game",
        description: "Unity-based gaming app",
        image:
          "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "PWA Development",
        description: "Progressive web app",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    icon: <Palette className="w-8 h-8" />,
    name: "UI/UX Designing",
    category: "UI/UX Designing",
    portfolioItems: [
      {
        name: "User Interface Design",
        description: "Modern UI systems",
        image:
          "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "UX Research",
        description: "User experience analysis",
        image:
          "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Mobile App Design",
        description: "iOS and Android interfaces",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Design System",
        description: "Comprehensive UI kit",
        image:
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Wireframing",
        description: "Low-fidelity prototypes",
        image:
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    icon: <Search className="w-8 h-8" />,
    name: "SEO",
    category: "SEO",
    portfolioItems: [
      {
        name: "SEO Audit",
        description: "Technical analysis",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Keyword Research",
        description: "Market analysis",
        image:
          "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Content Strategy",
        description: "SEO-driven content",
        image:
          "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Link Building",
        description: "Authority building",
        image:
          "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Local SEO",
        description: "Geographic targeting",
        image:
          "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    name: "Logo Designing",
    category: "Logo Designing",
    portfolioItems: [
      {
        name: "Brand Identity",
        description: "Complete brand package",
        image:
          "https://images.unsplash.com/photo-1636622433525-127afdf3662d?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Logo Design",
        description: "Custom logo creation",
        image:
          "https://images.unsplash.com/photo-1560157368-946d9c8f7cb6?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Visual Identity",
        description: "Brand style guide",
        image:
          "https://images.unsplash.com/photo-1524383902853-96c857a3c78b?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Logo Animation",
        description: "Motion graphics",
        image:
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Brand Guidelines",
        description: "Usage documentation",
        image:
          "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
].map((service) => ({
  ...service,
  portfolioItems: service.portfolioItems || [],
}));

function App() {
  const [selectedService, setSelectedService] = useState<Service>(services[0]);

  return (
    <div className="w-full py-10" id="services">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 relative">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-4xl font-bold text-red-700 mb-2">
              IN OUR
            </h1>
            <div className="h-[2px] bg-[#ff3333] flex-grow ml-4"></div>
          </div>
          <div className="flex items-center">
            <h2 className="text-3xl md:text-6xl font-bold text-red-700">
              SERVICES
            </h2>
            <div className="h-[2px] bg-[#ff3333] flex-grow ml-4"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer p-4 md:p-6"
              onClick={() => setSelectedService(service)}
            >
              <div
                className={`bg-[#2a2a2a] p-4 rounded-lg mb-2 transition-colors ${
                  selectedService.category === service.category
                    ? "bg-[#ff3333] text-white"
                    : "hover:bg-[#333333] text-[#ff3333]"
                }`}
              >
                {service.icon}
              </div>
              <span className="text-sm text-center text-white">
                {service.category}
              </span>
            </div>
          ))}
        </div>

        <div className="mb-12 flex justify-end items-center">
          <div className="h-[2px] bg-[#ff3333] flex-grow mr-4"></div>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-red-700 mb-2 text-right">
              IN
            </h2>
            <h3 className="text-3xl md:text-6xl font-bold text-red-700 text-right">
              PORTFOLIO
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {selectedService.portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-[#2a2a2a] p-6 shadow-md transition duration-300 hover:bg-[#333333] hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="text-center relative z-10">
                <h4 className="font-semibold text-white">{item.name}</h4>
                <p className="text-sm text-red-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
