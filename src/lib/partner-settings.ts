import { contactRequestModelFieldIds } from "@/models/contact";
import type { ExtraPartnerSettingKey, PartnerSettings, PartnerSettingValue, } from "@/models/settings";
export type ExtraSettingValueType = "string" | "number" | "boolean" | "null";
export interface ExtraSettingDraft {
    id: string;
    fieldId: ExtraPartnerSettingKey | "";
    valueType: ExtraSettingValueType;
    value: string;
}
export interface ExtraSettingFieldOption {
    value: ExtraPartnerSettingKey;
    label: string;
}
const reservedSettingKeys = new Set(["vdn", "brokerCode", "extra"]);
export const extraPartnerSettingFieldIds = contactRequestModelFieldIds.filter((fieldId): fieldId is ExtraPartnerSettingKey => fieldId !== "vdn" && fieldId !== "brokerCode");
function createDraftId() {
    return `extra-${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}
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
export const extraSettingFieldOptions: ExtraSettingFieldOption[] = extraPartnerSettingFieldIds.map((fieldId) => ({
    value: fieldId,
    label: toTitleCase(fieldId),
}));
export function createEmptyExtraSettingDraft(): ExtraSettingDraft {
    return {
        id: createDraftId(),
        fieldId: "",
        valueType: "string",
        value: "",
    };
}
export function isExtraPartnerSettingKey(value: string): value is ExtraPartnerSettingKey {
    return extraPartnerSettingFieldIds.includes(value as ExtraPartnerSettingKey);
}
function inferDraftValueType(value: PartnerSettingValue): ExtraSettingValueType {
    if (value === null) {
        return "null";
    }
    if (typeof value === "boolean") {
        return "boolean";
    }
    if (typeof value === "number") {
        return "number";
    }
    return "string";
}
function formatDraftValue(value: PartnerSettingValue): string {
    if (value === null) {
        return "";
    }
    if (typeof value === "boolean") {
        return value ? "true" : "false";
    }
    return String(value);
}
function parseDraftValue(draft: ExtraSettingDraft): PartnerSettingValue {
    if (draft.valueType === "null") {
        return null;
    }
    if (draft.valueType === "boolean") {
        return draft.value === "true";
    }
    if (draft.valueType === "number") {
        const parsed = Number(draft.value.trim());
        return Number.isFinite(parsed) ? parsed : draft.value;
    }
    return draft.value;
}
export function buildExtraSettingDrafts(settings: PartnerSettings | undefined): ExtraSettingDraft[] {
    if (!settings) {
        return [];
    }
    const mergedEntries = new Map<ExtraPartnerSettingKey, PartnerSettingValue>();
    Object.entries(settings.extra ?? {}).forEach(([fieldId, value]) => {
        if (!isExtraPartnerSettingKey(fieldId)) {
            return;
        }
        mergedEntries.set(fieldId, value);
    });
    Object.entries(settings as Record<string, PartnerSettingValue>).forEach(([fieldId, value]) => {
        if (reservedSettingKeys.has(fieldId)) {
            return;
        }
        if (!isExtraPartnerSettingKey(fieldId) || mergedEntries.has(fieldId)) {
            return;
        }
        mergedEntries.set(fieldId, value);
    });
    return Array.from(mergedEntries.entries()).map(([fieldId, value]) => ({
        id: createDraftId(),
        fieldId,
        valueType: inferDraftValueType(value),
        value: formatDraftValue(value),
    }));
}
export function serializeExtraSettingDrafts(drafts: ExtraSettingDraft[]): Partial<Record<ExtraPartnerSettingKey, PartnerSettingValue>> | undefined {
    const serializedEntries = drafts.reduce<Partial<Record<ExtraPartnerSettingKey, PartnerSettingValue>>>((result, draft) => {
        if (!draft.fieldId) {
            return result;
        }
        result[draft.fieldId] = parseDraftValue(draft);
        return result;
    }, {});
    return Object.keys(serializedEntries).length > 0
        ? serializedEntries
        : undefined;
}
export function getUnusedExtraSettingFieldOptions(drafts: ExtraSettingDraft[], currentDraftId?: string): ExtraSettingFieldOption[] {
    const usedFieldIds = new Set(drafts
        .filter((draft) => draft.id !== currentDraftId && draft.fieldId)
        .map((draft) => draft.fieldId));
    return extraSettingFieldOptions.filter((option) => !usedFieldIds.has(option.value));
}
