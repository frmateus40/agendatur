import type { TripSummary } from "./types";

export default function TripSummaryCard({ tripSummary }: { tripSummary: TripSummary }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
      <span className="inline-block rounded-full bg-brand-primary px-3 py-1 text-xs font-bold text-white">
        {tripSummary.service}
      </span>
      <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
        {tripSummary.lines.map((line) => (
          <div key={line.label}>
            <dt className="text-xs text-gray-500">{line.label}</dt>
            <dd className="text-sm font-semibold text-gray-800">{line.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
