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

type FieldErrors = Partial<Record<"city" | "date", string>>;

export default function ToursTab() {
  const [city, setCity] = useState<Destination | null>(null);
  const [date, setDate] = useState(todayPlus(14));
  const [people, setPeople] = useState(2);

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [tripSummary, setTripSummary] = useState<TripSummary | null>(null);

  function validate(): FieldErrors {
    const errors: FieldErrors = {};
    if (!city) errors.city = "Selecciona una ciudad o destino.";
    if (!date) errors.date = "Selecciona una fecha.";
    return errors;
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0 || !city) return;

    setTripSummary({
      service: "Tours",
      lines: [
        { label: "Ciudad", value: city.ciudad },
        { label: "Fecha", value: date },
        { label: "Personas", value: `${people}` },
      ],
      text: `Tour en ${city.ciudad}, el ${date}, ${people} persona(s).`,
    });
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <DestinationAutocomplete label="Ciudad o destino" value={city} onChange={setCity} error={fieldErrors.city} />
          <DatePopoverField label="Fecha" value={date} onChange={setDate} error={fieldErrors.date} />
          <PassengerStepper
            label="Personas"
            summary={`${people} persona${people === 1 ? "" : "s"}`}
            counters={[{ key: "people", label: "Personas", value: people, min: 1, max: 20, onChange: setPeople }]}
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
