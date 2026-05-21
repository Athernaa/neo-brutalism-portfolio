import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import { Navbar } from "@/components/navbar";
import { NoiseOverlay } from "@/components/noise-overlay";
import { CustomCursor } from "@/components/custom-cursor";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Senior Frontend Engineer — High-Performance Interfaces & Complex Systems",
  description: "Portfolio of a Senior Frontend Engineer specializing in React, TypeScript, Next.js, Python, and complex system architecture. Building high-performance web interfaces for international clients.",
  openGraph: {
    title: "Senior Frontend Engineer — Portfolio",
    description: "High-performance web interfaces & complex systems. React • TypeScript • Python • Next.js",
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
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LenisProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar />
            <NoiseOverlay />
            <CustomCursor />
            {children}
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
