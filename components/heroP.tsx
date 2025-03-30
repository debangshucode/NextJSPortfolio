import React from "react";

function HeroP() {
  return (
    <div className=" bg-black text-white p-8">
      {/* Navigation */}

      {/* Main Content */}
      <div className="max-w-3xl mt-32">
        <h1 className="text-7xl font-bold mb-8">
          SystemR<span className="text-red-500">.</span>
        </h1>

        <h2 className="text-5xl text-red-500 font-bold mb-8">
          Redefining Digital Excellence
        </h2>

        <div className="space-y-4 text-gray-400 text-xl">
          <p>
            We don’t just build websites—we engineer high-performance, scalable,
            and immersive digital experiences.
          </p>

          <p>
            Fueled by innovation, we push boundaries to create solutions that
            are lightning-fast, intuitive, and future-ready.
          </p>
        </div>

        <button className="mt-12 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg transition-colors">
          Contact
        </button>
      </div>

      {/* Background Pattern */}
      {/* <div className="fixed top-[100px] right-0 w-1/2 h-[75%] pointer-events-none">
        <div className="w-full h-full grid grid-cols-12 gap-4 opacity-20">
          {Array.from({ length: 180 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-700 rounded-full"></div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default HeroP;
