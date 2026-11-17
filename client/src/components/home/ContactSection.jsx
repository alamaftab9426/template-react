import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Paragraph from "../common/typography/Paragraph";

export default function ContactSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle title="Contact" subtitle="Home" />
        <Paragraph className="max-w-3xl">
          This contact section is a simple placeholder for the home page contact area.
        </Paragraph>
      </Container>
    </section>
  );
}
