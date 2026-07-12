export interface TravelPackage {
  id: string;
  destination: string;
  nights: number;
  price: number;
  departure: string;
  tag?: "Nuevo" | "Deluxe";
  category: "nacional" | "internacional" | "deluxe";
  /** Ruta de la imagen en /public — reemplazar por fotos oficiales de Agendatur. */
  image: string;
}

// Datos de ejemplo — reemplazar con los paquetes, precios e imágenes reales de la agencia.
export const PACKAGES: TravelPackage[] = [
  { id: "tailandia", destination: "Tailandia", nights: 6, price: 8900000, departure: "Salidas todos los meses", tag: "Nuevo", category: "internacional", image: "/images/packages/tailandia.jpg" },
  { id: "atenas", destination: "Atenas, Grecia", nights: 7, price: 9700000, departure: "Salidas todos los viernes", tag: "Deluxe", category: "deluxe", image: "/images/packages/atenas.jpg" },
  { id: "curazao", destination: "Curazao", nights: 5, price: 5200000, departure: "Salidas quincenales", category: "internacional", image: "/images/packages/curazao.jpg" },
  { id: "punta-cana", destination: "Punta Cana", nights: 5, price: 4300000, departure: "Salidas todas las semanas", category: "internacional", image: "/images/packages/punta-cana.jpg" },
  { id: "cartagena", destination: "Cartagena", nights: 4, price: 1800000, departure: "Salidas diarias", category: "nacional", image: "/images/packages/cartagena.jpg" },
  { id: "san-andres", destination: "San Andrés", nights: 4, price: 1650000, departure: "Salidas diarias", tag: "Nuevo", category: "nacional", image: "/images/packages/san-andres.jpg" },
  { id: "eje-cafetero", destination: "Eje Cafetero", nights: 3, price: 1200000, departure: "Salidas todos los fines de semana", category: "nacional", image: "/images/packages/eje-cafetero.jpg" },
  { id: "dubai", destination: "Dubái", nights: 6, price: 11500000, departure: "Salidas todos los meses", tag: "Deluxe", category: "deluxe", image: "/images/packages/dubai.jpg" },
];
