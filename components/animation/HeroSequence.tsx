"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  { title: "Customer problem", body: "Onboarding delay, service demand, control gaps or unclear investment choices." },
  { title: "Trusted data", body: "Named owners, quality expectations and evidence that a consumer can actually use." },
  { title: "Product decision", body: "Fund, sequence, remediate or stop — with Product, Engineering, Data, Risk and Operations aligned." },
  { title: "Measurable outcome", body: "Adoption, cycle time, service demand, availability, benefits — reported only where the CV confirms them." },
];

export function HeroSequence() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from("[data-step]", {
        y: 24,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: root,
          start: "top 80%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="grid gap-4 md:grid-cols-4">
      {steps.map((step, index) => (
        <article
          key={step.title}
          data-step
          className="rounded-2xl border border-line bg-cream p-5"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-teal">0{index + 1}</p>
          <h2 className="mt-2 font-serif text-xl text-navy">{step.title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
        </article>
      ))}
    </div>
  );
}
