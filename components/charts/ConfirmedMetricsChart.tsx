"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "UBS onboarding", value: 30, fill: "#1f7a6b", note: "Efficiency improvement (%)" },
  { name: "UBS service demand", value: 22, fill: "#3a6ea5", note: "Demand reduction (%)" },
  { name: "Daimler approval time", value: 30, fill: "#1f7a6b", note: "Cycle-time reduction (%)" },
  { name: "Daimler first-time resolution", value: 25, fill: "#5ca8a4", note: "Improvement (%)" },
  { name: "Daimler velocity", value: 40, fill: "#6b5b95", note: "Improvement (%)" },
  { name: "Merck availability", value: 35, fill: "#3a6ea5", note: "Improvement (%)" },
];

export function ConfirmedMetricsChart() {
  return (
    <figure className="rounded-2xl border border-line bg-cream p-4">
      <figcaption className="mb-4">
        <h2 className="font-serif text-2xl text-navy">Confirmed outcome measures</h2>
        <p className="mt-1 text-sm text-muted">
          Percentage improvements reported in the candidate CV. These are not combined into a single cause-and-effect story. Source: candidate CV. Baselines and measurement windows are not specified.
        </p>
      </figcaption>
      <div className="h-80" role="img" aria-label="Bar chart of confirmed percentage improvements from UBS, Daimler and Merck">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ left: 8, right: 8, top: 8, bottom: 24 }}>
            <CartesianGrid stroke="#d9d3c8" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#5c6778" }} interval={0} angle={-18} textAnchor="end" height={70} />
            <YAxis tick={{ fontSize: 12, fill: "#5c6778" }} unit="%" />
            <Tooltip
              formatter={(value) => [`${value}%`, "Reported change"]}
              labelFormatter={(label) => String(label)}
            />
            <Bar dataKey="value" fill="#1f7a6b" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-xs text-muted">
        Merck on-time delivery (90%), milestone adherence (&gt;95%) and budget variance (&lt;5%) are omitted here because they are not the same unit as improvement percentages.
      </p>
    </figure>
  );
}
