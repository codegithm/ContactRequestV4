"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createPartnerConfigStore } from "@/lib/partner-config-store";
import type { PartnerConfig } from "@/lib/partners";
const store = createPartnerConfigStore("local");
interface UsePartnerConfigOptions {
    requireReport?: boolean;
    requireFeedback?: boolean;
}
export function usePartnerConfig(options: UsePartnerConfigOptions = {}) {
    const router = useRouter();
    const params = useParams<{
        partnerId: string;
    }>();
    const [config, setConfig] = useState<PartnerConfig | null>(null);
    useEffect(() => {
        const partnerId = params.partnerId;
        if (!partnerId)
            return;
        let cancelled = false;
        const loadConfig = async () => {
            const resolved = await store.get(partnerId);
            if (cancelled)
                return;
            if (!resolved) {
                router.replace("/unauthorized");
                return;
            }
            if (resolved.isActive === false) {
                router.replace("/unauthorized");
                return;
            }
            if ((options.requireReport || options.requireFeedback) &&
                !resolved.feedback) {
                router.replace(`/${partnerId}`);
                return;
            }
            setConfig(resolved);
        };
        loadConfig();
        return () => {
            cancelled = true;
        };
    }, [
        params.partnerId,
        router,
        options.requireFeedback,
        options.requireReport,
    ]);
    return config;
}
