import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  source: "quote-whatsapp" | "quote-email" | "meeting";
  name: string;
  email?: string;
  phone?: string;
  comments?: string;
  service: string;
  tripSummary: string;
}

// Registro de leads. Si se configura LEAD_WEBHOOK_URL, cada solicitud (ya sea
// cotización por WhatsApp/correo o reunión agendada) se reenvía a ese webhook,
// listo para conectar Google Sheets (vía Apps Script Web App) o un CRM
// (Zapier, Make, HubSpot, Pipedrive, etc.). Sin esa variable, solo se registra
// en el log del servidor y de todas formas responde OK: nunca debe bloquear
// el flujo de WhatsApp/correo/Calendly del usuario.
export async function POST(req: NextRequest) {
  const payload: LeadPayload = await req.json();

  if (!payload.name || !payload.service) {
    return NextResponse.json({ error: "Faltan datos del lead" }, { status: 400 });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }),
      });
    } catch (err) {
      console.error("No se pudo reenviar el lead al webhook configurado", err);
    }
  } else {
    console.log("Nuevo lead (LEAD_WEBHOOK_URL no configurado):", payload);
  }

  return NextResponse.json({ ok: true });
}
