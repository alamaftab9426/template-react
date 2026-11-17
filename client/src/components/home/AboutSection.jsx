import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Paragraph from "../common/typography/Paragraph";

export default function AboutSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle title="About the boilerplate" subtitle="Home" />
        <Paragraph className="max-w-3xl">
          This placeholder section explains where key home page content will be assembled from reusable section components.
        </Paragraph>
      </Container>
    </section>
  );
}
