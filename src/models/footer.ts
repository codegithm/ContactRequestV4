export interface PartnerFooterLink {
    label: string;
    url?: string;
    type?: "privacy" | "terms" | "contact" | "custom";
}
export interface PartnerFooterLogo {
    label: string;
    logoUrl: string;
    url?: string;
}
export interface PartnerFooterConfig {
    showPoweredBy?: boolean;
    poweredByLabel?: string;
    poweredByUrl?: string;
    links?: PartnerFooterLink[];
    logos?: PartnerFooterLogo[];
    layout?: "split" | "centered" | "links-only";
    note?: string;
}
