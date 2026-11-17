import Card from "../common/Card";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

export default function ServiceListSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle title="Service List" subtitle="Services" />
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>Service placeholder one.</Card>
          <Card>Service placeholder two.</Card>
          <Card>Service placeholder three.</Card>
        </div>
      </Container>
    </section>
  );
}
