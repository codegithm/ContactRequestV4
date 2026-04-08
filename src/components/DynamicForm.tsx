"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useLoading } from "@/components/loading-context";
import DynamicField from "@/components/DynamicField";
import ProgressBar from "@/components/ProgressBar";
import TermsDialog from "@/components/TermsDialog";
import RepeatableSectionBlock from "@/components/RepeatableSectionBlock";
import { submitContactRequest } from "@/lib/api";
import { isFieldFilled, validateField } from "@/lib/form-validation";
import type { PartnerConfig, FieldSchema } from "@/lib/partners";

interface DynamicFormProps {
  config: PartnerConfig;
}

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

const DynamicForm = ({ config }: DynamicFormProps) => {
  const { setApiLoading } = useLoading();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [repeatableDrafts, setRepeatableDrafts] = useState<
    Record<string, Record<string, string>>
  >({});
  const [repeatableEntries, setRepeatableEntries] = useState<
    Record<string, Array<Record<string, string>>>
  >({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [termsError, setTermsError] = useState(false);

  const hasTerms = !!config.termsAndConditions;

  const sectionConfigs = useMemo(
    () =>
      (config.sections ?? [])
        .map((section) => ({
          ...section,
          fields: section.fields.filter((field) => field.isActive !== false),
        }))
        .filter((section) => section.fields.length > 0),
    [config.sections],
  );

  const repeatableSections = useMemo(
    () =>
      sectionConfigs.filter(
        (section) =>
          section.repeatable ||
          section.purpose === "refer" ||
          /refer/i.test(section.id),
      ),
    [sectionConfigs],
  );

  const standardSections = useMemo(
    () =>
      sectionConfigs.filter(
        (section) =>
          !(
            section.repeatable ||
            section.purpose === "refer" ||
            /refer/i.test(section.id)
          ),
      ),
    [sectionConfigs],
  );

  const allFields = useMemo(() => {
    if (config.sections?.length) {
      return standardSections.flatMap((section) => section.fields);
    }

    return config.fields.filter((field) => field.isActive !== false);
  }, [config.sections, config.fields, standardSections]);

  const repeatableFields = useMemo(
    () => repeatableSections.flatMap((section) => section.fields),
    [repeatableSections],
  );

  const fieldIndexMap = useMemo(() => {
    const map = new Map<string, number>();
    allFields.forEach((f, i) => map.set(f.id, i));
    return map;
  }, [allFields]);

  const progress = useMemo(() => {
    const requiredFields = allFields.filter((f) => f.required);
    if (requiredFields.length === 0) return 100;
    const filled = requiredFields.filter((f) =>
      isFieldFilled(f, formData[f.id] || ""),
    ).length;
    return Math.round((filled / requiredFields.length) * 100);
  }, [formData, allFields]);

  const referralCount = useMemo(
    () =>
      repeatableSections.reduce(
        (total, section) =>
          total + (repeatableEntries[section.id]?.length ?? 0),
        0,
      ),
    [repeatableEntries, repeatableSections],
  );

  const handleChange = useCallback(
    (id: string, value: string) => {
      setFormData((prev) => ({ ...prev, [id]: value }));
      if (submitError) setSubmitError(null);
      setErrors((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    },
    [submitError],
  );

  const handleRepeatableChange = useCallback(
    (sectionId: string, fieldId: string, value: string) => {
      setRepeatableDrafts((prev) => ({
        ...prev,
        [sectionId]: {
          ...(prev[sectionId] ?? {}),
          [fieldId]: value,
        },
      }));

      const errorKey = `${sectionId}::${fieldId}`;
      setErrors((prev) => {
        if (!(errorKey in prev)) return prev;
        const next = { ...prev };
        delete next[errorKey];
        return next;
      });
    },
    [],
  );

  const addRepeatableEntry = useCallback(
    (sectionId: string) => {
      const section = repeatableSections.find((item) => item.id === sectionId);
      if (!section) return;

      const draft = repeatableDrafts[sectionId] ?? {};
      const draftErrors: Record<string, string> = {};

      section.fields.forEach((field) => {
        const value = draft[field.id] || "";
        const error = validateField(field, value);
        if (error) {
          draftErrors[`${sectionId}::${field.id}`] = error;
        }
      });

      if (Object.keys(draftErrors).length > 0) {
        setErrors((prev) => ({ ...prev, ...draftErrors }));
        return;
      }

      setRepeatableEntries((prev) => {
        const currentEntries = prev[sectionId] ?? [];
        const maxEntries = section.maxEntries;
        if (maxEntries && currentEntries.length >= maxEntries) {
          return prev;
        }

        return {
          ...prev,
          [sectionId]: [...currentEntries, draft],
        };
      });

      setRepeatableDrafts((prev) => ({
        ...prev,
        [sectionId]: {},
      }));
    },
    [repeatableDrafts, repeatableSections],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    allFields.forEach((field) => {
      const error = validateField(field, formData[field.id] || "");
      if (error) newErrors[field.id] = error;
    });

    if (hasTerms && !termsAccepted) {
      setTermsError(true);
    }

    if (Object.keys(newErrors).length > 0 || (hasTerms && !termsAccepted)) {
      setErrors(newErrors);
      return;
    }

    setSubmitError(null);
    setSubmitting(true);
    setApiLoading(true);
    try {
      const referralEntries = repeatableSections.flatMap(
        (section) => repeatableEntries[section.id] ?? [],
      );

      if (referralEntries.length > 0) {
        const submissionFields = [...allFields, ...repeatableFields];
        const requests = referralEntries.map((entry) =>
          submitContactRequest({
            config,
            configuredFields: submissionFields,
            formData: { ...formData, ...entry },
          }),
        );

        const results = await Promise.allSettled(requests);
        const failedCount = results.filter(
          (result) => result.status === "rejected",
        ).length;

        if (failedCount > 0) {
          throw new Error(
            `${failedCount} referral submission${failedCount > 1 ? "s" : ""} failed. Please retry.`,
          );
        }
      } else {
        await submitContactRequest({
          config,
          configuredFields: allFields,
          formData,
        });
      }
      setSubmitted(true);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to submit request right now.";
      setSubmitError(message);
    } finally {
      setSubmitting(false);
      setApiLoading(false);
    }
  };

  const handleSendAnother = useCallback(() => {
    setFormData({});
    setRepeatableDrafts({});
    setRepeatableEntries({});
    setErrors({});
    setSubmitError(null);
    setTermsAccepted(false);
    setTermsError(false);
    setSubmitted(false);
  }, []);

  return (
    <>
      <ProgressBar progress={submitted ? 100 : progress} />
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={springTransition}
          >
            {standardSections.length || repeatableSections.length ? (
              <div className="space-y-6">
                {standardSections.map((section, sIdx) => (
                  <div
                    key={section.id}
                    className={sIdx > 0 ? "pt-6 border-t border-border" : ""}
                  >
                    <div className="mb-4 space-y-0.5">
                      <h3
                        className="text-sm font-semibold"
                        style={{ color: "var(--partner-headline-color)" }}
                      >
                        {section.title}
                      </h3>
                      {section.description && (
                        <p
                          className="text-xs"
                          style={{ color: "var(--partner-description-color)" }}
                        >
                          {section.description}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-12 gap-6">
                      {section.fields.map((field) => (
                        <DynamicField
                          key={field.id}
                          field={field}
                          value={formData[field.id] || ""}
                          error={errors[field.id]}
                          index={fieldIndexMap.get(field.id) ?? 0}
                          onChange={handleChange}
                        />
                      ))}
                    </div>
                  </div>
                ))}

                {repeatableSections.map((section) => {
                  return (
                    <RepeatableSectionBlock
                      key={section.id}
                      section={section}
                      entries={repeatableEntries[section.id] ?? []}
                      draftValues={repeatableDrafts[section.id] ?? {}}
                      errors={errors}
                      fieldIndexMap={fieldIndexMap}
                      onDraftChange={handleRepeatableChange}
                      onAddEntry={addRepeatableEntry}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="grid grid-cols-12 gap-6">
                {allFields.map((field) => (
                  <DynamicField
                    key={field.id}
                    field={field}
                    value={formData[field.id] || ""}
                    error={errors[field.id]}
                    index={fieldIndexMap.get(field.id) ?? 0}
                    onChange={handleChange}
                  />
                ))}
              </div>
            )}

            {hasTerms && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...springTransition,
                  delay: allFields.length * 0.05,
                }}
                className="space-y-1.5"
              >
                <div className="flex items-start gap-2.5">
                  <Checkbox
                    id="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) => {
                      setTermsAccepted(checked === true);
                      if (checked) setTermsError(false);
                    }}
                    className={termsError ? "border-destructive" : ""}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground leading-snug cursor-pointer"
                  >
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={() => setTermsOpen(true)}
                      className="text-brand underline underline-offset-2 hover:opacity-80 transition-opacity font-medium"
                    >
                      Terms & Conditions
                    </button>
                  </label>
                </div>
                {termsError && (
                  <p className="text-xs text-destructive ml-6">
                    You must accept the terms and conditions
                  </p>
                )}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...springTransition,
                delay: allFields.length * 0.05 + (hasTerms ? 0.05 : 0),
              }}
            >
              <Button
                type="submit"
                disabled={submitting}
                className="w-full p-4 h-auto text-base font-medium bg-brand text-brand-foreground hover:opacity-90 btn-press"
              >
                {submitting
                  ? "Submitting..."
                  : referralCount > 0
                    ? `Submit ${referralCount} Referral${referralCount > 1 ? "s" : ""}`
                    : config.submitLabel}
              </Button>
              {submitError && (
                <p className="text-sm text-destructive mt-2">{submitError}</p>
              )}
            </motion.div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            className="text-center py-12 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springTransition}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ ...springTransition, delay: 0.1 }}
            >
              <CheckCircle2 className="w-16 h-16 mx-auto text-brand" />
            </motion.div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Request Submitted
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              {config.successMessage || "Thank you! We'll be in touch soon."}
            </p>
            <div className="pt-2">
              <Button
                type="button"
                onClick={handleSendAnother}
                className="btn-press"
              >
                Send Another
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {hasTerms && (
        <TermsDialog
          open={termsOpen}
          onOpenChange={setTermsOpen}
          partnerName={config.partnerName}
          content={config.termsAndConditions!}
        />
      )}
    </>
  );
};

export default DynamicForm;
