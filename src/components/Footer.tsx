export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#f7f2e8]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-600">

        {/* Top Section */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Left */}
          <div>
            <p className="font-bold text-neutral-900">
              EditWorksheets
            </p>
            <p className="mt-2">
              Create editing worksheets from any text or PDF.
            </p>
          </div>

          {/* Right */}
          <div>
            <p className="font-bold text-neutral-900">
              Questions or feedback?
            </p>

            <p className="mt-2">
              Still improving this — if anything feels off or you have ideas,
              I’d love to hear it.
            </p>

            <a
              href="mailto:altifygenerator@gmail.com"
              className="mt-3 inline-block font-bold text-emerald-700"
            >
              Email me directly →
            </a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} EditWorksheets. Built for fast classroom practice.
        </div>

      </div>
    </footer>
  );
}