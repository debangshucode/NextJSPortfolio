import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Globe,
  Smartphone,
  Palette,
  Search,
  Paintbrush,
  BarChart,
  CheckCircle,
  Shield,
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
  {
    icon: <BarChart className="w-8 h-8" />,
    name: "Power BI",
    category: "Power BI",
    portfolioItems: [
      {
        name: "Sales Analysis",
        description: "Track and visualize sales trends",
        image:
          "https://images.unsplash.com/photo-1581091226825-1f407c022245?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Energy Consumption Analysis",
        description: "Monitor energy usage patterns",
        image:
          "https://images.unsplash.com/photo-1556741533-6e7f7e4a1cb9?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Customer Churn Analysis",
        description: "Identify at-risk customers",
        image:
          "https://images.unsplash.com/photo-1568149879488-9562c6f6ca57?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Financial Performance Analysis",
        description: "Assess business profitability",
        image:
          "https://images.unsplash.com/photo-1618220179428-b4bce1f5efb3?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Marketing Campaign Insights",
        description: "Measure campaign success",
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Anomaly Detection in Credit Card Transactions",
        description: "Detect fraudulent activities",
        image:
          "https://images.unsplash.com/photo-1511203466129-b4111293a0ec?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Healthcare Sales Analysis",
        description: "Track healthcare product sales",
        image:
          "https://images.unsplash.com/photo-1530026405186-ed1f139313a1?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Inventory Management Dashboard",
        description: "Optimize stock levels",
        image:
          "https://images.unsplash.com/photo-1580934150686-c9665d92b23f?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Life Expectancy Data Analysis",
        description: "Analyze global health trends",
        image:
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    name: "Quality Assurance (QA)",
    category: "QA",
    portfolioItems: [
      {
        name: "Functional Testing",
        description: "Ensure software functionality",
        image:
          "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Compatibility Testing",
        description: "Cross-device compatibility",
        image:
          "https://images.unsplash.com/photo-1516632664305-eda5a0172445?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Localization Testing",
        description: "Adapt products for global users",
        image:
          "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Performance Testing",
        description: "Measure system responsiveness",
        image:
          "https://images.unsplash.com/photo-1576104599384-33e04e90d9d7?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Usability Testing",
        description: "Enhance user experience",
        image:
          "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Accessibility Testing",
        description: "Make products inclusive",
        image:
          "https://images.unsplash.com/photo-1560816119-78b592318fa5?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Security Testing",
        description: "Identify vulnerabilities",
        image:
          "https://images.unsplash.com/photo-1556767576-6e5b54c361d9?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    name: "Cyber Security",
    category: "Cyber Security",
    portfolioItems: [
      {
        name: "Network Security",
        description: "Protect network infrastructure",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Cloud Security",
        description: "Secure cloud environments",
        image:
          "https://images.unsplash.com/photo-1524749292158-7540c2494485?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Mobile Security",
        description: "Protect mobile devices",
        image:
          "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "IoT Security",
        description: "Safeguard smart devices",
        image:
          "https://images.unsplash.com/photo-1612036789756-5e8a35d8b80f?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Application Security",
        description: "Secure web and mobile apps",
        image:
          "https://images.unsplash.com/photo-1601233740525-8d290d2a4ab4?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Zero Trust",
        description: "Implement Zero Trust models",
        image:
          "https://images.unsplash.com/photo-1591291491442-4963b30b14ed?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Penetration Testing",
        description: "Identify system weaknesses",
        image:
          "https://images.unsplash.com/photo-1536323760109-ca8c07450053?auto=format&fit=crop&q=80&w=800",
      },
      {
        name: "Managed Security Services",
        description: "24/7 security monitoring",
        image:
          "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80&w=800",
      },
    ],
  },
].map((service) => ({
  ...service,
  portfolioItems: service.portfolioItems || [],
}));

function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const portfolioRef = useRef<HTMLDivElement | null>(null);

  const [animationKey, setAnimationKey] = useState(0); // 🔥 New state to trigger animation reset

  const handleServiceClick = (service: Service) => {
    if (selectedService?.category === service.category) {
      setShowPortfolio(!showPortfolio);
    } else {
      // 🔥 Reset selection first to force re-animation
      setSelectedService(null);
      setShowPortfolio(false);

      setTimeout(() => {
        setSelectedService(service);
        setShowPortfolio(true);
        setAnimationKey((prev) => prev + 1); // 🔥 Change animation key to re-trigger animation
      }, 100); // Short delay to ensure the component resets before re-rendering
    }

    // 🔽 Scroll into view after portfolio shows
    setTimeout(() => {
      if (window.innerWidth <= 768 && portfolioRef.current) {
        portfolioRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <div className="w-full py-10" id="services">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="heading">
            What <span className="text-red-700">we can</span> do for you{" "}
            <span className="text-red-700">?</span>
          </h1>
          <p className="text-gray-400 text-lg text-center md:mt-10 my-5">
            From creating a visually stunning website that reflects your brand
            identity to optimizing it for search engines and maximizing online
            visibility through social media, we work closely with you every step
            of the way to ensure your online presence is both effective and
            engaging.
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-10 relative">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
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

        {/* Service Selection */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer p-4 md:p-6"
              onClick={() => handleServiceClick(service)}
            >
              <div
                className={`bg-[#2a2a2a] p-4 rounded-lg mb-2 transition-colors ${
                  selectedService?.category === service.category &&
                  showPortfolio
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

        {/* Portfolio Section */}
        <div ref={portfolioRef}>
          <AnimatePresence mode="wait">
            {showPortfolio && selectedService && (
              <div>
                <div className="mb-12 flex justify-end items-center opacity-0 translate-y-10 animate-fadeInUp">
                  <div className="h-[2px] bg-[#ff3333] flex-grow mr-4"></div>
                  <div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 text-right">
                      IN
                    </h2>
                    <h3 className="text-3xl md:text-6xl font-bold text-red-700 text-right">
                      PORTFOLIO
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {selectedService.portfolioItems.map((item, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg bg-[#2a2a2a] p-4 shadow-md transition duration-500 ease-out transform scale-90 opacity-0 animate-fadeInDelay"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <div className="text-center relative z-10">
                        <h4 className="font-semibold text-white">
                          {item.name}
                        </h4>
                        <p className="text-sm text-red-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
