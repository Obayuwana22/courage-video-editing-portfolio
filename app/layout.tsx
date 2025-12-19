import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Courage Obayuwana Films",
  description: "Courage Obayuwana Films is a creative production brand focused on telling compelling stories through film. We specialize in documentaries, narrative projects, and digital content, combining strong visuals with thoughtful storytelling to create films that resonate, inspire, and leave a lasting impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MobileNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
