import Link from "next/link";
import { seoPages } from "@/data/SeoPages";

type Props = {
  related: string[];
};

export default function RelatedPages({ related }: Props) {
  const pages = related
    .map((slug) => ({ slug, page: seoPages[slug] }))
    .filter((item) => item.page);

  if (pages.length === 0) return null;

  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <h2 className="text-2xl font-bold">More worksheet pages</h2>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {pages.map(({ slug, page }) => (
          <Link
            key={slug}
            href={`/${slug}`}
            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="font-bold text-neutral-950">{page.heading}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              {page.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}