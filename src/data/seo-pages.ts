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
  "4th-grade-editing-passages": {
  title: "4th Grade Editing Passages with Errors",
  description:
    "Create 4th grade editing passages with grammar, spelling, punctuation, and capitalization mistakes for classroom practice.",
  heading: "4th Grade Editing Passages with Errors",
  intro:
    "Help 4th grade students build strong writing skills by correcting common mistakes in short, realistic editing passages.",
  gradeLevel: "elementary",
  errorAmount: "medium",
  errorTypes: "mixed",
  examples: [
    "the dog runned across the yard after its ball.",
    "we went to the park after lunch on friday.",
    "My teacher give us a new book to read.",
  ],
  related: [
    "5th-grade-editing-passages",
    "sentence-correction-exercises",
    "punctuation-correction-worksheet",
  ],
},

"middle-school-editing-passages": {
  title: "Middle School Editing Passages with Errors",
  description:
    "Generate middle school editing passages with more advanced grammar, punctuation, and sentence structure errors.",
  heading: "Middle School Editing Passages with Errors",
  intro:
    "These editing passages are designed for middle school students who are ready to work on more complex writing corrections.",
  gradeLevel: "middle school",
  errorAmount: "medium",
  errorTypes: "mixed",
  examples: [
    "The group of students were planning there trip for next month.",
    "Each of the players have to bring their own equipment.",
    "We was surprised by how quickly the storm passed.",
  ],
  related: [
    "5th-grade-editing-passages",
    "grammar-correction-exercises",
    "sentence-correction-exercises",
  ],
},

"grammar-correction-exercises": {
  title: "Grammar Correction Exercises",
  description:
    "Create grammar correction worksheets with common sentence structure, verb tense, and agreement mistakes.",
  heading: "Grammar Correction Exercises",
  intro:
    "Practice identifying and correcting grammar mistakes with simple exercises designed for classroom and homeschool use.",
  gradeLevel: "middle school",
  errorAmount: "medium",
  errorTypes: "grammar",
  examples: [
    "She dont know the answer to the question.",
    "They was going to the game after school.",
    "He have finished his homework before dinner.",
  ],
  related: [
    "sentence-correction-exercises",
    "punctuation-correction-worksheet",
    "middle-school-editing-passages",
  ],
},

"capitalization-worksheets": {
  title: "Capitalization Worksheets with Errors",
  description:
    "Generate capitalization worksheets that help students correct proper nouns, sentence starts, and titles.",
  heading: "Capitalization Worksheets with Errors",
  intro:
    "Use these worksheets to help students practice fixing capitalization mistakes in sentences and short passages.",
  gradeLevel: "elementary",
  errorAmount: "low",
  errorTypes: "capitalization",
  examples: [
    "we went to texas during the summer.",
    "my friend sarah is coming over later.",
    "they visited the grand canyon last year.",
  ],
  related: [
    "punctuation-correction-worksheet",
    "sentence-correction-exercises",
    "4th-grade-editing-passages",
  ],
},

"daily-editing-practice": {
  title: "Daily Editing Practice Worksheets",
  description:
    "Create daily editing practice worksheets with short passages students can correct each day.",
  heading: "Daily Editing Practice Worksheets",
  intro:
    "Keep students engaged with short daily editing exercises that reinforce grammar, spelling, and punctuation skills.",
  gradeLevel: "elementary",
  errorAmount: "low",
  errorTypes: "mixed",
  examples: [
    "yesterday we go to the zoo and see many animals.",
    "my brother dont like vegetables but he eats fruit.",
    "there was alot of people at the park on saturday.",
  ],
  related: [
    "4th-grade-editing-passages",
    "5th-grade-editing-passages",
    "sentence-correction-exercises",
  ],
},
};