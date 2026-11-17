import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Paragraph from "../common/typography/Paragraph";

export default function TeamSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle title="Team" subtitle="About" />
        <Paragraph className="max-w-3xl">Placeholder copy for the team section of an about page.</Paragraph>
      </Container>
    </section>
  );
}
