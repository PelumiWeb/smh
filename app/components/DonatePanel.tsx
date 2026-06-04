"use client";

import { useState } from "react";

const AMOUNTS = [25, 50, 100, 250, 500] as const;

type Status = "idle" | "loading" | "error";

export default function DonatePanel() {
  const [freq, setFreq] = useState<"once" | "monthly">("once");
  const [amt, setAmt] = useState<number | "custom">(50);
  const [customVal, setCustomVal] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const numericAmt = amt === "custom" ? parseInt(customVal, 10) : amt;
  const displayAmt = numericAmt > 0 ? `£${numericAmt}` : "";
  const label =
    status === "loading"
      ? "Processing…"
      : displayAmt
      ? `Donate ${displayAmt}${freq === "monthly" ? "/mo" : ""}`
      : "Donate";

  async function handleDonate() {
    setErrorMsg("");

    if (!donorName.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!donorEmail.trim() || !donorEmail.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!numericAmt || numericAmt <= 0 || !Number.isInteger(numericAmt)) {
      setErrorMsg("Please enter a valid whole amount in £.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: numericAmt,
          donorName: donorName.trim(),
          donorEmail: donorEmail.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      // Redirect to Stripe hosted checkout page
      window.location.href = data.url;
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div className="donate-card">
      <div className="freq-toggle">
        <button
          className={freq === "once" ? "active" : ""}
          onClick={() => setFreq("once")}
        >
          One-time
        </button>
        <button
          className={freq === "monthly" ? "active" : ""}
          onClick={() => setFreq("monthly")}
        >
          Monthly
        </button>
      </div>

      <p className="muted" style={{ fontSize: "0.86rem", margin: "14px 0 4px" }}>
        Choose an amount
      </p>

      <div className="amt-grid">
        {AMOUNTS.map((a) => (
          <button
            key={a}
            className={`amt${amt === a ? " active" : ""}`}
            onClick={() => setAmt(a)}
          >
            £{a}
          </button>
        ))}
        <button
          className={`amt${amt === "custom" ? " active" : ""}`}
          onClick={() => setAmt("custom")}
        >
          Other
        </button>
      </div>

      {amt === "custom" && (
        <div className="field">
          <label htmlFor="customAmt">Custom amount (GBP)</label>
          <input
            type="number"
            id="customAmt"
            min="1"
            step="1"
            placeholder="Enter amount in £"
            value={customVal}
            onChange={(e) => setCustomVal(e.target.value)}
          />
        </div>
      )}

      <div className="field" style={{ marginTop: 18 }}>
        <label htmlFor="donorName">Your name</label>
        <input
          type="text"
          id="donorName"
          placeholder="Full name"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="donorEmail">Email address</label>
        <input
          type="email"
          id="donorEmail"
          placeholder="you@example.com"
          value={donorEmail}
          onChange={(e) => setDonorEmail(e.target.value)}
        />
      </div>

      {errorMsg && (
        <p style={{ color: "#C0392B", fontSize: "0.875rem", margin: "0 0 12px" }}>
          {errorMsg}
        </p>
      )}

      <button
        className="btn btn-primary btn-lg"
        style={{ width: "100%", justifyContent: "center" }}
        onClick={handleDonate}
        disabled={status === "loading"}
      >
        {label}
      </button>

      <p
        className="muted"
        style={{ fontSize: "0.78rem", textAlign: "center", marginTop: 14 }}
      >
        Secure payment via Stripe · You&apos;ll be redirected to complete your donation.
      </p>
    </div>
  );
}
