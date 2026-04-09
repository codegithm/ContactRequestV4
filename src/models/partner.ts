import type { PartnerFooterConfig } from "./footer";
import type { PartnerSettings } from "./settings";
import type { FieldSchema, FormSection, ReportSearchField } from "./form";
export interface PartnerRadixTheme {
    accentColor?: "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky";
    grayColor?: "auto" | "gray" | "mauve" | "slate" | "sage" | "olive" | "sand";
    radius?: "none" | "small" | "medium" | "large" | "full";
    scaling?: "90%" | "95%" | "100%" | "105%" | "110%";
    panelBackground?: "solid" | "translucent";
    appearance?: "inherit" | "light" | "dark";
}
export interface PartnerConfig {
    partnerId: string;
    partnerName: string;
    isActive?: boolean;
    logoUrl?: string;
    bannerUrl?: string;
    attachBannerToFormTop?: boolean;
    theme: {
        primary: string;
        primaryForeground?: string;
        radius: string;
        pageBackground?: string;
        headerBackground?: string;
        footerBackground?: string;
        cardBackground?: string;
        cardBorder?: string;
        headlineColor?: string;
        descriptionColor?: string;
        bodyTextColor?: string;
        badgeStyle?: "soft" | "solid";
        radix?: PartnerRadixTheme;
    };
    headline?: string;
    description?: string;
    submitLabel: string;
    successMessage?: string;
    fields: FieldSchema[];
    sections?: FormSection[];
    settings?: PartnerSettings;
    termsAndConditions?: string;
    feedback?: boolean;
    feedbackSearchFields?: ReportSearchField[];
    footer?: PartnerFooterConfig;
}
