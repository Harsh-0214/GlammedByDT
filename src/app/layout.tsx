import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "block",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "block",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "400",
  display: "block",
});

export const metadata: Metadata = {
  title: "GlammedByDT — Nail Artistry & Glam",
  description:
    "Premium nail artistry by Diya Tamakuwala. Custom nail art and acrylic extensions. Based in the GTA — Brampton (Wanless & Chinguacousy area). Book your appointment today.",
  keywords: ["nail technician", "nail art", "acrylic nails", "acrylic extensions", "brampton nail tech", "gta nail tech", "wanless", "chinguacousy", "glammedbydt"],
  openGraph: {
    title: "GlammedByDT — Nail Artistry & Glam",
    description: "Premium nail artistry. Custom sets, acrylic extensions & more. Book now.",
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
      className={`${cormorant.variable} ${dmSans.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
