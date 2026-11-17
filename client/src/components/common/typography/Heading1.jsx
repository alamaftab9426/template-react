export default function Heading1({ children, className = "", ...props }) {
  return (
    <h1
      className={`text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl ${className}`.trim()}
      {...props}
    >
      {children}
    </h1>
  );
}
