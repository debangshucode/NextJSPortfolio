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
    borderColor: "from-pink-500/80 to-pink-500/10",
    iconColor: "text-pink-500",
    dotColor: "rgba(234, 12, 160, 0.9)",
    gradientFrom: "rgba(233, 16, 139, 0.92)",
    gradientTo: "transparent",
  },
  "Fintech Industry": {
    borderColor: "from-purple/80 to-purple/10",
    iconColor: "text-purple-500",
    dotColor: "rgba(156, 12, 239, 0.9)",
    gradientFrom: "rgba(128, 11, 237, 0.93)",
    gradientTo: "transparent",
  },
  "Liquor Industry": {
    borderColor: "from-blue-500/80 to-blue-500/10",
    iconColor: "text-blue-500",
    dotColor: "rgba(11, 100, 245, 0.94)",
    gradientFrom: "rgba(12, 99, 240, 0.96)",
    gradientTo: "transparent",
  },
  "Ed-tech Industry": {
    borderColor: "from-emerald-500/80 to-emerald-500/10",
    iconColor: "text-emerald-500",
    dotColor: "rgba(31, 221, 25, 0.79)",
    gradientFrom: "rgba(21, 214, 40, 0.84)",
    gradientTo: "transparent",
  },
  "FMCG Industry": {
    borderColor: "from-amber-500/80 to-amber-500/10",
    iconColor: "text-amber-500",
    dotColor: "rgba(245, 202, 11, 0.8)",
    gradientFrom: "rgba(245, 198, 11, 0.83)",
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
    <div className="relative group h-full">
      {/* Glowing border effect */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${colors.borderColor} rounded-2xl blur opacity-100 `}
      />

      {/* Card content */}
      <div className="relative flex flex-col h-full bg-black rounded-2xl p-6 overflow-hidden">
        {/* Dot pattern with mask */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(${colors.dotColor} 3px, transparent 3px),
              radial-gradient(${colors.dotColor} 3px, transparent 3px)
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
        <div className="text-center mb-16">
          <h1 className="heading">
            Industries <span className="text-red-700">We Touched With</span>
          </h1>
          <p className="text-gray-400 text-lg text-center md:mt-10 my-5">
            We have worked with a diverse range of industries and helped them
            grow their business with our cutting-edge solutions.
          </p>
        </div>
        {/* Grid Layout Applied */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl border border-neutral-700 transition-all duration-300  mx-auto
              p-[2px]
              ${index === 0 ? "md:col-span-1 lg:col-span-1" : ""} 
              ${index === 1 ? "md:col-span-1 lg:col-span-2" : ""} 
              ${index > 1 ? "md:col-span-1 lg:col-span-1" : ""}`}
            >
              <IndustryCard {...industry} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Industries;
