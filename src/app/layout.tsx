import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ojal Prasad — CS @ UW-Madison",
  description:
    "Portfolio of Ojal Prasad — Computer Science sophomore at UW-Madison. AI/ML researcher, founder of Cursor at UW-Madison, and IT specialist.",
  keywords: ["Ojal Prasad", "UW-Madison", "Computer Science", "AI Research", "Machine Learning", "Software Engineer"],
  authors: [{ name: "Ojal Prasad" }],
  openGraph: {
    title: "Ojal Prasad — CS @ UW-Madison",
    description: "AI/ML researcher and CS student at UW-Madison. Building ML pipelines, researching intelligent agents, and leading communities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrumentSerif.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
