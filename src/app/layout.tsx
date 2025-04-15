import type { Metadata } from "next";
import { inter, roboto, poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Transform Your Independent Pharmacy with AI, Apps, & Smarter Workflows",
  description:
    "Cut costs, boost patient loyalty, and scale your impact with digital-first solutions for independent pharmacies.",
  keywords:
    "pharmacy digital solutions, pharmacy apps, pharmacy AI, pharmacy automation, independent pharmacy, pharmacy marketing",
  openGraph: {
    title:
      "Transform Your Independent Pharmacy with AI, Apps, & Smarter Workflows",
    description:
      "Cut costs, boost patient loyalty, and scale your impact with digital-first solutions for independent pharmacies.",
    type: "website",
    locale: "en_US",
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
      className={`${inter.variable} ${roboto.variable} ${poppins.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
