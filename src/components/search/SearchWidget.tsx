"use client";

import FlightsTab from "./tabs/FlightsTab";
import HotelsTab from "./tabs/HotelsTab";
import CarsTab from "./tabs/CarsTab";
import ToursTab from "./tabs/ToursTab";
import FlightHotelTab from "./tabs/FlightHotelTab";
import { IconCar, IconCompass, IconFlightHotel, IconHotel, IconPlane } from "./icons";
import { useSearchTab, TAB_SLUGS, type SearchTabId } from "@/contexts/SearchTabContext";

const SERVICES: { id: SearchTabId; label: string; icon: typeof IconPlane }[] = [
  { id: "flights", label: "Vuelos", icon: IconPlane },
  { id: "hotels", label: "Hoteles", icon: IconHotel },
  { id: "cars", label: "Autos", icon: IconCar },
  { id: "tours", label: "Tours", icon: IconCompass },
  { id: "flight-hotel", label: "Vuelos + Hotel", icon: IconFlightHotel },
];

// Cada buscador es un bloque independiente con sus propios campos; el menú
// del header decide cuál de estos se muestra, aquí no hay pestañas propias.
export default function SearchWidget() {
  const { activeTab } = useSearchTab();
  const service = SERVICES.find((s) => s.id === activeTab) ?? SERVICES[0];
  const Icon = service.icon;

  return (
    <section id="buscador" className="relative z-10 mx-auto -mt-24 max-w-6xl scroll-mt-28 px-4 md:-mt-20">
      <div
        key={activeTab}
        id={TAB_SLUGS[activeTab]}
        role="region"
        aria-label={`Buscador de ${service.label}`}
        className="animate-fade-in scroll-mt-28 rounded-2xl bg-white p-5 shadow-2xl md:p-8"
      >
        <div className="mb-5 flex items-center gap-2 text-brand-primary">
          <Icon className="h-5 w-5" />
          <h2 className="text-base font-bold uppercase tracking-wide">Buscador de {service.label}</h2>
        </div>

        {activeTab === "flights" && <FlightsTab />}
        {activeTab === "hotels" && <HotelsTab />}
        {activeTab === "cars" && <CarsTab />}
        {activeTab === "tours" && <ToursTab />}
        {activeTab === "flight-hotel" && <FlightHotelTab />}
      </div>
    </section>
  );
}
