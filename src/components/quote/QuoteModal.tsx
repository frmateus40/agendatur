"use client";

import { useEffect, useState } from "react";
import Modal from "../Modal";
import TripSummaryCard from "./TripSummaryCard";
import QuoteForm from "./QuoteForm";
import MeetingScheduler from "./MeetingScheduler";
import SearchLoadingOverlay from "../search/SearchLoadingOverlay";
import type { TripSummary } from "./types";

const INTRO_MS = 700;

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  tripSummary: TripSummary;
}

export default function QuoteModal({ open, onClose, tripSummary }: QuoteModalProps) {
  const [option, setOption] = useState<"quote" | "meeting">("quote");
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    if (!open) return;
    setOption("quote");
    setIntro(true);
    const introTimeout = setTimeout(() => setIntro(false), INTRO_MS);
    return () => clearTimeout(introTimeout);
  }, [open]);

  return (
    <Modal open={open} onClose={onClose} title="Completa tu solicitud">
      {intro ? (
        <SearchLoadingOverlay loading={intro} />
      ) : (
        <div className="animate-fade-in">
          <TripSummaryCard tripSummary={tripSummary} />

          <div role="tablist" aria-label="Forma de contacto" className="mt-5 grid grid-cols-2 gap-2">
            <button
              type="button"
              role="tab"
              aria-selected={option === "quote"}
              onClick={() => setOption("quote")}
              className={`rounded-lg border-2 px-3 py-3 text-center text-sm font-semibold transition-colors ${
                option === "quote"
                  ? "border-brand-primary bg-brand-primary text-white"
                  : "border-gray-200 text-gray-600 hover:border-brand-primary-medium"
              }`}
            >
              💬 Recibir cotización
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={option === "meeting"}
              onClick={() => setOption("meeting")}
              className={`rounded-lg border-2 px-3 py-3 text-center text-sm font-semibold transition-colors ${
                option === "meeting"
                  ? "border-brand-primary bg-brand-primary text-white"
                  : "border-gray-200 text-gray-600 hover:border-brand-primary-medium"
              }`}
            >
              📅 Agendar reunión virtual
            </button>
          </div>

          <div key={option} className="animate-fade-in mt-5">
            {option === "quote" ? (
              <QuoteForm tripSummary={tripSummary} />
            ) : (
              <MeetingScheduler tripSummary={tripSummary} />
            )}
          </div>
        </div>
      )}
    </Modal>
  );
}
