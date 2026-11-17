export default function HelperText({ children, className = "", ...props }) {
  return (
    <p className={`text-sm text-slate-500 ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}
