export default function Caption({ children, className = "", ...props }) {
  return (
    <span className={`text-xs uppercase tracking-[0.24em] text-slate-500 ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
