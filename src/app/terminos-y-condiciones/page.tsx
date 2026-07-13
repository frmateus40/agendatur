import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso del sitio web de Agendatur, agencia de viajes 100% digital en Colombia (RNT 279917).",
  alternates: { canonical: "/terminos-y-condiciones" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Términos y condiciones", item: `${SITE_URL}/terminos-y-condiciones` },
  ],
};

export default function TerminosPage() {
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
          / <span className="text-gray-700">Términos y condiciones</span>
        </nav>

        <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <h1 className="text-2xl font-extrabold text-gray-900 md:text-4xl">Términos y condiciones</h1>
          <p className="mt-2 text-xs text-gray-400">
            Este texto es un punto de partida editable. Se recomienda revisión legal antes de la publicación
            definitiva.
          </p>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-600 md:text-base">
            <div>
              <h2 className="text-lg font-bold text-brand-primary">1. Objeto</h2>
              <p className="mt-2">
                Estos términos y condiciones regulan el uso del sitio web de Agendatur, agencia de viajes 100%
                digital identificada con Registro Nacional de Turismo (RNT) 279917, operando en Colombia. Al
                usar este sitio o solicitar una cotización, aceptas estos términos.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">2. Naturaleza del servicio</h2>
              <p className="mt-2">
                Agendatur opera de forma 100% digital: la información publicada en el sitio (paquetes,
                destinos, tarifas de referencia) tiene carácter informativo. Toda cotización, reserva y compra
                se confirma directamente con un asesor por WhatsApp o correo electrónico, donde se entregan las
                condiciones finales de precio, disponibilidad y políticas de cada proveedor (aerolíneas,
                hoteles, operadores turísticos).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">3. Uso del sitio</h2>
              <p className="mt-2">
                Te comprometes a usar este sitio de forma lícita, sin intentar vulnerar su seguridad ni
                utilizar la información publicada con fines distintos a la consulta o solicitud de servicios
                turísticos.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">4. Responsabilidad</h2>
              <p className="mt-2">
                Agendatur actúa como intermediario entre el viajero y los proveedores finales de servicios
                turísticos. Cambios, cancelaciones o condiciones específicas de cada proveedor se rigen por las
                políticas propias de dicho proveedor, que se informan al momento de confirmar la reserva.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">5. Legislación aplicable</h2>
              <p className="mt-2">
                Estos términos se rigen por la legislación colombiana, incluyendo la normativa aplicable a
                agencias de viajes y turismo.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">6. Contacto</h2>
              <p className="mt-2">
                Para dudas sobre estos términos, escríbenos por WhatsApp al 310 227 6645 o al correo{" "}
                <a href="mailto:asesor@viajesagendatur.com" className="text-brand-primary-medium underline">
                  asesor@viajesagendatur.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
