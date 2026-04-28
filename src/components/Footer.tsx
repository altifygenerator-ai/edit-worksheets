export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#f7f2e8]">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-600">
        <p>© {new Date().getFullYear()} EditWorksheets. Built for fast classroom practice.</p>
      </div>
    </footer>
  );
}