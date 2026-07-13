"use client";

import { useState } from "react";
import Image from "next/image";
import { CATEGORIES } from "@/data/categories";
import QuoteModal from "@/components/quote/QuoteModal";
import type { TripSummary } from "@/components/quote/types";

const CRUCEROS = CATEGORIES.find((category) => category.id === "cruceros");

export default function CruceroGrid() {
  const [tripSummary, setTripSummary] = useState<TripSummary | null>(null);

  if (!CRUCEROS) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CRUCEROS.destinations.map((dest) => (
          <div
            key={dest.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={dest.image}
                alt={dest.imageAlt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold text-gray-900">{dest.name}</h3>
              <p className="mt-1 flex-1 text-sm text-gray-500">{dest.description}</p>
              <button
                type="button"
                onClick={() =>
                  setTripSummary({
                    service: `Cruceros: ${dest.name}`,
                    lines: [
                      { label: "Categoría", value: "Cruceros" },
                      { label: "Destino", value: dest.name },
                    ],
                    text: `${dest.name} (Cruceros) — ${dest.description}`,
                  })
                }
                className="mt-4 w-full rounded-lg bg-brand-accent py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Me interesa
              </button>
            </div>
          </div>
        ))}
      </div>

      {tripSummary && (
        <QuoteModal open={tripSummary !== null} onClose={() => setTripSummary(null)} tripSummary={tripSummary} />
      )}
    </section>
  );
}
