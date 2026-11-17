export default function ErrorText({ children, className = "", ...props }) {
  return (
    <p className={`text-sm text-red-600 ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}
