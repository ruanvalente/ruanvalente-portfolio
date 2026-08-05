import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { ProjectsSection } from "@/components/shared/projects-section";
import { LanguageProvider } from "@/context/language-context";
import type { Language } from "@/types";

function renderProjects(lang: Language = "en") {
  return render(
    <LanguageProvider initialLanguage={lang}>
      <ProjectsSection />
    </LanguageProvider>
  );
}

function activePanel() {
  return screen
    .getAllByRole("tabpanel")
    .find((panel) => !panel.hasAttribute("hidden"));
}

function visibleProjectLinks() {
  const panel = activePanel();
  if (!panel) return 0;
  return panel.querySelectorAll("a").length;
}

describe("ProjectsSection", () => {
  it("renders the section title", () => {
    renderProjects();
    expect(
      screen.getByRole("heading", { name: "Featured Projects" })
    ).toBeInTheDocument();
  });

  it("renders all filter tabs", () => {
    renderProjects();
    const tabs = screen.getAllByRole("tab");
    expect(tabs.map((tab) => tab.textContent)).toEqual([
      "All",
      "React",
      "Vue",
      "Node",
      "Other",
    ]);
  });

  it("shows all projects by default", () => {
    renderProjects();
    expect(visibleProjectLinks()).toBe(6);
  });

  it("filters projects by category when a tab is clicked", async () => {
    const user = userEvent.setup();
    renderProjects();

    await user.click(screen.getByRole("tab", { name: "React" }));
    expect(visibleProjectLinks()).toBe(2);

    await user.click(screen.getByRole("tab", { name: "Vue" }));
    expect(visibleProjectLinks()).toBe(1);

    await user.click(screen.getByRole("tab", { name: "Node" }));
    expect(visibleProjectLinks()).toBe(2);

    await user.click(screen.getByRole("tab", { name: "Other" }));
    expect(visibleProjectLinks()).toBe(1);
  });

  it("translates tab labels and the view-more link in pt-BR", () => {
    renderProjects("pt-BR");
    expect(screen.getByRole("tab", { name: "Todos" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Outros" })).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: "Ver mais no GitHub" }).length
    ).toBe(7);
  });
});
