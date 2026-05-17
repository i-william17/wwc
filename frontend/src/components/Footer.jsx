// components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="inline-block text-2xl font-bold hover:text-blue-400 transition-colors"
            >
              William Sisulu Odhiambo
            </Link>

            <p className="text-gray-400 mt-2">A lover of good code.</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/william-odhiambo-481689265"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin text-2xl"></i>
            </a>

            <a
              href="https://github.com/i-william17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <i className="bx bxl-github text-2xl"></i>
            </a>

            <a
              href="mailto:williamsisulu2003@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <i className="bx bx-envelope text-2xl"></i>
            </a>

            <a
              href="https://wa.me/254711160437?text=Hi%20William%2C%20I'm%20interested%20in%20your%20services!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <i className="bx bxl-whatsapp text-2xl"></i>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} William Sisulu Odhiambo. All rights reserved.
          </p>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;