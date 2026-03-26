export type {
  FieldSchema,
  FormSection,
  FeedbackSearchField,
} from "@/models/form";
export type { PartnerConfig } from "@/models/partner";
export type { PartnerFooterLink, PartnerFooterConfig } from "@/models/footer";
export type { PartnerSettings, PartnerSettingValue } from "@/models/settings";

import type { PartnerConfig } from "@/models/partner";

const partnerRegistry: Record<string, PartnerConfig> = {
  absa: {
    partnerId: "absa",
    partnerName: "Absa",
    headline: "Request a call from Absa",
    description:
      "Fill in your details and one of our consultants will contact you within 24 hours.",
    submitLabel: "Request Contact",
    successMessage:
      "Thank you! An Absa consultant will reach out to you shortly.",
    settings: {
      vdn: "ABSA001",
      brokerCode: "ABS-BROKER",
    },
    theme: {
      primary: "354 85% 44%",
      primaryForeground: "0 0% 100%",
      radius: "8px",
      radix: {
        accentColor: "crimson",
        grayColor: "mauve",
        radius: "medium",
        scaling: "100%",
        panelBackground: "translucent",
        appearance: "light",
      },
      pageBackground: "#fef2f2",
      headerBackground: "rgba(255,245,245,0.92)",
      footerBackground: "rgba(255,247,247,0.92)",
      cardBackground: "rgba(255,255,255,0.95)",
      cardBorder: "rgba(185,28,28,0.2)",
      badgeStyle: "soft",
    },
    feedback: false,
    feedbackSearchFields: [
      { id: "contactId", label: "Contact ID", placeholder: "e.g. CT10000" },
      {
        id: "acc_number",
        label: "Account Number",
        placeholder: "Enter account number",
      },
      { id: "phone", label: "Phone Number", placeholder: "82 000 0000" },
    ],
    fields: [],
    sections: [
      {
        id: "personal",
        title: "Personal Details",
        description: "Tell us a little about yourself.",
        fields: [
          {
            id: "full_name",
            type: "text",
            label: "Full Name",
            placeholder: "John Doe",
            width: 12,
            required: true,
            validation: { maxLength: 100 },
          },
          {
            id: "email",
            type: "email",
            label: "Email Address",
            placeholder: "john@example.com",
            width: 6,
            required: true,
          },
          {
            id: "phone",
            type: "tel",
            label: "Phone Number",
            placeholder: "82 000 0000",
            width: 6,
            required: true,
            phoneFormat: "split",
            areaCodePlaceholder: "+27",
          },
        ],
      },
      {
        id: "account",
        title: "Account Details",
        description: "Help us find your account.",
        fields: [
          {
            id: "acc_number",
            type: "number",
            label: "Account Number",
            placeholder: "Enter your account number",
            width: 6,
            required: true,
          },
          {
            id: "product",
            type: "select",
            label: "Product Interest",
            width: 6,
            required: true,
            options: [
              { label: "Home Loan", value: "home_loan" },
              { label: "Vehicle Finance", value: "vehicle_finance" },
              { label: "Personal Loan", value: "personal_loan" },
              { label: "Credit Card", value: "credit_card" },
            ],
          },
          {
            id: "message",
            type: "textarea",
            label: "Additional Comments",
            placeholder: "Tell us how we can help...",
            width: 12,
            required: false,
          },
        ],
      },
      {
        id: "refer",
        title: "Refer Contacts",
        description:
          "Add one or more contacts you would like Absa to call. You can add as many as needed.",
        purpose: "refer",
        repeatable: true,
        addEntryLabel: "Add Referred Contact",
        fields: [
          {
            id: "firstName",
            type: "text",
            label: "First Name",
            placeholder: "Jane",
            width: 6,
            required: true,
          },
          {
            id: "surname",
            type: "text",
            label: "Surname",
            placeholder: "Doe",
            width: 6,
            required: true,
          },
          {
            id: "cellNumber",
            type: "tel",
            label: "Mobile Number",
            placeholder: "82 000 0000",
            width: 6,
            required: true,
            phoneFormat: "split",
            areaCodePlaceholder: "+27",
          },
          {
            id: "email",
            type: "email",
            label: "Email Address",
            placeholder: "jane@example.com",
            width: 6,
            required: false,
          },
        ],
      },
    ],
    termsAndConditions: `Terms and Conditions for Absa Contact Request\n\n1. By submitting this form, you consent to being contacted by an Absa representative.\n2. Your personal information will be processed in accordance with Absa's Privacy Policy.\n3. Absa reserves the right to decline any request at its sole discretion.\n4. All information provided must be accurate and up to date.\n5. Communications may be via phone, email, or SMS based on the contact details you provide.\n6. This service is available to South African residents only.\n7. Absa will not share your information with third parties without your consent.\n8. You may withdraw your consent at any time by contacting Absa directly.`,
    footer: {
      showPoweredBy: true,
      layout: "split",
      links: [
        {
          label: "Privacy Policy",
          url: "https://www.absa.co.za/legal/privacy-policy/",
          type: "privacy",
        },
        {
          label: "Terms of Use",
          url: "https://www.absa.co.za/legal/terms-of-use/",
          type: "terms",
        },
        {
          label: "Contact Us",
          url: "https://www.absa.co.za/contact-us/",
          type: "contact",
        },
      ],
    },
  },
  nedbank: {
    partnerId: "nedbank",
    partnerName: "Nedbank",
    headline: "Get in touch with Nedbank",
    description:
      "Complete the form below and we'll connect you with the right team.",
    submitLabel: "Send Request",
    successMessage:
      "Your request has been submitted. Nedbank will be in touch soon.",
    settings: {
      vdn: "NED001",
      brokerCode: "NED-BROKER",
    },
    theme: {
      primary: "142 76% 28%",
      primaryForeground: "0 0% 100%",
      radius: "0px",
      radix: {
        accentColor: "green",
        grayColor: "sage",
        radius: "none",
        scaling: "100%",
        panelBackground: "translucent",
        appearance: "light",
      },
      pageBackground: "#f0fdf4",
      headerBackground: "rgba(240,253,244,0.92)",
      footerBackground: "rgba(236,253,245,0.9)",
      cardBackground: "rgba(255,255,255,0.95)",
      cardBorder: "rgba(5,150,105,0.2)",
      badgeStyle: "solid",
    },
    feedback: true,
    feedbackSearchFields: [
      {
        id: "id_number",
        label: "ID Number",
        placeholder: "13-digit SA ID number",
      },
      { id: "phone", label: "Phone Number", placeholder: "82 000 0000" },
      { id: "email", label: "Email Address", placeholder: "john@example.com" },
    ],
    fields: [],
    sections: [
      {
        id: "personal",
        title: "Personal Information",
        fields: [
          {
            id: "first_name",
            type: "text",
            label: "First Name",
            placeholder: "John",
            width: 6,
            required: true,
          },
          {
            id: "last_name",
            type: "text",
            label: "Last Name",
            placeholder: "Doe",
            width: 6,
            required: true,
          },
          {
            id: "id_number",
            type: "text",
            label: "ID Number",
            placeholder: "Enter your SA ID",
            width: 12,
            required: true,
            validation: {
              pattern: "^[0-9]{13}$",
              message: "Must be a 13-digit SA ID number",
            },
          },
        ],
      },
      {
        id: "contact",
        title: "Contact Preferences",
        fields: [
          {
            id: "email",
            type: "email",
            label: "Email Address",
            placeholder: "john@example.com",
            width: 12,
            required: true,
          },
          {
            id: "phone",
            type: "tel",
            label: "Contact Number",
            placeholder: "82 000 0000",
            width: 6,
            required: true,
            phoneFormat: "split",
            areaCodePlaceholder: "+27",
          },
          {
            id: "preferred_date",
            type: "date",
            label: "Preferred Contact Date",
            width: 6,
            required: false,
          },
        ],
      },
      {
        id: "refer",
        title: "Refer Contacts",
        description:
          "Add referred contacts below. Each added contact is submitted as a separate request.",
        purpose: "refer",
        repeatable: true,
        addEntryLabel: "Add Referral",
        fields: [
          {
            id: "firstName",
            type: "text",
            label: "First Name",
            placeholder: "Jane",
            width: 6,
            required: true,
          },
          {
            id: "surname",
            type: "text",
            label: "Surname",
            placeholder: "Doe",
            width: 6,
            required: true,
          },
          {
            id: "cellNumber",
            type: "tel",
            label: "Mobile Number",
            placeholder: "82 000 0000",
            width: 6,
            required: true,
            phoneFormat: "split",
            areaCodePlaceholder: "+27",
          },
          {
            id: "email",
            type: "email",
            label: "Email Address",
            placeholder: "jane@example.com",
            width: 6,
            required: false,
          },
        ],
      },
    ],
    termsAndConditions: `Terms and Conditions for Nedbank Contact Request\n\n1. By completing this form, you agree to be contacted by a Nedbank advisor.\n2. Your ID number and personal details will be handled in compliance with POPIA.\n3. Nedbank will use the information solely for the purpose of responding to your enquiry.\n4. You confirm that the information provided is true and correct.\n5. Nedbank reserves the right to verify the information submitted.\n6. This form does not constitute an application for any Nedbank product or service.`,
    footer: {
      showPoweredBy: true,
      layout: "split",
      links: [
        {
          label: "Privacy",
          url: "https://www.nedbank.co.za/content/nedbank/desktop/gt/en/legal/privacy-notice.html",
          type: "privacy",
        },
        {
          label: "Terms",
          url: "https://www.nedbank.co.za/content/nedbank/desktop/gt/en/legal/terms-and-conditions.html",
          type: "terms",
        },
      ],
      note: "Nedbank Ltd Reg No 1951/000009/06. Authorised Financial Services and Registered Credit Provider (NCRCP16).",
    },
  },
  fnb: {
    partnerId: "fnb",
    partnerName: "FNB",
    headline: "Request a callback from FNB",
    description: "We'd love to hear from you. Fill in your details below.",
    submitLabel: "Request Callback",
    successMessage: "All done! An FNB representative will call you back.",
    settings: {
      vdn: "FNB001",
      brokerCode: "FNB-BROKER",
    },
    theme: {
      primary: "32 95% 44%",
      primaryForeground: "0 0% 100%",
      radius: "12px",
      radix: {
        accentColor: "amber",
        grayColor: "sand",
        radius: "large",
        scaling: "100%",
        panelBackground: "translucent",
        appearance: "light",
      },
      pageBackground: "#fffbeb",
      headerBackground: "rgba(255,251,235,0.92)",
      footerBackground: "rgba(255,251,235,0.9)",
      cardBackground: "rgba(255,255,255,0.95)",
      cardBorder: "rgba(217,119,6,0.2)",
      badgeStyle: "soft",
    },
    feedback: true,
    feedbackSearchFields: [
      { id: "phone", label: "Phone Number", placeholder: "82 000 0000" },
      { id: "email", label: "Email Address", placeholder: "you@email.com" },
    ],
    fields: [
      {
        id: "full_name",
        type: "text",
        label: "Full Name",
        placeholder: "Your full name",
        width: 12,
        required: true,
      },
      {
        id: "email",
        type: "email",
        label: "Email",
        placeholder: "you@email.com",
        width: 6,
        required: true,
      },
      {
        id: "phone",
        type: "tel",
        label: "Phone",
        placeholder: "82 000 0000",
        width: 6,
        required: true,
        phoneFormat: "split",
        areaCodePlaceholder: "+27",
      },
      {
        id: "service",
        type: "select",
        label: "Service Required",
        width: 12,
        required: true,
        options: [
          { label: "Banking", value: "banking" },
          { label: "Insurance", value: "insurance" },
          { label: "Investments", value: "investments" },
        ],
      },
    ],
    footer: {
      showPoweredBy: true,
      layout: "centered",
      links: [
        {
          label: "Privacy",
          url: "https://www.fnb.co.za/legal/privacy-policy.html",
          type: "privacy",
        },
        {
          label: "Terms",
          url: "https://www.fnb.co.za/legal/terms-and-conditions.html",
          type: "terms",
        },
        {
          label: "Contact",
          url: "https://www.fnb.co.za/contact-us/",
          type: "contact",
        },
      ],
      note: "FirstRand Bank Ltd (Reg. No. 1929/001225/06). An Authorised Financial Services and Credit Provider (NCRCP20).",
    },
  },
};

export function getPartnerConfig(partnerId: string): PartnerConfig | null {
  return partnerRegistry[partnerId.toLowerCase()] || null;
}

export function isValidPartner(partnerId: string): boolean {
  return partnerId.toLowerCase() in partnerRegistry;
}

export function getAllPartnerIds(): string[] {
  return Object.keys(partnerRegistry);
}
