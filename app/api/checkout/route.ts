import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import {
  SUPPORT_CURRENCY,
  SUPPORT_PRODUCT_NAME,
  MIN_CUSTOM_CENTS,
  MAX_CUSTOM_CENTS,
  formatUsd,
} from "@/lib/supportConfig";

export const runtime = "nodejs";

// Creates a Stripe Embedded Checkout session for one contribution amount.
// The client mounts the returned client secret in place (see
// components/support/GoalTracker.tsx) — the visitor never leaves
// shawniesloclab.com, even though Stripe's own secure iframe handles the
// actual card fields.
export async function POST(req: NextRequest) {
  let amountCents: number;

  try {
    const body = await req.json();
    amountCents = Math.round(Number(body?.amountCents));
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!Number.isFinite(amountCents) || amountCents < MIN_CUSTOM_CENTS || amountCents > MAX_CUSTOM_CENTS) {
    return NextResponse.json(
      {
        error: `Enter an amount between ${formatUsd(MIN_CUSTOM_CENTS)} and ${formatUsd(MAX_CUSTOM_CENTS)}.`,
      },
      { status: 400 }
    );
  }

  const origin = req.headers.get("origin") ?? new URL(req.url).origin;

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded_page",
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: SUPPORT_CURRENCY,
            unit_amount: amountCents,
            product_data: { name: SUPPORT_PRODUCT_NAME },
          },
        },
      ],
      // Optional name + note, shown on the Supporter Wall after payment.
      // Neither is a good/service in exchange for the contribution — see
      // the disclaimer copy on the page itself. Stripe marks `optional`
      // fields as "(optional)" in the Checkout UI automatically, and it
      // also echoes these labels verbatim into the payment receipt email
      // — so keep them short and receipt-friendly rather than writing
      // full sentences here.
      custom_fields: [
        {
          key: "supporter_name",
          label: { type: "custom", custom: "Display name" },
          type: "text",
          optional: true,
        },
        {
          key: "supporter_message",
          label: { type: "custom", custom: "Message" },
          type: "text",
          optional: true,
          text: { maximum_length: 140 },
        },
      ],
      return_url: `${origin}/support?donated=1&session_id={CHECKOUT_SESSION_ID}`,
    });

    if (!session.client_secret) {
      throw new Error("Stripe did not return a client secret.");
    }

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err) {
    console.error("[api/checkout] failed to create session", err);
    return NextResponse.json(
      { error: "Could not start checkout. Please try again in a moment." },
      { status: 500 }
    );
  }
}
