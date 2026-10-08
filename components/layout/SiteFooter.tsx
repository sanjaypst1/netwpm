import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl">Sanjay Singh Rawat</p>
          <p className="mt-2 text-sm text-cream/75">{site.positioning}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-aqua">Site</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link className="hover:underline" href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/terms">
                Terms
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/accessibility">
                Accessibility
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/project">
                How this portfolio was made
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-aqua">Evidence</p>
          <p className="mt-3 text-sm text-cream/75">{site.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
