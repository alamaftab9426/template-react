import Card from "../common/Card";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionTitle title="Featured sections" subtitle="Home" />
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>Placeholder for a key homepage service or feature.</Card>
          <Card>Placeholder for another homepage feature.</Card>
          <Card>Placeholder for a third homepage feature.</Card>
        </div>
      </Container>
    </section>
  );
}
