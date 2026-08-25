import Stripe from "stripe";

// Server-only Stripe client — never import this from a "use client"
// component. STRIPE_SECRET_KEY must be set in the environment: a
// sk_test_... key for local dev / preview, Shawnie's real sk_live_...
// key in production. See .env.example.
const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  console.warn(
    "[stripe] STRIPE_SECRET_KEY is not set — /support checkout will fail until it's added to .env.local (dev) and the Vercel project's environment variables (prod). See .env.example."
  );
}

// No apiVersion pinned here on purpose: omitting it uses the version this
// SDK release ships with by default, which avoids hand-typing a version
// string that could silently drift out of date. Bump the `stripe` package
// deliberately (and re-test checkout + the webhook) if that ever needs to
// change.
export const stripe = new Stripe(secretKey ?? "sk_test_placeholder_unconfigured");
