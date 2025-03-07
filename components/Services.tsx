import React, { useState } from "react";
import {
  Shield,
  Layers,
  BarChart2,
  AlertCircle,
  RefreshCw,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "@/public/logo1.png";
import logo2 from "@/public/logo2.png";
import logo3 from "@/public/logo3.png";

interface ServiceInfo {
  id: number;
  title: string;
  icon: React.ReactNode;
  logos: string[]; // Added missing logos property
  techNames: string[]; // Added missing techNames property
}

function Services() {
  const [selectedService, setSelectedService] = useState<ServiceInfo | null>(
    null
  );

  const services: ServiceInfo[] = [
    {
      id: 1,
      title: "Front-End",
      icon: <Layers className="w-4 h-4 text-red-400" />,
      logos: [logo1, logo2, logo3],
      techNames: ["React", "Bootstrap", "Tailwind"],
    },
    {
      id: 2,
      title: "Back-End",
      icon: <BarChart2 className="w-4 h-4 text-red-400" />,
      logos: [logo1, logo2, logo3],
      techNames: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Cyber-security",
      icon: <RefreshCw className="w-4 h-4 text-red-400" />,
      logos: [logo1, logo2, logo3],
      techNames: ["Kali Linux", "Burp Suite", "Metasploit"],
    },
    {
      id: 4,
      title: "Version Control",
      icon: <Zap className="w-4 h-4 text-red-400" />,
      logos: [logo1, logo2, logo3],
      techNames: ["Git", "GitHub", "Bitbucket"],
    },
    {
      id: 5,
      title: "Data Analysis",
      icon: <AlertCircle className="w-4 h-4 text-red-400" />,
      logos: [logo1, logo2, logo3],
      techNames: ["Python", "Pandas", "NumPy"],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0, strokeDashoffset: 50 },
    visible: {
      pathLength: 1,
      opacity: 1,
      strokeDashoffset: 0,
      transition: {
        duration: 2.5,
        ease: "easeOut",
        delay: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1.5,
      },
    },
  };

  const mobileTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const handleServiceClick = (service: ServiceInfo) => {
    setSelectedService(selectedService?.id === service.id ? null : service);
  };

  return (
    <div
      className="min-h-screen bg-black flex items-center justify-center p-4"
      id="services"
    >
      <motion.div
        className=" w-full bg-black rounded-lg p-8 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-2xl font-bold text-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="heading">
            Our <span className="text-red-700">Services</span>
          </h1>
        </motion.div>
        <motion.p
          className="text-sm text-gray-400 text-center max-w-lg mx-auto sm:mb-[0px] lg:mb-[10rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Flexible monitoring integrates with business-oriented systems for
          end-to-end process visibility & powerful tools for all security needs.
        </motion.p>

        <div className="relative h-[500px] flex items-center justify-center">
          {/* Center Circle */}
          <motion.div
            className="absolute z-10 top[10%]"
            initial="initial"
            animate="pulse"
            variants={pulseVariants}
          >
            <div className=" relative w-[4.5rem] h-[4.5rem] lg:hidden">
              {/* Outer Pentagon (Border Effect) */}
              <div
                className="absolute top-0 left-0 w-[4.5rem] h-[4.5rem]  
                  clip-pentagon bg-red-500 flex items-center justify-center"
              >
                {/* Inner Pentagon (Filled Shape) */}
                <div className="w-[4rem] h-[4rem]  clip-pentagon bg-black flex items-center justify-center">
                  {/* Shield Icon Container */}
                  <div className="w-16 h-16  clip-pentagon bg-red-500/20 flex items-center justify-center">
                    <Shield className="w-10 h-10 sm:w-8 sm:h-8 text-red-400" />
                  </div>
                </div>
              </div>
            </div>
            {/* large screen */}
            <div className="hidden lg:block relative w-[7.5rem] h-[7.5rem] ">
              {/* Outer Pentagon (Border Effect) */}
              <div
                className="absolute top-0 left-0 w-[7.5rem] h-[7.5rem]  
                  clip-pentagon bg-red-500 flex items-center justify-center"
              >
                {/* Inner Pentagon (Filled Shape) */}
                <div className="w-[7rem] h-[7rem]  clip-pentagon bg-black flex items-center justify-center">
                  {/* Shield Icon Container */}
                  <div className="w-16 h-16  clip-pentagon bg-red-500/20 flex items-center justify-center">
                    <Shield className="w-10 h-10 sm:w-8 sm:h-8 text-red-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Steps Container */}
          <motion.div
            className="absolute inset-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="absolute left-[30%] z-10 top-[15%] w-[110px] h-[100px] overflow-hidden lg:hidden "
              variants={itemVariants}
              onClick={() => handleServiceClick(services[0])}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-red-500 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-2">
                    <Layers className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="font-medium">{services[0].title}</span>
                </div>
              </div>
            </motion.div>
            {/* large screen  */}
            <motion.div
              className="hidden lg:block absolute left-[40%] z-10 top-[-15%] w-[250px]"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-red-500 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-2">
                    <Layers className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="font-medium">{services[0].title}</span>
                  <span className="ml-auto text-xl font-bold text-gray-500">
                    01
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  {services[0].description}
                </p>
              </div>
            </motion.div>
            {/* Step 02 - Top Left */}
            <motion.div
              className="absolute left-[-15%] z-10 top-[30%] w-[110px] h-[100px] overflow-hidden lg:hidden "
              variants={itemVariants}
              onClick={() => handleServiceClick(services[1])}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-red-500 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-2">
                    <Layers className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="font-medium">{services[1].title}</span>
                </div>
              </div>
            </motion.div>

            {/* large screen */}
            <motion.div
              className="hidden lg:block absolute left-[10%] z-10 top-0 w-[250px]"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-red-500 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-2">
                    <Layers className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="font-medium">{services[1].title}</span>
                  <span className="ml-auto text-xl font-bold text-gray-500">
                    02
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  {services[1].description}
                </p>
              </div>
            </motion.div>

            {/* Step 02 - Top Right */}
            <motion.div
              onClick={() => handleServiceClick(services[2])}
              className="absolute right-[-15%] z-10 top-[30%] w-[110px] h-[100px] overflow-hidden lg:hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-red-500 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-2">
                    <BarChart2 className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="font-medium">{services[2].title}</span>
                </div>
              </div>
            </motion.div>
            {/* large */}
            <motion.div
              className="hidden lg:block absolute right-[10%] z-10 top-0 w-[250px]"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-red-500 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-2">
                    <BarChart2 className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="font-medium">{services[2].title}</span>
                  <span className="ml-auto text-xl font-bold text-gray-500">
                    03
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  {services[2].description}
                </p>
              </div>
            </motion.div>

            {/* Step 06 - Bottom Right */}
            <motion.div
              onClick={() => handleServiceClick(services[3])}
              className="absolute right-[-15%] z-10 bottom-[15%] w-[110px] h-[100px] overflow-hidden lg:hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="bg-gray-800  rounded-lg p-4 border border-gray-700 hover:border-red-500 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-2">
                    <Zap className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="font-medium">{services[3].title}</span>
                </div>
              </div>
            </motion.div>
            {/* large */}
            <motion.div
              className="hidden lg:block absolute right-[10%] z-10 bottom-0 w-[250px]"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-red-500 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-2">
                    <Zap className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="font-medium">{services[3].title}</span>
                  <span className="ml-auto text-xl font-bold text-gray-500">
                    06
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  {services[3].description}
                </p>
              </div>
            </motion.div>

            {/* Step 04 - Bottom Left */}
            <motion.div
              onClick={() => handleServiceClick(services[4])}
              className="absolute left-[-15%] z-10 bottom-[15%] w-[110px] h-[100px] overflow-hidden lg:hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-red-500 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-2">
                    <RefreshCw className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="font-medium">{services[4].title}</span>
                </div>
              </div>
            </motion.div>
            {/* large */}
            <motion.div
              className="hidden lg:block absolute left-[10%] z-10 bottom-0 w-[250px]"
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-red-500 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-2">
                    <RefreshCw className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="font-medium">{services[4].title}</span>
                  <span className="ml-auto text-xl font-bold text-gray-500">
                    04
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  {services[4].description}
                </p>
              </div>
            </motion.div>

            {/* Connection lines with SVG */}
            <div className="absolute inset-0 pointer-events-none">
              <svg
                className="w-full h-full"
                viewBox="0 0 800 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.circle
                  cx="400"
                  cy="300"
                  r="180"
                  fill="none"
                  stroke="rgba(209, 34, 34, 0.33)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />

                <motion.line
                  x1="400"
                  y1="350" // Start from Shield (center)
                  x2="400"
                  y2="100" // Top
                  stroke="rgba(239, 68, 68, 0.8)"
                  strokeWidth="2"
                  strokeDasharray="10,20"
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                />

                <motion.line
                  x1="450"
                  y1="300" // Start from Shield (center)
                  x2="700"
                  y2="100" // Top-right box
                  stroke="rgba(239, 68, 68, 0.8)"
                  strokeWidth="2"
                  strokeDasharray="10,20"
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                />

                <motion.line
                  x1="400"
                  y1="345" // Start from Shield (center)
                  x2="750"
                  y2="500" // Bottom-right box
                  stroke="rgba(239, 68, 68, 0.8)"
                  strokeWidth="2"
                  strokeDasharray="10,20"
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                />

                <motion.line
                  x1="400"
                  y1="345" // Start from Shield (center)
                  x2="50"
                  y2="500" // Bottom-left box
                  stroke="rgba(239, 68, 68, 0.8)"
                  strokeWidth="2"
                  strokeDasharray="10,20"
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                />

                <motion.line
                  x1="350"
                  y1="300" // Start from Pentagon Center
                  x2="100"
                  y2="100" // Top-left (Mirrored to Top-right)
                  stroke="rgba(239, 68, 68, 0.8)"
                  strokeWidth="2"
                  strokeDasharray="10,20"
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                />
                {selectedService && (
                  <motion.line
                    x1="400"
                    y1="350"
                    x2="400"
                    y2="1000"
                    stroke="rgba(239, 68, 68, 0.8)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                    className="lg:hidden"
                  />
                )}
              </svg>
            </div>
          </motion.div>
        </div>
        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="lg:hidden bg-gray-800 rounded-lg p-4 border border-red-500"
              variants={mobileTextVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h3 className="text-lg font-semibold mb-2">
                {selectedService.title}
              </h3>
              <p className="text-sm text-gray-400">
                {selectedService.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Services;
