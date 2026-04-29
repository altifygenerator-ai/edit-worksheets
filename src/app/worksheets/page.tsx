import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { seoPages } from "@/data/seo-pages";

const categoryLabels = {
  "grade-level": "Grade-Level Editing Worksheets",
  grammar: "Grammar Worksheets",
  punctuation: "Punctuation Worksheets",
  proofreading: "Proofreading Practice",
  printable: "Printable Worksheet Resources",
};

export default function WorksheetsPage() {
  const entries = Object.entries(seoPages);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f7f2e8] px-6 py-20 text-neutral-950">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
            Worksheet Library
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Editing worksheet resources
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
            Browse editing worksheet pages by grade level, grammar skill,
            punctuation practice, proofreading, and printable worksheet type.
          </p>

          <div className="mt-14 space-y-14">
            {Object.entries(categoryLabels).map(([category, label]) => {
              const pages = entries.filter(
                ([, page]) => page.category === category
              );

              if (pages.length === 0) return null;

              return (
                <section key={category}>
                  <h2 className="text-2xl font-black">{label}</h2>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {pages.map(([slug, page]) => (
                      <Link
                        key={slug}
                        href={`/seo/${slug}`}
                        className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        <h3 className="text-lg font-black">{page.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-neutral-600">
                          {page.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}