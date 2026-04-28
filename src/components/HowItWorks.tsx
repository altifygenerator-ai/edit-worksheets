const steps = [
  {
    title: "Add your text",
    text: "Paste a passage directly or upload a PDF you already have.",
  },
  {
    title: "Choose the settings",
    text: "Pick the grade level, error amount, and type of mistakes to include.",
  },
  {
    title: "Generate the worksheet",
    text: "Get a student version, answer key, and list of errors added.",
  },
  {
    title: "Download and print",
    text: "Save the worksheet as a PDF for class, tutoring, or home practice.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f7f2e8] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
          How it works
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
          Make editing practice in a few clicks.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-black text-white">
                {index + 1}
              </div>

              <h3 className="mt-5 text-xl font-black">{step.title}</h3>

              <p className="mt-3 leading-7 text-neutral-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}