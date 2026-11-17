import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Paragraph from "../common/typography/Paragraph";

export default function MissionSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle title="Mission" subtitle="About" />
        <Paragraph className="max-w-3xl">Placeholder copy for the mission section of an about page.</Paragraph>
      </Container>
    </section>
  );
}
