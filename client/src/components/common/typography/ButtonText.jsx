export default function ButtonText({ children, className = "", ...props }) {
  return (
    <span className={`text-sm font-semibold uppercase tracking-[0.08em] ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
