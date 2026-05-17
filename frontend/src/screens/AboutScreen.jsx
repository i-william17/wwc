// screens/AboutScreen.jsx
import React from "react";

import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Certifications from "../components/Certifications";

const AboutScreen = () => {
  return (
    <main>
      <About />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
    </main>
  );
};

export default AboutScreen;