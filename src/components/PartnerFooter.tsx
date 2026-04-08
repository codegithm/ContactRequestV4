"use client";

import type { PartnerConfig } from "@/models/partner";

export function PartnerFooter({ config }: { config: PartnerConfig }) {
  const footer = config.footer;
  const layout = footer?.layout ?? "split";
  const showPoweredBy = footer?.showPoweredBy !== false;
  const poweredByLabel = footer?.poweredByLabel ?? "ContactRequest";
  const logos = footer?.logos ?? [];
  const links = footer?.links ?? [
    { label: "Privacy", type: "privacy" as const },
    { label: "Terms", type: "terms" as const },
  ];

  const poweredByNode = showPoweredBy && (
    <span className="text-xs text-muted-foreground">
      Powered by{" "}
      {footer?.poweredByUrl ? (
        <a
          href={footer.poweredByUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-foreground hover:underline underline-offset-2"
        >
          {poweredByLabel}
        </a>
      ) : (
        <span className="font-medium text-foreground">{poweredByLabel}</span>
      )}
    </span>
  );

  const linksNode = links.length > 0 && (
    <div className="flex gap-4">
      {links.map((link) =>
        link.url ? (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ) : (
          <span
            key={link.label}
            className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
          >
            {link.label}
          </span>
        ),
      )}
    </div>
  );

  const logosNode = logos.length > 0 && (
    <div className="mb-3 flex flex-wrap items-center justify-center gap-4">
      {logos.map((logo) => {
        const logoTile = (
          <span className="inline-flex h-14 min-w-32 items-center justify-center rounded-md border border-border/80 bg-background/70 px-4 py-2.5 backdrop-blur-sm">
            <img
              src={logo.logoUrl}
              alt={logo.label}
              className="h-8 w-auto max-w-[150px] object-contain"
              loading="lazy"
            />
          </span>
        );

        return logo.url ? (
          <a
            key={logo.label}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-150 hover:-translate-y-0.5"
            aria-label={logo.label}
          >
            {logoTile}
          </a>
        ) : (
          <span key={logo.label} aria-label={logo.label}>
            {logoTile}
          </span>
        );
      })}
    </div>
  );

  return (
    <>
      {logosNode}
      {layout === "split" && (poweredByNode || linksNode) && (
        <div className="flex items-center justify-between">
          {poweredByNode}
          {linksNode}
        </div>
      )}
      {layout === "centered" && (poweredByNode || linksNode) && (
        <div className="flex flex-col items-center gap-2">
          {poweredByNode}
          {linksNode}
        </div>
      )}
      {layout === "links-only" && linksNode && (
        <div className="flex justify-center">{linksNode}</div>
      )}
      {footer?.note && (
        <p className="mt-3 text-[10px] text-muted-foreground/70 leading-relaxed text-center">
          {footer.note}
        </p>
      )}
    </>
  );
}
