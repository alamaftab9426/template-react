import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

export default function HeroSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container className="text-center">
        <SectionTitle title="Services" subtitle="Services" />
        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600">
          This hero section introduces the services page with a reusable page layout.
        </p>
      </Container>
    </section>
  );
}
