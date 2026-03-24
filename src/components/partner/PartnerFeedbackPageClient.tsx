"use client";

import FeedbackSearch from "@/components/FeedbackSearch";
import PartnerShell from "@/components/PartnerShell";
import { usePartnerConfig } from "@/hooks/usePartnerConfig";

export default function PartnerFeedbackPageClient() {
  const config = usePartnerConfig({ requireFeedback: true });

  if (!config) return null;

  return (
    <PartnerShell config={config} variant="feedback">
      <FeedbackSearch config={config} />
    </PartnerShell>
  );
}
