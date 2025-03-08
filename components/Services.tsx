import React, { useState } from "react";
import {
  X,
  ChevronRight,
  Layout,
  Server,
  GitBranch,
  Shield,
  BarChart3,
} from "lucide-react";

interface Domain {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const domains: Domain[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Master modern web technologies including React, Vue, Angular, and responsive design principles.",
    icon: <Layout className="w-8 h-8" />,
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Build scalable server-side applications using Node.js, Python, Java, and database management systems.",
    icon: <Server className="w-8 h-8" />,
  },
  {
    id: "version-control",
    title: "Version Control",
    description:
      "Learn Git workflows, branching strategies, and collaborative development practices.",
    icon: <GitBranch className="w-8 h-8" />,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Protect systems and data through security best practices, threat analysis, and penetration testing.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    description:
      "Transform raw data into actionable insights using statistical methods and visualization tools.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
];

function Services() {
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);

  return (
    <div className=" text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-gray-400 text-lg">
              Our tech experts come from all backgrounds and specialize in
              various domains of modern technology.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row gap-4">
          {/* Main Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${
              selectedDomain ? "md:w-2/3" : "w-full"
            }`}
          >
            {domains.map((domain) => (
              <div
                key={domain.id}
                onClick={() => setSelectedDomain(domain)}
                className={`
                border border-gray-900 rounded-xl p-6 cursor-pointer 
                transform transition-all duration-300 
                hover:bg-red-700 hover:-translate-y-1 hover:shadow-2xl hover:scale-105
                  ${
                    selectedDomain?.id === domain.id
                      ? "ring-2 ring-red-500"
                      : ""
                  }
                `}
              >
                <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{domain.title}</h3>
                <div className="flex items-center text-gray-400 hover:text-red-400">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>

          {/* Side Panel */}
          {selectedDomain && (
            <div className="md:w-1/3 border border-gray-900 rounded-xl p-6 h-fit sticky top-4">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center">
                  {selectedDomain.icon}
                </div>
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                {selectedDomain.title}
              </h2>
              <p className="text-gray-400 mb-6">{selectedDomain.description}</p>
              <a
                href="#contact"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors text-center block"
              >
                Contact Now
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
