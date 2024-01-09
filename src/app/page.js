import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className=" mt-24  ">
        <HeroSection />
        <AboutSection />
        <SkillsSection/>
        <ProjectsSection />

        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
