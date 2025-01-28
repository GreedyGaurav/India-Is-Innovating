import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-3xl font-extrabold flex items-center">
            <span className="text-white mr-2">🚀</span>
            India Is Innovating
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex justify-center flex-grow space-x-8 text-lg">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link
              to="/events"
              className="hover:text-white transition-colors duration-200"
            >
              Events
            </Link>
            <Link
              to="/register"
              className="hover:text-white transition-colors duration-200"
            >
              Register
            </Link>
            <Link
              to="/contact"
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Right-aligned Buttons (Login & Register) */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white hover:text-white focus:text-white transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white hover:text-white focus:text-white transition-colors duration-200"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={toggleMenu}
            >
              <span className="material-icons text-white">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`flex flex-col space-y-4 md:hidden mt-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="block text-center py-2 hover:bg-gray-800 rounded-md text-white"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="block text-center py-2 hover:bg-gray-800 rounded-md text-white"
          >
            Events
          </Link>
          <Link
            to="/register"
            className="block text-center py-2 hover:bg-gray-800 rounded-md text-white"
          >
            Register
          </Link>
          <Link
            to="/contact"
            className="block text-center py-2 hover:bg-gray-800 rounded-md text-white"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="block text-center py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block text-center py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-white"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
