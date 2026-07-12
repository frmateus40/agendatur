"use client";

import { useState } from "react";
import DestinationAutocomplete from "../DestinationAutocomplete";
import DatePopoverField from "../DatePopoverField";
import PassengerStepper from "../PassengerStepper";
import SearchButton from "../SearchButton";
import QuoteModal from "@/components/quote/QuoteModal";
import type { TripSummary } from "@/components/quote/types";
import type { Destination } from "@/data/destinations";

function todayPlus(days: number) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

type FieldErrors = Partial<Record<"city" | "checkInDate" | "checkOutDate", string>>;

export default function HotelsTab() {
  const [city, setCity] = useState<Destination | null>(null);
  const [checkInDate, setCheckInDate] = useState(todayPlus(14));
  const [checkOutDate, setCheckOutDate] = useState(todayPlus(17));
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [tripSummary, setTripSummary] = useState<TripSummary | null>(null);

  function validate(): FieldErrors {
    const errors: FieldErrors = {};
    if (!city) errors.city = "Selecciona una ciudad o destino.";
    if (!checkInDate) errors.checkInDate = "Selecciona la fecha de check-in.";
    if (checkOutDate <= checkInDate) errors.checkOutDate = "El check-out debe ser posterior al check-in.";
    return errors;
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0 || !city) return;

    const totalGuests = adults + children;

    setTripSummary({
      service: "Hoteles",
      lines: [
        { label: "Ciudad", value: city.ciudad },
        { label: "Check-in", value: checkInDate },
        { label: "Check-out", value: checkOutDate },
        { label: "Habitaciones", value: `${rooms}` },
        { label: "Huéspedes", value: `${totalGuests}` },
      ],
      text: `Hotel en ${city.ciudad}, del ${checkInDate} al ${checkOutDate}, ${totalGuests} huésped(es) en ${rooms} habitación(es).`,
    });
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          <DestinationAutocomplete label="Ciudad o destino" value={city} onChange={setCity} error={fieldErrors.city} />
          <DatePopoverField
            label="Check-in"
            value={checkInDate}
            onChange={setCheckInDate}
            error={fieldErrors.checkInDate}
          />
          <DatePopoverField
            label="Check-out"
            value={checkOutDate}
            onChange={setCheckOutDate}
            minDate={checkInDate}
            error={fieldErrors.checkOutDate}
          />
          <PassengerStepper
            label="Habitaciones / Huéspedes"
            summary={`${rooms} hab. · ${adults + children} huésped${adults + children === 1 ? "" : "es"}`}
            counters={[
              { key: "rooms", label: "Habitaciones", value: rooms, min: 1, max: 6, onChange: setRooms },
              { key: "adults", label: "Adultos", value: adults, min: 1, max: 12, onChange: setAdults },
              { key: "children", label: "Niños", value: children, min: 0, max: 8, onChange: setChildren },
            ]}
          />
        </div>

        <SearchButton />
      </form>

      {tripSummary && (
        <QuoteModal open={tripSummary !== null} onClose={() => setTripSummary(null)} tripSummary={tripSummary} />
      )}
    </div>
  );
}
