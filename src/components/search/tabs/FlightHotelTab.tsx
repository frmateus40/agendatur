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

type FieldErrors = Partial<Record<"origin" | "destination" | "checkInDate" | "checkOutDate", string>>;

export default function FlightHotelTab() {
  const [origin, setOrigin] = useState<Destination | null>(null);
  const [destination, setDestination] = useState<Destination | null>(null);
  const [checkInDate, setCheckInDate] = useState(todayPlus(14));
  const [checkOutDate, setCheckOutDate] = useState(todayPlus(21));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [tripSummary, setTripSummary] = useState<TripSummary | null>(null);

  function validate(): FieldErrors {
    const errors: FieldErrors = {};
    if (!origin) errors.origin = "Selecciona una ciudad de origen.";
    if (!destination) errors.destination = "Selecciona una ciudad de destino.";
    if (origin && destination && origin.id === destination.id) {
      errors.destination = "El destino no puede ser igual al origen.";
    }
    if (!checkInDate) errors.checkInDate = "Selecciona la fecha de ida.";
    if (checkOutDate <= checkInDate) errors.checkOutDate = "El regreso debe ser posterior a la ida.";
    return errors;
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0 || !origin || !destination) return;

    const totalPassengers = adults + children;

    setTripSummary({
      service: "Vuelo + Hotel",
      lines: [
        { label: "Origen", value: origin.ciudad },
        { label: "Destino", value: destination.ciudad },
        { label: "Check-in", value: checkInDate },
        { label: "Check-out", value: checkOutDate },
        { label: "Pasajeros", value: `${totalPassengers}` },
      ],
      text: `Plan de vuelo + hotel de ${origin.ciudad} a ${destination.ciudad}, del ${checkInDate} al ${checkOutDate}, ${totalPassengers} pasajero(s).`,
    });
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <DestinationAutocomplete label="Origen" value={origin} onChange={setOrigin} error={fieldErrors.origin} />
          <DestinationAutocomplete
            label="Destino"
            value={destination}
            onChange={setDestination}
            error={fieldErrors.destination}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
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
            label="Pasajeros"
            summary={`${adults + children} pasajero${adults + children === 1 ? "" : "s"}`}
            counters={[
              { key: "adults", label: "Adultos", value: adults, min: 1, max: 9, onChange: setAdults },
              { key: "children", label: "Niños", value: children, min: 0, max: 9, onChange: setChildren },
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
