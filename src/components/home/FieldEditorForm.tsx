import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_SECTION_ID,
  type EditablePartnerField,
  type EditablePartnerSection,
} from "@/components/home/partner-management-utils";

type FieldType = EditablePartnerField["type"];

interface FieldEditorFormProps {
  field: EditablePartnerField;
  sectionOptions: EditablePartnerSection[];
  onUpdate: (updates: Partial<EditablePartnerField>) => void;
  onRemove?: () => void;
}

export default function FieldEditorForm({
  field,
  sectionOptions,
  onUpdate,
  onRemove,
}: FieldEditorFormProps) {
  return (
    <div className="space-y-3">
      <Input
        value={field.label}
        onChange={(e) => onUpdate({ label: e.target.value })}
        placeholder="Field label"
      />
      <Input
        value={field.placeholder ?? ""}
        onChange={(e) => onUpdate({ placeholder: e.target.value || undefined })}
        placeholder="Placeholder"
      />
      <select
        value={field.type}
        onChange={(e) => onUpdate({ type: e.target.value as FieldType })}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      >
        <option value="text">Text</option>
        <option value="email">Email</option>
        <option value="tel">Phone</option>
        <option value="number">Number</option>
        <option value="select">Select</option>
        <option value="date">Date</option>
        <option value="textarea">Textarea</option>
      </select>
      <select
        value={field.sectionId || DEFAULT_SECTION_ID}
        onChange={(e) => {
          const next = sectionOptions.find((s) => s.id === e.target.value);
          onUpdate({ sectionId: e.target.value, sectionTitle: next?.title });
        }}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      >
        {sectionOptions.map((s) => (
          <option key={s.id} value={s.id}>
            {s.title}
          </option>
        ))}
      </select>
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 text-sm">
          <Switch
            checked={field.required}
            onCheckedChange={(v) => onUpdate({ required: v })}
          />
          Required
        </label>
        <label className="flex items-center gap-2 text-sm">
          <Switch
            checked={field.isActive !== false}
            onCheckedChange={(v) => onUpdate({ isActive: v })}
          />
          Active
        </label>
      </div>
      {onRemove && (
        <Button
          type="button"
          variant="ghost"
          className="h-8 px-2 text-destructive hover:text-destructive"
          onClick={onRemove}
        >
          Remove Field
        </Button>
      )}
    </div>
  );
}
