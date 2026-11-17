import { Heading2, Overline } from "./typography";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      {subtitle && <Overline className="mb-2 text-indigo-600">{subtitle}</Overline>}
      <Heading2>{title}</Heading2>
    </div>
  );
}
