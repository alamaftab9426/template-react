export default function Paragraph({ children, className = "", ...props }) {
  return (
    <p className={`text-base leading-7 text-slate-600 md:text-lg ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}
