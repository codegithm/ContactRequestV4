import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import type {
  ContactRequestFieldGroup,
  ContactRequestFieldOption,
  EditablePartnerSection,
} from "@/components/home/partner-management-utils";

interface AddFieldPanelProps {
  sections: EditablePartnerSection[];
  availableFieldOptions: ContactRequestFieldOption[];
  groupedAvailableFieldOptions: ContactRequestFieldGroup[];
  selectedFieldId: string;
  newFieldSectionId: string;
  newFieldWidth: 6 | 12;
  newFieldRequired: boolean;
  showAddButton?: boolean;
  onSelectedFieldIdChange: (v: string) => void;
  onNewFieldSectionIdChange: (v: string) => void;
  onNewFieldWidthChange: (v: 6 | 12) => void;
  onNewFieldRequiredChange: (v: boolean) => void;
  onAdd: () => void;
}

export default function AddFieldPanel({
  sections,
  availableFieldOptions,
  groupedAvailableFieldOptions,
  selectedFieldId,
  newFieldSectionId,
  newFieldWidth,
  newFieldRequired,
  showAddButton = true,
  onSelectedFieldIdChange,
  onNewFieldSectionIdChange,
  onNewFieldWidthChange,
  onNewFieldRequiredChange,
  onAdd,
}: AddFieldPanelProps) {
  return (
    <div className="rounded-lg border border-border p-4 space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Add New Field</h3>
      <p className="text-xs text-muted-foreground">
        Choose from the contact request model and place the field into a
        section.
      </p>
      <select
        value={selectedFieldId}
        onChange={(e) => onSelectedFieldIdChange(e.target.value)}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        disabled={availableFieldOptions.length === 0}
      >
        <option value="">Select a contact request field</option>
        {groupedAvailableFieldOptions.map((group) => (
          <optgroup key={group.category} label={group.category}>
            {group.fields.map((field) => (
              <option key={field.id} value={field.id}>
                {field.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <select
        value={newFieldSectionId}
        onChange={(e) => onNewFieldSectionIdChange(e.target.value)}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        disabled={sections.length === 0}
      >
        <option value="">Select a section</option>
        {sections.map((s) => (
          <option key={s.id} value={s.id}>
            {s.title}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-2 gap-3">
        <select
          value={newFieldWidth}
          onChange={(e) =>
            onNewFieldWidthChange(Number(e.target.value) as 6 | 12)
          }
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value={6}>Half width</option>
          <option value={12}>Full width</option>
        </select>
        <div className="flex items-center justify-between rounded-md border border-border/70 px-3 py-2 text-sm">
          <span>Required</span>
          <Switch
            checked={newFieldRequired}
            onCheckedChange={onNewFieldRequiredChange}
          />
        </div>
      </div>
      {showAddButton && (
        <Button
          type="button"
          variant="outline"
          onClick={onAdd}
          disabled={availableFieldOptions.length === 0}
        >
          Add Field
        </Button>
      )}
    </div>
  );
}
