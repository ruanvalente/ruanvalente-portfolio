import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-6xl font-bold text-amber-700 dark:text-yellow-400">
        404
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">Page not found</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-md bg-amber-700 px-4 py-2 text-white transition-colors hover:bg-amber-800"
      >
        Go back home
      </Link>
    </div>
  );
}
