"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // Hide when scrolling down
      } else {
        setVisible(true); // Show when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      const section = document.getElementById(href.substring(1));
      if (section) {
        const yOffset = -80; // Adjust this based on your navbar height
        const y =
          section.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        router.push(`/${href}`);
        setTimeout(() => {
          const sectionAfterNav = document.getElementById(href.substring(1));
          if (sectionAfterNav) {
            const yOffset = -80;
            const y =
              sectionAfterNav.getBoundingClientRect().top +
              window.scrollY +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 500);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <div className="absolute top-[-3rem] left-1/2 transform -translate-x-1/2 md:left-4 md:transform-none lg:left-4 z-20">
        <Link href="/">
          <img
            src="/SystemR_logo.png"
            alt="Logo"
            width="136"
            height="136"
            className="w-[14.5rem] h-[12.5rem] md:w-[12rem] md:h-[12rem] cursor-pointer"
            loading="lazy" // Ensures efficient loading
          />
        </Link>
      </div>
      <div
        className={cn(
          `flex max-w-fit lg:min-w-fit fixed z-[5000] top-[3.5rem] lg:top-10 inset-x-0 mx-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg border border-black/10 shadow items-center justify-center space-x-4 nav-container`,
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigation(navItem.link)}
            className="text-sm cursor-pointer dark:text-neutral-50 hover:text-neutral-500 transition-all duration-300 
               bg-transparent rounded-md xl:px-4 px-0
               hover:bg-red-500 hover:text-white 
               hover:shadow-[0_0_15px_#ff0000]"
          >
            {navItem.name}
          </button>
        ))}
      </div>
    </AnimatePresence>
  );
};
