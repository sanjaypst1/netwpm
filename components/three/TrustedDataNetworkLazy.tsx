"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/three/TrustedDataNetwork"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[380px] items-center justify-center rounded-2xl border border-line bg-navy text-sm text-cream">
      Loading the trusted data product network…
    </div>
  ),
});

export function TrustedDataNetworkLazy() {
  return (
    <section aria-labelledby="network-title">
      <div className="mb-4 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.18em] text-teal">Trusted Data Product Network</p>
        <h2 id="network-title" className="mt-2 font-serif text-3xl text-navy">
          Raw signals become governed products, then decisions
        </h2>
        <p className="mt-3 text-muted">
          Abstract nodes represent Advisers, Clients, Product, Engineering, Data, Operations, Finance, Sales, Risk and Compliance. The visualisation is decorative. The meaning is in the text: raw signals → governed data → reusable data products → customer and business decisions → measurable outcomes. No confidential information is shown. If motion or WebGL is unavailable, this explanation remains the source of truth.
        </p>
      </div>
      <Scene />
    </section>
  );
}
