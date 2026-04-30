export type SeoCategory =
  | "grade-level"
  | "grammar"
  | "punctuation"
  | "proofreading"
  | "printable";

export type ExampleBlock = {
  incorrect: string;
  corrected: string;
  notes: string;
};

export type SeoPage = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  gradeLevel: string;
  errorAmount: string;
  errorTypes: string;
  

  // added fields
  exampleBlocks?: ExampleBlock[];
  faq?: {
    question: string;
    answer: string;
  }[];

  related: string[];
  category: SeoCategory;
};

export const seoPages: Record<string, SeoPage> = {
 "5th-grade-editing-passages": {
  title: "5th Grade Editing Passages with Errors",
  description:
    "Create 5th grade editing passages with realistic grammar, spelling, punctuation, and capitalization errors for classroom writing practice.",
  heading: "5th Grade Editing Passages with Errors",
  intro:
    "Give 5th grade students practical editing practice with short passages that feel like the kind of writing they see in class. These worksheets help students slow down, read carefully, and correct common mistakes in grammar, spelling, punctuation, and capitalization.",
  gradeLevel: "5th grade",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "The students was excited to visit the science museum on friday.",
      corrected: "The students were excited to visit the science museum on Friday.",
      notes: "Fixes subject-verb agreement and capitalization."
    },
    {
      incorrect: "Mia packed her lunch, but forgot to bring she water bottle.",
      corrected: "Mia packed her lunch, but forgot to bring her water bottle.",
      notes: "Corrects pronoun usage."
    },
    {
      incorrect: "My friends and me worked together on the history project.",
      corrected: "My friends and I worked together on the history project.",
      notes: "Fixes pronoun case."
    }
  ],

  faq: [
    {
      question: "What are 5th grade editing passages?",
      answer: "They are short passages with intentional mistakes that students correct to practice grammar, punctuation, and spelling."
    },
    {
      question: "How are these used in class?",
      answer: "Teachers use them for daily practice, writing warmups, or review before assignments."
    }
  ],

  related: [
    "4th-grade-editing-passages",
    "middle-school-editing-passages",
    "daily-editing-practice",
  ],
  category: "grade-level",
},

  "sentence-correction-exercises": {
  title: "Sentence Correction Exercises",
  description:
    "Generate sentence correction exercises that help students fix grammar, spelling, punctuation, and capitalization mistakes.",
  heading: "Sentence Correction Exercises",
  intro:
    "Sentence correction exercises are a simple way to help students focus on one mistake at a time. Use them for warmups, quick review, small group practice, or extra support when students need more repetition with common writing errors.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "They was going to the park after school.",
      corrected: "They were going to the park after school.",
      notes: "Corrects subject-verb agreement."
    },
    {
      incorrect: "we seen a large bird sitting on the fence.",
      corrected: "We saw a large bird sitting on the fence.",
      notes: "Fixes capitalization and verb tense."
    },
    {
      incorrect: "I wanted to finish my story but the bell ringed.",
      corrected: "I wanted to finish my story, but the bell rang.",
      notes: "Corrects verb tense and punctuation."
    }
  ],

  faq: [
    {
      question: "What are sentence correction exercises?",
      answer: "They are short sentences with mistakes that students fix to practice writing skills."
    },
    {
      question: "When should I use them?",
      answer: "They work well for quick review, warmups, and focused grammar practice."
    }
  ],

  related: [
    "grammar-correction-exercises",
    "punctuation-correction-worksheet",
    "proofreading-practice-worksheets",
  ],
  category: "grammar",
},

  "punctuation-correction-worksheet": {
  title: "Punctuation Correction Worksheet Generator",
  description:
    "Create punctuation correction worksheets with comma, period, apostrophe, quotation mark, and sentence ending mistakes.",
  heading: "Punctuation Correction Worksheet Generator",
  intro:
    "Punctuation practice works best when students can see mistakes in real sentences. These worksheets help students correct missing commas, sentence endings, apostrophes, and other punctuation errors in a clear, classroom-friendly format.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "medium",
  errorTypes: "punctuation",

  exampleBlocks: [
    {
      incorrect: "After school we went to the library",
      corrected: "After school, we went to the library.",
      notes: "Adds comma and period."
    },
    {
      incorrect: "The teacher said please take out your notebooks.",
      corrected: "The teacher said, \"Please take out your notebooks.\"",
      notes: "Adds comma and quotation marks."
    },
    {
      incorrect: "We packed pencils paper folders and glue for the project.",
      corrected: "We packed pencils, paper, folders, and glue for the project.",
      notes: "Adds commas in a list."
    }
  ],

  faq: [
    {
      question: "What punctuation skills do these worksheets cover?",
      answer: "They cover commas, periods, apostrophes, quotation marks, and sentence endings."
    },
    {
      question: "Why is punctuation practice important?",
      answer: "It helps students make their writing clearer and easier to read."
    }
  ],

  related: [
    "comma-practice-worksheets",
    "capitalization-worksheets",
    "sentence-correction-exercises",
  ],
  category: "punctuation",
},
  "4th-grade-editing-passages": {
  title: "4th Grade Editing Passages with Errors",
  description:
    "Create 4th grade editing passages with realistic grammar, punctuation, spelling, and capitalization mistakes for student practice.",
  heading: "4th Grade Editing Passages with Errors",
  intro:
    "Help 4th grade students build stronger editing habits with short passages that include mistakes they are likely to make in their own writing. These pages work well for morning work, writing centers, homework, or quick review before a writing assignment.",
  gradeLevel: "4th grade",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "the dog runned across the yard after its ball.",
      corrected: "The dog ran across the yard after its ball.",
      notes: "Fixes capitalization and verb tense."
    },
    {
      incorrect: "We went to the park after lunch on friday.",
      corrected: "We went to the park after lunch on Friday.",
      notes: "Corrects capitalization."
    },
    {
      incorrect: "Sarah and me made a poster for science class.",
      corrected: "Sarah and I made a poster for science class.",
      notes: "Fixes pronoun case."
    }
  ],

  faq: [
    {
      question: "What do 4th grade editing passages focus on?",
      answer: "They focus on grammar, punctuation, spelling, and capitalization mistakes students commonly make."
    },
    {
      question: "How often should students practice editing?",
      answer: "Daily or a few times a week helps build strong editing habits."
    }
  ],

  related: [
    "5th-grade-editing-passages",
    "daily-editing-practice",
    "capitalization-worksheets",
  ],
  category: "grade-level",
},

 "middle-school-editing-passages": {
  title: "Middle School Editing Passages with Errors",
  description:
    "Generate middle school editing passages with more advanced grammar, punctuation, sentence structure, and proofreading errors.",
  heading: "Middle School Editing Passages with Errors",
  intro:
    "Middle school students need editing practice that goes beyond simple mistakes. These passages help students work on agreement, punctuation, word choice, sentence clarity, and proofreading skills without feeling too childish or repetitive.",
  gradeLevel: "middle school",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "The group of students were planning there trip for next month.",
      corrected: "The group of students was planning their trip for next month.",
      notes: "Fixes subject-verb agreement and possessive pronoun."
    },
    {
      incorrect: "We was surprised by how quickly the storm passed.",
      corrected: "We were surprised by how quickly the storm passed.",
      notes: "Corrects verb agreement."
    },
    {
      incorrect: "The article explains how pollution effects animals in the river.",
      corrected: "The article explains how pollution affects animals in the river.",
      notes: "Fixes word usage."
    }
  ],

  faq: [
    {
      question: "What makes middle school editing different?",
      answer: "It includes more advanced grammar, sentence structure, and clarity issues."
    },
    {
      question: "Are these passages too easy for older students?",
      answer: "No, they are designed to feel realistic and appropriately challenging."
    }
  ],

  related: [
    "5th-grade-editing-passages",
    "paragraph-editing-practice",
    "grammar-correction-exercises",
  ],
  category: "grade-level",
},

  "grammar-correction-exercises": {
  title: "Grammar Correction Exercises",
  description:
    "Create grammar correction exercises with subject-verb agreement, verb tense, pronoun, and sentence structure mistakes.",
  heading: "Grammar Correction Exercises",
  intro:
    "Grammar correction exercises give students focused practice with the errors that show up most often in everyday writing. Use these worksheets to help students spot awkward sentences, fix agreement mistakes, and build more control over their writing.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "medium",
  errorTypes: "grammar",

  exampleBlocks: [
    {
      incorrect: "She dont know the answer to the question.",
      corrected: "She doesn't know the answer to the question.",
      notes: "Fixes verb form and contraction."
    },
    {
      incorrect: "They was going to the game after school.",
      corrected: "They were going to the game after school.",
      notes: "Corrects subject-verb agreement."
    },
    {
      incorrect: "The dogs runs across the field every morning.",
      corrected: "The dogs run across the field every morning.",
      notes: "Fixes verb agreement."
    }
  ],

  faq: [
    {
      question: "What skills do grammar correction exercises build?",
      answer: "They help students improve sentence structure, agreement, and overall writing accuracy."
    },
    {
      question: "Who should use these worksheets?",
      answer: "They are ideal for upper elementary and middle school students."
    }
  ],

  related: [
    "sentence-correction-exercises",
    "middle-school-editing-passages",
    "proofreading-practice-worksheets",
  ],
  category: "grammar",
},

  "capitalization-worksheets": {
  title: "Capitalization Worksheets with Errors",
  description:
    "Generate capitalization worksheets that help students correct sentence starts, proper nouns, places, titles, days, and months.",
  heading: "Capitalization Worksheets with Errors",
  intro:
    "Capitalization mistakes are easy for students to overlook, especially when they are writing quickly. These worksheets give students direct practice fixing lowercase sentence starts, names, places, holidays, days of the week, and other common capitalization errors.",
  gradeLevel: "elementary",
  errorAmount: "low",
  errorTypes: "capitalization",

  exampleBlocks: [
    {
      incorrect: "we went to texas during the summer.",
      corrected: "We went to Texas during the summer.",
      notes: "Capitalizes the sentence start and proper noun."
    },
    {
      incorrect: "My friend sarah is coming over later.",
      corrected: "My friend Sarah is coming over later.",
      notes: "Capitalizes a person's name."
    },
    {
      incorrect: "on monday, our class started a new book.",
      corrected: "On Monday, our class started a new book.",
      notes: "Capitalizes the sentence start and day of the week."
    }
  ],

  faq: [
    {
      question: "What do capitalization worksheets help students practice?",
      answer: "They help students correct sentence starts, names, places, days, months, holidays, and titles."
    },
    {
      question: "Why do students need capitalization practice?",
      answer: "Capitalization mistakes are common in student writing, especially when students write quickly."
    }
  ],

  related: [
    "4th-grade-editing-passages",
    "punctuation-correction-worksheet",
    "daily-editing-practice",
  ],
  category: "grammar",
},

