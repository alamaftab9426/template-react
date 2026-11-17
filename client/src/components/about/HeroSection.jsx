import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Paragraph from "../common/typography/Paragraph";

export default function HeroSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container className="text-center">
        <SectionTitle title="About Page" subtitle="About" />
        <Paragraph className="mx-auto max-w-2xl">This hero section introduces the about page using reusable layout components.</Paragraph>
      </Container>
    </section>
  );
}
