/* START: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */
export interface FieldSchemaType {
  fieldName?: string;
  type:
    | "string"
    | "number"
    | "boolean"
    | "object"
    | "array"
    | "color"
    | "url"
    | "enum"
    | "datetime"
    | "file"
    | "files";
  required?: boolean;
  label?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  options?: string[];
  fields?: FieldSchemaType[];
  item?: FieldSchemaType;
}
/* END: THIS SECTION CODE IS CANNOT BE CHANGED, YOU ONLY READ IT */

export type ConfigurableSchemas = {
  formSchema: FieldSchemaType[];
};



export const configurableSchemas: ConfigurableSchemas = {
  formSchema: [
    {
      fieldName: "appName",
      type: "string",
      required: true,
      label: "App Name",
    },
    {
      fieldName: "logoUrl",
      type: "url",
      required: true,
      label: "Logo URL",
    },
    {
      fieldName: "brandColor",
      type: "object",
      required: true,
      label: "Brand Color",
      fields: [
        {
          fieldName: "primary",
          type: "color",
          required: true,
          label: "Primary",
        },
        {
          fieldName: "secondary",
          type: "color",
          required: true,
          label: "Secondary",
        },
        {
          fieldName: "accent",
          type: "color",
          required: true,
          label: "Accent",
        },
      ],
    },
    // ── Hero Section ─────────────────────────────────────────────────────────
    {
      fieldName: "heroHeadline",
      type: "string",
      required: true,
      label: "Hero Headline",
      maxLength: 80,
    },
    {
      fieldName: "heroTagline",
      type: "string",
      required: true,
      label: "Hero Tagline",
      maxLength: 120,
    },
    {
      fieldName: "heroCtaLabel",
      type: "string",
      required: true,
      label: "Hero CTA Button Label",
      maxLength: 40,
    },
    {
      fieldName: "heroCtaHref",
      type: "string",
      required: false,
      label: "Hero CTA Link (anchor or URL)",
      maxLength: 200,
    },
    {
      fieldName: "heroImage",
      type: "file",
      required: false,
      label: "Hero Background Image",
    },
    // ── Store Info Section ────────────────────────────────────────────────────
    {
      fieldName: "storeInfoHeading",
      type: "string",
      required: true,
      label: "Store Info Section Heading",
      maxLength: 60,
    },
    {
      fieldName: "storeAddress",
      type: "string",
      required: true,
      label: "Store Address",
      maxLength: 200,
    },
    {
      fieldName: "storePhone",
      type: "string",
      required: false,
      label: "Store Phone Number",
      maxLength: 30,
    },
    {
      fieldName: "storeEmail",
      type: "string",
      required: false,
      label: "Store Email",
      maxLength: 100,
    },
    {
      fieldName: "businessHours",
      type: "array",
      label: "Business Hours",
      item: {
        type: "object",
        fields: [
          { fieldName: "days", type: "string", required: true, label: "Days" },
          { fieldName: "hours", type: "string", required: true, label: "Hours" },
        ],
      },
    },
    {
      fieldName: "footerText",
      type: "string",
      required: false,
      label: "Footer Text",
      maxLength: 200,
    },
  ],
};
