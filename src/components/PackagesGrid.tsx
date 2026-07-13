"use client";

import { useState } from "react";
import Image from "next/image";
import { PACKAGES, type TravelPackage } from "@/data/packages";
import QuoteModal from "@/components/quote/QuoteModal";
import type { TripSummary } from "@/components/quote/types";

function buildTripSummary(pkg: TravelPackage): TripSummary {
  return {
    service: `Paquete: ${pkg.destination}`,
    lines: [
      { label: "Destino", value: pkg.destination },
      { label: "Duración", value: `${pkg.nights + 1} días / ${pkg.nights} noches` },
      { label: "Salidas", value: pkg.departure },
    ],
    text: `Paquete a ${pkg.destination}, ${pkg.nights + 1} días / ${pkg.nights} noches (${pkg.departure}).`,
  };
}

interface PackagesGridProps {
  headingLevel?: "h1" | "h2";
  showViewAllLink?: boolean;
}

export default function PackagesGrid({ headingLevel = "h2", showViewAllLink = true }: PackagesGridProps) {
  const [tripSummary, setTripSummary] = useState<TripSummary | null>(null);
  const Heading = headingLevel;

  return (
    <section id="paquetes" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <div className="text-center">
        <Heading className="text-2xl font-extrabold text-gray-900 md:text-4xl">
          Paquetes turísticos destacados
        </Heading>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 md:text-base">
          Planes de viaje y paquetes todo incluido — ejemplos que se actualizarán con las
          tarifas y destinos reales de la agencia.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.imageAlt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {pkg.tag && (
                <span className="absolute left-3 top-3 rounded-full bg-brand-accent px-3 py-1 text-xs font-bold text-white shadow-sm">
                  {pkg.tag}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold text-gray-400">
                {pkg.nights + 1} días / {pkg.nights} noches
              </p>
              <h3 className="mt-1 text-lg font-bold text-gray-900">{pkg.destination}</h3>
              <p className="mt-1 flex-1 text-xs text-gray-500">{pkg.departure}</p>

              <button
                onClick={() => setTripSummary(buildTripSummary(pkg))}
                className="mt-4 w-full rounded-lg bg-brand-accent py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Cotizar plan
              </button>
            </div>
          </div>
        ))}
      </div>

      {showViewAllLink && (
        <div className="mt-12 text-center">
          <a
            href="/paquetes"
            className="inline-block rounded-lg border-2 border-brand-primary px-8 py-3 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
          >
            Ver todos los paquetes
          </a>
        </div>
      )}

      {tripSummary && (
        <QuoteModal open={tripSummary !== null} onClose={() => setTripSummary(null)} tripSummary={tripSummary} />
      )}
    </section>
  );
}
