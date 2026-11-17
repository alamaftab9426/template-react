import { Link } from "react-router-dom";
import Container from "../components/common/Container";

export default function NotFoundPage() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
          The page you were looking for does not exist. Use the navigation above to return to the site.
        </p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500">
          Go back home
        </Link>
      </Container>
    </section>
  );
}
