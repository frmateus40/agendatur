"use client";

import { useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import type { TripSummary } from "./types";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

interface MeetingSchedulerProps {
  tripSummary: TripSummary;
}

export default function MeetingScheduler({ tripSummary }: MeetingSchedulerProps) {
  const [scheduled, setScheduled] = useState(false);

  useCalendlyEventListener({
    onEventScheduled: () => {
      // El postMessage de Calendly solo trae URIs (requieren su API con un
      // token para resolver fecha/hora/link de Meet). Registramos el lead con
      // lo que sí tenemos; el invitado recibe fecha, hora y el link de Meet
      // directo de Calendly/Google por correo.
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "meeting",
          name: "(ver detalle en Calendly)",
          service: tripSummary.service,
          tripSummary: tripSummary.text,
        }),
      }).catch(() => {});
      setScheduled(true);
    },
  });

  if (scheduled) {
    return (
      <div className="flex flex-col items-center gap-2 py-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-base font-semibold text-gray-800">¡Reunión agendada!</p>
        <p className="max-w-sm text-sm text-gray-500">
          Te enviamos la invitación con el enlace de Google Meet a tu correo, junto con la fecha y hora que
          elegiste.
        </p>
      </div>
    );
  }

  if (!CALENDLY_URL) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-gray-300 py-10 text-center">
        <p className="text-base font-semibold text-gray-800">El agendamiento aún no está conectado</p>
        <p className="max-w-md text-sm text-gray-500">
          Crea una cuenta gratis en{" "}
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-brand-primary-medium underline">
            calendly.com
          </a>
          , crea un evento tipo &quot;Videollamada&quot; con Google Meet integrado, copia el link de tu evento y
          agrégalo como <code className="rounded bg-gray-100 px-1 py-0.5">NEXT_PUBLIC_CALENDLY_URL</code> en{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5">.env.local</code>.
        </p>
        <a
          href="https://wa.me/573102276045"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 rounded-lg bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
        >
          Mientras tanto, escríbenos por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <InlineWidget
      url={CALENDLY_URL}
      prefill={{ customAnswers: { a1: tripSummary.text } }}
      pageSettings={{ hideLandingPageDetails: true, hideEventTypeDetails: true, hideGdprBanner: true }}
      styles={{ height: "650px" }}
      iframeTitle="Agendar reunión virtual con Agendatur"
    />
  );
}
