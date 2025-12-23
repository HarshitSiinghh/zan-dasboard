import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#19191A] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
           Zanthium 
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </div>

          {/* User Avatar */}
          <div className="hidden   md:flex">
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-9 h-9 rounded-full border-2 border-gray-600 cursor-pointer hover:border-white transition"
            /> 
            
            <span className=" ml-4 mt-1 text-white cursor-pointer "> Harshit singh</span>          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* User Icon */}
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-8 h-8 rounded-full border border-gray-600"
            />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#19191A] border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">
            <a href="#" className="block text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              About
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
