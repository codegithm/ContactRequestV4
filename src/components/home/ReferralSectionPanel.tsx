import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
interface ReferralSectionPanelProps {
    enabled: boolean;
    addEntryLabel: string;
    maxEntries: string;
    onToggle: (v: boolean) => void;
    onAddEntryLabelChange: (v: string) => void;
    onMaxEntriesChange: (v: string) => void;
}
export default function ReferralSectionPanel({ enabled, addEntryLabel, maxEntries, onToggle, onAddEntryLabelChange, onMaxEntriesChange, }: ReferralSectionPanelProps) {
    return (<div className="rounded-lg border border-border p-4 space-y-4">
      <h3 className="text-sm font-semibold text-foreground">
        Referral Section
      </h3>
      <label className="flex items-center justify-between gap-3 text-sm">
        Enable repeatable referrals
        <Switch checked={enabled} onCheckedChange={onToggle}/>
      </label>
      {enabled && (<>
          <Input value={addEntryLabel} onChange={(e) => onAddEntryLabelChange(e.target.value)} placeholder="Add Referred Contact"/>
          <Input type="number" min={1} value={maxEntries} onChange={(e) => onMaxEntriesChange(e.target.value)} placeholder="Max referrals (optional)"/>
        </>)}
    </div>);
}