"daily-editing-practice": {
  title: "Daily Editing Practice Worksheets",
  description:
    "Create daily editing practice worksheets with short sentences and passages students can correct each day.",
  heading: "Daily Editing Practice Worksheets",
  intro:
    "Daily editing practice helps students build editing habits through short, consistent review. These worksheets are useful for bell work, morning work, quick grammar review, or a simple routine before students begin writing.",
  gradeLevel: "elementary and middle school",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "Yesterday we go to the zoo and see many animals.",
      corrected: "Yesterday we went to the zoo and saw many animals.",
      notes: "Fixes past-tense verbs."
    },
    {
      incorrect: "There was alot of people at the park on saturday.",
      corrected: "There were a lot of people at the park on Saturday.",
      notes: "Fixes agreement, spelling, and capitalization."
    },
    {
      incorrect: "Every morning we correct one sentence in our notebooks.",
      corrected: "Every morning, we correct one sentence in our notebooks.",
      notes: "Adds a comma after the introductory phrase."
    }
  ],

  faq: [
    {
      question: "What is daily editing practice?",
      answer: "Daily editing practice is a short routine where students correct grammar, punctuation, spelling, and capitalization mistakes."
    },
    {
      question: "When should I use daily editing worksheets?",
      answer: "They work well for bell work, morning work, warmups, or quick review before writing lessons."
    }
  ],

  related: [
    "4th-grade-editing-passages",
    "5th-grade-editing-passages",
    "editing-worksheets-with-answer-key",
  ],
  category: "proofreading",
},

"editing-worksheets-with-answer-key": {
  title: "Editing Worksheets with Answer Key",
  description:
    "Create printable editing worksheets with answer keys for grammar, punctuation, spelling, and capitalization practice.",
  heading: "Editing Worksheets with Answer Key",
  intro:
    "Editing worksheets with answer keys save teachers time and make review easier for students. Students can correct the mistakes on their own, then compare their work to a clean answer key that shows the corrected version.",
  gradeLevel: "elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "The class was excited to start there writing project on monday.",
      corrected: "The class was excited to start their writing project on Monday.",
      notes: "Fixes word choice and capitalization."
    },
    {
      incorrect: "Each student have to correct the paragraph before turning it in.",
      corrected: "Each student has to correct the paragraph before turning it in.",
      notes: "Corrects subject-verb agreement."
    },
    {
      incorrect: "The answer key help students see what mistakes they missed.",
      corrected: "The answer key helps students see what mistakes they missed.",
      notes: "Fixes verb agreement."
    }
  ],

  faq: [
    {
      question: "Why use editing worksheets with answer keys?",
      answer: "Answer keys make it easier for students to check their work and for teachers to review corrections quickly."
    },
    {
      question: "Are answer keys useful for independent practice?",
      answer: "Yes, students can correct the worksheet first and then compare their answers to the corrected version."
    }
  ],

  related: [
    "printable-editing-worksheets",
    "daily-editing-practice",
    "proofreading-practice-worksheets",
  ],
  category: "printable",
},

"printable-editing-worksheets": {
  title: "Printable Editing Worksheets",
  description:
    "Make printable editing worksheets from your own text with realistic writing errors, answer keys, and clean PDF downloads.",
  heading: "Printable Editing Worksheets",
  intro:
    "Printable editing worksheets are useful when students need something they can mark up by hand. Paste in your own passage, choose the kind of errors you want, and create a worksheet that fits your lesson instead of hunting for one that almost works.",
  gradeLevel: "elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "Students should check there work before they turn it in.",
      corrected: "Students should check their work before they turn it in.",
      notes: "Fixes possessive word choice."
    },
    {
      incorrect: "The worksheet was printed and passed out before class started",
      corrected: "The worksheet was printed and passed out before class started.",
      notes: "Adds missing end punctuation."
    },
    {
      incorrect: "We corrected spelling grammar and punctuation mistakes together.",
      corrected: "We corrected spelling, grammar, and punctuation mistakes together.",
      notes: "Adds commas in a list."
    }
  ],

  faq: [
    {
      question: "What are printable editing worksheets?",
      answer: "They are editing practice pages students can print, mark up, and correct by hand."
    },
    {
      question: "Why use printable worksheets instead of only digital practice?",
      answer: "Printable worksheets let students circle, underline, and rewrite corrections directly on the page."
    }
  ],

  related: [
    "editing-worksheets-with-answer-key",
    "paragraph-editing-practice",
    "daily-editing-practice",
  ],
  category: "printable",
},

"paragraph-editing-practice": {
  title: "Paragraph Editing Practice",
  description:
    "Create paragraph editing practice with grammar, punctuation, capitalization, and spelling mistakes for students to correct.",
  heading: "Paragraph Editing Practice",
  intro:
    "Paragraph editing practice helps students move beyond single-sentence corrections and work with writing that feels more realistic. Students practice reading for meaning while also checking grammar, punctuation, capitalization, and spelling.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "Last weekend my family went camping by the lake we cooked dinner outside and watched the stars.",
      corrected: "Last weekend, my family went camping by the lake. We cooked dinner outside and watched the stars.",
      notes: "Fixes a run-on sentence and adds punctuation."
    },
    {
      incorrect: "The students worked on there science project, but they forgot to label the chart correctly.",
      corrected: "The students worked on their science project, but they forgot to label the chart correctly.",
      notes: "Fixes word choice."
    },
    {
      incorrect: "Editing a full paragraph help students understand how sentences work together.",
      corrected: "Editing a full paragraph helps students understand how sentences work together.",
      notes: "Corrects subject-verb agreement."
    }
  ],

  faq: [
    {
      question: "Why use paragraph editing practice?",
      answer: "It helps students proofread writing in context instead of only correcting isolated sentences."
    },
    {
      question: "What skills does paragraph editing build?",
      answer: "It builds grammar, punctuation, capitalization, spelling, sentence flow, and proofreading skills."
    }
  ],

  related: [
    "middle-school-editing-passages",
    "proofreading-practice-worksheets",
    "editing-worksheets-with-answer-key",
  ],
  category: "proofreading",
},

"proofreading-practice-worksheets": {
  title: "Proofreading Practice Worksheets",
  description:
    "Generate proofreading practice worksheets that help students find and fix grammar, spelling, punctuation, and capitalization mistakes.",
  heading: "Proofreading Practice Worksheets",
  intro:
    "Proofreading practice teaches students to slow down and check their writing before calling it finished. These worksheets help students look for the kinds of mistakes they often miss in their own drafts.",
  gradeLevel: "elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "Proofreading help writers find mistakes before someone else reads there work.",
      corrected: "Proofreading helps writers find mistakes before someone else reads their work.",
      notes: "Fixes verb agreement and word choice."
    },
    {
      incorrect: "The students was asked to proofread the paragraph with a partner.",
      corrected: "The students were asked to proofread the paragraph with a partner.",
      notes: "Corrects subject-verb agreement."
    },
    {
      incorrect: "A good writer always reread their work before turning it in.",
      corrected: "A good writer always rereads their work before turning it in.",
      notes: "Fixes verb agreement."
    }
  ],

  faq: [
    {
      question: "What is proofreading practice?",
      answer: "Proofreading practice helps students find and correct mistakes in grammar, spelling, punctuation, and capitalization."
    },
    {
      question: "How do proofreading worksheets help students?",
      answer: "They train students to slow down, reread, and check writing carefully before turning it in."
    }
  ],

  related: [
    "paragraph-editing-practice",
    "grammar-correction-exercises",
    "editing-worksheets-with-answer-key",
  ],
  category: "proofreading",
},

