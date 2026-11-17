import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Paragraph from "../common/typography/Paragraph";

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionTitle title="Testimonials" subtitle="Home" />
        <Paragraph className="max-w-3xl">
          Customer quotes and testimonials can be built using reusable cards in this section.
        </Paragraph>
      </Container>
    </section>
  );
}
