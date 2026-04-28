export type SeoPage = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  gradeLevel: string;
  errorAmount: string;
  errorTypes: string;
  examples: string[];
  related: string[];
};

export const seoPages: Record<string, SeoPage> = {
  "5th-grade-editing-passages": {
    title: "5th Grade Editing Passages with Errors",
    description:
      "Create 5th grade editing passages with realistic spelling, grammar, punctuation, and capitalization errors.",
    heading: "5th Grade Editing Passages with Errors",
    intro:
      "Use these editing passages to help 5th grade students practice finding and correcting common writing mistakes.",
    gradeLevel: "elementary",
    errorAmount: "medium",
    errorTypes: "mixed",
    examples: [
      "The students was excited to visit the science museum on friday.",
      "Mia packed her lunch but forgot to bring she water bottle.",
      "Our class read a story about animals that lives in the rainforest.",
    ],
    related: [
      "4th-grade-editing-passages",
      "middle-school-editing-passages",
      "sentence-correction-exercises",
    ],
  },

  "sentence-correction-exercises": {
    title: "Sentence Correction Exercises",
    description:
      "Generate sentence correction exercises with grammar, spelling, punctuation, and capitalization mistakes.",
    heading: "Sentence Correction Exercises",
    intro:
      "Create quick sentence correction practice for students who need help spotting common writing errors.",
    gradeLevel: "middle school",
    errorAmount: "medium",
    errorTypes: "mixed",
    examples: [
      "They was going to the park after school.",
      "My brother dont like when it rains.",
      "we seen a large bird sitting on the fence.",
    ],
    related: [
      "5th-grade-editing-passages",
      "punctuation-correction-worksheet",
      "grammar-correction-exercises",
    ],
  },

  "punctuation-correction-worksheet": {
    title: "Punctuation Correction Worksheet Generator",
    description:
      "Create punctuation correction worksheets with commas, periods, apostrophes, and sentence ending errors.",
    heading: "Punctuation Correction Worksheet Generator",
    intro:
      "Generate punctuation practice worksheets that help students correct commas, periods, apostrophes, and sentence endings.",
    gradeLevel: "middle school",
    errorAmount: "medium",
    errorTypes: "punctuation",
    examples: [
      "After school we went to the library",
      "My sisters book was left on the bus.",
      "I wanted to go outside but it started raining",
    ],
    related: [
      "sentence-correction-exercises",
      "grammar-correction-exercises",
      "5th-grade-editing-passages",
    ],
  },
};