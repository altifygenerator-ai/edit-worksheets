import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "EditWorksheets | Editing Worksheet Generator",
    template: "%s | EditWorksheets",
  },

  description:
    "Create printable editing worksheets from any text or PDF. Generate passages with grammar, spelling, punctuation, and capitalization errors with answer keys.",

  keywords: [
    "editing worksheets",
    "grammar worksheets",
    "editing passages",
    "sentence correction",
    "ESL worksheets",
    "printable worksheets",
  ],

  metadataBase: new URL("https://edit-worksheets.vercel.app/"),

  verification: {
    google: "5y-62wLg0SUv41YcFBP_4MEIRwruudOrbLLSYE9dcPM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body>
  {children}
  <Analytics />
</body>
    </html>
  );
}