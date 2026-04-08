import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

interface AdminIdentityFieldsProps {
  partnerId: string;
  partnerName: string;
  logoUrl: string;
  bannerUrl: string;
  attachBannerToFormTop: boolean;
  headline: string;
  description: string;
  onPartnerIdChange: (v: string) => void;
  onPartnerNameChange: (v: string) => void;
  onLogoUrlChange: (v: string) => void;
  onBannerUrlChange: (v: string) => void;
  onAttachBannerToFormTopChange: (v: boolean) => void;
  onHeadlineChange: (v: string) => void;
  onDescriptionChange: (v: string) => void;
}

export default function AdminIdentityFields({
  partnerId,
  partnerName,
  logoUrl,
  bannerUrl,
  attachBannerToFormTop,
  headline,
  description,
  onPartnerIdChange,
  onPartnerNameChange,
  onLogoUrlChange,
  onBannerUrlChange,
  onAttachBannerToFormTopChange,
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
        <Label htmlFor="bannerUrl">Banner URL (optional)</Label>
        <Input
          id="bannerUrl"
          value={bannerUrl}
          onChange={(e) => onBannerUrlChange(e.target.value)}
          placeholder="https://cdn.example.com/banner.png"
        />
      </div>
      <div className="space-y-2 md:col-span-2 rounded-md border border-border p-3">
        <div className="flex items-center justify-between gap-3">
          <div className="space-y-0.5">
            <Label htmlFor="attachBannerToFormTop" className="cursor-pointer">
              Attach Banner To Form Top
            </Label>
            <p className="text-xs text-muted-foreground">
              Uses Banner URL and places it centered above the form card.
            </p>
          </div>
          <Switch
            id="attachBannerToFormTop"
            checked={attachBannerToFormTop}
            onCheckedChange={onAttachBannerToFormTopChange}
          />
        </div>
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
