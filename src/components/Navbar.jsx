import React, { useEffect, useState } from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-lg shadow-xl border-b border-gray-700"
          : "bg-black/50 backdrop-blur-md shadow-md"
      }`}
      style={{
        background: isScrolled ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)", 
      }}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto py-4 px-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-white/50 rounded-full blur-xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-300 opacity-0 group-hover:opacity-70"></div>
          <div className="absolute inset-0 bg-blue-50/30 rounded-full blur-2xl group-hover:blur-3xl group-hover:scale-200 transition-all duration-300 opacity-0 group-hover:opacity-70"></div>
          <div className="absolute inset-0 bg-white rounded-full blur-md group-hover:blur-xl group-hover:scale-125 transition-all duration-300 opacity-0 group-hover:opacity-70"></div>
          <div className="transition-transform hover:scale-110 duration-300 relative">
            <img
              src={appleImg}
              alt="Apple logo"
              className="w-5 h-6 object-contain relative z-10 brightness-200 group-hover:brightness-300"
            />
          </div>
        </div>

        <div className="md:flex items-center space-x-6">
          {navLists.map((nav) => (
            <a
              key={nav}
              href="#"
              className="text-gray-400 text-sm font-medium hover:text-white transition-colors duration-300 relative group"
            >
              {nav}
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-white 
                               group-hover:w-full 
                               transition-all 
                               duration-300"
              ></span>
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white transition-colors">
            <img
              src={searchImg}
              alt="Search"
              className="w-5 h-5 object-contain"
            />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <img
              src={bagImg}
              alt="Shopping Bag"
              className="w-5 h-5 object-contain"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
