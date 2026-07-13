import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CruceroGrid from "@/components/categories/CruceroGrid";
import { SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: "Cruceros desde Colombia — Cotiza tu viaje",
  description:
    "Cruceros desde Colombia por el Caribe y el Mediterráneo, con salidas desde Cartagena y Miami. Cotiza tu crucero con Agendatur, agencia de viajes online.",
  alternates: { canonical: "/cruceros" },
  openGraph: {
    title: "Cruceros desde Colombia | Agendatur",
    description:
      "Cruceros por el Caribe y el Mediterráneo, con salidas desde Cartagena y Miami. Cotiza tu crucero con Agendatur.",
    url: `${SITE_URL}/cruceros`,
    images: [{ url: "/og/cruceros-og.jpg", width: 1200, height: 630, alt: "Cruceros desde Colombia — Agendatur" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Cruceros", item: `${SITE_URL}/cruceros` },
  ],
};

export default function CrucerosPage() {
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
          / <span className="text-gray-700">Cruceros</span>
        </nav>

        <div className="mx-auto max-w-4xl px-4 pt-10 text-center">
          <h1 className="text-2xl font-extrabold text-gray-900 md:text-4xl">Cruceros desde Colombia</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
            Navega por el Caribe o el Mediterráneo con salidas cercanas desde Cartagena y
            Miami. Como agencia de viajes online, te ayudamos a comparar itinerarios y a
            cotizar tu crucero por WhatsApp, sin filas ni oficinas.
          </p>
        </div>

        <CruceroGrid />
      </main>
      <Footer />
    </div>
  );
}
