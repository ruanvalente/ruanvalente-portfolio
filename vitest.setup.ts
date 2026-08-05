import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { toHaveNoViolations } from "jest-axe";
import React from "react";
import { afterEach, expect, vi } from "vitest";

expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

if (!("ResizeObserver" in globalThis)) {
  class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  (globalThis as Record<string, unknown>).ResizeObserver = ResizeObserverMock;
}

if (!("IntersectionObserver" in globalThis)) {
  class IntersectionObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  (globalThis as Record<string, unknown>).IntersectionObserver =
    IntersectionObserverMock;
}

if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query: string): MediaQueryList =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList;
}

const FRAMER_PROPS = new Set([
  "initial",
  "animate",
  "exit",
  "transition",
  "whileHover",
  "whileTap",
  "whileInView",
  "whileFocus",
  "whileDrag",
  "viewport",
  "variants",
  "layout",
  "layoutId",
  "drag",
  "dragConstraints",
  "dragElastic",
  "dragMomentum",
  "onAnimationStart",
  "onAnimationComplete",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onHoverStart",
  "onHoverEnd",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onPan",
  "onPanStart",
  "onPanEnd",
]);

vi.mock("next/navigation", () => ({
  useRouter: () => ({ refresh: vi.fn() }),
  usePathname: () => "/",
}));

vi.mock("framer-motion", () => {
  const factory = (tag: string) => {
    const Component = (props: Record<string, unknown>) => {
      const { children, ...rest } = props;
      const domProps: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(rest)) {
        if (!FRAMER_PROPS.has(key)) {
          domProps[key] = value;
        }
      }
      return React.createElement(
        tag === "button" ? "button" : "div",
        domProps,
        children as React.ReactNode
      );
    };
    Component.displayName = tag;
    return Component;
  };

  const motion = new Proxy(
    {},
    {
      get: (_target, tag: unknown) =>
        typeof tag === "string" && /^[a-z][a-z0-9]*$/.test(tag)
          ? factory(tag)
          : undefined,
    }
  );

  return {
    motion,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    MotionConfig: ({ children }: { children: React.ReactNode }) => children,
  };
});
