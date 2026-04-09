import type { ContactRequestModel } from "./contact";
export type PartnerSettingValue = string | number | boolean | null;
export type ExtraPartnerSettingKey = Exclude<keyof ContactRequestModel, "vdn" | "brokerCode">;
export interface PartnerSettings {
    vdn?: PartnerSettingValue;
    brokerCode?: PartnerSettingValue;
    extra?: Partial<Record<ExtraPartnerSettingKey, PartnerSettingValue>>;
}
