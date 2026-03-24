"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, UserRound, Phone, Mail, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import type { PartnerConfig } from "@/lib/partners";

interface FeedbackSearchProps {
  config: PartnerConfig;
}

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

function getFieldIcon(id: string, type?: string) {
  if (id.toLowerCase().includes("email") || type === "email") return Mail;
  if (id.toLowerCase().includes("phone") || type === "tel") return Phone;
  if (id.toLowerCase().includes("contact") || id.toLowerCase().includes("name"))
    return UserRound;
  return Hash;
}

export default function FeedbackSearch({ config }: FeedbackSearchProps) {
  const [criteria, setCriteria] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const searchFields = useMemo(() => {
    if (config.feedbackSearchFields?.length) return config.feedbackSearchFields;
    return [
      {
        id: "contactId",
        label: "Contact ID",
        placeholder: "Enter contact reference",
      },
    ];
  }, [config.feedbackSearchFields]);

  const fakeResults = useMemo(() => {
    if (!submitted) return [];
    return [
      {
        id: `${config.partnerId.toUpperCase()}-1001`,
        name: "Jordan Matthews",
        status: "Open",
        detail: "Awaiting consultant follow-up",
      },
      {
        id: `${config.partnerId.toUpperCase()}-1042`,
        name: "Amelia Naidoo",
        status: "Resolved",
        detail: "Customer contacted and query resolved",
      },
      {
        id: `${config.partnerId.toUpperCase()}-1114`,
        name: "Thabo Maseko",
        status: "In Progress",
        detail: "Assigned to retention team",
      },
    ];
  }, [config.partnerId, submitted]);

  const hasAnyCriteria = Object.values(criteria).some((value) => value.trim());

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Feedback Search
        </h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Search for one or more contacts using the identifiers configured for{" "}
          {config.partnerName}.
        </p>
      </div>

      <Card className="border-border form-container">
        <CardHeader>
          <CardTitle className="text-base">Search Criteria</CardTitle>
          <CardDescription>
            Enter any combination of the fields below to find matching contacts.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {searchFields.map((field, index) => {
              const Icon = getFieldIcon(field.id, field.type);
              return (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springTransition, delay: index * 0.04 }}
                  className="space-y-2"
                >
                  <Label
                    htmlFor={field.id}
                    className="text-sm font-medium text-foreground flex items-center gap-2"
                  >
                    <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                    {field.label}
                  </Label>
                  <Input
                    id={field.id}
                    type={field.type ?? "text"}
                    value={criteria[field.id] ?? ""}
                    placeholder={field.placeholder}
                    onChange={(event) =>
                      setCriteria((previous) => ({
                        ...previous,
                        [field.id]: event.target.value,
                      }))
                    }
                    className="h-11 bg-card border-border focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              disabled={!hasAnyCriteria}
              onClick={() => setSubmitted(true)}
              className="bg-brand text-brand-foreground hover:opacity-90 btn-press"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setCriteria({});
                setSubmitted(false);
              }}
            >
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>

      {submitted && (
        <Card className="border-border form-container-elevated">
          <CardHeader>
            <CardTitle className="text-base">Matching Contacts</CardTitle>
            <CardDescription>
              Example results based on the current search criteria.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {fakeResults.map((result, index) => (
              <div key={result.id}>
                {index > 0 && <Separator className="mb-4" />}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground">
                        {result.name}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-muted text-muted-foreground border border-border">
                        {result.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mono">
                      {result.id}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {result.detail}
                    </p>
                  </div>
                  <Button type="button" variant="outline" size="sm">
                    Open Contact
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
