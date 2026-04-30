"use client";

import DownloadButton from "@/components/DownloadButton";
import CreditCounter from "@/components/CreditCounter";
import { useRef, useState } from "react";

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
  const previewRef = useRef<HTMLDivElement | null>(null);

  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [gradeLevel, setGradeLevel] = useState(defaultGradeLevel);
  const [errorAmount, setErrorAmount] = useState(defaultErrorAmount);
  const [errorTypes, setErrorTypes] = useState(defaultErrorTypes);
  const [worksheet, setWorksheet] = useState<Worksheet | null>(null);
  const [isEditingOutput, setIsEditingOutput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [noCredits, setNoCredits] = useState(false);
  const [creditRefreshKey, setCreditRefreshKey] = useState(0);
  const [savedWorksheetId, setSavedWorksheetId] = useState<string | null>(null);

  function updateWorksheetField(field: keyof Worksheet, value: string) {
    if (!worksheet) return;

    setWorksheet({
      ...worksheet,
      [field]: value,
    });

    if (savedWorksheetId) {
      setSavedWorksheetId(null);
    }
  }

  function scrollToPreview() {
    setTimeout(() => {
      previewRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  async function generateFromText() {
    setLoading(true);
    setError("");
    setSuccess("");
    setNoCredits(false);
    setWorksheet(null);
    setIsEditingOutput(false);
    setSavedWorksheetId(null);

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
      setSuccess("Generated successfully — review your worksheet below.");
      scrollToPreview();
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
    setSuccess("");
    setNoCredits(false);
    setWorksheet(null);
    setIsEditingOutput(false);
    setSavedWorksheetId(null);

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
      setSuccess("Generated successfully — review your worksheet below.");
      scrollToPreview();
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function saveWorksheet() {
    if (!worksheet) return;

    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/save-worksheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(worksheet),
      });

      const data = await res.json();

      if (res.status === 401) {
        window.location.href = `/login?from=${encodeURIComponent(
          window.location.pathname
        )}`;
        return;
      }

      if (!res.ok) {
        throw new Error(data.error || "Failed to save worksheet");
      }

      setSavedWorksheetId(data.id);
      setSuccess("Worksheet saved — you can find it in your dashboard.");
    } catch (err: any) {
      setError(err.message || "Failed to save worksheet");
    }
  }

  async function downloadPdf() {
    if (!worksheet) return;

    setPdfLoading(true);
    setError("");
    setSuccess("");
    setNoCredits(false);

    try {
      const res = await fetch("/api/worksheet-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          worksheet,
          worksheetId: savedWorksheetId,
        }),
      });

      if (!res.ok) {
        let data: any = {};

        try {
          data = await res.json();
        } catch {
          data = {};
        }

        if (res.status === 401) {
          window.location.href = `/login?from=${encodeURIComponent(
            window.location.pathname
          )}`;
          return;
        }

        if (res.status === 402) {
          setNoCredits(true);
          setError(
            "You’re out of credits — grab more below to download your worksheet."
          );
          return;
        }

        throw new Error(data.error || "Failed to generate PDF");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "editing-worksheet.pdf";
      a.click();

      window.URL.revokeObjectURL(url);
      setCreditRefreshKey((prev) => prev + 1);
      setSuccess("PDF ready — your download has started.");
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
              Create editing worksheets from any text.
            </h2>

            <p className="mt-3 text-neutral-700 font-medium">
              Paste a passage or upload a PDF and generate a clean worksheet in seconds.
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              Use it for bell work, homework, writing centers, or quick daily practice.
            </p>

            <p className="mt-2 text-sm font-semibold text-neutral-800">
              Free to generate — download printable PDFs with answer keys using credits.
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
              {loading ? "Generating worksheet..." : "Generate from Text"}
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

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Best results come from simple PDFs with normal text.
                Table-heavy documents may not convert cleanly yet.
              </p>

              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="mt-3 block w-full text-sm text-neutral-600"
              />

              {file && (
                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                  If the worksheet looks messy after upload, try copying the
                  text from the PDF and pasting it into the text box instead.
                  That usually gives cleaner results.
                </div>
              )}
            </label>

            <button
              onClick={generateFromPdf}
              disabled={loading || !file}
              className="mt-5 w-full rounded-2xl border border-neutral-300 px-6 py-4 font-bold transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Generating worksheet..." : "Generate from PDF"}
            </button>

            {success && (
              <p className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                {success}
              </p>
            )}

            {error && (
              <p className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </p>
            )}

            {noCredits && (
              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                <p className="font-bold">You’re out of PDF credits.</p>
                <p className="mt-1">
                  You can still generate worksheets for free. Add credits on
                  your dashboard when you want to download clean printable PDFs
                  with answer keys.
                </p>
                <a
                  href={`/dashboard?from=${encodeURIComponent(
                    window.location.pathname
                  )}`}
                  className="mt-3 inline-flex rounded-full bg-neutral-950 px-4 py-2 text-xs font-bold text-white"
                >
                  Get PDF credits
                </a>
              </div>
            )}
          </div>

          <div
            ref={previewRef}
            className="rounded-[1.5rem] border border-neutral-200 bg-[#f7f2e8] p-5"
          >
            <div className="space-y-4">
  <div className="flex flex-wrap items-start justify-between gap-3">
    <div>
      <h3 className="text-2xl font-black">Worksheet Preview</h3>
      <p className="mt-1 text-sm text-neutral-600">
        Student copy, answer key, and error notes.
      </p>
    </div>

    <CreditCounter refreshKey={creditRefreshKey} />
  </div>

  {worksheet && (
    <div className="grid gap-3 sm:grid-cols-3">
      <button
        onClick={() => setIsEditingOutput((prev) => !prev)}
        className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm font-bold text-neutral-800 transition hover:bg-neutral-100"
      >
        {isEditingOutput ? "Preview Worksheet" : "Edit Output"}
      </button>

      <button
        onClick={saveWorksheet}
        disabled={!worksheet || !!savedWorksheetId}
        className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm font-bold text-neutral-800 transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {savedWorksheetId ? "Saved" : "Save Worksheet"}
      </button>

      <DownloadButton onDownload={downloadPdf} />
    </div>
  )}

  {pdfLoading && (
    <p className="text-xs text-neutral-500">Preparing PDF...</p>
  )}
</div>

            {!worksheet ? (
              <div className="mt-6 rounded-2xl bg-white p-6 text-neutral-500">
                Your worksheet preview will show here after you generate one.
              </div>
            ) : isEditingOutput ? (
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                  <h4 className="font-bold text-emerald-700">
                    Edit Worksheet Output
                  </h4>
                  <p className="mt-1 text-sm text-neutral-600">
                    Changes here will be used when you save or download the worksheet.
                  </p>

                  <label className="mt-5 block">
                    <span className="text-sm font-semibold text-neutral-700">
                      Title
                    </span>
                    <input
                      value={worksheet.title || ""}
                      onChange={(e) =>
                        updateWorksheetField("title", e.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-neutral-200 bg-[#f7f2e8] px-4 py-3 outline-none"
                    />
                  </label>

                  <label className="mt-5 block">
                    <span className="text-sm font-semibold text-neutral-700">
                      Directions
                    </span>
                    <textarea
                      value={worksheet.instructions || ""}
                      onChange={(e) =>
                        updateWorksheetField("instructions", e.target.value)
                      }
                      className="mt-2 min-h-[90px] w-full rounded-xl border border-neutral-200 bg-[#f7f2e8] px-4 py-3 outline-none"
                    />
                  </label>

                  <label className="mt-5 block">
                    <span className="text-sm font-semibold text-neutral-700">
                      Student Version
                    </span>
                    <textarea
                      value={worksheet.studentText || ""}
                      onChange={(e) =>
                        updateWorksheetField("studentText", e.target.value)
                      }
                      className="mt-2 min-h-[180px] w-full rounded-xl border border-neutral-200 bg-[#f7f2e8] px-4 py-3 leading-7 outline-none"
                    />
                  </label>

                  <label className="mt-5 block">
                    <span className="text-sm font-semibold text-neutral-700">
                      Answer Key
                    </span>
                    <textarea
                      value={worksheet.answerKey || ""}
                      onChange={(e) =>
                        updateWorksheetField("answerKey", e.target.value)
                      }
                      className="mt-2 min-h-[180px] w-full rounded-xl border border-neutral-200 bg-[#f7f2e8] px-4 py-3 leading-7 outline-none"
                    />
                  </label>
                </div>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                <div className="mx-auto max-w-[680px] border border-neutral-300 bg-white p-7 text-neutral-950 shadow-md">
                  <div className="pb-4">
                    <h4 className="text-center text-2xl font-black leading-tight">
                      {worksheet.title || "Editing Practice Worksheet"}
                    </h4>

                    <div className="mt-6 grid gap-5 text-sm md:grid-cols-2">
                      <div>
                        <span className="font-bold">Name:</span>
                        <span className="ml-2 inline-block w-44 border-b border-neutral-900 align-middle" />
                      </div>

                      <div className="md:text-right">
                        <span className="font-bold">Date:</span>
                        <span className="ml-2 inline-block w-36 border-b border-neutral-900 align-middle" />
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-b border-neutral-300 pb-4 text-xs font-semibold text-neutral-500">
                      <span>Grade: {gradeLevel}</span>
                      <span>Subject: Language Arts</span>
                      <span>Practice: Editing</span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="font-bold">Directions:</p>
                    <p className="mt-1 leading-7 text-neutral-800">
                      {worksheet.instructions ||
                        "Read the passage below. Find and correct the spelling, grammar, punctuation, and capitalization mistakes."}
                    </p>
                  </div>

                  <div className="mt-7 border-t border-neutral-200 pt-5">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                      Student Version
                    </p>

                    <p className="whitespace-pre-wrap leading-8 text-neutral-950">
                      {worksheet.studentText}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                    <h4 className="font-bold text-emerald-700">Answer Key</h4>
                    <span className="text-xs font-semibold text-neutral-400">
                      Corrected version
                    </span>
                  </div>

                  <p className="mt-4 whitespace-pre-wrap rounded-xl bg-emerald-50 p-4 leading-7 text-neutral-900">
                    {worksheet.answerKey}
                  </p>
                </div>

                {worksheet.errors && worksheet.errors.length > 0 && (
                  <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                    <h4 className="font-bold text-emerald-700">
                      Errors Added
                    </h4>
                    <div className="mt-3 space-y-3">
                      {worksheet.errors.map((item, index) => (
                        <div
                          key={index}
                          className="rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-sm"
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

                <p className="rounded-2xl border border-neutral-200 bg-white p-4 text-sm leading-6 text-neutral-600">
                  Want a clean printable copy? Download the PDF version with the
                  worksheet and answer key using credits.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}