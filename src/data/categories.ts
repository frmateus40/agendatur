export interface CategoryDestination {
  id: string;
  name: string;
  description: string;
  image: string;
  /** Texto alternativo descriptivo (SEO/accesibilidad) para la imagen. */
  imageAlt: string;
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
      { id: "cartagena", name: "Cartagena", description: "Murallas, historia y Caribe colonial.", image: "/images/categories/nac-cartagena.jpg", imageAlt: "Murallas del centro histórico de Cartagena, Colombia" },
      { id: "san-andres", name: "San Andrés y Providencia", description: "El mar de los siete colores.", image: "/images/categories/nac-san-andres.jpg", imageAlt: "Playa de San Andrés, Colombia, mar de siete colores" },
      { id: "eje-cafetero", name: "Eje Cafetero", description: "Paisaje cafetero y fincas típicas.", image: "/images/categories/nac-eje-cafetero.jpg", imageAlt: "Paisaje cultural cafetero, Eje Cafetero, Colombia" },
      { id: "santa-marta", name: "Santa Marta / Tayrona", description: "Selva, playa y Sierra Nevada.", image: "/images/categories/nac-santa-marta.jpg", imageAlt: "Playa del Parque Tayrona cerca de Santa Marta, Colombia" },
      { id: "amazonas", name: "Amazonas", description: "Selva amazónica y comunidades locales.", image: "/images/categories/nac-amazonas.jpg", imageAlt: "Selva amazónica colombiana" },
      { id: "guajira", name: "Guajira", description: "Desierto, mar y cultura Wayúu.", image: "/images/categories/nac-guajira.jpg", imageAlt: "Desierto de la Guajira colombiana junto al mar Caribe" },
      { id: "medellin", name: "Medellín", description: "La ciudad de la eterna primavera.", image: "/images/categories/nac-medellin.jpg", imageAlt: "Paisaje verde de Medellín, Colombia" },
      { id: "bogota", name: "Bogotá", description: "Cultura, gastronomía y montaña.", image: "/images/categories/nac-bogota.jpg", imageAlt: "Vista de Bogotá, capital de Colombia" },
    ],
  },
  {
    id: "internacionales",
    title: "Internacionales",
    icon: "🌎",
    coverImage: "/images/categories/cover-internacionales.jpg",
    destinations: [
      { id: "orlando", name: "Orlando – Disney / Universal", description: "Magia y parques temáticos en familia.", image: "/images/categories/int-orlando.jpg", imageAlt: "Viaje a Orlando, parques temáticos Disney y Universal" },
      { id: "nueva-york", name: "Nueva York", description: "La ciudad que nunca duerme.", image: "/images/categories/int-nueva-york.jpg", imageAlt: "Skyline de Nueva York, Estados Unidos" },
      { id: "cancun", name: "Cancún y Riviera Maya", description: "Playas turquesa y cultura maya.", image: "/images/categories/int-cancun.jpg", imageAlt: "Playa turquesa de Cancún y la Riviera Maya, viaje a Cancún" },
      { id: "punta-cana", name: "Punta Cana", description: "Todo incluido frente al Caribe.", image: "/images/categories/int-punta-cana.jpg", imageAlt: "Playa de Punta Cana con palmeras, viaje a Punta Cana" },
      { id: "madrid", name: "Madrid / España", description: "Historia, tapas y vida nocturna.", image: "/images/categories/int-madrid.jpg", imageAlt: "Arquitectura histórica de Madrid, España" },
      { id: "paris", name: "París", description: "Romance, arte y la Torre Eiffel.", image: "/images/categories/int-paris.jpg", imageAlt: "Torre Eiffel en París, viaje a Europa" },
      { id: "peru", name: "Perú (Machu Picchu)", description: "La ciudadela inca entre montañas.", image: "/images/categories/int-peru.jpg", imageAlt: "Ciudadela inca de Machu Picchu, Perú" },
      { id: "buenos-aires", name: "Buenos Aires", description: "Tango, arquitectura y buena mesa.", image: "/images/categories/int-buenos-aires.jpg", imageAlt: "Arquitectura de Buenos Aires, Argentina" },
    ],
  },
  {
    id: "cruceros",
    title: "Cruceros",
    icon: "🚢",
    coverImage: "/images/categories/cover-cruceros.jpg",
    destinations: [
      { id: "crucero-caribe", name: "Crucero por el Caribe", description: "Varias islas, un solo viaje.", image: "/images/categories/crucero-caribe.jpg", imageAlt: "Crucero navegando por el mar Caribe" },
      { id: "crucero-mediterraneo", name: "Crucero por el Mediterráneo", description: "Grecia, Italia y más en ruta.", image: "/images/categories/crucero-mediterraneo.jpg", imageAlt: "Crucero por el mar Mediterráneo, Europa" },
      { id: "crucero-cartagena-miami", name: "Salida desde Cartagena / Miami", description: "Zarpa desde puertos cercanos.", image: "/images/categories/crucero-cartagena-miami.jpg", imageAlt: "Crucero zarpando desde el puerto de Cartagena, Colombia" },
    ],
  },
  {
    id: "deluxe",
    title: "Deluxe",
    icon: "✨",
    coverImage: "/images/categories/cover-deluxe.jpg",
    destinations: [
      { id: "maldivas", name: "Maldivas", description: "Villas sobre el agua, lujo absoluto.", image: "/images/categories/deluxe-maldivas.jpg", imageAlt: "Villas sobre el agua en Maldivas, viaje deluxe" },
      { id: "bora-bora", name: "Bora Bora", description: "La laguna más exclusiva del Pacífico.", image: "/images/categories/deluxe-bora-bora.jpg", imageAlt: "Laguna turquesa de Bora Bora, Pacífico" },
      { id: "santorini", name: "Santorini", description: "Atardeceres inolvidables en el Egeo.", image: "/images/categories/deluxe-santorini.jpg", imageAlt: "Casas blancas de Santorini, Grecia, al atardecer" },
      { id: "dubai", name: "Dubái", description: "Lujo, arquitectura y desierto.", image: "/images/categories/deluxe-dubai.jpg", imageAlt: "Skyline de Dubái, viaje de lujo" },
      { id: "bali", name: "Bali", description: "Templos, naturaleza y bienestar.", image: "/images/categories/deluxe-bali.jpg", imageAlt: "Templo tradicional balinés entre naturaleza, Bali" },
      { id: "riviera-nayarit", name: "Riviera Nayarit", description: "Descanso frente al Pacífico mexicano.", image: "/images/categories/deluxe-riviera-nayarit.jpg", imageAlt: "Playa de la Riviera Nayarit frente al Pacífico mexicano" },
    ],
  },
];
