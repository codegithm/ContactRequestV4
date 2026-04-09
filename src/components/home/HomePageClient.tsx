"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import HomeFeatureGrid from "@/components/home/HomeFeatureGrid";
import PartnerAdminPanel from "@/components/home/PartnerAdminPanel";
import PartnerGrid from "@/components/home/PartnerGrid";
import { springTransition } from "@/components/home/home-page-constants";
import { Button } from "@/components/ui/button";
import { createPartnerConfigStore } from "@/lib/partner-config-store";
import type { PartnerConfig } from "@/lib/partners";
const store = createPartnerConfigStore();
export default function HomePageClient() {
    const [partners, setPartners] = useState<PartnerConfig[]>([]);
    const [showAdmin, setShowAdmin] = useState(false);
    const activePartners = useMemo(() => [...partners].sort((a, b) => a.partnerName.localeCompare(b.partnerName)), [partners]);
    const loadPartners = async () => {
        const list = await store.list();
        setPartners(list);
    };
    useEffect(() => {
        loadPartners();
    }, []);
    return (<div className="min-h-svh flex flex-col bg-background">
      <header className="w-full border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <span className="font-semibold text-foreground tracking-tight">
            ContactRequest
          </span>
          <Button type="button" variant={showAdmin ? "secondary" : "outline"} className="gap-1.5" onClick={() => setShowAdmin((current) => !current)}>
            <Plus className="w-4 h-4"/>
            Admin
          </Button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-5xl w-full space-y-10">
          <motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={springTransition}>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground leading-tight">
              Schema-driven lead capture
              <br />
              <span className="text-muted-foreground">for every partner.</span>
            </h1>
            <p className="text-muted-foreground max-w-lg">
              One engine, infinite configurations. Dynamic forms that adopt your
              partner&apos;s brand, fields, and workflow automatically.
            </p>
          </motion.div>

          {showAdmin && <PartnerAdminPanel onSaved={loadPartners}/>}

          <HomeFeatureGrid />
          <PartnerGrid partners={activePartners} onPartnersChanged={loadPartners}/>
        </div>
      </main>

      <footer className="w-full border-t border-border bg-card">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <span className="text-xs text-muted-foreground">
            © 2026 TIH. All rights reserved.
          </span>
        </div>
      </footer>
    </div>);
}
