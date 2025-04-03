import React, { useEffect, useRef } from "react";

function AboutP() {
  const containerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const scrollPercentage = (scrollPosition / maxScroll) * 100;

      // Calculate maximum scroll distance based on image width
      const maxScrollDistance =
        (row1Ref.current?.scrollWidth || 0) -
        (row1Ref.current?.clientWidth || 0);
      const currentScroll = (maxScrollDistance * scrollPercentage) / 100;

      if (row1Ref.current) row1Ref.current.scrollLeft = currentScroll;
      if (row2Ref.current)
        row2Ref.current.scrollLeft = maxScrollDistance - currentScroll; // Reverse direction
      if (row3Ref.current) row3Ref.current.scrollLeft = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = {
    row1: [
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=200&fit=crop",
    ],
    row2: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1503437313881-503a91226402?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
    ],
    row3: [
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&h=200&fit=crop",
    ],
  };

  return (
    <div ref={containerRef} className="relative min-h-[80vh]">
      {/* Image Rows Container */}
      <div className="absolute inset-0 flex flex-col justify-center space-y-6">
        <div ref={row1Ref} className="flex overflow-hidden scrollbar-hide">
          {[...images.row1, ...images.row1, ...images.row1].map(
            (src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-[300px] h-[200px] object-cover flex-shrink-0"
              />
            )
          )}
        </div>
        <div ref={row2Ref} className="flex overflow-hidden scrollbar-hide">
          {[...images.row2, ...images.row2, ...images.row2].map(
            (src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-[300px] h-[200px] object-cover flex-shrink-0"
              />
            )
          )}
        </div>
        <div ref={row3Ref} className="flex overflow-hidden scrollbar-hide">
          {[...images.row3, ...images.row3, ...images.row3].map(
            (src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-[300px] h-[200px] object-cover flex-shrink-0"
              />
            )
          )}
        </div>
      </div>

      {/* Dark Overlay with About Text (Overlaying Images) */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-blue-400 text-lg font-medium mb-4">About US</h2>
          <h1 className="text-white text-5xl font-bold mb-8">Hi There!</h1>
          <p className="text-gray-300 text-xl leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sed
            aut totam nesciunt. Doloribus possimus, alias expedita temporibus
            illo ab quidem dignissimos maxime corrupti harum commodi qui
            pariatur ad? Enim?
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Let&apos;s Connect
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutP;
