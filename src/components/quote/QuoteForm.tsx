"use client";

import { useState } from "react";
import type { TripSummary } from "./types";

interface QuoteFormProps {
  tripSummary: TripSummary;
}

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "consent", string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(
  field: keyof FieldErrors,
  values: { name: string; phone: string; email: string; consent: boolean }
): string | undefined {
  if (field === "name") {
    if (values.name.trim().length < 3) return "Escribe tu nombre completo.";
  }
  if (field === "phone") {
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 11) return "Escribe un número de WhatsApp válido.";
  }
  if (field === "email") {
    if (!EMAIL_REGEX.test(values.email.trim())) return "Escribe un correo válido.";
  }
  if (field === "consent") {
    if (!values.consent) return "Debes aceptar el tratamiento de datos.";
  }
  return undefined;
}

export default function QuoteForm({ tripSummary }: QuoteFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+57 ");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [consent, setConsent] = useState(false);

  const [touched, setTouched] = useState<Partial<Record<keyof FieldErrors, boolean>>>({});
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [waSent, setWaSent] = useState(false);

  const values = { name, phone, email, consent };

  function fieldError(field: keyof FieldErrors): string | undefined {
    if (!touched[field]) return undefined;
    return validateField(field, values);
  }

  function validateAll(): FieldErrors {
    const errors: FieldErrors = {};
    (["name", "phone", "email", "consent"] as const).forEach((field) => {
      const error = validateField(field, values);
      if (error) errors[field] = error;
    });
    return errors;
  }

  function buildMessage() {
    return `Hola Agendatur, quiero cotizar lo siguiente:\n${tripSummary.text}\n\nMis datos:\nNombre: ${name}\nWhatsApp: ${phone}\nCorreo: ${email}\nComentarios: ${comments.trim() || "Ninguno"}`;
  }

  function registerLead(source: "quote-whatsapp" | "quote-email") {
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source,
        name,
        email,
        phone,
        comments,
        service: tripSummary.service,
        tripSummary: tripSummary.text,
      }),
    }).catch(() => {});
  }

  function handleWhatsApp() {
    const errors = validateAll();
    setTouched({ name: true, phone: true, email: true, consent: true });
    if (Object.keys(errors).length > 0) return;

    registerLead("quote-whatsapp");
    setWaSent(true);
    window.open(`https://wa.me/573102276045?text=${encodeURIComponent(buildMessage())}`, "_blank");
  }

  async function handleEmail() {
    const errors = validateAll();
    setTouched({ name: true, phone: true, email: true, consent: true });
    if (Object.keys(errors).length > 0) return;

    registerLead("quote-email");
    setEmailStatus("sending");

    const formData = new FormData();
    formData.append("Nombre", name);
    formData.append("WhatsApp", phone);
    formData.append("Correo", email);
    formData.append("Comentarios", comments || "Ninguno");
    formData.append("Resumen del viaje", tripSummary.text);
    formData.append("_subject", `Nueva solicitud de cotización — ${tripSummary.service}`);
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const res = await fetch("https://formsubmit.co/ajax/viajes@agendatur.onmicrosoft.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
        // Si el servicio de formularios no responde a tiempo (o está caído),
        // no dejamos al usuario colgado en "Enviando…": se cae al fallback.
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) throw new Error("FormSubmit no respondió OK");
      setEmailStatus("sent");
    } catch {
      // Fallback: abrir el cliente de correo con todo prellenado.
      const body = `${buildMessage()}`;
      window.location.href = `mailto:viajes@agendatur.onmicrosoft.com?subject=${encodeURIComponent(
        `Solicitud de cotización — ${tripSummary.service}`
      )}&body=${encodeURIComponent(body)}`;
      setEmailStatus("error");
    }
  }

  if (waSent) {
    return (
      <div className="flex flex-col items-center gap-2 py-6 text-center">
        <p className="text-base font-semibold text-gray-800">¡Mensaje listo!</p>
        <p className="max-w-sm text-sm text-gray-500">
          Se abrió WhatsApp con tu solicitud. Si no se abrió automáticamente, revisa que tu navegador no haya
          bloqueado la ventana emergente.
        </p>
        <button
          type="button"
          onClick={() => setWaSent(false)}
          className="mt-1 text-xs font-medium text-brand-primary-medium hover:underline"
        >
          Volver
        </button>
      </div>
    );
  }

  if (emailStatus === "sent") {
    return (
      <div className="flex flex-col items-center gap-2 py-6 text-center">
        <p className="text-base font-semibold text-gray-800">¡Correo enviado!</p>
        <p className="max-w-sm text-sm text-gray-500">
          Recibimos tu solicitud, un asesor de Agendatur te escribirá pronto a {email}.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
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
          <label className="text-xs font-semibold text-gray-600">WhatsApp / teléfono</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
            placeholder="+57 300 000 0000"
            className={`rounded-lg border px-3 py-2.5 text-sm focus:border-brand-primary-medium focus:outline-none focus:ring-2 focus:ring-brand-primary-medium/20 ${
              fieldError("phone") ? "border-red-400" : "border-gray-200"
            }`}
          />
          {fieldError("phone") && <p className="text-xs text-red-600">{fieldError("phone")}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-600">Correo</label>
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

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold text-gray-600">Comentarios (opcional)</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          rows={3}
          placeholder="Ej. cerca de la playa, quiero vuelo directo, etc."
          className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-brand-primary-medium focus:outline-none focus:ring-2 focus:ring-brand-primary-medium/20"
        />
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
        Autorizo a Agendatur a tratar mis datos personales para contactarme sobre esta solicitud, conforme a la
        política de tratamiento de datos.
      </label>
      {fieldError("consent") && <p className="-mt-2 text-xs text-red-600">{fieldError("consent")}</p>}

      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex-1 rounded-lg bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
        >
          Enviar por WhatsApp
        </button>
        <button
          type="button"
          onClick={handleEmail}
          disabled={emailStatus === "sending"}
          className="flex-1 rounded-lg border-2 border-brand-primary-medium px-5 py-3 text-sm font-semibold text-brand-primary-medium transition-colors hover:bg-brand-primary-medium hover:text-white disabled:opacity-60"
        >
          {emailStatus === "sending" ? "Enviando…" : "Enviar por correo"}
        </button>
      </div>
      {emailStatus === "error" && (
        <p className="text-xs text-gray-500">
          Abrimos tu cliente de correo para que envíes la solicitud directamente a viajes@agendatur.onmicrosoft.com.
        </p>
      )}
    </div>
  );
}
