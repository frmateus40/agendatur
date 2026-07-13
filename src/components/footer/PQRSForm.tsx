"use client";

import { useState } from "react";

const REQUEST_TYPES = ["Petición", "Queja", "Reclamo", "Sugerencia"] as const;
type RequestType = (typeof REQUEST_TYPES)[number];

type FieldErrors = Partial<Record<"type" | "name" | "email" | "message" | "consent", string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Values {
  type: RequestType | "";
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

function validateField(field: keyof FieldErrors, values: Values): string | undefined {
  if (field === "type" && !values.type) return "Selecciona un tipo de solicitud.";
  if (field === "name" && values.name.trim().length < 3) return "Escribe tu nombre completo.";
  if (field === "email" && !EMAIL_REGEX.test(values.email.trim())) return "Escribe un correo válido.";
  if (field === "message" && values.message.trim().length < 10) return "Cuéntanos un poco más (mínimo 10 caracteres).";
  if (field === "consent" && !values.consent) return "Debes aceptar el tratamiento de datos.";
  return undefined;
}

export default function PQRSForm() {
  const [type, setType] = useState<RequestType | "">("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+57 ");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const [touched, setTouched] = useState<Partial<Record<keyof FieldErrors, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const values: Values = { type, name, email, phone, message, consent };

  function fieldError(field: keyof FieldErrors): string | undefined {
    if (!touched[field]) return undefined;
    return validateField(field, values);
  }

  function validateAll(): FieldErrors {
    const errors: FieldErrors = {};
    (["type", "name", "email", "message", "consent"] as const).forEach((field) => {
      const error = validateField(field, values);
      if (error) errors[field] = error;
    });
    return errors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errors = validateAll();
    setTouched({ type: true, name: true, email: true, message: true, consent: true });
    if (Object.keys(errors).length > 0) return;

    setStatus("sending");

    const formData = new FormData();
    formData.append("Tipo de solicitud", type);
    formData.append("Nombre", name);
    formData.append("Correo", email);
    formData.append("Teléfono / WhatsApp", phone || "No indicado");
    formData.append("Mensaje", message);
    formData.append("_subject", `PQRS - ${type}`);
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const res = await fetch("https://formsubmit.co/ajax/asesor@viajesagendatur.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
        // Si el servicio de formularios no responde a tiempo (o está caído),
        // no dejamos al usuario colgado en "Enviando…": se cae al fallback.
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) throw new Error("FormSubmit no respondió OK");
      setStatus("sent");
    } catch {
      const body = `Tipo de solicitud: ${type}\nNombre: ${name}\nCorreo: ${email}\nTeléfono/WhatsApp: ${phone || "No indicado"}\n\nMensaje:\n${message}`;
      window.location.href = `mailto:asesor@viajesagendatur.com?subject=${encodeURIComponent(
        `PQRS - ${type}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-2 py-8 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-base font-semibold text-gray-800">
          ¡Recibimos tu {type.toLowerCase()}, {name}!
        </p>
        <p className="max-w-sm text-sm text-gray-500">Te responderemos a la brevedad.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-600">Tipo de solicitud</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as RequestType)}
          onBlur={() => setTouched((t) => ({ ...t, type: true }))}
          className={`rounded-lg border bg-white px-3 py-2.5 text-sm focus:border-brand-primary-medium focus:outline-none focus:ring-2 focus:ring-brand-primary-medium/20 ${
            fieldError("type") ? "border-red-400" : "border-gray-200"
          }`}
        >
          <option value="">Selecciona una opción</option>
          {REQUEST_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {fieldError("type") && <p className="text-xs text-red-600">{fieldError("type")}</p>}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600">Nombre completo</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, name: true }))}
            placeholder="Tu nombre completo"
            className={`rounded-lg border px-3 py-2.5 text-sm focus:border-brand-primary-medium focus:outline-none focus:ring-2 focus:ring-brand-primary-medium/20 ${
              fieldError("name") ? "border-red-400" : "border-gray-200"
            }`}
          />
          {fieldError("name") && <p className="text-xs text-red-600">{fieldError("name")}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-gray-600">Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, email: true }))}
            placeholder="correo@ejemplo.com"
            className={`rounded-lg border px-3 py-2.5 text-sm focus:border-brand-primary-medium focus:outline-none focus:ring-2 focus:ring-brand-primary-medium/20 ${
              fieldError("email") ? "border-red-400" : "border-gray-200"
            }`}
          />
          {fieldError("email") && <p className="text-xs text-red-600">{fieldError("email")}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-600">Número de contacto / WhatsApp (opcional)</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+57 300 000 0000"
          className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-primary-medium focus:outline-none focus:ring-2 focus:ring-brand-primary-medium/20"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-600">Mensaje / descripción</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, message: true }))}
          rows={4}
          placeholder="Cuéntanos con detalle tu petición, queja, reclamo o sugerencia."
          className={`rounded-lg border px-3 py-2.5 text-sm focus:border-brand-primary-medium focus:outline-none focus:ring-2 focus:ring-brand-primary-medium/20 ${
            fieldError("message") ? "border-red-400" : "border-gray-200"
          }`}
        />
        {fieldError("message") && <p className="text-xs text-red-600">{fieldError("message")}</p>}
      </div>

      <label className="flex items-start gap-2 text-xs text-gray-600">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            setTouched((t) => ({ ...t, consent: true }));
          }}
          className="mt-0.5 accent-brand-primary-medium"
        />
        Autorizo a Agendatur a tratar mis datos personales para dar respuesta a esta solicitud,
        conforme a la política de tratamiento de datos (habeas data).
      </label>
      {fieldError("consent") && <p className="-mt-2 text-xs text-red-600">{fieldError("consent")}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600 disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar PQRS"}
      </button>
    </form>
  );
}
