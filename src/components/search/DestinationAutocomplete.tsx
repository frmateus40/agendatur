"use client";

import { useEffect, useId, useRef, useState } from "react";
import { searchDestinationsLocal, type Destination } from "@/data/destinations";
import { IconPin, IconPlane } from "./icons";

const DEBOUNCE_MS = 200;

interface DestinationAutocompleteProps {
  label: string;
  value: Destination | null;
  onChange: (destination: Destination | null) => void;
  placeholder?: string;
  /** Permite conectar a una API real más adelante (ver searchDestinationsLocal). */
  search?: (query: string) => Promise<Destination[]>;
  error?: string;
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const nText = normalize(text);
  const nQuery = normalize(query);
  const idx = nText.indexOf(nQuery);
  if (idx === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, idx)}
      <strong className="font-semibold text-brand-primary">
        {text.slice(idx, idx + query.length)}
      </strong>
      {text.slice(idx + query.length)}
    </>
  );
}

async function defaultSearch(query: string): Promise<Destination[]> {
  return searchDestinationsLocal(query);
}

export default function DestinationAutocomplete({
  label,
  value,
  onChange,
  placeholder = "Escribe una ciudad o destino",
  search = defaultSearch,
  error,
}: DestinationAutocompleteProps) {
  const [query, setQuery] = useState(value ? formatDestination(value) : "");
  const [results, setResults] = useState<Destination[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [searched, setSearched] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const inputId = useId();

  useEffect(() => {
    setQuery(value ? formatDestination(value) : "");
  }, [value]);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Filtra la lista local en el navegador (sin peticiones a internet), con un
  // debounce corto para que escribir rápido se sienta fluido.
  useEffect(() => {
    let cancelled = false;
    const q = query.trim();

    if (q.length < 1) {
      setResults([]);
      setSearched(false);
      return;
    }

    // Si el valor actual ya coincide con la selección, no reabrir la búsqueda.
    if (value && q === formatDestination(value)) {
      return;
    }

    const timeoutId = setTimeout(() => {
      search(q).then((res) => {
        if (cancelled) return;
        setResults(res);
        setSearched(true);
        setActiveIndex(res.length > 0 ? 0 : -1);
      });
    }, DEBOUNCE_MS);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [query, search, value]);

  function selectDestination(destination: Destination) {
    onChange(destination);
    setQuery(formatDestination(destination));
    setOpen(false);
    setResults([]);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      return;
    }
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && results[activeIndex]) {
        selectDestination(results[activeIndex]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const activeOptionId =
    activeIndex >= 0 && results[activeIndex] ? `${listId}-opt-${results[activeIndex].id}` : undefined;

  return (
    <div ref={rootRef} className="relative flex flex-col gap-1">
      <label htmlFor={inputId} className="text-xs font-semibold text-gray-600">
        {label}
      </label>
      <div className="relative">
        <IconPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          id={inputId}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={activeOptionId}
          autoComplete="off"
          value={query}
          placeholder={placeholder}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            if (value) onChange(null);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          className={`w-full rounded-lg border py-2.5 pl-9 pr-3 text-sm text-gray-800 transition-colors focus:border-brand-primary-medium focus:outline-none focus:ring-2 focus:ring-brand-primary-medium/20 ${
            error ? "border-red-400" : "border-gray-200"
          }`}
        />
      </div>

      {error && <p className="text-xs text-red-600">{error}</p>}

      {open && query.trim().length >= 1 && (
        <ul
          id={listId}
          role="listbox"
          aria-label={label}
          className="absolute top-full z-30 mt-1 max-h-72 w-full min-w-[260px] overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg"
        >
          {results.map((dest, index) => (
            <li key={dest.id} role="presentation">
              <button
                id={`${listId}-opt-${dest.id}`}
                type="button"
                role="option"
                aria-selected={index === activeIndex}
                onMouseDown={(e) => e.preventDefault()}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectDestination(dest)}
                className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm ${
                  index === activeIndex ? "bg-gray-50" : ""
                }`}
              >
                {dest.tipo === "aeropuerto" ? (
                  <IconPlane className="h-4 w-4 shrink-0 text-brand-primary-medium" />
                ) : (
                  <IconPin className="h-4 w-4 shrink-0 text-brand-primary-medium" />
                )}
                <span className="flex-1 truncate text-gray-800">
                  <HighlightedText text={dest.ciudad} query={query} /> · {dest.pais}
                </span>
                {dest.iata && (
                  <span className="shrink-0 rounded bg-gray-100 px-1.5 py-0.5 text-xs font-semibold text-gray-500">
                    {dest.iata}
                  </span>
                )}
              </button>
            </li>
          ))}

          {searched && results.length === 0 && (
            <li className="px-3 py-3 text-sm text-gray-500">
              No encontramos esa ciudad, escríbenos y la buscamos.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

function formatDestination(destination: Destination) {
  return `${destination.ciudad}, ${destination.pais}${destination.iata ? ` — ${destination.iata}` : ""}`;
}
