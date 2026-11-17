export default function SectionTitle({ children, className = "", ...props }) {
  return (
    <h2 className={`text-3xl font-semibold text-slate-900 sm:text-4xl ${className}`.trim()} {...props}>
      {children}
    </h2>
  );
}
