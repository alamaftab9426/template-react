export default function LinkText({ children, className = "", ...props }) {
  return (
    <a className={`text-sm font-medium text-indigo-600 transition hover:text-indigo-500 ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
