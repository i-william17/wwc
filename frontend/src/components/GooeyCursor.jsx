// components/GooeyCursor.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const GooeyCursor = () => {
  const cursorMainRef = useRef(null);
  const cursorTrailOneRef = useRef(null);
  const cursorTrailTwoRef = useRef(null);
  const cursorTrailThreeRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (prefersReducedMotion || isTouchDevice) return;

    const cursorMain = cursorMainRef.current;
    const trailOne = cursorTrailOneRef.current;
    const trailTwo = cursorTrailTwoRef.current;
    const trailThree = cursorTrailThreeRef.current;

    if (!cursorMain || !trailOne || !trailTwo || !trailThree) return;

    const blobs = [cursorMain, trailOne, trailTwo, trailThree];

    gsap.set(blobs, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      scale: 1,
      transformOrigin: "center center",
    });

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      gsap.to(cursorMain, {
        x,
        y,
        duration: 0.1,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to(trailOne, {
        x,
        y,
        duration: 0.25,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to(trailTwo, {
        x,
        y,
        duration: 0.4,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to(trailThree, {
        x,
        y,
        duration: 0.58,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const handleMouseDown = () => {
      gsap.to(blobs, {
        scale: 0.72,
        duration: 0.18,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const handleMouseUp = () => {
      gsap.to(blobs, {
        scale: 1,
        duration: 0.35,
        ease: "elastic.out(1, 0.45)",
        overwrite: "auto",
      });
    };

    const handleMouseEnterInteractive = () => {
      gsap.to(cursorMain, {
        scale: 1.75,
        duration: 0.25,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to([trailOne, trailTwo, trailThree], {
        scale: 1.35,
        duration: 0.25,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const handleMouseLeaveInteractive = () => {
      gsap.to(blobs, {
        scale: 1,
        duration: 0.25,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const bindInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, select, [role='button']"
      );

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnterInteractive);
        element.addEventListener("mouseleave", handleMouseLeaveInteractive);
      });

      return interactiveElements;
    };

    let interactiveElements = bindInteractiveElements();

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnterInteractive);
        element.removeEventListener("mouseleave", handleMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <svg
        className="pointer-events-none fixed h-0 w-0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter
            id="global-gooey-cursor-filter"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="12"
              result="blur"
            />

            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 28 -10
              "
              result="goo"
            />

            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div
        className="pointer-events-none fixed inset-0 z-[999999] hidden md:block"
        style={{
          filter: "url(#global-gooey-cursor-filter)",
          WebkitFilter: "url(#global-gooey-cursor-filter)",
          mixBlendMode: "difference",
        }}
      >
        <span
          ref={cursorTrailThreeRef}
          className="absolute left-0 top-0 h-7 w-7 rounded-full bg-white opacity-50 will-change-transform"
        />

        <span
          ref={cursorTrailTwoRef}
          className="absolute left-0 top-0 h-8 w-8 rounded-full bg-white opacity-60 will-change-transform"
        />

        <span
          ref={cursorTrailOneRef}
          className="absolute left-0 top-0 h-10 w-10 rounded-full bg-white opacity-75 will-change-transform"
        />

        <span
          ref={cursorMainRef}
          className="absolute left-0 top-0 h-12 w-12 rounded-full bg-white opacity-100 will-change-transform"
        />
      </div>
    </>
  );
};

export default GooeyCursor;