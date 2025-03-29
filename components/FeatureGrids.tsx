import React from "react";
import FeatureCard from "./ui/FeatureCard";
import {
  FaCheckCircle,
  FaTachometerAlt,
  FaCode,
  FaMicrochip,
} from "react-icons/fa";

const FeaturesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-black">
      <FeatureCard
        icon={<FaCheckCircle />}
        title="Free"
        description="Completely free to use and open-source under the MIT license."
        borderColor="border-pink-500 text-pink-500"
      />
      <FeatureCard
        icon={<FaTachometerAlt />}
        title="Tiny"
        description="Mini animate is 90% smaller than its GSAP equivalent, scroll 75% smaller."
        borderColor="border-purple-500 text-purple-500"
      />
      <FeatureCard
        icon={<FaCode />}
        title="Production-ready"
        description="Written in TypeScript, with extensive test coverage."
        borderColor="border-blue-500 text-blue-500"
      />
      <FeatureCard
        icon={<FaMicrochip />}
        title="Hybrid engine"
        description="The power of JS animations with the performance of hardware acceleration."
        borderColor="border-green-500 text-green-500"
      />
    </div>
  );
};

export default FeaturesGrid;
