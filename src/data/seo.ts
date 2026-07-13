// Configuración central de SEO. Editar aquí para ampliar palabras clave,
// datos del negocio o textos de metadatos — no hace falta tocar componentes.

/** Dominio público del sitio (usado en canonical, sitemap, OG, JSON-LD). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://agendatur.vercel.app").replace(/\/$/, "");

/** Palabras clave objetivo — lista fácil de ampliar/editar. */
export const TARGET_KEYWORDS: string[] = [
  "agencia de viajes Colombia",
  "agencia de viajes digital",
  "agencia de viajes online",
  "paquetes turísticos Colombia",
  "viajes todo incluido",
  "planes de viaje",
  "cotizar viaje",
  "cruceros desde Colombia",
  "viajes a San Andrés",
  "viajes a Cartagena",
  "viajes a Cancún",
  "viajes a Punta Cana",
  "viajes a Orlando",
  "viajes a Europa",
];

export const BUSINESS_INFO = {
  name: "Agendatur",
  legalName: "Agendatur",
  description:
    "Agendatur es una agencia de viajes 100% digital en Colombia (RNT 279917), especializada en paquetes turísticos, cruceros, vuelos, hoteles y planes de viaje a la medida.",
  rnt: "279917",
  country: "CO",
  countryName: "Colombia",
  email: "viajes@agendatur.onmicrosoft.com",
  whatsappNumber: "+573102276045",
  whatsappDisplay: "310 227 6045",
  logo: "/agendatur-logo.jpg",
};
