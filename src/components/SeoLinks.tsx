// src/components/SeoLinks.tsx

import Link from "next/link";
import { seoPages } from "@/data/seo-pages";

export default function SeoLinks() {
  return (
    <section className="bg-white px-6 py-20 text-neutral-950">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Worksheet Resources
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-5xl">
          Popular editing worksheet pages
        </h2>

        <p className="mt-4 max-w-2xl text-neutral-600">
          Find quick editing practice pages for grammar, punctuation, sentence correction, and grade-level writing skills.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {Object.entries(seoPages).map(([slug, page]) => (
            <Link
              key={slug}
              href={`/seo/${slug}`}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold">{page.title}</h3>
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