// components/Contact.js
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/williamsisulu2003/30min";

const Contact = () => {
  const subjectOptions = [
    "Project Inquiry",
    "Website Development",
    "Mobile App Development",
    "Cybersecurity Consultation",
    "Maintenance Plan",
    "Technical Consultation",
    "Partnership / Collaboration",
    "Other",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Project Inquiry",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [isSendingRequest, setIsSendingRequest] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consultationType, setConsultationType] = useState("calendly");

  const [inPersonForm, setInPersonForm] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    location: "",
    message: "",
  });

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formStatus.message) {
      setFormStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleInPersonChange = (event) => {
    const { name, value } = event.target;

    setInPersonForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSendingMessage) return;

    const missingFields =
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim();

    if (missingFields) {
      setFormStatus({
        type: "error",
        message: "Please fill in all required fields before sending.",
      });
      return;
    }

    setIsSendingMessage(true);

    const emailSubject = encodeURIComponent(
      `${formData.subject} - Message from ${formData.name}`
    );

    const emailBody = encodeURIComponent(
      `Hello William,

I would like to get in touch.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Subject: ${formData.subject}

Message:
${formData.message}

Thank you.`
    );

    setTimeout(() => {
      window.location.href = `mailto:info@williamwritescode.com?subject=${emailSubject}&body=${emailBody}`;

      setFormStatus({
        type: "success",
        message:
          "Your email app has been opened with the message ready to send.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Project Inquiry",
        message: "",
      });

      setIsSendingMessage(false);
    }, 700);
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

Consultation Details:
${inPersonForm.message}

Thank you.`
    );

    setTimeout(() => {
      window.location.href = `mailto:info@williamwritescode.com?subject=${subject}&body=${body}`;

      setInPersonForm({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        location: "",
        message: "",
      });

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
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-6 text-white sm:p-8">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>
                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl"></div>

                <div className="relative z-10">
                  <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                    Consultation Booking
                  </span>

                  <h3 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
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
                          Send your preferred date, time, and location.
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
                          Discuss requirements, pricing model, timeline, and the
                          delivery plan.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur-md">
                    <p className="text-sm leading-relaxed text-blue-50">
                      For project work, the final quote and duration depend on
                      the agreed scope of work. A consultation helps make the
                      estimate realistic and practical.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8">
                <div className="mb-6 grid grid-cols-2 rounded-2xl bg-gray-100 p-2 dark:bg-gray-900">
                  <button
                    type="button"
                    onClick={() => setConsultationType("calendly")}
                    className={`rounded-xl px-3 py-3 text-xs font-semibold transition-all duration-300 sm:text-sm ${
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
                    className={`rounded-xl px-3 py-3 text-xs font-semibold transition-all duration-300 sm:text-sm ${
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
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                        Book an Online Consultation
                      </h4>

                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                        Select a time that works for you using the embedded
                        calendar below.
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                      <iframe
                        title="Schedule consultation with William Odhiambo"
                        src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`}
                        className="h-[540px] w-full sm:h-[620px]"
                        loading="lazy"
                      ></iframe>
                    </div>

                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-700 hover:to-purple-700 sm:text-base"
                    >
                      Open Calendly in New Tab
                      <i className="bx bx-link-external ml-2 text-xl"></i>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleInPersonSubmit}>
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                        Request an In-Person Consultation
                      </h4>

                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                        Fill in your preferred consultation details. Submitting
                        this will open an email request that you can send.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
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
                      className={`mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-700 hover:to-purple-700 disabled:hover:scale-100 sm:text-base ${
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
      id="contact"
      className="section overflow-hidden bg-white py-16 dark:bg-gray-800 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2 className="section-title mt-5">Get In Touch</h2>

          <p className="mt-4 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
            Have a project, collaboration, consultation, or technical challenge?
            Send a message or schedule a consultation directly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="min-w-0">
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-5 shadow-xl dark:border-gray-700 dark:bg-gray-900 sm:p-8">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Let's work together
              </h3>

              <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                I'm always interested in new opportunities, freelance work,
                full-time roles, consulting, and collaborative projects. Reach
                out and I will get back to you as soon as possible.
              </p>

              <div className="space-y-5">
                <div className="flex items-start sm:items-center">
                  <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <i className="bx bx-envelope text-xl text-blue-600 dark:text-blue-300"></i>
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Email
                    </p>

                    <a
                      href="mailto:info@williamwritescode.com"
                      className="break-words text-blue-600 hover:underline dark:text-blue-400"
                    >
                      info@williamwritescode.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start sm:items-center">
                  <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <i className="bx bx-phone text-xl text-blue-600 dark:text-blue-300"></i>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Phone
                    </p>

                    <a
                      href="tel:+254711160437"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      +254 711 160 437
                    </a>
                  </div>
                </div>

                <div className="flex items-start sm:items-center">
                  <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <i className="bx bx-map text-xl text-blue-600 dark:text-blue-300"></i>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Location
                    </p>

                    <p className="text-blue-600 dark:text-blue-400">Kenya</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 sm:px-6 sm:text-base"
                >
                  Schedule Consultation
                  <i className="bx bx-calendar ml-2 text-xl"></i>
                </button>

                <a
                  href="https://wa.me/254711160437?text=Hi%20William%2C%20I'm%20interested%20in%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-green-600 px-5 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-700 sm:px-6 sm:text-base"
                >
                  WhatsApp Me
                  <i className="bx bxl-whatsapp ml-2 text-xl"></i>
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/william-odhiambo-481689265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-700"
                  aria-label="LinkedIn"
                >
                  <i className="bx bxl-linkedin text-xl"></i>
                </a>

                <a
                  href="https://github.com/i-william17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-white transition-colors hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
                  aria-label="GitHub"
                >
                  <i className="bx bxl-github text-xl"></i>
                </a>

                <a
                  href="https://wa.me/254711160437?text=Hi%20William%2C%20I'm%20interested%20in%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white transition-colors hover:bg-green-700"
                  aria-label="WhatsApp"
                >
                  <i className="bx bxl-whatsapp text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-3xl border border-gray-100 bg-gray-50 p-5 shadow-xl dark:border-gray-700 dark:bg-gray-900 sm:space-y-6 sm:p-8"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                  Send a Message
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                  Fill in the form below. It will open your email app with the
                  message ready to send.
                </p>
              </div>

              {formStatus.message && (
                <div
                  className={`rounded-2xl border p-4 text-sm ${
                    formStatus.type === "success"
                      ? "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950/40 dark:text-green-300"
                      : "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="Your email address"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Phone <span className="text-gray-400">(optional)</span>
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  placeholder="+254..."
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject <span className="text-red-500">*</span>
                </label>

                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 pr-12 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  >
                    {subjectOptions.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>

                  <i className="bx bx-chevron-down pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-500 dark:text-gray-400"></i>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  placeholder="Tell me about your project, request, or consultation..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSendingMessage}
                className={`inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-blue-700 hover:to-purple-700 disabled:hover:scale-100 sm:text-base ${
                  isSendingMessage ? "cursor-not-allowed opacity-80" : ""
                }`}
              >
                {isSendingMessage ? (
                  <>
                    <i className="bx bx-loader-alt bx-spin mr-2 text-xl"></i>
                    Preparing Email...
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="bx bx-send ml-2 text-xl"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {typeof document !== "undefined" &&
        createPortal(consultationModal, document.body)}
    </section>
  );
};

export default Contact;