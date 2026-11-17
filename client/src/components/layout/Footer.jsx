export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-slate-600 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} React Boilerplate. All rights reserved.
      </div>
    </footer>
  );
}
