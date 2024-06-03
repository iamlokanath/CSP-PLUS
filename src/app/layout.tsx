import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSP PLUS, Mareigaon GP, Hatadihi, Keonjhar, Odisha",
  description: "CSP Plus (Ama Bank) at Mareigaon Gram Panchayat, Hatadihi, Keonjhar, Odisha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
