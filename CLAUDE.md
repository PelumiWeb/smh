@AGENTS.md

# SMF Donation API — Claude Code Instructions

## Context
This is the backend API layer for the Support & Mentor Foundation (SMF) donation platform.
The frontend (Next.js) is already built. Your job is to build only the server-side API routes
and supporting utilities that power the Stripe donation flow.

Do not touch or create any UI components, pages, or layout files.

---

## What to Build

### 1. `app/api/donate/route.ts` — Create Stripe Checkout Session

Accepts a POST request from the frontend with donor details and creates a Stripe hosted
checkout session. Returns the session URL for the frontend to redirect to.

**Request body:**
```json
{
  "amount": 10,
  "donorName": "John Smith",
  "donorEmail": "john@example.com"
}
```

**Response:**
```json
{
  "url": "https://checkout.stripe.com/...",
  "sessionId": "cs_..."
}
```

**Requirements:**
- Validate that amount is a positive integer
- Validate that donorName and donorEmail are present
- Currency is GBP
- Convert amount to pence (multiply by 100) before passing to Stripe
- Set success_url to `${NEXT_PUBLIC_BASE_URL}/donate/success?session_id={CHECKOUT_SESSION_ID}`
- Set cancel_url to `${NEXT_PUBLIC_BASE_URL}/donate/cancel`
- Store donorName and donorEmail in session metadata
- Return 400 for validation errors, 500 for Stripe errors

---

### 2. `app/api/webhook/route.ts` — Handle Stripe Webhook Events

Stripe calls this endpoint after payment events. Must verify the Stripe signature
before processing any event.

**CRITICAL — Raw Body:**
Read the request body using `await req.text()` NOT `await req.json()`.
Stripe signs the raw bytes. If Next.js parses the body first, signature
verification will fail and every webhook will return 400.

**Events to handle:**
- `checkout.session.completed` — payment confirmed
  - Extract donorName and donorEmail from session.metadata
  - Extract amount from session.amount_total (divide by 100 for GBP)
  - Call sendDonationReceipt() from lib/resend.ts
  - Log the donation to console (DB integration is out of scope for now)
- All other events — log and return 200, no action needed

**Response:** Always return `{ received: true }` with status 200 on success.
Return 400 only for invalid signatures.

---

### 3. `app/api/verify-session/route.ts` — Verify Stripe Session

The frontend success page calls this after Stripe redirects back, to confirm the
payment is genuine and retrieve donor details to display.

**Request:** GET with `?session_id=cs_...`

**Response:**
```json
{
  "status": "paid",
  "donorName": "John Smith",
  "amountGBP": 10
}
```

**Requirements:**
- Return 400 if session_id is missing
- Return 402 if payment_status is not "paid"
- Return 500 on Stripe errors

---

### 4. `lib/stripe.ts` — Stripe Client

Initialise and export a single Stripe instance using the secret key from env.
Throw a clear error at startup if STRIPE_SECRET_KEY is not set.
Use Stripe API version `2024-06-20`.

---

### 5. `lib/resend.ts` — Email Client + Receipt Sender

Initialise a Resend client and export a `sendDonationReceipt()` function.

**Function signature:**
```typescript
sendDonationReceipt({
  to: string,
  donorName: string,
  amountGBP: number
}): Promise<void>
```

**Email content:**
- From: `SMF <no-reply@yourdomain.com>` (leave as placeholder)
- Subject: `Thank you for your donation — Support & Mentor Foundation`
- Body: simple HTML — thank the donor by name, confirm the amount, brief mission note
- Keep it clean, no heavy styling needed

---

### 6. `types/donation.ts` — Shared Types

```typescript
export interface DonationRequest {
  amount: number       // whole GBP, e.g. 10
  donorName: string
  donorEmail: string
}

export interface DonationSession {
  sessionId: string
  url: string
}
```

---

## Environment Variables

Create `.env.example` with these keys (no values):

```
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
RESEND_API_KEY=
NEXT_PUBLIC_BASE_URL=
```

Do not create `.env.local` — the developer will fill that in themselves.

---

## Dependencies to Install

```bash
npm install stripe resend
```

---

## File Structure to Produce

```
app/
  api/
    donate/
      route.ts
    webhook/
      route.ts
    verify-session/
      route.ts
lib/
  stripe.ts
  resend.ts
types/
  donation.ts
.env.example
```

Nothing outside this structure. Do not create or modify any page files,
components, layout files, or config files.

---

## Stripe Webhook — Local Testing Note

Stripe cannot reach localhost. To test webhooks locally, use the Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/webhook
```

The CLI will output a temporary webhook signing secret — use that as
`STRIPE_WEBHOOK_SECRET` in `.env.local` during development only.

---

## Test Cards (Stripe Test Mode)

| Scenario | Card Number |
|---|---|
| Payment succeeds | `4242 4242 4242 4242` |
| Payment declined | `4000 0000 0000 0002` |
| 3D Secure required | `4000 0025 0000 3155` |

Expiry: any future date. CVC: any 3 digits.

---

## Deployment Checklist (for developer, not Claude Code)

- [ ] Set all env vars in Vercel dashboard
- [ ] Register webhook endpoint in Stripe dashboard: `https://your-domain.com/api/webhook`
- [ ] Set the live webhook secret as STRIPE_WEBHOOK_SECRET in Vercel
- [ ] Switch from test keys (sk_test_) to live keys (sk_live_) before go-live
- [ ] Send a real £1 test donation before launch

