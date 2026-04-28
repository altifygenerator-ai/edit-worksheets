import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import BuyCredits from "@/components/BuyCredits";
import Link from "next/link";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { from?: string };
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("email, pdf_credits")
    .eq("id", user.id)
    .single();

  const from = searchParams?.from;

  return (
    <main className="min-h-screen bg-[#f7f2e8] px-6 py-20 text-neutral-950">
      <div className="mx-auto max-w-5xl">

        {/* 🔹 ADDED BACK LINK */}
        {from && (
          <div className="mb-6">
            <Link
              href={from}
              className="text-sm font-semibold text-neutral-600 underline underline-offset-4 hover:text-neutral-950"
            >
              ← Back to where you were
            </Link>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
              EditWorksheets Account
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight">
              Your dashboard
            </h1>

            <p className="mt-3 text-neutral-600">
              {profile?.email || user.email}
            </p>
          </div>

        <Link
  href="/"
  className="rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white"
>
  Back to Worksheet Tool
</Link>
        </div>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-xl">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div className="rounded-2xl bg-neutral-100 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-neutral-500">
                PDF Credits
              </p>

              <p className="mt-2 text-6xl font-black">
                {profile?.pdf_credits ?? 0}
              </p>

              <p className="mt-3 text-sm text-neutral-600">
                Each PDF download uses 1 credit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black">Buy more PDF credits</h2>
              <p className="mt-2 text-neutral-600">
                Generate worksheets for free, then use credits when you want to
                download a clean printable PDF with the answer key.
              </p>

              <BuyCredits />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}