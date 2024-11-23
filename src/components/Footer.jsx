import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-black py-8 sm:px-10 px-5 text-gray-400">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-6">
          <p className="text-sm text-gray-50">
            More ways to shop:{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 underline transition-colors"
            >
              Find an Apple Store
            </a>{" "}
            or{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 underline transition-colors"
            >
              other retailer
            </a>{" "}
            near you.
          </p>
          <p className="text-sm text-gray-50">
            Or call{" "}
            <a
              href="tel:0008000401966"
              className="font-medium text-blue-500 hover:text-blue-400 underline transition-colors"
            >
              000800-040-1966
            </a>
          </p>
        </div>

        <div className="border-t border-gray-600 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-gray-500">
            Copyright © {new Date().getFullYear()} Apple Inc. All rights
            reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {footerLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href="#"
                  className="text-xs hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
                {index !== footerLinks.length - 1 && (
                  <span className="text-gray-500 text-xs">|</span>
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
