export interface TravelTip {
  id: string;
  icon: string;
  title: string;
  content: string;
  image: string;
}

// Lista separada del diseño: Agendatur puede agregar, quitar o editar tips
// modificando este archivo, sin tocar los componentes.
export const TRAVEL_TIPS: TravelTip[] = [
  {
    id: "documentos",
    icon: "📄",
    title: "Documentos y requisitos",
    content:
      "Revisa la vigencia de tu pasaporte (mínimo 6 meses) y confirma si el destino exige visa o vacunas. Lleva copias digitales y físicas de tus documentos por si acaso.",
    image: "/images/tips/documentos.jpg",
  },
  {
    id: "equipaje",
    icon: "🧳",
    title: "Equipaje inteligente",
    content:
      "Empaca según el clima y la duración del viaje, respeta las medidas y pesos de la aerolínea, y deja espacio para lo que traigas de vuelta. Lleva lo esencial en el equipaje de mano.",
    image: "/images/tips/equipaje.jpg",
  },
  {
    id: "epoca",
    icon: "📅",
    title: "Mejor época para viajar",
    content:
      "Consulta la temporada del destino: viajar en temporada baja suele ser más económico y con menos multitudes. Ten en cuenta clima, festividades y eventos locales.",
    image: "/images/tips/epoca.jpg",
  },
  {
    id: "seguro",
    icon: "🛡️",
    title: "Seguro de viaje",
    content:
      "Viaja siempre con seguro médico y de asistencia. Te cubre imprevistos como enfermedades, cancelaciones o pérdida de equipaje. En Agendatur te ayudamos a incluirlo en tu plan.",
    image: "/images/tips/seguro.jpg",
  },
  {
    id: "dinero",
    icon: "💳",
    title: "Dinero y pagos",
    content:
      "Avisa a tu banco que vas a viajar, lleva algo de efectivo en moneda local y ten una tarjeta de respaldo. Consulta la tasa de cambio antes de salir.",
    image: "/images/tips/dinero.jpg",
  },
  {
    id: "conectividad",
    icon: "📶",
    title: "Conectividad y salud",
    content:
      "Considera una eSIM o chip local para estar comunicado, descarga mapas offline, y lleva tus medicamentos con su fórmula médica.",
    image: "/images/tips/conectividad.jpg",
  },
];