"comma-practice-worksheets": {
  title: "Comma Practice Worksheets",
  description:
    "Create comma practice worksheets with missing commas, extra commas, list commas, introductory phrases, and compound sentence errors.",
  heading: "Comma Practice Worksheets",
  intro:
    "Comma rules can be hard for students because they show up in so many different kinds of sentences. These worksheets give students practical comma practice with lists, introductory phrases, compound sentences, and everyday classroom writing.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "low",
  errorTypes: "punctuation",

  exampleBlocks: [
    {
      incorrect: "After lunch we went outside for recess.",
      corrected: "After lunch, we went outside for recess.",
      notes: "Adds a comma after an introductory phrase."
    },
    {
      incorrect: "I packed pencils notebooks folders and a calculator in my backpack.",
      corrected: "I packed pencils, notebooks, folders, and a calculator in my backpack.",
      notes: "Adds commas in a list."
    },
    {
      incorrect: "The dog barked loudly but the cat stayed asleep.",
      corrected: "The dog barked loudly, but the cat stayed asleep.",
      notes: "Adds a comma before a coordinating conjunction."
    }
  ],

  faq: [
    {
      question: "What comma skills do these worksheets practice?",
      answer: "They practice commas in lists, introductory phrases, compound sentences, and direct address."
    },
    {
      question: "Why are commas hard for students?",
      answer: "Commas appear in many sentence patterns, so students need repeated practice using them in context."
    }
  ],

  related: [
    "punctuation-correction-worksheet",
    "sentence-correction-exercises",
    "capitalization-worksheets",
  ],
  category: "punctuation",
},

"3rd-grade-editing-worksheets": {
  title: "3rd Grade Editing Worksheets",
  description:
    "Create 3rd grade editing worksheets with simple grammar, spelling, punctuation, and capitalization errors for daily classroom practice.",
  heading: "3rd Grade Editing Worksheets with Simple Mistakes",
  intro:
    "Help 3rd grade students build early editing habits with short, simple worksheets that focus on common writing mistakes. These pages work well for morning work, small groups, homework, or quick review before students start writing.",
  gradeLevel: "3rd grade",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "the dog run fast across the yard.",
      corrected: "The dog runs fast across the yard.",
      notes: "Fixes capitalization and verb agreement."
    },
    {
      incorrect: "My friend sara went to the park yesterday",
      corrected: "My friend Sara went to the park yesterday.",
      notes: "Capitalizes a name and adds punctuation."
    },
    {
      incorrect: "i like to read books about animals.",
      corrected: "I like to read books about animals.",
      notes: "Capitalizes the pronoun I."
    }
  ],

  faq: [
    {
      question: "What should 3rd grade editing worksheets include?",
      answer: "They should include simple capitalization, punctuation, spelling, and grammar mistakes students can correct independently."
    },
    {
      question: "How can teachers use these worksheets?",
      answer: "They work well for morning work, small groups, homework, and quick writing review."
    }
  ],

  related: [
    "4th-grade-editing-passages",
    "daily-editing-practice",
    "capitalization-worksheets",
  ],
  category: "grade-level",
},

"6th-grade-editing-passages": {
  title: "6th Grade Editing Passages",
  description:
    "Create 6th grade editing passages with grammar, punctuation, spelling, and capitalization errors for classroom writing practice.",
  heading: "6th Grade Editing Passages with Errors",
  intro:
    "6th grade editing passages help students move from basic sentence corrections into stronger paragraph-level proofreading. These worksheets give students practice finding grammar, punctuation, spelling, and capitalization mistakes in writing that feels age-appropriate.",
  gradeLevel: "6th grade",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "The students was preparing their reports for science class.",
      corrected: "The students were preparing their reports for science class.",
      notes: "Corrects subject-verb agreement."
    },
    {
      incorrect: "The article explain how animals adapt to cold weather.",
      corrected: "The article explains how animals adapt to cold weather.",
      notes: "Fixes verb agreement."
    },
    {
      incorrect: "The class visited the museum on friday and took notes.",
      corrected: "The class visited the museum on Friday and took notes.",
      notes: "Capitalizes the day of the week."
    }
  ],

  faq: [
    {
      question: "What are 6th grade editing passages?",
      answer: "They are short passages with realistic errors that help students practice grammar, punctuation, spelling, and capitalization."
    },
    {
      question: "Why use editing passages in 6th grade?",
      answer: "They help students move from simple sentence correction into paragraph-level proofreading and revision."
    }
  ],

  related: [
    "5th-grade-editing-passages",
    "7th-grade-editing-practice",
    "paragraph-editing-practice",
  ],
  category: "grade-level",
},

"7th-grade-editing-practice": {
  title: "7th Grade Editing Practice",
  description:
    "Generate 7th grade editing practice with realistic grammar, punctuation, sentence structure, and proofreading errors.",
  heading: "7th Grade Editing Practice Worksheets",
  intro:
    "7th grade editing practice should challenge students without turning into busywork. These worksheets help students catch agreement errors, punctuation mistakes, sentence structure problems, and word choice issues in short passages and sentences.",
  gradeLevel: "7th grade",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "Neither of the students were sure how to answer the question.",
      corrected: "Neither of the students was sure how to answer the question.",
      notes: "Corrects subject-verb agreement."
    },
    {
      incorrect: "Although the assignment was difficult the class completed it on time.",
      corrected: "Although the assignment was difficult, the class completed it on time.",
      notes: "Adds a comma after a dependent clause."
    },
    {
      incorrect: "The team was proud of there performance during the final game.",
      corrected: "The team was proud of their performance during the final game.",
      notes: "Fixes the possessive word."
    }
  ],

  faq: [
    {
      question: "What should 7th grade editing practice focus on?",
      answer: "It should focus on agreement, punctuation, sentence structure, word choice, and careful proofreading."
    },
    {
      question: "How difficult should 7th grade editing worksheets be?",
      answer: "They should be more challenging than elementary worksheets but still realistic and readable."
    }
  ],

  related: [
    "6th-grade-editing-passages",
    "8th-grade-editing-worksheets",
    "grammar-correction-exercises",
  ],
  category: "grade-level",
},

"8th-grade-editing-worksheets": {
  title: "8th Grade Editing Worksheets",
  description:
    "Create 8th grade editing worksheets with challenging grammar, punctuation, sentence structure, and proofreading errors.",
  heading: "8th Grade Editing Worksheets with Challenging Errors",
  intro:
    "8th grade students are ready for editing work that feels closer to real revision. These worksheets include more challenging grammar, punctuation, and sentence structure errors so students can practice proofreading with stronger attention to detail.",
  gradeLevel: "8th grade",
  errorAmount: "high",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "The committee were unsure whether its decision would effect the entire school.",
      corrected: "The committee was unsure whether its decision would affect the entire school.",
      notes: "Fixes agreement and word usage."
    },
    {
      incorrect: "Although the evidence was convincing the writer failed to explain their reasoning clearly.",
      corrected: "Although the evidence was convincing, the writer failed to explain the reasoning clearly.",
      notes: "Adds punctuation and improves clarity."
    },
    {
      incorrect: "The students revised there essays, however many still needed stronger conclusions.",
      corrected: "The students revised their essays; however, many still needed stronger conclusions.",
      notes: "Fixes word choice and punctuation."
    }
  ],

  faq: [
    {
      question: "What makes 8th grade editing worksheets more challenging?",
      answer: "They include more advanced grammar, punctuation, sentence structure, and clarity errors."
    },
    {
      question: "Are these useful before high school writing?",
      answer: "Yes, they help students strengthen proofreading habits before more advanced writing assignments."
    }
  ],

  related: [
    "7th-grade-editing-practice",
    "middle-school-editing-passages",
    "challenging-editing-passages-for-students",
  ],
  category: "grade-level",
},

"subject-verb-agreement-worksheets": {
  title: "Subject Verb Agreement Worksheets",
  description:
    "Create subject verb agreement worksheets that help students correct singular, plural, and tricky agreement mistakes.",
  heading: "Subject Verb Agreement Worksheets",
  intro:
    "Subject verb agreement is one of the most common grammar issues students make in everyday writing. These worksheets give students focused practice matching subjects and verbs correctly in simple sentences, compound subjects, and more confusing sentence patterns.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "low",
  errorTypes: "grammar",

  exampleBlocks: [
    {
      incorrect: "The dogs runs across the field every morning.",
      corrected: "The dogs run across the field every morning.",
      notes: "Matches the plural subject with the correct verb."
    },
    {
      incorrect: "Each student have a folder for writing class.",
      corrected: "Each student has a folder for writing class.",
      notes: "Corrects agreement with a singular subject."
    },
    {
      incorrect: "The list of supplies are on the board.",
      corrected: "The list of supplies is on the board.",
      notes: "Matches the verb to the main subject, list."
    }
  ],

  faq: [
    {
      question: "What is subject verb agreement?",
      answer: "Subject verb agreement means the subject and verb in a sentence match correctly in number."
    },
    {
      question: "Why do students struggle with subject verb agreement?",
      answer: "Students often get confused when extra words appear between the subject and verb."
    }
  ],

  related: [
    "grammar-correction-exercises",
    "verb-tense-correction-exercises",
    "sentence-correction-exercises",
  ],
  category: "grammar",
},

