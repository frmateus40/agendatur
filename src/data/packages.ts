export interface TravelPackage {
  id: string;
  destination: string;
  nights: number;
  price: number;
  departure: string;
  tag?: "Nuevo" | "Deluxe";
  category: "nacional" | "internacional" | "deluxe";
  /** Precio visible en la tarjeta (opcional) — solo se muestra si se define. */
  displayPrice?: string;
  /** Ruta de la imagen en /public — reemplazar por fotos oficiales de Agendatur. */
  image: string;
  /** Texto alternativo descriptivo (SEO/accesibilidad) para la imagen. */
  imageAlt: string;
}

// Datos de ejemplo — reemplazar con los paquetes, precios e imágenes reales de la agencia.
export const PACKAGES: TravelPackage[] = [
  { id: "tailandia", destination: "Tailandia", nights: 6, price: 8900000, departure: "Salidas todos los meses", tag: "Nuevo", category: "internacional", image: "/images/packages/tailandia.jpg", imageAlt: "Templo tradicional tailandés, paquete turístico a Tailandia", displayPrice: "Desde $8.000.000 por persona" },
  { id: "atenas", destination: "Atenas, Grecia", nights: 7, price: 9700000, departure: "Salidas todos los viernes", tag: "Deluxe", category: "deluxe", image: "/images/packages/atenas.jpg", imageAlt: "Acrópolis de Atenas, paquete de viaje a Grecia", displayPrice: "Desde $8.000.000 por persona" },
  { id: "curazao", destination: "Curazao", nights: 5, price: 5200000, departure: "Salidas quincenales", category: "internacional", image: "/images/packages/curazao.jpg", imageAlt: "Playa de aguas turquesa en Curazao, paquete todo incluido" },
  { id: "punta-cana", destination: "Punta Cana", nights: 5, price: 4300000, departure: "Salidas todas las semanas", category: "internacional", image: "/images/packages/punta-cana.jpg", imageAlt: "Playa de Punta Cana con palmeras, viaje todo incluido" },
  { id: "cartagena", destination: "Cartagena", nights: 4, price: 1800000, departure: "Salidas diarias", category: "nacional", image: "/images/packages/cartagena.jpg", imageAlt: "Centro histórico amurallado de Cartagena, Colombia" },
  { id: "san-andres", destination: "San Andrés", nights: 4, price: 1650000, departure: "Salidas diarias", tag: "Nuevo", category: "nacional", image: "/images/packages/san-andres.jpg", imageAlt: "Mar de siete colores en San Andrés, Colombia" },
  { id: "eje-cafetero", destination: "Eje Cafetero", nights: 3, price: 1200000, departure: "Salidas todos los fines de semana", category: "nacional", image: "/images/packages/eje-cafetero.jpg", imageAlt: "Paisaje cafetero colombiano, plan de viaje al Eje Cafetero" },
  { id: "dubai", destination: "Dubái", nights: 6, price: 11500000, departure: "Salidas todos los meses", tag: "Deluxe", category: "deluxe", image: "/images/packages/dubai.jpg", imageAlt: "Skyline de Dubái, paquete de viaje deluxe" },
];
