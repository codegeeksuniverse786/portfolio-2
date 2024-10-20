import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SevicesSection from './sections/SevicesSection';
import TestimonialsSection from './sections/TestimonialsSection';

export default function Home() {
  return (
    <main className="w-full p-4">
      <HeroSection />
      <AboutSection />
      <SevicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