"verb-tense-correction-exercises": {
  title: "Verb Tense Correction Exercises",
  description:
    "Generate verb tense correction exercises that help students fix past, present, and future tense mistakes in sentences.",
  heading: "Verb Tense Correction Exercises",
  intro:
    "Verb tense mistakes can make student writing confusing, especially when a sentence shifts between past and present. These exercises help students practice keeping verb tense consistent and choosing the correct verb form for the sentence.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "medium",
  errorTypes: "grammar",

  exampleBlocks: [
    {
      incorrect: "Yesterday, we go to the library after lunch.",
      corrected: "Yesterday, we went to the library after lunch.",
      notes: "Changes the verb to past tense."
    },
    {
      incorrect: "She was reading her book when the bell rings.",
      corrected: "She was reading her book when the bell rang.",
      notes: "Keeps the verb tense consistent."
    },
    {
      incorrect: "They have went to that museum before.",
      corrected: "They have gone to that museum before.",
      notes: "Corrects the past participle."
    }
  ],

  faq: [
    {
      question: "What are verb tense correction exercises?",
      answer: "They are practice sentences where students fix incorrect or inconsistent verb tenses."
    },
    {
      question: "Why is verb tense practice important?",
      answer: "Correct verb tense makes writing clearer and helps readers understand when events happen."
    }
  ],

  related: [
    "subject-verb-agreement-worksheets",
    "grammar-correction-exercises",
    "middle-school-editing-passages",
  ],
  category: "grammar",
},
"pronoun-error-correction-worksheets": {
  title: "Pronoun Error Correction Worksheets",
  description:
    "Create pronoun error correction worksheets with mistakes in pronoun agreement, pronoun case, and unclear references.",
  heading: "Pronoun Error Correction Worksheets",
  intro:
    "Pronoun mistakes can be hard for students to spot because the sentence may still sound close to correct. These worksheets help students fix pronoun agreement, pronoun case, and unclear pronoun references in practical classroom sentences.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "medium",
  errorTypes: "grammar",

  exampleBlocks: [
    {
      incorrect: "My friend and me worked on the poster together.",
      corrected: "My friend and I worked on the poster together.",
      notes: "Corrects pronoun case."
    },
    {
      incorrect: "Each student should bring their notebook to class.",
      corrected: "Each student should bring his or her notebook to class.",
      notes: "Fixes pronoun agreement."
    },
    {
      incorrect: "Him and his brother cleaned the classroom after school.",
      corrected: "He and his brother cleaned the classroom after school.",
      notes: "Corrects subject pronoun usage."
    }
  ],

  faq: [
    {
      question: "What are pronoun errors?",
      answer: "Pronoun errors include mistakes in agreement, case, and unclear references in sentences."
    },
    {
      question: "Why are pronoun worksheets helpful?",
      answer: "They help students recognize and fix subtle errors that often sound correct but are grammatically wrong."
    }
  ],

  related: [
    "grammar-correction-exercises",
    "sentence-correction-exercises",
    "middle-school-editing-passages",
  ],
  category: "grammar",
},

"comma-splice-practice-worksheets": {
  title: "Comma Splice Practice Worksheets",
  description:
    "Create comma splice practice worksheets that help students identify and correct improperly joined sentences.",
  heading: "Comma Splice Practice Worksheets",
  intro:
    "Comma splices are a common punctuation problem, especially as students begin writing longer sentences. These worksheets help students recognize when two complete thoughts have been joined with only a comma and practice correcting the error.",
  gradeLevel: "middle school",
  errorAmount: "medium",
  errorTypes: "punctuation",

  exampleBlocks: [
    {
      incorrect: "The storm ended quickly, we went outside to check the yard.",
      corrected: "The storm ended quickly. We went outside to check the yard.",
      notes: "Separates two independent clauses."
    },
    {
      incorrect: "I finished my essay, I still need to proofread it.",
      corrected: "I finished my essay, but I still need to proofread it.",
      notes: "Adds a conjunction to fix the comma splice."
    },
    {
      incorrect: "We wanted to play basketball, it started raining.",
      corrected: "We wanted to play basketball; it started raining.",
      notes: "Uses a semicolon to join related sentences."
    }
  ],

  faq: [
    {
      question: "What is a comma splice?",
      answer: "A comma splice happens when two complete sentences are joined with only a comma."
    },
    {
      question: "How do students fix comma splices?",
      answer: "They can use a period, semicolon, or conjunction to correctly join the sentences."
    }
  ],

  related: [
    "run-on-sentence-correction-worksheets",
    "comma-practice-worksheets",
    "punctuation-correction-worksheet",
  ],
  category: "punctuation",
},

"run-on-sentence-correction-worksheets": {
  title: "Run-On Sentence Correction Worksheets",
  description:
    "Generate run-on sentence correction worksheets that help students break apart or correctly join long sentences.",
  heading: "Run-On Sentence Correction Worksheets",
  intro:
    "Run-on sentences make writing harder to follow, especially when students try to connect too many ideas at once. These worksheets help students find run-ons and practice fixing them with punctuation, conjunctions, or sentence breaks.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "medium",
  errorTypes: "punctuation",

  exampleBlocks: [
    {
      incorrect: "We went to the park it was too cold to stay long.",
      corrected: "We went to the park, but it was too cold to stay long.",
      notes: "Adds a conjunction and comma."
    },
    {
      incorrect: "The class finished the test everyone turned in their papers.",
      corrected: "The class finished the test. Everyone turned in their papers.",
      notes: "Splits into two sentences."
    },
    {
      incorrect: "She packed her lunch she forgot to bring a drink.",
      corrected: "She packed her lunch, but she forgot to bring a drink.",
      notes: "Adds a conjunction to fix the run-on."
    }
  ],

  faq: [
    {
      question: "What is a run-on sentence?",
      answer: "A run-on sentence joins multiple ideas without proper punctuation or structure."
    },
    {
      question: "How do students fix run-on sentences?",
      answer: "They can add punctuation, conjunctions, or break the sentence into smaller parts."
    }
  ],

  related: [
    "comma-splice-practice-worksheets",
    "punctuation-correction-worksheet",
    "sentence-correction-exercises",
  ],
  category: "punctuation",
},

"quotation-marks-practice-worksheets": {
  title: "Quotation Marks Practice Worksheets",
  description:
    "Create quotation marks practice worksheets with dialogue punctuation, missing quotation marks, and comma placement errors.",
  heading: "Quotation Marks Practice Worksheets",
  intro:
    "Quotation marks can be tricky for students because they have to manage punctuation, capitalization, and speaker tags at the same time. These worksheets give students practical practice correcting dialogue and quoted sentences.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "low",
  errorTypes: "punctuation",

  exampleBlocks: [
    {
      incorrect: "Where are you going asked Maya.",
      corrected: "\"Where are you going?\" asked Maya.",
      notes: "Adds quotation marks and correct punctuation."
    },
    {
      incorrect: "I finished my homework said Jordan.",
      corrected: "\"I finished my homework,\" said Jordan.",
      notes: "Adds quotation marks and comma."
    },
    {
      incorrect: "Do you want to work together asked Emma.",
      corrected: "\"Do you want to work together?\" asked Emma.",
      notes: "Adds quotation marks and question mark."
    }
  ],

  faq: [
    {
      question: "What do quotation mark worksheets teach?",
      answer: "They teach how to correctly format dialogue and quoted speech."
    },
    {
      question: "Why do students struggle with quotation marks?",
      answer: "They must manage punctuation, capitalization, and speaker tags at the same time."
    }
  ],

  related: [
    "punctuation-correction-worksheet",
    "comma-practice-worksheets",
    "sentence-correction-exercises",
  ],
  category: "punctuation",
},

"editing-worksheets-for-bell-work": {
  title: "Editing Worksheets for Bell Work",
  description:
    "Create quick editing worksheets for bell work with short grammar, punctuation, spelling, and capitalization practice.",
  heading: "Editing Worksheets for Bell Work",
  intro:
    "Bell work needs to be quick, clear, and easy to start without a lot of directions. These editing worksheets give students a short writing correction task they can begin as soon as they sit down.",
  gradeLevel: "elementary and middle school",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "today we will review our spelling words.",
      corrected: "Today we will review our spelling words.",
      notes: "Capitalizes sentence start."
    },
    {
      incorrect: "The students was ready to begin the lesson.",
      corrected: "The students were ready to begin the lesson.",
      notes: "Fixes subject-verb agreement."
    },
    {
      incorrect: "I forgot my notebook but I brought my pencil.",
      corrected: "I forgot my notebook, but I brought my pencil.",
      notes: "Adds comma before conjunction."
    }
  ],

  faq: [
    {
      question: "What is bell work?",
      answer: "Bell work is a short activity students complete at the start of class."
    },
    {
      question: "Why use editing worksheets for bell work?",
      answer: "They give students a quick, meaningful task that builds writing skills daily."
    }
  ],

  related: [
    "daily-editing-practice",
    "quick-editing-practice-worksheets",
    "editing-worksheets-for-homework",
  ],
  category: "proofreading",
},

