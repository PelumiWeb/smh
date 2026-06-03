export interface DonationRequest {
  amount: number; // whole GBP, e.g. 10
  donorName: string;
  donorEmail: string;
}

export interface DonationSession {
  sessionId: string;
  url: string;
}
