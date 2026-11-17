import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Paragraph from "../common/typography/Paragraph";

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle title="Features" subtitle="Home" />
        <Paragraph className="max-w-3xl">
          Each feature section is a reusable component that can be assembled by the page with minimal logic.
        </Paragraph>
      </Container>
    </section>
  );
}
