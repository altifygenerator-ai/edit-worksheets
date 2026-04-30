import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { createClient } from "@/lib/supabase/server";
export const runtime = "nodejs";

type WorksheetError = {
  type?: string;
  original?: string;
  incorrect?: string;
  explanation?: string;
};

type WorksheetData = {
  title?: string;
  instructions?: string;
  studentText?: string;
  answerKey?: string;
  errors?: WorksheetError[];
};

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "LOGIN_REQUIRED" }, { status: 401 });
    }

    const body = await req.json();

    const worksheetId = body.worksheetId;
    const worksheet = body.worksheet || body;

    if (!worksheet || !worksheet.studentText) {
      return NextResponse.json(
        { error: "Missing worksheet data" },
        { status: 400 }
      );
    }

    let alreadyDownloaded = false;

    if (worksheetId) {
      const { data: savedWorksheet, error: savedError } = await supabase
        .from("worksheets")
        .select("pdf_downloaded")
        .eq("id", worksheetId)
        .eq("user_id", user.id)
        .single();

      if (savedError || !savedWorksheet) {
        return NextResponse.json(
          { error: "Saved worksheet not found" },
          { status: 404 }
        );
      }

      alreadyDownloaded = savedWorksheet.pdf_downloaded === true;
    }

    if (!alreadyDownloaded) {
      const { data: creditUsed, error: creditError } = await supabase.rpc(
        "use_pdf_credit",
        {
          user_id: user.id,
        }
      );

      if (creditError || !creditUsed) {
        return NextResponse.json({ error: "NO_CREDITS" }, { status: 402 });
      }
    }

    const pdfBytes = await createWorksheetPdf(worksheet);

    if (worksheetId && !alreadyDownloaded) {
      await supabase
        .from("worksheets")
        .update({ pdf_downloaded: true })
        .eq("id", worksheetId)
        .eq("user_id", user.id);
    }

    return new NextResponse(new Uint8Array(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="editing-worksheet.pdf"`,
      },
    });
  } catch (err) {
    console.error("PDF ROUTE ERROR:", err);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}

async function createWorksheetPdf(worksheet: WorksheetData) {
  const pdfDoc = await PDFDocument.create();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const pageWidth = 612;
  const pageHeight = 792;
  const margin = 50;
  const maxWidth = pageWidth - margin * 2;
  const lineHeight = 16;

  function addWrappedText(
    page: any,
    text: string,
    x: number,
    y: number,
    size = 11,
    bold = false
  ) {
    const activeFont = bold ? boldFont : font;
    const words = text.split(/\s+/);
    let line = "";
    let currentY = y;

    for (const word of words) {
      const testLine = line ? `${line} ${word}` : word;
      const width = activeFont.widthOfTextAtSize(testLine, size);

      if (width > maxWidth) {
        page.drawText(line, {
          x,
          y: currentY,
          size,
          font: activeFont,
          color: rgb(0, 0, 0),
        });

        line = word;
        currentY -= lineHeight;
      } else {
        line = testLine;
      }
    }

    if (line) {
      page.drawText(line, {
        x,
        y: currentY,
        size,
        font: activeFont,
        color: rgb(0, 0, 0),
      });
      currentY -= lineHeight;
    }

    return currentY;
  }

  function newPage() {
    return pdfDoc.addPage([pageWidth, pageHeight]);
  }

  let page = newPage();
  let y = pageHeight - margin;

    const title = worksheet.title || "Editing Practice Worksheet";

  const titleWidth = boldFont.widthOfTextAtSize(title, 22);

  page.drawText(title, {
    x: (pageWidth - titleWidth) / 2,
    y,
    size: 22,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  y -= 40;

  page.drawText("Name: ______________________________", {
    x: margin,
    y,
    size: 11,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  page.drawText("Date: __________________", {
    x: pageWidth - margin - 160,
    y,
    size: 11,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  y -= 28;

  page.drawText("Grade: __________    Subject: Language Arts    Practice: Editing", {
    x: margin,
    y,
    size: 10,
    font,
    color: rgb(0.25, 0.25, 0.25),
  });

  y -= 30;

  page.drawText("Directions:", {
    x: margin,
    y,
    size: 12,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  y -= 18;

  y = addWrappedText(
    page,
    worksheet.instructions ||
      "Read the passage below. Find and correct the spelling, grammar, punctuation, and capitalization errors.",
    margin,
    y,
    11
  );

  y -= 20;

  page.drawText("Student Version", {
    x: margin,
    y,
    size: 14,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  y -= 25;

  y = addWrappedText(page, worksheet.studentText || "", margin, y, 11);

  y -= 25;

  page.drawText("Corrections:", {
    x: margin,
    y,
    size: 13,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  y -= 25;

  for (let i = 1; i <= 8; i++) {
    page.drawText(`${i}. ____________________________________________`, {
      x: margin,
      y,
      size: 11,
      font,
      color: rgb(0, 0, 0),
    });
    y -= 24;
  }

  page = newPage();
  y = pageHeight - margin;

  page.drawText("Answer Key", {
    x: margin,
    y,
    size: 22,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  y -= 40;

  page.drawText("Corrected Version", {
    x: margin,
    y,
    size: 14,
    font: boldFont,
    color: rgb(0, 0, 0),
  });

  y -= 25;

  y = addWrappedText(page, worksheet.answerKey || "", margin, y, 11);

  if (worksheet.errors && worksheet.errors.length > 0) {
    y -= 25;

    if (y < 100) {
      page = newPage();
      y = pageHeight - margin;
    }

    page.drawText("Errors Added", {
      x: margin,
      y,
      size: 14,
      font: boldFont,
      color: rgb(0, 0, 0),
    });

    y -= 25;

    worksheet.errors.forEach((error, index) => {
      if (y < 120) {
        page = newPage();
        y = pageHeight - margin;
      }

      y = addWrappedText(
        page,
        `${index + 1}. ${error.type || "Error"}`,
        margin,
        y,
        11,
        true
      );

      if (error.original || error.incorrect) {
        y = addWrappedText(
          page,
          `Original: ${error.original || "N/A"}`,
          margin,
          y,
          10
        );

        y = addWrappedText(
          page,
          `Incorrect: ${error.incorrect || "N/A"}`,
          margin,
          y,
          10
        );
      }

      if (error.explanation) {
        y = addWrappedText(
          page,
          `Explanation: ${error.explanation}`,
          margin,
          y,
          10
        );
      }

      y -= 10;
    });
  }

  return await pdfDoc.save();
}