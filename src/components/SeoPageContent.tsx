type Props = {
  heading: string;
  intro: string;
  examples: string[];
};

export default function SeoPageContent({ heading, intro, examples }: Props) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-14">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
        Free Worksheet Practice
      </p>

      <h1 className="mt-4 text-4xl font-black tracking-tight text-neutral-950 md:text-6xl">
        {heading}
      </h1>

      <p className="mt-5 text-lg leading-8 text-neutral-700">{intro}</p>

      <div className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold">Example Sentences</h2>

        <div className="mt-5 space-y-3">
          {examples.map((example, index) => (
            <p
              key={index}
              className="rounded-2xl bg-neutral-100 px-4 py-3 text-neutral-800"
            >
              {index + 1}. {example}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}