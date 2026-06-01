import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Support & Mentor Foundation",
  description:
    "Questions, partnership ideas, volunteering, or media — reach out and a member of our team will respond.",
};

export default function ContactPage() {
  return (
    <>
      <ScrollReveal />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container ph-inner">
          <nav className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </nav>
          <h1 className="h1">Get in touch.</h1>
          <p className="lead">
            Questions, partnership ideas, volunteering, or media — we&apos;d
            love to hear from you. Reach out and a member of our team will
            respond.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          {/* FORM */}
          <div className="reveal">
            <h2 className="h2" style={{ marginBottom: 8 }}>
              Send us a message
            </h2>
            <p className="muted" style={{ marginBottom: 28 }}>
              Fields marked with * are required.
            </p>
            <ContactForm />
          </div>

          {/* DETAILS */}
          <aside className="reveal contact-aside">
            <h2 className="h2" style={{ marginBottom: 8 }}>
              Reach us directly
            </h2>

            <div className="contact-tile">
              <span className="ct-ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                </svg>
              </span>
              <div>
                <h4>Phone</h4>
                <p>+220 234 2800<br />+220 665 4300</p>
              </div>
            </div>

            <div className="contact-tile">
              <span className="ct-ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 6 10 7 10-7" />
                </svg>
              </span>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:info@supportandmentorfoundation.org">
                    info@supportandmentorfoundation.org
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-tile">
              <span className="ct-ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <h4>Office</h4>
                <p>OIC Road, Bijilo<br />The Gambia</p>
              </div>
            </div>

            <div
              className="contact-map img-placeholder"
              aria-label="Map placeholder — OIC Road, Bijilo"
            />
          </aside>
        </div>
      </section>
    </>
  );
}
