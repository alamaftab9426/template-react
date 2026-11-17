export default function BadgeText({ children, className = "", ...props }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
