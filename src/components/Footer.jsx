// components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">William Sisulu Odhiambo</h3>
            <p className="text-gray-400">A lover of good code.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/william-odhiambo-481689265" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="bx bxl-linkedin text-2xl"></i>
            </a>
            <a href="https://github.com/i-william17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <i className="bx bxl-github text-2xl"></i>
            </a>
            <a href="mailto:williamsisulu2003@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <i className="bx bx-envelope text-2xl"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} William Sisulu Odhiambo. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#hero" className="text-gray-400 hover:text-white text-sm transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;