import type { Metadata } from "next";
import { Pinyon_Script, Cinzel_Decorative, Cormorant_Garamond, Lato, Great_Vibes, Amiri } from "next/font/google";
import "./globals.css";
import FallingDecorations from "@/src/components/ui/FallingDecorations";

// Romantic calligraphy for names
const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon"
});

// Ukiran/carved decorative font for headings
const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel"
});

// Elegant serif for body text
const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant"
});

// Keep existing fonts for compatibility
const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato"
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes"
});

const amiri = Amiri({
  weight: "400",
  subsets: ["arabic"],
  variable: "--font-amiri"
});

export const metadata: Metadata = {
  title: "The Wedding of Galang & Resti",
  description: "Undangan Pernikahan Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${pinyonScript.variable} ${cinzelDecorative.variable} ${cormorantGaramond.variable} ${lato.variable} ${greatVibes.variable} ${amiri.variable} antialiased bg-fusion-light text-fusion-dark overflow-x-hidden`}>
        <FallingDecorations />
        {children}
      </body>
    </html>
  );
}