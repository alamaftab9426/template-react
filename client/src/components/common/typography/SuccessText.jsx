export default function SuccessText({ children, className = "", ...props }) {
  return (
    <p className={`text-sm text-emerald-600 ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}
