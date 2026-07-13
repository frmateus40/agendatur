import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FLIGHT_DESTINATIONS, type FlightDestination } from "@/data/flight-destinations";
import { SITE_URL } from "@/data/seo";

function IconDigital({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 9.5l2 2 2-3M13.5 9h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

function IconWhatsapp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.02 2.5c-5.26 0-9.53 4.27-9.53 9.53 0 1.68.44 3.3 1.28 4.73L2.5 21.5l4.87-1.24a9.5 9.5 0 0 0 4.65 1.2h.01c5.26 0 9.53-4.27 9.53-9.53s-4.27-9.43-9.54-9.43Zm0 17.4a7.8 7.8 0 0 1-3.99-1.09l-.28-.17-2.9.74.78-2.83-.19-.29a7.85 7.85 0 0 1-1.2-4.21c0-4.34 3.53-7.87 7.88-7.87 2.1 0 4.08.82 5.57 2.31a7.83 7.83 0 0 1 2.3 5.57c0 4.34-3.53 7.84-7.87 7.84Z" />
    </svg>
  );
}

function IconCredit({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 14.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const WHY_ITEMS = [
  { icon: IconDigital, text: "Agencia 100% digital" },
  { icon: IconShield, text: "RNT 279917" },
  { icon: IconWhatsapp, text: "Atención personalizada por WhatsApp" },
  { icon: IconCredit, text: "Financiación / línea de crédito" },
];

export default function FlightDestinationContent({ destination }: { destination: FlightDestination }) {
  const path = `/vuelos-a-${destination.slug}`;
  const waHref = `https://wa.me/573102276645?text=${encodeURIComponent(
    `Hola, quiero cotizar un vuelo a ${destination.name} con Agendatur`
  )}`;
  const otherDestinations = FLIGHT_DESTINATIONS.filter((d) => d.slug !== destination.slug);

  const travelAgencyJsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Agendatur",
    url: `${SITE_URL}${path}`,
    telephone: "+573102276645",
    areaServed: "Colombia",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: `Vuelos a ${destination.name}`, item: `${SITE_URL}${path}` },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main className="flex-1">
        <nav aria-label="Ruta de navegación" className="mx-auto max-w-7xl px-4 pt-6 text-xs text-gray-500">
          <a href="/" className="hover:text-brand-primary-medium">
            Inicio
          </a>{" "}
          / <span className="text-gray-700">Vuelos a {destination.name}</span>
        </nav>

        <section className="bg-brand-primary px-4 py-16 text-center text-white md:py-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-poppins text-3xl font-extrabold leading-tight md:text-5xl">
              Vuelos a {destination.name}
            </h1>
            <p className="mt-4 text-base text-blue-100 md:text-lg">{destination.heroSubtitle}</p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-orange-600 md:text-base"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <p className="text-sm leading-relaxed text-gray-600 md:text-base">{destination.intro}</p>
        </section>

        <section className="bg-gray-50 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-poppins text-xl font-bold text-brand-primary md:text-2xl">
              Qué encontrarás en {destination.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">{destination.atractivos}</p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <h2 className="font-poppins text-xl font-bold text-brand-primary md:text-2xl">
            Cómo cotizar tu vuelo a {destination.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">{destination.comoCotizar}</p>

          <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-accent">Tip de viaje</p>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">{destination.tip}</p>
          </div>

          {destination.relatedCityPath && (
            <p className="mt-4 text-sm text-gray-600">
              ¿Vives en {destination.name} y quieres viajar a otro destino?{" "}
              <a href={destination.relatedCityPath} className="text-brand-primary-medium underline">
                Mira nuestra agencia de viajes en {destination.name}
              </a>
              .
            </p>
          )}

          <div className="mt-6 text-center">
            <a
              href="/paquetes"
              className="inline-block rounded-lg border-2 border-brand-primary px-6 py-2.5 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-primary hover:text-white"
            >
              Ver todos los paquetes
            </a>
          </div>
        </section>

        <section className="bg-gray-50 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-poppins text-center text-xl font-bold text-brand-primary md:text-2xl">
              Por qué elegir Agendatur
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
              {WHY_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex flex-col items-center gap-3 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-primary-medium shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 text-center md:py-16">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm leading-relaxed text-gray-600 md:text-base">{destination.cierre}</p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-orange-600 md:text-base"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </section>

        <section className="border-t border-gray-100 px-4 py-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Otros destinos</p>
            <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2">
              {otherDestinations.map((d) => (
                <a
                  key={d.slug}
                  href={`/vuelos-a-${d.slug}`}
                  className="text-sm text-brand-primary-medium hover:underline"
                >
                  Vuelos a {d.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
