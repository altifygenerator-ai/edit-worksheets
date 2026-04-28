const useCases = [
  "Classroom editing practice",
  "Homeschool grammar work",
  "ESL correction exercises",
  "Tutoring worksheets",
  "Morning work",
  "Substitute lesson plans",
  "Writing warmups",
  "Printable answer keys",
];

export default function UseCases() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-neutral-950 p-8 text-white md:p-12">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-400">
              Built for practice
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Useful for teachers, tutors, and homeschool lessons.
            </h2>

            <p className="mt-5 leading-8 text-neutral-300">
              Use it when you need quick editing practice without writing every
              mistake by hand. Create student-ready passages, sentence
              correction work, and printable answer keys from your own text.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}