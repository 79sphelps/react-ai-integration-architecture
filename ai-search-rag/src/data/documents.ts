import type { Document } from "../types";

export const documents: Document[] = [
  {
    id: "refund-policy",
    title: "Refund Policy",
    content: `
Our refund policy allows customers to request a full refund within 30 days of purchase.
Refunds are processed within 5–10 business days after approval.
Digital products are non-refundable unless there is a technical issue.
To request a refund, users must contact support@company.com with their order ID.
`,
  },
  {
    id: "shipping-policy",
    title: "Shipping Policy",
    content: `
Orders are processed within 2 business days.
Standard shipping takes 5–7 business days.
Expedited shipping options are available at checkout.
Tracking information is provided via email once the order ships.
`,
  },
  {
    id: "account-management",
    title: "Account Management",
    content: `
Users must verify their email address to activate their account.
Password resets can be requested via the login page.
Accounts inactive for over 12 months may be archived.
Users can update their personal information in account settings.
`,
  },
];
