export interface CompanyValue {
  id: string;
  title: string;
  description: string;
}

// Textos separados del diseño: fáciles de editar para ajustar la voz de Agendatur.
export const ABOUT_INTRO =
  "Agendatur es una agencia de viajes 100% digital en Colombia. Somos cercanos y confiables: diseñamos experiencias de viaje a la medida de cada cliente y lo acompañamos de principio a fin, desde la primera idea hasta el regreso a casa. RNT 279917.";

export const MISSION =
  "Hacer realidad los sueños de viaje de nuestros clientes ofreciendo experiencias personalizadas, seguras y memorables, con asesoría cercana y 100% digital que facilita cada paso, desde la inspiración hasta el regreso a casa.";

export const VISION =
  "Ser para el año 2030 una de las agencias de viajes digitales líderes en Colombia, reconocida por la calidad de su servicio, la confianza que genera y la capacidad de crear experiencias de viaje únicas para cada cliente.";

export const VALUES: CompanyValue[] = [
  {
    id: "cercania",
    title: "Cercanía",
    description: "Acompañamos a cada viajero de forma personal y humana.",
  },
  {
    id: "confianza",
    title: "Confianza",
    description: "Transparencia y seguridad en cada reserva.",
  },
  {
    id: "excelencia",
    title: "Excelencia",
    description: "Buscamos la mejor experiencia en cada detalle.",
  },
  {
    id: "pasion",
    title: "Pasión por viajar",
    description: "Amamos lo que hacemos y lo transmitimos.",
  },
  {
    id: "responsabilidad",
    title: "Responsabilidad",
    description: "Cumplimos y respondemos por cada compromiso.",
  },
];
