import React, { useState, useEffect } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Projects,
  Approach,
  StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      return (
        /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
        window.innerWidth <= 768
      );
    };

    console.log("Is mobile:", checkMobile());
    setIsMobile(checkMobile());
  }, []);

  return (
    <div className="relative z-0 bg-primary w-[100vw] ">
      <div className="bg-hero-pattern w-full overflow-hidden">
        <Navbar />
        <Hero isMobile={isMobile} />
      </div>
      <About />
      <Experience />
      <Tech />
      <Projects />
      {!isMobile && <Approach />}
      <Feedbacks />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
    </div>
  );
};

export default App;
