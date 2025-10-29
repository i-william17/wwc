// components/Pictorial.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Pictorial = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 2,
      title: "Cybersecurity Dashboard",
      category: "Security",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile Development",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 4,
      title: "AI-Powered Analytics",
      category: "Data Science",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 5,
      title: "Robotics Interface",
      category: "Robotics",
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 6,
      title: "Blockchain Network",
      category: "Web3",
      image:
        "https://images.unsplash.com/photo-1620121684840-edffcfc4b878?auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <section id="pictorial" className="section bg-white dark:bg-gray-900 py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="section-title text-center text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Pictorial Highlights
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 text-lg mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A visual showcase of projects and designs that highlight creativity and technical excellence.
        </motion.p>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-xs font-semibold uppercase tracking-wide bg-blue-600 px-2 py-1 rounded">
                  {img.category}
                </span>
                <h3 className="text-lg font-bold mt-2">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative max-w-3xl w-full p-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
                >
                  ✕
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="mt-4 text-center text-white">
                  <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Pictorial;
