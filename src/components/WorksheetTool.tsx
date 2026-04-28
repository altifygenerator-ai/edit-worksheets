"use client";

import { useState } from "react";

type WorksheetError = {
  type?: string;
  original?: string;
  incorrect?: string;
  explanation?: string;
};

type Worksheet = {
  title?: string;
  instructions?: string;
  studentText?: string;
  answerKey?: string;
  errors?: WorksheetError[];
};

type WorksheetToolProps = {
  defaultGradeLevel?: string;
  defaultErrorAmount?: string;
  defaultErrorTypes?: string;
};

export default function WorksheetTool({
  defaultGradeLevel = "middle school",
  defaultErrorAmount = "medium",
  defaultErrorTypes = "mixed",
}: WorksheetToolProps) {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [gradeLevel, setGradeLevel] = useState(defaultGradeLevel);
  const [errorAmount, setErrorAmount] = useState(defaultErrorAmount);
  const [errorTypes, setErrorTypes] = useState(defaultErrorTypes);
  const [worksheet, setWorksheet] = useState<Worksheet | null>(null);
  const [loading, setLoading] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [error, setError] = useState("");

  async function generateFromText() {
    setLoading(true);
    setError("");
    setWorksheet(null);

    try {
      const res = await fetch("/api/generate-worksheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          gradeLevel,
          errorAmount,
          errorTypes,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to generate worksheet");

      setWorksheet(data.worksheet);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function generateFromPdf() {
    if (!file) {
      setError("Please upload a PDF first");
      return;
    }

    setLoading(true);
    setError("");
    setWorksheet(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("gradeLevel", gradeLevel);
      formData.append("errorAmount", errorAmount);
      formData.append("errorTypes", errorTypes);

      const res = await fetch("/api/upload-worksheet-pdf", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to generate from PDF");

      setWorksheet(data.worksheet);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function downloadPdf() {
    if (!worksheet) return;

    setPdfLoading(true);
    setError("");

    try {
      const res = await fetch("/api/worksheet-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(worksheet),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to generate PDF");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "editing-worksheet.pdf";
      a.click();

      window.URL.revokeObjectURL(url);
    } catch (err: any) {
      setError(err.message || "PDF download failed");
    } finally {
      setPdfLoading(false);
    }
  }

  return (
    <section id="tool" className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-xl md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">
              Worksheet Builder
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Create a printable editing worksheet.
            </h2>

            <p className="mt-3 text-neutral-600">
              Paste a passage or upload a PDF, then choose the grade level and
              error style.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <label>
                <span className="text-sm font-semibold text-neutral-700">
                  Grade
                </span>
                <select
                  value={gradeLevel}
                  onChange={(e) => setGradeLevel(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-[#f7f2e8] px-4 py-3 outline-none"
                >
                  <option>elementary</option>
                  <option>middle school</option>
                  <option>high school</option>
                  <option>ESL beginner</option>
                  <option>ESL intermediate</option>
                </select>
              </label>

              <label>
                <span className="text-sm font-semibold text-neutral-700">
                  Error amount
                </span>
                <select
                  value={errorAmount}
                  onChange={(e) => setErrorAmount(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-[#f7f2e8] px-4 py-3 outline-none"
                >
                  <option>light</option>
                  <option>medium</option>
                  <option>heavy</option>
                </select>
              </label>

              <label>
                <span className="text-sm font-semibold text-neutral-700">
                  Error type
                </span>
                <select
                  value={errorTypes}
                  onChange={(e) => setErrorTypes(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-neutral-200 bg-[#f7f2e8] px-4 py-3 outline-none"
                >
                  <option>mixed</option>
                  <option>grammar</option>
                  <option>spelling</option>
                  <option>punctuation</option>
                  <option>capitalization</option>
                </select>
              </label>
            </div>

            <label className="mt-6 block">
              <span className="text-sm font-semibold text-neutral-700">
                Paste text
              </span>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste a clean passage here..."
                className="mt-2 min-h-[220px] w-full rounded-2xl border border-neutral-200 bg-[#f7f2e8] px-4 py-4 outline-none placeholder:text-neutral-400"
              />
            </label>

            <button
              onClick={generateFromText}
              disabled={loading || !text.trim()}
              className="mt-5 w-full rounded-2xl bg-neutral-950 px-6 py-4 font-bold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate from Text"}
            </button>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-neutral-200" />
              <span className="text-sm text-neutral-400">or</span>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <label className="block rounded-2xl border border-dashed border-neutral-300 bg-[#f7f2e8] p-5">
              <span className="text-sm font-semibold text-neutral-700">
                Upload PDF
              </span>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="mt-3 block w-full text-sm text-neutral-600"
              />
            </label>

            <button
              onClick={generateFromPdf}
              disabled={loading || !file}
              className="mt-5 w-full rounded-2xl border border-neutral-300 px-6 py-4 font-bold transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate from PDF"}
            </button>

            {error && (
              <p className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </p>
            )}
          </div>

          <div className="rounded-[1.5rem] border border-neutral-200 bg-[#f7f2e8] p-5">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-black">Preview</h3>

              <button
                onClick={downloadPdf}
                disabled={!worksheet || pdfLoading}
                className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                {pdfLoading ? "Preparing..." : "Download PDF"}
              </button>
            </div>

            {!worksheet ? (
              <div className="mt-6 rounded-2xl bg-white p-6 text-neutral-500">
                Your worksheet preview will show here.
              </div>
            ) : (
              <div className="mt-6 space-y-5">
                <div className="rounded-2xl bg-white p-5">
                  <h4 className="font-black">{worksheet.title}</h4>
                  <p className="mt-2 text-sm text-neutral-600">
                    {worksheet.instructions}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <h4 className="font-bold text-emerald-700">
                    Student Version
                  </h4>
                  <p className="mt-3 whitespace-pre-wrap leading-7">
                    {worksheet.studentText}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <h4 className="font-bold text-emerald-700">Answer Key</h4>
                  <p className="mt-3 whitespace-pre-wrap leading-7">
                    {worksheet.answerKey}
                  </p>
                </div>

                {worksheet.errors && worksheet.errors.length > 0 && (
                  <div className="rounded-2xl bg-white p-5">
                    <h4 className="font-bold text-emerald-700">
                      Errors Added
                    </h4>
                    <div className="mt-3 space-y-3">
                      {worksheet.errors.map((item, index) => (
                        <div
                          key={index}
                          className="rounded-xl border border-neutral-200 p-3 text-sm"
                        >
                          <p className="font-bold">{item.type}</p>
                          <p className="mt-1 text-neutral-600">
                            Original: {item.original}
                          </p>
                          <p className="text-neutral-600">
                            Incorrect: {item.incorrect}
                          </p>
                          <p className="mt-1 text-neutral-700">
                            {item.explanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}