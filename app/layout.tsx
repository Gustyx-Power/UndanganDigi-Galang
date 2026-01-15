import type { Metadata } from "next";
import { Playfair_Display, Lato, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

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

export const metadata: Metadata = {
  title: "The Wedding of Galang & Partner",
  description: "Undangan Pernikahan Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} ${greatVibes.variable} antialiased bg-fusion-light text-fusion-dark`}>
        {children}
      </body>
    </html>
  );
}