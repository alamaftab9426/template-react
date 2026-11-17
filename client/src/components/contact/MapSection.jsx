import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

export default function MapSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionTitle title="Map" subtitle="Contact" />
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-sm leading-7 text-slate-600 shadow-sm">
          Map placeholder content.
        </div>
      </Container>
    </section>
  );
}
