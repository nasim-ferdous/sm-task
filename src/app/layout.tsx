import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop"; // Import the component
import FloatingEnvato from "@/components/FloatingEnvato";
import CustomCursor from "@/components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sm-assessment",
  description: "Homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-[#0a0a0a] cursor-none">
        <CustomCursor />

        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
        </SmoothScroll>

        <ScrollToTop />
        <FloatingEnvato />
      </body>
    </html>
  );
}
