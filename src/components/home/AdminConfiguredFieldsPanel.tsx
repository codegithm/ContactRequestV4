import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { EditablePartnerField, EditablePartnerSection, } from "@/components/home/partner-management-utils";
interface AdminConfiguredFieldsPanelProps {
    groupedFields: Array<{
        id: string;
        title: string;
        fields: EditablePartnerField[];
    }>;
    sections: EditablePartnerSection[];
    onUpdateField: (fieldId: string, updates: Partial<EditablePartnerField>) => void;
    onRemoveField: (fieldId: string) => void;
    onRemoveSection: (sectionId: string) => void;
}
export default function AdminConfiguredFieldsPanel({ groupedFields, sections, onUpdateField, onRemoveField, onRemoveSection, }: AdminConfiguredFieldsPanelProps) {
    return (<div className="rounded-lg border border-border p-4 space-y-4">
      <div>
        <h3 className="text-sm font-semibold text-foreground">
          Configured Fields
        </h3>
        <p className="text-xs text-muted-foreground">
          Every field must belong to one of the sections above.
        </p>
      </div>
      <div className="space-y-4">
        {groupedFields.length > 0 ? (groupedFields.map((section) => (<div key={section.id} className="rounded-lg border border-muted-foreground/20 bg-muted/30 p-4 space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-foreground">
                    {section.title}
                  </h4>
                  <span className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground">
                    {section.fields.length} field
                    {section.fields.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <Button type="button" variant="ghost" className="h-8 px-2 text-destructive hover:text-destructive" onClick={() => onRemoveSection(section.id)}>
                  Remove Section
                </Button>
              </div>
              {section.fields.length > 0 ? (<div className="space-y-3">
                  {section.fields.map((field) => (<div key={field.id} className="grid gap-3 rounded-md border border-border/70 bg-background/50 p-3 md:grid-cols-[1.1fr_1fr_0.9fr_0.9fr_auto_auto_auto]">
                      <Input value={field.label} onChange={(e) => onUpdateField(field.id, { label: e.target.value })} placeholder="Field label"/>
                      <Input value={field.placeholder ?? ""} onChange={(e) => onUpdateField(field.id, {
                        placeholder: e.target.value || undefined,
                    })} placeholder="Placeholder"/>
                      <select value={field.type} onChange={(e) => onUpdateField(field.id, {
                        type: e.target
                            .value as EditablePartnerField["type"],
                    })} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option value="text">Text</option>
                        <option value="email">Email</option>
                        <option value="tel">Phone</option>
                        <option value="number">Number</option>
                        <option value="select">Select</option>
                        <option value="date">Date</option>
                        <option value="textarea">Textarea</option>
                      </select>
                      <select value={field.sectionId} onChange={(e) => {
                        const next = sections.find((s) => s.id === e.target.value);
                        onUpdateField(field.id, {
                            sectionId: e.target.value,
                            sectionTitle: next?.title,
                        });
                    }} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        {sections.map((s) => (<option key={s.id} value={s.id}>
                            {s.title}
                          </option>))}
                      </select>
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" checked={field.required} onChange={(e) => onUpdateField(field.id, {
                        required: e.target.checked,
                    })}/>
                        Required
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input type="checkbox" checked={field.isActive !== false} onChange={(e) => onUpdateField(field.id, {
                        isActive: e.target.checked,
                    })}/>
                        Active
                      </label>
                      <Button type="button" variant="ghost" className="h-10 px-2 text-destructive hover:text-destructive" onClick={() => onRemoveField(field.id)}>
                        Remove
                      </Button>
                    </div>))}
                </div>) : (<p className="text-sm text-muted-foreground">
                  No fields added to this section yet.
                </p>)}
            </div>))) : (<p className="text-sm text-muted-foreground">
            No sections or fields configured yet.
          </p>)}
      </div>
    </div>);
}
