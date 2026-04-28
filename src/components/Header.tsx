import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-[#f7f2e8]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-xl font-black tracking-tight">
          EditWorksheets
        </Link>

        <nav className="flex items-center gap-5 text-sm font-medium text-neutral-700">
          <Link href="/5th-grade-editing-passages">Examples</Link>
          <Link href="/sentence-correction-exercises">Practice</Link>
          <Link
            href="/#tool"
            className="rounded-full bg-neutral-950 px-4 py-2 text-white"
          >
            Create Worksheet
          </Link>
        </nav>
      </div>
    </header>
  );
}