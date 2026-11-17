export default function Label({ children, className = "", ...props }) {
  return (
    <label className={`text-sm font-medium text-slate-700 ${className}`.trim()} {...props}>
      {children}
    </label>
  );
}
