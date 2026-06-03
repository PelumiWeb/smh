import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import type { DonationRequest, DonationSession } from "@/types/donation";

export async function POST(request: NextRequest) {
  let body: DonationRequest;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { amount, donorName, donorEmail } = body;

  if (!Number.isInteger(amount) || amount <= 0) {
    return Response.json(
      { error: "amount must be a positive integer (whole GBP)." },
      { status: 400 }
    );
  }
  if (!donorName || typeof donorName !== "string" || !donorName.trim()) {
    return Response.json({ error: "donorName is required." }, { status: 400 });
  }
  if (!donorEmail || typeof donorEmail !== "string" || !donorEmail.trim()) {
    return Response.json({ error: "donorEmail is required." }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            unit_amount: amount * 100, // convert to pence
            product_data: {
              name: "Donation — Support & Mentor Foundation",
              description:
                "Supporting children and young people across The Gambia.",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        donorName: donorName.trim(),
        donorEmail: donorEmail.trim(),
      },
      customer_email: donorEmail.trim(),
      success_url: `${baseUrl}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/donate/cancel`,
    });

    const response: DonationSession = {
      sessionId: session.id,
      url: session.url!,
    };
    return Response.json(response, { status: 200 });
  } catch (err) {
    console.error("[/api/donate] Stripe error:", err);
    return Response.json(
      { error: "Failed to create checkout session." },
      { status: 500 }
    );
  }
}
