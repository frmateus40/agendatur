import Image from "next/image";
import { ABOUT_INTRO, MISSION, VISION, VALUES } from "@/data/about";

function IconTarget({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

function IconEye({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconHandshake({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M2 11l4-3 4 2 3-2 3 2 4-2 2 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 11v3l4 4 3-2 2 2 4-3 3-3v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 13l3-2 3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 17l-5.6 3.1 1.4-6.3-4.8-4.3 6.4-.6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPlane({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21 16v-2l-8-5V4.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V18l-2.5 2v1.5L11 20.5l3.5 1V20l-2.5-2v-4.5L21 16Z" />
    </svg>
  );
}

function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 12.2l2.3 2.3 4.7-4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const VALUE_ICONS = [IconHandshake, IconShield, IconStar, IconPlane, IconCheckCircle];

interface AboutSectionProps {
  headingLevel?: "h1" | "h2";
}

export default function AboutSection({ headingLevel = "h2" }: AboutSectionProps) {
  const Heading = headingLevel;

  return (
    <section id="nosotros" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <Heading className="text-2xl font-extrabold text-gray-900 md:text-4xl">Nosotros</Heading>
            <p className="mt-4 text-sm leading-relaxed text-gray-500 md:text-base">{ABOUT_INTRO}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm md:aspect-[5/4]">
            <Image
              src="/images/about/nosotros.jpg"
              alt="Viajero contemplando un paisaje de montaña al amanecer"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
              <IconTarget className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-brand-primary">Misión</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{MISSION}</p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
              <IconEye className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-brand-primary">Visión</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{VISION}</p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
              <IconStar className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-brand-primary">Valores</h3>
            <ul className="mt-3 space-y-3">
              {VALUES.map((value, index) => {
                const Icon = VALUE_ICONS[index % VALUE_ICONS.length];
                return (
                  <li key={value.id} className="flex gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary-medium" />
                    <p className="text-sm leading-relaxed text-gray-500">
                      <span className="font-semibold text-gray-800">{value.title}:</span> {value.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
