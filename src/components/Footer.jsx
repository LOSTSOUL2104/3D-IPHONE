import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-black py-8 sm:px-10 px-5 text-[#86868b]">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-6">
          <p className="text-sm">
            More ways to shop:{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Find an Apple Store
            </a>{" "}
            or{" "}
            <a href="#" className="text-blue-600 hover:underline">
              other retailer
            </a>{" "}
            near you.
          </p>
          <p className="text-sm">
            Or call{" "}
            <span className="font-medium hover:cursor-pointer hover:underline text-blue" >000800-040-1966</span>
          </p>
        </div>

        <div className="border-t border-gray-300 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs">
            Copyright © {new Date().getFullYear()} Apple Inc. All rights
            reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link, index) => (
              <React.Fragment key={link}>
                <a
                  href="#"
                  className="text-xs hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
                {index !== footerLinks.length - 1 && (
                  <span className="text-gray-300 text-xs">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
