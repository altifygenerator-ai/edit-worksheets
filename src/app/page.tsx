import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorksheetTool from "@/components/WorksheetTool";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import SeoLinks from "@/components/SeoLinks";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Editing Worksheet Generator | Create Printable Worksheets",
  description:
    "Create printable editing worksheets from any text with grammar, spelling, punctuation, capitalization errors, and answer keys.",
  alternates: {
    canonical: "https://www.editworksheets.org/",
  },
};

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero
          title="Create Editing Worksheets From Any Text"
          description="Paste in your text and generate a clean editing worksheet with realistic spelling, grammar, punctuation, and capitalization errors."
        />

        <WorksheetTool
          defaultGradeLevel="middle school"
          defaultErrorAmount="medium"
          defaultErrorTypes="mixed"
        />

        <section className="bg-white px-6 py-20 text-neutral-950">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Printable worksheet maker
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Make editing practice that actually fits your lesson
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-700">
              EditWorksheets.org helps teachers, tutors, homeschool parents, and
              students turn regular text into editing practice. You can create
              worksheets with grammar mistakes, punctuation errors, spelling
              issues, capitalization problems, and corrected answer keys without
              searching for a worksheet that only almost fits.
            </p>
          </div>
        </section>

        <HowItWorks />
        <UseCases />

        <section className="bg-neutral-50 px-6 py-20 text-neutral-950">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What it helps with
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Grammar, punctuation, capitalization, and proofreading practice
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Sentence correction practice",
                "Paragraph editing worksheets",
                "Daily editing warmups",
                "Printable grammar review",
                "Proofreading practice with answer keys",
                "Punctuation and capitalization review",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <SeoLinks />
      </main>

      <Footer />
    </>
  );
}