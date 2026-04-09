export interface ReportItem {
  ContactID: string;
  CellNo: string;
  HomePhone: string;
  Name: string;
  LeadNumber: string;
  Status: string;
  PolicyNumber: string;
}

export interface ContactReportResponse {
  Success: boolean;
  Message?: string;
  Data?: ReportItem[];
}

export interface ContactReportRequest {
  FromDate?: string;
  ToDate?: string;
  IBONumber?: string;
  ContactID?: string;
  CellNumber?: string;
  VDN?: string;
  CampaignID?: string;
  BrokerCode?: string;
}
