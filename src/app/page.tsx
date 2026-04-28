import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorksheetTool from "@/components/WorksheetTool";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Footer from "@/components/Footer";
import SeoLinks from "@/components/SeoLinks";
// src/app/page.tsx

import PageTemplate from "@/components/PageTemplate";

export default function Home() {
  return (
    <PageTemplate
      title="Editing Worksheet Generator"
      description="Create printable editing worksheets from any text."
      heading="Create Editing Worksheets From Any Text"
      intro="Paste in your text and generate a clean editing worksheet with realistic spelling, grammar, punctuation, and capitalization errors."
    />
  );
}
 