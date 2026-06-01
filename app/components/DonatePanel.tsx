"use client";

import { useState } from "react";

const AMOUNTS = [25, 50, 100, 250, 500] as const;

export default function DonatePanel() {
  const [freq, setFreq] = useState<"once" | "monthly">("once");
  const [amt, setAmt] = useState<number | "custom">(50);
  const [customVal, setCustomVal] = useState("");

  const displayAmt =
    amt === "custom"
      ? customVal
        ? `$${customVal}`
        : ""
      : `$${amt}`;

  const label = displayAmt
    ? `Donate ${displayAmt}${freq === "monthly" ? "/mo" : ""}`
    : "Donate";

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
            ${a}
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
          <label htmlFor="customAmt">Custom amount (USD)</label>
          <input
            type="number"
            id="customAmt"
            min="1"
            placeholder="Enter amount"
            value={customVal}
            onChange={(e) => setCustomVal(e.target.value)}
          />
        </div>
      )}

      <button
        className="btn btn-primary btn-lg"
        style={{ width: "100%", justifyContent: "center" }}
        onClick={() =>
          alert(
            `Thank you! This is a prototype — connect a payment processor (e.g. Stripe, Flutterwave) to accept ${label} donations.`
          )
        }
      >
        {label}
      </button>

      <p
        className="muted"
        style={{ fontSize: "0.78rem", textAlign: "center", marginTop: 14 }}
      >
        Secure payment · Prototype — not connected to a processor.
      </p>
    </div>
  );
}
