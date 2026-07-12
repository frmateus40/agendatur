"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type SearchTabId = "flights" | "hotels" | "cars" | "tours" | "flight-hotel";

// Slugs legibles en la URL para cada buscador independiente (#vuelos, #hoteles, ...).
export const TAB_SLUGS: Record<SearchTabId, string> = {
  flights: "vuelos",
  hotels: "hoteles",
  cars: "autos",
  tours: "tours",
  "flight-hotel": "vuelos-hotel",
};

const SLUG_TO_TAB: Record<string, SearchTabId> = Object.fromEntries(
  Object.entries(TAB_SLUGS).map(([tab, slug]) => [slug, tab as SearchTabId])
);

interface SearchTabContextValue {
  activeTab: SearchTabId;
  setActiveTab: (tab: SearchTabId) => void;
}

const SearchTabContext = createContext<SearchTabContextValue | null>(null);

export function SearchTabProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTabState] = useState<SearchTabId>("flights");

  // Deep-link: si la página se carga con #hoteles, #autos, etc. en la URL,
  // abre directamente ese buscador y hace scroll hasta él.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const tab = SLUG_TO_TAB[hash];
    if (tab) {
      setActiveTabState(tab);
      requestAnimationFrame(() => {
        document.getElementById("buscador")?.scrollIntoView();
      });
    }
  }, []);

  function setActiveTab(tab: SearchTabId) {
    setActiveTabState(tab);
    window.history.replaceState(null, "", `#${TAB_SLUGS[tab]}`);
  }

  return (
    <SearchTabContext.Provider value={{ activeTab, setActiveTab }}>{children}</SearchTabContext.Provider>
  );
}

export function useSearchTab() {
  const ctx = useContext(SearchTabContext);
  if (!ctx) {
    throw new Error("useSearchTab debe usarse dentro de un SearchTabProvider");
  }
  return ctx;
}
