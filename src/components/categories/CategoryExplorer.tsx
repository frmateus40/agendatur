"use client";

import { useState } from "react";
import Image from "next/image";
import { CATEGORIES, type Category, type CategoryDestination } from "@/data/categories";
import Modal from "../Modal";
import QuoteModal from "../quote/QuoteModal";
import type { TripSummary } from "../quote/types";

function buildTripSummary(category: Category, dest: CategoryDestination): TripSummary {
  return {
    service: `${category.title}: ${dest.name}`,
    lines: [
      { label: "Categoría", value: category.title },
      { label: "Destino", value: dest.name },
    ],
    text: `${dest.name} (${category.title}) — ${dest.description}`,
  };
}

export default function CategoryExplorer() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [tripSummary, setTripSummary] = useState<TripSummary | null>(null);

  return (
    <section id="categorias" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 md:py-20">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-gray-900 md:text-4xl">Descubre por categoría</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 md:text-base">
          Elige el tipo de viaje que sueñas y descubre nuestros destinos.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            aria-haspopup="dialog"
            onClick={() => setActiveCategory(category)}
            className="group relative h-64 overflow-hidden rounded-2xl text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-medium focus-visible:ring-offset-2 md:h-80"
          >
            <Image
              src={category.coverImage}
              alt={category.title}
              fill
              loading="lazy"
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-primary/40 transition-colors duration-300 group-hover:bg-brand-primary/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center text-white">
              <span className="text-4xl" aria-hidden="true">
                {category.icon}
              </span>
              <span className="text-2xl font-extrabold drop-shadow-sm md:text-3xl">{category.title}</span>
            </div>
          </button>
        ))}
      </div>

      <Modal
        open={activeCategory !== null}
        onClose={() => setActiveCategory(null)}
        title={activeCategory ? `${activeCategory.icon} ${activeCategory.title}` : ""}
        maxWidthClassName="max-w-4xl"
      >
        {activeCategory && (
          <div className="grid animate-fade-in grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategory.destinations.map((dest) => (
              <div
                key={dest.id}
                className="flex flex-col overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-base font-bold text-gray-900">{dest.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-gray-500">{dest.description}</p>
                  <button
                    type="button"
                    onClick={() => {
                      const summary = buildTripSummary(activeCategory, dest);
                      setActiveCategory(null);
                      setTripSummary(summary);
                    }}
                    className="mt-3 w-full rounded-lg bg-brand-accent py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                  >
                    Me interesa
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal>

      {tripSummary && (
        <QuoteModal open={tripSummary !== null} onClose={() => setTripSummary(null)} tripSummary={tripSummary} />
      )}
    </section>
  );
}
