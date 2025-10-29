import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image from "../assets/image.png";

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Toggle modal open/close
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    // Prevent background scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";

        // Allow closing modal with Escape key
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isModalOpen) setIsModalOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    // CV Download
    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href =
            "https://drive.google.com/file/d/1UntHx0nHdmIofzR9ykl4ZYaba9T4nBEu/view?usp=drive_link";
        link.download = "William_Sisulu_Odhiambo_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="section bg-white dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="section-title">About Me</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* === LEFT COLUMN WITH IMAGE & PLAY BUTTON === */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative flex justify-center"
                    >
                        {/* Main Image */}
                        <img
                            src={image}
                            alt="William Odhiambo"
                            className="rounded-2xl shadow-lg w-90 h-90 object-cover border-4 border-blue-600 dark:border-blue-400"
                        />

                        {/* Play Button Overlay */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center rounded-2xl 
              bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                            onClick={toggleModal}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Ripple Effect */}
                            <span className="absolute w-20 h-20 rounded-full bg-blue-600 opacity-50 animate-ping"></span>

                            {/* Glow Effect */}
                            <motion.div
                                className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-5 shadow-xl"
                                whileHover={{
                                    scale: 1.2,
                                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.8)",
                                }}
                            >
                                <i className="bx bx-play text-4xl"></i>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* === RIGHT COLUMN CONTENT === */}
                    <div>
                        <p className="text-lg mb-6 text-center md:text-left">
                            William Odhiambo is a tech enthusiast and problem-solver passionate
                            about building solutions that make life easier for businesses and
                            individuals. His experience has strengthened his skills in software
                            development and cybersecurity while fueling his desire to create
                            scalable, Africa-first solutions.
                        </p>

                        <p className="text-lg mb-6">
                            At his core, William is driven by a vision to see African innovation
                            thrive globally. He also hopes to grow ventures into impactful
                            brands that not only serve clients but also inspire and support
                            other young innovators. His journey is guided by continuous
                            learning, collaboration and a belief that technology should be a
                            force for positive change.
                        </p>

                        {/* Contact Info */}
                        <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center">
                                <i className="bx bx-map text-blue-600 mr-2"></i>
                                <span>Kenya</span>
                            </div>
                            <div className="flex items-center">
                                <i className="bx bx-envelope text-blue-600 mr-2"></i>
                                <span>williamsisulu2003@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <i className="bx bx-phone text-blue-600 mr-2"></i>
                                <span>+254711160437</span>
                            </div>
                        </div>

                        {/* Social Links + CV Download */}
                        <div className="flex space-x-4">
                            <a href="https://wa.me/254711160437?text=Hi%20William%2C%20I'm%20interested%20in%20your%20services!" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                                <i className="bx bxl-whatsapp"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/william-odhiambo-481689265"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                            >
                                <i className="bx bxl-linkedin-square"></i>
                            </a>
                            <a
                                href="https://github.com/i-william17"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                            >
                                <i className="bx bxl-github text-2xl"></i>
                            </a>
                            <a
                                href="mailto:williamsisulu2003@gmail.com"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <i className="bx bx-envelope text-2xl"></i>
                            </a>
                            <button
                                onClick={handleDownloadCV}
                                className="flex items-center gap-2 px-6 py-3 ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <i className="bx bx-download text-xl"></i>
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>

                {/* === Stats Section === */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                    <div className="card text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
                        <div className="text-gray-600 dark:text-gray-400">
                            Years Experience
                        </div>
                    </div>
                    <div className="card text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                        <div className="text-gray-600 dark:text-gray-400">
                            Projects Completed
                        </div>
                    </div>
                    <div className="card text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                        <div className="text-gray-600 dark:text-gray-400">Technologies</div>
                    </div>
                    <div className="card text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                        <div className="text-gray-600 dark:text-gray-400">
                            Certifications
                        </div>
                    </div>
                </div>
            </div>

            {/* === MODAL === */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-black/80 to-black/70 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleModal}
                    >
                        <motion.div
                            className="bg-white dark:bg-gray-900 rounded-2xl p-6 relative max-w-5xl w-[90%] mx-4 shadow-2xl z-50"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                        >
                            {/* Close Button */}
                            <button
                                onClick={toggleModal}
                                className="absolute -top-6 -right-6 z-50 
                     bg-black/70 hover:bg-black/90 text-white 
                     rounded-full w-12 h-12 flex items-center justify-center
                     shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <i className="bx bx-x text-3xl"></i>
                            </button>

                            {/* Video Player */}
                            <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video z-10">
                                <iframe
                                    className="w-full h-full rounded-xl"
                                    src="https://www.youtube.com/embed/m1YKJjQVCVo"
                                    title="Elevator Pitch Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Caption/Description */}
                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                    William Odhiambo - Elevator Pitch
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                    A quick introduction about my journey and vision in tech.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default About;
