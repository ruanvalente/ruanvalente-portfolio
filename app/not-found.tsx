import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-gutter-mobile text-center">
      <h1 className="text-display font-bold text-primary">404</h1>
      <p className="mt-space-md text-body-lg text-muted-foreground">
        Page not found
      </p>
      <Link
        href="/"
        className="mt-space-xl inline-flex items-center rounded bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Go back home
      </Link>
    </div>
  );
}
