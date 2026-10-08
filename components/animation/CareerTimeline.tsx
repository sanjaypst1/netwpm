"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { roles } from "@/data/experience";

export function CareerTimeline() {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-role]", {
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        scrollTrigger: { trigger: root, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <ol ref={ref} className="relative space-y-6 border-l border-line pl-6">
      {roles.map((role) => (
        <li key={role.id} data-role className="rounded-2xl border border-line bg-cream p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-teal">
            {role.dates} · {role.portfolio}
          </p>
          <h2 className="mt-1 font-serif text-2xl text-navy">{role.organisation}</h2>
          <p className="text-sm text-muted">{role.role}</p>
          <p className="mt-3 text-sm leading-6 text-ink">{role.summary}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
            {role.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link
            className="mt-4 inline-flex text-sm font-medium text-coral hover:underline"
            href={`/case-studies/${role.slug}`}
          >
            Open case study
          </Link>
        </li>
      ))}
    </ol>
  );
}
