import type { Metadata } from "next";
import { SITE_URL } from "@/data/seo";

export interface FlightDestination {
  slug: string;
  name: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  atractivos: string;
  comoCotizar: string;
  tip: string;
  cierre: string;
  /** Ruta de la página de ciudad relacionada, si existe (ej. Cartagena también es ciudad de salida). */
  relatedCityPath?: string;
}

// Contenido único por destino — cada texto está redactado por separado
// (no es una plantilla con el nombre reemplazado) para evitar contenido
// duplicado ante buscadores. Editable libremente.
export const FLIGHT_DESTINATIONS: FlightDestination[] = [
  {
    slug: "san-andres",
    name: "San Andrés",
    metaDescription:
      "Cotiza tu vuelo a San Andrés por WhatsApp con Agendatur, agencia de viajes 100% digital en Colombia (RNT 279917). Comparamos vuelos según tu ciudad de origen.",
    heroSubtitle: "El mar de los siete colores, a un vuelo de distancia.",
    intro:
      "San Andrés es sinónimo del mar de los siete colores, uno de los destinos de playa más buscados por los colombianos. Volar a esta isla del Caribe es la forma más rápida de llegar, y desde varias ciudades del país hay vuelos directos que la conectan en poco tiempo. En Agendatur cotizamos tu vuelo a San Andrés según tu ciudad de salida, comparando horarios y aerolíneas disponibles para que encuentres la opción que mejor se ajuste a tu presupuesto y tus fechas. Ya sea que planees una escapada de fin de semana o una semana completa de playa, buceo y descanso, te ayudamos a armar el plan completo: vuelo, hospedaje y traslados, todo cotizado por WhatsApp sin que tengas que comparar aerolínea por aerolínea.",
    atractivos:
      "Playas de arena blanca y agua turquesa, el Hoyo Soplador, el manglar de Old Point y la cercana isla de Providencia son algunos de los atractivos que hacen de San Andrés un destino ideal para desconectarte sin salir del país.",
    comoCotizar:
      "Cotizar tu vuelo a San Andrés con Agendatur es simple: escríbenos por WhatsApp con tu ciudad de salida y tus fechas, y te enviamos las mejores opciones disponibles. No publicamos precios fijos porque las tarifas cambian constantemente según la fecha y la disponibilidad; por eso cotizamos cada caso de forma personalizada.",
    tip:
      "Si viajas en temporada alta (diciembre-enero o Semana Santa), reserva tu vuelo con varias semanas de anticipación: la demanda hacia la isla sube mucho y los cupos se agotan rápido.",
    cierre:
      "Si ya tienes ganas de conocer el mar de los siete colores, escríbenos por WhatsApp y cotiza tu vuelo a San Andrés hoy mismo.",
  },
  {
    slug: "cartagena",
    name: "Cartagena",
    metaDescription:
      "Cotiza tu vuelo a Cartagena por WhatsApp con Agendatur, agencia de viajes 100% digital en Colombia (RNT 279917). Comparamos vuelos según tu ciudad de origen.",
    heroSubtitle: "Murallas, historia y Caribe en un mismo viaje.",
    intro:
      "Cartagena de Indias es uno de los destinos más queridos de Colombia: murallas coloniales, calles de colores y el Caribe a pocos pasos del centro histórico. Volar a Cartagena es fácil desde casi cualquier ciudad del país, con vuelos frecuentes que llegan al Aeropuerto Rafael Núñez. En Agendatur cotizamos tu vuelo a Cartagena según tu origen, comparando horarios y tarifas para que elijas la opción que mejor se ajuste a tu viaje, ya sea una escapada romántica, un plan familiar o unas vacaciones de playa. También te ayudamos a decidir en qué zona alojarte según lo que quieras hacer durante tu estadía.",
    atractivos:
      "La Ciudad Amurallada, el barrio Getsemaní, las playas cercanas de Bocagrande y las Islas del Rosario son algunos de los planes favoritos de quienes visitan Cartagena por primera vez o repiten.",
    comoCotizar:
      "Cotizar tu vuelo a Cartagena con Agendatur es simple: escríbenos por WhatsApp con tu ciudad de origen y tus fechas de viaje, y te enviamos las mejores opciones disponibles. Si además necesitas hotel, te armamos el plan completo, incluyendo traslados desde el aeropuerto si los necesitas.",
    tip:
      "El calor en Cartagena es constante durante todo el año, así que empaca ropa ligera y protector solar sin importar el mes en que viajes.",
    cierre:
      "¿Ya tienes ganas de caminar por la Ciudad Amurallada? Escríbenos por WhatsApp y cotiza tu vuelo a Cartagena.",
    relatedCityPath: "/agencia-de-viajes-en-cartagena",
  },
  {
    slug: "cancun",
    name: "Cancún",
    metaDescription:
      "Cotiza tu vuelo a Cancún por WhatsApp con Agendatur, agencia de viajes 100% digital en Colombia (RNT 279917). Comparamos vuelos y hoteles todo incluido.",
    heroSubtitle: "Playas turquesa y todo incluido en el Caribe mexicano.",
    intro:
      "Cancún es uno de los destinos internacionales favoritos de los colombianos: playas de arena blanca, aguas turquesa y una oferta de hoteles todo incluido que lo hacen ideal tanto para parejas como para familias. Aunque no siempre hay vuelos directos desde todas las ciudades colombianas, en Agendatur te ayudamos a encontrar la mejor combinación de vuelos hacia Cancún según tu ciudad de origen, comparando escalas, horarios y aerolíneas para que el viaje sea lo más cómodo posible. También te orientamos sobre qué tan lejos queda cada hotel del aeropuerto y de la Zona Hotelera.",
    atractivos:
      "La Zona Hotelera, la Riviera Maya, las ruinas mayas de Tulum y Chichén Itzá, y los cenotes cercanos son algunos de los atractivos que combinan playa y cultura en un mismo viaje. La oferta gastronómica también es muy amplia, desde antojitos mexicanos callejeros hasta restaurantes de cocina internacional dentro de los hoteles.",
    comoCotizar:
      "Escríbenos por WhatsApp contándonos tu ciudad de salida y tus fechas ideales, y te armamos una cotización con vuelo y, si quieres, hotel todo incluido, sin necesidad de comparar tú mismo entre decenas de opciones. También te contamos si conviene viajar con conexión o esperar una fecha con mejor disponibilidad.",
    tip:
      "Ten en cuenta que necesitarás pasaporte vigente para volar a México; revisa la fecha de vencimiento con tiempo antes de tu viaje.",
    cierre: "Si sueñas con el Caribe mexicano, escríbenos por WhatsApp y cotiza tu vuelo a Cancún con Agendatur.",
  },
  {
    slug: "punta-cana",
    name: "Punta Cana",
    metaDescription:
      "Cotiza tu vuelo a Punta Cana por WhatsApp con Agendatur, agencia de viajes 100% digital en Colombia (RNT 279917). Comparamos vuelos y hoteles todo incluido.",
    heroSubtitle: "Playa y todo incluido frente al Caribe dominicano.",
    intro:
      "Punta Cana, en República Dominicana, es uno de los destinos todo incluido más populares entre los colombianos que buscan playa sin complicaciones. Con una oferta enorme de resorts frente al mar, es un destino que funciona tanto para luna de miel como para viajes familiares o de amigos. En Agendatur cotizamos tu vuelo a Punta Cana según tu ciudad de origen, comparando las mejores combinaciones disponibles. Te contamos también qué documentos necesitas para entrar a República Dominicana antes de viajar.",
    atractivos:
      "Playa Bávaro, las excursiones a Isla Saona, los deportes acuáticos y una amplia oferta de hoteles todo incluido son parte de lo que hace de Punta Cana un destino tan buscado. Muchos resorts también ofrecen campos de golf, spa y actividades nocturnas, lo que facilita armar un plan completo sin salir del complejo.",
    comoCotizar:
      "Cuéntanos por WhatsApp desde qué ciudad sales y qué fechas tienes en mente, y te armamos la cotización completa de vuelo y hotel todo incluido, sin sorpresas de última hora. Si viajas en grupo o en luna de miel, también te ayudamos a comparar categorías de resort.",
    tip:
      "La mayoría de los hoteles en Punta Cana funcionan bajo el esquema todo incluido, lo que suele hacer más fácil calcular el presupuesto total de tu viaje desde el principio.",
    cierre: "Si buscas un plan de playa sin complicaciones, escríbenos por WhatsApp y cotiza tu vuelo a Punta Cana.",
  },
  {
    slug: "orlando",
    name: "Orlando",
    metaDescription:
      "Cotiza tu vuelo a Orlando por WhatsApp con Agendatur, agencia de viajes 100% digital en Colombia (RNT 279917). Planes familiares a los parques temáticos.",
    heroSubtitle: "Disney, Universal y la magia de los parques temáticos.",
    intro:
      "Orlando es el destino favorito de las familias colombianas que quieren vivir la magia de los parques temáticos: Disney, Universal Studios y muchos más. Es un viaje que requiere buena planeación, y en Agendatur te ayudamos a organizarlo completo: vuelo, hospedaje cerca de los parques y hasta las entradas, cotizando todo según tu ciudad de origen y las fechas que tengas en mente. También te orientamos sobre cuántos días conviene reservar según los parques que quieras visitar.",
    atractivos:
      "Magic Kingdom, Epcot, Universal Studios y los outlets de compras son parte de lo que convierte a Orlando en un destino ideal para viajar en familia. Además de los parques, la ciudad tiene una oferta amplia de hoteles temáticos y restaurantes pensados para el turismo familiar durante todo el año.",
    comoCotizar:
      "Escríbenos por WhatsApp con tu ciudad de salida, cuántas personas viajan y las fechas que manejas, y armamos una cotización a la medida para que disfrutes el viaje sin preocuparte por la logística. Te contamos también qué zona de hospedaje conviene según los parques que quieras visitar.",
    tip:
      "Si viajas con niños, considera comprar las entradas a los parques con anticipación: algunos días se agotan, especialmente en temporada de vacaciones escolares. También conviene revisar el clima de Florida antes de empacar, ya que las lluvias en la tarde son frecuentes en época de verano.",
    cierre: "Si ya estás soñando con los parques de Orlando, escríbenos por WhatsApp y cotiza tu vuelo con Agendatur.",
  },
  {
    slug: "europa",
    name: "Europa",
    metaDescription:
      "Cotiza tu vuelo a Europa por WhatsApp con Agendatur, agencia de viajes 100% digital en Colombia (RNT 279917). Comparamos rutas hacia varias ciudades europeas.",
    heroSubtitle: "París, Madrid y otras ciudades europeas, a tu medida.",
    intro:
      "Europa reúne algunos de los destinos más soñados por los viajeros colombianos: París, Madrid, Roma y muchas ciudades más, cada una con su propia mezcla de historia, arte y gastronomía. Volar a Europa desde Colombia suele implicar una escala, y elegir bien esa conexión puede marcar la diferencia entre un viaje cómodo y uno agotador. En Agendatur te ayudamos a comparar rutas y aerolíneas según la ciudad europea que quieras visitar, tu ciudad de origen en Colombia y tus fechas. También te orientamos sobre los requisitos de entrada según el país o países que planees visitar.",
    atractivos:
      "Desde la Torre Eiffel en París hasta la arquitectura de Madrid, pasando por canales, castillos y pueblos históricos, Europa ofrece un viaje distinto según el país que elijas. Muchos viajeros aprovechan un mismo tiquete para combinar dos o tres ciudades cercanas, moviéndose entre ellas en tren o en vuelos cortos.",
    comoCotizar:
      "Cuéntanos por WhatsApp qué ciudad o ciudades europeas quieres conocer, desde dónde sales y cuántos días tienes disponibles, y te armamos una ruta con las mejores conexiones posibles. También te orientamos sobre cuánto tiempo conviene dejar entre ciudades si vas a visitar más de una.",
    tip:
      "Revisa si necesitas visa Schengen según tu itinerario: el trámite puede tomar varias semanas, así que conviene iniciarlo con tiempo antes de comprar el tiquete.",
    cierre: "Si ya tienes ganas de conocer Europa, escríbenos por WhatsApp y cotiza tu vuelo con Agendatur.",
  },
];

export function getFlightDestinationBySlug(slug: string): FlightDestination | undefined {
  return FLIGHT_DESTINATIONS.find((d) => d.slug === slug);
}

export function buildFlightDestinationMetadata(destination: FlightDestination): Metadata {
  const title = `Vuelos a ${destination.name} | Agendatur (RNT 279917)`;
  const path = `/vuelos-a-${destination.slug}`;

  return {
    title: { absolute: title },
    description: destination.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: destination.metaDescription,
      url: `${SITE_URL}${path}`,
    },
  };
}
