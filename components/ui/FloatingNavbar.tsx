"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const router = useRouter();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      // ✅ Section navigation (smooth scrolling)
      const section = document.getElementById(href.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        // If not on home, navigate first
        router.push(`/${href}`);
        setTimeout(() => {
          document
            .getElementById(href.substring(1))
            ?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    } else {
      // ✅ Full page navigation
      router.push(href);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <div className="absolute top-[-1.5rem] left-4 z-20 ">
        <Link href="/">
          <img
            src="/SystemR_logo.png"
            alt="Logo"
            className="w-[6rem] h-[6rem] md:w-[10rem] md:h-[10rem] cursor-pointer"
          />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "flex max-w-fit lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg border border-black/10 shadow items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          background: "rgba(22, 3, 3, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(229, 9, 20, 1)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigation(navItem.link)}
            className="text-sm !cursor-pointer dark:text-neutral-50 hover:text-neutral-500"
          >
            {navItem.name}
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
