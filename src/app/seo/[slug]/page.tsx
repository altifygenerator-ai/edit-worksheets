import { notFound } from "next/navigation";
import { seoPages } from "@/data/seo-pages";
import PageTemplate from "@/components/PageTemplate";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(seoPages).map((slug) => ({
    slug,
  }));
}

export default async function SeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = seoPages[slug];

  if (!page) notFound();

  return (
    <PageTemplate
      title={page.title}
      description={page.description}
      heading={page.heading}
      intro={page.intro}
      gradeLevel={page.gradeLevel}
      errorAmount={page.errorAmount}
      errorTypes={page.errorTypes}
      examples={page.examples}
    />
  );
}