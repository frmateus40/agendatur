export interface CategoryDestination {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  coverImage: string;
  destinations: CategoryDestination[];
}

// Estructura separada del diseño: Agendatur puede agregar/quitar categorías o
// destinos editando este archivo, sin tocar los componentes.
export const CATEGORIES: Category[] = [
  {
    id: "nacionales",
    title: "Nacionales",
    icon: "🇨🇴",
    coverImage: "/images/categories/cover-nacionales.jpg",
    destinations: [
      { id: "cartagena", name: "Cartagena", description: "Murallas, historia y Caribe colonial.", image: "/images/categories/nac-cartagena.jpg" },
      { id: "san-andres", name: "San Andrés y Providencia", description: "El mar de los siete colores.", image: "/images/categories/nac-san-andres.jpg" },
      { id: "eje-cafetero", name: "Eje Cafetero", description: "Paisaje cafetero y fincas típicas.", image: "/images/categories/nac-eje-cafetero.jpg" },
      { id: "santa-marta", name: "Santa Marta / Tayrona", description: "Selva, playa y Sierra Nevada.", image: "/images/categories/nac-santa-marta.jpg" },
      { id: "amazonas", name: "Amazonas", description: "Selva amazónica y comunidades locales.", image: "/images/categories/nac-amazonas.jpg" },
      { id: "guajira", name: "Guajira", description: "Desierto, mar y cultura Wayúu.", image: "/images/categories/nac-guajira.jpg" },
      { id: "medellin", name: "Medellín", description: "La ciudad de la eterna primavera.", image: "/images/categories/nac-medellin.jpg" },
      { id: "bogota", name: "Bogotá", description: "Cultura, gastronomía y montaña.", image: "/images/categories/nac-bogota.jpg" },
    ],
  },
  {
    id: "internacionales",
    title: "Internacionales",
    icon: "🌎",
    coverImage: "/images/categories/cover-internacionales.jpg",
    destinations: [
      { id: "orlando", name: "Orlando – Disney / Universal", description: "Magia y parques temáticos en familia.", image: "/images/categories/int-orlando.jpg" },
      { id: "nueva-york", name: "Nueva York", description: "La ciudad que nunca duerme.", image: "/images/categories/int-nueva-york.jpg" },
      { id: "cancun", name: "Cancún y Riviera Maya", description: "Playas turquesa y cultura maya.", image: "/images/categories/int-cancun.jpg" },
      { id: "punta-cana", name: "Punta Cana", description: "Todo incluido frente al Caribe.", image: "/images/categories/int-punta-cana.jpg" },
      { id: "madrid", name: "Madrid / España", description: "Historia, tapas y vida nocturna.", image: "/images/categories/int-madrid.jpg" },
      { id: "paris", name: "París", description: "Romance, arte y la Torre Eiffel.", image: "/images/categories/int-paris.jpg" },
      { id: "peru", name: "Perú (Machu Picchu)", description: "La ciudadela inca entre montañas.", image: "/images/categories/int-peru.jpg" },
      { id: "buenos-aires", name: "Buenos Aires", description: "Tango, arquitectura y buena mesa.", image: "/images/categories/int-buenos-aires.jpg" },
    ],
  },
  {
    id: "cruceros",
    title: "Cruceros",
    icon: "🚢",
    coverImage: "/images/categories/cover-cruceros.jpg",
    destinations: [
      { id: "crucero-caribe", name: "Crucero por el Caribe", description: "Varias islas, un solo viaje.", image: "/images/categories/crucero-caribe.jpg" },
      { id: "crucero-mediterraneo", name: "Crucero por el Mediterráneo", description: "Grecia, Italia y más en ruta.", image: "/images/categories/crucero-mediterraneo.jpg" },
      { id: "crucero-cartagena-miami", name: "Salida desde Cartagena / Miami", description: "Zarpa desde puertos cercanos.", image: "/images/categories/crucero-cartagena-miami.jpg" },
    ],
  },
  {
    id: "deluxe",
    title: "Deluxe",
    icon: "✨",
    coverImage: "/images/categories/cover-deluxe.jpg",
    destinations: [
      { id: "maldivas", name: "Maldivas", description: "Villas sobre el agua, lujo absoluto.", image: "/images/categories/deluxe-maldivas.jpg" },
      { id: "bora-bora", name: "Bora Bora", description: "La laguna más exclusiva del Pacífico.", image: "/images/categories/deluxe-bora-bora.jpg" },
      { id: "santorini", name: "Santorini", description: "Atardeceres inolvidables en el Egeo.", image: "/images/categories/deluxe-santorini.jpg" },
      { id: "dubai", name: "Dubái", description: "Lujo, arquitectura y desierto.", image: "/images/categories/deluxe-dubai.jpg" },
      { id: "bali", name: "Bali", description: "Templos, naturaleza y bienestar.", image: "/images/categories/deluxe-bali.jpg" },
      { id: "riviera-nayarit", name: "Riviera Nayarit", description: "Descanso frente al Pacífico mexicano.", image: "/images/categories/deluxe-riviera-nayarit.jpg" },
    ],
  },
];
