"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLoading } from "@/components/loading-context";
import AdminFooterFields from "@/components/home/AdminFooterFields";
import AdminIdentityFields from "@/components/home/AdminIdentityFields";
import AdminSettingsFields from "@/components/home/AdminSettingsFields";
import AdminThemeFields from "@/components/home/AdminThemeFields";
import PartnerAdminGuide from "@/components/home/PartnerAdminGuide";
import AddFieldPanel from "@/components/home/AddFieldPanel";
import SectionsPanel from "@/components/home/SectionsPanel";
import ReferralSectionPanel from "@/components/home/ReferralSectionPanel";
import AdminConfiguredFieldsPanel from "@/components/home/AdminConfiguredFieldsPanel";
import {
  createEditableFieldFromCatalog,
  createSectionId,
  getAvailableContactRequestFields,
  getGroupedAvailableContactRequestFields,
  type EditablePartnerField,
  type EditablePartnerSection,
  updatePartnerFields,
} from "@/components/home/partner-management-utils";
import {
  defaultThemePrimary,
  defaultThemePrimaryForeground,
  defaultThemeRadius,
  defaultThemePageBackground,
  defaultThemeHeaderBackground,
  defaultThemeFooterBackground,
  defaultThemeCardBackground,
  defaultThemeCardBorder,
  defaultThemeHeadlineColor,
  defaultThemeDescriptionColor,
  defaultThemeBodyTextColor,
  defaultRadixAccentColor,
  defaultRadixGrayColor,
  defaultRadixRadius,
  defaultRadixScaling,
  defaultRadixPanelBackground,
  defaultRadixAppearance,
  defaultFooterLayout,
  defaultFooterPoweredByLabel,
  defaultFooterLinksJson,
  defaultFooterLogosJson,
  defaultConsentLabel,
  springTransition,
} from "@/components/home/home-page-constants";
import { useVdnDirectory } from "@/hooks/useVdnDirectory";
import { createPartnerConfigStore } from "@/lib/partner-config-store";
import type {
  PartnerConfig,
  PartnerFooterLink,
  PartnerFooterLogo,
} from "@/lib/partners";
import {
  serializeExtraSettingDrafts,
  type ExtraSettingDraft,
} from "@/lib/partner-settings";
import {
  buildReportSearchFields,
  defaultReportSearchFieldIds,
} from "@/lib/report-search-fields";
import { findVdnDirectoryEntry } from "@/lib/vdn-directory";
const store = createPartnerConfigStore();
interface PartnerAdminPanelProps {
  onSaved: () => Promise<void>;
}
export default function PartnerAdminPanel({ onSaved }: PartnerAdminPanelProps) {
  const { setApiLoading } = useLoading();
  const [submitting, setSubmitting] = useState(false);
  const [adminError, setAdminError] = useState<string | null>(null);
  const [partnerId, setPartnerId] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [attachBannerToFormTop, setAttachBannerToFormTop] = useState(false);
  const [themePrimary, setThemePrimary] = useState(defaultThemePrimary);
  const [themePrimaryForeground, setThemePrimaryForeground] = useState(
    defaultThemePrimaryForeground,
  );
  const [themeRadius, setThemeRadius] = useState(defaultThemeRadius);
  const [themePageBackground, setThemePageBackground] = useState(
    defaultThemePageBackground,
  );
  const [themeHeaderBackground, setThemeHeaderBackground] = useState(
    defaultThemeHeaderBackground,
  );
  const [themeFooterBackground, setThemeFooterBackground] = useState(
    defaultThemeFooterBackground,
  );
  const [themeCardBackground, setThemeCardBackground] = useState(
    defaultThemeCardBackground,
  );
  const [themeCardBorder, setThemeCardBorder] = useState(
    defaultThemeCardBorder,
  );
  const [themeHeadlineColor, setThemeHeadlineColor] = useState(
    defaultThemeHeadlineColor,
  );
  const [themeDescriptionColor, setThemeDescriptionColor] = useState(
    defaultThemeDescriptionColor,
  );
  const [themeBodyTextColor, setThemeBodyTextColor] = useState(
    defaultThemeBodyTextColor,
  );
  const [themeBadgeStyle, setThemeBadgeStyle] = useState<"soft" | "solid">(
    "soft",
  );
  const [radixAccentColor, setRadixAccentColor] = useState<string>(
    defaultRadixAccentColor,
  );
  const [radixGrayColor, setRadixGrayColor] = useState<string>(
    defaultRadixGrayColor,
  );
  const [radixRadius, setRadixRadius] = useState<string>(defaultRadixRadius);
  const [radixScaling, setRadixScaling] = useState<string>(defaultRadixScaling);
  const [radixPanelBackground, setRadixPanelBackground] = useState<string>(
    defaultRadixPanelBackground,
  );
  const [radixAppearance, setRadixAppearance] = useState<string>(
    defaultRadixAppearance,
  );
  const [enableFeedback, setEnableFeedback] = useState(false);
  const [reportSearchFieldIds, setReportSearchFieldIds] = useState<string[]>(
    [],
  );
  const [consentEnabled, setConsentEnabled] = useState(false);
  const [consentRequired, setConsentRequired] = useState(true);
  const [consentLabel, setConsentLabel] = useState(defaultConsentLabel);
  const [enableReferralSection, setEnableReferralSection] = useState(false);
  const [referralAddEntryLabel, setReferralAddEntryLabel] = useState(
    "Add Referred Contact",
  );
  const [referralMaxEntries, setReferralMaxEntries] = useState("");
  const [vdn, setVdn] = useState("");
  const [brokerCode, setBrokerCode] = useState("");
  const [extraSettings, setExtraSettings] = useState<ExtraSettingDraft[]>([]);
  const [footerLayout, setFooterLayout] = useState<
    "split" | "centered" | "links-only"
  >(defaultFooterLayout);
  const [footerShowPoweredBy, setFooterShowPoweredBy] = useState(true);
  const [footerPoweredByLabel, setFooterPoweredByLabel] = useState(
    defaultFooterPoweredByLabel,
  );
  const [footerPoweredByUrl, setFooterPoweredByUrl] = useState("");
  const [footerLinksJson, setFooterLinksJson] = useState(
    defaultFooterLinksJson,
  );
  const [footerLogosJson, setFooterLogosJson] = useState(
    defaultFooterLogosJson,
  );
  const [footerNote, setFooterNote] = useState("");
  const [sections, setSections] = useState<EditablePartnerSection[]>([]);
  const [fields, setFields] = useState<EditablePartnerField[]>([]);
  const [newSectionTitle, setNewSectionTitle] = useState("");
  const [selectedFieldId, setSelectedFieldId] = useState("");
  const [newFieldSectionId, setNewFieldSectionId] = useState("");
  const [newFieldWidth, setNewFieldWidth] = useState<6 | 12>(6);
  const [newFieldRequired, setNewFieldRequired] = useState(false);
  const {
    entries: vdnDirectoryEntries,
    isLoading: isVdnDirectoryLoading,
    error: vdnDirectoryError,
  } = useVdnDirectory();
  const availableFieldOptions = useMemo(
    () => getAvailableContactRequestFields(fields.map((field) => field.id)),
    [fields],
  );
  const groupedAvailableFieldOptions = useMemo(
    () =>
      getGroupedAvailableContactRequestFields(fields.map((field) => field.id)),
    [fields],
  );
  const groupedFields = useMemo(
    () =>
      sections.map((section) => ({
        ...section,
        fields: fields.filter((field) => field.sectionId === section.id),
      })),
    [sections, fields],
  );
  useEffect(() => {
    if (!vdn.trim()) {
      if (brokerCode) {
        setBrokerCode("");
      }
      return;
    }
    const matchedEntry = findVdnDirectoryEntry(vdn, vdnDirectoryEntries);
    if (matchedEntry && brokerCode !== matchedEntry.brokerCode) {
      setBrokerCode(matchedEntry.brokerCode);
    }
  }, [brokerCode, vdn, vdnDirectoryEntries]);
  const resetForm = () => {
    setPartnerId("");
    setPartnerName("");
    setHeadline("");
    setDescription("");
    setLogoUrl("");
    setBannerUrl("");
    setAttachBannerToFormTop(false);
    setThemePrimary(defaultThemePrimary);
    setThemePrimaryForeground(defaultThemePrimaryForeground);
    setThemeRadius(defaultThemeRadius);
    setThemePageBackground(defaultThemePageBackground);
    setThemeHeaderBackground(defaultThemeHeaderBackground);
    setThemeFooterBackground(defaultThemeFooterBackground);
    setThemeCardBackground(defaultThemeCardBackground);
    setThemeCardBorder(defaultThemeCardBorder);
    setThemeHeadlineColor(defaultThemeHeadlineColor);
    setThemeDescriptionColor(defaultThemeDescriptionColor);
    setThemeBodyTextColor(defaultThemeBodyTextColor);
    setThemeBadgeStyle("soft");
    setRadixAccentColor(defaultRadixAccentColor);
    setRadixGrayColor(defaultRadixGrayColor);
    setRadixRadius(defaultRadixRadius);
    setRadixScaling(defaultRadixScaling);
    setRadixPanelBackground(defaultRadixPanelBackground);
    setRadixAppearance(defaultRadixAppearance);
    setEnableFeedback(false);
    setReportSearchFieldIds([]);
    setConsentEnabled(false);
    setConsentRequired(true);
    setConsentLabel(defaultConsentLabel);
    setEnableReferralSection(false);
    setReferralAddEntryLabel("Add Referred Contact");
    setReferralMaxEntries("");
    setVdn("");
    setBrokerCode("");
    setExtraSettings([]);
    setFooterLayout(defaultFooterLayout);
    setFooterShowPoweredBy(true);
    setFooterPoweredByLabel(defaultFooterPoweredByLabel);
    setFooterPoweredByUrl("");
    setFooterLinksJson(defaultFooterLinksJson);
    setFooterLogosJson(defaultFooterLogosJson);
    setFooterNote("");
    setSections([]);
    setFields([]);
    setNewSectionTitle("");
    setSelectedFieldId("");
    setNewFieldSectionId("");
    setNewFieldWidth(6);
    setNewFieldRequired(false);
    setAdminError(null);
  };
  const updateField = (
    fieldId: string,
    updates: Partial<EditablePartnerField>,
  ) => {
    setFields((current) =>
      current.map((field) =>
        field.id === fieldId ? { ...field, ...updates } : field,
      ),
    );
  };
  const addSection = () => {
    const trimmedTitle = newSectionTitle.trim();
    if (!trimmedTitle) {
      setAdminError("Section title is required.");
      return;
    }
    const nextId = createSectionId(trimmedTitle);
    if (!nextId) {
      setAdminError("Section title must contain letters or numbers.");
      return;
    }
    if (sections.some((section) => section.id === nextId)) {
      setAdminError("Section titles must be unique.");
      return;
    }
    setSections((current) => [...current, { id: nextId, title: trimmedTitle }]);
    setNewSectionTitle("");
    setNewFieldSectionId((current) => current || nextId);
    setAdminError(null);
  };
  const handleReferralToggle = (checked: boolean) => {
    setEnableReferralSection(checked);
    if (checked) {
      setSections((current) =>
        current.some((section) => section.id === "refer")
          ? current
          : [...current, { id: "refer", title: "Refer Contacts" }],
      );
      return;
    }
    setSections((current) =>
      current.filter((section) => section.id !== "refer"),
    );
    setFields((current) =>
      current.filter((field) => field.sectionId !== "refer"),
    );
    setNewFieldSectionId((current) => (current === "refer" ? "" : current));
  };
  const addField = () => {
    if (!selectedFieldId) {
      setAdminError("Select a contact request field to add.");
      return;
    }
    if (!newFieldSectionId) {
      setAdminError("Create a section and choose where the field belongs.");
      return;
    }
    const selectedSection = sections.find(
      (section) => section.id === newFieldSectionId,
    );
    if (!selectedSection) {
      setAdminError("Choose a valid section for the new field.");
      return;
    }
    const nextField = createEditableFieldFromCatalog(
      selectedFieldId,
      selectedSection,
    );
    if (!nextField) {
      setAdminError("Selected field is not available.");
      return;
    }
    setFields((current) => [
      ...current,
      {
        ...nextField,
        width: newFieldWidth,
        required: newFieldRequired,
      },
    ]);
    setSelectedFieldId("");
    setNewFieldWidth(6);
    setNewFieldRequired(false);
    setAdminError(null);
  };
  const removeSection = (sectionId: string) => {
    setSections((current) =>
      current.filter((section) => section.id !== sectionId),
    );
    setFields((current) =>
      current.filter((field) => field.sectionId !== sectionId),
    );
    if (sectionId === "refer") {
      setEnableReferralSection(false);
    }
    setNewFieldSectionId((current) => (current === sectionId ? "" : current));
    setAdminError(null);
  };
  const removeField = (fieldId: string) => {
    setFields((current) => current.filter((field) => field.id !== fieldId));
    setAdminError(null);
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setAdminError(null);
    if (!partnerId.trim() || !partnerName.trim()) {
      setAdminError("Partner ID and Partner Name are required.");
      return;
    }
    const parsedExtraSettings = serializeExtraSettingDrafts(extraSettings);
    let resolvedBrokerCode = "";
    if (vdn.trim()) {
      const selectedEntry = findVdnDirectoryEntry(vdn, vdnDirectoryEntries);
      if (!selectedEntry) {
        setAdminError("Select a VDN from the directory list.");
        return;
      }
      resolvedBrokerCode = selectedEntry.brokerCode;
    }
    let parsedFooterLinks: PartnerFooterLink[] | undefined;
    if (footerLinksJson.trim()) {
      try {
        parsedFooterLinks = JSON.parse(footerLinksJson) as PartnerFooterLink[];
      } catch {
        setAdminError("Footer links must be valid JSON.");
        return;
      }
    }
    let parsedFooterLogos: PartnerFooterLogo[] | undefined;
    if (footerLogosJson.trim()) {
      try {
        parsedFooterLogos = JSON.parse(footerLogosJson) as PartnerFooterLogo[];
      } catch {
        setAdminError("Footer logos must be valid JSON.");
        return;
      }
    }
    const parsedMaxEntries = Number.parseInt(referralMaxEntries, 10);
    const maxEntries =
      Number.isFinite(parsedMaxEntries) && parsedMaxEntries > 0
        ? parsedMaxEntries
        : undefined;
    const sectionDefinitions = sections
      .filter((section) => enableReferralSection || section.id !== "refer")
      .map((section) => ({
        id: section.id,
        title: section.title,
        description:
          section.id === "refer"
            ? "Add one or more contacts to refer. Each added contact is submitted separately."
            : undefined,
        purpose: section.id === "refer" ? ("refer" as const) : undefined,
        repeatable: section.id === "refer" ? true : undefined,
        addEntryLabel:
          section.id === "refer"
            ? referralAddEntryLabel.trim() || "Add Referred Contact"
            : undefined,
        maxEntries: section.id === "refer" ? maxEntries : undefined,
        fields: [],
      }));
    const config: PartnerConfig = {
      partnerId: partnerId.trim().toLowerCase(),
      partnerName: partnerName.trim(),
      logoUrl: logoUrl.trim() || undefined,
      bannerUrl: bannerUrl.trim() || undefined,
      attachBannerToFormTop,
      headline: headline.trim() || `Contact ${partnerName.trim()}`,
      description: description.trim() || undefined,
      submitLabel: "Submit Request",
      successMessage: `Thanks! ${partnerName.trim()} will contact you shortly.`,
      theme: {
        primary: themePrimary.trim() || defaultThemePrimary,
        primaryForeground:
          themePrimaryForeground.trim() || defaultThemePrimaryForeground,
        radius: themeRadius.trim() || defaultThemeRadius,
        pageBackground:
          themePageBackground.trim() || defaultThemePageBackground,
        headerBackground:
          themeHeaderBackground.trim() || defaultThemeHeaderBackground,
        footerBackground:
          themeFooterBackground.trim() || defaultThemeFooterBackground,
        cardBackground:
          themeCardBackground.trim() || defaultThemeCardBackground,
        cardBorder: themeCardBorder.trim() || defaultThemeCardBorder,
        headlineColor: themeHeadlineColor.trim() || defaultThemeHeadlineColor,
        descriptionColor:
          themeDescriptionColor.trim() || defaultThemeDescriptionColor,
        bodyTextColor: themeBodyTextColor.trim() || defaultThemeBodyTextColor,
        badgeStyle: themeBadgeStyle,
        radix: {
          accentColor: radixAccentColor as NonNullable<
            NonNullable<PartnerConfig["theme"]["radix"]>["accentColor"]
          >,
          grayColor: radixGrayColor as NonNullable<
            NonNullable<PartnerConfig["theme"]["radix"]>["grayColor"]
          >,
          radius: radixRadius as NonNullable<
            NonNullable<PartnerConfig["theme"]["radix"]>["radius"]
          >,
          scaling: radixScaling as NonNullable<
            NonNullable<PartnerConfig["theme"]["radix"]>["scaling"]
          >,
          panelBackground: radixPanelBackground as NonNullable<
            NonNullable<PartnerConfig["theme"]["radix"]>["panelBackground"]
          >,
          appearance: radixAppearance as NonNullable<
            NonNullable<PartnerConfig["theme"]["radix"]>["appearance"]
          >,
        },
      },
      settings:
        vdn.trim() || resolvedBrokerCode || parsedExtraSettings
          ? {
              vdn: vdn.trim() || undefined,
              brokerCode: resolvedBrokerCode || undefined,
              extra: parsedExtraSettings,
            }
          : undefined,
      feedback: enableFeedback,
      feedbackSearchFields: enableFeedback
        ? buildReportSearchFields(reportSearchFieldIds)
        : undefined,
      consentCheckbox: consentEnabled
        ? {
            enabled: true,
            required: consentRequired,
            label: consentLabel.trim() || defaultConsentLabel,
          }
        : undefined,
      fields: [],
      sections: sectionDefinitions,
      footer: {
        layout: footerLayout,
        showPoweredBy: footerShowPoweredBy,
        poweredByLabel:
          footerPoweredByLabel.trim() || defaultFooterPoweredByLabel,
        poweredByUrl: footerPoweredByUrl.trim() || undefined,
        links: parsedFooterLinks,
        logos: parsedFooterLogos,
        note: footerNote.trim() || undefined,
      },
    };
    const updatedConfig = updatePartnerFields(
      config,
      fields.filter(
        (field) => enableReferralSection || field.sectionId !== "refer",
      ),
    );
    setSubmitting(true);
    setApiLoading(true);
    try {
      await store.upsert(updatedConfig);
      await onSaved();
      resetForm();
    } catch {
      setAdminError("Could not save partner config.");
    } finally {
      setSubmitting(false);
      setApiLoading(false);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springTransition}
      className="rounded-lg border border-border bg-card p-6 form-container space-y-5"
    >
      <div className="space-y-1">
        <h2 className="text-base font-semibold text-foreground">
          Admin: Add or Update Partner
        </h2>
        <p className="text-xs text-muted-foreground">
          Uses environment-aware config storage: remote API when enabled with a
          base URL, otherwise local fallback.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <PartnerAdminGuide
          mode="add"
          partnerId={partnerId}
          partnerName={partnerName}
          headline={headline}
          description={description}
          sectionsCount={sections.length}
          fieldsCount={fields.length}
          reportEnabled={enableFeedback}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AdminIdentityFields
            partnerId={partnerId}
            partnerName={partnerName}
            logoUrl={logoUrl}
            bannerUrl={bannerUrl}
            attachBannerToFormTop={attachBannerToFormTop}
            headline={headline}
            description={description}
            onPartnerIdChange={setPartnerId}
            onPartnerNameChange={setPartnerName}
            onLogoUrlChange={setLogoUrl}
            onBannerUrlChange={setBannerUrl}
            onAttachBannerToFormTopChange={setAttachBannerToFormTop}
            onHeadlineChange={setHeadline}
            onDescriptionChange={setDescription}
          />
          <AdminThemeFields
            previewPartnerName={partnerName}
            previewHeadline={headline}
            previewDescription={description}
            themePrimary={themePrimary}
            themePrimaryForeground={themePrimaryForeground}
            themeRadius={themeRadius}
            themePageBackground={themePageBackground}
            themeHeaderBackground={themeHeaderBackground}
            themeFooterBackground={themeFooterBackground}
            themeCardBackground={themeCardBackground}
            themeCardBorder={themeCardBorder}
            themeHeadlineColor={themeHeadlineColor}
            themeDescriptionColor={themeDescriptionColor}
            themeBodyTextColor={themeBodyTextColor}
            themeBadgeStyle={themeBadgeStyle}
            radixAccentColor={radixAccentColor}
            radixGrayColor={radixGrayColor}
            radixRadius={radixRadius}
            radixScaling={radixScaling}
            radixPanelBackground={radixPanelBackground}
            radixAppearance={radixAppearance}
            onThemePrimaryChange={setThemePrimary}
            onThemePrimaryForegroundChange={setThemePrimaryForeground}
            onThemeRadiusChange={setThemeRadius}
            onThemePageBackgroundChange={setThemePageBackground}
            onThemeHeaderBackgroundChange={setThemeHeaderBackground}
            onThemeFooterBackgroundChange={setThemeFooterBackground}
            onThemeCardBackgroundChange={setThemeCardBackground}
            onThemeCardBorderChange={setThemeCardBorder}
            onThemeHeadlineColorChange={setThemeHeadlineColor}
            onThemeDescriptionColorChange={setThemeDescriptionColor}
            onThemeBodyTextColorChange={setThemeBodyTextColor}
            onThemeBadgeStyleChange={setThemeBadgeStyle}
            onRadixAccentColorChange={setRadixAccentColor}
            onRadixGrayColorChange={setRadixGrayColor}
            onRadixRadiusChange={setRadixRadius}
            onRadixScalingChange={setRadixScaling}
            onRadixPanelBackgroundChange={setRadixPanelBackground}
            onRadixAppearanceChange={setRadixAppearance}
          />
          <details className="md:col-span-2 rounded-lg border border-border bg-muted/20 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-foreground">
              Hidden Settings And Report
            </summary>
            <p className="mt-2 text-xs text-muted-foreground">
              Optional payload settings and report toggle.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdminSettingsFields
                vdn={vdn}
                brokerCode={brokerCode}
                vdnDirectoryEntries={vdnDirectoryEntries}
                vdnDirectoryLoading={isVdnDirectoryLoading}
                vdnDirectoryError={vdnDirectoryError}
                extraSettings={extraSettings}
                enableReport={enableFeedback}
                reportSearchFieldIds={reportSearchFieldIds}
                onVdnSelectionChange={(entry) => {
                  setVdn(entry?.vdnNo ?? "");
                  setBrokerCode(entry?.brokerCode ?? "");
                }}
                onExtraSettingsChange={setExtraSettings}
                onEnableReportChange={(enabled) => {
                  setEnableFeedback(enabled);
                  if (enabled && reportSearchFieldIds.length === 0) {
                    setReportSearchFieldIds(defaultReportSearchFieldIds);
                  }
                }}
                onReportSearchFieldIdsChange={setReportSearchFieldIds}
                consentEnabled={consentEnabled}
                consentRequired={consentRequired}
                consentLabel={consentLabel}
                onConsentEnabledChange={setConsentEnabled}
                onConsentRequiredChange={setConsentRequired}
                onConsentLabelChange={setConsentLabel}
              />
            </div>
          </details>
          <details className="md:col-span-2 rounded-lg border border-border bg-muted/20 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-foreground">
              Section Management
            </summary>
            <p className="mt-2 text-xs text-muted-foreground">
              Create and remove form sections.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <SectionsPanel
                sections={sections}
                newSectionTitle={newSectionTitle}
                onNewSectionTitleChange={setNewSectionTitle}
                onAddSection={addSection}
                onRemoveSection={removeSection}
              />
            </div>
          </details>

          <details className="md:col-span-2 rounded-lg border border-border bg-muted/20 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-foreground">
              Form Structure
            </summary>
            <p className="mt-2 text-xs text-muted-foreground">
              Sections, referral entries, and adding fields.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <ReferralSectionPanel
                enabled={enableReferralSection}
                addEntryLabel={referralAddEntryLabel}
                maxEntries={referralMaxEntries}
                onToggle={handleReferralToggle}
                onAddEntryLabelChange={setReferralAddEntryLabel}
                onMaxEntriesChange={setReferralMaxEntries}
              />
              <AddFieldPanel
                sections={sections}
                availableFieldOptions={availableFieldOptions}
                groupedAvailableFieldOptions={groupedAvailableFieldOptions}
                selectedFieldId={selectedFieldId}
                newFieldSectionId={newFieldSectionId}
                newFieldWidth={newFieldWidth}
                newFieldRequired={newFieldRequired}
                onSelectedFieldIdChange={setSelectedFieldId}
                onNewFieldSectionIdChange={setNewFieldSectionId}
                onNewFieldWidthChange={setNewFieldWidth}
                onNewFieldRequiredChange={setNewFieldRequired}
                onAdd={addField}
              />
            </div>
          </details>
          <details className="md:col-span-2 rounded-lg border border-border bg-muted/20 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-foreground">
              Footer Settings
            </summary>
            <p className="mt-2 text-xs text-muted-foreground">
              Optional legal/footer controls for partner pages.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdminFooterFields
                footerLayout={footerLayout}
                footerShowPoweredBy={footerShowPoweredBy}
                footerPoweredByLabel={footerPoweredByLabel}
                footerPoweredByUrl={footerPoweredByUrl}
                footerLinksJson={footerLinksJson}
                footerLogosJson={footerLogosJson}
                footerNote={footerNote}
                onFooterLayoutChange={setFooterLayout}
                onFooterShowPoweredByChange={setFooterShowPoweredBy}
                onFooterPoweredByLabelChange={setFooterPoweredByLabel}
                onFooterPoweredByUrlChange={setFooterPoweredByUrl}
                onFooterLinksJsonChange={setFooterLinksJson}
                onFooterLogosJsonChange={setFooterLogosJson}
                onFooterNoteChange={setFooterNote}
              />
            </div>
          </details>
        </div>

        <AdminConfiguredFieldsPanel
          groupedFields={groupedFields}
          sections={sections}
          onUpdateField={updateField}
          onRemoveField={removeField}
          onRemoveSection={removeSection}
        />

        {adminError && <p className="text-sm text-destructive">{adminError}</p>}

        <div className="flex gap-3">
          <Button type="submit" disabled={submitting} className="btn-press">
            {submitting ? "Saving..." : "Save Partner Config"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={resetForm}
            disabled={submitting}
          >
            Reset
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
