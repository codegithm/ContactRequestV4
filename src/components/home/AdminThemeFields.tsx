import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ColorField, HslColorField } from "@/components/home/ColorPicker";
import { Palette, Layout, Type, SlidersHorizontal } from "lucide-react";

interface AdminThemeFieldsProps {
  /** Optional: shown in the live preview to make it feel real */
  previewPartnerName?: string;
  previewHeadline?: string;
  previewDescription?: string;
  themePrimary: string;
  themePrimaryForeground: string;
  themeRadius: string;
  themePageBackground: string;
  themeHeaderBackground: string;
  themeFooterBackground: string;
  themeCardBackground: string;
  themeCardBorder: string;
  themeHeadlineColor: string;
  themeDescriptionColor: string;
  themeBodyTextColor: string;
  themeBadgeStyle: "soft" | "solid";
  radixAccentColor: string;
  radixGrayColor: string;
  radixRadius: string;
  radixScaling: string;
  radixPanelBackground: string;
  radixAppearance: string;
  onThemePrimaryChange: (v: string) => void;
  onThemePrimaryForegroundChange: (v: string) => void;
  onThemeRadiusChange: (v: string) => void;
  onThemePageBackgroundChange: (v: string) => void;
  onThemeHeaderBackgroundChange: (v: string) => void;
  onThemeFooterBackgroundChange: (v: string) => void;
  onThemeCardBackgroundChange: (v: string) => void;
  onThemeCardBorderChange: (v: string) => void;
  onThemeHeadlineColorChange: (v: string) => void;
  onThemeDescriptionColorChange: (v: string) => void;
  onThemeBodyTextColorChange: (v: string) => void;
  onThemeBadgeStyleChange: (v: "soft" | "solid") => void;
  onRadixAccentColorChange: (v: string) => void;
  onRadixGrayColorChange: (v: string) => void;
  onRadixRadiusChange: (v: string) => void;
  onRadixScalingChange: (v: string) => void;
  onRadixPanelBackgroundChange: (v: string) => void;
  onRadixAppearanceChange: (v: string) => void;
}

