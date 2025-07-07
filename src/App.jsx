import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Certification from "./sections/Certification";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certification />
      <Contact />
    </>
  );
};

export default App;
