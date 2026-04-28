import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorksheetTool from "@/components/WorksheetTool";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2e8] text-neutral-950 soft-grid-bg">
      <Header />
      <Hero />
      <WorksheetTool />
      <HowItWorks />
      <UseCases />
      <Footer />
    </main>
  );
}