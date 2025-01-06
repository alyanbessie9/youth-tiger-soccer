import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
