import type { Metadata } from "next";
import { Courier_Prime, Archivo, Caveat } from "next/font/google";
import "./globals.css";
import { MotionPreferenceProvider } from "@/lib/motion-preference";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";

const courier = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: {
    default: "Priyanka Joshi | Fractional CMO & AI Marketing Advisor",
    template: "%s | Priyanka Joshi",
  },
  description:
    "Priyanka Joshi, creator of Regression to the Template, builds AI content and growth systems for teams who refuse to sound like a template, and speaks on brand, content, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${courier.variable} ${archivo.variable} ${caveat.variable} h-full antialiased`}>
      <body className="margin-rule flex min-h-full flex-col bg-paper text-ink">
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
