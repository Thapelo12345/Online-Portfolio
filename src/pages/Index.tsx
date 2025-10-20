
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";
import ThreeDBackground from "@/components/ThreeDBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    // <div className="min-h-screen flex flex-col">
    <div className="h-screen w-screen flex flex-col">
      <ThemeToggle />
      <Navigation />
      <ThreeDBackground />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );  
};

export default Index;
