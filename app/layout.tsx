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
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='%231A3028'/><text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' font-family='Georgia,serif' font-weight='700' font-size='14' fill='%23B8903C'>HV</text></svg>",
  },
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
