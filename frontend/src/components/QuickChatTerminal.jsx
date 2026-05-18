// components/QuickChatTerminal.js
import React, { useEffect, useMemo, useRef, useState } from "react";

const QuickChatTerminal = () => {
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [lines, setLines] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(null);

  const prompt = "williamwritescode@admin:~$";

  const commands = useMemo(
    () => ({
      "/help": {
        title: "Available Commands",
        content: [
          "Use any of the commands below to quickly explore William's portfolio:",
          "",
          "/about              Brief professional introduction",
          "/skills             Technical skills and tools",
          "/services           Services William offers",
          "/experience         Professional experience summary",
          "/projects           Selected project highlights",
          "/pricing            Payment structure and pricing model",
          "/education          Education background",
          "/certifications     Certifications and learning focus",
          "/contact            Contact details",
          "/vision             Career and business vision",
          "/name               Full name and brand",
          "/clear              Clear the terminal",
        ],
      },

      "/about": {
        title: "About William",
        content: [
          "William Sisulu Odhiambo is a full-stack software engineer, cybersecurity specialist, and founder building practical digital systems for businesses, startups, and communities.",
          "",
          "He works across software development, cybersecurity, automation, analytics, and product strategy, with a strong focus on Africa-first technology solutions.",
        ],
      },

      "/skills": {
        title: "Skills",
        content: [
          "Frontend:",
          "React, React Native, TailwindCSS, JavaScript, TypeScript, responsive UI implementation, dashboard interfaces, and interactive animations.",
          "",
          "Backend:",
          "Node.js, Express.js, MongoDB, Mongoose, REST APIs, authentication, authorization, payment integration, and deployment workflows.",
          "",
          "Cybersecurity:",
          "Security awareness, system hardening, risk analysis, secure authentication, threat monitoring concepts, vulnerability thinking, and defensive architecture.",
          "",
          "Tools:",
          "Git, GitHub, VPS/Linux, PM2, Nginx, Cloudinary, Paystack, M-Pesa Daraja API, Firebase basics, Figma, and automation tools.",
        ],
      },

      "/services": {
        title: "Services",
        content: [
          "William offers:",
          "",
          "01. Full-stack web application development",
          "02. Mobile app development",
          "03. Backend API development",
          "04. Admin dashboards and business systems",
          "05. E-commerce and marketplace platforms",
          "06. Payment integrations such as M-Pesa and Paystack",
          "07. Cybersecurity consultation and secure system planning",
          "08. Maintenance, optimization, and technical support",
          "09. Technical consultation for founders, SMEs, and startups",
        ],
      },

      "/experience": {
        title: "Professional Experience",
        content: [
          "Founder — SeptaGreen Africa",
          "Leading a technology and cybersecurity-focused company built around cybersecurity, software solutions, and data science/analytics.",
          "",
          "Full Stack Software Engineer & Robotics Trainer — Afribot Robotics Africa Limited",
          "Worked on software development, robotics training, frontend/backend systems, and technical instruction.",
          "",
          "Software Developer Volunteer — IOME001",
          "Supported software and hardware-based innovation work involving Raspberry Pi, Arduino, and scientific instrumentation.",
        ],
      },

      "/projects": {
        title: "Selected Projects",
        content: [
          "Some selected works and project directions include:",
          "",
          "Asiyo Women Connect — community and marketplace ecosystem.",
          "Zivuko Kenya — e-commerce/marketplace platform.",
          "SeptaGreen Africa — technology and cybersecurity company.",
          "Emberprise Africa — business toolkit and intelligence platform.",
          "Longclause — contract and legal-tech concept for freelancers and creatives.",
          "Bookie LMS — learning management system.",
          "Remunary — POS/billing and retail management concept.",
          "",
          "Use the full website sections to explore deeper details and visuals.",
        ],
      },

      "/pricing": {
        title: "Pricing",
        content: [
          "Pricing depends on project scope, complexity, timeline, integrations, and deliverables.",
          "",
          "Monthly Payment Plan:",
          "Payments are made monthly, due by the 10th of each month. The first monthly payment acts as the project deposit before work begins.",
          "",
          "One-Time Payment Plan:",
          "A 50% deposit is required before work begins, with the remaining balance paid on completion or an agreed milestone.",
          "",
          "Maintenance and consultation plans can also be billed monthly in Kenyan Shillings.",
        ],
      },

      "/education": {
        title: "Education",
        content: [
          "William's learning path is centered around software engineering, cybersecurity, cloud computing, data science, robotics, and practical system building.",
          "",
          "His work combines academic learning, self-driven technical practice, client projects, and startup development experience.",
        ],
      },

      "/certifications": {
        title: "Certifications",
        content: [
          "Certification and learning focus areas include:",
          "",
          "Cybersecurity",
          "Cloud Computing",
          "Data Science",
          "Software Engineering",
          "Robotics and automation",
          "Backend/API development",
          "Secure system design",
          "",
          "The full certifications section gives a deeper view of the learning path.",
        ],
      },

      "/contact": {
        title: "Contact",
        content: [
          "Email: williamsisulu2003@gmail.com or info@williamwritescode.com",
          "Phone: +254 711 160 437",
          "Location: Kenya",
          "",
          "You can also use the Contact page to send a message, schedule a consultation, or reach out via WhatsApp.",
        ],
      },

      "/vision": {
        title: "Vision",
        content: [
          "William's vision is to build reliable, secure, and scalable technology that helps people, startups, SMEs, and African communities move forward.",
          "",
          "The long-term direction is to create Africa-first digital products that can scale globally while remaining practical, accessible, and impactful.",
        ],
      },

      "/name": {
        title: "Identity",
        content: [
          "Name: William Sisulu Odhiambo",
          "Brand: William Writes Code",
          "Positioning: Full-stack software engineer, cybersecurity specialist, founder, and builder.",
        ],
      },
    }),
    []
  );

  const quickCommands = [
    "/help",
    "/skills",
    "/experience",
    "/projects",
    "/services",
    "/pricing",
    "/contact",
    "/vision",
  ];

  const typeResponse = async (responseLines) => {
    setIsTyping(true);

    for (let i = 0; i < responseLines.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 120));

      setLines((prev) => [
        ...prev,
        {
          type: "response",
          text: responseLines[i],
        },
      ]);
    }

    setIsTyping(false);
  };

  const runCommand = async (rawCommand) => {
    const command = rawCommand.trim().toLowerCase();

    if (!command) return;

    setLines((prev) => [
      ...prev,
      {
        type: "command",
        text: command,
      },
    ]);

    setHistory((prev) => [...prev, command]);
    setHistoryIndex(null);
    setInputValue("");

    if (command === "/clear" || command === "clear") {
      setTimeout(() => {
        setLines([]);
      }, 120);
      return;
    }

    const normalizedCommand = command.startsWith("/")
      ? command
      : `/${command}`;

    if (!commands[normalizedCommand]) {
      await typeResponse([
        `Command not found: ${command}`,
        "Type /help to view available commands.",
      ]);
      return;
    }

    const selected = commands[normalizedCommand];

    await typeResponse([
      `> ${selected.title}`,
      "----------------------------------------",
      ...selected.content,
      "",
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isTyping) return;

    runCommand(inputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (history.length === 0) return;

      const nextIndex =
        historyIndex === null
          ? history.length - 1
          : Math.max(historyIndex - 1, 0);

      setHistoryIndex(nextIndex);
      setInputValue(history[nextIndex]);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (history.length === 0 || historyIndex === null) return;

      const nextIndex = historyIndex + 1;

      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setInputValue("");
        return;
      }

      setHistoryIndex(nextIndex);
      setInputValue(history[nextIndex]);
    }
  };

  useEffect(() => {
    const initialLines = [
      {
        type: "system",
        text: "Booting William Writes Code quick interface...",
      },
      {
        type: "system",
        text: "Type /help to view commands or try /skills, /projects, /pricing, /contact.",
      },
    ];

    const timer = setTimeout(() => {
      setLines(initialLines);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!terminalBodyRef.current) return;

    terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
  }, [lines, isTyping, inputValue]);

  return (
    <section
      id="quick-chat"
      className="relative overflow-hidden bg-white py-14 text-gray-900 dark:bg-gray-950 dark:text-white sm:py-16 md:py-20"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10 sm:h-[520px] sm:w-[520px]" />
        <div className="absolute -left-28 bottom-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-400/10 sm:h-80 sm:w-80" />
        <div className="absolute -right-28 top-40 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-400/10 sm:h-80 sm:w-80" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] sm:bg-[size:44px_44px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16 xl:gap-20">
          {/* LEFT CONTENT */}
          <div className="min-w-0">
            <h2 className="mt-2 max-w-3xl text-3xl font-black leading-tight tracking-tight text-gray-950 dark:text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              Explore portfolio
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                like a terminal.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base md:text-lg lg:text-lg xl:text-xl">
              In a hurry? Use the command window to quickly query what you want
              to know — skills, projects, pricing, services, experience,
              education, certifications, contact details, and more.
            </p>
          </div>

          {/* TERMINAL */}
          <div className="relative min-w-0">
            <div className="absolute -inset-2 rounded-[1.5rem] blur-2xl sm:-inset-4 sm:rounded-[2rem]" />

            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 shadow-2xl shadow-blue-950/20 dark:border-gray-800 sm:rounded-[2rem]">
              {/* Terminal top bar */}
              <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.04] px-3 py-3 sm:px-4">
                <div className="flex shrink-0 items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3" />
                </div>

                <div className="min-w-0 truncate text-[10px] font-medium text-gray-400 sm:text-xs">
                  @william-writes-code
                </div>

                <button
                  type="button"
                  onClick={() => runCommand("/clear")}
                  className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium text-gray-300 transition hover:border-red-400/50 hover:text-red-300 sm:px-3 sm:text-xs"
                >
                  clear
                </button>
              </div>

              {/* Terminal body */}
              <div
                ref={terminalBodyRef}
                onClick={() => inputRef.current?.focus()}
                className="h-[430px] cursor-text overflow-y-auto px-3 py-4 font-mono text-[12px] leading-relaxed text-gray-200 sm:h-[500px] sm:px-5 sm:py-5 sm:text-sm md:h-[560px] md:px-6"
              >
                <div className="space-y-2">
                  {lines.map((line, index) => {
                    if (line.type === "command") {
                      return (
                        <div
                          key={index}
                          className="flex min-w-0 flex-wrap gap-x-2 gap-y-1"
                        >
                          <span className="break-all text-cyan-400">
                            {prompt}
                          </span>
                          <span className="break-all text-white">
                            {line.text}
                          </span>
                        </div>
                      );
                    }

                    if (line.type === "system") {
                      return (
                        <div key={index} className="break-words text-purple-300">
                          {line.text}
                        </div>
                      );
                    }

                    return (
                      <div
                        key={index}
                        className={`whitespace-pre-wrap break-words ${
                          line.text.startsWith(">")
                            ? "pt-3 font-bold text-blue-300"
                            : line.text.startsWith("---")
                            ? "text-gray-600"
                            : line.text === ""
                            ? "h-2"
                            : "text-gray-300"
                        }`}
                      >
                        {line.text}
                      </div>
                    );
                  })}

                  {isTyping && (
                    <div className="flex items-center gap-2 text-green-300">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                      <span>generating response...</span>
                    </div>
                  )}

                  {/* Inline terminal input */}
                  <form onSubmit={handleSubmit} className="pt-2">
                    <div className="flex min-w-0 items-start gap-2 sm:items-center">
                      <span className="hidden shrink-0 break-all text-cyan-400 sm:inline">
                        {prompt}
                      </span>

                      <span className="shrink-0 text-cyan-400 sm:hidden">
                        $
                      </span>

                      <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        disabled={isTyping}
                        onChange={(event) => setInputValue(event.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type /help..."
                        className="min-w-0 flex-1 bg-transparent font-mono text-[12px] text-white outline-none placeholder:text-gray-600 disabled:cursor-not-allowed sm:text-sm"
                        autoComplete="off"
                      />

                      <button
                        type="submit"
                        disabled={isTyping || !inputValue.trim()}
                        className="sr-only"
                        aria-label="Run command"
                      >
                        Run
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Quick command chips */}
              <div className="border-t border-white/10 bg-white/[0.03] px-3 py-3 sm:px-5 sm:py-4 md:px-6">
                <div className="mb-3 flex max-h-24 flex-wrap gap-2 overflow-y-auto pr-1 sm:mb-4 sm:max-h-none sm:overflow-visible">
                  {quickCommands.map((command) => (
                    <button
                      key={command}
                      type="button"
                      disabled={isTyping}
                      onClick={() => runCommand(command)}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[10px] text-gray-300 transition hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300 disabled:cursor-not-allowed disabled:opacity-50 sm:px-3 sm:text-xs"
                    >
                      {command}
                    </button>
                  ))}
                </div>

                <p className="mt-2 text-[10px] leading-relaxed text-gray-500 sm:mt-3 sm:text-xs">
                  Tip: use Arrow Up / Arrow Down to navigate command history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickChatTerminal;