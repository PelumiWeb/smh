import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import { sendDonationReceipt } from "@/lib/resend";
import type Stripe from "stripe";

// Stripe signs the raw request bytes — never parse with req.json() here.
export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
    return Response.json(
      { error: "Missing stripe-signature header." },
      { status: 400 }
    );
  }

  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("[/api/webhook] Signature verification failed:", err);
    return Response.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const donorName = session.metadata?.donorName ?? "Donor";
    const donorEmail =
      session.metadata?.donorEmail ?? session.customer_email ?? "";
    const amountGBP = (session.amount_total ?? 0) / 100;

    console.log(
      `[donation] ${donorName} <${donorEmail}> donated £${amountGBP.toFixed(2)}`
    );

    if (donorEmail) {
      try {
        await sendDonationReceipt({ to: donorEmail, donorName, amountGBP });
      } catch (err) {
        // Log but don't fail — returning 500 would cause Stripe to retry unnecessarily.
        console.error("[/api/webhook] Receipt email failed:", err);
      }
    }
  } else {
    console.log(`[/api/webhook] Unhandled event type: ${event.type}`);
  }

  return Response.json({ received: true }, { status: 200 });
}
