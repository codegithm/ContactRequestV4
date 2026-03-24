import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import FieldEditorForm from "@/components/home/FieldEditorForm";
import type {
  EditablePartnerField,
  EditablePartnerSection,
} from "@/components/home/partner-management-utils";

interface EditPartnerFieldsSectionProps {
  isMobile: boolean;
  fields: EditablePartnerField[];
  sortedFields: EditablePartnerField[];
  groupedFields: Array<
    [string, { title: string; fields: EditablePartnerField[] }]
  >;
  sectionOptions: EditablePartnerSection[];
  onUpdateField: (
    fieldId: string,
    updates: Partial<EditablePartnerField>,
  ) => void;
  onRemoveField: (fieldId: string) => void;
  onRemoveSection: (sectionId: string) => void;
  onEditDesktopField: (fieldId: string) => void;
}

export default function EditPartnerFieldsSection({
  isMobile,
  fields,
  sortedFields,
  groupedFields,
  sectionOptions,
  onUpdateField,
  onRemoveField,
  onRemoveSection,
  onEditDesktopField,
}: EditPartnerFieldsSectionProps) {
  return (
    <div className="rounded-lg border border-border p-4 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Form Fields</h3>
          <p className="text-xs text-muted-foreground">
            {fields.filter((f) => f.isActive !== false).length} of{" "}
            {fields.length} fields are currently active.
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type="button" variant="outline">
              Manage Field Visibility
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <DropdownMenuLabel>Toggle active fields</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {sortedFields.map((field) => (
              <DropdownMenuCheckboxItem
                key={field.id}
                checked={field.isActive !== false}
                onCheckedChange={(checked) =>
                  onUpdateField(field.id, { isActive: checked === true })
                }
              >
                {field.label}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {isMobile ? (
        <Accordion
          type="multiple"
          className="w-full rounded-lg border border-border/70 bg-muted/20 px-4"
        >
          {groupedFields.map(
            ([sectionId, { title, fields: sectionFields }]) => (
              <AccordionItem key={sectionId} value={sectionId}>
                <AccordionTrigger className="py-3 hover:no-underline">
                  <div className="flex items-center gap-2 text-left">
                    <span className="text-sm font-semibold text-foreground">
                      {title}
                    </span>
                    <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {sectionFields.length} field
                      {sectionFields.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pb-1">
                    <Button
                      type="button"
                      variant="ghost"
                      className="h-8 px-2 text-destructive hover:text-destructive"
                      onClick={() => onRemoveSection(sectionId)}
                    >
                      Remove Section
                    </Button>
                    {sectionFields.map((field) => (
                      <div
                        key={field.id}
                        className="rounded-md border border-border/70 bg-background/80 p-3"
                      >
                        <FieldEditorForm
                          field={field}
                          sectionOptions={sectionOptions}
                          onUpdate={(updates) =>
                            onUpdateField(field.id, updates)
                          }
                          onRemove={() => onRemoveField(field.id)}
                        />
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ),
          )}
        </Accordion>
      ) : (
        <div className="space-y-5">
          {groupedFields.map(
            ([sectionId, { title, fields: sectionFields }]) => (
              <div
                key={sectionId}
                className="rounded-lg bg-muted/30 border border-muted-foreground/20 p-4 space-y-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-foreground">
                      {title}
                    </h4>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {sectionFields.length} field
                      {sectionFields.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 px-2 text-destructive hover:text-destructive"
                    onClick={() => onRemoveSection(sectionId)}
                  >
                    Remove Section
                  </Button>
                </div>
                <div className="space-y-3">
                  {sectionFields.map((field) => (
                    <div
                      key={field.id}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-md border border-border/70 bg-background/50 p-3"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground break-words">
                          {field.label}
                        </p>
                        <p className="text-xs text-muted-foreground break-all">
                          {field.id} • {field.type} •{" "}
                          {field.sectionTitle || "Section"}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <label className="flex items-center gap-2 text-sm">
                          <Switch
                            checked={field.required}
                            onCheckedChange={(v) =>
                              onUpdateField(field.id, { required: v })
                            }
                          />
                          Required
                        </label>
                        <label className="flex items-center gap-2 text-sm">
                          <Switch
                            checked={field.isActive !== false}
                            onCheckedChange={(v) =>
                              onUpdateField(field.id, { isActive: v })
                            }
                          />
                          Active
                        </label>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => onEditDesktopField(field.id)}
                        >
                          Edit Field
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-10 px-2 text-destructive hover:text-destructive"
                          onClick={() => onRemoveField(field.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
}
