import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClassifAI — AI classification, from the human side",
  description:
    "ClassifAI is a research project exploring how people experience AI-powered classification and how these systems can be made more understandable and human-centered.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
