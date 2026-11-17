import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold text-slate-900">
          Logo
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-600">
            About
          </Link>
          <Link to="/services" className="hover:text-indigo-600">
            Services
          </Link>
          <Link to="/contact" className="hover:text-indigo-600">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
