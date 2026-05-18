// components/Header.js
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-me-1.png";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/pricing", label: "Pricing" },
    { to: "/pictorial", label: "Pictorial" },
    { to: "/contact", label: "Contact" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getDesktopLinkClass = ({ isActive }) =>
    `relative transition-colors group ${
      isActive
        ? "text-blue-600 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    }`;

  const getMobileLinkClass = ({ isActive }) =>
    `transition-colors py-2 ${
      isActive
        ? "text-blue-600 dark:text-blue-400"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    }`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="text-xl font-bold text-blue-600"
          aria-label="Go to homepage"
        >
          <img
            src={logo}
            alt="William Odhiambo"
            className={`w-36 h-auto transition-all duration-500 ${
              isScrolled ? "h-10" : "h-12"
            } ${darkMode ? "filter invert brightness-0" : ""}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
            <NavLink key={index} to={item.to} className={getDesktopLinkClass}>
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:scale-110"
            aria-label="Toggle dark mode"
            type="button"
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
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            type="button"
          >
            <i
              className={`bx ${
                isMobileMenuOpen ? "bx-x" : "bx-menu"
              } text-xl`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 py-4 shadow-lg" : "max-h-0 py-0"
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={getMobileLinkClass}
              onClick={closeMobileMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;