"use client";

import { FaEnvelope, FaGlobe } from "react-icons/fa";

const FooterP = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#02182B] text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400 font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Me
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Designs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Websites
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Graphics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Videos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  3D
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <FaEnvelope className="text-gray-400" />
                <a
                  href="mailto:devansh.mmmut@gmail.com"
                  className="hover:text-gray-400"
                >
                  devansh.mmmut@gmail.com
                </a>
              </li>
              <li className="flex justify-center md:justify-start items-center space-x-2">
                <FaGlobe className="text-gray-400" />
                <a
                  href="https://devanshprakash.com"
                  className="hover:text-gray-400"
                >
                  devanshprakash.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          © 2025 Devansh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterP;
