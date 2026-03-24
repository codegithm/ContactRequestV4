import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AdminFooterFieldsProps {
  footerLayout: "split" | "centered" | "links-only";
  footerShowPoweredBy: boolean;
  footerPoweredByLabel: string;
  footerPoweredByUrl: string;
  footerLinksJson: string;
  footerNote: string;
  onFooterLayoutChange: (v: "split" | "centered" | "links-only") => void;
  onFooterShowPoweredByChange: (v: boolean) => void;
  onFooterPoweredByLabelChange: (v: string) => void;
  onFooterPoweredByUrlChange: (v: string) => void;
  onFooterLinksJsonChange: (v: string) => void;
  onFooterNoteChange: (v: string) => void;
}

export default function AdminFooterFields({
  footerLayout,
  footerShowPoweredBy,
  footerPoweredByLabel,
  footerPoweredByUrl,
  footerLinksJson,
  footerNote,
  onFooterLayoutChange,
  onFooterShowPoweredByChange,
  onFooterPoweredByLabelChange,
  onFooterPoweredByUrlChange,
  onFooterLinksJsonChange,
  onFooterNoteChange,
}: AdminFooterFieldsProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="footerLayout">Footer Layout</Label>
        <select
          id="footerLayout"
          value={footerLayout}
          onChange={(e) =>
            onFooterLayoutChange(
              e.target.value as "split" | "centered" | "links-only",
            )
          }
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="split">Split — brand left, links right</option>
          <option value="centered">Centered — everything centred</option>
          <option value="links-only">Links only — no powered-by</option>
        </select>
      </div>

      <div className="space-y-2 flex flex-col justify-center pt-1">
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            checked={footerShowPoweredBy}
            onChange={(e) => onFooterShowPoweredByChange(e.target.checked)}
          />
          Show "Powered by" label
        </label>
      </div>

      <div className="space-y-2">
        <Label htmlFor="footerPoweredByLabel">Powered-by brand name</Label>
        <Input
          id="footerPoweredByLabel"
          value={footerPoweredByLabel}
          onChange={(e) => onFooterPoweredByLabelChange(e.target.value)}
          placeholder="ContactRequest"
          disabled={!footerShowPoweredBy}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="footerPoweredByUrl">Powered-by URL (optional)</Label>
        <Input
          id="footerPoweredByUrl"
          value={footerPoweredByUrl}
          onChange={(e) => onFooterPoweredByUrlChange(e.target.value)}
          placeholder="https://contactrequest.io"
          disabled={!footerShowPoweredBy}
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="footerLinksJson">Footer links JSON (optional)</Label>
        <Textarea
          id="footerLinksJson"
          value={footerLinksJson}
          onChange={(e) => onFooterLinksJsonChange(e.target.value)}
          placeholder='[{"label":"Privacy","url":"https://example.com/privacy","type":"privacy"},{"label":"Terms","type":"terms"}]'
          className="min-h-[80px] font-mono text-xs"
        />
        <p className="text-[11px] text-muted-foreground">
          Each item:{" "}
          <code className="font-mono">&#123;"label","url"?,"type"?&#125;</code>.
          Types:{" "}
          <code className="font-mono">privacy | terms | contact | custom</code>.
        </p>
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="footerNote">Disclaimer / legal note (optional)</Label>
        <Input
          id="footerNote"
          value={footerNote}
          onChange={(e) => onFooterNoteChange(e.target.value)}
          placeholder="Company registration number, FSP licence, etc."
        />
      </div>
    </>
  );
}
