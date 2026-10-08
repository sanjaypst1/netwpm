import type { EvidenceStatus } from "@/types";
import { cn } from "@/lib/utils";

const labels: Record<EvidenceStatus, string> = {
  confirmed: "Confirmed in CV",
  transferable: "Strong transferable evidence",
  adjacent: "Supported by adjacent experience",
  illustrative: "Illustrative product artefact",
  "portfolio-demo": "Portfolio demonstration",
  "requires-confirmation": "Candidate confirmation required",
  "target-role": "Target-role technology alignment",
};

const tones: Record<EvidenceStatus, string> = {
  confirmed: "bg-teal/10 text-teal border-teal/30",
  transferable: "bg-blue/10 text-blue border-blue/30",
  adjacent: "bg-violet/10 text-violet border-violet/30",
  illustrative: "bg-gold/10 text-gold border-gold/30",
  "portfolio-demo": "bg-aqua/15 text-navy border-aqua/40",
  "requires-confirmation": "bg-coral/10 text-coral border-coral/30",
  "target-role": "bg-navy/5 text-navy border-navy/20",
};

export function EvidenceBadge({
  status,
  className,
}: {
  status: EvidenceStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide",
        tones[status],
        className,
      )}
    >
      {labels[status]}
    </span>
  );
}

export function EvidenceLegend() {
  const items: EvidenceStatus[] = [
    "confirmed",
    "transferable",
    "adjacent",
    "illustrative",
    "portfolio-demo",
    "target-role",
    "requires-confirmation",
  ];
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Evidence classification">
      {items.map((status) => (
        <li key={status}>
          <EvidenceBadge status={status} />
        </li>
      ))}
    </ul>
  );
}
