// Central place to tune the "Support My Cosmetology Journey" fundraiser
// without touching the checkout/webhook/UI code. Money is always kept in
// cents (Stripe's native unit) to avoid floating-point rounding bugs.

// Real goal: $26,600 (tuition + kit fees + state board exam costs).
// Can still be overridden per-environment via SUPPORT_GOAL_CENTS if it
// ever needs to change without a code deploy.
export const SUPPORT_GOAL_CENTS = Number(
  process.env.SUPPORT_GOAL_CENTS ?? 2_660_000
);

export const SUPPORT_CURRENCY = "usd";

// Shown on the Stripe checkout line item — keep it plain, not "donation"
// (see the tax-disclaimer copy on the page itself for why).
export const SUPPORT_PRODUCT_NAME =
  "Contribution — Shawnie's Cosmetology Education";

export interface PresetAmount {
  cents: number;
  amountLabel: string;
  perkLabel: string;
  description: string;
}

// Lab-branded preset amounts. These are just labels, not purchases or
// reward tiers — nothing is promised in exchange for any amount, which
// keeps these plain gifts rather than payment for goods/services.
export const PRESET_AMOUNTS: PresetAmount[] = [
  {
    cents: 500,
    amountLabel: "$5",
    perkLabel: "Just to Drop",
    description: "Every drop makes a difference.",
  },
  {
    cents: 2_500,
    amountLabel: "$25",
    perkLabel: "Fuel the Formula",
    description: "Provide the fuel to keep the dream in motion.",
  },
  {
    cents: 5_000,
    amountLabel: "$50",
    perkLabel: "Invest in the Lab",
    description: "Give towards the future.",
  },
  {
    cents: 10_000,
    amountLabel: "$100",
    perkLabel: "Build the Future",
    description: "Help the legacy.",
  },
];

// "Other amount" input bounds — a friendly floor above Stripe's ~$0.50
// practical minimum, and a sanity ceiling to catch typos (an extra zero).
export const MIN_CUSTOM_CENTS = 300;
export const MAX_CUSTOM_CENTS = 500_000;

export function formatUsd(cents: number): string {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
