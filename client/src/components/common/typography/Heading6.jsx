export default function Heading6({ children, className = "", ...props }) {
  return (
    <h6
      className={`text-base font-semibold tracking-tight text-slate-900 sm:text-lg ${className}`.trim()}
      {...props}
    >
      {children}
    </h6>
  );
}
