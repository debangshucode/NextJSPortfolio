import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <div className="flex justify-between items-center ">
        <div className="w-full">
          <h1 className="heading">
            About <span className="text-red-700">Us</span>
          </h1>
          <p className="text-gray-400 text-lg text-center md:mt-10 my-5">
            We specialize in user-centered design, creating visually striking
            interfaces that enhance both usability and accessibility. Our expert
            developers transform your vision into reality with clean, efficient
            code, delivering a smooth and consistent experience across all
            devices.
          </p>
        </div>
      </div>
      <BentoGrid className="w-full py-2 xl:py-20 ">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
