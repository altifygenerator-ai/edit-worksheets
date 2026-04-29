import Link from "next/link";

type HeroProps = {
  title?: string;
  description?: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <section className="bg-[#f7f2e8] px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        
        {/* LEFT */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
            Editing Worksheet Generator
          </p>

          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-neutral-950 md:text-6xl">
            {title ?? "Turn any text into a printable editing worksheet."}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
            {description ??
              "Paste a passage or upload a PDF, choose the grade level, and create student worksheets with realistic spelling, grammar, punctuation, and capitalization errors—ready to print with answer keys."}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#tool"
              className="rounded-full bg-neutral-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-neutral-800"
            >
              Create a Worksheet
            </Link>

            <Link href="/login">Sign up to save PDF credits</Link>

            <Link
              href="/seo/5th-grade-editing-passages"
              className="text-sm font-semibold text-neutral-700 underline underline-offset-4 hover:text-neutral-950"
            >
              See example worksheets
            </Link>
            <Link
  href="/worksheets"
  className="text-sm font-semibold text-neutral-700 underline underline-offset-4 hover:text-neutral-950"
>
  Browse all worksheet types
</Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-neutral-600">
            <span>✔ Printable PDFs</span>
            <span>✔ Answer keys included</span>
            <span>✔ Works with your own text</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
       <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-xl">
  <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
    Example Preview
  </p>

  <div className="mt-5 border border-neutral-300 bg-white p-6 shadow-sm">
    <h3 className="text-center text-2xl font-black">
      Editing Worksheet
    </h3>

    <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
      <div>
        <span className="font-bold">Name:</span>
        <span className="ml-2 inline-block w-28 border-b border-black" />
      </div>

      <div className="text-right">
        <span className="font-bold">Date:</span>
        <span className="ml-2 inline-block w-24 border-b border-black" />
      </div>
    </div>

    <div className="mt-4 border-t border-neutral-200 pt-4">
      <p className="text-sm font-bold">Directions:</p>
      <p className="mt-1 text-sm leading-6 text-neutral-700">
        Read the passage below. Find and correct the mistakes.
      </p>
    </div>

    <div className="mt-4 border-t border-neutral-200 pt-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
        Student Version
      </p>

      <p className="mt-3 text-sm leading-6 text-neutral-900">
        the students was excited to visit the science museum on friday.
        they learned about planets animals and weather patterns.
      </p>
    </div>
  </div>

  <div className="mt-5 border-t border-neutral-200 pt-4">
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
      Answer Key
    </p>

    <p className="mt-3 text-sm leading-6 text-neutral-700">
      The students were excited to visit the science museum on Friday.
      They learned about planets, animals, and weather patterns.
    </p>
  </div>
</div>

          {/* floating badge */}
          <div className="absolute -bottom-6 -right-6 max-w-xs rounded-2xl bg-neutral-950 p-5 text-white shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Ready in seconds
            </p>
            <p className="mt-2 text-lg font-bold leading-tight">
              Generate worksheets instantly from any text or PDF.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}