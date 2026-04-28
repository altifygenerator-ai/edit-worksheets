import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#f7f2e8] px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        
        {/* LEFT */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
            Editing Worksheet Generator
          </p>

          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-neutral-950 md:text-6xl">
            Turn any text into a printable editing worksheet.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
            Paste a passage or upload a PDF, choose the grade level, and create
            student worksheets with realistic spelling, grammar, punctuation,
            and capitalization errors—ready to print with answer keys.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#tool"
              className="rounded-full bg-neutral-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-neutral-800"
            >
              Create a Worksheet
            </Link>

            <Link
              href="/5th-grade-editing-passages"
              className="text-sm font-semibold text-neutral-700 underline underline-offset-4 hover:text-neutral-950"
            >
              See example worksheets
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
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-xl">
            
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
              Example Preview
            </p>

            <h3 className="mt-2 text-lg font-black text-neutral-950">
              Student Worksheet
            </h3>

            <p className="mt-4 text-sm leading-6 text-neutral-800">
              the students was excited to visit the science museum on friday.
              they learned about planets animals and weather patterns.
            </p>

            <div className="mt-6 border-t border-neutral-200 pt-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Answer Key
              </p>

              <p className="mt-2 text-sm leading-6 text-neutral-700">
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