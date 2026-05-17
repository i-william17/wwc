// components/Skills.js
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hardSkills = [
  { name: "Cybersecurity", level: 90 },
  { name: "Mobile App Development", level: 90 },
  { name: "Web Development", level: 95 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "JavaScript", level: 95 },
  { name: "MongoDB", level: 85 },
  { name: "RESTful APIs", level: 90 },
  { name: "UI/UX Design", level: 80 },
  { name: "Git & GitHub", level: 90 },
  { name: "ROS (Robot OS)", level: 75 },
];

const Skills = () => {
  const skillsRef = useRef(null);
  const stairsRef = useRef(null);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const technicalCardRef = useRef(null);
  const professionalCardRef = useRef(null);

  const professionalSkills = [
    "Project Coordination",
    "Public Speaking",
    "Effective Communication",
    "Team Collaboration",
    "Entrepreneurial Thinking",
    "Time Management",
    "Critical Thinking",
    "Problem Solving",
    "Adaptability",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      /*
        EXTRA SMOOTH STAIRS TRANSITION:
        - Stairs begin above the section.
        - They flow downward smoothly in staggered steps.
        - Content appears behind the stairs.
        - Stairs continue downward and exit smoothly.
        - scrub: 2.4 softens fast scrolling.
      */

      gsap.set(".skills-stair", {
        yPercent: -110,
      });

      gsap.set(containerRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.98,
      });

      gsap.set(headerRef.current, {
        opacity: 0,
        y: 50,
      });

      gsap.set([technicalCardRef.current, professionalCardRef.current], {
        opacity: 0,
        y: 80,
        scale: 0.94,
        rotateX: 8,
        transformPerspective: 1200,
        transformOrigin: "center bottom",
      });

      gsap.set(".technical-skill-row", {
        opacity: 0,
        y: 34,
        x: -16,
      });

      gsap.set(".skill-progress-bar", {
        width: "0%",
      });

      gsap.set(".professional-skill-item", {
        opacity: 0,
        y: 42,
        scale: 0.88,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 88%",
          end: "top -18%",
          scrub: 2.4,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        ".skills-stair",
        {
          yPercent: 0,
          stagger: {
            each: 0.095,
            from: "start",
          },
          ease: "none",
        },
        0
      )

        // Content begins revealing behind the stairs
        .to(
          containerRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
          },
          0.28
        )

        .to(
          headerRef.current,
          {
            opacity: 1,
            y: 0,
            ease: "none",
          },
          0.34
        )

        // Stairs continue flowing downward and exit smoothly
        .to(
          ".skills-stair",
          {
            yPercent: 115,
            stagger: {
              each: 0.095,
              from: "start",
            },
            ease: "none",
          },
          0.48
        )

        // Two main cards enter after the stairs reveal starts
        .to(
          technicalCardRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            ease: "none",
          },
          0.56
        )

        .to(
          professionalCardRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            ease: "none",
          },
          0.62
        )

        // Technical rows reveal like smaller stairs
        .to(
          ".technical-skill-row",
          {
            opacity: 1,
            y: 0,
            x: 0,
            stagger: {
              each: 0.04,
              from: "start",
            },
            ease: "none",
          },
          0.68
        )

        // Progress bars fill after the rows appear
        .to(
          ".skill-progress-bar",
          {
            width: (index) => `${hardSkills[index].level}%`,
            stagger: {
              each: 0.04,
              from: "start",
            },
            ease: "none",
          },
          0.76
        )

        // Professional skills reveal in stepped order
        .to(
          ".professional-skill-item",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: {
              each: 0.05,
              from: "start",
              grid: "auto",
            },
            ease: "none",
          },
          0.78
        )

        // Final settled position
        .to(
          containerRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
          },
          0.96
        );

      ScrollTrigger.refresh();
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="section relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 overflow-hidden"
    >
      {/* Downward Stairs Reveal Animation */}
      <div
        ref={stairsRef}
        className="pointer-events-none absolute inset-0 z-20 flex overflow-hidden"
      >
        <div className="skills-stair h-full flex-1 bg-black dark:bg-gray-800" />
        <div className="skills-stair h-full flex-1 bg-black dark:bg-gray-700" />
        <div className="skills-stair h-full flex-1 bg-black dark:bg-gray-800" />
        <div className="skills-stair h-full flex-1 bg-black dark:bg-gray-700" />
        <div className="skills-stair h-full flex-1 bg-black dark:bg-gray-800" />
        <div className="skills-stair h-full flex-1 bg-black dark:bg-gray-700" />
      </div>

      <div
        ref={containerRef}
        className="container relative z-10 mx-auto px-6 will-change-transform"
      >
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 will-change-transform">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Skills & Expertise
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            A blend of technical expertise and professional strengths to build
            secure, scalable, and innovative digital solutions.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Technical Skills */}
          <div
            ref={technicalCardRef}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 will-change-transform"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
              Technical Skills
            </h3>

            <div className="space-y-6">
              {hardSkills.map((skill, index) => (
                <div
                  key={index}
                  className="technical-skill-row will-change-transform"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>

                    <span className="text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div className="skill-progress-bar bg-gradient-to-r from-blue-600 to-blue-400 h-3 rounded-full shadow-inner" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div
            ref={professionalCardRef}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 will-change-transform"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
              Professional Skills
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="professional-skill-item flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 font-medium shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300 will-change-transform"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;