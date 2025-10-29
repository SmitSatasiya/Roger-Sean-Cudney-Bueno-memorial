import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#EFF7FF] text-white font-poppins">
      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-0">
        <div className="flex items-center justify-between h-[75px]">
          {/* Left side menu (desktop) */}
          <div className="hidden md:flex space-x-10 text-black">
            {["Home", "Gallery", "Memories"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-normal text-[18px] relative group transition-all duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-[-3px] w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none transition-all duration-300"
            >
              {menuOpen ? (
                <svg
                  className="h-6 w-6 transition-transform duration-300 rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown with smooth animation */}
      <div
        className={`md:hidden bg-[#EFF7FF] overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100 py-3 border-t border-gray-200" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-6 space-y-3">
          {["Home", "Program", "Gallery", "Memories"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-black text-[18px] font-normal hover:text-gray-600 transition-colors duration-300"
              onClick={() => setMenuOpen(false)} // closes menu when clicked
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
