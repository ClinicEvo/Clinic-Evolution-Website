import { NextRequest, NextResponse } from "next/server";
import { upsertGhlContact, logInboundConversationMessage } from "@/lib/gohighlevel";

// ─── Field constraints ────────────────────────────────────────────────────────
const LIMITS = {
  name: 100,
  email: 254,
  url: 2048,
  short: 200,
  message: 2000,
};

const VALID_DISCIPLINES = ["Osteopath", "Physiotherapist", "Chiropractor", "Other"] as const;

// ─── Simple in-memory rate limiting ──────────────────────────────────────────
// NOTE: This resets on cold-start in serverless. For production, replace with
// Vercel KV, Upstash Redis, or Cloudflare rate-limit rules.
const ipLog = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_WINDOW = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const prev = (ipLog.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  ipLog.set(ip, [...prev, now]);
  return prev.length >= MAX_PER_WINDOW;
}

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
// Strip CR/LF to prevent email header injection; trim and cap length.
function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().replace(/[\r\n\t]/g, " ").slice(0, max);
}

function isValidEmail(v: string): boolean {
  return v.length > 0 && v.length <= LIMITS.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

// Users routinely type a bare domain ("myclinic.co.uk") with no protocol.
// Treat that as https:// rather than rejecting it.
function normalizeUrl(v: string): string {
  if (!v || /^https?:\/\//i.test(v)) return v;
  return `https://${v}`;
}

function isValidHttpUrl(v: string): boolean {
  if (!v) return true; // optional
  try {
    const u = new URL(v);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

function err(msg: string, status = 400) {
  return NextResponse.json({ error: msg }, { status });
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limiting
  if (isRateLimited(getIp(req))) {
    return err("Too many submissions. Please try again later.", 429);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return err("Invalid request body.", 400);
  }

  // Server-side honeypot check (client also checks, but bots bypass client JS)
  if (body._honey) {
    return NextResponse.json({ ok: true }); // silently succeed
  }

  const formType = typeof body.form_type === "string" ? body.form_type : "";

  // ── Contact form ─────────────────────────────────────────────────────────
  if (formType === "contact") {
    const name    = clean(body.name,    LIMITS.name);
    const email   = clean(body.email,   LIMITS.email);
    const phone   = clean(body.phone,   50);
    const message = clean(body.message, LIMITS.message);

    if (!name)                        return err("Name is required.");
    if (!isValidEmail(email))         return err("A valid email address is required.");
    if (message.length < 10)          return err("Message must be at least 10 characters.");

    const result = await upsertGhlContact({
      name,
      email,
      phone: phone || undefined,
      message,
      source: "Website – Contact form",
      tags: ["website-contact-form"],
    });
    if (!result.ok) return err("Submission failed. Please try again.", 502);

    // Best-effort: also log the message into the Conversations tab so staff
    // can see and reply to it directly. The message is already safely on
    // the contact record above, so a failure here doesn't fail the request.
    if (result.contactId) {
      await logInboundConversationMessage({
        contactId: result.contactId,
        fromEmail: email,
        fromName: name,
        subject: "New website contact form message",
        message,
      });
    }

    return NextResponse.json({ ok: true });
  }

  // ── Audit form ───────────────────────────────────────────────────────────
  if (formType === "audit") {
    const first_name     = clean(body.first_name,     LIMITS.name);
    const last_name      = clean(body.last_name,      LIMITS.name);
    const email          = clean(body.email,          LIMITS.email);
    const phone          = clean(body.phone,          50);
    const clinic_name    = clean(body.clinic_name,    LIMITS.short);
    const clinic_website = normalizeUrl(clean(body.clinic_website, LIMITS.url));
    const location       = clean(body.location,       LIMITS.short);
    const discipline     = clean(body.discipline,     50);
    const booking_system = clean(body.booking_system, LIMITS.short);
    const lead_sources   = clean(body.lead_sources,   LIMITS.short);
    const goal           = clean(body.goal,           LIMITS.short);
    const message        = clean(body.message,        LIMITS.message);

    if (!first_name)                                  return err("First name is required.");
    if (!last_name)                                   return err("Last name is required.");
    if (!isValidEmail(email))                         return err("A valid email address is required.");
    if (!clinic_name)                                 return err("Clinic name is required.");
    if (!isValidHttpUrl(clinic_website))              return err("Clinic website must be a valid http/https URL.");
    if (!VALID_DISCIPLINES.includes(discipline as typeof VALID_DISCIPLINES[number])) {
      return err("Please select a valid discipline.");
    }

    const detailLines = [
      location && `Location: ${location}`,
      booking_system && `Booking system: ${booking_system}`,
      lead_sources && `Main lead source: ${lead_sources}`,
      goal && `Main goal: ${goal}`,
    ].filter(Boolean);
    const fullMessage = [message, detailLines.join(" | ")].filter(Boolean).join("\n\n");

    const result = await upsertGhlContact({
      firstName: first_name,
      lastName: last_name,
      email,
      phone: phone || undefined,
      companyName: clinic_name,
      website: clinic_website || undefined,
      message: fullMessage || undefined,
      discipline,
      source: "Website – Free clinic audit",
      tags: ["website-audit-form", discipline.toLowerCase()],
    });
    if (!result.ok) return err("Submission failed. Please try again.", 502);

    return NextResponse.json({ ok: true });
  }

  return err("Unknown form type.", 400);
}

// Reject all other HTTP methods
export const GET  = () => err("Method not allowed.", 405);
export const PUT  = () => err("Method not allowed.", 405);
export const DELETE = () => err("Method not allowed.", 405);
