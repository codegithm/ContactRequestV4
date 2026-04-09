"use client";
import ReportSearch from "@/components/ReportSearch";
import PartnerShell from "@/components/PartnerShell";
import { usePartnerConfig } from "@/hooks/usePartnerConfig";
export default function PartnerReportPageClient() {
    const config = usePartnerConfig({ requireReport: true });
    if (!config)
        return null;
    return (<PartnerShell config={config} variant="report">
      <ReportSearch config={config}/>
    </PartnerShell>);
}
