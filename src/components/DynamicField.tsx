import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import type { FieldSchema } from "@/lib/partners";
interface DynamicFieldProps {
    field: FieldSchema;
    value: string;
    error?: string;
    index: number;
    onChange: (id: string, value: string) => void;
}
const springTransition = {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
};
const DynamicField = ({ field, value, error, index, onChange, }: DynamicFieldProps) => {
    const colSpan = field.width === 6 ? "col-span-6" : "col-span-12";
    const renderInput = () => {
        switch (field.type) {
            case "textarea":
                return (<Textarea id={field.id} value={value} placeholder={field.placeholder} onChange={(e) => onChange(field.id, e.target.value)} className="p-4 min-h-[100px] bg-card border-border focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"/>);
            case "select":
                return (<Select value={value} onValueChange={(val) => onChange(field.id, val)}>
            <SelectTrigger className="p-4 h-auto bg-card border-border focus:ring-2 focus:ring-brand focus:ring-offset-2">
              <SelectValue placeholder={`Select ${field.label.toLowerCase()}`}/>
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((opt) => (<SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>))}
            </SelectContent>
          </Select>);
            case "tel": {
                if (field.phoneFormat === "split") {
                    const parts = (value || "").split("|");
                    const areaVal = parts[0] ?? "";
                    const numVal = parts[1] ?? "";
                    return (<div className="flex gap-2">
              <Input id={`${field.id}_area`} type="text" value={areaVal} placeholder={field.areaCodePlaceholder ?? "+1"} onChange={(e) => onChange(field.id, e.target.value + "|" + numVal)} className="w-20 shrink-0 p-4 h-auto bg-card border-border text-center font-mono focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2" maxLength={6}/>
              <Input id={field.id} type="tel" value={numVal} placeholder={field.placeholder ?? "000 000 0000"} onChange={(e) => onChange(field.id, areaVal + "|" + e.target.value)} className="flex-1 p-4 h-auto bg-card border-border focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"/>
            </div>);
                }
                return (<Input id={field.id} type="tel" value={value} placeholder={field.placeholder} onChange={(e) => onChange(field.id, e.target.value)} className="p-4 h-auto bg-card border-border focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"/>);
            }
            default:
                return (<Input id={field.id} type={field.type} value={value} placeholder={field.placeholder} onChange={(e) => onChange(field.id, e.target.value)} className={`p-4 h-auto bg-card border-border focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${field.type === "number" ? "font-mono" : ""}`}/>);
        }
    };
    return (<motion.div className={colSpan} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ ...springTransition, delay: index * 0.05 }}>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Label htmlFor={field.id} className="text-sm font-medium" style={{ color: "var(--partner-body-text-color)" }}>
            {field.label}
            {field.required && <span className="text-destructive ml-1">*</span>}
          </Label>
          {field.type === "tel" && (<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wider bg-muted text-muted-foreground border border-border">
              TEL
            </span>)}
        </div>
        {renderInput()}
        {error && (<motion.p className="text-sm text-destructive" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={springTransition}>
            {error}
          </motion.p>)}
      </div>
    </motion.div>);
};
export default DynamicField;
