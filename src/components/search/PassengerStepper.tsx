"use client";

import { useEffect, useRef, useState } from "react";
import { IconMinus, IconPlus, IconUsers } from "./icons";

export interface CounterConfig {
  key: string;
  label: string;
  hint?: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

interface PassengerStepperProps {
  label: string;
  summary: string;
  counters: CounterConfig[];
  extra?: React.ReactNode;
}

export default function PassengerStepper({ label, summary, counters, extra }: PassengerStepperProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={rootRef} className="relative flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-600">{label}</label>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="relative w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-3 text-left text-sm text-gray-800 transition-colors focus:border-brand-primary-medium focus:outline-none focus:ring-2 focus:ring-brand-primary-medium/20"
      >
        <IconUsers className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        {summary}
      </button>

      {open && (
        <div className="absolute top-full z-30 mt-1 w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
          <div className="space-y-4">
            {counters.map((counter) => (
              <div key={counter.key} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">{counter.label}</p>
                  {counter.hint && <p className="text-xs text-gray-400">{counter.hint}</p>}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label={`Restar ${counter.label}`}
                    disabled={counter.value <= counter.min}
                    onClick={() => counter.onChange(Math.max(counter.min, counter.value - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-brand-primary-medium hover:text-brand-primary-medium disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <IconMinus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-4 text-center text-sm font-semibold text-gray-800">
                    {counter.value}
                  </span>
                  <button
                    type="button"
                    aria-label={`Sumar ${counter.label}`}
                    disabled={counter.value >= counter.max}
                    onClick={() => counter.onChange(Math.min(counter.max, counter.value + 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-brand-primary-medium hover:text-brand-primary-medium disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <IconPlus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {extra && <div className="mt-4 border-t border-gray-100 pt-4">{extra}</div>}

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-4 w-full rounded-lg bg-brand-primary py-2 text-sm font-semibold text-white hover:bg-brand-primary/90"
          >
            Listo
          </button>
        </div>
      )}
    </div>
  );
}
