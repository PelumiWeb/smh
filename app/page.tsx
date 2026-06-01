import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";

export const metadata: Metadata = {
  title: "Support & Mentor Foundation — Children & Young People, The Gambia",
  description:
    "SMF works alongside families and communities across The Gambia to keep young people safe, in school, and equipped for independent, dignified lives.",
};

export default function HomePage() {
  return (
    <>
      <ScrollReveal />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container-wide hero-inner">
          <div className="hero-copy">
            <p className="eyebrow" style={{ color: "var(--orange)" }}>
              A non-profit for children &amp; young people
            </p>
            <h1 className="display">
              Every child deserves protection, guidance, and a fair chance to
              thrive.
            </h1>
            <p className="lead">
              Support &amp; Mentor Foundation works alongside families and
              communities across The Gambia to keep young people safe, in
              school, and equipped for independent, dignified lives.
            </p>
            <div className="hero-cta">
              <Link
                className="btn btn-primary btn-lg"
                href="/get-involved#donate"
              >
                Support our work
              </Link>
              <Link
                className="btn btn-outline-light btn-lg"
                href="/programs"
              >
                See our programs
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <div
              className="hero-img img-placeholder"
              aria-label="Photo placeholder — children / youth in a Gambian community"
            />
            <div className="hero-badge">
              <span className="hb-mark">SMF</span>
              <span className="hb-text">
                <strong>Based in Bijilo</strong>
                Serving communities across The Gambia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION INTRO */}
      <section className="section intro">
        <div className="container">
          <div className="intro-grid">
            <div className="reveal">
              <p className="eyebrow">Who we are</p>
              <h2 className="h1">
                A foundation built on dignity, inclusion, and opportunity.
              </h2>
            </div>
            <div className="reveal">
              <p className="lead">
                SMF is a non-governmental, non-profit organization dedicated to
                advancing the well-being, protection, and empowerment of
                vulnerable children and young people.
              </p>
              <p className="muted" style={{ marginTop: 18 }}>
                We believe every young person — regardless of background,
                gender, ability, or circumstance — has inherent value and the
                right to a safe, supportive environment in which to grow.
              </p>
              <Link
                className="link-arrow"
                href="/about"
                style={{ marginTop: 22, display: "inline-flex" }}
              >
                Read our story
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="pillars grid grid-3">
            <div className="pillar reveal">
              <span className="pillar-word">Support</span>
              <p>
                Meeting immediate needs — education, protection, and
                psychosocial care — so no child is left behind.
              </p>
            </div>
            <div className="pillar reveal">
              <span className="pillar-word">Mentor</span>
              <p>
                Guidance and role models that build confidence, resilience,
                leadership, and positive values.
              </p>
            </div>
            <div className="pillar reveal">
              <span className="pillar-word">Empower</span>
              <p>
                Life skills and opportunity that help young people make informed
                decisions and lead productive lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section
        className="section programs-preview"
        style={{ background: "var(--cream)" }}
      >
        <div className="container">
          <div className="sec-head reveal">
            <p className="eyebrow">What we do</p>
            <h2 className="h1">Four interconnected areas of work.</h2>
            <p className="lead maxw-60">
              Our programs address both immediate needs and long-term
              development — designed together with the communities we serve.
            </p>
          </div>

          <div className="grid grid-4" style={{ marginTop: 54 }}>
            <article className="card prog-card reveal">
              <div className="pc-body">
                <span className="pc-icon">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M2 7l10-4 10 4-10 4z" />
                    <path d="M6 10v6c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-6" />
                  </svg>
                </span>
                <h3>Education Support</h3>
                <p>
                  Scholarships, learning materials, tutoring, and
                  school-retention initiatives that keep children learning.
                </p>
              </div>
            </article>

            <article className="card prog-card reveal">
              <div className="pc-body">
                <span className="pc-icon">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
                  </svg>
                </span>
                <h3>Child Protection</h3>
                <p>
                  Safeguarding children from abuse, exploitation, neglect, and
                  harmful practices through advocacy and awareness.
                </p>
              </div>
            </article>

            <article className="card prog-card reveal">
              <div className="pc-body">
                <span className="pc-icon">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10.5c-.6.6-1 1.3-1 2.5H9c0-1.2-.4-1.9-1-2.5A6 6 0 0 1 12 3z" />
                  </svg>
                </span>
                <h3>Life Skills &amp; Leadership</h3>
                <p>
                  Leadership development, entrepreneurship, and vocational
                  training that build employability and self-reliance.
                </p>
              </div>
            </article>

            <article className="card prog-card reveal">
              <div className="pc-body">
                <span className="pc-icon">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <circle cx="9" cy="8" r="3" />
                    <circle cx="17" cy="9" r="2.4" />
                    <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M15 18c0-2 .8-3.4 2-4 2.2 0 4 1.6 4 4" />
                  </svg>
                </span>
                <h3>Inclusion &amp; Equity</h3>
                <p>
                  Equal participation for marginalized and disadvantaged groups,
                  ensuring no young person is overlooked.
                </p>
              </div>
            </article>
          </div>

          <div className="center reveal" style={{ marginTop: 46 }}>
            <Link className="btn btn-outline" href="/programs">
              Explore all programs
            </Link>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section approach">
        <div className="container approach-grid">
          <div className="approach-media reveal">
            <div
              className="approach-img img-placeholder"
              aria-label="Photo placeholder — community meeting / families / local partners"
            />
          </div>
          <div className="approach-copy reveal">
            <p className="eyebrow">Our approach</p>
            <h2 className="h1">
              Lasting change is built with communities, not for them.
            </h2>
            <p className="lead">
              We work closely with families, community leaders, government
              institutions, civil society, and international partners to design
              programs that respond to local needs.
            </p>
            <ul className="check-list">
              <li>Local ownership and collaboration at every stage</li>
              <li>
                Programs aligned with national and global development priorities
              </li>
              <li>
                Resilient communities that protect children now and into the
                future
              </li>
            </ul>
            <Link
              className="link-arrow"
              href="/get-involved#partner"
              style={{ marginTop: 8, display: "inline-flex" }}
            >
              Partner with us
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="stats-band">
        <div className="container-wide">
          <p
            className="eyebrow center"
            style={{ color: "var(--orange)", justifyContent: "center" }}
          >
            Our focus, in motion
          </p>
          <div className="grid grid-4 stats-grid">
            <div className="stat reveal">
              <div className="stat-num">Education</div>
              <div className="stat-label">
                Keeping children in school and learning
              </div>
            </div>
            <div className="stat reveal">
              <div className="stat-num">Protection</div>
              <div className="stat-label">
                Safeguarding against harm and exploitation
              </div>
            </div>
            <div className="stat reveal">
              <div className="stat-num">Skills</div>
              <div className="stat-label">
                Building independence and self-reliance
              </div>
            </div>
            <div className="stat reveal">
              <div className="stat-num">Inclusion</div>
              <div className="stat-label">
                Reaching the most marginalized first
              </div>
            </div>
          </div>
          <p className="stats-note center muted">
            Replace with verified impact figures once available — e.g. children
            supported, scholarships awarded, communities reached.
          </p>
        </div>
      </section>

      {/* QUOTE */}
      <section className="section" style={{ background: "var(--bone)" }}>
        <div className="container">
          <blockquote className="pull-quote reveal">
            <svg
              className="quote-mark"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10 7H6a3 3 0 0 0-3 3v7h7v-7H6c0-1 .5-2 2-2zm10 0h-4a3 3 0 0 0-3 3v7h7v-7h-4c0-1 .5-2 2-2z" />
            </svg>
            <p className="pq-text">
              Every young person has the right to a safe, supportive environment
              in which to thrive — and the potential to become an active
              contributor to their community.
            </p>
            <footer className="pq-by">
              <span className="pq-name">Mustapha Bah</span>
              <span className="pq-role">
                Secretary General, Support &amp; Mentor Foundation
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2 className="h1" style={{ color: "#fff" }}>
              Stand with the next generation.
            </h2>
            <p
              className="lead"
              style={{ color: "rgba(255,255,255,.82)", maxWidth: "48ch" }}
            >
              Your support helps a child stay in school, stay safe, and build a
              future. Every contribution moves a young life forward.
            </p>
          </div>
          <div className="cta-actions">
            <Link
              className="btn btn-primary btn-lg"
              href="/get-involved#donate"
            >
              Donate today
            </Link>
            <Link
              className="btn btn-outline-light btn-lg"
              href="/get-involved"
            >
              Become a volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
