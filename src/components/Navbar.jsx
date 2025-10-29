import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#EFF7FF] text-white font-poppins">
            <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-0">
                <div className="flex items-center justify-between h-[75px]">
                    {/* Left side menu (desktop) */}
                    <div className="hidden md:flex space-x-10 text-black">
                        <a href="#home" className="font-normal text-[18px]">
                            Home
                        </a>
                        <a href="#program" className="font-normal text-[18px]">
                            Program
                        </a>
                        <a href="#gallery" className="font-normal text-[18px]">
                            Gallery
                        </a>
                        <a href="#memories" className="font-normal text-[18px]">
                            Memories
                        </a>
                    </div>

                    {/* Mobile Toggle Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none"
                        >
                            {menuOpen ? (
                                <svg
                                    className="h-6 w-6"
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
                                    className="h-6 w-6"
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

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-[#EFF7FF] px-6 py-3 space-y-3 border-t border-gray-200">
                    <a href="#home" className="block text-black text-[18px] font-normal">
                        Home
                    </a>
                    <a href="#program" className="block text-black text-[18px] font-normal">
                        Program
                    </a>
                    <a href="#gallery" className="block text-black text-[18px] font-normal">
                        Gallery
                    </a>
                    <a href="#memories" className="block text-black text-[18px] font-normal">
                        Memories
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
