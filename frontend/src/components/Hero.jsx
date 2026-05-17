// components/Hero.js
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import heroVideo from "../assets/code1.mp4";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroVideoRef = useRef(null);

  const roles = ["FULL-STACK SOFTWARE ENGINEER", "CYBERSECURITY ENGINEER"];

  const [typedRole, setTypedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Scroll animation when moving from Hero to the next section
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        })
        .to(
          heroContentRef.current,
          {
            y: -120,
            opacity: 0,
            scale: 0.94,
            ease: "none",
          },
          0
        )
        .to(
          heroVideoRef.current,
          {
            scale: 1.12,
            ease: "none",
          },
          0
        )
        .to(
          ".amoeba-svg",
          {
            y: -80,
            opacity: 0,
            ease: "none",
          },
          0
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Typing role effect
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 45 : 85;
    const pauseBeforeDelete = 1400;
    const pauseBeforeNext = 350;

    let timeout;

    if (!isDeleting && typedRole === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && typedRole === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, pauseBeforeNext);
    } else {
      timeout = setTimeout(() => {
        setTypedRole((prev) => {
          if (isDeleting) {
            return currentRole.substring(0, prev.length - 1);
          }

          return currentRole.substring(0, prev.length + 1);
        });
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [typedRole, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden"
    >
      {/* Fullscreen Video Background */}
      <video
        ref={heroVideoRef}
        className="absolute inset-0 h-full w-full object-cover z-0 will-change-transform"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Video Overlay for readability */}
      <div className="absolute inset-0 bg-white/90 dark:bg-black/70 z-[1]" />

      {/* Amoeba SVG Background */}
      <svg
        className="amoeba-svg absolute top-0 left-0 w-full h-full z-[2] opacity-40 dark:opacity-20 will-change-transform"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="amoebaGradient1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient
            id="amoebaGradient2"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.4" />
          </linearGradient>

          <filter id="amoebaBlur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>

        <path
          className="fill-current text-blue-200 dark:text-blue-900"
          d="M500,400 Q450,300 550,250 Q650,200 700,300 Q750,400 700,500 Q650,600 550,550 Q450,500 500,400 Z"
          filter="url(#amoebaBlur)"
        >
          <animate
            attributeName="d"
            dur="30s"
            repeatCount="indefinite"
            values="M500,400 Q450,300 550,250 Q650,200 700,300 Q750,400 700,500 Q650,600 550,550 Q450,500 500,400 Z;
              M500,400 Q450,350 500,300 Q550,250 600,300 Q650,350 650,450 Q650,550 550,550 Q450,550 500,400 Z;
              M500,400 Q400,350 450,250 Q500,150 600,200 Q700,250 700,400 Q700,550 550,600 Q400,550 500,400 Z;
              M500,400 Q450,300 550,250 Q650,200 700,300 Q750,400 700,500 Q650,600 550,550 Q450,500 500,400 Z"
            keyTimes="0;0.33;0.66;1"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </path>

        <path
          className="fill-current text-purple-200 dark:text-purple-900"
          d="M900,200 Q850,150 950,100 Q1050,50 1100,150 Q1150,250 1100,350 Q1050,450 950,400 Q850,350 900,200 Z"
          filter="url(#amoebaBlur)"
        >
          <animate
            attributeName="d"
            dur="25s"
            repeatCount="indefinite"
            values="M900,200 Q850,150 950,100 Q1050,50 1100,150 Q1150,250 1100,350 Q1050,450 950,400 Q850,350 900,200 Z;
              M900,200 Q800,150 900,50 Q1000,-50 1100,50 Q1200,150 1100,300 Q1000,450 900,350 Q800,250 900,200 Z;
              M900,200 Q950,100 1050,50 Q1150,0 1150,150 Q1150,300 1050,400 Q950,500 900,300 Q850,100 900,200 Z;
              M900,200 Q850,150 950,100 Q1050,50 1100,150 Q1150,250 1100,350 Q1050,450 950,400 Q850,350 900,200 Z"
            keyTimes="0;0.33;0.66;1"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </path>

        <path
          className="fill-current text-green-200 dark:text-green-900"
          d="M200,600 Q150,550 250,500 Q350,450 400,550 Q450,650 350,700 Q250,750 200,650 Q150,550 200,600 Z"
          filter="url(#amoebaBlur)"
        >
          <animate
            attributeName="d"
            dur="28s"
            repeatCount="indefinite"
            values="M200,600 Q150,550 250,500 Q350,450 400,550 Q450,650 350,700 Q250,750 200,650 Q150,550 200,600 Z;
              M200,600 Q100,550 200,450 Q300,350 400,450 Q500,550 400,700 Q300,850 200,700 Q100,550 200,600 Z;
              M200,600 Q250,500 350,450 Q450,400 450,550 Q450,700 350,750 Q250,800 200,650 Q150,500 200,600 Z;
              M200,600 Q150,550 250,500 Q350,450 400,550 Q450,650 350,700 Q250,750 200,650 Q150,550 200,600 Z"
            keyTimes="0;0.33;0.66;1"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </path>

        <path
          className="fill-current text-pink-200 dark:text-pink-900"
          d="M300,300 Q250,250 350,200 Q450,150 500,250 Q550,350 450,400 Q350,450 300,350 Q250,250 300,300 Z"
          filter="url(#amoebaBlur)"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="M300,300 Q250,250 350,200 Q450,150 500,250 Q550,350 450,400 Q350,450 300,350 Q250,250 300,300 Z;
              M300,300 Q200,250 300,150 Q400,50 500,150 Q600,250 500,400 Q400,550 300,400 Q200,250 300,300 Z;
              M300,300 Q350,200 450,150 Q550,100 550,250 Q550,400 450,450 Q350,500 300,350 Q250,200 300,300 Z;
              M300,300 Q250,250 350,200 Q450,150 500,250 Q550,350 450,400 Q350,450 300,350 Q250,250 300,300 Z"
            keyTimes="0;0.33;0.66;1"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </path>

        <path
          className="fill-current text-yellow-200 dark:text-yellow-900"
          d="M1000,500 Q950,450 1050,400 Q1150,350 1150,450 Q1150,550 1050,600 Q950,650 1000,550 Q1050,450 1000,500 Z"
          filter="url(#amoebaBlur)"
        >
          <animate
            attributeName="d"
            dur="22s"
            repeatCount="indefinite"
            values="M1000,500 Q950,450 1050,400 Q1150,350 1150,450 Q1150,550 1050,600 Q950,650 1000,550 Q1050,450 1000,500 Z;
              M1000,500 Q900,450 1000,350 Q1100,250 1150,350 Q1200,450 1100,600 Q1000,750 1000,600 Q1000,450 1000,500 Z;
              M1000,500 Q1050,400 1150,350 Q1250,300 1200,450 Q1150,600 1050,650 Q950,700 1000,550 Q1050,400 1000,500 Z;
              M1000,500 Q950,450 1050,400 Q1150,350 1150,450 Q1150,550 1050,600 Q950,650 1000,550 Q1050,450 1000,500 Z"
            keyTimes="0;0.33;0.66;1"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
          />
        </path>

        <g opacity="0.1">
          <path
            d="M150,150 Q100,100 150,50 Q200,0 200,100 Q200,200 150,150 Z"
            className="fill-current text-blue-300"
          />
          <path
            d="M1050,150 Q1000,100 1050,50 Q1100,0 1100,100 Q1100,200 1050,150 Z"
            className="fill-current text-purple-300"
          />
          <path
            d="M150,650 Q100,600 150,550 Q200,500 200,600 Q200,700 150,650 Z"
            className="fill-current text-green-300"
          />
          <path
            d="M1050,650 Q1000,600 1050,550 Q1100,500 1100,600 Q1100,700 1050,650 Z"
            className="fill-current text-yellow-300"
          />
        </g>
      </svg>

      <div
        ref={heroContentRef}
        className="container mx-auto px-6 text-center relative z-10 will-change-transform"
      >
        <div className="flex flex-col items-center justify-center mb-8 mt-20 space-y-4">
          <div className="relative">
            <p className="large-text text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-gray-800 dark:text-white mb-2">
              WILLIAM
            </p>

            <span
              className="small-text text-xs sm:text-sm md:text-base font-bold text-blue-600 absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap"
              id="webdev"
              aria-live="polite"
            >
              <span className="inline-block min-w-[240px] sm:min-w-[320px] md:min-w-[430px] text-center">
                {typedRole}
                <span className="ml-1 animate-pulse">|</span>
              </span>
            </span>
          </div>

          <div className="relative">
            <p className="large-text text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-gray-800 dark:text-white mb-2">
              SISULU
            </p>

            <span
              className="small-text text-[10px] sm:text-xs md:text-sm font-bold text-blue-600 absolute -bottom-3 right-0 whitespace-nowrap"
              id="portfolio"
            >
              PROFESSIONAL PORTFOLIO
            </span>
          </div>

          <p className="large-text text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-gray-800 dark:text-white mb-2">
            ODHIAMBO
          </p>
        </div>

        <div className="containerr flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 mb-6">
          <p className="autoShow uji bg-gray-100/85 dark:bg-gray-800/85 backdrop-blur-sm px-4 py-2 rounded-xl text-gray-800 dark:text-white text-sm sm:text-base">
            CyberSecurity Engineer
          </p>

          <p className="autoShow uji bg-gray-100/85 dark:bg-gray-800/85 backdrop-blur-sm px-4 py-2 rounded-xl text-gray-800 dark:text-white text-sm sm:text-base">
            Software-Engineer
          </p>

          <p className="autoShow uji bg-gray-100/85 dark:bg-gray-800/85 backdrop-blur-sm px-4 py-2 rounded-xl text-gray-800 dark:text-white text-sm sm:text-base">
            Founder
          </p>
        </div>

        <div className="text autoShow max-w-2xl mx-auto mt-8 text-gray-700 dark:text-gray-200 text-base sm:text-lg px-2">
          Crafting technology that solves problems while safeguarding what matters
          most.
        </div>

        <div
          className="containerr flex flex-wrap justify-center gap-5 sm:gap-6 mt-12"
          id="cont"
        >
          <i className="bx bxl-javascript reveal-icon text-3xl sm:text-4xl text-yellow-500"></i>
          <i className="bx bxl-html5 reveal-icon text-3xl sm:text-4xl text-orange-600"></i>
          <i className="bx bxl-css3 reveal-icon text-3xl sm:text-4xl text-blue-600"></i>
          <i className="bx bxl-typescript reveal-icon text-3xl sm:text-4xl text-blue-700"></i>
          <i className="bx bxl-figma reveal-icon text-3xl sm:text-4xl text-purple-600"></i>
          <i className="bx bxl-nodejs reveal-icon text-3xl sm:text-4xl text-green-600"></i>
          <i className="bx bxl-react reveal-icon text-3xl sm:text-4xl text-blue-400"></i>
          <i className="bx bxl-tailwind-css reveal-icon text-3xl sm:text-4xl text-cyan-400"></i>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a
          href="#about"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
        >
          <i className="bx bx-chevron-down text-3xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;