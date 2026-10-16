import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import type React from "react";

import { ProjectsSection } from "@/components/shared/projects-section";
import { TestimonialsSection } from "@/components/shared/testimonials-section";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { HeroSection } from "@/components/shared/hero-section";
import { AboutSection } from "@/components/shared/about-section";
import { SkillsSection } from "@/components/shared/skills-section";
import { ExperiencesSection } from "@/components/shared/experiences-section";
import { TechChallengeSection } from "@/components/shared/tech-challenge-section";
import { ContactSection } from "@/components/shared/contact-section";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/language-context";
import { createTranslator } from "@/lib/i18n";

function wrap(ui: React.ReactElement) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider initialLanguage="en">{ui}</LanguageProvider>
    </ThemeProvider>
  );
}

const t = createTranslator("en");

describe("axe accessibility audit", () => {
  it("header has no accessibility violations", async () => {
    const { container } = render(wrap(<Header />));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("footer has no accessibility violations", async () => {
    const { container } = render(wrap(<Footer />));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("hero section has no accessibility violations", async () => {
    const { container } = render(wrap(<HeroSection t={t} />));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("about section has no accessibility violations", async () => {
    const { container } = render(wrap(<AboutSection t={t} />));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("skills section has no accessibility violations", async () => {
    const { container } = render(wrap(<SkillsSection t={t} />));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("experience section has no accessibility violations", async () => {
    const { container } = render(wrap(<ExperiencesSection t={t} />));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("tech challenges section has no accessibility violations", async () => {
    const { container } = render(wrap(<TechChallengeSection t={t} />));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("contact section has no accessibility violations", async () => {
    const { container } = render(wrap(<ContactSection t={t} />));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("projects section has no accessibility violations", async () => {
    const { container } = render(wrap(<ProjectsSection />));
    expect(await axe(container)).toHaveNoViolations();
  });

  it("testimonials section has no accessibility violations", async () => {
    const { container } = render(wrap(<TestimonialsSection />));
    expect(await axe(container)).toHaveNoViolations();
  });
});
