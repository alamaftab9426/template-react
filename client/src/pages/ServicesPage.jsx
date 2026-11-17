import HeroSection from "../components/services/HeroSection";
import PricingSection from "../components/services/PricingSection";
import ProcessSection from "../components/services/ProcessSection";
import ServiceListSection from "../components/services/ServiceListSection";

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <ServiceListSection />
      <ProcessSection />
      <PricingSection />
    </>
  );
}
