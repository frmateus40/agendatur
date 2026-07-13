import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de tratamiento de datos personales (habeas data) de Agendatur, agencia de viajes 100% digital en Colombia (RNT 279917).",
  alternates: { canonical: "/politica-de-privacidad" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Política de privacidad", item: `${SITE_URL}/politica-de-privacidad` },
  ],
};

export default function PoliticaPrivacidadPage() {
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
          / <span className="text-gray-700">Política de privacidad</span>
        </nav>

        <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
          <h1 className="text-2xl font-extrabold text-gray-900 md:text-4xl">Política de privacidad</h1>
          <p className="mt-2 text-xs text-gray-400">
            Este texto es un punto de partida editable. Se recomienda revisión legal antes de la publicación
            definitiva, conforme a la Ley 1581 de 2012 de Colombia.
          </p>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-gray-600 md:text-base">
            <div>
              <h2 className="text-lg font-bold text-brand-primary">1. Responsable del tratamiento</h2>
              <p className="mt-2">
                Agendatur, agencia de viajes 100% digital con RNT 279917, es responsable del tratamiento de los
                datos personales que nos compartes a través de este sitio web, WhatsApp o correo electrónico.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">2. Datos que recopilamos</h2>
              <p className="mt-2">
                Recopilamos los datos que nos entregas voluntariamente al solicitar una cotización o completar
                un formulario: nombre, número de WhatsApp o teléfono, correo electrónico y detalles del viaje
                que quieres cotizar (destino, fechas, número de pasajeros).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">3. Finalidad del tratamiento</h2>
              <p className="mt-2">
                Usamos tus datos para responder tu solicitud de cotización, coordinar tu reserva, agendar
                reuniones virtuales, dar respuesta a peticiones, quejas, reclamos o sugerencias (PQRS), y
                enviarte información relacionada con tu viaje.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">4. Derechos del titular (habeas data)</h2>
              <p className="mt-2">
                Como titular de tus datos, tienes derecho a conocer, actualizar, rectificar y solicitar la
                supresión de tus datos personales, así como a revocar la autorización otorgada, escribiéndonos
                por cualquiera de nuestros canales de contacto.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">5. Almacenamiento y seguridad</h2>
              <p className="mt-2">
                Tus datos se almacenan de forma segura y solo se comparten con los proveedores estrictamente
                necesarios para completar tu servicio de viaje (aerolíneas, hoteles, operadores turísticos) o
                cuando la ley lo requiera.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-brand-primary">6. Contacto</h2>
              <p className="mt-2">
                Para ejercer tus derechos o resolver dudas sobre el tratamiento de tus datos, escríbenos por
                WhatsApp al 310 227 6645 o al correo{" "}
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
