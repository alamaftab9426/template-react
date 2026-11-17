export default function DisplayText({ children, className = "", ...props }) {
  return (
    <h1
      className={`text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl ${className}`.trim()}
      {...props}
    >
      {children}
    </h1>
  );
}
