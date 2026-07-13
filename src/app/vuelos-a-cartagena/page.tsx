import type { Metadata } from "next";
import { getFlightDestinationBySlug, buildFlightDestinationMetadata } from "@/data/flight-destinations";
import FlightDestinationContent from "@/components/flight-destinations/FlightDestinationContent";

const destination = getFlightDestinationBySlug("cartagena")!;

export const metadata: Metadata = buildFlightDestinationMetadata(destination);

export default function Page() {
  return <FlightDestinationContent destination={destination} />;
}
