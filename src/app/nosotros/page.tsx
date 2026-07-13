import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { BUSINESS_INFO, SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: "Nosotros — Agencia de viajes en Colombia",
  description:
    "Conoce a Agendatur, agencia de viajes 100% digital en Colombia con RNT 279917. Misión, visión y valores de nuestro equipo de asesores de viaje.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros — Agendatur, agencia de viajes digital en Colombia",
    description:
      "Conoce a Agendatur, agencia de viajes 100% digital en Colombia con RNT 279917.",
    url: `${SITE_URL}/nosotros`,
    images: [{ url: "/og/nosotros-og.jpg", width: 1200, height: 630, alt: "Nosotros — Agendatur" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Nosotros", item: `${SITE_URL}/nosotros` },
  ],
};

export default function NosotrosPage() {
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
          / <span className="text-gray-700">Nosotros</span>
        </nav>

        <AboutSection headingLevel="h1" />

        <section className="bg-gray-50 py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-xl font-extrabold text-gray-900 md:text-2xl">
              Una agencia de viajes online registrada y confiable
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-500 md:text-base">
              Agendatur está registrada ante el Registro Nacional de Turismo de Colombia con
              RNT {BUSINESS_INFO.rnt}. Somos una agencia de viajes online 100% digital: cotiza
              tu plan por WhatsApp o agenda una reunión virtual con uno de nuestros asesores,
              sin necesidad de visitar una oficina física.
            </p>
            <a
              href="/#buscador"
              className="mt-6 inline-block rounded-lg bg-brand-accent px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
            >
              Cotizar mi viaje
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
