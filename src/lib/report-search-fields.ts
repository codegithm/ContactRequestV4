import type { ReportSearchField } from "@/models/form";
export interface ReportSearchOption extends ReportSearchField {
    id: "FromDate" | "ToDate" | "IBONumber" | "ContactID" | "CellNumber" | "VDN" | "CampaignID" | "BrokerCode";
}
export const reportSearchOptions: ReportSearchOption[] = [
    {
        id: "FromDate",
        label: "From Date",
        placeholder: "Select start date",
        type: "date",
    },
    {
        id: "ToDate",
        label: "To Date",
        placeholder: "Select end date",
        type: "date",
    },
    {
        id: "IBONumber",
        label: "IBO Number",
        placeholder: "Enter IBO number",
        type: "text",
    },
    {
        id: "ContactID",
        label: "Contact ID",
        placeholder: "Enter contact ID",
        type: "text",
    },
    {
        id: "CellNumber",
        label: "Cell Number",
        placeholder: "Enter cell number",
        type: "tel",
    },
    {
        id: "VDN",
        label: "VDN",
        placeholder: "Enter VDN",
        type: "text",
    },
    {
        id: "CampaignID",
        label: "Campaign ID",
        placeholder: "Enter campaign ID",
        type: "text",
    },
    {
        id: "BrokerCode",
        label: "Broker Code",
        placeholder: "Enter broker code",
        type: "text",
    },
];
export const defaultReportSearchFieldIds: ReportSearchOption["id"][] = [
    "ContactID",
];
export function buildReportSearchFields(fieldIds: string[]): ReportSearchField[] {
    const selectedIds = new Set(fieldIds);
    return reportSearchOptions.filter((option) => selectedIds.has(option.id));
}
