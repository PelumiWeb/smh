import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import DonatePanel from "../components/DonatePanel";

export const metadata: Metadata = {
  title: "Get Involved — Support & Mentor Foundation",
  description:
    "Whether you give, volunteer, partner, or fundraise, your support helps a young person in The Gambia stay safe, stay in school, and build a future.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <ScrollReveal />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container ph-inner">
          <nav className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Get Involved</span>
          </nav>
          <h1 className="h1">There&apos;s a place for you in this work.</h1>
          <p className="lead">
            Whether you give, volunteer, partner, or fundraise, your support
            helps a young person in The Gambia stay safe, stay in school, and
            build a future.
          </p>
        </div>
      </section>

      {/* WAYS TO HELP */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            <Link className="involve-card reveal" href="#donate">
              <span className="ic-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
                </svg>
              </span>
              <h3>Donate</h3>
              <p>A one-time or monthly gift funds scholarships, protection, and skills training.</p>
              <span className="link-arrow">
                Give now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

            <Link className="involve-card reveal" href="#volunteer">
              <span className="ic-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
                </svg>
              </span>
              <h3>Volunteer</h3>
              <p>Mentor a young person, share a skill, or lend your time to community programs.</p>
              <span className="link-arrow">
                Join us
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

            <Link className="involve-card reveal" href="#partner">
              <span className="ic-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  <rect x="4" y="11" width="16" height="9" rx="2" />
                </svg>
              </span>
              <h3>Partner</h3>
              <p>Organizations and institutions can co-design and co-fund programs with us.</p>
              <span className="link-arrow">
                Work with us
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

            <Link className="involve-card reveal" href="#fundraise">
              <span className="ic-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l4-4 3 3 5-6" />
                </svg>
              </span>
              <h3>Fundraise</h3>
              <p>Rally your friends, school, or workplace around a campaign for SMF.</p>
              <span className="link-arrow">
                Start a campaign
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* DONATE PANEL */}
      <section className="section" id="donate">
        <div className="container">
          <div className="donate-wrap reveal">
            <div>
              <p className="eyebrow" style={{ color: "var(--orange)" }}>
                Make a gift
              </p>
              <h2 className="h2">Your gift goes further than you think.</h2>
              <p className="lead" style={{ color: "rgba(255,255,255,.82)" }}>
                Every contribution is invested directly into programs that
                protect, educate, and empower children and young people across
                The Gambia.
              </p>
              <ul className="give-list">
                <li>
                  <strong>A school kit</strong> keeps a child learning for a term.
                </li>
                <li>
                  <strong>A mentoring place</strong> pairs a young person with
                  guidance and support.
                </li>
                <li>
                  <strong>A skills course</strong> opens a path to independence
                  and income.
                </li>
              </ul>
            </div>
            <DonatePanel />
          </div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section
        className="section"
        id="volunteer"
        style={{ background: "var(--cream)" }}
      >
        <div className="container split">
          <div className="split-copy reveal">
            <p className="eyebrow">Volunteer</p>
            <h2 className="h2">Give your time, share your skills.</h2>
            <p className="lead">
              We welcome volunteers and mentors who can support our programs —
              from tutoring and mentoring to community outreach and events.
            </p>
            <ul className="check-list" style={{ marginTop: 24 }}>
              <li>Mentor a young person one-to-one</li>
              <li>Support tutoring and skills sessions</li>
              <li>Help with community awareness and events</li>
              <li>Offer professional or technical expertise</li>
            </ul>
            <Link
              className="btn btn-navy"
              href="/contact"
              style={{ marginTop: 10, display: "inline-flex" }}
            >
              Register your interest
            </Link>
          </div>
          <div className="split-media reveal">
            <div className="split-img">
              <Image
                src="/photos/cleanup-wheelbarrow.jpg"
                alt="SMF volunteers working together at a community wheelbarrow cleanup in The Gambia"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, (max-width: 1320px) 46vw, 560px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="section" id="partner">
        <div className="container split flip">
          <div className="split-media reveal">
            <div className="split-img">
              <Image
                src="/photos/redcross-courtyard.jpg"
                alt="SMF and Red Cross partners collaborating in a courtyard meeting"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, (max-width: 1320px) 46vw, 560px"
              />
            </div>
          </div>
          <div className="split-copy reveal">
            <p className="eyebrow">Partner with us</p>
            <h2 className="h2">Build resilient communities, together.</h2>
            <p className="lead">
              We work with families, community leaders, government, civil
              society, and international partners to design programs that
              respond to local needs and align with national and global
              priorities.
            </p>
            <p className="muted" style={{ marginTop: 18 }}>
              If your organization shares our commitment to children and young
              people, we&apos;d love to explore how we can collaborate.
            </p>
            <Link
              className="btn btn-navy"
              href="/contact"
              style={{ marginTop: 22, display: "inline-flex" }}
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      {/* FUNDRAISE */}
      <section
        className="section"
        id="fundraise"
        style={{ background: "var(--cream)" }}
      >
        <div className="container center" style={{ maxWidth: 720 }}>
          <p className="eyebrow center" style={{ justifyContent: "center" }}>
            Fundraise
          </p>
          <h2 className="h2 reveal">
            Turn your community into a force for good.
          </h2>
          <p
            className="lead reveal"
            style={{ margin: "16px auto 28px", maxWidth: "54ch" }}
          >
            Run a campaign at your school, workplace, place of worship, or
            among friends. We&apos;ll help you set a goal and share the impact.
          </p>
          <Link className="btn btn-primary btn-lg reveal" href="/contact">
            Talk to us about fundraising
          </Link>
        </div>
      </section>
    </>
  );
}
