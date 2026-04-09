import { areApiCallsEnabled, buildApiUrl } from "@/config/environment";
import type {
  ContactReportRequest,
  ContactReportResponse,
} from "@/models/report";
export const CONTACT_REPORT_ENDPOINT = buildApiUrl(
  "/Contacts/GetContactRequestReport",
);
const reportFieldAliasMap: Record<string, keyof ContactReportRequest> = {
  fromdate: "FromDate",
  todate: "ToDate",
  ibonumber: "IBONumber",
  contactid: "ContactID",
  contactidlegacy: "ContactID",
  cellnumber: "CellNumber",
  cellphone: "CellNumber",
  phone: "CellNumber",
  vdn: "VDN",
  campaignid: "CampaignID",
  brokercode: "BrokerCode",
};
export function buildContactReportRequest(
  criteria: Record<string, string>,
): ContactReportRequest {
  const payload: ContactReportRequest = {};
  Object.entries(criteria).forEach(([key, rawValue]) => {
    const value = rawValue.trim();
    if (!value) return;
    const normalized = key.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const mappedField = reportFieldAliasMap[normalized];
    if (!mappedField) return;
    payload[mappedField] = value;
  });
  return payload;
}
export async function fetchContactReport(
  request: ContactReportRequest,
): Promise<ContactReportResponse> {
  if (!areApiCallsEnabled()) {
    return {
      Success: true,
      Message: "API calls are disabled for this environment.",
      Data: [],
    };
  }
  const response = await fetch(CONTACT_REPORT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });
  const payload = (await response.json()) as ContactReportResponse;
  if (!response.ok) {
    throw new Error(payload?.Message || "Failed to fetch report.");
  }
  return payload;
}
