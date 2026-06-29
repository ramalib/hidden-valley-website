import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hidden Valley Siding & Seamless Rain Gutter | West Jordan, UT",
  description:
    "Family-owned siding, gutter, and roofing contractor serving West Jordan and the Salt Lake Valley. HardiPlank, vinyl, aluminum siding, seamless gutters, roofing. Free estimates. Licensed & insured. Call (801) 833-4492.",
  keywords:
    "siding contractor West Jordan Utah, seamless gutters West Jordan, HardiPlank siding Salt Lake, roofing West Jordan UT, Hidden Valley Siding",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} antialiased scroll-smooth`}
    >
      <body className="bg-white text-ink min-h-screen">{children}</body>
    </html>
  );
}
