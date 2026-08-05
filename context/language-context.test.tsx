import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({ refresh: vi.fn() }));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ refresh: mocks.refresh }),
}));

import { LanguageProvider, useLanguage } from "@/context/language-context";
import type { Language } from "@/types";

function Probe() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <span data-testid="hello">{t("hero.hello")}</span>
      <button onClick={() => setLanguage("pt-BR")}>to pt-BR</button>
      <button onClick={() => setLanguage("en")}>to en</button>
    </div>
  );
}

function renderWithLanguage(initialLanguage: Language) {
  return render(
    <LanguageProvider initialLanguage={initialLanguage}>
      <Probe />
    </LanguageProvider>
  );
}

describe("LanguageProvider", () => {
  beforeEach(() => {
    document.cookie = "language=; path=/; max-age=0";
    localStorage.clear();
    mocks.refresh.mockClear();
  });

  it("starts with the server-provided language", () => {
    renderWithLanguage("pt-BR");
    expect(screen.getByTestId("lang")).toHaveTextContent("pt-BR");
    expect(screen.getByTestId("hello")).toHaveTextContent("Olá, eu sou");
  });

  it("translates keys for the active language", () => {
    renderWithLanguage("en");
    expect(screen.getByTestId("hello")).toHaveTextContent("Hello, I'm");
  });

  it("persists the preference in cookie and localStorage, then refreshes", async () => {
    const user = userEvent.setup();
    renderWithLanguage("en");

    await user.click(screen.getByText("to pt-BR"));

    expect(document.cookie).toContain("language=pt-BR");
    expect(localStorage.getItem("language")).toBe("pt-BR");
    expect(mocks.refresh).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(document.documentElement.lang).toBe("pt-BR"));
  });

  it("switches back to en and clears nothing", async () => {
    const user = userEvent.setup();
    renderWithLanguage("pt-BR");

    await user.click(screen.getByText("to en"));

    expect(document.cookie).toContain("language=en");
    expect(screen.getByTestId("hello")).toHaveTextContent("Hello, I'm");
  });
});
