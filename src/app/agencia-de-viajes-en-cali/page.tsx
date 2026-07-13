import type { Metadata } from "next";
import { getCityBySlug, buildCityMetadata } from "@/data/cities";
import CityLandingContent from "@/components/city-landing/CityLandingContent";

const city = getCityBySlug("cali")!;

export const metadata: Metadata = buildCityMetadata(city);

export default function Page() {
  return <CityLandingContent city={city} />;
}
