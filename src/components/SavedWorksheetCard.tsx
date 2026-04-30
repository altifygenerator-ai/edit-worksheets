"use client";

import { useRouter } from "next/navigation";

type Worksheet = {
  title?: string;
  instructions?: string;
  studentText?: string;
  answerKey?: string;
  errors?: any[];
};

type Props = {
  id: string;
  title: string | null;
  createdAt: string;
  pdfDownloaded: boolean;
  worksheet: Worksheet;
};

export default function SavedWorksheetCard({
  id,
  title,
  createdAt,
  pdfDownloaded,
  worksheet,
}: Props) {
  const router = useRouter();

  async function redownloadPdf() {
    const res = await fetch("/api/worksheet-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        worksheet,
        worksheetId: id,
      }),
    });

    if (res.status === 401) {
      window.location.href = "/login";
      return;
    }

    if (res.status === 402) {
      window.location.href = "/dashboard?credits=needed";
      return;
    }

    if (!res.ok) {
      alert("Could not download worksheet");
      return;
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "editing-worksheet.pdf";
    a.click();

    window.URL.revokeObjectURL(url);
    router.refresh();
  }

  async function deleteWorksheet() {
    const confirmed = confirm("Delete this saved worksheet?");
    if (!confirmed) return;

    const res = await fetch("/api/delete-worksheet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ worksheetId: id }),
    });

    if (!res.ok) {
      alert("Could not delete worksheet");
      return;
    }

    router.refresh();
  }

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-lg font-black text-neutral-950">
            {title || worksheet.title || "Editing Worksheet"}
          </p>

          <p className="mt-1 text-sm text-neutral-500">
            Saved {new Date(createdAt).toLocaleDateString()}
          </p>

          <p className="mt-2 text-xs font-semibold text-neutral-500">
            {pdfDownloaded
              ? "PDF redownload is free"
              : "First PDF download uses 1 credit"}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={redownloadPdf}
            className="rounded-xl bg-neutral-950 px-4 py-2 text-sm font-bold text-white"
          >
            {pdfDownloaded ? "Redownload PDF" : "Download PDF"}
          </button>

          <button
            onClick={deleteWorksheet}
            className="rounded-xl border border-red-200 px-4 py-2 text-sm font-bold text-red-700 hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="mt-5 rounded-2xl bg-[#f7f2e8] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
          Preview
        </p>

        <p className="mt-3 line-clamp-5 whitespace-pre-wrap text-sm leading-6 text-neutral-700">
          {worksheet.studentText}
        </p>
      </div>
    </div>
  );
}