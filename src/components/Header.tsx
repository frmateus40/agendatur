"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSearchTab, TAB_SLUGS, type SearchTabId } from "@/contexts/SearchTabContext";

interface NavItem {
  label: string;
  href: string;
  tabId?: SearchTabId;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Vuelos", href: `/#${TAB_SLUGS.flights}`, tabId: "flights" },
  { label: "Hoteles", href: `/#${TAB_SLUGS.hotels}`, tabId: "hotels" },
  { label: "Autos", href: `/#${TAB_SLUGS.cars}`, tabId: "cars" },
  { label: "Tours", href: `/#${TAB_SLUGS.tours}`, tabId: "tours" },
  { label: "Vuelos + Hotel", href: `/#${TAB_SLUGS["flight-hotel"]}`, tabId: "flight-hotel" },
  { label: "Nosotros", href: "/nosotros" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [buscadorInView, setBuscadorInView] = useState(false);
  const { activeTab, setActiveTab } = useSearchTab();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const buscador = document.getElementById("buscador");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === buscador) setBuscadorInView(entry.isIntersecting);
        });
      },
      // Descuenta la altura del header sticky y considera "en vista" la
      // sección que ocupa la franja superior del viewport visible.
      { rootMargin: "-110px 0px -60% 0px", threshold: 0 }
    );

    if (buscador) observer.observe(buscador);
    return () => observer.disconnect();
  }, [isHome]);

  function isItemActive(item: NavItem) {
    if (item.href === "/nosotros") return pathname === "/nosotros";
    if (item.tabId) return isHome && buscadorInView && activeTab === item.tabId;
    // "Inicio" actúa como estado por defecto: activo en home mientras no
    // estemos viendo el buscador.
    return isHome && !buscadorInView;
  }

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) {
    if (!item.tabId || !isHome) return;
    // El buscador activo cambia de id dinámicamente (#vuelos, #hoteles, ...),
    // así que el salto nativo del href no es confiable si se viene de otro
    // servicio: primero se cambia la pestaña y luego se hace scroll a mano
    // hasta el contenedor estable "#buscador". Si venimos de otra página
    // (isHome === false), se deja la navegación normal a "/#slug", que al
    // cargar la home activa la pestaña correcta vía SearchTabContext.
    e.preventDefault();
    setActiveTab(item.tabId);
    requestAnimationFrame(() => {
      document.getElementById("buscador")?.scrollIntoView();
    });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/agendatur-logo.jpg"
            alt="Agendatur — Viaja a tu manera"
            width={2520}
            height={752}
            priority
            className="h-12 w-auto object-contain md:h-14"
          />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = isItemActive(item);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                aria-current={isActive ? "true" : undefined}
                className={`border-b-2 pb-0.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-brand-primary-medium text-brand-primary-medium"
                    : "border-transparent text-gray-800 hover:text-brand-primary-medium"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex flex-col items-end gap-1.5 p-2 lg:hidden"
        >
          <span className="h-0.5 w-7 bg-gray-800" />
          <span className="h-0.5 w-7 bg-gray-800" />
          <span className="h-0.5 w-5 bg-gray-800" />
        </button>
      </div>

      {menuOpen && (
        <nav aria-label="Navegación principal" className="border-t border-gray-100 bg-white px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = isItemActive(item);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    onClick={(e) => {
                      handleNavClick(e, item);
                      setMenuOpen(false);
                    }}
                    className={`block text-sm font-medium ${
                      isActive ? "text-brand-primary-medium" : "text-gray-800 hover:text-brand-primary-medium"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
