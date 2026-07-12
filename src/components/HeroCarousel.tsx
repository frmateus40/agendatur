"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  {
    id: 1,
    src: "/images/hero/caribe.jpg",
    alt: "Playa del Caribe con aguas turquesa al atardecer",
    subtitle: "Playas del Caribe con todo incluido",
  },
  {
    id: 2,
    src: "/images/hero/europa.jpg",
    alt: "Torre Eiffel en París al atardecer",
    subtitle: "Europa clásica: historia, arte y gastronomía",
  },
  {
    id: 3,
    src: "/images/hero/colombia.jpg",
    alt: "Calles coloridas del centro histórico de Cartagena",
    subtitle: "Descubre los destinos más lindos de Colombia",
  },
  {
    id: 4,
    src: "/images/hero/ofertas.jpg",
    alt: "Laguna tropical con aguas cristalinas",
    subtitle: "Paquetes exclusivos Agendatur, por tiempo limitado",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative h-[440px] w-full scroll-mt-24 overflow-hidden md:h-[560px]">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Overlay azul translúcido + degradado inferior para contraste del texto */}
      <div className="absolute inset-0 bg-brand-primary/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pb-28 text-center text-white">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight drop-shadow-md md:text-6xl">
          Tu próximo viaje empieza aquí
        </h1>
        <p className="mt-4 max-w-xl text-lg font-medium text-white/90 drop-shadow-sm md:text-xl">
          {SLIDES[active].subtitle}
        </p>
        <a
          href="#buscador"
          className="mt-6 rounded-lg bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-orange-600 md:text-base"
        >
          Cotizar mi viaje
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            aria-label={`Ir a la diapositiva ${index + 1}`}
            onClick={() => setActive(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === active ? "w-6 bg-white" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
