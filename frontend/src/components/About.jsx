import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image from "../assets/potrait1.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const imageWrapRef = useRef(null);
  const contentRef = useRef(null);
  const contactRef = useRef(null);
  const socialRef = useRef(null);
  const statsRef = useRef(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 78%",
          end: "top 20%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        aboutRef.current,
        {
          y: 90,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "none",
        },
        0
      )
        .fromTo(
          titleRef.current,
          {
            y: 70,
            opacity: 0,
            letterSpacing: "0.12em",
          },
          {
            y: 0,
            opacity: 1,
            letterSpacing: "0em",
            ease: "none",
          },
          0.05
        )
        .fromTo(
          imageWrapRef.current,
          {
            x: -90,
            y: 60,
            opacity: 0,
            scale: 0.88,
            rotate: -4,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            ease: "none",
          },
          0.12
        )
        .fromTo(
          contentRef.current,
          {
            x: 90,
            y: 50,
            opacity: 0,
            scale: 0.96,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "none",
          },
          0.16
        )
        .fromTo(
          ".about-paragraph",
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            ease: "none",
          },
          0.25
        )
        .fromTo(
          contactRef.current,
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "none",
          },
          0.36
        )
        .fromTo(
          socialRef.current,
          {
            y: 35,
            opacity: 0,
            scale: 0.92,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "none",
          },
          0.42
        )
        .fromTo(
          ".about-stat-card",
          {
            y: 70,
            opacity: 0,
            scale: 0.86,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: {
              each: 0.08,
              from: "center",
            },
            ease: "none",
          },
          0.55
        );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";

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

  const modalContent = (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-gradient-to-b from-black/80 to-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleModal}
        >
          <motion.div
            className="relative w-[90%] max-w-5xl rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900"
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute -right-4 -top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-black/90 md:-right-6 md:-top-6"
            >
              <i className="bx bx-x text-3xl"></i>
            </button>

            {/* Video Player */}
            <div className="relative z-10 aspect-video overflow-hidden rounded-xl shadow-lg">
              <iframe
                className="h-full w-full rounded-xl"
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

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                A quick introduction about my journey and vision in tech.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <section
        id="about"
        ref={aboutRef}
        className="section bg-white dark:bg-gray-800 overflow-hidden will-change-transform"
      >
        <div className="container mx-auto px-6">
          <h2 ref={titleRef} className="section-title will-change-transform">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* === LEFT COLUMN WITH IMAGE & PLAY BUTTON === */}
            <div
              ref={imageWrapRef}
              className="relative flex justify-center will-change-transform"
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
            </div>

            {/* === RIGHT COLUMN CONTENT === */}
            <div ref={contentRef} className="will-change-transform">
              <p className="about-paragraph text-lg mb-6 text-center md:text-left">
                William Odhiambo is a tech enthusiast and problem-solver
                passionate about building solutions that make life easier for
                businesses and individuals. His experience has strengthened his
                skills in software development and cybersecurity while fueling
                his desire to create scalable, Africa-first solutions.
              </p>

              <p className="about-paragraph text-lg mb-6">
                At his core, William is driven by a vision to see African
                innovation thrive globally. He also hopes to grow ventures into
                impactful brands that not only serve clients but also inspire and
                support other young innovators. His journey is guided by
                continuous learning, collaboration and a belief that technology
                should be a force for positive change.
              </p>

              {/* Contact Info */}
              <div ref={contactRef} className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <i className="bx bx-map text-blue-600 mr-2"></i>
                  <span>Kenya</span>
                </div>

                <div className="flex items-center">
                  <i className="bx bx-envelope text-blue-600 mr-2"></i>
                  <span>info@williamwritescode.com</span>
                </div>

                <div className="flex items-center">
                  <i className="bx bx-phone text-blue-600 mr-2"></i>
                  <span>+254711160437</span>
                </div>
              </div>

              {/* Social Links + CV Download */}
              <div
                ref={socialRef}
                className="flex flex-wrap items-center gap-4 will-change-transform"
              >
                <a
                  href="https://wa.me/254711160437?text=Hi%20William%2C%20I'm%20interested%20in%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                >
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
                  href="mailto:info@williamwritescode.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="bx bx-envelope text-2xl"></i>
                </a>

                <button
                  onClick={handleDownloadCV}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <i className="bx bx-download text-xl"></i>
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* === Stats Section === */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            <div className="about-stat-card card text-center will-change-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">4+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>

            <div className="about-stat-card card text-center will-change-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Projects Completed
              </div>
            </div>

            <div className="about-stat-card card text-center will-change-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Technologies
              </div>
            </div>

            <div className="about-stat-card card text-center will-change-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Certifications
              </div>
            </div>
          </div>
        </div>
      </section>

      {typeof document !== "undefined" &&
        createPortal(modalContent, document.body)}
    </>
  );
};

export default About;