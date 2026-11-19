import type React from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { cookies } from "next/headers";

import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { LanguageProvider } from "@/context/language-context";
import { getLanguage, LANGUAGE_COOKIE } from "@/lib/i18n";
import { SITE_AUTHOR, SITE_NAME, SITE_URL } from "@/lib/site";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b12" },
  ],
};

const JSON_LD_PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_AUTHOR,
  url: SITE_URL,
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

const COPY = {
  en: {
    title: "Ruan Valente | Frontend Engineer",
    description:
      "Frontend engineer with 5+ years building accessible, fast React and Next.js interfaces. See projects, experience and design systems work.",
  },
  "pt-BR": {
    title: "Ruan Valente | Engenheiro Frontend",
    description:
      "Engenheiro frontend com mais de 5 anos criando interfaces React e Next.js acessíveis e rápidas. Veja projetos, experiência e design systems.",
  },
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = getLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value);
  const copy = COPY[lang];

  return {
    metadataBase: new URL(SITE_URL),
    title: copy.title,
    description: copy.description,
    applicationName: SITE_NAME,
    keywords: [
      "Frontend Engineer",
      "Engenheiro Frontend",
      "React",
      "Next.js",
      "TypeScript",
      "Design Systems",
      "Acessibilidade",
      "Web Performance",
    ],
    authors: [{ name: SITE_AUTHOR }],
    creator: SITE_AUTHOR,
    publisher: SITE_AUTHOR,
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "page-type": "service",
      "site-kind": "other",
      kind: "service",
    },
    openGraph: {
      type: "website",
      locale: lang === "pt-BR" ? "pt_BR" : "en_US",
      url: SITE_URL,
      title: copy.title,
      description: copy.description,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
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
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = getLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value);

  return (
    <html
      lang={lang}
      data-type="service"
      data-site-kind="other"
      data-kind="service"
      suppressHydrationWarning
    >
      <head>
        <link rel="modulepreload" href="/moments/moments.js" />
        <link rel="modulepreload" href="/moments/lib.js" />
        <link rel="modulepreload" href="/moments/picture-develops/moment.js" />
        <Script
          id="moments-loader"
          strategy="afterInteractive"
          src="/moments/moments.js"
          type="module"
        />
        <Script
          id="motion-head"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('m-enter','mo-js');setTimeout(()=>document.documentElement.classList.add('m-enter-done','mo-safe'),2500)",
          }}
        />
      </head>
      <body
        id="top"
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem("language");if(l!=="pt-BR"&&l!=="en")return;document.cookie="language="+l+"; path=/; max-age=31536000; samesite=lax";if(l===document.documentElement.lang)return;if(sessionStorage.getItem("language-migrating"))return;sessionStorage.setItem("language-migrating","1");window.location.reload();}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_PERSON) }}
        />
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
