// components/Pictorial.js
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Lottie from "lottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import designAnimation from "../assets/design.json";

import pictorial1 from "../assets/img1.jpeg";
import pictorial2 from "../assets/img2.jpeg";
import pictorial3 from "../assets/img3.jpeg";
import pictorial4 from "../assets/img4.jpeg";
import pictorial5 from "../assets/img5.jpeg";
import pictorial6 from "../assets/img6.jpeg";
import pictorial7 from "../assets/img7.jpeg";
import pictorial8 from "../assets/img8.png";

gsap.registerPlugin(ScrollTrigger);

const Pictorial = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const heroTextWrapRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroTextRef = useRef(null);
  const lottieWrapRef = useRef(null);

  const galleryRef = useRef(null);
  const galleryShellRef = useRef(null);
  const imageStageRef = useRef(null);
  const activeFrameRef = useRef(null);
  const progressRef = useRef(null);

  const waterCanvasRef = useRef(null);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    active: false,
  });
  const ripplesRef = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = useMemo(
    () => [
      {
        id: 1,
        src: pictorial1,
        title: "Focused Work",
        category: "Behind the Build",
        description:
          "Moments of deep work, planning, and execution behind digital products.",
      },
      {
        id: 2,
        src: pictorial2,
        title: "Creative Process",
        category: "Design & Direction",
        description:
          "Exploring visual structure, interface decisions, and product experience.",
      },
      {
        id: 3,
        src: pictorial3,
        title: "Technology in Motion",
        category: "Software Engineering",
        description:
          "Building systems with clarity, scalability, and purpose.",
      },
      {
        id: 4,
        src: pictorial4,
        title: "Cyber Mindset",
        category: "Cybersecurity",
        description:
          "Security thinking, analysis, and digital resilience in practice.",
      },
      {
        id: 5,
        src: pictorial5,
        title: "Training & Impact",
        category: "Community & Learning",
        description:
          "Teaching, mentoring, and using technology to empower people.",
      },
      {
        id: 6,
        src: pictorial6,
        title: "Product Vision",
        category: "Strategy",
        description:
          "Turning early ideas into structured, usable, and valuable products.",
      },
      {
        id: 7,
        src: pictorial7,
        title: "Digital Craft",
        category: "Portfolio",
        description:
          "A collection of visual moments around software, branding, and delivery.",
      },
      {
        id: 8,
        src: pictorial8,
        title: "Building Forward",
        category: "Future Work",
        description:
          "A visual story of growth, execution, and continuous improvement.",
      },
    ],
    []
  );

  const activeImage = images[activeIndex];
  const previousImage = images[(activeIndex - 1 + images.length) % images.length];
  const nextImage = images[(activeIndex + 1) % images.length];

  const goToImage = (index) => {
    setActiveIndex((index + images.length) % images.length);
  };

  const goNext = () => {
    goToImage(activeIndex + 1);
  };

  const goPrev = () => {
    goToImage(activeIndex - 1);
  };

  /*
    HERO WATER / PIXEL-SHADER STYLE BACKGROUND
    No extra package.
    Canvas is intentionally low-resolution, then scaled up with image-rendering.
    This gives the background that premium pixel-shader / liquid-surface feeling.
  */
  useEffect(() => {
    const canvas = waterCanvasRef.current;
    const hero = heroRef.current;

    if (!canvas || !hero) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let animationFrame = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let lastRippleTime = 0;
    let time = 0;

    const resizeCanvas = () => {
      const rect = hero.getBoundingClientRect();

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      /*
        Low internal resolution = shader-like pixel texture.
        The DOM canvas remains full-size through CSS.
      */
      width = Math.max(320, Math.floor(rect.width / 2));
      height = Math.max(320, Math.floor(rect.height / 2));

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const addRipple = (x, y, force = 1) => {
      ripplesRef.current.push({
        x,
        y,
        radius: 4,
        life: 1,
        force,
      });

      if (ripplesRef.current.length > 18) {
        ripplesRef.current.shift();
      }
    };

    const handlePointerMove = (event) => {
      const rect = hero.getBoundingClientRect();

      const x = ((event.clientX - rect.left) / rect.width) * width;
      const y = ((event.clientY - rect.top) / rect.height) * height;

      pointerRef.current.targetX = x;
      pointerRef.current.targetY = y;
      pointerRef.current.active = true;

      const now = performance.now();

      if (now - lastRippleTime > 42) {
        addRipple(x, y, 0.8);
        lastRippleTime = now;
      }
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    const draw = () => {
      time += 0.014;

      const pointer = pointerRef.current;

      pointer.x += (pointer.targetX - pointer.x) * 0.16;
      pointer.y += (pointer.targetY - pointer.y) * 0.16;

      ctx.clearRect(0, 0, width, height);

      const baseGradient = ctx.createLinearGradient(0, 0, width, height);
      baseGradient.addColorStop(0, "rgba(37, 99, 235, 0.08)");
      baseGradient.addColorStop(0.45, "rgba(124, 58, 237, 0.075)");
      baseGradient.addColorStop(1, "rgba(6, 182, 212, 0.07)");

      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);

      /*
        Pixel liquid field.
        We draw small cells instead of smooth full-res gradients.
      */
      const cell = width < 680 ? 16 : 20;

      for (let y = 0; y < height; y += cell) {
        for (let x = 0; x < width; x += cell) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const waveA = Math.sin(x * 0.025 + time * 2.2);
          const waveB = Math.cos(y * 0.027 - time * 1.8);
          const pointerWave = pointer.active
            ? Math.sin(distance * 0.075 - time * 13) *
            Math.max(0, 1 - distance / 260)
            : 0;

          let energy = (waveA + waveB) * 0.5 + pointerWave * 1.65;

          ripplesRef.current.forEach((ripple) => {
            const rx = x - ripple.x;
            const ry = y - ripple.y;
            const rd = Math.sqrt(rx * rx + ry * ry);
            const ring = Math.sin((rd - ripple.radius) * 0.15);
            const falloff = Math.max(0, 1 - Math.abs(rd - ripple.radius) / 70);

            energy += ring * falloff * ripple.life * ripple.force * 1.45;
          });

          const alpha = Math.max(0, Math.min(0.22, 0.055 + energy * 0.05));

          if (alpha > 0.035) {
            const blue = 180 + Math.floor(Math.max(0, energy) * 36);
            const purple = 130 + Math.floor(Math.max(0, energy) * 38);

            ctx.fillStyle = `rgba(${purple}, ${blue}, 255, ${alpha})`;
            ctx.fillRect(x, y, cell - 2, cell - 2);
          }
        }
      }

      /*
        Cursor contact highlight.
      */
      if (pointer.active) {
        const contactGlow = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          210
        );

        contactGlow.addColorStop(0, "rgba(255, 255, 255, 0.18)");
        contactGlow.addColorStop(0.22, "rgba(96, 165, 250, 0.16)");
        contactGlow.addColorStop(0.55, "rgba(168, 85, 247, 0.09)");
        contactGlow.addColorStop(1, "rgba(6, 182, 212, 0)");

        ctx.fillStyle = contactGlow;
        ctx.fillRect(0, 0, width, height);
      }

      ripplesRef.current = ripplesRef.current
        .map((ripple) => ({
          ...ripple,
          radius: ripple.radius + 3.2,
          life: ripple.life * 0.965,
        }))
        .filter((ripple) => ripple.life > 0.04);

      animationFrame = requestAnimationFrame(draw);
    };

    resizeCanvas();

    pointerRef.current.x = width * 0.68;
    pointerRef.current.y = height * 0.42;
    pointerRef.current.targetX = width * 0.68;
    pointerRef.current.targetY = height * 0.42;

    addRipple(width * 0.68, height * 0.42, 0.7);

    window.addEventListener("resize", resizeCanvas);
    hero.addEventListener("pointermove", handlePointerMove);
    hero.addEventListener("pointerleave", handlePointerLeave);

    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", handlePointerLeave);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      gsap.set(heroTextWrapRef.current, {
        opacity: 0,
        x: -80,
        rotate: 0,
        skewX: 0,
        skewY: 0,
        transformOrigin: "center center",
      });

      gsap.set(lottieWrapRef.current, {
        opacity: 0,
        x: 80,
        scale: 0.88,
        rotate: 0,
      });

      gsap.set(heroTitleRef.current, {
        opacity: 0,
        y: 70,
        scale: 1,
        rotate: 0,
        skewX: 0,
        skewY: 0,
        transformOrigin: "left center",
      });

      gsap.set(heroTextRef.current, {
        opacity: 0,
        y: 34,
        rotate: 0,
        skewX: 0,
        skewY: 0,
      });

      gsap.set(".pictorial-hero-action", {
        opacity: 0,
        y: 30,
      });

      gsap.set(galleryRef.current, {
        opacity: 0,
        y: 110,
        scale: 0.96,
      });

      gsap.set(galleryShellRef.current, {
        opacity: 0,
        y: 100,
        rotateX: 9,
        transformPerspective: 1800,
        transformOrigin: "center bottom",
      });

      gsap.set(".pictorial-side-frame", {
        opacity: 0,
        y: 70,
        scale: 0.9,
        rotateY: 0,
      });

      gsap.set(".pictorial-thumb", {
        opacity: 0,
        y: 40,
      });

      gsap.set(".pictorial-depth-card", {
        opacity: 0,
        y: 70,
        rotateX: 14,
        scale: 0.92,
      });

      const introTl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      introTl
        .to(heroTextWrapRef.current, {
          opacity: 1,
          x: 0,
          rotate: 0,
          skewX: 0,
          skewY: 0,
          duration: 0.85,
        })
        .to(
          lottieWrapRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            rotate: 0,
            duration: 1.1,
          },
          "-=0.7"
        )
        .to(
          heroTitleRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            skewX: 0,
            skewY: 0,
            duration: 1,
          },
          "-=0.45"
        )
        .to(
          heroTextRef.current,
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            skewX: 0,
            skewY: 0,
            duration: 0.75,
          },
          "-=0.55"
        )
        .to(
          ".pictorial-hero-action",
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
          },
          "-=0.35"
        );

      /*
        Only the Lottie floats slightly.
        The text remains horizontal and does not slope on scroll.
      */
      gsap.to(lottieWrapRef.current, {
        y: -76,
        scale: 1.035,
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "55% top",
          scrub: 1.35,
        },
      });

      const galleryRevealTl = gsap.timeline({
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 84%",
          end: "top 22%",
          scrub: 1.05,
          invalidateOnRefresh: true,
        },
      });

      galleryRevealTl
        .to(
          galleryRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
          },
          0
        )
        .to(
          galleryShellRef.current,
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            ease: "none",
          },
          0.12
        )
        .to(
          ".pictorial-side-frame",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            ease: "none",
          },
          0.25
        )
        .to(
          ".pictorial-depth-card",
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            stagger: 0.07,
            ease: "none",
          },
          0.3
        )
        .to(
          ".pictorial-thumb",
          {
            opacity: 1,
            y: 0,
            stagger: {
              each: 0.035,
              from: "center",
            },
            ease: "none",
          },
          0.42
        );

      /*
        3D award-site style gallery immersion.
        As the user scrolls, the active image moves toward them,
        side images bend away, and the gallery gains depth.
      */
      const immersiveTl = gsap.timeline({
        scrollTrigger: {
          trigger: galleryShellRef.current,
          start: "top 72%",
          end: "bottom 18%",
          scrub: 1.35,
          invalidateOnRefresh: true,
        },
      });

      immersiveTl
        .to(
          activeFrameRef.current,
          {
            y: -42,
            scale: 1.045,
            rotateX: 0,
            z: 90,
            ease: "none",
          },
          0
        )
        .to(
          imageStageRef.current,
          {
            scale: 1.08,
            y: -24,
            rotateX: -3.5,
            transformPerspective: 1800,
            transformOrigin: "center center",
            ease: "none",
          },
          0
        )
        .to(
          ".pictorial-previous-frame",
          {
            x: -30,
            rotateY: 12,
            rotateX: 2,
            scale: 0.94,
            z: -120,
            ease: "none",
          },
          0
        )
        .to(
          ".pictorial-next-frame",
          {
            x: 30,
            rotateY: -12,
            rotateX: 2,
            scale: 0.94,
            z: -120,
            ease: "none",
          },
          0
        )
        .to(
          ".pictorial-depth-card",
          {
            y: -52,
            rotateX: -7,
            scale: 1.04,
            stagger: 0.03,
            ease: "none",
          },
          0
        )
        .to(
          ".pictorial-gallery-orbit",
          {
            rotate: 8,
            scale: 1.08,
            ease: "none",
          },
          0
        );

      gsap.to(".pictorial-floating-shape", {
        y: -160,
        rotate: 24,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.6,
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4200);

    return () => clearInterval(timer);
  }, [isPaused, images.length]);

  useEffect(() => {
    const stage = imageStageRef.current;
    const progress = progressRef.current;
    const frame = activeFrameRef.current;

    if (!stage) return;

    gsap.fromTo(
      stage,
      {
        opacity: 0,
        scale: 0.965,
        y: 34,
        rotateX: 6,
        filter: "blur(10px)",
        transformPerspective: 1800,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 0.72,
        ease: "power3.out",
      }
    );

    if (frame) {
      gsap.fromTo(
        frame,
        {
          boxShadow:
            "0 24px 80px rgba(37, 99, 235, 0.12), 0 0 0 rgba(124, 58, 237, 0)",
        },
        {
          boxShadow:
            "0 34px 110px rgba(37, 99, 235, 0.18), 0 18px 80px rgba(124, 58, 237, 0.16)",
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }

    gsap.fromTo(
      ".active-image-meta",
      {
        opacity: 0,
        y: 26,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".pictorial-depth-card",
      {
        opacity: 0,
        y: 40,
        rotateX: 10,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.65,
        stagger: 0.06,
        ease: "power3.out",
      }
    );

    if (progress) {
      gsap.fromTo(
        progress,
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 4.2,
          ease: "none",
        }
      );
    }
  }, [activeIndex]);

  return (
    <section
      id="pictorial"
      ref={sectionRef}
      className="relative overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white"
    >
      <style>
        {`
          .pictorial-water-canvas {
            image-rendering: pixelated;
            image-rendering: crisp-edges;
          }

          .pictorial-perspective-scene {
            perspective: 1800px;
            transform-style: preserve-3d;
          }

          .pictorial-preserve-3d {
            transform-style: preserve-3d;
          }

          .pictorial-hero-flat,
          .pictorial-hero-flat * {
            rotate: 0deg;
            skew: 0deg;
            transform-style: flat;
          }

          .pictorial-subtle-grid {
            background-image:
              linear-gradient(rgba(37, 99, 235, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.08) 1px, transparent 1px);
            background-size: 58px 58px;
            mask-image: radial-gradient(circle at 50% 35%, black, transparent 72%);
          }

          .pictorial-glass-edge {
            box-shadow:
              inset 0 1px 0 rgba(255, 255, 255, 0.18),
              inset 0 -1px 0 rgba(255, 255, 255, 0.05);
          }

          .pictorial-gallery-shell {
            transform-style: preserve-3d;
          }

          .pictorial-side-frame,
          .pictorial-main-frame {
            transform-style: preserve-3d;
            backface-visibility: hidden;
          }

          .pictorial-thumb::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {/* HERO */}
      <div
        ref={heroRef}
        className="relative flex min-h-screen items-center overflow-hidden px-4 py-28 sm:px-6 lg:px-8"
      >
        {/* WATER SHADER BACKGROUND */}
        <canvas
          ref={waterCanvasRef}
          className="pictorial-water-canvas pointer-events-none absolute inset-0 h-full w-full opacity-80 mix-blend-normal dark:opacity-90"
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="pictorial-subtle-grid absolute inset-0 opacity-70 dark:opacity-40" />
          <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />
          <div className="pictorial-floating-shape absolute -left-20 bottom-28 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-400/10" />
          <div className="pictorial-floating-shape absolute -right-16 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/10" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent dark:from-gray-950" />
        </div>

        <div className="container relative z-10 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT: HERO TEXT */}
            <div
              ref={heroTextWrapRef}
              className="pictorial-hero-flat order-1"
              style={{
                rotate: "0deg",
                skew: "0deg",
                perspective: "none",
                transformStyle: "flat",
                willChange: "auto",
              }}
            >

              <h1
                ref={heroTitleRef}
                className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-gray-950 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl"
                style={{
                  rotate: "0deg",
                  skew: "0deg",
                  perspective: "none",
                  transformStyle: "flat",
                  willChange: "auto",
                }}
              >
                Pictorial
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  Showcase
                </span>
              </h1>

              <p
                ref={heroTextRef}
                className="mt-8 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl"
                style={{
                  rotate: "0deg",
                  skew: "0deg",
                  perspective: "none",
                  transformStyle: "flat",
                  willChange: "auto",
                }}
              >
                A curated visual story of work, ideas, people, products, and
                moments. This section captures the creative, technical, and
                human side behind the systems I build.
              </p>

              <div
                className="mt-10 flex flex-col gap-4 sm:flex-row"
                style={{
                  rotate: "0deg",
                  skew: "0deg",
                  perspective: "none",
                  transformStyle: "flat",
                  willChange: "auto",
                }}
              >
                <a
                  href="#pictorial-gallery"
                  className="pictorial-hero-action inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700"
                >
                  Explore Gallery
                  <i className="bx bx-down-arrow-alt ml-2 text-xl"></i>
                </a>

                <a
                  href="/contact"
                  className="pictorial-hero-action inline-flex items-center justify-center rounded-full border border-gray-300 bg-white/50 px-8 py-4 font-semibold text-gray-700 backdrop-blur-xl transition-all duration-300 hover:border-blue-600 hover:text-blue-600 dark:border-gray-700 dark:bg-white/5 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                >
                  Work With Me
                </a>
              </div>
            </div>

            {/* RIGHT: BORDERLESS LOTTIE */}
            <div
              ref={lottieWrapRef}
              className="relative order-2 flex min-h-[320px] items-center justify-center lg:min-h-[560px]"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10 sm:h-[460px] sm:w-[460px]" />

              <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.16),transparent_58%)] dark:bg-[radial-gradient(circle_at_50%_45%,rgba(96,165,250,0.12),transparent_60%)]" />

              <Lottie
                animationData={designAnimation}
                loop
                autoplay
                className="relative z-10 h-[320px] w-full max-w-[520px] sm:h-[430px] lg:h-[560px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div
        id="pictorial-gallery"
        ref={galleryRef}
        className="relative px-4 pb-24 pt-10 sm:px-6 lg:px-8"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/5" />

          <div className="absolute right-0 bottom-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-400/5" />

          <div className="pictorial-gallery-orbit absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10 dark:border-blue-400/10" />
        </div>

        <div className="container relative z-10 mx-auto">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-4xl md:text-5xl">
                Visual Moments
              </h2>

              <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
                Scroll, pause, explore, and move through selected images in a
                cinematic gallery built to feel polished, intentional, and alive.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-lg transition-all duration-300 hover:scale-110 hover:border-blue-600 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-400"
                aria-label="Previous image"
              >
                <i className="bx bx-left-arrow-alt text-2xl"></i>
              </button>

              <button
                type="button"
                onClick={goNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-lg transition-all duration-300 hover:scale-110 hover:border-blue-600 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:hover:border-blue-400 dark:hover:text-blue-400"
                aria-label="Next image"
              >
                <i className="bx bx-right-arrow-alt text-2xl"></i>
              </button>
            </div>
          </div>

          <div
            ref={galleryShellRef}
            className="pictorial-gallery-shell pictorial-perspective-scene grid gap-6 lg:grid-cols-[0.75fr_1.5fr_0.75fr]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* PREVIOUS FRAME */}
            <button
              type="button"
              onClick={goPrev}
              className="pictorial-side-frame pictorial-previous-frame group relative hidden overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 shadow-xl dark:border-gray-800 dark:bg-gray-900 lg:block"
            >
              <div className="absolute inset-0 z-10 bg-black/45 transition-all duration-500 group-hover:bg-black/25" />
              <img
                src={previousImage.src}
                alt={previousImage.title}
                className="h-full min-h-[560px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  Previous
                </p>
                <p className="mt-2 text-xl font-black text-white">
                  {previousImage.title}
                </p>
              </div>
            </button>

            {/* ACTIVE CINEMATIC FRAME */}
            <div
              ref={activeFrameRef}
              className="pictorial-main-frame pictorial-glass-edge relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 p-3 shadow-2xl dark:border-gray-800 dark:bg-gray-900 sm:rounded-[3rem] sm:p-4"
            >
              <div className="pointer-events-none absolute -inset-10 z-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(37,99,235,0.16),rgba(124,58,237,0.12),rgba(6,182,212,0.14),rgba(37,99,235,0.16))] blur-3xl" />

              <div className="pictorial-preserve-3d pointer-events-none absolute inset-0 z-10">
                <div className="pictorial-depth-card absolute left-8 right-8 top-8 h-24 rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-md dark:bg-white/5" />

                <div className="pictorial-depth-card absolute bottom-10 left-10 h-28 w-28 rounded-[2rem] border border-blue-300/20 bg-blue-400/10 backdrop-blur-md" />

                <div className="pictorial-depth-card absolute right-10 top-20 h-32 w-32 rounded-full border border-purple-300/20 bg-purple-400/10 backdrop-blur-md" />
              </div>

              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              <div
                ref={imageStageRef}
                className="relative z-10 h-[440px] overflow-hidden rounded-[1.5rem] sm:h-[560px] sm:rounded-[2.5rem] lg:h-[680px]"
              >
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0%,rgba(0,0,0,0.06)_42%,rgba(0,0,0,0.55)_100%)]" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col justify-between gap-6 md:bottom-10 md:left-10 md:right-10 md:flex-row md:items-end">
                <div>
                  <span className="active-image-meta inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                    {activeImage.category}
                  </span>

                  <h3 className="active-image-meta mt-4 text-3xl font-black text-white sm:text-4xl md:text-5xl">
                    {activeImage.title}
                  </h3>

                  <p className="active-image-meta mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                    {activeImage.description}
                  </p>
                </div>

                <div className="min-w-[180px]">
                  <div className="mb-2 flex justify-between text-xs font-semibold text-white/70">
                    <span>{String(activeIndex + 1).padStart(2, "0")}</span>
                    <span>{String(images.length).padStart(2, "0")}</span>
                  </div>

                  <div className="h-1 overflow-hidden rounded-full bg-white/20">
                    <div
                      ref={progressRef}
                      className="h-full w-full origin-left rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* NEXT FRAME */}
            <button
              type="button"
              onClick={goNext}
              className="pictorial-side-frame pictorial-next-frame group relative hidden overflow-hidden rounded-[2rem] border border-gray-200 bg-gray-100 shadow-xl dark:border-gray-800 dark:bg-gray-900 lg:block"
            >
              <div className="absolute inset-0 z-10 bg-black/45 transition-all duration-500 group-hover:bg-black/25" />
              <img
                src={nextImage.src}
                alt={nextImage.title}
                className="h-full min-h-[560px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  Next
                </p>
                <p className="mt-2 text-xl font-black text-white">
                  {nextImage.title}
                </p>
              </div>
            </button>
          </div>

          {/* THUMBNAIL RAIL */}
          <div className="mt-8 overflow-x-auto pb-3">
            <div className="flex min-w-max gap-4">
              {images.map((image, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => goToImage(index)}
                    className={`pictorial-thumb group relative h-24 w-36 shrink-0 overflow-hidden rounded-2xl border transition-all duration-300 sm:h-28 sm:w-44 ${isActive
                      ? "border-blue-600 opacity-100 shadow-xl shadow-blue-600/20"
                      : "border-gray-200 opacity-60 hover:opacity-100 dark:border-gray-800"
                      }`}
                    aria-label={`View ${image.title}`}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div
                      className={`absolute inset-0 transition-all duration-300 ${isActive
                        ? "bg-blue-600/10"
                        : "bg-black/30 group-hover:bg-black/10"
                        }`}
                    />

                    <div className="absolute bottom-2 left-2 right-2 z-10 flex items-center justify-between">
                      <span className="rounded-full bg-black/45 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Pictorial;