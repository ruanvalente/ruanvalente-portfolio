declare module "jest-axe" {
  export interface JestAxeOptions {
    rules?: Record<string, { enabled?: boolean }>;
  }

  export function axe(
    html: HTMLElement,
    options?: JestAxeOptions
  ): Promise<import("axe-core").AxeResults>;

  export function configureAxe(options?: JestAxeOptions): typeof axe;

  export const toHaveNoViolations: {
    toHaveNoViolations(results: import("axe-core").AxeResults): {
      pass: boolean;
      message: () => string;
    };
  };
}
