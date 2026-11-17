import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

export default function HeroSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container className="text-center">
        <SectionTitle title="Contact Us" subtitle="Contact" />
        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600">
          Use this contact page hero section as the template for onboarding contact details.
        </p>
      </Container>
    </section>
  );
}
