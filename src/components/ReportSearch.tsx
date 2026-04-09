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
import {
  buildContactReportRequest,
  fetchContactReport,
} from "@/lib/report-api";
import type { ReportItem } from "@/models/report";
import type { PartnerConfig } from "@/lib/partners";
interface ReportSearchProps {
  config: PartnerConfig;
}
const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};
function getFieldIcon(id: string, type?: string) {
  if (id.toLowerCase().includes("email") || type === "email") return Mail;
  if (
    id.toLowerCase().includes("phone") ||
    id.toLowerCase().includes("cell") ||
    type === "tel"
  )
    return Phone;
  if (id.toLowerCase().includes("contact") || id.toLowerCase().includes("name"))
    return UserRound;
  return Hash;
}
export default function ReportSearch({ config }: ReportSearchProps) {
  const [criteria, setCriteria] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<ReportItem[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const searchFields = useMemo(() => {
    if (config.feedbackSearchFields?.length) return config.feedbackSearchFields;
    return [
      {
        id: "ContactID",
        label: "Contact ID",
        placeholder: "Enter contact reference",
      },
    ];
  }, [config.feedbackSearchFields]);
  const hasAnyCriteria = Object.values(criteria).some((value) => value.trim());
  const handleSearch = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const request = buildContactReportRequest(criteria);
      const response = await fetchContactReport(request);
      if (!response.Success) {
        throw new Error(response.Message || "Report request was unsuccessful.");
      }
      setResults(response.Data ?? []);
      setSubmitted(true);
    } catch (error) {
      setSubmitted(false);
      setResults([]);
      setSubmitError(
        error instanceof Error ? error.message : "Could not load report data.",
      );
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Report Search
        </h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Search for one or more contacts using the report parameters configured
          for {config.partnerName}.
        </p>
      </div>

      <Card className="border-border form-container">
        <CardHeader>
          <CardTitle className="text-base">Search Criteria</CardTitle>
          <CardDescription>
            Enter any combination of the fields below to find matching report
            rows.
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
              disabled={!hasAnyCriteria || submitting}
              onClick={handleSearch}
              className="bg-brand text-brand-foreground hover:opacity-90 btn-press"
            >
              <Search className="w-4 h-4 mr-2" />
              {submitting ? "Searching..." : "Search"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setCriteria({});
                setSubmitted(false);
                setResults([]);
                setSubmitError(null);
              }}
            >
              Clear
            </Button>
          </div>
          {submitError && (
            <p className="text-sm text-destructive">{submitError}</p>
          )}
        </CardContent>
      </Card>

      {submitted && (
        <Card className="border-border form-container-elevated">
          <CardHeader>
            <CardTitle className="text-base">Matching Report Rows</CardTitle>
            <CardDescription>
              Results returned from the report endpoint.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {results.length === 0 ? (
              <p className="text-sm text-muted-foreground">No records found.</p>
            ) : (
              results.map((result, index) => (
                <div key={`${result.ContactID}-${result.LeadNumber || index}`}>
                  {index > 0 && <Separator className="mb-4" />}
                  <div className="grid gap-2 sm:grid-cols-2 text-sm">
                    <p>
                      <span className="font-medium text-foreground">Name:</span>{" "}
                      <span className="text-muted-foreground">
                        {result.Name || "-"}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Status:
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {result.Status || "-"}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Contact ID:
                      </span>{" "}
                      <span className="text-muted-foreground mono">
                        {result.ContactID || "-"}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Lead Number:
                      </span>{" "}
                      <span className="text-muted-foreground mono">
                        {result.LeadNumber || "-"}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Cell No:
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {result.CellNo || "-"}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Home Phone:
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {result.HomePhone || "-"}
                      </span>
                    </p>
                    <p className="sm:col-span-2">
                      <span className="font-medium text-foreground">
                        Policy Number:
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {result.PolicyNumber || "-"}
                      </span>
                    </p>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
