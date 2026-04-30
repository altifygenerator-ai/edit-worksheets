

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