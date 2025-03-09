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
  description: string[];
  icon: React.ReactNode;
}

const domains: Domain[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: [
      "Vue/Vuex",
      "React/Redux",
      "HTML5",
      "CSS3",
      "Javascript",
      "JQuery",
      "Bootstrap",
      "Grid",
      "FlexBox",
      "SASS/LESS",
      "Webpack",
      "GulpThree.js/Babylonjs",
      "FabricJs",
      "Material UI",
      "Shopify/Wordpress/Craft",
    ],
    icon: <Layout className="w-8 h-8 text-red-500" />,
  },
  {
    id: "backend",
    title: "Backend Development",
    description: [
      "PHP",
      "Javascript",
      "Liquid",
      "Python",
      "Laravel",
      "Node/Express",
      "RoR",
      "Django",
      "RESTful API",
      "GraphQL",
      "MySql/Postgresql",
      "MongoDB",
      "CMS",
    ],
    icon: <Server className="w-8 h-8 text-red-500" />,
  },
  {
    id: "version-control",
    title: "Version Control",
    description: ["Git", "GitHub", "Bitbucket", "Gitlab", "Jira", "Trello"],
    icon: <GitBranch className="w-8 h-8 text-red-500" />,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: [
      "Kali Linux",
      "Burp Suite",
      "Metasploit",
      "Nmap",
      "WireShark",
      "Netsparker",
      "Astra",
      "John the Ripper",
      "sqlmap",
      "Nessus",
      "w3af",
      "Hydra",
      "Retina",
      "Aircrack-ng",
    ],
    icon: <Shield className="w-8 h-8 text-red-500" />,
  },
  {
    id: "devops",
    title: "DevOps",
    description: [
      "CI/CD",
      "AWS services",
      "CloudFlare",
      "Apache",
      "Nginx",
      "Linux",
      "Proxy",
    ],
    icon: <BarChart3 className="w-8 h-8 text-red-500" />,
  },
];

function Services() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const handleDomainClick = (domainId: string) => {
    setSelectedDomain(selectedDomain === domainId ? null : domainId);
  };

  return (
    <div className="text-white p-4 md:p-8" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="w-full">
            <h1 className="heading">
              Our <span className="text-red-700">Services</span>
            </h1>
            <p className="text-gray-400 text-lg text-center">
              Our tech experts come from all backgrounds and specialize in
              various domains of modern technology.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row gap-4">
          {/* Main Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:w-full`}
          >
            {domains.map((domain) => (
              <div key={domain.id} className="w-full">
                <div
                  onClick={() => handleDomainClick(domain.id)}
                  className={`border border-red-600 rounded-xl p-6 cursor-pointer 
                    transform transition-all duration-300 
                    hover:bg-red-700 hover:-translate-y-1 hover:shadow-2xl hover:scale-105
                    ${
                      selectedDomain === domain.id ? "ring-2 ring-red-500" : ""
                    }`}
                >
                  <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {domain.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{domain.title}</h3>
                  <div className="flex items-center text-gray-400 hover:bg-red-400">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>

                {/* Mobile Detail Panel */}
                {selectedDomain === domain.id && (
                  <div className="mt-2 p-4 border border-red-600 rounded-lg bg-gray-800 md:hidden transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold">{domain.title}</h2>
                      <button
                        onClick={() => setSelectedDomain(null)}
                        className="text-gray-400 hover:text-white"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {domain.description.map((item, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-semibold text-red-300 bg-red-500/10 border border-red-400 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="block mt-4 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-center transition-colors"
                    >
                      Contact Now
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Side Panel */}
          {selectedDomain && (
            <div className="hidden md:block md:w-1/3 border border-red-600 rounded-xl p-6 h-fit sticky top-4 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center">
                  {domains.find((d) => d.id === selectedDomain)?.icon}
                </div>
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {domains.find((d) => d.id === selectedDomain)?.title}
              </h2>

              <div className="flex flex-wrap gap-2 mt-2 mb-6">
                {domains
                  .find((d) => d.id === selectedDomain)
                  ?.description.map((item, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-semibold text-red-300 bg-red-500/10 border border-red-400 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
              </div>
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
