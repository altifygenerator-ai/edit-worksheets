// src/components/PageTemplate.tsx

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorksheetTool from "@/components/WorksheetTool";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import SeoLinks from "@/components/SeoLinks";
import Footer from "@/components/Footer";

type PageTemplateProps = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  gradeLevel?: string;
  errorAmount?: string;
  errorTypes?: string;
  examples?: string[];
};

export default function PageTemplate({
  title,
  description,
  heading,
  intro,
  gradeLevel,
  errorAmount,
  errorTypes,
  examples = [],
}: PageTemplateProps) {
  return (
    <>
      <Header />

      <main>
        <Hero title={heading} description={intro} />

        <WorksheetTool
  defaultGradeLevel={gradeLevel}
  defaultErrorAmount={errorAmount}
  defaultErrorTypes={errorTypes}
/>

        {examples.length > 0 && (
          <section className="bg-white px-6 py-20 text-neutral-950">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Examples
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Example errors for {title.toLowerCase()}
              </h2>

              <div className="mt-8 grid gap-4">
                {examples.map((example) => (
                  <div
                    key={example}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                  >
                    {example}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <HowItWorks />
        <UseCases />
        <SeoLinks />
      </main>

      <Footer />
    </>
  );
}