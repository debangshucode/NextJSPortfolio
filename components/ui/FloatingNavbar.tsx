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
        setVisible(false);
      } else {
        setVisible(true);
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
        const yOffset = -80; // Adjust based on your navbar height
        const y =
          section.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });

        // ✅ Update URL without full page reload
        window.history.pushState(null, "", href);
      } else {
        // Navigate to home if not already there
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

            // ✅ Ensure URL updates after navigation
            window.history.pushState(null, "", href);
          }
        }, 500);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <div
        className={cn(
          `flex max-w-fit lg:min-w-fit fixed z-[5000] top-[3.5rem] lg:top-10 inset-x-0 mx-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg border border-black/10 shadow items-center justify-center space-x-4 nav-container`,
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none",
          className
        )}
      >
        {navItems.map((navItem, idx) =>
          navItem.link === "/portfolio" ? (
            // Prefetch Portfolio Page
            <Link key={idx} href={navItem.link} prefetch={true}>
              <button className="text-sm cursor-pointer dark:text-neutral-50 hover:text-neutral-500 transition-all duration-300 bg-transparent rounded-md xl:px-4 px-0 hover:bg-red-500 text-white hover:shadow-[0_0_15px_#ff0000]">
                {navItem.name}
              </button>
            </Link>
          ) : (
            // Handle Scrolling for Internal Sections
            <button
              key={idx}
              onClick={() => handleNavigation(navItem.link)}
              className="text-sm cursor-pointer dark:text-neutral-50 hover:text-neutral-500 transition-all duration-300 bg-transparent rounded-md xl:px-4 px-0 hover:bg-red-500 text-white hover:shadow-[0_0_15px_#ff0000]"
            >
              {navItem.name}
            </button>
          )
        )}
      </div>
    </AnimatePresence>
  );
};
