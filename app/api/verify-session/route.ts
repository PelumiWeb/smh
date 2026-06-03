import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return Response.json(
      { error: "session_id query parameter is required." },
      { status: 400 }
    );
  }

  const stripe = getStripe();

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch (err) {
    console.error("[/api/verify-session] Stripe error:", err);
    return Response.json(
      { error: "Failed to retrieve session." },
      { status: 500 }
    );
  }

  if (session.payment_status !== "paid") {
    return Response.json(
      { error: "Payment not completed.", status: session.payment_status },
      { status: 402 }
    );
  }

  return Response.json({
    status: session.payment_status,
    donorName: session.metadata?.donorName ?? null,
    amountGBP: (session.amount_total ?? 0) / 100,
  });
}
