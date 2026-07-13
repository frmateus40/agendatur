import type { Metadata } from "next";
import { SITE_URL } from "@/data/seo";

export interface CityLanding {
  slug: string;
  name: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  salidas: string;
  destinosIntro: string;
  destinosNacionales: string[];
  destinosInternacionales: string[];
  cierre: string;
  airport: {
    code: string;
    name: string;
    location: string;
  };
}

// Contenido único por ciudad — cada texto está redactado por separado
// (no es una plantilla con el nombre reemplazado) para evitar contenido
// duplicado ante buscadores. Editable libremente.
export const CITIES: CityLanding[] = [
  {
    slug: "bogota",
    name: "Bogotá",
    metaDescription:
      "Agencia de viajes en Bogotá 100% digital. Cotiza vuelos y paquetes desde El Dorado (BOG) por WhatsApp con Agendatur, RNT 279917.",
    heroSubtitle: "Conexiones a todo el mundo desde el aeropuerto más importante del país.",
    intro:
      "Bogotá es la puerta de entrada de Colombia al mundo. Desde el Aeropuerto Internacional El Dorado (BOG), el más importante del país, salen a diario vuelos hacia Norteamérica, Europa, Suramérica y el Caribe, lo que convierte a la capital en el punto de partida ideal para casi cualquier destino que tengas en mente. En Agendatur trabajamos con viajeros bogotanos que buscan desde una escapada de fin de semana hasta un plan internacional de varias semanas, y aprovechamos justamente esa ventaja: la cantidad de conexiones directas que ofrece El Dorado nos permite armar itinerarios más cortos, con menos escalas y mayor flexibilidad de fechas. Si vives en Bogotá y quieres viajar sin complicarte con cotizaciones dispersas ni comparar precios en veinte pestañas del navegador, te acompañamos de forma 100% digital, desde la primera pregunta por WhatsApp hasta el día de tu vuelo.",
    salidas:
      "El Dorado conecta a Bogotá con más destinos directos que cualquier otro aeropuerto del país, lo que se traduce en más opciones de horarios y aerolíneas para tu viaje. Ya sea que quieras un vuelo directo a una capital europea o una conexión rápida hacia el Caribe, coordinamos la mejor combinación disponible según tu presupuesto y tus fechas.",
    destinosIntro:
      "Desde Bogotá vemos de todo: familias que quieren un plan todo incluido en el Caribe, parejas armando su primer viaje a Europa y grupos de amigos buscando una escapada nacional de puente festivo. Estos son algunos de los destinos que más cotizan los bogotanos con nosotros.",
    destinosNacionales: ["San Andrés", "Cartagena", "Santa Marta", "Eje Cafetero"],
    destinosInternacionales: ["Cancún", "Punta Cana", "Madrid", "Orlando"],
    cierre:
      "No importa si buscas un tiquete sencillo o un plan completo con hotel y traslados: en Agendatur cotizamos tu viaje desde Bogotá por WhatsApp, comparamos opciones por ti y te acompañamos hasta que tengas tu reserva confirmada.",
    airport: { code: "BOG", name: "Aeropuerto Internacional El Dorado", location: "Bogotá" },
  },
  {
    slug: "medellin",
    name: "Medellín",
    metaDescription:
      "Agencia de viajes en Medellín 100% digital. Cotiza vuelos desde José María Córdova (MDE) por WhatsApp con Agendatur, RNT 279917.",
    heroSubtitle: "Escapadas al Caribe y Europa desde José María Córdova.",
    intro:
      "Medellín tiene fama de ser una de las ciudades más viajeras de Colombia, y no es casualidad: desde el Aeropuerto Internacional José María Córdova (MDE), en Rionegro, salen vuelos frecuentes hacia el Caribe y hacia varios destinos de Europa, lo que ha hecho que cada vez más paisas prefieran escapadas cortas de pocos días en vez de esperar las vacaciones largas del año. En Agendatur entendemos esa forma de viajar: te ayudamos a armar planes ágiles, de fin de semana o de una semana, aprovechando las salidas frecuentes desde MDE hacia playas cercanas o ciudades europeas, sin que tengas que perder horas comparando opciones por tu cuenta. Ya sea tu primer viaje internacional o una escapada exprés al Caribe, cotizamos tu plan por WhatsApp y te acompañamos en cada paso, desde la selección del destino hasta la reserva final.",
    salidas:
      "El aeropuerto José María Córdova, ubicado en Rionegro a las afueras de la ciudad, ha crecido en conexiones internacionales en los últimos años, especialmente hacia el Caribe y Europa. Aprovechamos esa oferta creciente de vuelos para armar planes que se ajusten a tu tiempo disponible, sin sacrificar comodidad ni itinerario.",
    destinosIntro:
      "Los paisas suelen combinar dos tipos de viaje: la escapada corta de playa para desconectarse un fin de semana, y el viaje internacional más elaborado para conocer una ciudad nueva. Estos son los destinos que más nos piden cotizar desde Medellín.",
    destinosNacionales: ["Cartagena", "San Andrés", "Guajira", "Eje Cafetero"],
    destinosInternacionales: ["Punta Cana", "Curazao", "Madrid", "París"],
    cierre:
      "Si vives en Medellín y ya tienes ganas de tu próxima escapada, escríbenos por WhatsApp. Te ayudamos a comparar vuelos desde MDE, armar el plan completo y resolver tus dudas sin necesidad de una cita presencial.",
    airport: { code: "MDE", name: "Aeropuerto Internacional José María Córdova", location: "Rionegro" },
  },
  {
    slug: "cartagena",
    name: "Cartagena",
    metaDescription:
      "Agencia de viajes en Cartagena 100% digital. Cotiza tu plan desde Rafael Núñez (CTG) por WhatsApp con Agendatur, RNT 279917.",
    heroSubtitle: "Tu próxima escapada desde el corazón del Caribe colombiano.",
    intro:
      "Cartagena es, a la vez, uno de los destinos más buscados de Colombia y una ciudad desde la que también salen muchos viajeros. Si vives en Cartagena y quieres conocer otro lugar, el Aeropuerto Internacional Rafael Núñez (CTG) te conecta con el resto del país y con varios destinos internacionales del Caribe. Y si estás planeando traer a tu familia o pareja a conocer Cartagena, en Agendatur también armamos ese plan completo: hospedaje, traslados y actividades dentro y fuera de la ciudad amurallada. Trabajamos con cartageneros que buscan su próxima escapada y con viajeros de otras ciudades que sueñan con conocer el Caribe colombiano, así que sin importar en qué dirección estés viajando, cotizamos tu plan 100% por WhatsApp, sin necesidad de visitarnos en una oficina.",
    salidas:
      "Desde el Aeropuerto Rafael Núñez salen vuelos nacionales hacia las principales ciudades del país y conexiones internacionales hacia varios destinos del Caribe. Si vives en Cartagena y quieres una escapada corta o un viaje internacional, coordinamos las mejores opciones de vuelo disponibles desde tu propio aeropuerto.",
    destinosIntro:
      "Como cartagenero tienes el Caribe en la puerta de tu casa, así que muchos de nuestros clientes locales prefieren aprovechar esa cercanía para otros destinos del Caribe o para conocer el interior del país. Estos son los planes que más cotizan desde Cartagena.",
    destinosNacionales: ["San Andrés", "Santa Marta", "Medellín", "Bogotá"],
    destinosInternacionales: ["Punta Cana", "Curazao", "Panamá", "Cancún"],
    cierre:
      "Ya sea que vivas en Cartagena y quieras salir de vacaciones, o que estés organizando la visita de alguien más a la ciudad, cotiza tu plan por WhatsApp y te damos opciones reales según tu presupuesto y tus fechas.",
    airport: { code: "CTG", name: "Aeropuerto Internacional Rafael Núñez", location: "Cartagena" },
  },
  {
    slug: "cali",
    name: "Cali",
    metaDescription:
      "Agencia de viajes en Cali 100% digital. Cotiza vuelos desde Alfonso Bonilla Aragón (CLO) por WhatsApp con Agendatur, RNT 279917.",
    heroSubtitle: "La puerta del Pacífico hacia el resto del mundo.",
    intro:
      "Cali es la puerta del suroccidente colombiano hacia el Pacífico y hacia el resto del mundo. El Aeropuerto Internacional Alfonso Bonilla Aragón (CLO), ubicado en Palmira, ofrece conexiones nacionales e internacionales que hacen de la capital del Valle un buen punto de partida tanto para descansos cortos como para viajes más largos. En Agendatur trabajamos con caleños que buscan aprovechar esas rutas, ya sea para una escapada de playa cercana o para un viaje internacional bien planeado. Sabemos que cada viajero tiene un presupuesto y un tiempo distinto, así que armamos el plan a tu medida: te ayudamos a comparar fechas, aerolíneas y combinaciones desde CLO, y cotizamos todo por WhatsApp, sin filas ni papeleo presencial.",
    salidas:
      "El aeropuerto Alfonso Bonilla Aragón, en Palmira, conecta a Cali con las principales ciudades de Colombia y con varios destinos internacionales, especialmente hacia Centroamérica y el Caribe. Aprovechamos esas rutas disponibles para armar tu itinerario ideal, sin que tengas que investigar aerolínea por aerolínea.",
    destinosIntro:
      "Desde Cali vemos mucho interés por el Pacífico y por el Caribe colombiano como escapadas cercanas, además de destinos internacionales de playa para quienes buscan algo distinto. Estos son los planes que más cotizan los caleños con nosotros.",
    destinosNacionales: ["San Andrés", "Cartagena", "Eje Cafetero", "Guajira"],
    destinosInternacionales: ["Panamá", "Cancún", "Punta Cana", "Madrid"],
    cierre:
      "Si vives en Cali y quieres empezar a planear tu próximo viaje, escríbenos por WhatsApp. Revisamos las opciones disponibles desde CLO y te armamos una cotización clara, sin letra pequeña ni sorpresas.",
    airport: { code: "CLO", name: "Aeropuerto Internacional Alfonso Bonilla Aragón", location: "Palmira" },
  },
  {
    slug: "barranquilla",
    name: "Barranquilla",
    metaDescription:
      "Agencia de viajes en Barranquilla 100% digital. Cotiza tu plan desde Ernesto Cortissoz (BAQ) por WhatsApp con Agendatur, RNT 279917.",
    heroSubtitle: "Escapadas de playa y planes de Carnaval desde el Caribe.",
    intro:
      "Barranquilla vive el Caribe todo el año, y eso se nota en cómo viajan sus habitantes: escapadas de playa cortas, planes para el Carnaval y salidas internacionales hacia el resto de la región. Desde el Aeropuerto Internacional Ernesto Cortissoz (BAQ), en Soledad, hay conexiones frecuentes hacia destinos del Caribe y Centroamérica que se ajustan perfectamente a ese estilo de viaje relámpago que tanto le gusta al barranquillero. En Agendatur armamos planes de playa, de Carnaval o de descanso para quienes viven en Barranquilla y quieren algo distinto sin gastar meses planeándolo. Cotiza tu viaje por WhatsApp y te ayudamos a encontrar la mejor combinación de vuelo, fechas y presupuesto disponible desde BAQ.",
    salidas:
      "El aeropuerto Ernesto Cortissoz, en Soledad, tiene buena conectividad con el Caribe y Centroamérica, ideal para escapadas cortas de playa o planes de temporada alta como el Carnaval. Te ayudamos a encontrar la mejor opción disponible según tus fechas.",
    destinosIntro:
      "Entre semanas de Carnaval y fines de semana de playa, los barranquilleros suelen buscar planes cortos y bien organizados. Estos son algunos de los destinos favoritos que cotizamos con más frecuencia desde Barranquilla.",
    destinosNacionales: ["Cartagena", "San Andrés", "Santa Marta", "Eje Cafetero"],
    destinosInternacionales: ["Punta Cana", "Curazao", "Panamá", "Cancún"],
    cierre:
      "Si vives en Barranquilla y ya estás pensando en tu próxima salida, cuéntanos por WhatsApp qué tienes en mente. Te ayudamos a encontrar vuelos desde BAQ y armamos el plan completo, sin trámites presenciales.",
    airport: { code: "BAQ", name: "Aeropuerto Internacional Ernesto Cortissoz", location: "Soledad" },
  },
  {
    slug: "santa-marta",
    name: "Santa Marta",
    metaDescription:
      "Agencia de viajes en Santa Marta 100% digital. Cotiza tu plan desde Simón Bolívar (SMR) por WhatsApp con Agendatur, RNT 279917.",
    heroSubtitle: "Playa, Tayrona y salidas desde el Caribe colombiano.",
    intro:
      "Santa Marta es sinónimo de playa, con el Parque Tayrona y El Rodadero como sus grandes atractivos, pero también es una ciudad desde la que salen viajeros hacia el resto del país y del mundo. El Aeropuerto Internacional Simón Bolívar (SMR) conecta a Santa Marta con las principales ciudades colombianas, lo que la convierte en un buen punto de partida si quieres conocer otro destino sin necesidad de pasar primero por Bogotá o Medellín. En Agendatur trabajamos tanto con quienes quieren recibir visitantes en Santa Marta —armando el hospedaje y las excursiones a Tayrona o Rodadero— como con samarios que buscan su próxima escapada. Todo se cotiza por WhatsApp, sin trámites presenciales ni letra pequeña.",
    salidas:
      "Desde el Aeropuerto Simón Bolívar salen vuelos directos hacia las principales ciudades de Colombia, lo que facilita planear una escapada nacional sin escalas largas. Te ayudamos a encontrar el mejor horario y tarifa disponible según tu destino.",
    destinosIntro:
      "Muchos samarios combinan sus viajes con visitas familiares en otras ciudades, mientras que otros aprovechan la conexión con el interior del país para escapadas de montaña o de ciudad. Estos son los destinos más consultados desde Santa Marta.",
    destinosNacionales: ["Bogotá", "Medellín", "San Andrés", "Eje Cafetero"],
    destinosInternacionales: ["Panamá", "Cancún", "Punta Cana", "Madrid"],
    cierre:
      "Si vives en Santa Marta y quieres cotizar tu próximo viaje —o el de alguien que viene a visitarte—, escríbenos por WhatsApp. Te damos opciones claras de vuelo y hospedaje sin necesidad de pasar por una oficina.",
    airport: { code: "SMR", name: "Aeropuerto Internacional Simón Bolívar", location: "Santa Marta" },
  },
];

export function getCityBySlug(slug: string): CityLanding | undefined {
  return CITIES.find((city) => city.slug === slug);
}

export function buildCityMetadata(city: CityLanding): Metadata {
  const title = `Agencia de viajes en ${city.name} | Agendatur (RNT 279917)`;
  const path = `/agencia-de-viajes-en-${city.slug}`;

  return {
    // El layout raíz añade "| Agendatur" vía title.template a cualquier
    // string; se usa "absolute" para que este título completo (que ya
    // incluye la marca y el RNT) se use tal cual, sin duplicar el sufijo.
    title: { absolute: title },
    description: city.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: city.metaDescription,
      url: `${SITE_URL}${path}`,
    },
  };
}
