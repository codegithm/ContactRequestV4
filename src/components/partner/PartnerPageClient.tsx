"use client";
import DynamicForm from "@/components/DynamicForm";
import PartnerShell from "@/components/PartnerShell";
import { usePartnerConfig } from "@/hooks/usePartnerConfig";
export default function PartnerPageClient() {
    const config = usePartnerConfig();
    if (!config)
        return null;
    return (<PartnerShell config={config}>
      <DynamicForm config={config}/>
    </PartnerShell>);
}
