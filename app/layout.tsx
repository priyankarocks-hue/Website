import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { MotionPreferenceProvider } from "@/lib/motion-preference";
import { siteUrl, siteName, socialLinks } from "@/lib/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";
import CustomCursor from "@/components/ui/CustomCursor";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const description =
  "Priyanka Joshi builds signal-driven AI growth systems for brands of every size, and speaks on brand, content, and AI.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Priyanka Joshi | Fractional CMO & AI Marketing Advisor",
    template: "%s | Priyanka Joshi",
  },
  description,
  keywords: [
    "fractional CMO",
    "AI marketing advisor",
    "AI content strategy",
    "GEO",
    "generative engine optimization",
    "AI marketing speaker",
    "marketing keynote speaker",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Priyanka Joshi | Fractional CMO & AI Marketing Advisor",
    description,
    images: [
      {
        url: "/images/headshot.jpg",
        width: 880,
        height: 1168,
        alt: "Priyanka Joshi, Fractional CMO and AI marketing advisor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanka Joshi | Fractional CMO & AI Marketing Advisor",
    description,
    images: ["/images/headshot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Priyanka Joshi",
  jobTitle: "Fractional CMO & AI Marketing Advisor",
  description,
  url: siteUrl,
  image: `${siteUrl}/images/headshot.jpg`,
  sameAs: [socialLinks.linkedin, socialLinks.twitter],
  knowsAbout: [
    "AI marketing",
    "Content strategy",
    "Generative engine optimization",
    "Brand communications",
    "Growth marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink-950 text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
