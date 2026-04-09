import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  createEmptyExtraSettingDraft,
  getUnusedExtraSettingFieldOptions,
  type ExtraSettingDraft,
  type ExtraSettingValueType,
} from "@/lib/partner-settings";
import {
  reportSearchOptions,
  type ReportSearchOption,
} from "@/lib/report-search-fields";
import type { VdnDirectoryEntry } from "@/models/vdn-directory";
interface AdminSettingsFieldsProps {
  vdn: string;
  brokerCode: string;
  vdnDirectoryEntries: VdnDirectoryEntry[];
  vdnDirectoryLoading: boolean;
  vdnDirectoryError?: string | null;
  extraSettings: ExtraSettingDraft[];
  enableReport?: boolean;
  reportSearchFieldIds?: string[];
  consentEnabled?: boolean;
  consentRequired?: boolean;
  consentLabel?: string;
  onVdnSelectionChange: (entry: VdnDirectoryEntry | null) => void;
  onExtraSettingsChange: (drafts: ExtraSettingDraft[]) => void;
  onEnableReportChange?: (v: boolean) => void;
  onReportSearchFieldIdsChange?: (fieldIds: string[]) => void;
  onConsentEnabledChange?: (value: boolean) => void;
  onConsentRequiredChange?: (value: boolean) => void;
  onConsentLabelChange?: (value: string) => void;
}
export default function AdminSettingsFields({
  vdn,
  brokerCode,
  vdnDirectoryEntries,
  vdnDirectoryLoading,
  vdnDirectoryError,
  extraSettings,
  enableReport,
  reportSearchFieldIds,
  consentEnabled,
  consentRequired,
  consentLabel,
  onVdnSelectionChange,
  onExtraSettingsChange,
  onEnableReportChange,
  onReportSearchFieldIdsChange,
  onConsentEnabledChange,
  onConsentRequiredChange,
  onConsentLabelChange,
}: AdminSettingsFieldsProps) {
  const vdnOptions = vdnDirectoryEntries.map((entry) => ({
    value: entry.vdnNo,
    label: entry.vdnNo,
    description: entry.brokerCode,
  }));
  const updateExtraSetting = (
    draftId: string,
    updates: Partial<ExtraSettingDraft>,
  ) => {
    onExtraSettingsChange(
      extraSettings.map((draft) =>
        draft.id === draftId ? { ...draft, ...updates } : draft,
      ),
    );
  };
  const updateExtraSettingValueType = (
    draftId: string,
    valueType: ExtraSettingValueType,
  ) => {
    onExtraSettingsChange(
      extraSettings.map((draft) => {
        if (draft.id !== draftId) {
          return draft;
        }
        if (valueType === "null") {
          return { ...draft, valueType, value: "" };
        }
        if (valueType === "boolean") {
          return {
            ...draft,
            valueType,
            value: draft.value === "false" ? "false" : "true",
          };
        }
        return { ...draft, valueType };
      }),
    );
  };
  const toggleReportSearchField = (
    fieldId: ReportSearchOption["id"],
    checked: boolean,
  ) => {
    if (!onReportSearchFieldIdsChange) return;
    const currentIds = new Set(reportSearchFieldIds ?? []);
    if (checked) {
      currentIds.add(fieldId);
    } else {
      currentIds.delete(fieldId);
    }
    onReportSearchFieldIdsChange(Array.from(currentIds));
  };
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="vdn">VDN (optional)</Label>
        <Combobox
          value={vdn}
          options={vdnOptions}
          placeholder={
            vdnDirectoryLoading ? "Loading VDN options..." : "Select a VDN"
          }
          searchPlaceholder="Search VDNs"
          emptyMessage="No VDNs found."
          disabled={vdnDirectoryLoading || vdnOptions.length === 0}
          onChange={(nextVdn) => {
            const nextEntry =
              vdnDirectoryEntries.find((entry) => entry.vdnNo === nextVdn) ??
              null;
            onVdnSelectionChange(nextEntry);
          }}
        />
        <p className="text-xs text-muted-foreground">
          Pick a VDN from the directory. The broker code is locked to that
          selection.
        </p>
        {vdnDirectoryError ? (
          <p className="text-xs text-destructive">{vdnDirectoryError}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="brokerCode">Broker Code</Label>
        <Input
          id="brokerCode"
          value={brokerCode}
          readOnly
          placeholder="Broker code will be populated from the selected VDN"
        />
      </div>
      <div className="space-y-2 md:col-span-2">
        <div className="flex items-center justify-between gap-3">
          <Label>Extra Settings (optional)</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              onExtraSettingsChange([
                ...extraSettings,
                createEmptyExtraSettingDraft(),
              ])
            }
          >
            Add Mapping
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Each extra setting must map to a ContactRequestModel field.
        </p>
        <div className="space-y-3">
          {extraSettings.length === 0 ? (
            <div className="rounded-md border border-dashed border-border p-3 text-xs text-muted-foreground">
              No extra settings configured.
            </div>
          ) : null}
          {extraSettings.map((draft) => {
            const fieldOptions = getUnusedExtraSettingFieldOptions(
              extraSettings,
              draft.id,
            );
            return (
              <div
                key={draft.id}
                className="grid gap-3 rounded-md border border-border p-3 md:grid-cols-[minmax(0,1.4fr)_160px_minmax(0,1fr)_auto]"
              >
                <div className="space-y-2">
                  <Label>ContactRequestModel field</Label>
                  <Select
                    value={draft.fieldId || undefined}
                    onValueChange={(value) =>
                      updateExtraSetting(draft.id, {
                        fieldId: value as ExtraSettingDraft["fieldId"],
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a field" />
                    </SelectTrigger>
                    <SelectContent>
                      {fieldOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Value type</Label>
                  <Select
                    value={draft.valueType}
                    onValueChange={(value) =>
                      updateExtraSettingValueType(
                        draft.id,
                        value as ExtraSettingValueType,
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="string">String</SelectItem>
                      <SelectItem value="number">Number</SelectItem>
                      <SelectItem value="boolean">Boolean</SelectItem>
                      <SelectItem value="null">Null</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Value</Label>
                  {draft.valueType === "boolean" ? (
                    <Select
                      value={draft.value || "true"}
                      onValueChange={(value) =>
                        updateExtraSetting(draft.id, { value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="true">true</SelectItem>
                        <SelectItem value="false">false</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      value={draft.valueType === "null" ? "" : draft.value}
                      onChange={(event) =>
                        updateExtraSetting(draft.id, {
                          value: event.target.value,
                        })
                      }
                      placeholder={
                        draft.valueType === "null"
                          ? "Value will be null"
                          : "Enter a value"
                      }
                      disabled={draft.valueType === "null"}
                    />
                  )}
                </div>
                <div className="flex items-end">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      onExtraSettingsChange(
                        extraSettings.filter((entry) => entry.id !== draft.id),
                      )
                    }
                    aria-label="Remove extra setting"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {typeof enableReport === "boolean" && onEnableReportChange ? (
        <div className="md:col-span-2 space-y-3">
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              checked={enableReport}
              onChange={(e) => onEnableReportChange(e.target.checked)}
            />
            Enable report page
          </label>

          {enableReport && onReportSearchFieldIdsChange ? (
            <div className="rounded-md border border-border p-3 space-y-2">
              <Label>Report search parameters</Label>
              <p className="text-xs text-muted-foreground">
                Choose which report parameters users can search by.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {reportSearchOptions.map((field) => {
                  const checked = (reportSearchFieldIds ?? []).includes(
                    field.id,
                  );
                  return (
                    <label
                      key={field.id}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(event) =>
                          toggleReportSearchField(
                            field.id,
                            event.target.checked,
                          )
                        }
                      />
                      {field.label}
                    </label>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
      {typeof consentEnabled === "boolean" &&
      typeof consentRequired === "boolean" &&
      onConsentEnabledChange &&
      onConsentRequiredChange &&
      onConsentLabelChange ? (
        <div className="md:col-span-2 rounded-md border border-border p-3 space-y-3">
          <Label>Consent Checkbox</Label>
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              checked={consentEnabled}
              onChange={(event) => onConsentEnabledChange(event.target.checked)}
            />
            Show consent checkbox at the bottom of the form
          </label>
          {consentEnabled ? (
            <>
              <label className="flex items-center gap-2 text-sm text-foreground">
                <input
                  type="checkbox"
                  checked={consentRequired}
                  onChange={(event) =>
                    onConsentRequiredChange(event.target.checked)
                  }
                />
                Require users to tick consent before submit
              </label>
              <div className="space-y-2">
                <Label htmlFor="consentLabel">Consent text</Label>
                <Input
                  id="consentLabel"
                  value={consentLabel ?? ""}
                  onChange={(event) => onConsentLabelChange(event.target.value)}
                  placeholder="I consent to be contacted regarding this request."
                />
              </div>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
