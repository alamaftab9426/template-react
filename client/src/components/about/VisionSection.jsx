import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Paragraph from "../common/typography/Paragraph";

export default function VisionSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionTitle title="Vision" subtitle="About" />
        <Paragraph className="max-w-3xl">Placeholder copy for the vision section of an about page.</Paragraph>
      </Container>
    </section>
  );
}
