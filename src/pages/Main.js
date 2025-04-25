import React from "react";

import {
  ContactSection,
  SkillsSection,
  Footer,
  ProjectsSection,
  AboutSection,
  Navbar,
  HeroSection,
} from "../components";
const Main = () => {
  return (
    <main>
      <Navbar />
      <div className="min-h-[100vh] mt-[140px]">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />

        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Main;
