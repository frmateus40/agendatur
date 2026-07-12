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

type FieldErrors = Partial<Record<"origin" | "destination" | "departureDate" | "returnDate", string>>;

export default function FlightsTab() {
  const [tripType, setTripType] = useState<"roundtrip" | "oneway">("roundtrip");
  const [origin, setOrigin] = useState<Destination | null>(null);
  const [destination, setDestination] = useState<Destination | null>(null);
  const [departureDate, setDepartureDate] = useState(todayPlus(14));
  const [returnDate, setReturnDate] = useState(todayPlus(21));
  const [cabin, setCabin] = useState<"ECONOMY" | "BUSINESS">("ECONOMY");
  const [adults, setAdults] = useState(1);
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
    if (!departureDate) errors.departureDate = "Selecciona la fecha de ida.";
    if (tripType === "roundtrip" && returnDate < departureDate) {
      errors.returnDate = "La fecha de regreso no puede ser antes de la de ida.";
    }
    return errors;
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0 || !origin || !destination) return;

    const totalPassengers = adults + children;
    const cabinLabel = cabin === "ECONOMY" ? "Económica" : "Ejecutiva";

    setTripSummary({
      service: "Vuelos",
      lines: [
        { label: "Origen", value: origin.ciudad },
        { label: "Destino", value: destination.ciudad },
        { label: "Fecha de ida", value: departureDate },
        ...(tripType === "roundtrip" ? [{ label: "Fecha de regreso", value: returnDate }] : []),
        { label: "Pasajeros", value: `${totalPassengers}` },
        { label: "Cabina", value: cabinLabel },
      ],
      text:
        tripType === "roundtrip"
          ? `Vuelo de ${origin.ciudad} a ${destination.ciudad}, del ${departureDate} al ${returnDate}, ${totalPassengers} pasajero(s), clase ${cabinLabel}.`
          : `Vuelo solo ida de ${origin.ciudad} a ${destination.ciudad}, el ${departureDate}, ${totalPassengers} pasajero(s), clase ${cabinLabel}.`,
    });
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="space-y-4" noValidate>
        <div className="flex gap-5 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={tripType === "roundtrip"}
              onChange={() => setTripType("roundtrip")}
              className="accent-brand-primary-medium"
            />
            Ida y vuelta
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={tripType === "oneway"}
              onChange={() => setTripType("oneway")}
              className="accent-brand-primary-medium"
            />
            Solo ida
          </label>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <DestinationAutocomplete
            label="Origen"
            value={origin}
            onChange={setOrigin}
            error={fieldErrors.origin}
          />
          <DestinationAutocomplete
            label="Destino"
            value={destination}
            onChange={setDestination}
            error={fieldErrors.destination}
          />
        </div>

        <div className={`grid grid-cols-1 gap-3 ${tripType === "roundtrip" ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          <DatePopoverField
            label="Fecha de ida"
            value={departureDate}
            onChange={setDepartureDate}
            error={fieldErrors.departureDate}
          />
          {tripType === "roundtrip" && (
            <DatePopoverField
              label="Fecha de regreso"
              value={returnDate}
              onChange={setReturnDate}
              minDate={departureDate}
              error={fieldErrors.returnDate}
            />
          )}
          <PassengerStepper
            label="Pasajeros / Cabina"
            summary={`${adults + children} pasajero${adults + children === 1 ? "" : "s"} · ${
              cabin === "ECONOMY" ? "Económica" : "Ejecutiva"
            }`}
            counters={[
              { key: "adults", label: "Adultos", hint: "13 años o más", value: adults, min: 1, max: 9, onChange: setAdults },
              { key: "children", label: "Niños", hint: "2 a 12 años", value: children, min: 0, max: 9, onChange: setChildren },
            ]}
            extra={
              <div>
                <p className="mb-2 text-sm font-medium text-gray-800">Cabina</p>
                <div className="flex gap-2">
                  {(["ECONOMY", "BUSINESS"] as const).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCabin(c)}
                      className={`flex-1 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                        cabin === c
                          ? "border-brand-primary bg-brand-primary text-white"
                          : "border-gray-200 text-gray-600 hover:border-brand-primary-medium"
                      }`}
                    >
                      {c === "ECONOMY" ? "Económica" : "Ejecutiva"}
                    </button>
                  ))}
                </div>
              </div>
            }
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
