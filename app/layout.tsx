import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { MotionPreferenceProvider } from "@/lib/motion-preference";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";

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
    "Priyanka Joshi brings 20+ years of journalism, PR, and content marketing leadership to brands building AI-powered content and comms systems, and delivers keynotes on brand, content, and AI.",
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
