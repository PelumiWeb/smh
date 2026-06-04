import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donation cancelled — Support & Mentor Foundation",
};

export default function DonateCancelPage() {
  return (
    <section className="section" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ maxWidth: 640, textAlign: "center" }}>
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--ink-50)"
          strokeWidth="1.6"
          strokeLinecap="round"
          style={{ margin: "0 auto 24px" }}
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>

        <h1 className="h1" style={{ marginBottom: 16 }}>
          Donation cancelled
        </h1>
        <p className="lead" style={{ marginBottom: 12 }}>
          No payment was taken. If you changed your mind or ran into a problem,
          you&apos;re welcome to try again.
        </p>
        <p className="muted" style={{ marginBottom: 36 }}>
          If you need help, contact us at{" "}
          <a href="mailto:info@supportandmentorfoundation.org">
            info@supportandmentorfoundation.org
          </a>
          .
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-primary btn-lg" href="/get-involved#donate">
            Try again
          </Link>
          <Link className="btn btn-outline btn-lg" href="/">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
