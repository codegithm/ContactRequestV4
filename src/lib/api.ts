import type { ContactRequestModel } from "@/models/contact";
import { contactRequestModelFieldIds } from "@/models/contact";
import {
  type FieldSchema,
  type PartnerConfig,
  type PartnerSettingValue,
} from "@/lib/partners";
import { areApiCallsEnabled, buildApiUrl } from "@/config/environment";

export type ContactRequestPayload = {
  [K in keyof ContactRequestModel]: ContactRequestModel[K] | null;
};

export const CONTACT_REQUEST_ENDPOINT = buildApiUrl("/api/contact-request");

const contactRequestFieldSet = new Set<string>(
  contactRequestModelFieldIds as readonly string[],
);

const fieldAliasMap: Record<string, keyof ContactRequestModel> = {
  full_name: "firstName",
  first_name: "firstName",
  last_name: "surname",
  id_number: "idNumber",
  acc_number: "accountNumber",
  message: "comments",
  preferred_date: "callbackTime",
  service: "product",
  phone: "cellNumber",
};

function resolveContactModelFieldKey(
  fieldId: string,
): keyof ContactRequestModel | null {
  if (fieldAliasMap[fieldId]) {
    return fieldAliasMap[fieldId];
  }

  if (contactRequestFieldSet.has(fieldId)) {
    return fieldId as keyof ContactRequestModel;
  }

  return null;
}

function setPayloadValue(
  payload: ContactRequestPayload,
  key: keyof ContactRequestModel,
  value: ContactRequestPayload[keyof ContactRequestPayload],
) {
  (
    payload as Record<
      string,
      ContactRequestPayload[keyof ContactRequestPayload]
    >
  )[key] = value;
}

function applySettingValue(
  payload: ContactRequestPayload,
  fieldName: string,
  value: PartnerSettingValue,
) {
  const modelField = resolveContactModelFieldKey(fieldName);
  if (!modelField) {
    return;
  }

  setPayloadValue(
    payload,
    modelField,
    value as ContactRequestPayload[keyof ContactRequestPayload],
  );
}

function applyPartnerSettings(
  payload: ContactRequestPayload,
  settings: PartnerConfig["settings"],
) {
  if (!settings) return;

  if (settings.vdn !== undefined) {
    applySettingValue(payload, "vdn", settings.vdn);
  }

  if (settings.brokerCode !== undefined) {
    applySettingValue(payload, "brokerCode", settings.brokerCode);
  }

  Object.entries(settings.extra ?? {}).forEach(([fieldName, value]) => {
    applySettingValue(payload, fieldName, value);
  });

  // Backward compatibility for previously saved flat settings objects.
  Object.entries(settings as Record<string, PartnerSettingValue>).forEach(
    ([fieldName, value]) => {
      if (
        fieldName === "vdn" ||
        fieldName === "brokerCode" ||
        fieldName === "extra"
      ) {
        return;
      }

      applySettingValue(payload, fieldName, value);
    },
  );
}

interface SubmitContactRequestArgs {
  config: PartnerConfig;
  configuredFields: FieldSchema[];
  formData: Record<string, string>;
}

function getFieldValueForApi(
  field: FieldSchema,
  rawValue: string,
): string | null {
  if (!rawValue?.trim()) return null;

  if (field.type === "tel" && field.phoneFormat === "split") {
    const [areaCode = "", number = ""] = rawValue.split("|");
    const area = areaCode.trim();
    const num = number.trim();
    if (!area && !num) return null;
    return `${area} ${num}`.trim();
  }

  return rawValue.trim();
}

export function buildContactRequestPayload({
  config,
  configuredFields,
  formData,
}: SubmitContactRequestArgs): ContactRequestPayload {
  const payload = {} as ContactRequestPayload;

  // Initialize all ContactRequestModel fields as null so the payload shape is consistent.
  contactRequestModelFieldIds.forEach((fieldId) => {
    setPayloadValue(payload, fieldId, null);
  });

  // Fill only fields configured for this specific partner into shared model keys.
  configuredFields.forEach((field) => {
    const rawValue = formData[field.id] || "";
    const mappedField = resolveContactModelFieldKey(field.id);
    if (!mappedField) return;

    if (field.type === "tel" && field.phoneFormat === "split") {
      const [areaCode = "", number = ""] = rawValue.split("|");
      const area = areaCode.trim();
      const num = number.trim();
      payload.cellAreaCode = area || null;
      payload.cellNumber = num || null;
      return;
    }

    setPayloadValue(
      payload,
      mappedField,
      getFieldValueForApi(
        field,
        rawValue,
      ) as ContactRequestPayload[keyof ContactRequestPayload],
    );
  });

  // Flat-map hidden settings by field name into payload for known ContactRequestModel keys.
  applyPartnerSettings(payload, config.settings);

  // Keep source attribution available even with one shared endpoint.
  if (!payload.contactSource) {
    payload.contactSource = config.partnerId;
  }

  return payload;
}

export async function submitContactRequest(args: SubmitContactRequestArgs) {
  const payload = buildContactRequestPayload(args);

  if (!areApiCallsEnabled()) {
    return new Response(
      JSON.stringify({
        mocked: true,
        message: "API calls are disabled for this environment.",
        payload,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const response = await fetch(CONTACT_REQUEST_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Request failed with status ${response.status}`);
  }

  return response;
}
