import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Torkul — Pizzeria & Konoba, Sveti Filip i Jakov | Pizza iz peći na drva",
  description:
    "Torkul — obiteljska pizzeria i konoba u Svetom Filipu i Jakovu. Pizza iz peći na drva, domaća pašticada, sviježa riba s gradela i plodovi mora, na terasi na dva koraka od mora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${dmSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
