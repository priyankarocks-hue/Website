import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { MotionPreferenceProvider } from "@/lib/motion-preference";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import CustomCursor from "@/components/ui/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Priyanka Joshi | Fractional CMO & AI Marketing Advisor",
    template: "%s | Priyanka Joshi",
  },
  description:
    "Priyanka Joshi builds AI content and comms systems for startups and SaaS teams who refuse to sound like a template, and speaks on brand, content, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink-950 text-foreground">
        <MotionPreferenceProvider>
          <div className="vignette-overlay" aria-hidden="true" />
          <div className="grain-overlay" aria-hidden="true" />
          <CustomCursor />
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionPreferenceProvider>
      </body>
    </html>
  );
}
