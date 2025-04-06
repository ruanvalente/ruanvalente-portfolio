import type React from "react";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { LanguageProvider } from "@/context/language-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruan Valente | Frontend Engineer",
  description:
    "Professional portfolio of Ruan Valente, a Frontend Engineer with 5+ years of experience in creating modern web interfaces.",
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
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
