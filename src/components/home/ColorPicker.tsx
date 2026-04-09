import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { normalizeColorForPicker, hslComponentsToHex, hexToHslComponents, } from "@/components/home/color-utils";
interface ColorFieldProps {
    id: string;
    label: string;
    value: string;
    placeholder: string;
    fallbackHex: string;
    onChange: (value: string) => void;
    colSpan2?: boolean;
}
export function ColorField({ id, label, value, placeholder, fallbackHex, onChange, colSpan2 = true, }: ColorFieldProps) {
    const [pickerColor, setPickerColor] = useState(normalizeColorForPicker(value, fallbackHex));
    const [showManualInput, setShowManualInput] = useState(false);
    useEffect(() => {
        setPickerColor(normalizeColorForPicker(value, fallbackHex));
    }, [value, fallbackHex]);
    const handlePickerChange = (nextColor: string) => {
        const normalized = normalizeColorForPicker(nextColor, fallbackHex);
        setPickerColor(normalized);
        onChange(normalized);
    };
    return (<div className={`space-y-2${colSpan2 ? " md:col-span-2" : ""}`}>
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor={id}>{label}</Label>
        <button type="button" className="text-[11px] font-medium text-muted-foreground underline underline-offset-4" onClick={() => setShowManualInput((current) => !current)}>
          {showManualInput ? "Hide manual" : "Manual value"}
        </button>
      </div>
      <div className="flex items-center gap-3 rounded-md border border-input bg-background px-3 py-2">
        <span className="h-6 w-6 rounded border border-border" style={{ backgroundColor: pickerColor }} aria-hidden="true"/>
        <input id={id} type="color" value={pickerColor} onInput={(e) => handlePickerChange(e.currentTarget.value)} onChange={(e) => handlePickerChange(e.currentTarget.value)} className="h-8 w-12 cursor-pointer appearance-none rounded-md border border-input bg-transparent p-1 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-sm [&::-webkit-color-swatch]:border-0 [&::-moz-color-swatch]:border-0" style={{ backgroundColor: pickerColor }} aria-label={`${label} color picker`}/>
        <span className="text-xs mono text-muted-foreground">
          {pickerColor}
        </span>
      </div>
      {showManualInput && (<Input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}/>)}
    </div>);
}
interface HslColorFieldProps {
    id: string;
    label: string;
    value: string;
    placeholder: string;
    fallbackHex: string;
    onChange: (value: string) => void;
}
export function HslColorField({ id, label, value, placeholder, fallbackHex, onChange, }: HslColorFieldProps) {
    const [pickerColor, setPickerColor] = useState(normalizeColorForPicker(hslComponentsToHex(value, fallbackHex), fallbackHex));
    const [showManualInput, setShowManualInput] = useState(false);
    useEffect(() => {
        setPickerColor(normalizeColorForPicker(hslComponentsToHex(value, fallbackHex), fallbackHex));
    }, [value, fallbackHex]);
    const handlePickerChange = (nextColor: string) => {
        const normalized = normalizeColorForPicker(nextColor, fallbackHex);
        setPickerColor(normalized);
        onChange(hexToHslComponents(normalized));
    };
    return (<div className="space-y-2">
      <div className="flex items-center justify-between gap-2">
        <Label htmlFor={id}>{label}</Label>
        <button type="button" className="text-[11px] font-medium text-muted-foreground underline underline-offset-4" onClick={() => setShowManualInput((current) => !current)}>
          {showManualInput ? "Hide manual" : "Manual value"}
        </button>
      </div>
      <div className="flex items-center gap-3 rounded-md border border-input bg-background px-3 py-2">
        <span className="h-6 w-6 rounded border border-border" style={{ backgroundColor: pickerColor }} aria-hidden="true"/>
        <input id={id} type="color" value={pickerColor} onInput={(e) => handlePickerChange(e.currentTarget.value)} onChange={(e) => handlePickerChange(e.currentTarget.value)} className="h-8 w-12 cursor-pointer appearance-none rounded-md border border-input bg-transparent p-1 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded-sm [&::-webkit-color-swatch]:border-0 [&::-moz-color-swatch]:border-0" style={{ backgroundColor: pickerColor }} aria-label={`${label} color picker`}/>
        <span className="text-xs mono text-muted-foreground">
          {value || "0 0% 0%"}
        </span>
      </div>
      {showManualInput && (<Input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}/>)}
    </div>);
}
