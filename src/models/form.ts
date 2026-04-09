export interface FieldSchema {
    id: string;
    type: "text" | "email" | "tel" | "number" | "select" | "date" | "textarea";
    label: string;
    placeholder?: string;
    isActive?: boolean;
    width: 6 | 12;
    required: boolean;
    options?: {
        label: string;
        value: string;
    }[];
    validation?: {
        pattern?: string;
        minLength?: number;
        maxLength?: number;
        message?: string;
    };
    phoneFormat?: "split";
    areaCodePlaceholder?: string;
}
export interface FormSection {
    id: string;
    title: string;
    description?: string;
    purpose?: "standard" | "refer";
    repeatable?: boolean;
    addEntryLabel?: string;
    maxEntries?: number;
    fields: FieldSchema[];
}
export interface ReportSearchField {
    id: string;
    label: string;
    placeholder?: string;
    type?: "text" | "tel" | "number" | "email" | "date";
}
export type FeedbackSearchField = ReportSearchField;
