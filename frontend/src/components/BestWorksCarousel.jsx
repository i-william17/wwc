// components/BestWorksCarousel.js
import React, { useEffect, useRef, useState } from "react";

import ghckLogo from "../assets/gulf.png";
import septaLogo from "../assets/nobg.png";
import zivukoLogo from "../assets/zivuko-nobg.png";
import emberLogo from "../assets/ember-logo.png";
import longLogo from "../assets/second.png";
import asiyoLogo from "../assets/asiyo-nobg.png";
import jengaLogo from "../assets/jenga.png";
import wwcLogo from "../assets/logo-me-1.png";
import marketplaceLogo from "../assets/market-2.png";
import williamLogo from "../assets/logo-no.png";
import remunaryLogo from "../assets/1-nobg.png";

const works = [
  {
    id: 1,
    name: "Gulf Medical",
    logo: ghckLogo,
    website: "https://www.ghck.co.ke",
  },
  {
    id: 2,
    name: "SeptaGreen Africa",
    logo: septaLogo,
    website: "https://septagreen.onrender.com",
  },
  {
    id: 3,
    name: "Zivuko Kenya",
    logo: zivukoLogo,
    website: "https://zivuko-marketplace-kenya.onrender.com",
  },
  {
    id: 4,
    name: "Emberprise Africa",
    logo: emberLogo,
    website: "https://emberprise.netlify.app/",
  },
  {
    id: 5,
    name: "Longclause",
    logo: longLogo,
    website: "/about",
  },
  {
    id: 6,
    name: "Asiyo Women Connect",
    logo: asiyoLogo,
    website: "https://www.asiyoconnect.com",
  },
  {
    id: 7,
    name: "JengaWork Kenya",
    logo: jengaLogo,
    website: "/about",
  },
  {
    id: 8,
    name: "William Writes Code",
    logo: wwcLogo,
    website: "/",
  },
  {
    id: 9,
    name: "Asiyo Marketplace",
    logo: marketplaceLogo,
    website: "https://shop.asiyoconnect.com",
  },
  {
    id: 10,
    name: "William Sisulu Odhiambo",
    logo: williamLogo,
    website: "/",
  },
  {
    id: 11,
    name: "Remunary",
    logo: remunaryLogo,
    website: "/about",
  },
];

const BestWorksCarousel = ({
  worksList = works,
  title = "Best Works",
  subtitle = "A quick showcase of selected systems, platforms, and digital products I have worked on.",
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const isPausedRef = useRef(false);

  const duplicatedWorks = [...worksList, ...worksList, ...worksList];

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    const speed = 0.45;

    const animate = () => {
      if (!isPausedRef.current && scrollContainer) {
        scrollPositionRef.current += speed;

        const resetPoint = scrollContainer.scrollWidth / 3;

        if (scrollPositionRef.current >= resetPoint) {
          scrollPositionRef.current = 0;
        }

        scrollContainer.scrollLeft = scrollPositionRef.current;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleWorkClick = (website) => {
    if (!website) return;

    if (website.startsWith("http")) {
      window.open(website, "_blank", "noopener,noreferrer");
      return;
    }

    window.location.href = website;
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 dark:bg-gray-950 sm:py-20">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/5" />
        <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-400/5" />
        <div className="absolute right-10 top-32 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/5" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/80 px-4 py-2 text-sm font-medium text-blue-600 shadow-sm backdrop-blur-md dark:bg-white/5 dark:text-blue-300">
            <i className="bx bx-briefcase-alt-2 text-lg"></i>
            Selected Portfolio Highlights
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Logo-only Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Light mode edge fades only */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-16 bg-gradient-to-r from-white via-white/80 to-transparent dark:hidden sm:w-28" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-white via-white/80 to-transparent dark:hidden sm:w-28" />

          <div
            ref={scrollRef}
            className="overflow-x-hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "auto",
            }}
          >
            <div className="flex items-center gap-12 py-8 sm:gap-16 md:gap-20 lg:gap-24">
              {duplicatedWorks.map((work, index) => (
                <button
                  key={`${work.id}-${index}`}
                  type="button"
                  onClick={() => handleWorkClick(work.website)}
                  title={work.name}
                  aria-label={`View ${work.name}`}
                  className="group flex h-20 w-36 shrink-0 items-center justify-center outline-none transition-all duration-300 hover:-translate-y-1 focus:ring-2 focus:ring-blue-600 focus:ring-offset-4 dark:focus:ring-offset-gray-950 sm:h-24 sm:w-44 md:h-28 md:w-52"
                >
                  <img
                    src={work.logo}
                    alt={`${work.name} logo`}
                    className="max-h-full max-w-full object-contain opacity-100 brightness-100 contrast-125 saturate-150 drop-shadow-md transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-150 group-hover:saturate-200 group-hover:drop-shadow-xl dark:brightness-125 dark:contrast-150 dark:saturate-150 dark:drop-shadow-[0_0_18px_rgba(255,255,255,0.18)]"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-600/30" />
          <span className="h-2 w-2 rounded-full bg-blue-600/50" />
          <span className="h-2 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
          <span className="h-2 w-2 rounded-full bg-purple-600/50" />
          <span className="h-2 w-2 rounded-full bg-purple-600/30" />
        </div>
      </div>
    </section>
  );
};

export default BestWorksCarousel;