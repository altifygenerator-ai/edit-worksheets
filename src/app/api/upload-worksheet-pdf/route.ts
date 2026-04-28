import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File | null;
    const gradeLevel = formData.get("gradeLevel") || "middle school";
    const errorAmount = formData.get("errorAmount") || "medium";
    const errorTypes = formData.get("errorTypes") || "mixed";

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");

    const uploadRes = await fetch("https://api.pdf.co/v1/file/upload/base64", {
      method: "POST",
      headers: {
        "x-api-key": process.env.PDFCO_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file: base64,
        name: file.name,
      }),
    });

    const uploadData = await uploadRes.json();

    if (!uploadRes.ok || !uploadData.url) {
      console.error("UPLOAD ERROR:", uploadData);
      return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }

    const pdfRes = await fetch("https://api.pdf.co/v1/pdf/convert/to/text", {
      method: "POST",
      headers: {
        "x-api-key": process.env.PDFCO_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: uploadData.url,
        inline: true,
      }),
    });

    const pdfData = await pdfRes.json();

    if (!pdfRes.ok) {
      console.error("PDF ERROR:", pdfData);
      return NextResponse.json(
        { error: "PDF extraction failed" },
        { status: 500 }
      );
    }

    const text = pdfData.body || "";

    if (!text) {
      return NextResponse.json(
        { error: "No text extracted" },
        { status: 400 }
      );
    }

    const aiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: `
You are creating a student editing worksheet.

Take the provided text and generate a worksheet with realistic grammar, spelling, punctuation, and capitalization errors.

Return ONLY valid JSON with this structure:

{
  "title": "Editing Worksheet",
  "instructions": "Read the passage below. Find and correct the spelling, grammar, punctuation, and capitalization errors.",
  "studentText": "Text with errors added here.",
  "answerKey": "Corrected version here.",
  "errors": [
    {
      "type": "grammar | spelling | punctuation | capitalization",
      "original": "correct original text",
      "incorrect": "changed incorrect text",
      "explanation": "short explanation of the mistake"
    }
  ]
}

Worksheet settings:
Grade level: ${gradeLevel}
Error amount: ${errorAmount}
Error types: ${errorTypes}

Rules:
- Keep meaning of original text
- Do not invent new facts
- Add realistic mistakes, not obvious random ones
- Make it appropriate for student correction
- Do not make the text unreadable
- The answerKey must be the fully corrected version
- Return JSON only
`,
          },
          {
            role: "user",
            content: text.slice(0, 12000),
          },
        ],
      }),
    });

    const aiData = await aiRes.json();

    if (!aiRes.ok) {
      console.error("OPENAI ERROR:", aiData);
      return NextResponse.json(
        { error: aiData.error?.message || "OpenAI request failed" },
        { status: aiRes.status }
      );
    }

    let worksheet;

    try {
      worksheet = JSON.parse(aiData?.choices?.[0]?.message?.content || "{}");
    } catch (err) {
      console.error("JSON PARSE ERROR:", err);
      return NextResponse.json(
        { error: "AI returned invalid worksheet JSON" },
        { status: 500 }
      );
    }

    return NextResponse.json({ worksheet });
  } catch (err) {
    console.error("UPLOAD ROUTE ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}