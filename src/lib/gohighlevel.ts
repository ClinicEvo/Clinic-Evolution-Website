// Server-side only client for the GoHighLevel (LeadConnector) API v2.
// Creates/updates contacts in the Clinic Evolution sub-account so every
// website form submission also lands in the CRM.

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

// Custom field IDs in the Clinic Evolution GHL sub-account.
// (Settings > Custom Fields > Contact — GET /locations/{id}/customFields to list.)
const GHL_CUSTOM_FIELD_MESSAGE = "nstpsuDbsVU4paliRdio";
const GHL_CUSTOM_FIELD_DISCIPLINE = "4AFsVRatalPHz6z6Eu0Y";

interface GhlContactInput {
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone?: string;
  source: string;
  tags?: string[];
  companyName?: string;
  website?: string;
  message?: string;
  discipline?: string;
}

export async function upsertGhlContact(input: GhlContactInput): Promise<boolean> {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!apiKey || !locationId) {
    console.error("GoHighLevel not configured — missing GHL_API_KEY or GHL_LOCATION_ID.");
    return false;
  }

  const body: Record<string, unknown> = {
    locationId,
    email: input.email,
    source: input.source,
    tags: input.tags,
  };

  if (input.firstName) body.firstName = input.firstName;
  if (input.lastName) body.lastName = input.lastName;
  if (!input.firstName && input.name) body.name = input.name;
  if (input.phone) body.phone = input.phone;
  if (input.companyName) body.companyName = input.companyName;
  if (input.website) body.website = input.website;
  const customFields: { id: string; field_value: string }[] = [];
  if (input.message) customFields.push({ id: GHL_CUSTOM_FIELD_MESSAGE, field_value: input.message });
  if (input.discipline) customFields.push({ id: GHL_CUSTOM_FIELD_DISCIPLINE, field_value: input.discipline });
  if (customFields.length) body.customFields = customFields;

  try {
    const res = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Version: GHL_API_VERSION,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`GoHighLevel contact upsert failed (${res.status}): ${detail}`);
      return false;
    }
    return true;
  } catch (e) {
    console.error("GoHighLevel contact upsert threw:", e);
    return false;
  }
}
