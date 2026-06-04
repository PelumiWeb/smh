import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank you — Support & Mentor Foundation",
};

// Stripe appends ?session_id=cs_... to this URL after payment.
// We read it server-side and verify via /api/verify-session.
export default async function DonatSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  let donorName: string | null = null;
  let amountGBP: number | null = null;
  let verified = false;

  if (session_id) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-session?session_id=${session_id}`,
        { cache: "no-store" }
      );
      if (res.ok) {
        const data = await res.json();
        donorName = data.donorName;
        amountGBP = data.amountGBP;
        verified = true;
      }
    } catch {
      // Show generic thank-you if verification fails
    }
  }

  return (
    <section className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ maxWidth: 640, textAlign: "center" }}>
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
          style={{ margin: "0 auto 24px" }}
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="9 12 11 14 15 10" />
        </svg>

        <h1 className="h1" style={{ marginBottom: 16 }}>
          {verified && donorName ? `Thank you, ${donorName}!` : "Thank you!"}
        </h1>

        {verified && amountGBP ? (
          <p className="lead" style={{ marginBottom: 12 }}>
            Your donation of <strong>£{amountGBP.toFixed(2)} </strong> has been
            received. You&apos;ll get a receipt by email shortly.
          </p>
        ) : (
          <p className="lead" style={{ marginBottom: 12 }}>
            Your donation has been received. You&apos;ll get a receipt by email
            shortly.
          </p>
        )}

        <p className="muted" style={{ marginBottom: 36 }}>
          Your generosity helps protect, mentor, and empower young people across
          The Gambia.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-primary btn-lg" href="/">
            Back to home
          </Link>
          <Link className="btn btn-outline btn-lg" href="/programs">
            See our programs
          </Link>
        </div>
      </div>
    </section>
  );
}
