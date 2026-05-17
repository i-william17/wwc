// components/Experience.js
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      position: "Founder",
      company: "SeptaGreen Africa",
      location: "Kenya",
      period: "July 2025 - Present",
      description:
        "Leading a mission focused on empowering Africa's digital future through three core wings: Cybersecurity, Technology Solutions, and Data Science & Analytics.",
      responsibilities: [
        "Providing affordable, secure, and scalable services from threat monitoring to software development",
        "Developing AI-powered analytics designed to protect, connect, and uplift individuals, SMEs, and enterprises across Africa and beyond",
        "Overseeing strategic direction and business development",
      ],
    },
    {
      position: "Full Stack Software Engineer & Robotics Trainer",
      company: "Afribot Robotics Africa Limited",
      location: "Mombasa, Kenya",
      period: "July 2024 – September 2025",
      description:
        "Played a pivotal role in training and developing robotics and software engineering skills.",
      responsibilities: [
        "Collaborated with management and internal partners to streamline software application design",
        "Leveraged ROS (Robot Operating System) for effective robot programming",
        "Gained valuable experience with various frontend and backend frameworks",
        "Trained individuals in robotics and software development principles",
      ],
    },
    {
      position: "Intern",
      company: "Afribot Robotics Africa Limited",
      location: "Mombasa, Kenya",
      period: "May 2024 – July 2024",
      description:
        "Collaborated with a team of engineers to develop software solutions in a practical environment.",
      responsibilities: [
        "Enhanced coding skills through hands-on projects",
        "Improved attention to detail and problem-solving abilities",
        "Contributed to the successful completion of multiple projects",
        "Fostered a strong sense of teamwork and collaboration",
      ],
    },
    {
      position: "Software Developer Volunteer",
      company: "IOME001",
      location: "Mombasa, Kenya",
      period: "March 2024 – April 2024",
      description:
        "Volunteered for IOME001 Mombasa in partnership with TuDelft University in the Netherlands.",
      responsibilities: [
        "Aided in designing an electric microscope that uses Raspberry Pi and Arduinos",
        "Collaborated with international team members on innovative technology solutions",
        "Applied software development skills to scientific instrumentation",
      ],
    },
  ];

  const accents = [
    {
      name: "Teal",
      hex: "#008080",
      text: "text-[#008080]",
      bg: "bg-[#008080]",
      border: "border-[#008080]",
      soft: "bg-[#008080]/10",
    },
    {
      name: "Deep Blue",
      hex: "#003366",
      text: "text-[#003366]",
      bg: "bg-[#003366]",
      border: "border-[#003366]",
      soft: "bg-[#003366]/10",
    },
    {
      name: "Forest Green",
      hex: "#228B22",
      text: "text-[#228B22]",
      bg: "bg-[#228B22]",
      border: "border-[#228B22]",
      soft: "bg-[#228B22]/10",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 50,
      });

      gsap.set(".experience-item", {
        opacity: 0,
        y: 90,
        scale: 0.96,
        rotateX: 8,
        transformPerspective: 1200,
        transformOrigin: "center bottom",
      });

      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.to(".experience-item", {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.9,
        stagger: 0.16,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });

      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        cardsRef.current.forEach((card, index) => {
          if (!card) return;

          ScrollTrigger.create({
            trigger: card,

            /*
              MOBILE FIX:
              Opens later and stays active longer.
              This prevents the next card from opening too early.
            */
            start: "top 18%",
            end: "bottom 12%",
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });
        });
      });

      mm.add("(min-width: 768px)", () => {
        cardsRef.current.forEach((card, index) => {
          if (!card) return;

          ScrollTrigger.create({
            trigger: card,

            /*
              DESKTOP:
              Keeps the original behavior because desktop was already okay.
            */
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });
        });
      });

      ScrollTrigger.refresh();

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="section-title will-change-transform">
          Professional Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isActive = activeIndex === index;
            const accent = accents[index % accents.length];

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="experience-item relative min-h-[44vh] md:min-h-[42vh] pl-8 md:pl-12 will-change-transform"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-2 z-10 h-6 w-6 rounded-full transition-all duration-500 ${isActive
                      ? `${accent.bg} scale-125 shadow-lg`
                      : "bg-gray-400 dark:bg-gray-700"
                    }`}
                />

                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-blue-200 dark:bg-gray-700" />
                )}

                <div
                  className={`sticky top-20 md:top-24 card border-2 bg-gray-200 text-gray-900 dark:bg-black dark:text-white transition-all duration-700 ${isActive
                      ? `${accent.border} shadow-2xl`
                      : "border-gray-300 dark:border-gray-800 shadow-lg"
                    }`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-950 dark:text-white">
                        {exp.position}
                      </h3>

                      <p
                        className={`text-lg font-semibold ${accent.text} dark:text-white`}
                      >
                        {exp.company}
                      </p>

                      <p className="text-gray-700 dark:text-gray-400">
                        {exp.location}
                      </p>
                    </div>

                    <div
                      className={`mt-4 md:mt-0 px-3 py-1 text-sm rounded-full font-medium transition-all duration-500 ${isActive
                          ? `${accent.bg} text-white`
                          : "bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                        }`}
                    >
                      {exp.period}
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-700 ease-in-out ${isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mb-4 text-gray-800 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {exp.responsibilities &&
                        exp.responsibilities.length > 0 && (
                          <div>
                            <h4 className="font-medium mb-2 text-gray-950 dark:text-white">
                              Key Responsibilities:
                            </h4>

                            <ul className="list-disc list-inside space-y-2 pl-5">
                              {exp.responsibilities.map((responsibility, i) => (
                                <li
                                  key={i}
                                  className="text-gray-700 dark:text-gray-400"
                                >
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>
                  </div>

                  {!isActive && (
                    <div className="mt-4 flex items-center justify-between border-t border-gray-300 pt-4 dark:border-gray-800">
                      <span className="text-sm text-gray-600 dark:text-gray-500">
                        Scroll to open
                      </span>

                      <i
                        className={`bx bx-chevron-down text-2xl ${accent.text} dark:text-gray-300`}
                      ></i>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;