import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import type React from "react";

import { ProjectsSection } from "@/components/shared/projects-section";
import { TestimonialsSection } from "@/components/shared/testimonials-section";
import { Header } from "@/components/shared/header";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/language-context";

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

describe("axe accessibility audit", () => {
  it("header has no accessibility violations", async () => {
    const { container } = render(wrap(<Header />));
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
