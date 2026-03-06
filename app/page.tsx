import ContactSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}