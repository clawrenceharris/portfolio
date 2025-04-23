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
const Home = () => {
  return (
    <main>
      <Navbar />
      <div className="h-[100vh] mt-12">
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

export default Home;
