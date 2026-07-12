"use client";

import { useState } from "react";
import DestinationAutocomplete from "../DestinationAutocomplete";
import DatePopoverField from "../DatePopoverField";
import SearchButton from "../SearchButton";
import QuoteModal from "@/components/quote/QuoteModal";
import type { TripSummary } from "@/components/quote/types";
import type { Destination } from "@/data/destinations";

function todayPlus(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

type FieldErrors = Partial<Record<"pickupCity" | "dropoffCity" | "pickupDate" | "dropoffDate", string>>;

export default function CarsTab() {
  const [pickupCity, setPickupCity] = useState<Destination | null>(null);
  const [dropoffCity, setDropoffCity] = useState<Destination | null>(null);
  const [pickupDate, setPickupDate] = useState(todayPlus(14));
  const [pickupTime, setPickupTime] = useState("10:00");
  const [dropoffDate, setDropoffDate] = useState(todayPlus(17));
  const [dropoffTime, setDropoffTime] = useState("10:00");

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [tripSummary, setTripSummary] = useState<TripSummary | null>(null);

  function validate(): FieldErrors {
    const errors: FieldErrors = {};
    if (!pickupCity) errors.pickupCity = "Selecciona la ciudad de recogida.";
    if (!dropoffCity) errors.dropoffCity = "Selecciona la ciudad de entrega.";
    if (!pickupDate) errors.pickupDate = "Selecciona la fecha de recogida.";
    if (dropoffDate < pickupDate) errors.dropoffDate = "La entrega no puede ser antes de la recogida.";
    return errors;
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0 || !pickupCity || !dropoffCity) return;

    setTripSummary({
      service: "Autos",
      lines: [
        { label: "Recogida", value: `${pickupCity.ciudad} · ${pickupDate} ${pickupTime}` },
        { label: "Entrega", value: `${dropoffCity.ciudad} · ${dropoffDate} ${dropoffTime}` },
      ],
      text: `Auto con recogida en ${pickupCity.ciudad} (${pickupDate} ${pickupTime}) y entrega en ${dropoffCity.ciudad} (${dropoffDate} ${dropoffTime}).`,
    });
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <DestinationAutocomplete
            label="Ciudad de recogida"
            value={pickupCity}
            onChange={setPickupCity}
            error={fieldErrors.pickupCity}
          />
          <DestinationAutocomplete
            label="Ciudad de entrega"
            value={dropoffCity}
            onChange={setDropoffCity}
            error={fieldErrors.dropoffCity}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="flex gap-2">
            <div className="flex-1">
              <DatePopoverField
                label="Fecha de recogida"
                value={pickupDate}
                onChange={setPickupDate}
                error={fieldErrors.pickupDate}
              />
            </div>
            <div className="flex w-28 flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600">Hora</label>
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-primary-medium focus:outline-none focus:ring-2 focus:ring-brand-primary-medium/20"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <DatePopoverField
                label="Fecha de entrega"
                value={dropoffDate}
                onChange={setDropoffDate}
                minDate={pickupDate}
                error={fieldErrors.dropoffDate}
              />
            </div>
            <div className="flex w-28 flex-col gap-1">
              <label className="text-xs font-semibold text-gray-600">Hora</label>
              <input
                type="time"
                value={dropoffTime}
                onChange={(e) => setDropoffTime(e.target.value)}
                className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-primary-medium focus:outline-none focus:ring-2 focus:ring-brand-primary-medium/20"
              />
            </div>
          </div>
        </div>

        <SearchButton />
      </form>

      {tripSummary && (
        <QuoteModal open={tripSummary !== null} onClose={() => setTripSummary(null)} tripSummary={tripSummary} />
      )}
    </div>
  );
}
