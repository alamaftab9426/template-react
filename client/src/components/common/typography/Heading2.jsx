export default function Heading2({ children, className = "", ...props }) {
  return (
    <h2
      className={`text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl ${className}`.trim()}
      {...props}
    >
      {children}
    </h2>
  );
}
