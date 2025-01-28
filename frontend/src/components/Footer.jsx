import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} India Is Innovating. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="#"
            className="text-white hover:text-blue-400 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
