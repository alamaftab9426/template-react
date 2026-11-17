import Button from "../common/Button";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Paragraph from "../common/typography/Paragraph";

export default function HeroSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container className="text-center">
        <SectionTitle subtitle="Home" title="Welcome to the boilerplate" />
        <Paragraph className="mx-auto max-w-2xl">
          This hero section is a placeholder for the home page. It should be replaced with real content when the project is extended.
        </Paragraph>
        <div className="mt-8 flex justify-center">
          <Button type="button">Explore</Button>
        </div>
      </Container>
    </section>
  );
}