"editing-worksheets-for-homework": {
  title: "Editing Worksheets for Homework",
  description:
    "Create editing worksheets for homework with grammar, punctuation, capitalization, and spelling errors students can correct independently.",
  heading: "Editing Worksheets for Homework",
  intro:
    "Editing worksheets make simple homework because students can practice proofreading without needing a long assignment. These pages work well for extra review, writing practice, or reinforcing skills taught during class.",
  gradeLevel: "elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "The homework sheet have five sentences to correct.",
      corrected: "The homework sheet has five sentences to correct.",
      notes: "Fixes subject-verb agreement."
    },
    {
      incorrect: "My teacher ask us to fix each mistake before tomorrow.",
      corrected: "My teacher asked us to fix each mistake before tomorrow.",
      notes: "Corrects verb tense."
    },
    {
      incorrect: "The assignment was short but it help me practice editing.",
      corrected: "The assignment was short, but it helped me practice editing.",
      notes: "Fixes verb tense and punctuation."
    }
  ],

  faq: [
    {
      question: "Why use editing worksheets for homework?",
      answer: "They give students independent practice correcting writing errors."
    },
    {
      question: "Are editing worksheets good for review?",
      answer: "Yes, they reinforce grammar and writing skills taught in class."
    }
  ],

  related: [
    "daily-editing-practice",
    "editing-worksheets-for-bell-work",
    "printable-editing-worksheets",
  ],
  category: "printable",
},
"quick-editing-practice-worksheets": {
  title: "Quick Editing Practice Worksheets",
  description:
    "Generate quick editing practice worksheets with short sentences students can correct in just a few minutes.",
  heading: "Quick Editing Practice Worksheets",
  intro:
    "Quick editing practice is useful when you only have a few minutes but still want students thinking about writing. These worksheets use short sentences and simple mistakes so students can practice without slowing down the rest of the lesson.",
  gradeLevel: "elementary",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "we read a story about frogs today.",
      corrected: "We read a story about frogs today.",
      notes: "Capitalizes the sentence start."
    },
    {
      incorrect: "The cat sleep on the chair.",
      corrected: "The cat sleeps on the chair.",
      notes: "Fixes verb agreement."
    },
    {
      incorrect: "mom helped me pack my lunch.",
      corrected: "Mom helped me pack my lunch.",
      notes: "Capitalizes a proper noun."
    }
  ],

  faq: [
    {
      question: "What is quick editing practice?",
      answer: "It is short, fast editing work students can complete in just a few minutes."
    },
    {
      question: "When should I use quick editing worksheets?",
      answer: "They work well for transitions, warmups, or when you have limited class time."
    }
  ],

  related: [
    "daily-editing-practice",
    "3rd-grade-editing-worksheets",
    "editing-worksheets-for-bell-work",
  ],
  category: "proofreading",
},

"short-editing-passages-with-errors": {
  title: "Short Editing Passages with Errors",
  description:
    "Create short editing passages with grammar, punctuation, spelling, and capitalization errors for fast classroom practice.",
  heading: "Short Editing Passages with Errors",
  intro:
    "Short editing passages give students enough context to practice proofreading without turning the activity into a full writing assignment. They work well for warmups, test prep review, small groups, or quick skill checks.",
  gradeLevel: "elementary and middle school",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "Yesterday we visit the library after lunch. I found a book about space.",
      corrected: "Yesterday we visited the library after lunch. I found a book about space.",
      notes: "Fixes verb tense."
    },
    {
      incorrect: "The students was excited for the field trip. They packed lunches and wore comfortable shoes.",
      corrected: "The students were excited for the field trip. They packed lunches and wore comfortable shoes.",
      notes: "Corrects subject-verb agreement."
    },
    {
      incorrect: "My friend and me made a poster about ocean animals.",
      corrected: "My friend and I made a poster about ocean animals.",
      notes: "Fixes pronoun case."
    }
  ],

  faq: [
    {
      question: "What are short editing passages?",
      answer: "They are brief paragraphs with errors that students correct for quick practice."
    },
    {
      question: "Why use shorter passages?",
      answer: "They save time while still giving students meaningful proofreading practice."
    }
  ],

  related: [
    "paragraph-editing-practice",
    "daily-editing-practice",
    "printable-editing-worksheets",
  ],
  category: "proofreading",
},

"paragraph-editing-worksheets-with-answer-key": {
  title: "Paragraph Editing Worksheets with Answer Key",
  description:
    "Create paragraph editing worksheets with answer keys for grammar, punctuation, capitalization, and spelling practice.",
  heading: "Paragraph Editing Worksheets with Answer Key",
  intro:
    "Paragraph editing worksheets with answer keys help students practice proofreading longer writing while giving teachers a fast way to review corrections. Students can edit the paragraph first, then compare their work to a clean corrected version.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "Last week our class visited the nature center we learned about plants animals and insects.",
      corrected: "Last week, our class visited the nature center. We learned about plants, animals, and insects.",
      notes: "Fixes run-on sentences and adds commas."
    },
    {
      incorrect: "My family went to the fair on saturday. We eat popcorn and watched the parade.",
      corrected: "My family went to the fair on Saturday. We ate popcorn and watched the parade.",
      notes: "Fixes capitalization and verb tense."
    },
    {
      incorrect: "Before turning in the paragraph each student need to check for missing punctuation.",
      corrected: "Before turning in the paragraph, each student needs to check for missing punctuation.",
      notes: "Adds comma and fixes verb agreement."
    }
  ],

  faq: [
    {
      question: "Why include an answer key?",
      answer: "Answer keys help students check their work and understand corrections more clearly."
    },
    {
      question: "What skills do paragraph worksheets build?",
      answer: "They build grammar, punctuation, spelling, and full-paragraph proofreading skills."
    }
  ],

  related: [
    "editing-worksheets-with-answer-key",
    "paragraph-editing-practice",
    "printable-editing-worksheets",
  ],
  category: "printable",
},

"sentence-editing-worksheets-printable-pdf": {
  title: "Sentence Editing Worksheets Printable PDF",
  description:
    "Generate sentence editing worksheets as printable PDFs with simple grammar, punctuation, spelling, and capitalization mistakes.",
  heading: "Sentence Editing Worksheets Printable PDF",
  intro:
    "Printable sentence editing worksheets are easy to use for quick practice, homework, tutoring, and classroom review. Students correct short sentences, then teachers can print or download a clean worksheet with an answer key.",
  gradeLevel: "elementary and middle school",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "the boy ride his bike to school.",
      corrected: "The boy rides his bike to school.",
      notes: "Fixes capitalization and verb agreement."
    },
    {
      incorrect: "I forgot to bring my pencil today",
      corrected: "I forgot to bring my pencil today.",
      notes: "Adds punctuation."
    },
    {
      incorrect: "Sarah and me read the same book.",
      corrected: "Sarah and I read the same book.",
      notes: "Corrects pronoun case."
    }
  ],

  faq: [
    {
      question: "What are printable sentence editing worksheets?",
      answer: "They are short editing exercises students can print and complete on paper."
    },
    {
      question: "Why use PDF worksheets?",
      answer: "PDFs are easy to print, share, and use in both classroom and homework settings."
    }
  ],

  related: [
    "sentence-correction-exercises",
    "printable-editing-worksheets",
    "editing-worksheets-with-answer-key",
  ],
  category: "printable",
},

"easy-editing-worksheets-for-beginners": {
  title: "Easy Editing Worksheets for Beginners",
  description:
    "Create easy editing worksheets for beginners with simple grammar, punctuation, capitalization, and spelling errors.",
  heading: "Easy Editing Worksheets for Beginners",
  intro:
    "Beginner editing worksheets should be simple enough to build confidence but still useful for real practice. These worksheets focus on common, easy-to-spot mistakes so students can learn how to proofread without feeling overwhelmed.",
  gradeLevel: "elementary",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "i like to play outside.",
      corrected: "I like to play outside.",
      notes: "Capitalizes the pronoun I."
    },
    {
      incorrect: "The cat run fast.",
      corrected: "The cat runs fast.",
      notes: "Fixes verb agreement."
    },
    {
      incorrect: "sam has a red backpack.",
      corrected: "Sam has a red backpack.",
      notes: "Capitalizes a proper noun."
    }
  ],

  faq: [
    {
      question: "What makes a worksheet beginner-friendly?",
      answer: "It uses simple sentences and focuses on easy-to-spot mistakes like capitalization and punctuation."
    },
    {
      question: "Who should use beginner editing worksheets?",
      answer: "They are ideal for early elementary students or learners needing extra support."
    }
  ],

  related: [
    "3rd-grade-editing-worksheets",
    "quick-editing-practice-worksheets",
    "daily-editing-practice",
  ],
  category: "grade-level",
},

"challenging-editing-passages-for-students": {
  title: "Challenging Editing Passages for Students",
  description:
    "Create challenging editing passages with higher-level grammar, punctuation, sentence structure, and proofreading errors.",
  heading: "Challenging Editing Passages for Students",
  intro:
    "Challenging editing passages are useful when students are ready for more than basic corrections. These worksheets give stronger writers practice with sentence structure, agreement, punctuation, word choice, and careful proofreading.",
  gradeLevel: "middle school",
  errorAmount: "high",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "Each of the students were responsible for revising there own conclusion.",
      corrected: "Each of the students was responsible for revising their own conclusion.",
      notes: "Fixes agreement and word choice."
    },
    {
      incorrect: "The committee discussed the issue, they decided to wait until next week.",
      corrected: "The committee discussed the issue; they decided to wait until next week.",
      notes: "Fixes comma splice."
    },
    {
      incorrect: "The paragraph includes interesting facts however the organization is confusing.",
      corrected: "The paragraph includes interesting facts; however, the organization is confusing.",
      notes: "Adds proper punctuation."
    }
  ],

  faq: [
    {
      question: "Who should use challenging editing passages?",
      answer: "They are best for middle school or advanced students ready for deeper proofreading practice."
    },
    {
      question: "What makes these passages more difficult?",
      answer: "They include more complex grammar, sentence structure, and punctuation errors."
    }
  ],

  related: [
    "8th-grade-editing-worksheets",
    "middle-school-editing-passages",
    "paragraph-editing-practice",
  ],
  category: "grade-level",
},
"2nd-grade-editing-worksheets": {
  title: "2nd Grade Editing Worksheets",
  description:
    "Create 2nd grade editing worksheets with simple grammar, spelling, punctuation, and capitalization mistakes for early writing practice.",
  heading: "2nd Grade Editing Worksheets with Simple Errors",
  intro:
    "2nd grade students are just starting to notice writing mistakes, so editing practice needs to stay simple and clear. These worksheets focus on basic sentence structure, capitalization, and punctuation so students can build confidence while learning how to fix their own work.",
  gradeLevel: "2nd grade",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "i like to play outside.",
      corrected: "I like to play outside.",
      notes: "Capitalizes the pronoun I."
    },
    {
      incorrect: "The cat run fast.",
      corrected: "The cat runs fast.",
      notes: "Fixes verb agreement."
    },
    {
      incorrect: "my friend sam has a red ball.",
      corrected: "My friend Sam has a red ball.",
      notes: "Capitalizes sentence start and name."
    }
  ],

  faq: [
    {
      question: "What do 2nd grade editing worksheets focus on?",
      answer: "They focus on simple capitalization, punctuation, spelling, and basic sentence structure."
    },
    {
      question: "How should editing be introduced in 2nd grade?",
      answer: "Keep it simple with short sentences and clear, easy-to-spot mistakes."
    }
  ],

  related: [
    "3rd-grade-editing-worksheets",
    "easy-editing-worksheets-for-beginners",
    "daily-editing-practice",
  ],
  category: "grade-level",
},

