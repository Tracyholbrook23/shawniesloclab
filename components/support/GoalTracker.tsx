"use client";

import { useCallback, useEffect, useState } from "react";
import { loadStripe, type Stripe as StripeJs } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import FadeIn from "@/components/ui/FadeIn";
import {
  PRESET_AMOUNTS,
  MIN_CUSTOM_CENTS,
  MAX_CUSTOM_CENTS,
  formatUsd,
} from "@/lib/supportConfig";

interface GoalState {
  goalCents: number;
  raisedCents: number;
  supporterCount: number;
}

let stripePromise: Promise<StripeJs | null> | null = null;
function getStripe(): Promise<StripeJs | null> {
  if (!stripePromise) {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!key) {
      console.error(
        "[GoalTracker] NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set — checkout can't load. See .env.example."
      );
      stripePromise = Promise.resolve(null);
    } else {
      stripePromise = loadStripe(key);
    }
  }
  return stripePromise;
}

export default function GoalTracker() {
  const [goal, setGoal] = useState<GoalState | null>(null);
  const [goalError, setGoalError] = useState(false);

  const [selectedCents, setSelectedCents] = useState<number>(PRESET_AMOUNTS[1].cents);
  const [customAmount, setCustomAmount] = useState("");
  const [usingCustom, setUsingCustom] = useState(false);

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [startingCheckout, setStartingCheckout] = useState(false);
  const [justDonated, setJustDonated] = useState(false);

  const fetchGoal = useCallback(async () => {
    try {
      const res = await fetch("/api/goal", { cache: "no-store" });
      if (!res.ok) throw new Error("bad response");
      const data = (await res.json()) as GoalState;
      setGoal(data);
      setGoalError(false);
    } catch {
      setGoalError(true);
    }
  }, []);

  useEffect(() => {
    fetchGoal();
  }, [fetchGoal]);

  // Stripe redirects back here (return_url in app/api/checkout/route.ts)
  // after a completed embedded checkout. Show a thank-you banner and
  // re-fetch the total once the webhook has had a moment to land.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("donated") === "1") {
      setJustDonated(true);
      const timer = setTimeout(fetchGoal, 1500);
      window.history.replaceState({}, "", "/support");
      return () => clearTimeout(timer);
    }
  }, [fetchGoal]);

  const amountCents = usingCustom
    ? Math.round(Number(customAmount) * 100)
    : selectedCents;

  const amountValid =
    Number.isFinite(amountCents) &&
    amountCents >= MIN_CUSTOM_CENTS &&
    amountCents <= MAX_CUSTOM_CENTS;

  async function startCheckout() {
    if (!amountValid) {
      setCheckoutError(
        `Enter an amount between ${formatUsd(MIN_CUSTOM_CENTS)} and ${formatUsd(MAX_CUSTOM_CENTS)}.`
      );
      return;
    }
    setCheckoutError(null);
    setStartingCheckout(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amountCents }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not start checkout.");
      setClientSecret(data.clientSecret);
    } catch (err) {
      setCheckoutError(
        err instanceof Error ? err.message : "Could not start checkout."
      );
    } finally {
      setStartingCheckout(false);
    }
  }

  const pct =
    goal && goal.goalCents > 0
      ? Math.min(100, Math.round((goal.raisedCents / goal.goalCents) * 100))
      : 0;

  return (
    <section id="goal" className="py-[92px] bg-[#FCE7F1]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-14 items-center">
        <div>
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-[#A81458] font-bold mb-2.5">
              The Goal
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#180D14] mb-4.5 max-w-md">
              Every dollar gets me closer to the chair, licensed.
            </h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="max-w-md">
              <div className="flex flex-col gap-2 mb-3">
                <div className="flex items-baseline justify-between border-b border-[#E0448E]/15 pb-2">
                  <span className="text-base font-extrabold text-[#180D14]">
                    $24,000
                  </span>
                  <span className="text-sm text-[#6B5560]">Tuition</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-[#E0448E]/15 pb-2">
                  <span className="text-base font-extrabold text-[#180D14]">
                    $2,600
                  </span>
                  <span className="text-sm text-[#6B5560]">
                    Professional Student Kit
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#8A7580] italic m-0">
                *Application fee not included.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="bg-white border border-[#E0448E]/20 p-7 md:p-9">
          {clientSecret ? (
            <div>
              <button
                type="button"
                onClick={() => setClientSecret(null)}
                className="text-xs font-bold tracking-wide uppercase text-[#8A7580] hover:text-[#180D14] transition-colors duration-150 mb-4"
              >
                &lsaquo; Change Amount
              </button>
              <EmbeddedCheckoutProvider stripe={getStripe()} options={{ clientSecret }}>
                <EmbeddedCheckout />
              </EmbeddedCheckoutProvider>
            </div>
          ) : (
            <>
              {justDonated && (
                <div className="mb-6 px-4 py-3 bg-[#FCE7F1] border border-[#E0448E]/25 text-sm text-[#A81458] font-semibold">
                  Thank you! Your contribution is in — the total below
                  updates as soon as Stripe confirms it.
                </div>
              )}

              <div className="flex items-baseline gap-2.5 flex-wrap mb-1.5">
                <p className="text-[40px] md:text-[46px] font-extrabold text-[#180D14] m-0 tracking-tight">
                  {goal ? formatUsd(goal.raisedCents) : "—"}
                </p>
                <p className="text-base text-[#8A7580] m-0 font-semibold">
                  raised of {goal ? formatUsd(goal.goalCents) : "—"} goal
                </p>
              </div>

              <div className="w-full h-4 bg-[#FCE7F1] border border-[#E0448E]/25 my-5">
                <div
                  className="h-full bg-[#E0448E] transition-[width] duration-700 ease-out"
                  style={{ width: `${pct}%` }}
                />
              </div>

              <div className="flex justify-between items-center flex-wrap gap-2.5 mb-6">
                <p className="text-xs tracking-[0.1em] uppercase text-[#8A7580] font-bold m-0">
                  {goal
                    ? `${goal.supporterCount} Supporter${goal.supporterCount === 1 ? "" : "s"}`
                    : "—"}
                </p>
                {goalError ? (
                  <p className="text-xs text-[#A81458] m-0">
                    Couldn&rsquo;t load the live total — try refreshing.
                  </p>
                ) : (
                  <p className="text-xs text-[#8A7580] font-semibold m-0 flex items-center gap-1.5">
                    <span aria-hidden="true" className="text-[#E0448E]">
                      &#10084;
                    </span>
                    Every contribution helps!
                  </p>
                )}
              </div>

              <p className="text-xs tracking-[0.15em] uppercase text-[#A81458] font-bold mb-3">
                Choose How You&rsquo;ll Make an Impact
              </p>
              <div className="grid grid-cols-2 gap-2.5 mb-3">
                {PRESET_AMOUNTS.map((preset) => {
                  const active = !usingCustom && selectedCents === preset.cents;
                  return (
                    <button
                      key={preset.cents}
                      type="button"
                      onClick={() => {
                        setUsingCustom(false);
                        setSelectedCents(preset.cents);
                        setCheckoutError(null);
                      }}
                      className={`text-left px-4 py-3 border transition-colors duration-150 ${
                        active
                          ? "bg-[#E0448E] border-[#E0448E] text-white"
                          : "bg-[#FBF3F8] border-[#E0448E]/20 text-[#180D14] hover:border-[#E0448E]/50"
                      }`}
                    >
                      <span className="block text-base font-extrabold">
                        {preset.amountLabel}
                      </span>
                      <span
                        className={`block text-[11px] tracking-wide uppercase font-semibold ${
                          active ? "text-white/80" : "text-[#A81458]"
                        }`}
                      >
                        {preset.perkLabel}
                      </span>
                      <span
                        className={`block text-[11px] leading-snug normal-case font-normal mt-1 ${
                          active ? "text-white/70" : "text-[#8A7580]"
                        }`}
                      >
                        {preset.description}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setUsingCustom(true)}
                className={`w-full text-left px-4 py-3 border mb-5 transition-colors duration-150 ${
                  usingCustom
                    ? "border-[#E0448E] bg-[#FBF3F8]"
                    : "border-[#E0448E]/20 bg-[#FBF3F8] hover:border-[#E0448E]/50"
                }`}
              >
                <span className="block text-[11px] tracking-wide uppercase font-bold text-[#8A7580] mb-1.5">
                  Other amount
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#180D14] font-bold">$</span>
                  <input
                    type="number"
                    min={MIN_CUSTOM_CENTS / 100}
                    max={MAX_CUSTOM_CENTS / 100}
                    step="1"
                    inputMode="decimal"
                    placeholder="Enter any amount"
                    value={customAmount}
                    onFocus={() => setUsingCustom(true)}
                    onChange={(e) => {
                      setUsingCustom(true);
                      setCustomAmount(e.target.value);
                      setCheckoutError(null);
                    }}
                    className="w-full bg-transparent outline-none text-[#180D14] font-bold"
                  />
                </span>
              </button>

              {checkoutError && (
                <p className="text-xs text-[#A81458] font-semibold mb-3">
                  {checkoutError}
                </p>
              )}

              <button
                type="button"
                onClick={startCheckout}
                disabled={startingCheckout}
                className="w-full flex items-center justify-center gap-2 px-[30px] py-4 bg-[#E0448E] text-white rounded-full text-[13px] font-bold tracking-[0.08em] uppercase hover:bg-[#A81458] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ boxShadow: "0 8px 24px rgba(224,68,142,0.3)" }}
              >
                {startingCheckout ? (
                  "Loading secure checkout…"
                ) : (
                  <>
                    <span aria-hidden="true">&#10084;</span>
                    Support My Education
                  </>
                )}
              </button>

              <p className="text-[11px] text-[#8A7580] mt-4 text-center">
                You&rsquo;ll complete your contribution securely via Stripe
                — no redirect required.
              </p>
              <p className="text-[11px] text-[#8A7580] leading-relaxed mt-2 text-center">
                Contributions are voluntary gifts toward Shawnie&rsquo;s
                cosmetology education. No goods or services are provided in
                exchange, and contributions are not tax-deductible
                charitable donations.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 pt-5 border-t border-[#E0448E]/15 text-[11px] text-[#8A7580] font-semibold">
                <span aria-hidden="true" className="text-[#E0448E]">
                  &#10003;
                </span>
                Secure donations powered by Stripe
              </div>
            </>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
