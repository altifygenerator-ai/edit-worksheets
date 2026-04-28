

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const {
      text,
      gradeLevel,
      errorAmount,
      errorTypes,
    } = await req.json();

    if (!text) {
      return Response.json({ error: "No text provided" }, { status: 400 });
    }

    const finalPrompt = `
You are creating a student editing worksheet.

Take the user's clean text and add realistic mistakes so a student can correct them.

Return ONLY valid JSON in this exact structure:

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
Grade level: ${gradeLevel || "middle school"}
Error amount: ${errorAmount || "medium"}
Error types: ${errorTypes || "mixed"}

User text:
${text}

Rules:
1. Keep the meaning of the original text.
2. Do not invent new facts.
3. Add mistakes that feel realistic, not random.
4. Do not make the passage unreadable.
5. Match the selected grade level.
6. If error types are mixed, include a variety.
7. The answerKey must be the fully corrected original version.
8. Return JSON only. No markdown. No extra text.
`;

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        input: finalPrompt,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return Response.json(
        { error: data.error?.message || "OpenAI request failed" },
        { status: response.status }
      );
    }

    const outputText =
      data.output_text ||
      data.output?.[0]?.content?.[0]?.text ||
      "{}";

    let worksheet;

    try {
      worksheet = JSON.parse(outputText);
    } catch (err) {
      console.error("JSON PARSE ERROR:", err);
      return Response.json(
        { error: "AI returned invalid worksheet JSON" },
        { status: 500 }
      );
    }

    return Response.json({ worksheet });
  } catch (error: any) {
    return Response.json(
      { error: error.message || "Server error" },
      { status: 500 }
    );
  }
}