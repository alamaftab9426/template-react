export default function Heading3({ children, className = "", ...props }) {
  return (
    <h3
      className={`text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl ${className}`.trim()}
      {...props}
    >
      {children}
    </h3>
  );
}
