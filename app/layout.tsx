import type React from "react";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { LanguageProvider } from "@/context/language-context";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruan Valente | Frontend Engineer",
  description:
    "Professional portfolio of Ruan Valente, a Frontend Engineer with 5+ years of experience in creating modern web interfaces.",
  keywords: [
    "Frontend Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Software Engineer",
    "Web Development",
  ],
  authors: [{ name: "Ruan Valente" }],
  creator: "Ruan Valente",
  publisher: "Ruan Valente",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ruanvalente-portfolio.vercel.app/",
    title: "Ruan Valente | Frontend Engineer",
    description:
      "Professional portfolio of Ruan Valente, a Frontend Engineer with 5+ years of experience in creating modern web interfaces.",
    siteName: "Ruan Valente Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruan Valente | Frontend Engineer",
    description:
      "Professional portfolio of Ruan Valente, a Frontend Engineer with 5+ years of experience in creating modern web interfaces.",
    creator: "@ruantux",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon1.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <BackToTopButton />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            <TooltipProvider>
              {children}
            </TooltipProvider>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
