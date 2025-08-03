import React from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Projects />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
