import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import ContactUS from "./contactUS"; // Import the Contact Form
import Socialmedia from "./socialmedia";
const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10 relative" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-red-700">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>
        <a href="mailto:systemr@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Contact Form Section */}
      <div className="flex justify-center mt-5">
        <ContactUS />
      </div>

      <div className="flex mt-5 md:flex-row flex-col gap-4 justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6">
          <Socialmedia />
        </div>
        <p className="md:text-base text-sm md:font-normal font-light">
          Created by DreamGuys
        </p>
      </div>
    </footer>
  );
};

export default Footer;
