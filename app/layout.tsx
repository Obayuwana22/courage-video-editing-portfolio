import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import MobileNavbar from "@/components/MobileNavbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Courage Obayuwana films",
  description:
    "As a filmmaker and editor, I am passionate about bringing stories to life, crafting impactful films that resonate and inspire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <MobileNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
