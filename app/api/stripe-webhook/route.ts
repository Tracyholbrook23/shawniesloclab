import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { recordDonation } from "@/lib/goalStore";

export const runtime = "nodejs";

// Stripe calls this after every checkout event. It's the ONLY place the
// goal tracker's numbers change — never trust a client-side "payment
// succeeded" message, always wait for Stripe's own signed webhook.
//
// Register this endpoint's URL (https://<your-domain>/api/stripe-webhook)
// in the Stripe Dashboard -> Developers -> Webhooks, subscribed to the
// "checkout.session.completed" event, then copy the signing secret it
// gives you into STRIPE_WEBHOOK_SECRET. See .env.example.
export async function POST(req: NextRequest) {
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    console.error("[stripe-webhook] missing signature header or STRIPE_WEBHOOK_SECRET env var");
    return NextResponse.json({ error: "Webhook not configured." }, { status: 400 });
  }

  // Signature verification needs the exact raw request body — read it as
  // text, never as parsed JSON, before verifying.
  const rawBody = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error("[stripe-webhook] signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // payment_status guards against recording a session that completed
    // (e.g. a $0 total, or a delayed payment method) without money
    // actually having moved yet.
    if (session.payment_status === "paid") {
      const fields = session.custom_fields ?? [];
      const nameField = fields.find((f) => f.key === "supporter_name");
      const messageField = fields.find((f) => f.key === "supporter_message");

      const name = nameField?.text?.value?.trim() || "Anonymous";
      const message = messageField?.text?.value?.trim() || "";

      try {
        await recordDonation({
          name,
          message,
          amountCents: session.amount_total ?? 0,
          at: new Date().toISOString(),
        });
      } catch (err) {
        // Don't fail the webhook response over a storage hiccup — Stripe
        // will retry delivery on a non-2xx, which could double-count the
        // same donation once the store recovers. Log loudly instead so
        // it's easy to notice and reconcile by hand against the Stripe
        // Dashboard's payment list.
        console.error("[stripe-webhook] recordDonation failed", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
