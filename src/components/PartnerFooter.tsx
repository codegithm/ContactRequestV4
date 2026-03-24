"use client";

import type { PartnerConfig } from "@/models/partner";

export function PartnerFooter({ config }: { config: PartnerConfig }) {
  const footer = config.footer;
  const layout = footer?.layout ?? "split";
  const showPoweredBy = footer?.showPoweredBy !== false;
  const poweredByLabel = footer?.poweredByLabel ?? "ContactRequest";
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

  return (
    <>
      {layout === "split" && (
        <div className="flex items-center justify-between">
          {poweredByNode}
          {linksNode}
        </div>
      )}
      {layout === "centered" && (
        <div className="flex flex-col items-center gap-2">
          {poweredByNode}
          {linksNode}
        </div>
      )}
      {layout === "links-only" && (
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