"editing-worksheets-for-esl-students": {
  title: "Editing Worksheets for ESL Students",
  description:
    "Generate editing worksheets for ESL students with clear grammar, punctuation, and sentence structure practice.",
  heading: "Editing Worksheets for ESL Students",
  intro:
    "ESL students benefit from editing practice that is direct and easy to follow. These worksheets focus on common grammar and sentence mistakes that appear in everyday writing, helping students build accuracy and confidence step by step.",
  gradeLevel: "elementary and middle school",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "She go to school every day.",
      corrected: "She goes to school every day.",
      notes: "Fixes verb agreement."
    },
    {
      incorrect: "I am like to read books.",
      corrected: "I like to read books.",
      notes: "Corrects sentence structure."
    },
    {
      incorrect: "They dont understand the question.",
      corrected: "They don't understand the question.",
      notes: "Adds correct contraction."
    }
  ],

  faq: [
    {
      question: "Why are editing worksheets useful for ESL students?",
      answer: "They provide clear, focused practice with common grammar and sentence mistakes."
    },
    {
      question: "What should ESL editing practice focus on?",
      answer: "It should focus on basic grammar, verb forms, sentence structure, and clarity."
    }
  ],

  related: [
    "sentence-correction-exercises",
    "grammar-correction-exercises",
    "easy-editing-worksheets-for-beginners",
  ],
  category: "proofreading",
},

"editing-practice-for-writing-centers": {
  title: "Editing Practice for Writing Centers",
  description:
    "Create editing worksheets for writing centers with short grammar, punctuation, and spelling practice activities.",
  heading: "Editing Practice for Writing Centers",
  intro:
    "Writing centers need activities students can complete independently. These editing worksheets give students focused correction practice without needing constant instruction, making them a strong fit for centers or rotation-based classrooms.",
  gradeLevel: "elementary",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "the boy ride his bike to school.",
      corrected: "The boy rides his bike to school.",
      notes: "Fixes capitalization and verb agreement."
    },
    {
      incorrect: "My friend dont like carrots.",
      corrected: "My friend doesn't like carrots.",
      notes: "Fixes contraction."
    },
    {
      incorrect: "She have a blue notebook.",
      corrected: "She has a blue notebook.",
      notes: "Fixes verb agreement."
    }
  ],

  faq: [
    {
      question: "What are writing centers?",
      answer: "Writing centers are classroom stations where students complete independent writing or editing activities."
    },
    {
      question: "Why use editing worksheets in centers?",
      answer: "They allow students to practice skills independently without needing constant guidance."
    }
  ],

  related: [
    "editing-worksheets-for-bell-work",
    "quick-editing-practice-worksheets",
    "daily-editing-practice",
  ],
  category: "proofreading",
},

"editing-worksheets-for-test-prep": {
  title: "Editing Worksheets for Test Prep",
  description:
    "Generate editing worksheets for test prep with grammar, punctuation, and proofreading errors similar to standardized tests.",
  heading: "Editing Worksheets for Test Prep",
  intro:
    "Test prep editing practice helps students recognize common mistake patterns before they show up on assessments. These worksheets focus on sentence correction, grammar, and punctuation errors similar to what students see on standardized tests.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "Each of the answers are written on the board.",
      corrected: "Each of the answers is written on the board.",
      notes: "Fixes subject-verb agreement."
    },
    {
      incorrect: "The paragraph contain several errors that need fixing.",
      corrected: "The paragraph contains several errors that need fixing.",
      notes: "Fixes verb agreement."
    },
    {
      incorrect: "My friend and me studied together.",
      corrected: "My friend and I studied together.",
      notes: "Corrects pronoun case."
    }
  ],

  faq: [
    {
      question: "Why use editing worksheets for test prep?",
      answer: "They help students recognize common grammar and writing errors before assessments."
    },
    {
      question: "What skills do these worksheets improve?",
      answer: "They improve grammar, punctuation, proofreading, and test-taking accuracy."
    }
  ],

  related: [
    "sentence-correction-exercises",
    "grammar-correction-exercises",
    "paragraph-editing-practice",
  ],
  category: "proofreading",
},

"editing-worksheets-for-fast-finishers": {
  title: "Editing Worksheets for Fast Finishers",
  description:
    "Create quick editing worksheets for fast finishers with short grammar and punctuation correction tasks.",
  heading: "Editing Worksheets for Fast Finishers",
  intro:
    "Fast finishers need something productive to work on without disrupting the class. These editing worksheets give students a quick, meaningful task that reinforces writing skills while keeping them engaged.",
  gradeLevel: "elementary",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "We was done with our work early.",
      corrected: "We were done with our work early.",
      notes: "Fixes verb agreement."
    },
    {
      incorrect: "My brother dont like math.",
      corrected: "My brother doesn't like math.",
      notes: "Fixes contraction."
    },
    {
      incorrect: "The dog run fast across the yard.",
      corrected: "The dog runs fast across the yard.",
      notes: "Fixes verb agreement."
    }
  ],

  faq: [
    {
      question: "Who are fast finishers?",
      answer: "Fast finishers are students who complete assignments early and need additional work."
    },
    {
      question: "Why give editing worksheets to fast finishers?",
      answer: "They keep students engaged while reinforcing important writing skills."
    }
  ],

  related: [
    "quick-editing-practice-worksheets",
    "editing-worksheets-for-bell-work",
    "daily-editing-practice",
  ],
  category: "proofreading",
},

"editing-worksheets-for-substitute-teachers": {
  title: "Editing Worksheets for Substitute Teachers",
  description:
    "Generate simple editing worksheets for substitute teachers with easy-to-follow grammar and punctuation practice.",
  heading: "Editing Worksheets for Substitute Teachers",
  intro:
    "Substitute teachers need activities that are easy to explain and quick to start. These editing worksheets give students clear instructions and short correction tasks that can be used without preparation.",
  gradeLevel: "elementary and middle school",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "The class was quiet but some students talk.",
      corrected: "The class was quiet, but some students talked.",
      notes: "Fixes verb tense and punctuation."
    },
    {
      incorrect: "My friend dont understand the directions.",
      corrected: "My friend doesn't understand the directions.",
      notes: "Fixes contraction."
    },
    {
      incorrect: "We was ready for the next activity.",
      corrected: "We were ready for the next activity.",
      notes: "Fixes verb agreement."
    }
  ],

  faq: [
    {
      question: "Why are editing worksheets good for substitutes?",
      answer: "They are simple, structured, and require little explanation."
    },
    {
      question: "What makes a good substitute activity?",
      answer: "It should be easy to start, clear to follow, and useful for student learning."
    }
  ],

  related: [
    "editing-worksheets-for-bell-work",
    "quick-editing-practice-worksheets",
    "daily-editing-practice",
  ],
  category: "proofreading",
},

"editing-worksheets-for-homeschool": {
  title: "Editing Worksheets for Homeschool",
  description:
    "Create editing worksheets for homeschool students with flexible grammar, punctuation, and writing correction practice.",
  heading: "Editing Worksheets for Homeschool",
  intro:
    "Homeschool lessons often need flexible materials that can adapt to different skill levels. These editing worksheets let you create custom practice based on what your student is currently learning.",
  gradeLevel: "elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "My student dont understand the lesson yet.",
      corrected: "My student doesn't understand the lesson yet.",
      notes: "Fixes contraction."
    },
    {
      incorrect: "We was working on writing this morning.",
      corrected: "We were working on writing this morning.",
      notes: "Fixes verb agreement."
    },
    {
      incorrect: "The lesson was easier then yesterday.",
      corrected: "The lesson was easier than yesterday.",
      notes: "Fixes word choice."
    }
  ],

  faq: [
    {
      question: "Why use editing worksheets in homeschool?",
      answer: "They provide structured writing practice that can be adapted to each student."
    },
    {
      question: "Can these worksheets be customized?",
      answer: "Yes, they can be adjusted based on skill level and learning goals."
    }
  ],

  related: [
    "printable-editing-worksheets",
    "editing-worksheets-with-answer-key",
    "daily-editing-practice",
  ],
  category: "printable",
},

