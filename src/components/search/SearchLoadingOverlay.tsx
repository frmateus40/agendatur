"use client";

import { useEffect, useState } from "react";
import GlobeOrbitLoader from "./GlobeOrbitLoader";

const MESSAGES = [
  "Buscando las mejores opciones para ti…",
  "Explorando el mundo por ti…",
  "Comparando precios y horarios…",
  "Ya casi está listo tu viaje…",
];

interface SearchLoadingOverlayProps {
  loading: boolean;
}

export default function SearchLoadingOverlay({ loading }: SearchLoadingOverlayProps) {
  const [mounted, setMounted] = useState(loading);

  useEffect(() => {
    if (loading) {
      setMounted(true);
      return;
    }
    const timeout = setTimeout(() => setMounted(false), 300);
    return () => clearTimeout(timeout);
  }, [loading]);

  if (!mounted) return null;

  return (
    <div
      data-visible={loading}
      className="globe-loader-overlay flex flex-col items-center justify-center gap-4 rounded-xl bg-white py-10"
    >
      <GlobeOrbitLoader className="h-32 w-32 md:h-40 md:w-40" />

      <div className="globe-loader-text-rotator text-center text-sm font-medium text-brand-primary md:text-base">
        {MESSAGES.map((message, index) => (
          <span key={message} style={{ animationDelay: `${index * 2.5}s` }}>
            {message}
          </span>
        ))}
      </div>

      <div className="h-1 w-40 overflow-hidden rounded-full bg-gray-100">
        <div className="progress-indeterminate-bar h-full w-1/3 rounded-full bg-brand-accent" />
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        Cargando resultados
      </p>
    </div>
  );
}
