export type SeoCategory =
  | "grade-level"
  | "grammar"
  | "punctuation"
  | "proofreading"
  | "printable";

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
    examples: [
      "The students was excited to visit the science museum on friday.",
      "Mia packed her lunch, but forgot to bring she water bottle.",
      "Our class read a story about animals that lives in the rainforest.",
      "After recess we wrote about our favorite book but I forgot my punctuation.",
      "The teacher ask us to check each sentence before turning in our work.",
      "My friends and me worked together on the history project.",
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
    examples: [
      "They was going to the park after school.",
      "My brother dont like when it rains.",
      "we seen a large bird sitting on the fence.",
      "She have three pencils in her backpack.",
      "The class was quiet because they was taking a test.",
      "I wanted to finish my story but the bell ringed.",
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
    examples: [
      "After school we went to the library",
      "My sisters book was left on the bus.",
      "I wanted to go outside but it started raining",
      "Yes I finished my reading assignment before lunch.",
      "The teacher said please take out your notebooks.",
      "We packed pencils paper folders and glue for the project.",
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
    examples: [
      "the dog runned across the yard after its ball.",
      "We went to the park after lunch on friday.",
      "My teacher give us a new book to read.",
      "Sarah and me made a poster for science class.",
      "The birds was flying over the trees this morning.",
      "I forgot to put a period at the end of my sentence",
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
    examples: [
      "The group of students were planning there trip for next month.",
      "Each of the players have to bring their own equipment.",
      "We was surprised by how quickly the storm passed.",
      "Although the project was difficult the class finished it on time.",
      "The article explains how pollution effects animals in the river.",
      "Neither of the answers are correct according to the passage.",
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
    examples: [
      "She dont know the answer to the question.",
      "They was going to the game after school.",
      "He have finished his homework before dinner.",
      "The dogs runs across the field every morning.",
      "My cousin and me are working on the same project.",
      "The book were sitting on the desk by the window.",
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
    examples: [
      "we went to texas during the summer.",
      "My friend sarah is coming over later.",
      "They visited the grand canyon last year.",
      "on monday, our class started a new book.",
      "We read a story called the secret garden.",
      "my family celebrates thanksgiving at my aunt's house.",
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
    examples: [
      "Yesterday we go to the zoo and see many animals.",
      "My brother dont like vegetables but he eats fruit.",
      "There was alot of people at the park on saturday.",
      "The class line up quietly before going to lunch.",
      "I wrote my answer but forgot to check it for mistakes.",
      "Every morning we correct one sentence in our notebooks.",
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
    examples: [
      "The class was excited to start there writing project on monday.",
      "Each student have to correct the paragraph before turning it in.",
      "We read the passage carefully but forgot to check our punctuation",
      "My teacher said that revising and editing is both important parts of writing.",
      "The answer key help students see what mistakes they missed.",
      "I corrected the spelling errors but I still need to fix the commas.",
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
    examples: [
      "Students should check there work before they turn it in.",
      "The worksheet was printed and passed out before class started",
      "We corrected spelling grammar and punctuation mistakes together.",
      "My class likes when the practice sentences are short and clear.",
      "The teacher gave us five minutes to edit the paragraph.",
      "I used a pencil so I could fix my answers during review.",
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
    examples: [
      "Last weekend my family went camping by the lake we cooked dinner outside and watched the stars.",
      "The students worked on there science project, but they forgot to label the chart correctly.",
      "When the rain started falling everyone runned inside the school building.",
      "Our teacher asked us to read the paragraph carefully and circle each mistake",
      "Editing a full paragraph help students understand how sentences work together.",
      "Before the final draft, each student check their paragraph for missing words.",
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
    examples: [
      "Proofreading help writers find mistakes before someone else reads there work.",
      "I checked my story for spelling errors but I forgot punctuation.",
      "The students was asked to proofread the paragraph with a partner.",
      "Before printing the report, we looked for missing commas and capital letters.",
      "A good writer always reread their work before turning it in.",
      "My final draft looked better after I fixed the grammar mistakes.",
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
    examples: [
      "After lunch we went outside for recess.",
      "I packed pencils notebooks folders and a calculator in my backpack.",
      "Yes I would like to join the reading group.",
      "Because the road was closed we had to take a different way home.",
      "The dog barked loudly but the cat stayed asleep.",
      "Before the test began the teacher answered our questions.",
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
  examples: [
    "the dog run fast across the yard.",
    "My friend sara went to the park yesterday",
    "We was happy to finish our project.",
    "i like to read books about animals.",
    "The teacher give us time to fix our work.",
    "My brother dont want to play outside today.",
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
  examples: [
    "The students was preparing their reports for science class.",
    "After lunch we went to the library but forgot our notebooks.",
    "My friend and me finished the project before the bell rang.",
    "The article explain how animals adapt to cold weather.",
    "We was asked to revise our paragraphs before turning them in.",
    "The class visited the museum on friday and took notes.",
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
  examples: [
    "Neither of the students were sure how to answer the question.",
    "The author uses details that helps the reader understand the setting.",
    "Although the assignment was difficult the class completed it on time.",
    "My brother and me studied for the history test together.",
    "The team was proud of there performance during the final game.",
    "Each paragraph need a clear topic sentence and supporting details.",
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
  examples: [
    "The committee were unsure whether its decision would effect the entire school.",
    "Although the evidence was convincing the writer failed to explain their reasoning clearly.",
    "Each of the articles contain details that supports the main argument.",
    "The students revised there essays, however many still needed stronger conclusions.",
    "Neither the teacher nor the students was prepared for the schedule change.",
    "The speaker used examples that was interesting but they did not connect clearly to the topic.",
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
  examples: [
    "The dogs runs across the field every morning.",
    "Each student have a folder for writing class.",
    "My brother and sister walks to school together.",
    "The list of supplies are on the board.",
    "Neither answer seem correct to me.",
    "The group of players were ready for the game.",
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
  examples: [
    "Yesterday, we go to the library after lunch.",
    "She was reading her book when the bell rings.",
    "Last night, I finish my homework before dinner.",
    "The class will watched the video tomorrow.",
    "He runs to the bus stop and waited for his friend.",
    "They have went to that museum before.",
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
  examples: [
    "My friend and me worked on the poster together.",
    "Each student should bring their notebook to class.",
    "When Maria spoke to Ava, she said the project was finished.",
    "The dog wagged their tail when it saw the treat.",
    "Him and his brother cleaned the classroom after school.",
    "The team brought their equipment, but it was missing a helmet.",
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
  examples: [
    "The storm ended quickly, we went outside to check the yard.",
    "I finished my essay, I still need to proofread it.",
    "The teacher gave directions, the students began working.",
    "We wanted to play basketball, it started raining.",
    "The book was interesting, I read three chapters in one night.",
    "My pencil broke, I borrowed one from a friend.",
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
  examples: [
    "We went to the park it was too cold to stay long.",
    "The class finished the test everyone turned in their papers.",
    "I wanted to read my book my sister asked me to help her.",
    "The dog barked loudly the neighbors looked out the window.",
    "Our team practiced after school we have a game tomorrow.",
    "She packed her lunch she forgot to bring a drink.",
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
  examples: [
    "Where are you going asked Maya.",
    "I finished my homework said Jordan.",
    "The teacher said, please open your books.",
    "I can't find my pencil, said Liam",
    "Do you want to work together asked Emma.",
    "This is my favorite chapter said Ava.",
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
  examples: [
    "The class walk quietly into the room before the bell.",
    "today we will review our spelling words.",
    "I forgot my notebook but I brought my pencil.",
    "The students was ready to begin the lesson.",
    "My desk is clean but my folder is missing.",
    "We corrected one sentence before class started.",
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
  examples: [
    "The homework sheet have five sentences to correct.",
    "I completed the paragraph but forgot to check for capitals.",
    "My teacher ask us to fix each mistake before tomorrow.",
    "We was supposed to circle the errors and rewrite the sentence.",
    "The assignment was short but it help me practice editing.",
    "I put my finished worksheet in my backpack after dinner.",
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
  examples: [
    "we read a story about frogs today.",
    "The cat sleep on the chair.",
    "My friend dont like carrots.",
    "I seen a bird outside the window.",
    "The class line up after recess.",
    "mom helped me pack my lunch.",
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
  examples: [
    "On monday our class planted seeds in small cups. We put them near the window and watered them each day.",
    "The dog ran across the yard it chased a red ball. My sister laughed and called it back.",
    "Yesterday we visit the library after lunch. I found a book about space.",
    "The students was excited for the field trip. They packed lunches and wore comfortable shoes.",
    "My friend and me made a poster about ocean animals. We added pictures and labels.",
    "After the rain stopped we went outside. The grass was wet but the sun was shining.",
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
  examples: [
    "Last week our class visited the nature center we learned about plants animals and insects.",
    "The students worked in groups to build a small bridge, but they forget to measure the pieces.",
    "My family went to the fair on saturday. We eat popcorn and watched the parade.",
    "The science project was difficult but my partner and me finished it before lunch.",
    "Before turning in the paragraph each student need to check for missing punctuation.",
    "The answer key showed the correct sentences so we could fix our mistakes.",
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
  examples: [
    "the boy ride his bike to school.",
    "My teacher give us a new sentence to fix.",
    "We was sitting quietly at our desks.",
    "I forgot to bring my pencil today",
    "Sarah and me read the same book.",
    "The dog dont like loud noises.",
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
  examples: [
    "i like to play outside.",
    "The cat run fast.",
    "my mom made lunch for me.",
    "We was happy today.",
    "The dog dont like rain.",
    "sam has a red backpack.",
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
  examples: [
    "Although the evidence was strong the writer did not explain how it supports their claim.",
    "Each of the students were responsible for revising there own conclusion.",
    "The committee discussed the issue, they decided to wait until next week.",
    "Neither the article nor the video provide enough details about the event.",
    "The paragraph includes interesting facts however the organization is confusing.",
    "Because the assignment was more difficult than expected many students needed extra time.",
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
  examples: [
    "i like to play outside.",
    "The cat run fast.",
    "my friend sam has a red ball.",
    "We was happy today.",
    "The dog dont like rain.",
    "she read a book about animals.",
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
  examples: [
    "She go to school every day.",
    "I am like to read books.",
    "He have two brothers.",
    "We was in the classroom.",
    "My teacher say to open the book.",
    "They dont understand the question.",
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
  examples: [
    "the boy ride his bike to school.",
    "My friend dont like carrots.",
    "We was working quietly at our desks.",
    "I seen a bird outside.",
    "The teacher give us directions.",
    "She have a blue notebook.",
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
  examples: [
    "Each of the answers are written on the board.",
    "The students was preparing for the exam.",
    "Although the question was difficult the class tried their best.",
    "My friend and me studied together.",
    "The paragraph contain several errors that need fixing.",
    "The teacher ask us to read carefully before answering.",
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
  examples: [
    "We was done with our work early.",
    "The class read a story about animals.",
    "My brother dont like math.",
    "I seen a movie last night.",
    "The dog run fast across the yard.",
    "She have a red backpack.",
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
  examples: [
    "The class was quiet but some students talk.",
    "We read a story but forgot to answer the questions.",
    "My friend dont understand the directions.",
    "The teacher give us time to finish our work.",
    "I seen a bird outside the window.",
    "We was ready for the next activity.",
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
  examples: [
    "My student dont understand the lesson yet.",
    "We was working on writing this morning.",
    "The paragraph need more details and corrections.",
    "She have improved her reading skills.",
    "I seen progress in their writing.",
    "The lesson was easier then yesterday.",
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
  examples: [
    "The group of students were working together.",
    "My friend dont understand the lesson.",
    "We was fixing sentences during group time.",
    "The teacher give us extra help.",
    "Each student have a different worksheet.",
    "The activity help us improve our writing.",
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
  examples: [
    "we started writing after fixing a sentence.",
    "The class was quiet but some students talk.",
    "I seen my mistake after reading again.",
    "The teacher give us a warmup activity.",
    "We was ready to begin our writing.",
    "My sentence need a period.",
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
  examples: [
    "The student was done with there work early.",
    "I seen the answer quickly.",
    "My friend dont need help.",
    "The class was working quietly.",
    "We was finished before the bell.",
    "The teacher give us another task.",
  ],
  related: [
    "quick-editing-practice-worksheets",
    "editing-worksheets-for-fast-finishers",
    "daily-editing-practice",
  ],
  category: "proofreading",
},
};