"editing-worksheets-for-small-groups": {
  title: "Editing Worksheets for Small Groups",
  description:
    "Generate editing worksheets for small group instruction with targeted grammar and punctuation practice.",
  heading: "Editing Worksheets for Small Groups",
  intro:
    "Small group instruction works best when materials are targeted and manageable. These editing worksheets help you focus on specific skills with a small set of students who need extra support.",
  gradeLevel: "elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "The group of students were working together.",
      corrected: "The group of students was working together.",
      notes: "Fixes subject-verb agreement."
    },
    {
      incorrect: "My friend dont understand the lesson.",
      corrected: "My friend doesn't understand the lesson.",
      notes: "Fixes contraction."
    },
    {
      incorrect: "The teacher give us extra help.",
      corrected: "The teacher gives us extra help.",
      notes: "Fixes verb agreement."
    }
  ],

  faq: [
    {
      question: "Why use editing worksheets in small groups?",
      answer: "They allow focused instruction on specific writing skills."
    },
    {
      question: "What should small group editing focus on?",
      answer: "It should target the specific grammar or writing skills students need to improve."
    }
  ],

  related: [
    "grammar-correction-exercises",
    "sentence-correction-exercises",
    "paragraph-editing-practice",
  ],
  category: "proofreading",
},

"editing-worksheets-for-writing-warmups": {
  title: "Editing Worksheets for Writing Warmups",
  description:
    "Create editing worksheets for writing warmups with short grammar and punctuation correction tasks.",
  heading: "Editing Worksheets for Writing Warmups",
  intro:
    "Writing warmups should be quick, focused, and easy to start. These editing worksheets give students a short correction task that prepares them for writing without taking up too much class time.",
  gradeLevel: "elementary",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "we started writing after fixing a sentence.",
      corrected: "We started writing after fixing a sentence.",
      notes: "Capitalizes sentence start."
    },
    {
      incorrect: "The class was quiet but some students talk.",
      corrected: "The class was quiet, but some students talked.",
      notes: "Fixes punctuation and verb tense."
    },
    {
      incorrect: "My sentence need a period.",
      corrected: "My sentence needs a period.",
      notes: "Fixes verb agreement."
    }
  ],

  faq: [
    {
      question: "What are writing warmups?",
      answer: "Short activities that prepare students for a writing lesson."
    },
    {
      question: "Why use editing for warmups?",
      answer: "It gets students thinking about grammar and writing before starting longer tasks."
    }
  ],

  related: [
    "daily-editing-practice",
    "editing-worksheets-for-bell-work",
    "quick-editing-practice-worksheets",
  ],
  category: "proofreading",
},

"editing-worksheets-for-early-finishers": {
  title: "Editing Worksheets for Early Finishers",
  description:
    "Generate editing worksheets for early finishers with quick grammar and punctuation correction practice.",
  heading: "Editing Worksheets for Early Finishers",
  intro:
    "Early finishers need meaningful work that reinforces learning without adding extra complexity. These editing worksheets give students a quick task that keeps them focused and practicing writing skills.",
  gradeLevel: "elementary",
  errorAmount: "low",
  errorTypes: "mixed",

  exampleBlocks: [
    {
      incorrect: "The student was done with there work early.",
      corrected: "The student was done with their work early.",
      notes: "Fixes word choice."
    },
    {
      incorrect: "I seen the answer quickly.",
      corrected: "I saw the answer quickly.",
      notes: "Fixes verb tense."
    },
    {
      incorrect: "The teacher give us another task.",
      corrected: "The teacher gives us another task.",
      notes: "Fixes verb agreement."
    }
  ],

  faq: [
    {
      question: "Who are early finishers?",
      answer: "Students who complete work before others and need additional tasks."
    },
    {
      question: "Why give editing worksheets to early finishers?",
      answer: "They provide meaningful practice while keeping students engaged."
    }
  ],

  related: [
    "quick-editing-practice-worksheets",
    "editing-worksheets-for-fast-finishers",
    "daily-editing-practice",
  ],
  category: "proofreading",
},
"editing-practice-for-3rd-5th-grade": {
  title: "Editing Practice 3rd 5th Grade",
  description:
    "Create editing practice for 3rd through 5th grade with grammar, punctuation, spelling, and capitalization mistakes.",
  heading: "Editing Practice for 3rd Through 5th Grade",
  intro:
    "Upper elementary students need editing practice that is simple enough to understand but strong enough to build real writing habits. These worksheets help 3rd, 4th, and 5th grade students correct common grammar, punctuation, spelling, and capitalization mistakes in short classroom-friendly sentences and passages.",
  gradeLevel: "3rd to 5th grade",
  errorAmount: "medium",
  errorTypes: "mixed",
  exampleBlocks: [
    {
      incorrect: "the class went to the library on friday.",
      corrected: "The class went to the library on Friday.",
      notes: "Fixes capitalization."
    },
    {
      incorrect: "My friend and me finished the poster.",
      corrected: "My friend and I finished the poster.",
      notes: "Corrects pronoun case."
    },
    {
      incorrect: "The students was excited for recess.",
      corrected: "The students were excited for recess.",
      notes: "Fixes subject-verb agreement."
    }
  ],
  faq: [
    {
      question: "What grades are these editing worksheets for?",
      answer: "They are designed for 3rd, 4th, and 5th grade students."
    },
    {
      question: "What skills do students practice?",
      answer: "Students practice grammar, punctuation, capitalization, spelling, and proofreading."
    }
  ],
  related: [
    "3rd-grade-editing-worksheets",
    "4th-grade-editing-passages",
    "5th-grade-editing-passages",
  ],
  category: "grade-level",
},

"editing-practice-for-middle-school": {
  title: "Editing Practice Middle School",
  description:
    "Create middle school editing practice with grammar, punctuation, sentence structure, and proofreading errors.",
  heading: "Editing Practice for Middle School",
  intro:
    "Middle school editing practice should feel more mature than basic elementary worksheets. These pages help students correct realistic errors in grammar, punctuation, word choice, sentence structure, and clarity so they can become stronger independent writers.",
  gradeLevel: "middle school",
  errorAmount: "medium",
  errorTypes: "mixed",
  exampleBlocks: [
    {
      incorrect: "Each of the students were responsible for there own paragraph.",
      corrected: "Each of the students was responsible for their own paragraph.",
      notes: "Fixes agreement and word choice."
    },
    {
      incorrect: "Although the assignment was difficult the class finished on time.",
      corrected: "Although the assignment was difficult, the class finished on time.",
      notes: "Adds comma after introductory clause."
    },
    {
      incorrect: "The article had good facts, it needed a stronger conclusion.",
      corrected: "The article had good facts, but it needed a stronger conclusion.",
      notes: "Fixes comma splice."
    }
  ],
  faq: [
    {
      question: "What should middle school editing practice include?",
      answer: "It should include grammar, punctuation, sentence structure, word choice, and clarity errors."
    },
    {
      question: "Why is editing important in middle school?",
      answer: "It helps students revise longer writing and prepare for more advanced assignments."
    }
  ],
  related: [
    "middle-school-editing-passages",
    "7th-grade-editing-practice",
    "8th-grade-editing-worksheets",
  ],
  category: "grade-level",
},

"context-clues-editing-worksheets": {
  title: "Context Clues Editing Worksheets",
  description:
    "Create context clues editing worksheets that help students correct word choice, grammar, and meaning-based errors.",
  heading: "Context Clues Editing Worksheets",
  intro:
    "Context clues editing worksheets help students look beyond one sentence and think about meaning. These worksheets are useful when students need practice choosing the right word, fixing confusing sentences, and using surrounding details to understand what should be corrected.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "medium",
  errorTypes: "grammar",
  exampleBlocks: [
    {
      incorrect: "The rain made the sidewalk slippery, so we walked quick.",
      corrected: "The rain made the sidewalk slippery, so we walked quickly.",
      notes: "Corrects word form based on sentence meaning."
    },
    {
      incorrect: "The loud thunder made the dog brave under the bed.",
      corrected: "The loud thunder made the dog hide under the bed.",
      notes: "Fixes word choice using context."
    },
    {
      incorrect: "She was proud because she failed the test.",
      corrected: "She was upset because she failed the test.",
      notes: "Corrects meaning based on context."
    }
  ],
  faq: [
    {
      question: "What are context clues editing worksheets?",
      answer: "They help students use surrounding words and sentence meaning to find and correct mistakes."
    },
    {
      question: "Why use context clues in editing practice?",
      answer: "Students learn to edit for meaning, not just grammar rules."
    }
  ],
  related: [
    "grammar-correction-exercises",
    "sentence-correction-exercises",
    "paragraph-editing-practice",
  ],
  category: "grammar",
},

"spelling-error-correction-worksheets": {
  title: "Spelling Error Correction Worksheets",
  description:
    "Generate spelling error correction worksheets with common misspellings students can find and fix.",
  heading: "Spelling Error Correction Worksheets",
  intro:
    "Spelling error correction worksheets give students focused practice finding misspelled words in sentences and short passages. Instead of memorizing words in isolation, students see spelling mistakes in real writing and learn to correct them in context.",
  gradeLevel: "elementary and middle school",
  errorAmount: "medium",
  errorTypes: "spelling",
  exampleBlocks: [
    {
      incorrect: "I put my homework in my bakpack.",
      corrected: "I put my homework in my backpack.",
      notes: "Corrects a common spelling mistake."
    },
    {
      incorrect: "The class visited the libary after lunch.",
      corrected: "The class visited the library after lunch.",
      notes: "Fixes spelling."
    },
    {
      incorrect: "My freind helped me finish the project.",
      corrected: "My friend helped me finish the project.",
      notes: "Corrects misspelled word."
    }
  ],
  faq: [
    {
      question: "What are spelling correction worksheets?",
      answer: "They are worksheets where students find and fix misspelled words in context."
    },
    {
      question: "Why practice spelling in sentences?",
      answer: "It helps students notice spelling mistakes while reading and writing naturally."
    }
  ],
  related: [
    "proofreading-practice-worksheets",
    "daily-editing-practice",
    "printable-editing-worksheets",
  ],
  category: "proofreading",
},

