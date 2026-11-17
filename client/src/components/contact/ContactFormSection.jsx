import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

export default function ContactFormSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle title="Contact Form" subtitle="Contact" />
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm leading-7 text-slate-600">This is a placeholder form section for contact page structure.</p>
        </div>
      </Container>
    </section>
  );
}
