// Central place to tune the "Support My Cosmetology Journey" fundraiser
// without touching the checkout/webhook/UI code. Money is always kept in
// cents (Stripe's native unit) to avoid floating-point rounding bugs.

// TODO(Shawnie/Tracy): swap in her real number once she has a firm
// tuition + kit + state-board-exam total. $12,000 is a placeholder so
// the page has something real to render before that number exists.
export const SUPPORT_GOAL_CENTS = Number(
  process.env.SUPPORT_GOAL_CENTS ?? 1_200_000
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
}

// Lab-branded preset amounts. These are just labels, not purchases or
// reward tiers — nothing is promised in exchange for any amount, which
// keeps these plain gifts rather than payment for goods/services.
export const PRESET_AMOUNTS: PresetAmount[] = [
  { cents: 500, amountLabel: "$5", perkLabel: "Add a Drop" },
  { cents: 2_500, amountLabel: "$25", perkLabel: "Fuel the Formula" },
  { cents: 5_000, amountLabel: "$50", perkLabel: "Invest in the Lab" },
  { cents: 10_000, amountLabel: "$100", perkLabel: "Help Build the Future" },
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
