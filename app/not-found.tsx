import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="font-serif text-4xl text-navy">Page not found</h1>
      <p className="mt-4 text-muted">That route is not part of this portfolio.</p>
      <Link href="/" className="mt-6 inline-flex text-coral underline">
        Return home
      </Link>
    </div>
  );
}
