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
"editing-worksheets-with-answer-key": {
  title: "Editing Worksheets with Answer Key",
  description:
    "Create printable editing worksheets with answer keys for grammar, punctuation, spelling, and capitalization practice.",
  heading: "Editing Worksheets with Answer Key",
  intro:
    "Generate classroom-ready editing worksheets where students correct mistakes and teachers get a clean answer key for quick grading.",
  gradeLevel: "elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",
  examples: [
    "the class was excited to start there writing project on monday.",
    "Each student have to correct the paragraph before turning it in.",
    "We read the passage carefully but forgot to check our punctuation",
    "My teacher said that revising and editing is both important parts of writing.",
    "The answer key help students see what mistakes they missed.",
  ],
  related: [
    "5th-grade-editing-passages",
    "sentence-correction-exercises",
    "daily-editing-practice",
  ],
},

"printable-editing-worksheets": {
  title: "Printable Editing Worksheets",
  description:
    "Make printable editing worksheets from your own text with realistic writing errors and clean PDF downloads.",
  heading: "Printable Editing Worksheets",
  intro:
    "Turn any passage into a printable worksheet students can mark up by hand, making it useful for bell work, homework, writing centers, or quick review.",
  gradeLevel: "elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",
  examples: [
    "students should check there work before they turn it in.",
    "The worksheet was printed and passed out before class started",
    "We corrected spelling grammar and punctuation mistakes together.",
    "My class likes when the practice sentences are short and clear.",
    "The teacher gave us five minutes to edit the paragraph.",
  ],
  related: [
    "editing-worksheets-with-answer-key",
    "paragraph-editing-practice",
    "daily-editing-practice",
  ],
},

"paragraph-editing-practice": {
  title: "Paragraph Editing Practice",
  description:
    "Create paragraph editing practice with grammar, punctuation, capitalization, and spelling errors for students to correct.",
  heading: "Paragraph Editing Practice",
  intro:
    "Use paragraph editing practice to help students move beyond single sentences and learn how to revise full pieces of writing for clarity and correctness.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",
  examples: [
    "Last weekend my family went camping by the lake we cooked dinner outside and watched the stars.",
    "The students worked on there science project, but they forgot to label the chart correctly.",
    "When the rain started falling everyone runned inside the school building.",
    "Our teacher asked us to read the paragraph carefully and circle each mistake",
    "Editing a full paragraph help students understand how sentences work together.",
  ],
  related: [
    "sentence-correction-exercises",
    "middle-school-editing-passages",
    "editing-worksheets-with-answer-key",
  ],
},

"proofreading-practice-worksheets": {
  title: "Proofreading Practice Worksheets",
  description:
    "Generate proofreading practice worksheets that help students find and fix grammar, spelling, punctuation, and capitalization mistakes.",
  heading: "Proofreading Practice Worksheets",
  intro:
    "Give students focused proofreading practice so they can slow down, read carefully, and catch common mistakes before final drafts are turned in.",
  gradeLevel: "elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",
  examples: [
    "Proofreading help writers find mistakes before someone else reads there work.",
    "I checked my story for spelling errors but I forgot punctuation.",
    "The students was asked to proofread the paragraph with a partner.",
    "Before printing the report, we looked for missing commas and capital letters.",
    "A good writer always reread their work before turning it in.",
  ],
  related: [
    "paragraph-editing-practice",
    "grammar-correction-exercises",
    "punctuation-correction-worksheet",
  ],
},

"comma-practice-worksheets": {
  title: "Comma Practice Worksheets",
  description:
    "Create comma practice worksheets with missing commas, extra commas, list commas, and introductory phrase errors.",
  heading: "Comma Practice Worksheets",
  intro:
    "Help students practice comma rules in a simple, practical way by generating sentences and short passages with realistic comma mistakes.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "low",
  errorTypes: "punctuation",
  examples: [
    "After lunch we went outside for recess.",
    "I packed pencils notebooks folders and a calculator in my backpack.",
    "Yes I would like to join the reading group.",
    "Because the road was closed we had to take a different way home.",
    "The dog barked loudly but the cat stayed asleep.",
  ],
  related: [
    "punctuation-correction-worksheet",
    "sentence-correction-exercises",
    "capitalization-worksheets",
  ],
},
};