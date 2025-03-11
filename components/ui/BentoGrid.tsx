import { useState, useCallback } from "react";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText("systemr@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(29, 4, 7)",
        backgroundColor:
          "linear-gradient(90deg, rgb(29, 4, 4) 0%, rgb(35, 12, 12) 100%)",
      }}
    >
      {/* Image Wrapper */}
      <div className={`${id === 6 && "flex justify-center"} h-full relative`}>
        {img && (
          <Image
            src={img}
            alt="Main Image"
            layout="fill"
            objectFit="cover"
            className={cn(imgClassName, "object-cover object-center")}
            priority={id === 1} // Prioritize the first image for better performance
          />
        )}
        {spareImg && (
          <Image
            src={spareImg}
            alt="Spare Image"
            layout="fill"
            objectFit="cover"
            className="object-cover object-center"
          />
        )}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>
        <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
          {title}
        </div>

        {/* GitHub Globe */}
        {id === 1 && <GridGlobe />}

        {/* Tech Stack List */}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              {leftLists.map((item, i) => (
                <span
                  key={i}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                  lg:opacity-100 rounded-lg text-center bg-[#2e1019]"
                >
                  {item}
                </span>
              ))}
              <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#2e1010]"></span>
            </div>
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#2e1010]"></span>
              {rightLists.map((item, i) => (
                <span
                  key={i}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                  lg:opacity-100 rounded-lg text-center bg-[#2e1010]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Copy Email Button */}
        {id === 6 && (
          <div className="mt-5 relative">
            <div
              className={`absolute -bottom-5 right-0 ${
                copied ? "block" : "hidden"
              }`}
            >
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>

            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        )}
      </div>
    </div>
  );
};
