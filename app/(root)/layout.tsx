import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TopBar from "../components/TopBar";
import Navbar from "../components/NavBar";

import "../globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bike menders",
  description: "Best motorbikes repair shop",
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
        <TopBar />
        <Navbar />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