"capitalization-and-punctuation-worksheets": {
  title: "Capitalization and Punctuation",
  description:
    "Create capitalization and punctuation worksheets with sentence starts, proper nouns, commas, periods, and question marks.",
  heading: "Capitalization and Punctuation Worksheets",
  intro:
    "Capitalization and punctuation are two of the most common editing skills students need to practice. These worksheets help students fix sentence starts, proper nouns, missing periods, commas, question marks, and other simple mistakes that affect writing clarity.",
  gradeLevel: "elementary",
  errorAmount: "low",
  errorTypes: "mixed",
  exampleBlocks: [
    {
      incorrect: "where did mason put his notebook",
      corrected: "Where did Mason put his notebook?",
      notes: "Fixes capitalization and punctuation."
    },
    {
      incorrect: "on monday we went to the park.",
      corrected: "On Monday, we went to the park.",
      notes: "Capitalizes and adds comma."
    },
    {
      incorrect: "my teacher read a story to the class",
      corrected: "My teacher read a story to the class.",
      notes: "Adds capitalization and period."
    }
  ],
  faq: [
    {
      question: "What do capitalization and punctuation worksheets teach?",
      answer: "They teach students how to fix sentence starts, proper nouns, commas, periods, and question marks."
    },
    {
      question: "Who should use these worksheets?",
      answer: "They are best for elementary students who need basic editing practice."
    }
  ],
  related: [
    "capitalization-worksheets",
    "punctuation-correction-worksheet",
    "daily-editing-practice",
  ],
  category: "punctuation",
},

"editing-practice-with-answer-key": {
  title: "Editing Practice with Answer Key",
  description:
    "Create editing practice with answer keys for grammar, punctuation, spelling, and capitalization review.",
  heading: "Editing Practice with Answer Key",
  intro:
    "Editing practice with an answer key gives students a clear way to check their corrections. Teachers can use these worksheets for independent practice, homework, or review because students can compare their edited version to the corrected answer.",
  gradeLevel: "elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",
  exampleBlocks: [
    {
      incorrect: "The students was working on there paragraphs.",
      corrected: "The students were working on their paragraphs.",
      notes: "Fixes agreement and word choice."
    },
    {
      incorrect: "I finished the worksheet but forgot my name",
      corrected: "I finished the worksheet but forgot my name.",
      notes: "Adds missing punctuation."
    },
    {
      incorrect: "My teacher give us time to check our answers.",
      corrected: "My teacher gives us time to check our answers.",
      notes: "Fixes verb agreement."
    }
  ],
  faq: [
    {
      question: "Why use editing practice with an answer key?",
      answer: "An answer key makes it easier for students to check their corrections and learn from mistakes."
    },
    {
      question: "Can students use these independently?",
      answer: "Yes, students can complete the worksheet first and then review the corrected version."
    }
  ],
  related: [
    "editing-worksheets-with-answer-key",
    "paragraph-editing-worksheets-with-answer-key",
    "printable-editing-worksheets",
  ],
  category: "printable",
},

"grammar-and-punctuation-practice": {
  title: "Grammar and Punctuation Practice",
  description:
    "Generate grammar and punctuation practice worksheets with sentence correction, commas, periods, and agreement errors.",
  heading: "Grammar and Punctuation Practice",
  intro:
    "Grammar and punctuation practice helps students improve the way their sentences sound and read. These worksheets combine common grammar mistakes with punctuation corrections so students can practice editing full sentences instead of isolated rules.",
  gradeLevel: "upper elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",
  exampleBlocks: [
    {
      incorrect: "The class was quiet but the students was excited.",
      corrected: "The class was quiet, but the students were excited.",
      notes: "Fixes comma use and agreement."
    },
    {
      incorrect: "My brother dont like reading long books.",
      corrected: "My brother doesn't like reading long books.",
      notes: "Corrects contraction."
    },
    {
      incorrect: "After recess we started our writing assignment.",
      corrected: "After recess, we started our writing assignment.",
      notes: "Adds comma after introductory phrase."
    }
  ],
  faq: [
    {
      question: "What is grammar and punctuation practice?",
      answer: "It helps students correct sentence structure, agreement, commas, periods, and other writing mistakes."
    },
    {
      question: "Why combine grammar and punctuation?",
      answer: "Students often need to correct both at the same time when editing real writing."
    }
  ],
  related: [
    "grammar-correction-exercises",
    "punctuation-correction-worksheet",
    "sentence-correction-exercises",
  ],
  category: "grammar",
},

"editing-worksheets-for-intervention": {
  title: "Editing Worksheets for Intervention",
  description:
    "Create editing worksheets for intervention groups with targeted grammar, punctuation, and proofreading practice.",
  heading: "Editing Worksheets for Intervention",
  intro:
    "Editing worksheets for intervention give students extra support with writing skills they have not fully mastered yet. These worksheets work well for small groups, reteaching, tutoring, and targeted review because they focus on clear, common mistakes students can correct step by step.",
  gradeLevel: "elementary and middle school",
  errorAmount: "low",
  errorTypes: "mixed",
  exampleBlocks: [
    {
      incorrect: "The student have trouble finding the mistake.",
      corrected: "The student has trouble finding the mistake.",
      notes: "Fixes subject-verb agreement."
    },
    {
      incorrect: "we practiced editing in a small group.",
      corrected: "We practiced editing in a small group.",
      notes: "Capitalizes sentence start."
    },
    {
      incorrect: "My teacher help me fix my sentence.",
      corrected: "My teacher helps me fix my sentence.",
      notes: "Fixes verb agreement."
    }
  ],
  faq: [
    {
      question: "What are editing worksheets for intervention?",
      answer: "They are targeted worksheets used to give students extra support with grammar and proofreading."
    },
    {
      question: "When should teachers use them?",
      answer: "They work well for small groups, reteaching, tutoring, and students who need more practice."
    }
  ],
  related: [
    "editing-worksheets-for-small-groups",
    "easy-editing-worksheets-for-beginners",
    "sentence-correction-exercises",
  ],
  category: "proofreading",
},

"editing-worksheets-for-tutoring": {
  title: "Editing Worksheets for Tutoring",
  description:
    "Create editing worksheets for tutoring sessions with focused grammar, punctuation, spelling, and writing correction practice.",
  heading: "Editing Worksheets for Tutoring",
  intro:
    "Tutoring sessions need practice that is focused, flexible, and easy to adjust. Editing worksheets help tutors target the exact mistakes a student is struggling with, whether that is punctuation, grammar, spelling, capitalization, or sentence structure.",
  gradeLevel: "elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",
  exampleBlocks: [
    {
      incorrect: "My tutor help me fix my writing.",
      corrected: "My tutor helps me fix my writing.",
      notes: "Fixes verb agreement."
    },
    {
      incorrect: "I seen the mistake after reading again.",
      corrected: "I saw the mistake after reading again.",
      notes: "Corrects verb tense."
    },
    {
      incorrect: "The sentence was short but it still need a period",
      corrected: "The sentence was short, but it still needs a period.",
      notes: "Fixes punctuation and agreement."
    }
  ],
  faq: [
    {
      question: "Why use editing worksheets for tutoring?",
      answer: "They give tutors focused practice materials that can match a student's exact skill needs."
    },
    {
      question: "Can these worksheets be used one-on-one?",
      answer: "Yes, they work well for one-on-one review, guided correction, and independent practice."
    }
  ],
  related: [
    "editing-worksheets-for-intervention",
    "proofreading-practice-worksheets",
    "grammar-correction-exercises",
  ],
  category: "proofreading",
},

"editable-worksheet-generator": {
  title: "Editable Worksheet Generator",
  description:
    "Use an editable worksheet generator to create custom editing practice with grammar, punctuation, spelling, and answer keys.",
  heading: "Editable Worksheet Generator",
  intro:
    "An editable worksheet generator helps teachers create practice that actually matches what their students need. Instead of using the same generic worksheet every time, you can turn your own text into an editing activity with realistic errors, correction practice, and an answer key.",
  gradeLevel: "elementary and middle school",
  errorAmount: "medium",
  errorTypes: "mixed",
  exampleBlocks: [
    {
      incorrect: "The teacher paste in a paragraph for students to edit.",
      corrected: "The teacher pastes in a paragraph for students to edit.",
      notes: "Fixes verb agreement."
    },
    {
      incorrect: "Students can fix grammar punctuation and spelling errors.",
      corrected: "Students can fix grammar, punctuation, and spelling errors.",
      notes: "Adds commas in a list."
    },
    {
      incorrect: "The worksheet was ready to print but it need a title.",
      corrected: "The worksheet was ready to print, but it needed a title.",
      notes: "Fixes punctuation and verb tense."
    }
  ],
  faq: [
    {
      question: "What is an editable worksheet generator?",
      answer: "It is a tool that helps create custom worksheets from your own text or lesson content."
    },
    {
      question: "Why use custom editing worksheets?",
      answer: "They let teachers match practice to the exact skills and topics students are learning."
    }
  ],
  related: [
    "printable-editing-worksheets",
    "editing-worksheets-with-answer-key",
    "daily-editing-practice",
  ],
  category: "printable",
},}