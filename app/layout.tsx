import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Load the Inter font for a clean, professional look
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compassionate Home Care | Trustworthy Elderly Care",
  description: "Providing professional, trustworthy, and heartfelt home care services to help your loved ones live safely and independently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-gray-900 antialiased flex flex-col`}>
        <Navbar />
        {/* Main content wrapper */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}