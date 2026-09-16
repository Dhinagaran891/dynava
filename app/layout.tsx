import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dynava.in"),

  title: {
    default: "Dynava | Practical AI, Data & Digital Transformation",
    template: "%s | Dynava",
  },

  description:
    "Dynava helps businesses unlock practical value from AI, data, and digital technology through smarter workflows, better decisions, and tailored solutions.",

  keywords: [
    "AI consulting",
    "AI workflow assessment",
    "business automation",
    "data consulting",
    "digital transformation",
    "workflow optimization",
    "AI solutions",
  ],

  authors: [{ name: "Dynava" }],
  creator: "Dynava",
  publisher: "Dynava",

  alternates: {
    canonical: "https://dynava.in",
  },

  openGraph: {
    type: "website",
    url: "https://dynava.in",
    siteName: "Dynava",
    title: "Dynava | Practical AI, Data & Digital Transformation",
    description:
      "Discover practical opportunities to improve workflows, decision-making, and business operations through AI, data, and digital technology.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dynava | Practical AI, Data & Digital Transformation",
    description:
      "Practical AI, data, and digital transformation for modern businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}