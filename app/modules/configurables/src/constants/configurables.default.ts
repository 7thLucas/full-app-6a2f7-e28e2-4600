/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  primary: string;
  secondary: string;
  accent: string;
};

export type TBusinessHour = {
  days: string;
  hours: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  brandColor: TBrandColor;
  // Hero Section
  heroHeadline: string;
  heroTagline: string;
  heroCtaLabel: string;
  heroCtaHref?: string;
  heroImage?: string;
  // Store Info Section
  storeInfoHeading: string;
  storeAddress: string;
  storePhone?: string;
  storeEmail?: string;
  businessHours: TBusinessHour[];
  footerText?: string;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "Veroflower",
  logoUrl: "FILL_LOGO_URL_HERE",
  brandColor: {
    primary: "#F4C2C2",
    secondary: "#A8C5A0",
    accent: "#FFFAF9",
  },
  // Hero Section
  heroHeadline: "Fresh Flowers, Crafted with Love",
  heroTagline: "Handpicked bouquets for every moment that matters.",
  heroCtaLabel: "Visit Us",
  heroCtaHref: "#store-info",
  heroImage: "", // fill it here once uploaded
  // Store Info Section
  storeInfoHeading: "Find Us",
  storeAddress: "123 Blossom Lane, Garden District, Jakarta 12345",
  storePhone: "+62 812-3456-7890",
  storeEmail: "hello@veroflower.com",
  businessHours: [
    { days: "Monday – Friday", hours: "09:00 – 19:00" },
    { days: "Saturday", hours: "09:00 – 17:00" },
    { days: "Sunday", hours: "10:00 – 15:00" },
  ],
  footerText: "© 2026 Veroflower. All rights reserved.",
};
