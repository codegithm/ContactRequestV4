export type PartnerSettingValue = string | number | boolean | null;

export interface PartnerSettings {
  vdn?: PartnerSettingValue;
  brokerCode?: PartnerSettingValue;
  extra?: Record<string, PartnerSettingValue>;
}
