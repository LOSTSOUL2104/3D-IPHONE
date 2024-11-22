import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-lg">
      <nav className="flex items-center justify-between max-w-6xl mx-auto py-4 px-6">
        <div className="transition-transform hover:scale-110">
          <img
            src={appleImg}
            alt="Apple logo"
            className="w-5 h-6 object-contain"
          />
        </div>
        <div className=" md:flex items-center space-x-6">
          {navLists.map((nav) => (
            <a
              key={nav}
              href="#"
              className="text-gray-300 text-sm font-medium 
                         hover:text-white 
                         transition-colors 
                         duration-300 
                         relative 
                         group"
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
