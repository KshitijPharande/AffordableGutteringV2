import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomCtaBanner from "@/components/layout/BottomCtaBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://affordableguttering.co.nz"),
  title: "Affordable Guttering & Roof Maintenance | Christchurch, New Zealand",
  description: "Canterbury's leading guttering and roofing specialists. Gutter installation, spouting repairs, vacuum cleaning & roof painting. We beat any quote by 15%!",
  keywords: [
    "Affordable Guttering",
    "Guttering Christchurch",
    "Spouting repairs Christchurch",
    "Roof repairs Rangiora",
    "Vacuum gutter cleaning Rolleston",
    "Colorsteel guttering Canterbury",
    "Box profile gutters",
    "Quad profile spouting"
  ],
  authors: [{ name: "Affordable Guttering & Roof Maintenance" }],
  openGraph: {
    title: "Affordable Guttering & Roof Maintenance Christchurch",
    description: "We will beat any quote by 15%! Quality guttering and roofing services you can rely on across Christchurch & Canterbury.",
    url: "https://affordableguttering.co.nz",
    siteName: "Affordable Guttering & Roof Maintenance",
    images: [
      {
        url: "/images/hero-storm.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Guttering and Roof Maintenance",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-screen flex flex-col bg-[#050e1a] text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <BottomCtaBanner />
        <Footer />
      </body>
    </html>
  );
}
