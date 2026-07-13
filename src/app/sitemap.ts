import type { MetadataRoute } from "next";
import { CITIES } from "@/data/cities";
import { FLIGHT_DESTINATIONS } from "@/data/flight-destinations";
import { SITE_URL } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const cityRoutes: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${SITE_URL}/agencia-de-viajes-en-${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const flightDestinationRoutes: MetadataRoute.Sitemap = FLIGHT_DESTINATIONS.map((d) => ({
    url: `${SITE_URL}/vuelos-a-${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/paquetes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/cruceros`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ...cityRoutes,
    ...flightDestinationRoutes,
    { url: `${SITE_URL}/pqrs`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terminos-y-condiciones`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/politica-de-privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/derechos-del-pasajero`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
