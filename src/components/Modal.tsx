"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidthClassName?: string;
}

export default function Modal({ open, onClose, title, children, maxWidthClassName = "max-w-2xl" }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    // Hasta que `mounted` sea true, el portal (y por tanto el diálogo real)
    // todavía no existe en el DOM, así que dialogRef/closeButtonRef estarían
    // vacíos: sin esta guarda, el trampolín de foco no atraparía nada.
    if (!open || !mounted) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";

    const dialog = dialogRef.current;
    // El botón de cerrar siempre está presente (incluso si el contenido
    // todavía no tiene elementos enfocables, ej. durante una carga inicial).
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialog) return;

      const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (el) => el.offsetParent !== null
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [open, mounted, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-brand-primary/40 backdrop-blur-sm md:items-center md:p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`animate-modal-in flex max-h-[92vh] w-full ${maxWidthClassName} flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl md:max-h-[88vh] md:rounded-2xl`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <h2 id={titleId} className="text-base font-bold text-brand-primary md:text-lg">
            {title}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Cerrar"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 md:px-6">{children}</div>
      </div>
    </div>,
    document.body
  );
}
