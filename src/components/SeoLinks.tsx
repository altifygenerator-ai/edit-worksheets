import Link from "next/link";
import { seoPages } from "@/data/seo-pages";

export default function SeoLinks() {
  const featuredPages = Object.entries(seoPages).slice(0, 9);

  return (
    <section className="bg-white px-6 py-20 text-neutral-950">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
          Worksheet Resources
        </p>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Popular editing worksheet pages
            </h2>

            <p className="mt-4 max-w-2xl text-neutral-600">
              Find quick editing practice pages for grammar, punctuation,
              proofreading, and grade-level writing skills.
            </p>
          </div>

          <Link
            href="/worksheets"
            className="rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-neutral-800"
          >
            View all worksheets
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featuredPages.map(([slug, page]) => (
            <Link
              key={slug}
              href={`/seo/${slug}`}
              className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-black">{page.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}