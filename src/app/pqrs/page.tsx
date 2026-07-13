import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PQRSForm from "@/components/footer/PQRSForm";
import { SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: "PQRS — Peticiones, Quejas, Reclamos y Sugerencias",
  description:
    "Radica tu petición, queja, reclamo o sugerencia con Agendatur, agencia de viajes 100% digital en Colombia (RNT 279917). Te respondemos a la brevedad.",
  alternates: { canonical: "/pqrs" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "PQRS", item: `${SITE_URL}/pqrs` },
  ],
};

export default function PQRSPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <nav aria-label="Ruta de navegación" className="mx-auto max-w-7xl px-4 pt-6 text-xs text-gray-500">
          <a href="/" className="hover:text-brand-primary-medium">
            Inicio
          </a>{" "}
          / <span className="text-gray-700">PQRS</span>
        </nav>

        <section className="mx-auto max-w-2xl px-4 py-12 md:py-16">
          <h1 className="text-2xl font-extrabold text-gray-900 md:text-4xl">
            PQRS — Peticiones, Quejas, Reclamos y Sugerencias
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-500 md:text-base">
            Cuéntanos qué necesitas y un asesor de Agendatur te responderá a la brevedad. También puedes
            escribirnos directamente por WhatsApp si prefieres una respuesta más inmediata.
          </p>

          <div className="mt-8 rounded-2xl border border-gray-100 p-6 shadow-sm md:p-8">
            <PQRSForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
