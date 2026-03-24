import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AdminSettingsFieldsProps {
  vdn: string;
  brokerCode: string;
  extraSettingsJson: string;
  enableFeedback: boolean;
  onVdnChange: (v: string) => void;
  onBrokerCodeChange: (v: string) => void;
  onExtraSettingsJsonChange: (v: string) => void;
  onEnableFeedbackChange: (v: boolean) => void;
}

export default function AdminSettingsFields({
  vdn,
  brokerCode,
  extraSettingsJson,
  enableFeedback,
  onVdnChange,
  onBrokerCodeChange,
  onExtraSettingsJsonChange,
  onEnableFeedbackChange,
}: AdminSettingsFieldsProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="vdn">VDN (optional)</Label>
        <Input
          id="vdn"
          value={vdn}
          onChange={(e) => onVdnChange(e.target.value)}
          placeholder="e.g. VDN-001"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="brokerCode">Broker Code (optional)</Label>
        <Input
          id="brokerCode"
          value={brokerCode}
          onChange={(e) => onBrokerCodeChange(e.target.value)}
          placeholder="e.g. BRK-001"
        />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="extraSettingsJson">
          Extra Settings JSON (optional, hidden payload values)
        </Label>
        <Textarea
          id="extraSettingsJson"
          value={extraSettingsJson}
          onChange={(e) => onExtraSettingsJsonChange(e.target.value)}
          placeholder='{"sourceSystem":"contactrequest-ui","sourceChannel":"web","consentCaptured":true}'
          className="min-h-[92px] font-mono text-xs"
        />
      </div>
      <div className="md:col-span-2">
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            checked={enableFeedback}
            onChange={(e) => onEnableFeedbackChange(e.target.checked)}
          />
          Enable feedback page
        </label>
      </div>
    </>
  );
}
