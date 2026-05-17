// components/Services.js
import React, {
  useState,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CALENDLY_URL = "https://calendly.com/williamsisulu2003/30min";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consultationType, setConsultationType] = useState("calendly");
  const [isSendingRequest, setIsSendingRequest] = useState(false);

  const [inPersonForm, setInPersonForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    location: "",
    message: "",
  });

  const servicesRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Full-Stack Development",
      description:
        "End-to-end web application development using modern technologies like React, Node.js, and MongoDB. Creating scalable, performant, and user-friendly solutions.",
      icon: "bx bx-code-alt",
      features: [
        "React Applications",
        "Node.js Backend",
        "RESTful APIs",
        "Database Design",
      ],
      color: "from-blue-600 to-blue-700",
    },
    {
      id: 2,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security assessments, vulnerability testing, and implementation of robust security measures to protect your digital assets.",
      icon: "bx bx-shield-alt-2",
      features: [
        "Threat Analysis",
        "Penetration Testing",
        "Security Audits",
        "Risk Management",
      ],
      color: "from-green-600 to-green-700",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.",
      icon: "bx bx-mobile-alt",
      features: [
        "React Native",
        "iOS & Android",
        "UI/UX Design",
        "App Store Deployment",
      ],
      color: "from-purple-600 to-purple-700",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "User-centered design approaches that create intuitive, beautiful, and functional interfaces that enhance user engagement.",
      icon: "bx bx-palette",
      features: [
        "Wireframing",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
      color: "from-pink-600 to-pink-700",
    },
    {
      id: 5,
      title: "DevOps & Cloud Solutions",
      description:
        "Infrastructure automation, CI/CD pipelines, and cloud deployment strategies to ensure reliable and scalable applications.",
      icon: "bx bx-cloud",
      features: [
        "AWS/Azure",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Infrastructure as Code",
      ],
      color: "from-orange-600 to-orange-700",
    },
    {
      id: 6,
      title: "Technical Consulting",
      description:
        "Strategic technology guidance and architecture planning to help businesses make informed technical decisions.",
      icon: "bx bx-bulb",
      features: [
        "Tech Strategy",
        "Architecture Review",
        "Code Audits",
        "Performance Optimization",
      ],
      color: "from-teal-600 to-teal-700",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      gsap.set(servicesRef.current, {
        opacity: 0,
        y: 120,
      });

      gsap.set(headerRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.96,
      });

      gsap.set(".service-card", {
        opacity: 0,
        y: 140,
        scale: 0.84,
        rotateX: 12,
        transformPerspective: 1000,
        transformOrigin: "center bottom",
      });

      gsap.set(".service-icon-box", {
        opacity: 0,
        scale: 0.5,
        rotate: -18,
      });

      gsap.set(".service-title", {
        opacity: 0,
        y: 24,
      });

      gsap.set(".service-description", {
        opacity: 0,
        y: 24,
      });

      gsap.set(".service-feature", {
        opacity: 0,
        x: -24,
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.92,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 82%",
          end: "top 12%",
          scrub: 1.15,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        servicesRef.current,
        {
          opacity: 1,
          y: 0,
          ease: "none",
        },
        0
      )
        .to(
          headerRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
          },
          0.06
        )
        .to(
          ".services-bg-orb",
          {
            scale: 1.25,
            opacity: 0.55,
            y: -90,
            ease: "none",
          },
          0
        )
        .to(
          ".service-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            stagger: {
              each: 0.08,
              from: "center",
            },
            ease: "none",
          },
          0.18
        )
        .to(
          ".service-gradient",
          {
            backgroundPosition: "100% 50%",
            stagger: {
              each: 0.05,
              from: "center",
            },
            ease: "none",
          },
          0.26
        )
        .to(
          ".service-icon-box",
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            stagger: {
              each: 0.06,
              from: "center",
            },
            ease: "none",
          },
          0.3
        )
        .to(
          ".service-title",
          {
            opacity: 1,
            y: 0,
            stagger: {
              each: 0.05,
              from: "center",
            },
            ease: "none",
          },
          0.34
        )
        .to(
          ".service-description",
          {
            opacity: 1,
            y: 0,
            stagger: {
              each: 0.05,
              from: "center",
            },
            ease: "none",
          },
          0.42
        )
        .to(
          ".service-feature",
          {
            opacity: 1,
            x: 0,
            stagger: {
              each: 0.018,
              from: "start",
            },
            ease: "none",
          },
          0.5
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
          },
          0.7
        );

      gsap.to(".service-card", {
        yPercent: -8,
        ease: "none",
        stagger: {
          each: 0.04,
          from: "edges",
        },
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".service-floating-shape", {
        y: -140,
        rotate: 18,
        ease: "none",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      ScrollTrigger.refresh();
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  const handleInPersonChange = (event) => {
    const { name, value } = event.target;

    setInPersonForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInPersonSubmit = (event) => {
    event.preventDefault();

    if (isSendingRequest) return;

    setIsSendingRequest(true);

    const subject = encodeURIComponent("In-Person Consultation Request");

    const body = encodeURIComponent(
      `Hello William,

I would like to schedule an in-person consultation.

Name: ${inPersonForm.name}
Email: ${inPersonForm.email}
Phone: ${inPersonForm.phone}
Preferred Date: ${inPersonForm.preferredDate}
Preferred Time: ${inPersonForm.preferredTime}
Preferred Location: ${inPersonForm.location}

Project / Consultation Details:
${inPersonForm.message}

Thank you.`
    );

    setTimeout(() => {
      window.location.href = `mailto:info@williamwritescode.com?subject=${subject}&body=${body}`;
      setIsSendingRequest(false);
    }, 700);
  };

  const consultationModal = (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-[999999] flex min-h-screen items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl dark:bg-gray-950"
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-black/80 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-black"
              aria-label="Close consultation modal"
            >
              <i className="bx bx-x text-2xl"></i>
            </button>

            <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 text-white">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>
                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl"></div>

                <div className="relative z-10">
                  <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                    Consultation Booking
                  </span>

                  <h3 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                    Schedule a Technical Consultation
                  </h3>

                  <p className="mt-4 leading-relaxed text-blue-50">
                    Choose an online consultation through Calendly or request an
                    in-person consultation. This helps clarify your scope,
                    timeline, budget, and the best development approach.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                        <i className="bx bx-time-five text-xl"></i>
                      </div>

                      <div>
                        <h4 className="font-semibold">Online Consultation</h4>
                        <p className="text-sm text-blue-50">
                          Book a slot directly using Calendly.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                        <i className="bx bx-map text-xl"></i>
                      </div>

                      <div>
                        <h4 className="font-semibold">
                          In-Person Consultation
                        </h4>
                        <p className="text-sm text-blue-50">
                          Send a request with your preferred date, time, and
                          location.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                        <i className="bx bx-check-shield text-xl"></i>
                      </div>

                      <div>
                        <h4 className="font-semibold">Scope Review</h4>
                        <p className="text-sm text-blue-50">
                          Discuss project requirements, pricing model, and
                          delivery plan.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                    <p className="text-sm leading-relaxed text-blue-50">
                      For project work, the final quote and duration depend on
                      the agreed scope of work. Consultation helps make the
                      estimate realistic.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-6 flex rounded-2xl bg-gray-100 p-2 dark:bg-gray-900">
                  <button
                    type="button"
                    onClick={() => setConsultationType("calendly")}
                    className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                      consultationType === "calendly"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-white dark:text-gray-300 dark:hover:bg-gray-800"
                    }`}
                  >
                    Online / Calendly
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultationType("in-person")}
                    className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                      consultationType === "in-person"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-white dark:text-gray-300 dark:hover:bg-gray-800"
                    }`}
                  >
                    In-Person
                  </button>
                </div>

                {consultationType === "calendly" ? (
                  <div>
                    <div className="mb-4">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Book an Online Consultation
                      </h4>

                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Select a time that works for you using the embedded
                        calendar below.
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                      <iframe
                        title="Schedule consultation with William Odhiambo"
                        src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`}
                        className="h-[620px] w-full"
                        loading="lazy"
                      ></iframe>
                    </div>

                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-700 hover:to-purple-700"
                    >
                      Open Calendly in New Tab
                      <i className="bx bx-link-external ml-2 text-xl"></i>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleInPersonSubmit}>
                    <div className="mb-6">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Request an In-Person Consultation
                      </h4>

                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Fill in your preferred consultation details. Submitting
                        this will open an email request that you can send.
                      </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={inPersonForm.name}
                          onChange={handleInPersonChange}
                          required
                          placeholder="Enter your name"
                          className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={inPersonForm.email}
                          onChange={handleInPersonChange}
                          required
                          placeholder="Enter your email"
                          className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={inPersonForm.phone}
                          onChange={handleInPersonChange}
                          required
                          placeholder="+254..."
                          className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Preferred Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={inPersonForm.location}
                          onChange={handleInPersonChange}
                          required
                          placeholder="Mombasa, Nairobi, office, etc."
                          className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={inPersonForm.preferredDate}
                          onChange={handleInPersonChange}
                          required
                          className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Preferred Time
                        </label>
                        <input
                          type="time"
                          name="preferredTime"
                          value={inPersonForm.preferredTime}
                          onChange={handleInPersonChange}
                          required
                          className="w-full rounded-xl border border-gray-300 bg-white p-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Consultation Details
                      </label>
                      <textarea
                        name="message"
                        value={inPersonForm.message}
                        onChange={handleInPersonChange}
                        required
                        rows="5"
                        placeholder="Briefly explain what you would like to discuss..."
                        className="w-full resize-none rounded-xl border border-gray-300 bg-white p-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSendingRequest}
                      className={`mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-700 hover:to-purple-700 disabled:hover:scale-100 ${
                        isSendingRequest ? "cursor-not-allowed opacity-80" : ""
                      }`}
                    >
                      {isSendingRequest ? (
                        <>
                          <i className="bx bx-loader-alt bx-spin mr-2 text-xl"></i>
                          Preparing Email...
                        </>
                      ) : (
                        <>
                          Send In-Person Request
                          <i className="bx bx-send ml-2 text-xl"></i>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section
      id="services"
      ref={servicesRef}
      className="section relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20 will-change-transform"
    >
      {/* Immersive background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="services-bg-orb absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />
        <div className="service-floating-shape absolute left-8 top-40 h-24 w-24 rounded-full bg-purple-500/10 blur-xl dark:bg-purple-400/10" />
        <div className="service-floating-shape absolute right-10 bottom-40 h-32 w-32 rounded-full bg-cyan-500/10 blur-xl dark:bg-cyan-400/10" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 will-change-transform">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/70 px-4 py-2 text-sm font-medium text-blue-600 shadow-sm backdrop-blur-md dark:bg-white/5 dark:text-blue-300">
            <i className="bx bx-layer text-lg"></i>
            What I Can Build For You
          </span>

          <h2 className="section-title text-gray-800 dark:text-white mt-5">
            Professional Services
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Comprehensive technology solutions tailored to meet your business
            objectives and drive digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card group cursor-pointer will-change-transform"
            >
              <div className="h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800">
                {/* Header */}
                <div
                  className={`service-gradient bg-gradient-to-r ${service.color} relative overflow-hidden p-6`}
                  style={{
                    backgroundSize: "200% 200%",
                    backgroundPosition: "0% 50%",
                  }}
                >
                  <div className="absolute top-4 right-4 h-20 w-20 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125"></div>
                  <div className="absolute bottom-4 left-4 h-12 w-12 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125"></div>

                  <div className="relative z-10">
                    <div className="service-icon-box mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 will-change-transform">
                      <i className={`${service.icon} text-3xl text-white`}></i>
                    </div>

                    <h3 className="service-title text-xl font-bold text-white will-change-transform">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="service-description mb-6 leading-relaxed text-gray-600 dark:text-gray-300 will-change-transform">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="service-feature flex items-center will-change-transform"
                      >
                        <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>

                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="text-center mt-16 will-change-transform">
          <div className="rounded-2xl border border-gray-100 bg-white/90 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800/90">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can transform your ideas into innovative
              digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
              >
                <span className="relative z-10">Get Started Today</span>
                <i className="bx bx-rocket ml-2 relative z-10"></i>
                <span className="absolute inset-0 bg-white/10 opacity-0 transition duration-300 group-hover:opacity-100"></span>
              </Link>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="rounded-full border-2 border-gray-300 px-8 py-4 font-medium text-gray-700 shadow-md transition-all duration-300 hover:scale-105 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg dark:border-gray-600 dark:text-gray-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                Schedule Consultation
                <i className="bx bx-calendar ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {typeof document !== "undefined" &&
        createPortal(consultationModal, document.body)}
    </section>
  );
};

export default Services;