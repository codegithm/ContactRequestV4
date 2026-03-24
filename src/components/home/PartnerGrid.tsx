"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoreHorizontal, Search } from "lucide-react";
import PartnerEditDialog from "@/components/home/PartnerEditDialog";
import { countActiveFields } from "@/components/home/partner-management-utils";
import { springTransition } from "@/components/home/home-page-constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createPartnerConfigStore } from "@/lib/partner-config-store";
import type { PartnerConfig } from "@/lib/partners";

const store = createPartnerConfigStore();

interface PartnerGridProps {
  partners: PartnerConfig[];
  onPartnersChanged: () => Promise<void>;
}

export default function PartnerGrid({
  partners,
  onPartnersChanged,
}: PartnerGridProps) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive"
  >("all");
  const [editingPartner, setEditingPartner] = useState<PartnerConfig | null>(
    null,
  );
  const [savingPartnerId, setSavingPartnerId] = useState<string | null>(null);

  const activeCount = partners.filter(
    (partner) => partner.isActive !== false,
  ).length;
  const inactiveCount = partners.length - activeCount;

  const filteredPartners = useMemo(() => {
    const term = search.trim().toLowerCase();

    return partners.filter((partner) => {
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "active"
          ? partner.isActive !== false
          : partner.isActive === false);

      if (!matchesStatus) return false;
      if (!term) return true;

      const haystack = [
        partner.partnerName,
        partner.partnerId,
        partner.headline,
        partner.description,
        partner.isActive === false ? "inactive" : "active",
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(term);
    });
  }, [partners, search, statusFilter]);

  const handleTogglePartner = async (
    partner: PartnerConfig,
    nextActive: boolean,
  ) => {
    setSavingPartnerId(partner.partnerId);
    try {
      await store.upsert({ ...partner, isActive: nextActive });
      await onPartnersChanged();
    } finally {
      setSavingPartnerId(null);
    }
  };

  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springTransition, delay: 0.2 }}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Partner Management
          </h2>
          <p className="text-sm text-muted-foreground">
            Search partners, toggle active status, and edit live form fields.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant={statusFilter === "all" ? "secondary" : "outline"}
            onClick={() => setStatusFilter("all")}
          >
            All ({partners.length})
          </Button>
          <Button
            type="button"
            variant={statusFilter === "active" ? "secondary" : "outline"}
            onClick={() => setStatusFilter("active")}
          >
            Active ({activeCount})
          </Button>
          <Button
            type="button"
            variant={statusFilter === "inactive" ? "secondary" : "outline"}
            onClick={() => setStatusFilter("inactive")}
          >
            Inactive ({inactiveCount})
          </Button>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card form-container">
        <div className="border-b border-border p-4">
          <div className="relative max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by partner name, id, status..."
              className="pl-9"
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Partner</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Fields</TableHead>
              <TableHead>Feedback</TableHead>
              <TableHead>Open Form</TableHead>
              <TableHead className="w-[180px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPartners.map((partner) => {
              const isSaving = savingPartnerId === partner.partnerId;
              const isActive = partner.isActive !== false;
              const activeFieldCount = countActiveFields(partner);
              const totalFieldCount = partner.sections?.length
                ? partner.sections.reduce(
                    (total, section) => total + section.fields.length,
                    0,
                  )
                : partner.fields.length;

              return (
                <TableRow key={partner.partnerId}>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="font-medium text-foreground">
                        {partner.partnerName}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        /{partner.partnerId}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Badge variant={isActive ? "default" : "secondary"}>
                        {isActive ? "Active" : "Inactive"}
                      </Badge>
                      <Switch
                        checked={isActive}
                        disabled={isSaving}
                        onCheckedChange={(checked) =>
                          handleTogglePartner(partner, checked)
                        }
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-foreground">
                      {activeFieldCount}/{totalFieldCount} active
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={partner.feedback ? "outline" : "secondary"}>
                      {partner.feedback ? "Enabled" : "Off"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {isActive ? (
                      <Link
                        href={`/${partner.partnerId}`}
                        className="text-sm font-medium text-foreground underline underline-offset-4"
                      >
                        View form
                      </Link>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        Disabled
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingPartner(partner)}
                      >
                        Edit
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button type="button" variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => setEditingPartner(partner)}
                          >
                            Edit partner
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              handleTogglePartner(partner, !isActive)
                            }
                          >
                            Mark as {isActive ? "inactive" : "active"}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}

            {filteredPartners.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center text-muted-foreground"
                >
                  No partners match the current search or status filter.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <PartnerEditDialog
        partner={editingPartner}
        open={!!editingPartner}
        onOpenChange={(open) => {
          if (!open) setEditingPartner(null);
        }}
        onSaved={onPartnersChanged}
      />
    </motion.section>
  );
}
