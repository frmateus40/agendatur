import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { SearchTabProvider } from "@/contexts/SearchTabContext";
import { BUSINESS_INFO, SITE_URL } from "@/data/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Fuente de títulos para las landing pages nuevas (clase utilitaria
// "font-poppins"). El resto del sitio sigue usando Inter sin cambios.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const DEFAULT_TITLE = "Agendatur | Agencia de viajes digital en Colombia - Paquetes y planes a la medida";
const DEFAULT_DESCRIPTION =
  "Agencia de viajes 100% digital en Colombia (RNT 279917). Cotiza vuelos, hoteles, autos, tours y paquetes turísticos todo incluido por WhatsApp.";
const DEFAULT_OG_IMAGE = "/og/agendatur-og.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    // Se aplica a las rutas hijas (/nosotros, /paquetes, /cruceros), no a
    // "/" — ahí el título de app/page.tsx se usa completo, sin sufijo.
    template: "%s | Agendatur",
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Agendatur",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Agendatur — agencia de viajes digital en Colombia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  verification: {
    // Rellenar con el código de Google Search Console cuando esté disponible
    // (Configuración > Verificación de propiedad > etiqueta HTML).
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${SITE_URL}/#organization`,
  name: BUSINESS_INFO.name,
  legalName: BUSINESS_INFO.legalName,
  description: BUSINESS_INFO.description,
  url: SITE_URL,
  logo: `${SITE_URL}${BUSINESS_INFO.logo}`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  email: BUSINESS_INFO.email,
  telephone: BUSINESS_INFO.whatsappNumber,
  areaServed: BUSINESS_INFO.countryName,
  address: {
    "@type": "PostalAddress",
    addressCountry: BUSINESS_INFO.country,
  },
  identifier: {
    "@type": "PropertyValue",
    name: "RNT",
    value: BUSINESS_INFO.rnt,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: BUSINESS_INFO.whatsappNumber,
      email: BUSINESS_INFO.email,
      areaServed: BUSINESS_INFO.country,
      availableLanguage: ["Spanish"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SearchTabProvider>{children}</SearchTabProvider>
        <WhatsAppFloatButton />
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
