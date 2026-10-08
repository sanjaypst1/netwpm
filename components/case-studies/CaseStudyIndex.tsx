"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { caseStudies, caseStudyFilters } from "@/data/case-studies";
import { ownedProductsByCase } from "@/data/owned-products";
import type { CaseStudyTag } from "@/types";

export function CaseStudyIndex() {
  const [filter, setFilter] = useState<CaseStudyTag | "All">("All");
  const visible = useMemo(
    () =>
      filter === "All"
        ? caseStudies
        : caseStudies.filter((study) => study.tags.includes(filter)),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter case studies">
        <FilterButton active={filter === "All"} onClick={() => setFilter("All")}>
          All
        </FilterButton>
        {caseStudyFilters.map((item) => (
          <FilterButton key={item} active={filter === item} onClick={() => setFilter(item)}>
            {item}
          </FilterButton>
        ))}
      </div>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {visible.map((study) => {
          const products = ownedProductsByCase[study.id] ?? [];
          return (
            <li key={study.id}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="block h-full rounded-2xl border border-line bg-cream p-5 hover:border-teal"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-teal">
                  {study.dates} · {study.portfolioSize}
                </p>
                <h2 className="mt-2 font-serif text-2xl text-navy">{study.organisation}</h2>
                <p className="mt-2 text-sm text-muted">{study.role}</p>
                <ul className="mt-4 space-y-1 text-sm text-ink">
                  {products.map((product) => (
                    <li key={product.name}>· {product.name}</li>
                  ))}
                </ul>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3 py-1.5 text-sm ${
        active ? "border-navy bg-navy text-cream" : "border-line bg-cream text-ink"
      }`}
    >
      {children}
    </button>
  );
}
