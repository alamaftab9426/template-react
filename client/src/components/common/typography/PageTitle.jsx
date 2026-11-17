export default function PageTitle({ children, className = "", ...props }) {
  return (
    <h1 className={`text-4xl font-semibold text-slate-900 sm:text-5xl md:text-6xl ${className}`.trim()} {...props}>
      {children}
    </h1>
  );
}
