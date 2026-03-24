import type { FieldSchema, PartnerConfig } from "@/lib/partners";
import { contactRequestModelFieldIds } from "@/models/contact";

export const DEFAULT_SECTION_ID = "main";

export interface EditablePartnerField extends FieldSchema {
  sectionId?: string;
  sectionTitle?: string;
}

export interface EditablePartnerSection {
  id: string;
  title: string;
}

export interface ContactRequestFieldOption extends FieldSchema {
  category: string;
  description: string;
}

export interface ContactRequestFieldGroup {
  category: string;
  fields: ContactRequestFieldOption[];
}

const dateFieldIds = new Set([
  "dateOfBirth",
  "itcDate",
  "vehicleDeliveryDate",
  "dateCreated",
  "callbackTime",
]);

const numberFieldIds = new Set(["height", "weight"]);

const emailFieldIds = new Set(["email", "fiEmailAddress"]);

const telephoneFieldIds = new Set([
  "telNumber",
  "cellNumber",
  "workNumber",
  "alternativeNumber",
]);

function toTitleCase(value: string) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/\bId\b/g, "ID")
    .replace(/\bFi\b/g, "FI")
    .replace(/\bItc\b/g, "ITC")
    .replace(/\bYn\b/g, "YN")
    .replace(/\bUrl\b/g, "URL")
    .replace(/^./, (char) => char.toUpperCase());
}

function inferFieldType(fieldId: string): FieldSchema["type"] {
  if (emailFieldIds.has(fieldId)) {
    return "email";
  }

  if (telephoneFieldIds.has(fieldId)) {
    return "tel";
  }

  if (dateFieldIds.has(fieldId)) {
    return "date";
  }

  if (numberFieldIds.has(fieldId)) {
    return "number";
  }

  if (fieldId === "comments" || fieldId === "errorMessage") {
    return "textarea";
  }

  return "text";
}

function inferPlaceholder(fieldId: string, label: string) {
  if (emailFieldIds.has(fieldId)) {
    return "name@example.com";
  }

  if (telephoneFieldIds.has(fieldId)) {
    return "Enter phone number";
  }

  if (dateFieldIds.has(fieldId)) {
    return undefined;
  }

  if (fieldId.toLowerCase().includes("number")) {
    return `Enter ${label.toLowerCase()}`;
  }

  return `Enter ${label.toLowerCase()}`;
}

function inferCategory(fieldId: string) {
  if (
    [
      "title",
      "initials",
      "firstName",
      "surname",
      "idNumber",
      "idType",
      "maritalStatus",
      "dateOfBirth",
      "gender",
      "language",
      "employmentStatus",
    ].includes(fieldId)
  ) {
    return "Personal Details";
  }

  if (
    [
      "telAreaCode",
      "telNumber",
      "email",
      "cellAreaCode",
      "cellNumber",
      "workAreaCode",
      "workNumber",
      "alternativeNumber",
      "callbackTime",
    ].includes(fieldId)
  ) {
    return "Contact Details";
  }

  if (
    [
      "vdn",
      "brokerCode",
      "brokerOwnCode",
      "brokerFee",
      "fiBrokerCode",
      "fiName",
      "fiEmailAddress",
      "prefferdeConsultant",
      "contactSource",
      "contactSourceURL",
      "sponsor",
      "loadedBy",
      "uri",
    ].includes(fieldId)
  ) {
    return "Broker And Source";
  }

  if (
    [
      "companyName",
      "businessType",
      "vatNumber",
      "companyRegistrationNumber",
      "employeeNumber",
      "estateName",
      "estateUnitNumber",
      "dealerCode",
      "dealerName",
      "accountNumber",
      "membershipNo",
    ].includes(fieldId)
  ) {
    return "Business Details";
  }

  if (
    [
      "vehicleType",
      "vehicleModel",
      "vehicleCabType",
      "vehicleIdentificationNumber",
      "vehicleMMCode",
      "vehicleDeliveryDate",
      "vehicleEngineNumber",
      "numberOfCars",
      "previousInsurance",
      "vapsPolicytype",
      "tyreAndRimFlage",
    ].includes(fieldId)
  ) {
    return "Vehicle Details";
  }

  if (
    [
      "grossIncome",
      "totalPremium",
      "sumAssured",
      "hasHHInsurance",
      "sasriaYN",
      "sasriaPremium",
      "height",
      "weight",
      "itcScore",
      "itcVersion",
      "itcDate",
      "itcyn",
      "itcStatus",
      "product",
      "cashbag",
    ].includes(fieldId)
  ) {
    return "Policy And Financial";
  }

  if (
    [
      "referralNo",
      "referredPolicyNumber",
      "collectionPolicyNumber",
      "referedContactID",
      "referenceVernacContactID",
      "dedupeNotificationContactID",
      "dedupeReferenceNumber",
      "dedupeStatus",
      "incompleteLeadNumber",
    ].includes(fieldId)
  ) {
    return "Referral And Tracking";
  }

  if (
    [
      "contactType",
      "batchName",
      "longContactID",
      "contactID",
      "dateCreated",
      "system",
      "errorMessage",
      "workStationName",
      "workStationIp",
      "gclid",
      "brandCode",
      "comments",
      "nonMotorAssistantProduct",
      "brokerContatSequenceNumber",
    ].includes(fieldId)
  ) {
    return "System And Metadata";
  }

  return "Other";
}

