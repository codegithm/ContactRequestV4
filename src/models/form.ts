export interface FieldSchema {
  id: string;
  type: "text" | "email" | "tel" | "number" | "select" | "date" | "textarea";
  label: string;
  placeholder?: string;
  isActive?: boolean;
  width: 6 | 12;
  required: boolean;
  options?: { label: string; value: string }[];
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    message?: string;
  };
  /** When type is "tel", render two inline inputs: area code + number */
  phoneFormat?: "split";
  /** Placeholder for the area code input when phoneFormat is "split" */
  areaCodePlaceholder?: string;
}

export interface FormSection {
  id: string;
  title: string;
  description?: string;
  /** Optional semantic role for a section. */
  purpose?: "standard" | "refer";
  /** When true, section fields are captured as repeatable entries. */
  repeatable?: boolean;
  /** Optional button label used for repeatable sections. */
  addEntryLabel?: string;
  /** Optional max items allowed for repeatable sections. */
  maxEntries?: number;
  fields: FieldSchema[];
}

export interface FeedbackSearchField {
  id: string;
  label: string;
  placeholder?: string;
  type?: "text" | "tel" | "number" | "email";
}
