export default function Heading5({ children, className = "", ...props }) {
  return (
    <h5
      className={`text-lg font-semibold tracking-tight text-slate-900 sm:text-xl ${className}`.trim()}
      {...props}
    >
      {children}
    </h5>
  );
}
