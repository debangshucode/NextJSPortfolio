import React from "react";

const industries = [
  {
    title: "Logistics Industry",
    icon: "/cargo.jpg",
    description:
      "We helped simplify one of the most complex and challenging processes for a leading logistics company in India and the Middle East.",
    bg: "inds.png",
  },
  {
    title: "Fintech Industry",
    icon: "/fintech.jpg",
    description:
      "We helped prominent banks and high-tech start-ups revolutionize the payment and banking sector in India, Middle-East, and Africa.",
    bg: "inds.png",
  },
  {
    title: "Liquor Industry",
    icon: "/liquor.jpg",
    description:
      "We digitized the whole sales process and the MIS of leading liquor stores.",
    bg: "inds.png",
  },
  {
    title: "Ed-tech Industry",
    icon: "/graduation-cap.jpg",
    description:
      "We made learning fun and intriguing by creating engaging learning formats for an Ed-tech app.",
    bg: "inds.png",
  },
  {
    title: "FMCG Industry",
    icon: "/conveyor-belt.jpg",
    description:
      "We helped one of the largest retail supermarkets launch their social media presence and take their business to greater heights.",
    bg: "inds.png",
  },
];

// Color mapping for each industry
const industryColors: Record<
  string,
  {
    borderColor: string;
    iconColor: string;
    dotColor: string;
    gradientFrom: string;
    gradientTo: string;
  }
> = {
  "Logistics Industry": {
    borderColor: "from-pink-500/50 to-pink-500/0",
    iconColor: "text-pink-500",
    dotColor: "rgba(236, 72, 153, 0.5)",
    gradientFrom: "rgba(236, 72, 153, 0.7)",
    gradientTo: "transparent",
  },
  "Fintech Industry": {
    borderColor: "from-purple/50 to-purple/0",
    iconColor: "text-purple-500",
    dotColor: "rgba(168, 85, 247, 0.5)",
    gradientFrom: "rgba(168, 85, 247, 0.7)",
    gradientTo: "transparent",
  },
  "Liquor Industry": {
    borderColor: "from-blue-500/50 to-blue-500/0",
    iconColor: "text-blue-500",
    dotColor: "rgba(59, 130, 246, 0.5)",
    gradientFrom: "rgba(59, 130, 246, 0.7)",
    gradientTo: "transparent",
  },
  "Ed-tech Industry": {
    borderColor: "from-emerald-500/50 to-emerald-500/0",
    iconColor: "text-emerald-500",
    dotColor: "rgba(16, 185, 129, 0.5)",
    gradientFrom: "rgba(16, 185, 129, 0.7)",
    gradientTo: "transparent",
  },
  "FMCG Industry": {
    borderColor: "from-amber-500/50 to-amber-500/0",
    iconColor: "text-amber-500",
    dotColor: "rgba(245, 158, 11, 0.5)",
    gradientFrom: "rgba(245, 158, 11, 0.7)",
    gradientTo: "transparent",
  },
};

function IndustryCard({
  title,
  icon,
  description,
}: {
  title: string;
  icon: string;
  description: string;
}) {
  const colors = industryColors[title];

  return (
    <div className="relative group">
      {/* Glowing border effect */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${colors.borderColor} rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300`}
      />

      {/* Card content */}
      <div className="relative flex flex-col h-full bg-black rounded-2xl p-6 overflow-hidden">
        {/* Dot pattern with mask */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(${colors.dotColor} 1.5px, transparent 1.5px),
              radial-gradient(${colors.dotColor} 1.5px, transparent 1.5px)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
            maskImage: `linear-gradient(to bottom left, ${colors.gradientFrom}, ${colors.gradientTo})`,
            WebkitMaskImage: `linear-gradient(to bottom left, ${colors.gradientFrom}, ${colors.gradientTo})`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className={`${colors.iconColor} mb-4 w-10 h-10 rounded-full`}>
            <img
              src={icon}
              alt={title}
              className="w-full h-full object-contain rounded-full animate-glow "
              style={
                {
                  "--glow-color-1": colors.gradientFrom,
                  "--glow-color-2": colors.dotColor,
                } as React.CSSProperties
              }
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 font-mono">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Industries() {
  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <IndustryCard key={industry.title} {...industry} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Industries;
