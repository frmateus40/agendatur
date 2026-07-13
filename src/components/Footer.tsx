"use client";

import { useState } from "react";
import Modal from "./Modal";
import PQRSForm from "./footer/PQRSForm";

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14 9h2.5V6H14c-2 0-3.5 1.6-3.5 3.6V11H8v3h2.5v7H13v-7h2.4l.4-3H13V9.8c0-.5.3-.8.8-.8Z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

function IconWhatsapp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.02 2.5c-5.26 0-9.53 4.27-9.53 9.53 0 1.68.44 3.3 1.28 4.73L2.5 21.5l4.87-1.24a9.5 9.5 0 0 0 4.65 1.2h.01c5.26 0 9.53-4.27 9.53-9.53s-4.27-9.43-9.54-9.43Zm0 17.4a7.8 7.8 0 0 1-3.99-1.09l-.28-.17-2.9.74.78-2.83-.19-.29a7.85 7.85 0 0 1-1.2-4.21c0-4.34 3.53-7.87 7.88-7.87 2.1 0 4.08.82 5.57 2.31a7.83 7.83 0 0 1 2.3 5.57c0 4.34-3.53 7.84-7.87 7.84Z" />
    </svg>
  );
}

function IconLock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="15" r="1.4" fill="currentColor" />
    </svg>
  );
}

function IconClipboard({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="4.5" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 4.5V3.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 11h7M8.5 15h7M8.5 19h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  const [pqrsOpen, setPqrsOpen] = useState(false);

  return (
    <footer id="contacto" className="scroll-mt-24 bg-brand-primary text-blue-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-3 text-lg font-bold text-white">Nuestra empresa</h3>
          <p className="text-sm text-blue-100/90">
            Agendatur es una agencia de viajes 100% digital en Colombia, dedicada a crear
            experiencias inolvidables con los mejores precios y acompañamiento en cada paso.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <IconFacebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <IconInstagram className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/573102276645"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <IconWhatsapp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">
            Información de interés
          </h4>
          <ul className="space-y-2 text-sm text-blue-100/90">
            <li><a href="/#tips" className="hover:text-white">Tips de viaje</a></li>
            <li><a href="/#categorias" className="hover:text-white">Destinos</a></li>
            <li><a href="/paquetes" className="hover:text-white">Paquetes turísticos</a></li>
            <li><a href="/cruceros" className="hover:text-white">Cruceros desde Colombia</a></li>
            <li><a href="/nosotros" className="hover:text-white">Nosotros</a></li>
            <li>
              <button
                type="button"
                onClick={() => setPqrsOpen(true)}
                className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-brand-accent"
              >
                <IconClipboard className="h-4 w-4" />
                PQRS
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">
            Información legal
          </h4>
          <ul className="space-y-2 text-sm text-blue-100/90">
            <li><a href="#" className="hover:text-white">Términos y condiciones</a></li>
            <li><a href="#" className="hover:text-white">Política de privacidad</a></li>
            <li><a href="#" className="hover:text-white">Derechos del pasajero</a></li>
            <li className="pt-1 text-xs text-blue-100/70">RNT: 279917</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">
            Canales de servicio
          </h4>
          <ul className="space-y-2 text-sm text-blue-100/90">
            <li>
              <a href="https://wa.me/573102276645" className="hover:text-white">
                WhatsApp: 310 227 6645
              </a>
            </li>
            <li>
              <a href="mailto:viajes@agendatur.onmicrosoft.com" className="hover:text-white">
                viajes@agendatur.onmicrosoft.com
              </a>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs text-blue-100/80">
            <IconLock className="h-4 w-4 shrink-0 text-brand-accent" />
            <span>
              Pagos seguros con <strong className="font-semibold text-white">Bold</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="text-center text-xs text-blue-100/70">
          © {new Date().getFullYear()} Agendatur — Agencia de viajes 100% digital · RNT 279917.
          Todos los derechos reservados.
        </p>
      </div>

      <Modal open={pqrsOpen} onClose={() => setPqrsOpen(false)} title="PQRS — Peticiones, Quejas, Reclamos y Sugerencias">
        <PQRSForm />
      </Modal>
    </footer>
  );
}
