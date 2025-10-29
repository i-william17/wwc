// components/Header.js
import React, { useState, useEffect } from 'react';
import logo from "../assets/logo-me-1.png";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo with dark mode inversion */}
        <div className="text-xl font-bold text-blue-600">
          <img 
            src={logo} 
            alt="William Odhiambo" 
            className={`w-36 h-auto transition-all duration-500 ${
              isScrolled ? 'h-10' : 'h-12'
            } ${darkMode ? 'filter invert brightness-0' : ''}`}
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <i className="bx bx-sun text-xl"></i>
            ) : (
              <i className="bx bx-moon text-xl"></i>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <i className={`bx ${isMobileMenuOpen ? 'bx-x' : 'bx-menu'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden bg-white dark:bg-gray-900 transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;