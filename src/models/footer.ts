export interface PartnerFooterLink {
  label: string;
  url?: string;
  /** Semantic type for analytics/styling */
  type?: "privacy" | "terms" | "contact" | "custom";
}

export interface PartnerFooterConfig {
  /** Show the "Powered by" label. Default: true */
  showPoweredBy?: boolean;
  /** Override the brand shown in "Powered by". Default: "ContactRequest" */
  poweredByLabel?: string;
  /** Make the powered-by text a link */
  poweredByUrl?: string;
  /** Footer nav links */
  links?: PartnerFooterLink[];
  /**
   * split (default): powered-by left, links right
   * centered: everything centred
   * links-only: no powered-by, links centred
   */
  layout?: "split" | "centered" | "links-only";
  /** Small disclaimer/legal note shown below the main footer row */
  note?: string;
}