export const contactRequestFieldOptions: ContactRequestFieldOption[] =
  contactRequestModelFieldIds.map((fieldId) => {
    const label = toTitleCase(fieldId);
    const type = inferFieldType(fieldId);

    return {
      id: fieldId,
      label,
      type,
      category: inferCategory(fieldId),
      placeholder: inferPlaceholder(fieldId, label),
      width: type === "textarea" ? 12 : 6,
      required: false,
      description: `${label} from the contact request model`,
    };
  });

export function createSectionId(title: string) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}

export function getAvailableContactRequestFields(usedFieldIds: string[]) {
  const used = new Set(usedFieldIds);
  return contactRequestFieldOptions.filter((field) => !used.has(field.id));
}

export function getGroupedAvailableContactRequestFields(
  usedFieldIds: string[],
) {
  const grouped = new Map<string, ContactRequestFieldOption[]>();

  getAvailableContactRequestFields(usedFieldIds).forEach((field) => {
    const bucket = grouped.get(field.category) ?? [];
    bucket.push(field);
    grouped.set(field.category, bucket);
  });

  return Array.from(grouped.entries()).map(([category, fields]) => ({
    category,
    fields,
  })) as ContactRequestFieldGroup[];
}

export function createEditableFieldFromCatalog(
  fieldId: string,
  section: EditablePartnerSection,
): EditablePartnerField | null {
  const template = contactRequestFieldOptions.find(
    (field) => field.id === fieldId,
  );

  if (!template) {
    return null;
  }

  return {
    ...template,
    isActive: true,
    sectionId: section.id,
    sectionTitle: section.title,
  };
}

export function flattenPartnerFields(
  config: PartnerConfig,
): EditablePartnerField[] {
  if (config.sections?.length) {
    return config.sections.flatMap((section) =>
      section.fields.map((field) => ({
        ...field,
        sectionId: section.id,
        sectionTitle: section.title,
      })),
    );
  }

  return config.fields.map((field) => ({
    ...field,
    sectionId: DEFAULT_SECTION_ID,
    sectionTitle: "Contact Details",
  }));
}

export function countActiveFields(config: PartnerConfig): number {
  return flattenPartnerFields(config).filter(
    (field) => field.isActive !== false,
  ).length;
}

export function updatePartnerFields(
  config: PartnerConfig,
  editableFields: EditablePartnerField[],
): PartnerConfig {
  const sectionSeed = config.sections
    ? config.sections.map((section) => ({
        ...section,
        fields: [] as FieldSchema[],
      }))
    : config.fields.length > 0
      ? [
          {
            id: DEFAULT_SECTION_ID,
            title: "Contact Details",
            fields: [] as FieldSchema[],
          },
        ]
      : [];

  const sectionMap = new Map(
    sectionSeed.map((section) => [section.id, section]),
  );

  editableFields.forEach(({ sectionId, sectionTitle, ...field }) => {
    const resolvedSectionId = sectionId || DEFAULT_SECTION_ID;
    if (!sectionMap.has(resolvedSectionId)) {
      sectionMap.set(resolvedSectionId, {
        id: resolvedSectionId,
        title: sectionTitle || "Custom Fields",
        fields: [],
      });
    }

    sectionMap.get(resolvedSectionId)!.fields.push(field);
  });

  const sections = Array.from(sectionMap.values()).filter(
    (section) => section.fields.length > 0,
  );

  return {
    ...config,
    fields: sections.flatMap((section) => section.fields),
    sections,
  };
}
