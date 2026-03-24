import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AdminIdentityFieldsProps {
  partnerId: string;
  partnerName: string;
  logoUrl: string;
  headline: string;
  description: string;
  onPartnerIdChange: (v: string) => void;
  onPartnerNameChange: (v: string) => void;
  onLogoUrlChange: (v: string) => void;
  onHeadlineChange: (v: string) => void;
  onDescriptionChange: (v: string) => void;
}

export default function AdminIdentityFields({
  partnerId,
  partnerName,
  logoUrl,
  headline,
  description,
  onPartnerIdChange,
  onPartnerNameChange,
  onLogoUrlChange,
  onHeadlineChange,
  onDescriptionChange,
}: AdminIdentityFieldsProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="partnerId">Partner ID*</Label>
        <Input
          id="partnerId"
          value={partnerId}
          onChange={(e) => onPartnerIdChange(e.target.value)}
          placeholder="e.g. standardbank"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="partnerName">Partner Name*</Label>
        <Input
          id="partnerName"
          value={partnerName}
          onChange={(e) => onPartnerNameChange(e.target.value)}
          placeholder="e.g. Standard Bank"
        />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="logoUrl">Logo URL (optional)</Label>
        <Input
          id="logoUrl"
          value={logoUrl}
          onChange={(e) => onLogoUrlChange(e.target.value)}
          placeholder="https://cdn.example.com/logo.svg"
        />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="headline">Headline (optional)</Label>
        <Input
          id="headline"
          value={headline}
          onChange={(e) => onHeadlineChange(e.target.value)}
          placeholder="Request a callback"
        />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="description">Description (optional)</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          placeholder="Describe this partner flow..."
          className="min-h-[72px]"
        />
      </div>
    </>
  );
}
