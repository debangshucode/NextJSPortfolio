import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  borderColor,
}) => {
  return (
    <div
      className={`relative border ${borderColor} rounded-xl p-6 overflow-hidden bg-black`}
    >
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-black opacity-90">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:16px_16px]" />
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex items-center space-x-3">
          <span className={`text-2xl ${borderColor}`}>{icon}</span>
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
