// src/components/PageTemplate.tsx

import Link from "next/link";
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
  category?: string;
  whyThisMatters?: string;
  commonMistakes?: string[];
  classroomTips?: string[];
  skillsCovered?: string[];
  whenToUse?: string[];
  difficultyNotes?: string;
  related?: string[];
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
  heading,
  intro,
  gradeLevel = "middle school",
  errorAmount = "medium",
  errorTypes = "mixed",
  category = "proofreading",
  whyThisMatters,
  commonMistakes = [],
  classroomTips = [],
  skillsCovered = [],
  whenToUse = [],
  difficultyNotes,
  related = [],
  exampleBlocks = [],
  faq = [],
}: PageTemplateProps) {
  const isGrade = category === "grade-level";
  const isGrammar = category === "grammar";
  const isPunctuation = category === "punctuation";
  const isPrintable = category === "printable";

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

        {(skillsCovered.length > 0 || whenToUse.length > 0) && (
          <section className="bg-white px-6 py-20 text-neutral-950">
            <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
              {skillsCovered.length > 0 && (
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                    Skills
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">
                    {isGrade
                      ? `Skills students practice in ${gradeLevel}`
                      : `Skills covered in this worksheet`}
                  </h2>

                  <div className="mt-6 grid gap-3">
                    {skillsCovered.map((skill) => (
                      <div
                        key={skill}
                        className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {whenToUse.length > 0 && (
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                    Classroom use
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">
                    When teachers can use this
                  </h2>

                  <div className="mt-6 grid gap-3">
                    {whenToUse.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {commonMistakes.length > 0 && (
          <section className="bg-neutral-950 px-6 py-20 text-white">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                {isPunctuation ? "Punctuation focus" : "Common mistakes"}
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                {isGrammar
                  ? "Common grammar mistakes this helps fix"
                  : isPunctuation
                  ? "Punctuation mistakes students can practice"
                  : "Common student mistakes this worksheet targets"}
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {commonMistakes.map((mistake) => (
                  <div
                    key={mistake}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-neutral-200"
                  >
                    {mistake}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {whyThisMatters && (
          <section className="bg-white px-6 py-20 text-neutral-950">
            <div className="mx-auto max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Why it matters
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Why this practice helps students write better
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-700">
                {whyThisMatters}
              </p>
            </div>
          </section>
        )}

        {isPrintable && (
          <section className="bg-neutral-50 px-6 py-20 text-neutral-950">
            <div className="mx-auto max-w-5xl rounded-3xl bg-neutral-950 p-8 text-white md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Printable format
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Built for printing, marking up, and reviewing fast
              </h2>
              <p className="mt-5 max-w-3xl text-neutral-300">
                This page is designed around printable classroom use, so teachers
                can generate a worksheet, use it for independent practice, and
                review corrections with an answer key.
              </p>
            </div>
          </section>
        )}

        {exampleBlocks.length > 0 && (
          <section className="bg-white px-6 py-20 text-neutral-950">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Examples
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Example corrections for {title.toLowerCase()}
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

        {classroomTips.length > 0 && (
          <section className="bg-neutral-50 px-6 py-20 text-neutral-950">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Teacher tips
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Simple ways to use this in class
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {classroomTips.map((tip) => (
                  <div
                    key={tip}
                    className="rounded-2xl border border-neutral-200 bg-white p-5"
                  >
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {difficultyNotes && (
          <section className="bg-white px-6 py-20 text-neutral-950">
            <div className="mx-auto max-w-4xl rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Difficulty
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Difficulty notes for this worksheet
              </h2>
              <p className="mt-5 leading-8 text-neutral-700">
                {difficultyNotes}
              </p>
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

        {related.length > 0 && (
          <section className="bg-white px-6 py-20 text-neutral-950">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Related
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Related worksheet pages
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                {related.map((slug) => (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="rounded-full border border-neutral-300 px-4 py-2 text-sm capitalize transition hover:bg-neutral-950 hover:text-white"
                  >
                    {slug.replaceAll("-", " ")}
                  </Link>
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