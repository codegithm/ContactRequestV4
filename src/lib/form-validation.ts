import type { FieldSchema } from "@/lib/partners";

export function validateField(
  field: FieldSchema,
  value: string,
): string | undefined {
  if (field.type === "tel" && field.phoneFormat === "split") {
    const parts = (value || "").split("|");
    const area = parts[0]?.trim() ?? "";
    const num = parts[1]?.trim() ?? "";
    if (field.required && (!area || !num)) return `${field.label} is required`;
    const combined = area + num;
    if (combined && !/^[+\d\s()-]{4,25}$/.test(combined))
      return "Please enter a valid phone number";
    return undefined;
  }
  if (field.required && !value.trim()) return `${field.label} is required`;
  if (
    field.type === "email" &&
    value &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  )
    return "Please enter a valid email address";
  if (field.type === "tel" && value && !/^[+\d\s()-]{7,20}$/.test(value))
    return "Please enter a valid phone number";
  if (field.validation?.pattern && value) {
    const regex = new RegExp(field.validation.pattern);
    if (!regex.test(value)) return field.validation.message || "Invalid format";
  }
  if (field.validation?.maxLength && value.length > field.validation.maxLength)
    return `Must be less than ${field.validation.maxLength} characters`;
  return undefined;
}

export function isFieldFilled(field: FieldSchema, value: string): boolean {
  if (field.type === "tel" && field.phoneFormat === "split") {
    const parts = (value || "").split("|");
    return !!(parts[0]?.trim() && parts[1]?.trim());
  }
  return !!value?.trim();
}
