"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PartnerAdminGuideProps {
  mode: "add" | "edit";
  partnerId?: string;
  partnerName: string;
  headline: string;
  description: string;
  sectionsCount: number;
  fieldsCount: number;
  feedbackEnabled: boolean;
}

export default function PartnerAdminGuide({
  mode,
  partnerId,
  partnerName,
  headline,
  description,
  sectionsCount,
  fieldsCount,
  feedbackEnabled,
}: PartnerAdminGuideProps) {
  const cleanPartnerId = (partnerId ?? "").trim().toLowerCase();
  const hasPreviewPath = cleanPartnerId.length > 0;
  const effectiveName = partnerName.trim() || "Partner";
  const effectiveHeadline = headline.trim() || `Contact ${effectiveName}`;
  const effectiveDescription = description.trim() || "No description set yet.";

  return (
    <div className="rounded-lg border border-border bg-muted/20 p-4 space-y-2">
      <h3 className="text-sm font-semibold text-foreground">
        {mode === "add"
          ? "Quick guide before saving"
          : "Quick guide while editing"}
      </h3>

      <Accordion type="multiple" className="w-full">
        <AccordionItem value="what-changes">
          <AccordionTrigger className="text-sm">
            What each section changes
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
              <li>
                Identity changes top-level branding and route details: Partner
                ID, name, headline, description, and logo.
              </li>
              <li>
                Theme changes visual style only: colors, radius, card surfaces,
                badge style, and Radix appearance tokens.
              </li>
              <li>
                Hidden settings are added to outbound payload data: VDN, broker
                code, and extra JSON keys.
              </li>
              <li>
                Sections and fields define the form schema users fill in on the
                partner page.
              </li>
              <li>
                Referral section creates repeatable contact blocks and optional
                entry limits.
              </li>
              <li>
                Feedback toggle controls whether the feedback search flow is
                enabled for this partner.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="draft-preview">
          <AccordionTrigger className="text-sm">Draft preview</AccordionTrigger>
          <AccordionContent>
            <div className="rounded-md border border-border bg-background p-3 space-y-2">
              <p className="text-sm font-medium text-foreground">
                {effectiveName}
              </p>
              <p className="text-xs font-medium text-foreground">
                {effectiveHeadline}
              </p>
              <p className="text-xs text-muted-foreground">
                {effectiveDescription}
              </p>
              <div className="text-xs text-muted-foreground">
                Sections: {sectionsCount} | Fields: {fieldsCount} | Feedback:{" "}
                {feedbackEnabled ? "On" : "Off"}
              </div>
              <p className="text-[11px] text-muted-foreground">
                This card previews your current draft locally. Nothing is saved
                until you use the save action.
              </p>
              {hasPreviewPath ? (
                <Link
                  href={`/${cleanPartnerId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium underline underline-offset-4"
                >
                  Open saved form at /{cleanPartnerId}
                </Link>
              ) : (
                <p className="text-[11px] text-muted-foreground">
                  Enter a Partner ID to unlock the saved-form preview link.
                </p>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
