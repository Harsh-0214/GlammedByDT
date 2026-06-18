import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GlammedByDT — Nail Artistry & Glam",
  description:
    "Premium nail artistry by DT. Custom nail art, acrylic extensions, gel manicures, and more. Book your appointment today.",
  keywords: ["nail technician", "nail art", "acrylic nails", "gel manicure", "glammedbydt"],
  openGraph: {
    title: "GlammedByDT — Nail Artistry & Glam",
    description: "Premium nail artistry. Custom sets, extensions & more. Book now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
