import type React from "react";
import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";

import { Inter } from "next/font/google";

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { BackToTopButton } from "@/components/ui/back-to-top-button";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { LanguageProvider } from "@/context/language-context";
import { getLanguage, LANGUAGE_COOKIE } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

const JSON_LD_PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ruan Valente",
  url: "https://ruanvalente-portfolio.vercel.app",
  jobTitle: "Frontend Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Compass UOL",
  },
  sameAs: [
    "https://github.com/ruanvalente",
    "https://www.linkedin.com/in/ruan-valente",
  ],
};

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
        sizes: "96x96",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = getLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem("language");if(l!=="pt-BR"&&l!=="en")return;document.cookie="language="+l+"; path=/; max-age=31536000; samesite=lax";if(l===document.documentElement.lang)return;if(sessionStorage.getItem("language-migrating"))return;sessionStorage.setItem("language-migrating","1");window.location.reload();}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_PERSON) }}
        />
        <BackToTopButton />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider initialLanguage={lang}>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
