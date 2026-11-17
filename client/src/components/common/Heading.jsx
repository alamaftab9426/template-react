export default function Heading({ children, as: Component = "h3", className = "" }) {
  return <Component className={`text-2xl font-semibold text-slate-900 ${className}`.trim()}>{children}</Component>;
}
