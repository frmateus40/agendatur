"use client";

import { useEffect, useRef, useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isBefore,
  isSameDay,
  parseISO,
  startOfDay,
  startOfMonth,
  subMonths,
} from "date-fns";
import { es } from "date-fns/locale";
import { IconCalendar, IconChevronLeft, IconChevronRight } from "./icons";

interface DatePopoverFieldProps {
  label: string;
  value: string; // yyyy-MM-dd
  onChange: (value: string) => void;
  minDate?: string; // yyyy-MM-dd
  error?: string;
}

const WEEKDAYS = ["L", "M", "X", "J", "V", "S", "D"];

export default function DatePopoverField({ label, value, onChange, minDate, error }: DatePopoverFieldProps) {
  const [open, setOpen] = useState(false);
  const selectedDate = value ? parseISO(value) : null;
  const [visibleMonth, setVisibleMonth] = useState(() => startOfMonth(selectedDate ?? new Date()));

  const rootRef = useRef<HTMLDivElement>(null);
  const min = minDate ? startOfDay(parseISO(minDate)) : startOfDay(new Date());

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const monthStart = startOfMonth(visibleMonth);
  const monthEnd = endOfMonth(visibleMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const leadingBlanks = (getDay(monthStart) + 6) % 7; // lunes=0

  return (
    <div ref={rootRef} className="relative flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-600">{label}</label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`relative w-full rounded-lg border py-2.5 pl-9 pr-3 text-left text-sm text-gray-800 transition-colors focus:border-brand-primary-medium focus:outline-none focus:ring-2 focus:ring-brand-primary-medium/20 ${
          error ? "border-red-400" : "border-gray-200"
        }`}
      >
        <IconCalendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        {selectedDate ? format(selectedDate, "d MMM yyyy", { locale: es }) : "Selecciona fecha"}
      </button>

      {error && <p className="text-xs text-red-600">{error}</p>}

      {open && (
        <div className="absolute top-full z-30 mt-1 w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
          <div className="flex items-center justify-between">
            <button
              type="button"
              aria-label="Mes anterior"
              onClick={() => setVisibleMonth((m) => subMonths(m, 1))}
              className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100"
            >
              <IconChevronLeft className="h-4 w-4" />
            </button>
            <p className="text-sm font-semibold capitalize text-gray-800">
              {format(visibleMonth, "MMMM yyyy", { locale: es })}
            </p>
            <button
              type="button"
              aria-label="Mes siguiente"
              onClick={() => setVisibleMonth((m) => addMonths(m, 1))}
              className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100"
            >
              <IconChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-400">
            {WEEKDAYS.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-1">
            {Array.from({ length: leadingBlanks }).map((_, i) => (
              <span key={`blank-${i}`} />
            ))}
            {days.map((day) => {
              const disabled = isBefore(day, min);
              const selected = selectedDate ? isSameDay(day, selectedDate) : false;
              return (
                <button
                  key={day.toISOString()}
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    onChange(format(day, "yyyy-MM-dd"));
                    setOpen(false);
                  }}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors ${
                    disabled
                      ? "cursor-not-allowed text-gray-300"
                      : selected
                        ? "bg-brand-primary text-white"
                        : "text-gray-700 hover:bg-brand-primary-medium/10"
                  }`}
                >
                  {format(day, "d")}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
