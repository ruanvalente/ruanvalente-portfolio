"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-4xl font-bold text-foreground">
        Something went wrong
      </h1>
      <p className="mt-4 text-muted-foreground">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center rounded-md bg-amber-700 px-4 py-2 text-white transition-colors hover:bg-amber-800"
      >
        Try again
      </button>
    </div>
  );
}
