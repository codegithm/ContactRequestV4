import { Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DynamicField from "@/components/DynamicField";
import type { FormSection } from "@/lib/partners";
interface RepeatableSectionBlockProps {
    section: FormSection;
    entries: Array<Record<string, string>>;
    draftValues: Record<string, string>;
    errors: Record<string, string>;
    fieldIndexMap: Map<string, number>;
    onDraftChange: (sectionId: string, fieldId: string, value: string) => void;
    onAddEntry: (sectionId: string) => void;
}
export default function RepeatableSectionBlock({ section, entries, draftValues, errors, fieldIndexMap, onDraftChange, onAddEntry, }: RepeatableSectionBlockProps) {
    const maxEntries = section.maxEntries;
    const maxReached = !!maxEntries && entries.length >= maxEntries;
    return (<div className="space-y-4">
      <Separator className="mb-6"/>
      <div className="mb-1 space-y-0.5">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <Users className="w-4 h-4 text-brand"/>
          {section.title}
        </h3>
        <p className="text-xs text-muted-foreground">
          {section.description ||
            "Add one or more contacts. A separate submission is made for each added contact."}
        </p>
      </div>

      {entries.length > 0 && (<div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Added Contacts ({entries.length})
          </p>
          <div className="space-y-2">
            {entries.map((entry, index) => {
                const summary = section.fields
                    .map((f) => entry[f.id])
                    .find((v) => !!v?.trim());
                return (<div key={`${section.id}-entry-${index}`} className="rounded-md border border-border bg-muted/40 px-3 py-2">
                  <p className="text-sm text-foreground font-medium">
                    Contact {index + 1}
                    {summary ? `: ${summary}` : ""}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {section.fields
                        .map((f) => {
                        const value = entry[f.id]?.trim();
                        return value ? `${f.label}: ${value}` : null;
                    })
                        .filter(Boolean)
                        .join(" | ")}
                  </p>
                </div>);
            })}
          </div>
        </div>)}

      <div className="grid grid-cols-12 gap-6">
        {section.fields.map((field) => {
            const compositeId = `${section.id}::${field.id}`;
            return (<DynamicField key={compositeId} field={{ ...field, id: compositeId }} value={draftValues[field.id] || ""} error={errors[compositeId]} index={fieldIndexMap.get(field.id) ?? 0} onChange={(_id, value) => onDraftChange(section.id, field.id, value)}/>);
        })}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {maxEntries
            ? `${entries.length}/${maxEntries} contacts added`
            : `${entries.length} contacts added`}
        </p>
        <Button type="button" variant="outline" className="gap-1.5" disabled={maxReached} onClick={() => onAddEntry(section.id)}>
          <Plus className="w-3.5 h-3.5"/>
          {section.addEntryLabel || "Add Contact"}
        </Button>
      </div>
    </div>);
}
