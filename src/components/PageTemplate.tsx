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
  exampleBlocks?: {
    incorrect: string;
    corrected: string;
    notes: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
};

export default function PageTemplate({
  title,
  description,
  heading,
  intro,
  gradeLevel = "middle school",
  errorAmount = "medium",
  errorTypes = "mixed",
  exampleBlocks = [],
  faq = [],
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

        {exampleBlocks.length > 0 && (
          <section className="bg-white px-6 py-20 text-neutral-950">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Examples
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Example errors for {title.toLowerCase()}
              </h2>

              <div className="mt-8 grid gap-4">
                {exampleBlocks.map((example, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                  >
                    <p className="font-semibold text-red-600">Incorrect:</p>
                    <p className="mt-1">{example.incorrect}</p>

                    <p className="mt-4 font-semibold text-green-700">
                      Correct:
                    </p>
                    <p className="mt-1">{example.corrected}</p>

                    <p className="mt-4 text-sm text-neutral-600">
                      {example.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {faq.length > 0 && (
          <section className="bg-neutral-50 px-6 py-20 text-neutral-950">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                FAQ
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Common questions about {title.toLowerCase()}
              </h2>

              <div className="mt-8 grid gap-4">
                {faq.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-neutral-200 bg-white p-5"
                  >
                    <h3 className="font-bold">{item.question}</h3>
                    <p className="mt-2 text-neutral-700">{item.answer}</p>
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