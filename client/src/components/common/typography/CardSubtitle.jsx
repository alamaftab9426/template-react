export default function CardSubtitle({ children, className = "", ...props }) {
  return (
    <p className={`text-sm text-slate-600 ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}
