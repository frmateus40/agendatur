import rawDestinations from "./destinations.json";

export interface Destination {
  id: string;
  ciudad: string;
  pais: string;
  iata?: string;
  tipo: "ciudad" | "aeropuerto";
}

interface RawDestination {
  ciudad: string;
  pais: string;
  iata?: string;
  tipo: "ciudad" | "aeropuerto";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-");
}

// Base de datos local de ciudades/aeropuertos (src/data/destinations.json).
// No se hace ninguna petición externa: para agregar o quitar destinos basta
// con editar ese archivo JSON, sin tocar este loader ni los componentes.
export const DESTINATIONS: Destination[] = (rawDestinations as RawDestination[]).map((d) => ({
  ...d,
  id: d.iata ?? slugify(`${d.ciudad}-${d.pais}`),
}));

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

const MAX_RESULTS = 8;

export function searchDestinationsLocal(query: string): Destination[] {
  const q = normalize(query.trim());
  if (q.length < 1) return [];

  return DESTINATIONS.filter((d) => {
    return (
      normalize(d.ciudad).includes(q) ||
      normalize(d.pais).includes(q) ||
      (d.iata && normalize(d.iata).includes(q))
    );
  }).slice(0, MAX_RESULTS);
}
