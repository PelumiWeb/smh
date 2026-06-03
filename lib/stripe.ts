import Stripe from "stripe";

let _instance: Stripe | undefined;

export function getStripe(): Stripe {
  if (_instance) return _instance;
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY environment variable is not set.");
  }
  _instance = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-05-27.dahlia",
  });
  return _instance;
}
