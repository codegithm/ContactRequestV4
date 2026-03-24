import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ColorField, HslColorField } from "@/components/home/ColorPicker";

interface AdminThemeFieldsProps {
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
  const previewPrimary = `hsl(${themePrimary || "220 14% 20%"})`;
  const previewPrimaryForeground = `hsl(${themePrimaryForeground || "0 0% 100%"})`;
  const previewPageBackground = themePageBackground || "#f8fafc";
  const previewHeaderBackground = themeHeaderBackground || "#ffffff";
  const previewFooterBackground = themeFooterBackground || "#ffffff";
  const previewCardBackground = themeCardBackground || "#ffffff";
  const previewCardBorder = themeCardBorder || "rgba(15, 23, 42, 0.12)";
  const previewHeadlineColor = themeHeadlineColor || "#0f172a";
  const previewDescriptionColor = themeDescriptionColor || "#475569";
  const previewBodyTextColor = themeBodyTextColor || "#0f172a";

  return (
    <>
      <div className="space-y-2 md:col-span-2 rounded-md border border-border bg-muted/20 p-3">
        <p className="text-sm font-semibold text-foreground">
          Theme Impact Preview
        </p>
        <p className="text-xs text-muted-foreground">
          Changes here affect visuals only and are not saved until you click
          save.
        </p>
        <div
          className="rounded-md border p-3 space-y-2"
          style={{
            background: previewPageBackground,
            borderColor: previewCardBorder,
            borderRadius: themeRadius || "8px",
          }}
        >
          <div
            className="rounded px-3 py-2 text-xs"
            style={{
              background: previewHeaderBackground,
              color: previewBodyTextColor,
            }}
          >
            Header surface
          </div>
          <div
            className="rounded border px-3 py-3"
            style={{
              background: previewCardBackground,
              borderColor: previewCardBorder,
              borderRadius: themeRadius || "8px",
            }}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs" style={{ color: previewBodyTextColor }}>
                Card surface
              </span>
              <span
                className="inline-flex items-center rounded px-2 py-1 text-[11px] font-medium"
                style={{
                  background:
                    themeBadgeStyle === "solid"
                      ? previewPrimary
                      : "color-mix(in srgb, " + previewPrimary + " 15%, white)",
                  color:
                    themeBadgeStyle === "solid"
                      ? previewPrimaryForeground
                      : previewPrimary,
                  border:
                    themeBadgeStyle === "soft"
                      ? `1px solid ${previewPrimary}`
                      : "1px solid transparent",
                }}
              >
                {themeBadgeStyle === "solid" ? "Solid badge" : "Soft badge"}
              </span>
            </div>
            <p
              className="mt-2 text-sm font-semibold"
              style={{ color: previewHeadlineColor }}
            >
              Header text preview
            </p>
            <p className="text-xs" style={{ color: previewDescriptionColor }}>
              Description text preview for helper copy and subtitles.
            </p>
            <button
              type="button"
              className="mt-3 rounded px-3 py-1.5 text-xs font-medium"
              style={{
                background: previewPrimary,
                color: previewPrimaryForeground,
                borderRadius: themeRadius || "8px",
              }}
            >
              Primary action
            </button>
          </div>
          <div
            className="rounded px-3 py-2 text-xs"
            style={{
              background: previewFooterBackground,
              color: previewBodyTextColor,
            }}
          >
            Footer surface
          </div>
        </div>
      </div>

      <HslColorField
        id="themePrimary"
        label="Theme Primary (HSL components)"
        value={themePrimary}
        placeholder="210 100% 35%"
        fallbackHex="#1d4ed8"
        onChange={onThemePrimaryChange}
      />
      <p className="text-[11px] text-muted-foreground -mt-1">
        Affects buttons, active controls, and key highlights.
      </p>
      <HslColorField
        id="themePrimaryForeground"
        label="Primary Foreground (HSL components)"
        value={themePrimaryForeground}
        placeholder="0 0% 100%"
        fallbackHex="#ffffff"
        onChange={onThemePrimaryForegroundChange}
      />
      <p className="text-[11px] text-muted-foreground -mt-1">
        Text/icon color shown on top of the primary color.
      </p>
      <div className="space-y-2">
        <Label htmlFor="themeRadius">Theme Radius</Label>
        <Input
          id="themeRadius"
          value={themeRadius}
          onChange={(e) => onThemeRadiusChange(e.target.value)}
          placeholder="8px"
        />
        <p className="text-[11px] text-muted-foreground">
          Controls how rounded cards, buttons, and inputs appear.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="themeBadgeStyle">Badge Style</Label>
        <select
          id="themeBadgeStyle"
          value={themeBadgeStyle}
          onChange={(e) =>
            onThemeBadgeStyleChange(e.target.value as "soft" | "solid")
          }
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="soft">Soft</option>
          <option value="solid">Solid</option>
        </select>
        <p className="text-[11px] text-muted-foreground">
          Soft uses light tinted badges; solid uses full primary color.
        </p>
      </div>
      <details className="md:col-span-2 rounded-md border border-border bg-muted/20 p-3">
        <summary className="cursor-pointer text-sm font-medium text-foreground">
          Text Colors
        </summary>
        <p className="mt-2 text-[11px] text-muted-foreground">
          Control headline, description, and general text color across the
          partner page.
        </p>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ColorField
            id="themeHeadlineColor"
            label="Headline Text Color"
            value={themeHeadlineColor}
            placeholder="#0f172a"
            fallbackHex="#0f172a"
            onChange={onThemeHeadlineColorChange}
            colSpan2={false}
          />
          <ColorField
            id="themeDescriptionColor"
            label="Description Text Color"
            value={themeDescriptionColor}
            placeholder="#475569"
            fallbackHex="#475569"
            onChange={onThemeDescriptionColorChange}
            colSpan2={false}
          />
          <ColorField
            id="themeBodyTextColor"
            label="Body Text Color"
            value={themeBodyTextColor}
            placeholder="#0f172a"
            fallbackHex="#0f172a"
            onChange={onThemeBodyTextColorChange}
            colSpan2={false}
          />
        </div>
      </details>

      <details className="md:col-span-2 rounded-md border border-border bg-muted/20 p-3">
        <summary className="cursor-pointer text-sm font-medium text-foreground">
          Advanced Radix Theme Options
        </summary>
        <p className="mt-2 text-[11px] text-muted-foreground">
          Optional fine-tuning for Radix component tokens.
        </p>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="radixAccentColor">Radix Accent Color</Label>
            <select
              id="radixAccentColor"
              value={radixAccentColor}
              onChange={(e) => onRadixAccentColorChange(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
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
            <Label htmlFor="radixGrayColor">Radix Gray Color</Label>
            <select
              id="radixGrayColor"
              value={radixGrayColor}
              onChange={(e) => onRadixGrayColorChange(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
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
            <Label htmlFor="radixRadius">Radix Radius</Label>
            <select
              id="radixRadius"
              value={radixRadius}
              onChange={(e) => onRadixRadiusChange(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="none">None</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="full">Full</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="radixScaling">Radix Scaling</Label>
            <select
              id="radixScaling"
              value={radixScaling}
              onChange={(e) => onRadixScalingChange(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="90%">90%</option>
              <option value="95%">95%</option>
              <option value="100%">100%</option>
              <option value="105%">105%</option>
              <option value="110%">110%</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="radixPanelBackground">Radix Panel Background</Label>
            <select
              id="radixPanelBackground"
              value={radixPanelBackground}
              onChange={(e) => onRadixPanelBackgroundChange(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="translucent">Translucent</option>
              <option value="solid">Solid</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="radixAppearance">Radix Appearance</Label>
            <select
              id="radixAppearance"
              value={radixAppearance}
              onChange={(e) => onRadixAppearanceChange(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="inherit">Inherit</option>
            </select>
          </div>
        </div>
      </details>
      <ColorField
        id="themePageBackground"
        label="Page Background"
        value={themePageBackground}
        placeholder="#f8fafc"
        fallbackHex="#f8fafc"
        onChange={onThemePageBackgroundChange}
      />
      <p className="text-[11px] text-muted-foreground -mt-1">
        Behind everything on the partner page.
      </p>
      <ColorField
        id="themeHeaderBackground"
        label="Header Background"
        value={themeHeaderBackground}
        placeholder="#ffffff"
        fallbackHex="#ffffff"
        onChange={onThemeHeaderBackgroundChange}
      />
      <p className="text-[11px] text-muted-foreground -mt-1">
        Top navigation/header strip background.
      </p>
      <ColorField
        id="themeFooterBackground"
        label="Footer Background"
        value={themeFooterBackground}
        placeholder="#ffffff"
        fallbackHex="#ffffff"
        onChange={onThemeFooterBackgroundChange}
      />
      <p className="text-[11px] text-muted-foreground -mt-1">
        Bottom footer strip background.
      </p>
      <ColorField
        id="themeCardBackground"
        label="Card Background"
        value={themeCardBackground}
        placeholder="#ffffff"
        fallbackHex="#ffffff"
        onChange={onThemeCardBackgroundChange}
      />
      <p className="text-[11px] text-muted-foreground -mt-1">
        Form container/card surface color.
      </p>
      <ColorField
        id="themeCardBorder"
        label="Card Border"
        value={themeCardBorder}
        placeholder="#0f172a"
        fallbackHex="#0f172a"
        onChange={onThemeCardBorderChange}
      />
      <p className="text-[11px] text-muted-foreground -mt-1">
        Border around form cards and framed blocks.
      </p>
    </>
  );
}
