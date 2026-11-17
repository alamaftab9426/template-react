import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
