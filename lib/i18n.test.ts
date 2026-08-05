import { describe, expect, it } from "vitest";

import { createTranslator, getLanguage, translate } from "@/lib/i18n";

describe("getLanguage", () => {
  it("defaults to 'en' when no cookie is provided", () => {
    expect(getLanguage()).toBe("en");
  });

  it("returns 'pt-BR' for the pt-BR cookie", () => {
    expect(getLanguage("pt-BR")).toBe("pt-BR");
  });

  it("falls back to 'en' for unknown values", () => {
    expect(getLanguage("fr")).toBe("en");
    expect(getLanguage("en-US")).toBe("en");
  });
});

describe("translate", () => {
  it("translates an existing key for the given language", () => {
    expect(translate("en", "hero.hello")).toBe("Hello, I'm");
    expect(translate("pt-BR", "hero.hello")).toBe("Olá, eu sou");
  });

  it("returns the key itself when the translation is missing", () => {
    expect(translate("en", "missing.key")).toBe("missing.key");
    expect(translate("pt-BR", "missing.key")).toBe("missing.key");
  });
});

describe("createTranslator", () => {
  it("creates a translator bound to a language", () => {
    const t = createTranslator("pt-BR");
    expect(t("skills.title")).toBe("Habilidades & Tecnologias");
  });
});
