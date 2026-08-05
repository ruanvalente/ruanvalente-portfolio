import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { TestimonialsSection } from "@/components/shared/testimonials-section";
import { LanguageProvider } from "@/context/language-context";
import type { Language } from "@/types";

function renderTestimonials(lang: Language = "en") {
  return render(
    <LanguageProvider initialLanguage={lang}>
      <TestimonialsSection />
    </LanguageProvider>
  );
}

describe("TestimonialsSection", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the first testimonial and its translated quote", () => {
    renderTestimonials();
    expect(
      screen.getByRole("heading", { name: "What People Say" })
    ).toBeInTheDocument();
    expect(screen.getByText("Ana Silva")).toBeInTheDocument();
    expect(screen.getByText(/“/)).toBeInTheDocument();
  });

  it("advances to the next testimonial automatically", () => {
    vi.useFakeTimers();
    renderTestimonials();
    expect(screen.getByText("Ana Silva")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(screen.getByText("Carlos Santos")).toBeInTheDocument();
  });

  it("navigates with the next and previous buttons", async () => {
    const user = userEvent.setup();
    renderTestimonials();

    await user.click(screen.getByRole("button", { name: "Next testimonial" }));
    expect(screen.getByText("Carlos Santos")).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Previous testimonial" })
    );
    expect(screen.getByText("Ana Silva")).toBeInTheDocument();
  });

  it("jumps to a specific testimonial via the dots", async () => {
    const user = userEvent.setup();
    renderTestimonials();

    await user.click(
      screen.getByRole("button", { name: "Go to testimonial 5" })
    );
    expect(screen.getByText("Fernanda Lima")).toBeInTheDocument();
  });

  it("pauses autoplay and stops advancing when toggled", () => {
    vi.useFakeTimers();
    renderTestimonials();

    fireEvent.click(screen.getByRole("button", { name: "Pause autoplay" }));
    expect(
      screen.getByRole("button", { name: "Resume autoplay" })
    ).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(screen.getByText("Ana Silva")).toBeInTheDocument();
  });

  it("translates the pause label in pt-BR", () => {
    renderTestimonials("pt-BR");
    expect(
      screen.getByRole("button", { name: "Pausar reprodução automática" })
    ).toBeInTheDocument();
  });
});
