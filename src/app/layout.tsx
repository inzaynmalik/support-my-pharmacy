import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import ContactButton from "@/components/ContactButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Support My Pharmacy – Digital Solutions for Independent Pharmacies",
  description:
    "Empowering independent pharmacy owners across the US with comprehensive digital solutions including business consulting, digital marketing, operations management, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <ContactButton />
      </body>
    </html>
  );
}
