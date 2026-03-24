import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import FieldEditorForm from "@/components/home/FieldEditorForm";
import type {
  EditablePartnerField,
  EditablePartnerSection,
} from "@/components/home/partner-management-utils";

interface DesktopFieldEditDrawerProps {
  open: boolean;
  field: EditablePartnerField | null;
  sectionOptions: EditablePartnerSection[];
  onUpdate: (fieldId: string, updates: Partial<EditablePartnerField>) => void;
  onClose: () => void;
}

export default function DesktopFieldEditDrawer({
  open,
  field,
  sectionOptions,
  onUpdate,
  onClose,
}: DesktopFieldEditDrawerProps) {
  return (
    <Drawer
      open={open}
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
    >
      <DrawerContent className="max-h-[88vh]">
        <DrawerHeader className="border-b border-border px-4 pb-4 text-left">
          <DrawerTitle>Edit Field</DrawerTitle>
          <DrawerDescription>
            View the full field name and edit all field properties.
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-4 overflow-y-auto px-4 py-4">
          {field && (
            <FieldEditorForm
              field={field}
              sectionOptions={sectionOptions}
              onUpdate={(updates) => onUpdate(field.id, updates)}
            />
          )}
        </div>
        <DrawerFooter className="border-t border-border bg-background px-4 pb-6">
          <Button type="button" onClick={onClose}>
            Done
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
