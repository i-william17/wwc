import React from 'react';

const WhatsAppFloatingButton = () => {
  return (
    <a
      href="https://wa.me/254711160437?text=Hi%20William%2C%20I'm%20interested%20in%20your%20services!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
    >
      <i className="bx bxl-whatsapp text-3xl"></i>
    </a>
  );
};

export default WhatsAppFloatingButton;
