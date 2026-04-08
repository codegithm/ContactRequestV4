import { Palette, Shield, Zap } from "lucide-react";

export const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

export const homeFeatureCards = [
  {
    icon: Palette,
    title: "Partner Theming",
    desc: "Radix Theme tokens per partner",
  },
  {
    icon: Zap,
    title: "Dynamic Fields",
    desc: "Schema-driven form rendering",
  },
  //   {
  //     icon: Shield,
  //     title: "Auth Guard",
  //     desc: "Route-level partner validation",
  //   },
];

export const defaultThemePrimary = "220 14% 20%";
export const defaultThemePrimaryForeground = "0 0% 100%";
export const defaultThemeRadius = "8px";
export const defaultThemePageBackground = "#f8fafc";
export const defaultThemeHeaderBackground = "rgba(255,255,255,0.92)";
export const defaultThemeFooterBackground = "rgba(255,255,255,0.9)";
export const defaultThemeCardBackground = "rgba(255,255,255,0.95)";
export const defaultThemeCardBorder = "rgba(15,23,42,0.1)";
export const defaultThemeHeadlineColor = "#0f172a";
export const defaultThemeDescriptionColor = "#475569";
export const defaultThemeBodyTextColor = "#0f172a";
export const defaultRadixAccentColor = "blue" as const;
export const defaultRadixGrayColor = "slate" as const;
export const defaultRadixRadius = "medium" as const;
export const defaultRadixScaling = "100%" as const;
export const defaultRadixPanelBackground = "translucent" as const;
export const defaultRadixAppearance = "light" as const;

// Footer defaults
export const defaultFooterLayout = "split" as const;
export const defaultFooterPoweredByLabel = "ContactRequest";
export const defaultFooterLinksJson =
  '[{"label":"Privacy","type":"privacy"},{"label":"Terms","type":"terms"}]';
export const defaultFooterLogosJson = "[]";
