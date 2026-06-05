import { Resend } from "resend";

let _resend: Resend | undefined;

function getResend(): Resend {
  if (_resend) return _resend;
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY environment variable is not set.");
  }
  _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

export async function sendDonationReceipt({
  to,
  donorName,
  amountGBP,
}: {
  to: string;
  donorName: string;
  amountGBP: number;
}): Promise<void> {
  await getResend().emails.send({
    from: "SMF <onboarding@resend.dev>",
    replyTo: "lamin.dibbasmf@gmail.com",
    to,
    subject: "Thank you for your donation — Support & Mentor Foundation",
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1B2230;">
        <h2 style="color:#16235B;">Thank you, ${donorName}.</h2>
        <p>
          We have received your generous donation of
          <strong>£${amountGBP.toFixed(2)}</strong> to
          Support &amp; Mentor Foundation.
        </p>
        <p>
          Your contribution goes directly towards protecting, mentoring, and
          empowering vulnerable children and young people across The Gambia —
          keeping them safe, in school, and equipped for independent,
          dignified lives.
        </p>
        <p>
          We are grateful for your support and will put it to work where it
          is needed most.
        </p>
        <p style="margin-top:32px;color:#777E8D;font-size:0.875rem;">
          Support &amp; Mentor Foundation · OIC Road, Bijilo, The Gambia<br>
          <a href="mailto:Supportandmentorfoundation@gmail.com" style="color:#2C6FB5;">
           Supportandmentorfoundation@gmail.com
          </a>
        </p>
      </div>
    `,
  });
}
