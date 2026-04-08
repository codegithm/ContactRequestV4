"use client";
import { useEffect, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Shield } from "lucide-react";
import { Theme } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { PartnerFooter } from "@/components/PartnerFooter";
import type { PartnerConfig } from "@/models/partner";

function toHslComponents(value: string | undefined, fallback: string): string {
  if (!value?.trim()) return fallback;
  const trimmed = value.trim();

  // Accept both "hsl(210, 100%, 35%)" and "210 100% 35%".
  if (trimmed.startsWith("hsl(")) {
    return trimmed.slice(4, -1).replace(/,/g, " ").replace(/\s+/g, " ").trim();
  }

  return trimmed;
}

interface PartnerShellProps {
  config: PartnerConfig;
  children: React.ReactNode;
  /** "form" = main partner form; "feedback" = feedback search page */
  variant?: "form" | "feedback";
}

const PartnerShell = ({
  config,
  children,
  variant = "form",
}: PartnerShellProps) => {
  useEffect(() => {
    document.documentElement.setAttribute("data-partner", config.partnerId);
    return () => {
      document.documentElement.removeAttribute("data-partner");
    };
  }, [config.partnerId]);

  const maxWidth = variant === "feedback" ? "max-w-3xl" : "max-w-xl";
  const theme = config.theme;
  const logoUrl = config.logoUrl?.trim();
  const bannerUrl = config.bannerUrl?.trim();
  const showFormTopBanner =
    variant === "form" && !!bannerUrl && config.attachBannerToFormTop === true;
  const primary = toHslComponents(theme.primary, "220 14% 20%");
  const primaryForeground = toHslComponents(
    theme.primaryForeground,
    "0 0% 100%",
  );
  const radixTheme = theme.radix;

  const shellStyle = useMemo(
    () =>
      ({
        "--brand-primary": primary,
        "--brand-primary-foreground": primaryForeground,
        "--primary": primary,
        "--primary-foreground": primaryForeground,
        "--ring": primary,
        "--radius": theme.radius || "0.5rem",
        "--partner-page-background":
          theme.pageBackground || "var(--accent-2, #f8fafc)",
        "--partner-header-background":
          theme.headerBackground ||
          "var(--color-panel-translucent, rgba(255,255,255,0.92))",
        "--partner-footer-background":
          theme.footerBackground ||
          "var(--color-panel-translucent, rgba(255,255,255,0.9))",
        "--partner-card-background":
          theme.cardBackground ||
          "var(--color-panel-solid, rgba(255,255,255,0.95))",
        "--partner-card-border":
          theme.cardBorder || "var(--accent-7, rgba(15,23,42,0.1))",
        "--partner-headline-color":
          theme.headlineColor || "hsl(var(--foreground))",
        "--partner-description-color":
          theme.descriptionColor || "hsl(var(--muted-foreground))",
        "--partner-body-text-color":
          theme.bodyTextColor || "hsl(var(--foreground))",
        "--partner-accent-shadow":
          theme.badgeStyle === "solid"
            ? `0 14px 28px hsl(${primary} / 0.2)`
            : `0 12px 24px hsl(${primary} / 0.12)`,
        "--partner-badge-background":
          theme.badgeStyle === "solid"
            ? `hsl(${primary})`
            : `hsl(${primary} / 0.86)`,
        "--partner-badge-shadow":
          theme.badgeStyle === "solid"
            ? `0 10px 24px hsl(${primary} / 0.35)`
            : `0 8px 18px hsl(${primary} / 0.24)`,
      }) as React.CSSProperties,
    [
      primary,
      primaryForeground,
      theme.radius,
      theme.pageBackground,
      theme.headerBackground,
      theme.footerBackground,
      theme.cardBackground,
      theme.cardBorder,
      theme.badgeStyle,
    ],
  );

  return (
    <Theme
      appearance={radixTheme?.appearance ?? "light"}
      accentColor={radixTheme?.accentColor ?? "blue"}
      grayColor={radixTheme?.grayColor ?? "slate"}
      radius={radixTheme?.radius ?? "medium"}
      scaling={radixTheme?.scaling ?? "100%"}
      panelBackground={radixTheme?.panelBackground ?? "translucent"}
      asChild
    >
      <div
        className="min-h-svh flex flex-col partner-shell-bg"
        style={shellStyle}
      >
        {/* Header */}
        <header className="w-full border-b border-border partner-header-surface">
          <div
            className={`${maxWidth} mx-auto px-6 py-4 flex items-center justify-between`}
          >
            <div className="flex items-center gap-3">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt={`${config.partnerName} logo`}
                  className="h-8 w-auto max-w-[180px] object-contain"
                  loading="lazy"
                />
              ) : (
                <>
                  <div className="w-8 h-8 rounded-md partner-brand-badge flex items-center justify-center">
                    <span className="text-brand-foreground text-sm font-bold">
                      {config.partnerName.charAt(0)}
                    </span>
                  </div>
                  <span className="font-semibold text-foreground">
                    {config.partnerName}
                  </span>
                </>
              )}
            </div>
            <div className="flex items-center gap-3">
              {variant === "feedback" ? (
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground gap-1.5"
                >
                  <Link href={`/${config.partnerId}`}>
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span className="text-xs">Back to Form</span>
                  </Link>
                </Button>
              ) : (
                <>
                  {config.feedback && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-1.5 text-xs btn-press"
                    >
                      <Link href={`/${config.partnerId}/feedback`}>
                        <MessageSquare className="w-3.5 h-3.5" />
                        Feedback
                      </Link>
                    </Button>
                  )}
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Shield className="w-3.5 h-3.5" />
                    <span className="text-xs">Secure</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 flex items-start justify-center px-6 py-12">
          <div className={`w-full ${maxWidth}`}>
            {variant === "form" && (
              <div className="mb-8 space-y-2">
                <h1
                  className="text-2xl font-semibold tracking-tight"
                  style={{ color: "var(--partner-headline-color)" }}
                >
                  {config.headline || `Contact ${config.partnerName}`}
                </h1>
                {config.description && (
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--partner-description-color)" }}
                  >
                    {config.description}
                  </p>
                )}
              </div>
            )}
            {variant === "form" ? (
              <div className="rounded-lg border overflow-hidden partner-card-surface">
                {showFormTopBanner && (
                  <div
                    className="border-b border-border/80 h-24 md:h-28 w-full bg-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${bannerUrl})` }}
                    role="img"
                    aria-label={`${config.partnerName} banner`}
                  >
                    <span className="sr-only">{`${config.partnerName} banner`}</span>
                  </div>
                )}
                <div className="p-6 form-container">{children}</div>
              </div>
            ) : (
              children
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-border partner-footer-surface">
          <div className={`${maxWidth} mx-auto px-6 py-4`}>
            <PartnerFooter config={config} />
          </div>
        </footer>
      </div>
    </Theme>
  );
};

export default PartnerShell;
