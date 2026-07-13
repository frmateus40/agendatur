import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackagesGrid from "@/components/PackagesGrid";
import { SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: "Paquetes turísticos y planes de viaje",
  description:
    "Paquetes turísticos en Colombia y el mundo: San Andrés, Cartagena, Cancún, Punta Cana y más. Cotiza tu plan de viaje todo incluido con Agendatur.",
  alternates: { canonical: "/paquetes" },
  openGraph: {
    title: "Paquetes turísticos y planes de viaje todo incluido | Agendatur",
    description:
      "Paquetes turísticos en Colombia y el mundo: San Andrés, Cartagena, Cancún, Punta Cana, Orlando, Europa y más.",
    url: `${SITE_URL}/paquetes`,
    images: [{ url: "/og/paquetes-og.jpg", width: 1200, height: 630, alt: "Paquetes turísticos Agendatur" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Paquetes", item: `${SITE_URL}/paquetes` },
  ],
};

export default function PaquetesPage() {
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
          / <span className="text-gray-700">Paquetes</span>
        </nav>

        <section className="mx-auto max-w-4xl px-4 pt-10 text-center">
          <p className="text-sm leading-relaxed text-gray-500 md:text-base">
            Estos son algunos de nuestros paquetes turísticos en Colombia y el mundo — planes
            de viaje todo incluido pensados para escapadas nacionales, playas internacionales y
            experiencias deluxe. ¿No ves el destino que buscas? Escríbenos y armamos un plan a
            tu medida.
          </p>
        </section>

        <PackagesGrid headingLevel="h1" showViewAllLink={false} />
      </main>
      <Footer />
    </div>
  );
}
