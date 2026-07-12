export interface TripSummary {
  /** Nombre del servicio, ej. "Vuelos", "Hoteles" */
  service: string;
  /** Pares label/valor para mostrar en el resumen de solo lectura */
  lines: { label: string; value: string }[];
  /** Resumen en una sola línea, usado en el mensaje de WhatsApp/correo y en Calendly */
  text: string;
}