export default function AdminThemeFields({
  previewPartnerName,
  previewHeadline,
  previewDescription,
  themePrimary,
  themePrimaryForeground,
  themeRadius,
  themePageBackground,
  themeHeaderBackground,
  themeFooterBackground,
  themeCardBackground,
  themeCardBorder,
  themeHeadlineColor,
  themeDescriptionColor,
  themeBodyTextColor,
  themeBadgeStyle,
  radixAccentColor,
  radixGrayColor,
  radixRadius,
  radixScaling,
  radixPanelBackground,
  radixAppearance,
  onThemePrimaryChange,
  onThemePrimaryForegroundChange,
  onThemeRadiusChange,
  onThemePageBackgroundChange,
  onThemeHeaderBackgroundChange,
  onThemeFooterBackgroundChange,
  onThemeCardBackgroundChange,
  onThemeCardBorderChange,
  onThemeHeadlineColorChange,
  onThemeDescriptionColorChange,
  onThemeBodyTextColorChange,
  onThemeBadgeStyleChange,
  onRadixAccentColorChange,
  onRadixGrayColorChange,
  onRadixRadiusChange,
  onRadixScalingChange,
  onRadixPanelBackgroundChange,
  onRadixAppearanceChange,
}: AdminThemeFieldsProps) {
  const displayName = previewPartnerName?.trim() || "Partner Preview";
  const displayInitial = displayName.charAt(0).toUpperCase();
  const displayHeadline = previewHeadline?.trim() || `Contact ${displayName}`;
  const displayDescription =
    previewDescription?.trim() ||
    "Fill in your details and we'll be in touch shortly.";

  const pPrimary = `hsl(${themePrimary || "220 14% 20%"})`;
  const pPrimaryFg = `hsl(${themePrimaryForeground || "0 0% 100%"})`;
  const pPageBg = themePageBackground || "#f8fafc";
  const pHeaderBg = themeHeaderBackground || "rgba(255,255,255,0.92)";
  const pFooterBg = themeFooterBackground || "rgba(255,255,255,0.9)";
  const pCardBg = themeCardBackground || "rgba(255,255,255,0.95)";
  const pCardBorder = themeCardBorder || "rgba(15,23,42,0.1)";
  const pHeadline = themeHeadlineColor || "#0f172a";
  const pDesc = themeDescriptionColor || "#475569";
  const pBody = themeBodyTextColor || "#0f172a";
  const pRadius = themeRadius || "8px";

  const badgeBg =
    themeBadgeStyle === "solid"
      ? pPrimary
      : `color-mix(in srgb, ${pPrimary} 15%, white)`;
  const badgeFg = themeBadgeStyle === "solid" ? pPrimaryFg : pPrimary;
  const badgeBorder =
    themeBadgeStyle === "soft"
      ? `1px solid ${pPrimary}`
      : "1px solid transparent";

  const selectClass =
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm";

  return (
    <>
      {/* ── LIVE PREVIEW ──────────────────────────────────────────── */}
      <div className="md:col-span-2 rounded-lg border border-border overflow-hidden shadow-sm">
        {/* Preview toolbar */}
        <div className="flex items-center justify-between gap-2 px-3 py-2 bg-muted/60 border-b border-border">
          <p className="text-xs font-semibold text-foreground">
            Live Theme Preview
          </p>
          <p className="text-[11px] text-muted-foreground">
            Updates as you change settings below
          </p>
        </div>

        {/* Mini partner page */}
        <div style={{ background: pPageBg }}>
          {/* Header */}
          <div
            style={{
              background: pHeaderBg,
              borderBottom: `1px solid ${pCardBorder}`,
            }}
            className="px-4 py-2.5 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <div
                style={{
                  background: pPrimary,
                  borderRadius: pRadius,
                  width: 24,
                  height: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    color: pPrimaryFg,
                    fontSize: 10,
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {displayInitial}
                </span>
              </div>
              <span
                style={{
                  color: pBody,
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                {displayName}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                style={{
                  background: badgeBg,
                  color: badgeFg,
                  border: badgeBorder,
                  borderRadius: pRadius,
                  fontSize: 9,
                  fontWeight: 500,
                  padding: "2px 8px",
                }}
              >
                Feedback
              </span>
              <span style={{ color: pDesc, fontSize: 9 }}>🔒 Secure</span>
            </div>
          </div>

          {/* Page content */}
          <div style={{ padding: "16px" }}>
            {/* Headline + description */}
            <div style={{ marginBottom: 12 }}>
              <p
                style={{
                  color: pHeadline,
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 3,
                  lineHeight: 1.3,
                }}
              >
                {displayHeadline}
              </p>
              <p
                style={{
                  color: pDesc,
                  fontSize: 10,
                  lineHeight: 1.5,
                }}
              >
                {displayDescription}
              </p>
            </div>

            {/* Form card */}
            <div
              style={{
                background: pCardBg,
                border: `1px solid ${pCardBorder}`,
                borderRadius: pRadius,
                padding: "12px 14px 14px",
              }}
            >
              {/* Mock field: Full Name */}
              <div style={{ marginBottom: 8 }}>
                <div
                  style={{
                    color: pBody,
                    fontSize: 9,
                    fontWeight: 500,
                    marginBottom: 3,
                  }}
                >
                  Full Name
                </div>
                <div
                  style={{
                    border: `1px solid ${pCardBorder}`,
                    borderRadius: pRadius,
                    height: 22,
                    background: "rgba(255,255,255,0.55)",
                    padding: "0 7px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: pDesc, fontSize: 9 }}>
                    e.g. John Smith
                  </span>
                </div>
              </div>

              {/* Mock field: Phone */}
              <div style={{ marginBottom: 11 }}>
                <div
                  style={{
                    color: pBody,
                    fontSize: 9,
                    fontWeight: 500,
                    marginBottom: 3,
                  }}
                >
                  Phone Number
                </div>
                <div
                  style={{
                    border: `1px solid ${pCardBorder}`,
                    borderRadius: pRadius,
                    height: 22,
                    background: "rgba(255,255,255,0.55)",
                    padding: "0 7px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: pDesc, fontSize: 9 }}>+27 ...</span>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="button"
                style={{
                  background: pPrimary,
                  color: pPrimaryFg,
                  borderRadius: pRadius,
                  border: "none",
                  width: "100%",
                  padding: "6px 0",
                  fontSize: 10,
                  fontWeight: 500,
                  cursor: "default",
                }}
              >
                Submit Request
              </button>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              background: pFooterBg,
              borderTop: `1px solid ${pCardBorder}`,
              padding: "7px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ color: pDesc, fontSize: 9 }}>
              Powered by{" "}
              <span style={{ color: pBody, fontWeight: 600 }}>
                ContactRequest
              </span>
            </span>
            <div style={{ display: "flex", gap: 10 }}>
              <span style={{ color: pDesc, fontSize: 9 }}>Privacy</span>
              <span style={{ color: pDesc, fontSize: 9 }}>Terms</span>
            </div>
          </div>
        </div>

        {/* Color legend */}
        <div className="px-3 py-2 bg-muted/40 border-t border-border">
          <p className="text-[10px] font-medium text-muted-foreground mb-1.5">
            What you see above:
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {(
              [
                [pPrimary, "Brand / button / badge"],
                [pPageBg, "Page background"],
                [pHeaderBg, "Header surface"],
                [pCardBg, "Form card"],
                [pFooterBg, "Footer surface"],
                [pHeadline, "Headline text"],
                [pDesc, "Description & helper text"],
                [pBody, "Body text"],
              ] as [string, string][]
            ).map(([color, label]) => (
              <div key={label} className="flex items-center gap-1.5">
                <span
                  className="w-3 h-3 rounded-sm border border-border/60 flex-shrink-0"
                  style={{ background: color }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BRAND COLORS ──────────────────────────────────────────── */}
      <div className="md:col-span-2 rounded-lg border border-border bg-muted/20 p-4 space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <Palette className="w-3.5 h-3.5 text-muted-foreground" />
            <h4 className="text-sm font-semibold text-foreground">
              Brand Colors
            </h4>
          </div>
          <p className="text-[11px] text-muted-foreground">
            The primary color drives buttons, the brand badge, and interactive
            highlights. The foreground color is the text/icon drawn on top of
            it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <HslColorField
              id="themePrimary"
              label="Primary Color"
              value={themePrimary}
              placeholder="210 100% 35%"
              fallbackHex="#1d4ed8"
              onChange={onThemePrimaryChange}
            />
            <p className="text-[11px] text-muted-foreground">
              Buttons, brand badge background, interactive highlights.
            </p>
          </div>
          <div className="space-y-1">
            <HslColorField
              id="themePrimaryForeground"
              label="Primary Foreground"
              value={themePrimaryForeground}
              placeholder="0 0% 100%"
              fallbackHex="#ffffff"
              onChange={onThemePrimaryForegroundChange}
            />
            <p className="text-[11px] text-muted-foreground">
              Text and icons rendered on top of the primary color (e.g. button
              label).
            </p>
          </div>
        </div>
      </div>

      {/* ── SHAPE ─────────────────────────────────────────────────── */}
      <div className="space-y-1">
        <div className="flex items-center gap-1.5 mb-1">
          <Layout className="w-3.5 h-3.5 text-muted-foreground" />
          <Label htmlFor="themeRadius" className="text-sm font-semibold">
            Border Radius
          </Label>
        </div>
        <Input
          id="themeRadius"
          value={themeRadius}
          onChange={(e) => onThemeRadiusChange(e.target.value)}
          placeholder="8px"
        />
        <p className="text-[11px] text-muted-foreground">
          Controls roundness for cards, buttons, inputs, and the brand badge
          (e.g. <code>4px</code>, <code>12px</code>, <code>0.5rem</code>).
        </p>
      </div>

      <div className="space-y-1">
        <Label htmlFor="themeBadgeStyle" className="text-sm font-semibold">
          Badge / Chip Style
        </Label>
        <select
          id="themeBadgeStyle"
          value={themeBadgeStyle}
          onChange={(e) =>
            onThemeBadgeStyleChange(e.target.value as "soft" | "solid")
          }
          className={selectClass}
        >
          <option value="soft">Soft – lightly tinted with a border</option>
          <option value="solid">Solid – fully filled with primary color</option>
        </select>
        <p className="text-[11px] text-muted-foreground">
          Affects the Feedback chip in the header and status badges.
        </p>
      </div>

      {/* ── SURFACE COLORS ────────────────────────────────────────── */}
      <details className="md:col-span-2 rounded-lg border border-border bg-muted/20 p-4">
        <summary className="cursor-pointer flex items-center gap-2 text-sm font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden">
          <SlidersHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
          Surface Colors
          <span className="ml-auto text-[11px] font-normal text-muted-foreground">
            Click to expand
          </span>
        </summary>
        <p className="mt-2 text-[11px] text-muted-foreground">
          Controls the background of each major zone: the outer page canvas,
          header bar, footer bar, and the form card.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <ColorField
              id="themePageBackground"
              label="Page Background"
              value={themePageBackground}
              placeholder="#f8fafc"
              fallbackHex="#f8fafc"
              onChange={onThemePageBackgroundChange}
              colSpan2={false}
            />
            <p className="text-[11px] text-muted-foreground">
              The full-page canvas visible behind all content.
            </p>
          </div>
          <div className="space-y-1">
            <ColorField
              id="themeHeaderBackground"
              label="Header Background"
              value={themeHeaderBackground}
              placeholder="#ffffff"
              fallbackHex="#ffffff"
              onChange={onThemeHeaderBackgroundChange}
              colSpan2={false}
            />
            <p className="text-[11px] text-muted-foreground">
              Top navigation bar with the brand badge and partner name.
            </p>
          </div>
          <div className="space-y-1">
            <ColorField
              id="themeCardBackground"
              label="Form Card Background"
              value={themeCardBackground}
              placeholder="#ffffff"
              fallbackHex="#ffffff"
              onChange={onThemeCardBackgroundChange}
              colSpan2={false}
            />
            <p className="text-[11px] text-muted-foreground">
              The surface of the form container card.
            </p>
          </div>
          <div className="space-y-1">
            <ColorField
              id="themeCardBorder"
              label="Card Border Color"
              value={themeCardBorder}
              placeholder="rgba(15,23,42,0.1)"
              fallbackHex="#0f172a"
              onChange={onThemeCardBorderChange}
              colSpan2={false}
            />
            <p className="text-[11px] text-muted-foreground">
              Border used on the form card, dividers, and input outlines.
            </p>
          </div>
          <div className="space-y-1">
            <ColorField
              id="themeFooterBackground"
              label="Footer Background"
              value={themeFooterBackground}
              placeholder="#ffffff"
              fallbackHex="#ffffff"
              onChange={onThemeFooterBackgroundChange}
              colSpan2={false}
            />
            <p className="text-[11px] text-muted-foreground">
              Bottom strip with the "Powered by" text and policy links.
            </p>
          </div>
        </div>
      </details>

      {/* ── TEXT COLORS ───────────────────────────────────────────── */}
      <details className="md:col-span-2 rounded-lg border border-border bg-muted/20 p-4">
        <summary className="cursor-pointer flex items-center gap-2 text-sm font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden">
          <Type className="w-3.5 h-3.5 text-muted-foreground" />
          Text Colors
          <span className="ml-auto text-[11px] font-normal text-muted-foreground">
            Click to expand
          </span>
        </summary>
        <p className="mt-2 text-[11px] text-muted-foreground">
          Controls the three text layers: large page titles, descriptive
          subtitles, and general body copy.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <ColorField
              id="themeHeadlineColor"
              label="Headline Color"
              value={themeHeadlineColor}
              placeholder="#0f172a"
              fallbackHex="#0f172a"
              onChange={onThemeHeadlineColorChange}
              colSpan2={false}
            />
            <p className="text-[11px] text-muted-foreground">
              Large page title (e.g. "Contact Acme Corp").
            </p>
          </div>
          <div className="space-y-1">
            <ColorField
              id="themeDescriptionColor"
              label="Description Color"
              value={themeDescriptionColor}
              placeholder="#475569"
              fallbackHex="#475569"
              onChange={onThemeDescriptionColorChange}
              colSpan2={false}
            />
            <p className="text-[11px] text-muted-foreground">
              Subtitle text, helper copy, and muted labels.
            </p>
          </div>
          <div className="space-y-1">
            <ColorField
              id="themeBodyTextColor"
              label="Body Text Color"
              value={themeBodyTextColor}
              placeholder="#0f172a"
              fallbackHex="#0f172a"
              onChange={onThemeBodyTextColorChange}
              colSpan2={false}
            />
            <p className="text-[11px] text-muted-foreground">
              General content text and field labels.
            </p>
          </div>
        </div>
      </details>

      {/* ── ADVANCED RADIX ────────────────────────────────────────── */}
      <details className="md:col-span-2 rounded-lg border border-border bg-muted/20 p-4">
        <summary className="cursor-pointer flex items-center gap-2 text-sm font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden">
          <SlidersHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
          Advanced Radix Theme Options
          <span className="ml-auto text-[11px] font-normal text-muted-foreground">
            Click to expand
          </span>
        </summary>
        <p className="mt-2 text-[11px] text-muted-foreground">
          Fine-tune the underlying Radix UI theme tokens. These affect semantic
          component colours and spacing that sit beneath the custom overrides
          above.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="radixAccentColor">Accent Color</Label>
            <select
              id="radixAccentColor"
              value={radixAccentColor}
              onChange={(e) => onRadixAccentColorChange(e.target.value)}
              className={selectClass}
            >
              <option value="blue">Blue</option>
              <option value="crimson">Crimson</option>
              <option value="green">Green</option>
              <option value="amber">Amber</option>
              <option value="violet">Violet</option>
              <option value="teal">Teal</option>
              <option value="orange">Orange</option>
              <option value="red">Red</option>
              <option value="indigo">Indigo</option>
              <option value="mint">Mint</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="radixGrayColor">Gray Scale</Label>
            <select
              id="radixGrayColor"
              value={radixGrayColor}
              onChange={(e) => onRadixGrayColorChange(e.target.value)}
              className={selectClass}
            >
              <option value="slate">Slate</option>
              <option value="mauve">Mauve</option>
              <option value="sage">Sage</option>
              <option value="olive">Olive</option>
              <option value="sand">Sand</option>
              <option value="gray">Gray</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="radixRadius">Component Radius</Label>
            <select
              id="radixRadius"
              value={radixRadius}
              onChange={(e) => onRadixRadiusChange(e.target.value)}
              className={selectClass}
            >
              <option value="none">None – sharp corners</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="full">Full – pill shapes</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="radixScaling">UI Scaling</Label>
            <select
              id="radixScaling"
              value={radixScaling}
              onChange={(e) => onRadixScalingChange(e.target.value)}
              className={selectClass}
            >
              <option value="90%">90% – compact</option>
              <option value="95%">95%</option>
              <option value="100%">100% – default</option>
              <option value="105%">105%</option>
              <option value="110%">110% – spacious</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="radixPanelBackground">Panel Background</Label>
            <select
              id="radixPanelBackground"
              value={radixPanelBackground}
              onChange={(e) => onRadixPanelBackgroundChange(e.target.value)}
              className={selectClass}
            >
              <option value="translucent">Translucent</option>
              <option value="solid">Solid</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="radixAppearance">Appearance Mode</Label>
            <select
              id="radixAppearance"
              value={radixAppearance}
              onChange={(e) => onRadixAppearanceChange(e.target.value)}
              className={selectClass}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="inherit">Inherit from system</option>
            </select>
          </div>
        </div>
      </details>
    </>
  );
}
