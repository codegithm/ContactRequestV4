import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { EditablePartnerSection } from "@/components/home/partner-management-utils";
interface SectionsPanelProps {
    sections: EditablePartnerSection[];
    newSectionTitle: string;
    onNewSectionTitleChange: (v: string) => void;
    onAddSection: () => void;
    onRemoveSection: (sectionId: string) => void;
}
export default function SectionsPanel({ sections, newSectionTitle, onNewSectionTitleChange, onAddSection, onRemoveSection, }: SectionsPanelProps) {
    return (<div className="rounded-lg border border-border p-4 space-y-4">
      <h3 className="text-sm font-semibold text-foreground">Sections</h3>
      <div className="flex gap-3">
        <Input value={newSectionTitle} onChange={(e) => onNewSectionTitleChange(e.target.value)} placeholder="Personal Details"/>
        <Button type="button" variant="outline" onClick={onAddSection}>
          Add Section
        </Button>
      </div>
      <div className="space-y-2">
        {sections.length > 0 ? (sections.map((section) => (<div key={section.id} className="flex items-center justify-between rounded-md border border-border/70 bg-muted/30 px-3 py-2 text-sm">
              <div>
                <span className="font-medium text-foreground">
                  {section.title}
                </span>
                <p className="text-xs text-muted-foreground">{section.id}</p>
              </div>
              <Button type="button" variant="ghost" className="h-8 px-2 text-destructive hover:text-destructive" onClick={() => onRemoveSection(section.id)}>
                Remove
              </Button>
            </div>))) : (<p className="text-sm text-muted-foreground">
            No sections yet. Add one before adding fields.
          </p>)}
      </div>
    </div>);
}
