import React from "react";

import {
  ContactSection,
  SkillsSection,
  Footer,
  ProjectsSection,
  AboutSection,
  Navbar,
  HeroSection,
  AnimatedScrollSection,
} from "../components";
const Main = () => {
  
  return (
    <main
    >
      <img  src={require("../assets/images/bg.jpg")} id="background" />
      <Navbar />
      <div >

      
        <AnimatedScrollSection isFirst direction={-1} >
          <HeroSection />
        </AnimatedScrollSection>
        <AnimatedScrollSection direction={1}>
          <AboutSection />
        </AnimatedScrollSection>
        <AnimatedScrollSection direction={-1}>
          <SkillsSection />
        </AnimatedScrollSection>

          <ProjectsSection />
        <AnimatedScrollSection direction={-1}>
          <ContactSection />
        </AnimatedScrollSection>
      </div>
      <Footer />
    </main>
  );
};

export default Main;
