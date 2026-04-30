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
You are a teacher creating a classroom-ready editing worksheet.

First, identify the main topic of the User text.
Use that topic to create a short classroom-appropriate title.

Title rules:
- The title MUST be based on the main topic of the User text.
- Keep it under 6 words.
- Use a simple format like "Editing Practice: [Topic]".
- Do NOT use generic titles like "Editing Worksheet".
- If the topic is unclear, use "Daily Editing Practice".
- Do not use quotes or punctuation beyond a colon if needed.

Take the student's original clean passage and rewrite it with realistic, age-appropriate mistakes that students would naturally make.

Return ONLY valid JSON in this exact structure:

{
  "title": "Editing Practice: inferred topic from User text",
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
Grade level: ${gradeLevel || "middle school"}
Error amount: ${errorAmount || "medium"}
Error types: ${errorTypes || "mixed"}

User text:
${text}
Guidelines:
- Make errors feel natural, like real student mistakes (not random or exaggerated).
- Prioritize common mistakes: missing capitals, incorrect verb tense, run-on sentences, missing punctuation, simple spelling errors.
- Keep the passage readable and realistic — it should still feel like a normal paragraph.
- Do NOT overload the text with errors. Spread them naturally.
- Maintain the original tone, voice, and meaning of the passage.
- Avoid repeating the same type of mistake too many times in a row.
- Match difficulty to the grade level:
  - elementary: simple spelling + capitalization + punctuation
  - middle school: mixed grammar + sentence structure
  - high school: more subtle grammar and clarity issues
- If error type is specific, focus only on that category.
- The answerKey must be the clean, fully corrected version of the original text.
Error amount rules:
- light: add about 3–5 total mistakes.
- medium: add about 6–10 total mistakes.
- heavy: add about 11–16 total mistakes, but keep the passage readable.
- Do not put errors in every sentence unless the user selected heavy.
- Some sentences should remain correct so the worksheet feels natural.

Output rules:
- Return valid JSON only.
- No markdown.
- No extra text outside the JSON.
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