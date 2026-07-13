import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: "Derechos del pasajero",
  description:
    "Información sobre los derechos del pasajero al contratar servicios turísticos con Agendatur, agencia de viajes 100% digital en Colombia (RNT 279917).",
  alternates: { canonical: "/derechos-del-pasajero" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Derechos del pasajero", item: `${SITE_URL}/derechos-del-pasajero` },
  ],
};

export default function DerechosPasajeroPage() {
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
          / <span className="text-gray-700">Derechos del pasajero</span>
        </nav>

        <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <h1 className="text-2xl font-extrabold text-gray-900 md:text-4xl">Derechos del pasajero</h1>
          <p className="mt-2 text-xs text-gray-400">
            Este texto es un punto de partida editable, exigido para agencias con Registro Nacional de
            Turismo. Se recomienda revisión legal antes de la publicación definitiva.
          </p>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-600 md:text-base">
            <div>
              <h2 className="text-lg font-bold text-brand-primary">1. Derecho a la información</h2>
              <p className="mt-2">
                Como pasajero tienes derecho a recibir información clara, veraz y oportuna sobre tu plan de
                viaje: itinerario, aerolínea u operador, condiciones de la tarifa, política de cambios y
                cancelaciones, antes de confirmar tu reserva.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">2. Derecho a la cotización sin costo</h2>
              <p className="mt-2">
                Solicitar una cotización con Agendatur no genera ningún costo ni compromiso de compra. El
                cobro solo se realiza una vez aceptas y confirmas la reserva con tu asesor.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">3. Cambios, cancelaciones y reembolsos</h2>
              <p className="mt-2">
                Las condiciones de cambio, cancelación o reembolso dependen de la política propia de cada
                aerolínea, hotel u operador turístico contratado, y se informan de manera expresa antes de
                confirmar tu reserva.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">4. Equipaje</h2>
              <p className="mt-2">
                Las políticas de equipaje de mano y de bodega (peso, dimensiones, costos adicionales) las
                define cada aerolínea. Te las compartimos junto con tu cotización para que viajes sin
                sorpresas.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">5. Atención al cliente y PQRS</h2>
              <p className="mt-2">
                Tienes derecho a radicar cualquier petición, queja, reclamo o sugerencia relacionada con tu
                servicio a través de nuestro{" "}
                <a href="/pqrs" className="text-brand-primary-medium underline">
                  formulario de PQRS
                </a>{" "}
                o por WhatsApp al 310 227 6645. Nos comprometemos a dar respuesta a la brevedad.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">6. Registro Nacional de Turismo</h2>
              <p className="mt-2">
                Agendatur opera como agencia de viajes registrada, con RNT 279917, conforme a la normativa
                turística vigente en Colombia.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
