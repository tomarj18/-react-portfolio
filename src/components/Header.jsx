import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="#home" className="hover:text-blue-400 transition-colors">
             Shaniece Dunkley
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl" aria-label="Toggle menu">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a
              href="#home"
              className="block hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>

            <a
              href="#about"
              className="block hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>

            <a
              href="#projects"
              className="block hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>

            <a
              href="#contact"
              className="block hover:text-blue-400 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
