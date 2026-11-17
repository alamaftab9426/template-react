export default function Heading4({ children, className = "", ...props }) {
  return (
    <h4
      className={`text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl ${className}`.trim()}
      {...props}
    >
      {children}
    </h4>
  );
}
