export default function SmallText({ children, className = "", ...props }) {
  return (
    <p className={`text-sm leading-6 text-slate-500 ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}
