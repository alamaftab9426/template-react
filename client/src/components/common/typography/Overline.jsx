export default function Overline({ children, className = "", ...props }) {
  return (
    <p className={`text-xs uppercase tracking-[0.28em] text-slate-500 ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}
