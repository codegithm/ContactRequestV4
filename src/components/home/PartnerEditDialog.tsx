"use client";
import { useEffect, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import AdminSettingsFields from "@/components/home/AdminSettingsFields";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useIsMobile } from "@/hooks/use-mobile";
import { useVdnDirectory } from "@/hooks/useVdnDirectory";
import { useLoading } from "@/components/loading-context";
import { createPartnerConfigStore } from "@/lib/partner-config-store";
import type { PartnerConfig } from "@/lib/partners";
import { createEditableFieldFromCatalog, createSectionId, DEFAULT_SECTION_ID, type EditablePartnerField, type EditablePartnerSection, flattenPartnerFields, getAvailableContactRequestFields, getGroupedAvailableContactRequestFields, updatePartnerFields, } from "@/components/home/partner-management-utils";
import AddFieldPanel from "@/components/home/AddFieldPanel";
import SectionsPanel from "@/components/home/SectionsPanel";
import ReferralSectionPanel from "@/components/home/ReferralSectionPanel";
import EditPartnerFieldsSection from "@/components/home/EditPartnerFieldsSection";
import DesktopFieldEditDrawer from "@/components/home/DesktopFieldEditDrawer";
import PartnerAdminGuide from "@/components/home/PartnerAdminGuide";
import AdminThemeFields from "@/components/home/AdminThemeFields";
import { defaultThemePrimary, defaultThemePrimaryForeground, defaultThemeRadius, defaultThemePageBackground, defaultThemeHeaderBackground, defaultThemeFooterBackground, defaultThemeCardBackground, defaultThemeCardBorder, defaultThemeHeadlineColor, defaultThemeDescriptionColor, defaultThemeBodyTextColor, defaultRadixAccentColor, defaultRadixGrayColor, defaultRadixRadius, defaultRadixScaling, defaultRadixPanelBackground, defaultRadixAppearance, } from "@/components/home/home-page-constants";
import { buildExtraSettingDrafts, serializeExtraSettingDrafts, type ExtraSettingDraft, } from "@/lib/partner-settings";
import { buildReportSearchFields, defaultReportSearchFieldIds, } from "@/lib/report-search-fields";
import { findVdnDirectoryEntry } from "@/lib/vdn-directory";
const store = createPartnerConfigStore();
interface PartnerEditDialogProps {
    partner: PartnerConfig | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSaved: () => Promise<void>;
}
function isReferralSection(section: {
    id: string;
    purpose?: string;
    repeatable?: boolean;
}) {
    return (section.repeatable === true ||
        section.purpose === "refer" ||
        /refer/i.test(section.id));
}
export default function PartnerEditDialog({ partner, open, onOpenChange, onSaved, }: PartnerEditDialogProps) {
    const { setApiLoading } = useLoading();
    const isMobile = useIsMobile();
    const [partnerName, setPartnerName] = useState("");
    const [headline, setHeadline] = useState("");
    const [description, setDescription] = useState("");
    const [logoUrl, setLogoUrl] = useState("");
    const [bannerUrl, setBannerUrl] = useState("");
    const [attachBannerToFormTop, setAttachBannerToFormTop] = useState(false);
    const [themePrimary, setThemePrimary] = useState(defaultThemePrimary);
    const [themePrimaryForeground, setThemePrimaryForeground] = useState(defaultThemePrimaryForeground);
    const [themeRadius, setThemeRadius] = useState(defaultThemeRadius);
    const [themePageBackground, setThemePageBackground] = useState(defaultThemePageBackground);
    const [themeHeaderBackground, setThemeHeaderBackground] = useState(defaultThemeHeaderBackground);
    const [themeFooterBackground, setThemeFooterBackground] = useState(defaultThemeFooterBackground);
    const [themeCardBackground, setThemeCardBackground] = useState(defaultThemeCardBackground);
    const [themeCardBorder, setThemeCardBorder] = useState(defaultThemeCardBorder);
    const [themeHeadlineColor, setThemeHeadlineColor] = useState(defaultThemeHeadlineColor);
    const [themeDescriptionColor, setThemeDescriptionColor] = useState(defaultThemeDescriptionColor);
    const [themeBodyTextColor, setThemeBodyTextColor] = useState(defaultThemeBodyTextColor);
    const [themeBadgeStyle, setThemeBadgeStyle] = useState<"soft" | "solid">("soft");
    const [radixAccentColor, setRadixAccentColor] = useState<string>(defaultRadixAccentColor);
    const [radixGrayColor, setRadixGrayColor] = useState<string>(defaultRadixGrayColor);
    const [radixRadius, setRadixRadius] = useState<string>(defaultRadixRadius);
    const [radixScaling, setRadixScaling] = useState<string>(defaultRadixScaling);
    const [radixPanelBackground, setRadixPanelBackground] = useState<string>(defaultRadixPanelBackground);
    const [radixAppearance, setRadixAppearance] = useState<string>(defaultRadixAppearance);
    const [vdn, setVdn] = useState("");
    const [brokerCode, setBrokerCode] = useState("");
    const [extraSettings, setExtraSettings] = useState<ExtraSettingDraft[]>([]);
    const [isActive, setIsActive] = useState(true);
    const [feedback, setFeedback] = useState(false);
    const [reportSearchFieldIds, setReportSearchFieldIds] = useState<string[]>([]);
    const [enableReferralSection, setEnableReferralSection] = useState(false);
    const [referralAddEntryLabel, setReferralAddEntryLabel] = useState("Add Referred Contact");
    const [referralMaxEntries, setReferralMaxEntries] = useState("");
    const [sections, setSections] = useState<EditablePartnerSection[]>([]);
    const [fields, setFields] = useState<EditablePartnerField[]>([]);
    const [newSectionTitle, setNewSectionTitle] = useState("");
    const [selectedFieldId, setSelectedFieldId] = useState("");
    const [newFieldSectionId, setNewFieldSectionId] = useState("");
    const [newFieldWidth, setNewFieldWidth] = useState<6 | 12>(6);
    const [newFieldRequired, setNewFieldRequired] = useState(false);
    const [isMobileAddFieldStepOpen, setIsMobileAddFieldStepOpen] = useState(false);
    const [desktopFieldDrawerId, setDesktopFieldDrawerId] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { entries: vdnDirectoryEntries, isLoading: isVdnDirectoryLoading, error: vdnDirectoryError, } = useVdnDirectory();
    useEffect(() => {
        if (!partner || !open)
            return;
        setPartnerName(partner.partnerName);
        setHeadline(partner.headline ?? "");
        setDescription(partner.description ?? "");
        setLogoUrl(partner.logoUrl ?? "");
        setBannerUrl(partner.bannerUrl ?? "");
        setAttachBannerToFormTop(!!partner.attachBannerToFormTop);
        setThemePrimary(partner.theme?.primary ?? defaultThemePrimary);
        setThemePrimaryForeground(partner.theme?.primaryForeground ?? "");
        setThemeRadius(partner.theme?.radius ?? defaultThemeRadius);
        setThemePageBackground(partner.theme?.pageBackground ?? "");
        setThemeHeaderBackground(partner.theme?.headerBackground ?? "");
        setThemeFooterBackground(partner.theme?.footerBackground ?? "");
        setThemeCardBackground(partner.theme?.cardBackground ?? "");
        setThemeCardBorder(partner.theme?.cardBorder ?? "");
        setThemeHeadlineColor(partner.theme?.headlineColor ?? "");
        setThemeDescriptionColor(partner.theme?.descriptionColor ?? "");
        setThemeBodyTextColor(partner.theme?.bodyTextColor ?? "");
        setThemeBadgeStyle(partner.theme?.badgeStyle === "solid" ? "solid" : "soft");
        setRadixAccentColor(partner.theme?.radix?.accentColor ?? defaultRadixAccentColor);
        setRadixGrayColor(partner.theme?.radix?.grayColor ?? defaultRadixGrayColor);
        setRadixRadius(partner.theme?.radix?.radius ?? defaultRadixRadius);
        setRadixScaling(partner.theme?.radix?.scaling ?? defaultRadixScaling);
        setRadixPanelBackground(partner.theme?.radix?.panelBackground ?? defaultRadixPanelBackground);
        setRadixAppearance(partner.theme?.radix?.appearance ?? defaultRadixAppearance);
        setVdn(typeof partner.settings?.vdn === "string" ? partner.settings.vdn : "");
        setBrokerCode(typeof partner.settings?.brokerCode === "string"
            ? partner.settings.brokerCode
            : "");
        setExtraSettings(buildExtraSettingDrafts(partner.settings));
        setIsActive(partner.isActive !== false);
        setFeedback(!!partner.feedback);
        setReportSearchFieldIds(partner.feedbackSearchFields?.map((field) => field.id) ?? []);
        const referralSection = partner.sections?.find(isReferralSection);
        setEnableReferralSection(!!referralSection);
        setReferralAddEntryLabel(referralSection?.addEntryLabel || "Add Referred Contact");
        setReferralMaxEntries(referralSection?.maxEntries ? String(referralSection.maxEntries) : "");
        const flattenedFields = flattenPartnerFields(partner);
        const derivedSections = partner.sections?.length
            ? partner.sections.map((s) => ({ id: s.id, title: s.title }))
            : Array.from(new Map(flattenedFields.map((f) => [
                f.sectionId || DEFAULT_SECTION_ID,
                f.sectionTitle || "Contact Details",
            ])).entries()).map(([id, title]) => ({ id, title }));
        setSections(derivedSections);
        setFields(flattenedFields);
        setNewSectionTitle("");
        setSelectedFieldId("");
        setNewFieldSectionId(derivedSections[0]?.id ?? "");
        setNewFieldWidth(6);
        setNewFieldRequired(false);
        setError(null);
    }, [partner, open]);
    const sortedFields = useMemo(() => [...fields].sort((a, b) => a.label.localeCompare(b.label)), [fields]);
    const availableFieldOptions = useMemo(() => getAvailableContactRequestFields(fields.map((f) => f.id)), [fields]);
    const groupedAvailableFieldOptions = useMemo(() => getGroupedAvailableContactRequestFields(fields.map((f) => f.id)), [fields]);
    const groupedFields = useMemo(() => sections.map((s) => [
        s.id,
        {
            title: s.title,
            fields: fields.filter((f) => f.sectionId === s.id),
        },
    ] as [
        string,
        {
            title: string;
            fields: EditablePartnerField[];
        }
    ]), [sections, fields]);
    const desktopField = useMemo(() => desktopFieldDrawerId
        ? fields.find((f) => f.id === desktopFieldDrawerId) || null
        : null, [fields, desktopFieldDrawerId]);
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
    if (!partner)
        return null;
    const updateField = (fieldId: string, updates: Partial<EditablePartnerField>) => {
        setFields((current) => current.map((f) => (f.id === fieldId ? { ...f, ...updates } : f)));
    };
    const addSection = () => {
        const trimmedTitle = newSectionTitle.trim();
        if (!trimmedTitle) {
            setError("Section title is required.");
            return;
        }
        const nextId = createSectionId(trimmedTitle);
        if (!nextId) {
            setError("Section title must contain letters or numbers.");
            return;
        }
        if (sections.some((s) => s.id === nextId)) {
            setError("Section titles must be unique.");
            return;
        }
        setSections((current) => [...current, { id: nextId, title: trimmedTitle }]);
        setNewSectionTitle("");
        setNewFieldSectionId((current) => current || nextId);
        setError(null);
    };
    const handleReferralToggle = (checked: boolean) => {
        setEnableReferralSection(checked);
        if (checked) {
            setSections((current) => current.some((s) => s.id === "refer")
                ? current
                : [...current, { id: "refer", title: "Refer Contacts" }]);
            return;
        }
        setSections((current) => current.filter((s) => s.id !== "refer"));
        setFields((current) => current.filter((f) => f.sectionId !== "refer"));
        setNewFieldSectionId((current) => (current === "refer" ? "" : current));
    };
    const addField = () => {
        if (!selectedFieldId) {
            setError("Select a contact request field to add.");
            return;
        }
        if (!newFieldSectionId) {
            setError("Create a section and choose where the field belongs.");
            return;
        }
        const selectedSection = sections.find((s) => s.id === newFieldSectionId) || null;
        if (!selectedSection) {
            setError("Choose a valid section for the new field.");
            return;
        }
        const nextField = createEditableFieldFromCatalog(selectedFieldId, selectedSection);
        if (!nextField) {
            setError("Selected field is not available.");
            return;
        }
        setFields((current) => [
            ...current,
            { ...nextField, width: newFieldWidth, required: newFieldRequired },
        ]);
        setSelectedFieldId("");
        setNewFieldWidth(6);
        setNewFieldRequired(false);
        setError(null);
    };
    const removeSection = (sectionId: string) => {
        setSections((current) => current.filter((s) => s.id !== sectionId));
        setFields((current) => current.filter((f) => f.sectionId !== sectionId));
        if (sectionId === "refer")
            setEnableReferralSection(false);
        setNewFieldSectionId((current) => (current === sectionId ? "" : current));
        setError(null);
    };
    const removeField = (fieldId: string) => {
        setFields((current) => current.filter((f) => f.id !== fieldId));
        if (desktopFieldDrawerId === fieldId)
            setDesktopFieldDrawerId(null);
        setError(null);
    };
    const handleModalOpenChange = (nextOpen: boolean) => {
        if (!nextOpen) {
            setIsMobileAddFieldStepOpen(false);
            setDesktopFieldDrawerId(null);
        }
        onOpenChange(nextOpen);
    };
    const handleSave = async () => {
        const parsedExtraSettings = serializeExtraSettingDrafts(extraSettings);
        let resolvedBrokerCode = "";
        if (vdn.trim()) {
            const selectedEntry = findVdnDirectoryEntry(vdn, vdnDirectoryEntries);
            if (!selectedEntry) {
                setError("Select a VDN from the directory list.");
                return;
            }
            resolvedBrokerCode = selectedEntry.brokerCode;
        }
        const referralSectionIds = new Set((partner.sections ?? []).filter(isReferralSection).map((s) => s.id));
        const parsedMaxEntries = Number.parseInt(referralMaxEntries, 10);
        const maxEntries = Number.isFinite(parsedMaxEntries) && parsedMaxEntries > 0
            ? parsedMaxEntries
            : undefined;
        const fieldsForSave = enableReferralSection
            ? fields
            : fields.filter((f) => !f.sectionId || !referralSectionIds.has(f.sectionId));
        const sectionList = sections
            .filter((s) => enableReferralSection || s.id !== "refer")
            .map((s) => {
            const existing = (partner.sections ?? []).find((c) => c.id === s.id);
            return {
                ...existing,
                id: s.id,
                title: s.title,
                description: s.id === "refer"
                    ? "Add one or more contacts to refer. Each added contact is submitted separately."
                    : existing?.description,
                purpose: s.id === "refer" ? ("refer" as const) : existing?.purpose,
                repeatable: s.id === "refer" ? true : existing?.repeatable,
                addEntryLabel: s.id === "refer"
                    ? referralAddEntryLabel.trim() || "Add Referred Contact"
                    : existing?.addEntryLabel,
                maxEntries: s.id === "refer" ? maxEntries : existing?.maxEntries,
                fields: [],
            };
        });
        const updatedConfig = updatePartnerFields({
            ...partner,
            partnerName: partnerName.trim() || partner.partnerName,
            logoUrl: logoUrl.trim() || undefined,
            bannerUrl: bannerUrl.trim() || undefined,
            attachBannerToFormTop,
            headline: headline.trim() || undefined,
            description: description.trim() || undefined,
            isActive,
            feedback,
            theme: {
                ...partner.theme,
                primary: themePrimary.trim() || defaultThemePrimary,
                primaryForeground: themePrimaryForeground.trim() || undefined,
                radius: themeRadius.trim() || defaultThemeRadius,
                pageBackground: themePageBackground.trim() || undefined,
                headerBackground: themeHeaderBackground.trim() || undefined,
                footerBackground: themeFooterBackground.trim() || undefined,
                cardBackground: themeCardBackground.trim() || undefined,
                cardBorder: themeCardBorder.trim() || undefined,
                headlineColor: themeHeadlineColor.trim() || undefined,
                descriptionColor: themeDescriptionColor.trim() || undefined,
                bodyTextColor: themeBodyTextColor.trim() || undefined,
                badgeStyle: themeBadgeStyle,
                radix: {
                    ...partner.theme?.radix,
                    accentColor: radixAccentColor as PartnerConfig["theme"]["radix"]["accentColor"],
                    grayColor: radixGrayColor as PartnerConfig["theme"]["radix"]["grayColor"],
                    radius: radixRadius as PartnerConfig["theme"]["radix"]["radius"],
                    scaling: radixScaling as PartnerConfig["theme"]["radix"]["scaling"],
                    panelBackground: radixPanelBackground as PartnerConfig["theme"]["radix"]["panelBackground"],
                    appearance: radixAppearance as PartnerConfig["theme"]["radix"]["appearance"],
                },
            },
            settings: vdn.trim() || resolvedBrokerCode || parsedExtraSettings
                ? {
                    vdn: vdn.trim() || undefined,
                    brokerCode: resolvedBrokerCode || undefined,
                    extra: parsedExtraSettings,
                }
                : undefined,
            feedbackSearchFields: feedback
                ? buildReportSearchFields(reportSearchFieldIds)
                : undefined,
            sections: sectionList.length ? sectionList : undefined,
        }, fieldsForSave);
        setSaving(true);
        setApiLoading(true);
        setError(null);
        try {
            await store.upsert(updatedConfig);
            await onSaved();
            onOpenChange(false);
        }
        catch {
            setError("Could not save partner changes.");
        }
        finally {
            setSaving(false);
            setApiLoading(false);
        }
    };
    const addFieldPanelProps = {
        sections,
        availableFieldOptions,
        groupedAvailableFieldOptions,
        selectedFieldId,
        newFieldSectionId,
        newFieldWidth,
        newFieldRequired,
        onSelectedFieldIdChange: setSelectedFieldId,
        onNewFieldSectionIdChange: setNewFieldSectionId,
        onNewFieldWidthChange: setNewFieldWidth,
        onNewFieldRequiredChange: setNewFieldRequired,
        onAdd: addField,
    };
    const formSections = (<div className="grid grid-cols-1 gap-6">
      <div className="space-y-6">
        <PartnerAdminGuide mode="edit" partnerId={partner.partnerId} partnerName={partnerName} headline={headline} description={description} sectionsCount={sections.length} fieldsCount={fields.length} reportEnabled={feedback}/>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Partner Name</label>
            <Input value={partnerName} onChange={(e) => setPartnerName(e.target.value)}/>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Headline</label>
            <Input value={headline} onChange={(e) => setHeadline(e.target.value)}/>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-medium">Logo URL</label>
            <Input value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} placeholder="https://cdn.example.com/logo.svg"/>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <label className="text-sm font-medium">Banner URL</label>
            <Input value={bannerUrl} onChange={(e) => setBannerUrl(e.target.value)} placeholder="https://cdn.example.com/banner.png"/>
          </div>
          <div className="sm:col-span-2 rounded-md border border-border p-3">
            <label className="flex items-center justify-between gap-3 text-sm">
              <span className="space-y-0.5">
                <span className="block font-medium">
                  Attach Banner To Form Top
                </span>
                <span className="block text-xs text-muted-foreground">
                  Uses Banner URL and attaches it centered above the form card.
                </span>
              </span>
              <Switch checked={attachBannerToFormTop} onCheckedChange={setAttachBannerToFormTop}/>
            </label>
          </div>
        </div>
        <EditPartnerFieldsSection isMobile={isMobile} fields={fields} sortedFields={sortedFields} groupedFields={groupedFields} sectionOptions={sections} onUpdateField={updateField} onRemoveField={removeField} onRemoveSection={removeSection} onEditDesktopField={setDesktopFieldDrawerId}/>
      </div>
      <div className="space-y-6">
        <div className="rounded-lg border border-border p-4 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">
            Partner Status
          </h3>
          <label className="flex items-center justify-between gap-3 text-sm">
            Active partner
            <Switch checked={isActive} onCheckedChange={setIsActive}/>
          </label>
          <label className="flex items-center justify-between gap-3 text-sm">
            Report enabled
            <Switch checked={feedback} onCheckedChange={(enabled) => {
            setFeedback(enabled);
            if (enabled && reportSearchFieldIds.length === 0) {
                setReportSearchFieldIds(defaultReportSearchFieldIds);
            }
        }}/>
          </label>
        </div>
        <details className="rounded-lg border border-border bg-muted/20 p-4">
          <summary className="cursor-pointer text-sm font-semibold text-foreground">
            Hidden Settings
          </summary>
          <p className="mt-2 text-xs text-muted-foreground">
            Optional payload values used by downstream integrations.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <AdminSettingsFields vdn={vdn} brokerCode={brokerCode} vdnDirectoryEntries={vdnDirectoryEntries} vdnDirectoryLoading={isVdnDirectoryLoading} vdnDirectoryError={vdnDirectoryError} extraSettings={extraSettings} enableReport={feedback} reportSearchFieldIds={reportSearchFieldIds} onVdnSelectionChange={(entry) => {
            setVdn(entry?.vdnNo ?? "");
            setBrokerCode(entry?.brokerCode ?? "");
        }} onExtraSettingsChange={setExtraSettings} onEnableReportChange={setFeedback} onReportSearchFieldIdsChange={setReportSearchFieldIds}/>
          </div>
        </details>
        <div className="rounded-lg border border-border p-4 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Theme</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AdminThemeFields previewPartnerName={partnerName} previewHeadline={headline} themePrimary={themePrimary} themePrimaryForeground={themePrimaryForeground} themeRadius={themeRadius} themePageBackground={themePageBackground} themeHeaderBackground={themeHeaderBackground} themeFooterBackground={themeFooterBackground} themeCardBackground={themeCardBackground} themeCardBorder={themeCardBorder} themeHeadlineColor={themeHeadlineColor} themeDescriptionColor={themeDescriptionColor} themeBodyTextColor={themeBodyTextColor} themeBadgeStyle={themeBadgeStyle} radixAccentColor={radixAccentColor} radixGrayColor={radixGrayColor} radixRadius={radixRadius} radixScaling={radixScaling} radixPanelBackground={radixPanelBackground} radixAppearance={radixAppearance} onThemePrimaryChange={setThemePrimary} onThemePrimaryForegroundChange={setThemePrimaryForeground} onThemeRadiusChange={setThemeRadius} onThemePageBackgroundChange={setThemePageBackground} onThemeHeaderBackgroundChange={setThemeHeaderBackground} onThemeFooterBackgroundChange={setThemeFooterBackground} onThemeCardBackgroundChange={setThemeCardBackground} onThemeCardBorderChange={setThemeCardBorder} onThemeHeadlineColorChange={setThemeHeadlineColor} onThemeDescriptionColorChange={setThemeDescriptionColor} onThemeBodyTextColorChange={setThemeBodyTextColor} onThemeBadgeStyleChange={setThemeBadgeStyle} onRadixAccentColorChange={setRadixAccentColor} onRadixGrayColorChange={setRadixGrayColor} onRadixRadiusChange={setRadixRadius} onRadixScalingChange={setRadixScaling} onRadixPanelBackgroundChange={setRadixPanelBackground} onRadixAppearanceChange={setRadixAppearance}/>
          </div>
        </div>
        <details className="rounded-lg border border-border bg-muted/20 p-4">
          <summary className="cursor-pointer text-sm font-semibold text-foreground">
            Form Structure
          </summary>
          <p className="mt-2 text-xs text-muted-foreground">
            Sections, referral entries, and adding fields.
          </p>
          <div className="mt-4 space-y-4">
            <ReferralSectionPanel enabled={enableReferralSection} addEntryLabel={referralAddEntryLabel} maxEntries={referralMaxEntries} onToggle={handleReferralToggle} onAddEntryLabelChange={setReferralAddEntryLabel} onMaxEntriesChange={setReferralMaxEntries}/>
            <SectionsPanel sections={sections} newSectionTitle={newSectionTitle} onNewSectionTitleChange={setNewSectionTitle} onAddSection={addSection} onRemoveSection={removeSection}/>
            {!isMobile && <AddFieldPanel {...addFieldPanelProps}/>}
          </div>
        </details>
      </div>
    </div>);
    const actions = (<>
      <Button type="button" variant="outline" onClick={() => handleModalOpenChange(false)}>
        Cancel
      </Button>
      <Button type="button" onClick={handleSave} disabled={saving}>
        {saving ? "Saving..." : "Save Changes"}
      </Button>
    </>);
    if (isMobile) {
        return (<Drawer open={open} onOpenChange={handleModalOpenChange}>
        <DrawerContent className="max-h-[92vh]">
          <DrawerHeader className="border-b border-border px-4 pb-4 text-left">
            <DrawerTitle>
              {isMobileAddFieldStepOpen
                ? "Add New Field"
                : `Edit ${partner.partnerName}`}
            </DrawerTitle>
            <DrawerDescription>
              {isMobileAddFieldStepOpen
                ? "Pick a contact request field and assign it to a section."
                : "Toggle partner availability, manage fields, and update the core copy used by the form shell."}
            </DrawerDescription>
          </DrawerHeader>
          <div className="overflow-y-auto px-4 py-4">
            {isMobileAddFieldStepOpen ? (<AddFieldPanel {...addFieldPanelProps} showAddButton={false}/>) : (formSections)}
            {!isMobileAddFieldStepOpen && (<Button type="button" variant="outline" className="mt-4 w-full" onClick={() => setIsMobileAddFieldStepOpen(true)}>
                Open Add Field Step
              </Button>)}
            {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
          </div>
          <DrawerFooter className="border-t border-border bg-background px-4 pb-6">
            {isMobileAddFieldStepOpen ? (<>
                <Button type="button" onClick={addField}>
                  Add Field
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsMobileAddFieldStepOpen(false)}>
                  Back To Edit
                </Button>
              </>) : (actions)}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>);
    }
    return (<>
      <Dialog open={open} onOpenChange={handleModalOpenChange}>
        <DialogContent className="flex max-h-[94vh] max-w-6xl flex-col overflow-hidden p-0">
          <DialogHeader className="shrink-0 border-b border-border px-6 pb-4 pt-6">
            <DialogTitle>Edit {partner.partnerName}</DialogTitle>
            <DialogDescription>
              Toggle partner availability, manage fields, and update the core
              copy used by the form shell.
            </DialogDescription>
          </DialogHeader>
          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
            {formSections}
            {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
          </div>
          <DialogFooter className="sticky bottom-0 z-10 shrink-0 border-t border-border bg-background/95 px-6 py-5 backdrop-blur">
            {actions}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <DesktopFieldEditDrawer open={!isMobile && !!desktopFieldDrawerId} field={desktopField} sectionOptions={sections} onUpdate={updateField} onClose={() => setDesktopFieldDrawerId(null)}/>
    </>);
}
