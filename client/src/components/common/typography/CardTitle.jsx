export default function CardTitle({ children, className = "", ...props }) {
  return (
    <h3 className={`text-lg font-semibold text-slate-900 ${className}`.trim()} {...props}>
      {children}
    </h3>
  );
}
