// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Whatsapp from "./components/Whatsapp";
import GooeyCursor from "./components/GooeyCursor";

import Home from "./screens/Home";
import AboutScreen from "./screens/AboutScreen";
import PricingScreen from "./screens/PricingScreen";
import ContactScreen from "./screens/ContactScreen";

import "./App.css";

/* ================= SCROLL RESTORATION ================= */

const scrollPositions = {};

const ScrollRestoration = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const currentKey = location.key;
    const currentPath = location.pathname + location.search;

    return () => {
      scrollPositions[currentKey || currentPath] = window.scrollY;
    };
  }, [location]);

  useEffect(() => {
    const key = location.key;
    const path = location.pathname + location.search;

    if (navigationType === "POP") {
      const savedPosition = scrollPositions[key || path];

      if (typeof savedPosition === "number") {
        window.scrollTo({
          top: savedPosition,
          behavior: "instant",
        });
      }

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location, navigationType]);

  return null;
};

const AppLayout = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <motion.div
      key="main-app"
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white dark:bg-gray-950"
    >
      <ScrollRestoration />

      <GooeyCursor />

      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className={isHomePage ? "relative" : "relative pt-32 md:pt-36"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/pricing" element={<PricingScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
        </Routes>
      </main>

      <Whatsapp />
      <Footer />
    </motion.div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;

    setDarkMode(nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? "dark" : ""}`}>
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{
                opacity: 0,
                scale: 0.8,
                transition: { duration: 0.8 },
              }}
              className="flex h-screen items-center justify-center bg-white dark:bg-gray-900"
            >
              <Loader />
            </motion.div>
          ) : (
            <AppLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;