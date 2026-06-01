import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — Support & Mentor Foundation",
  description:
    "Learn about the vision, mission, and aims of Support & Mentor Foundation — protecting, mentoring, and empowering vulnerable children and young people in The Gambia.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container ph-inner">
          <nav className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </nav>
          <h1 className="h1">Supporting, mentoring, and empowering young lives.</h1>
          <p className="lead">
            Support &amp; Mentor Foundation (SMF) is a non-governmental, non-profit
            organization dedicated to advancing the well-being, protection, and
            empowerment of vulnerable children and young people in The Gambia.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section className="section">
        <div className="container split narrow flip">
          <div className="split-media reveal">
            <div
              className="split-img img-placeholder"
              aria-label="Photo placeholder — young people / classroom / community"
            />
          </div>
          <div className="split-copy reveal">
            <p className="eyebrow">Our vision</p>
            <h2 className="h2">A society where every child can grow with dignity.</h2>
            <p className="lead">
              We envision a society in which every child and young person —
              regardless of background, gender, ability, or socio-economic status
              — is protected from harm, supported to grow with dignity, and given
              equal opportunities to reach their full potential.
            </p>
            <p className="muted" style={{ marginTop: 18 }}>
              This vision reflects our commitment to social justice, inclusion, and
              the belief that every young person has inherent value and the right to
              a safe, supportive environment in which to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container split narrow">
          <div className="split-copy reveal">
            <p className="eyebrow">Our mission</p>
            <h2 className="h2">Comprehensive, sustainable support for the long term.</h2>
            <p className="lead">
              We support, mentor, and empower children and young people through
              interventions that address both immediate needs and long-term
              development.
            </p>
            <p className="muted" style={{ marginTop: 18 }}>
              We improve access to quality education, strengthen child-protection
              systems, and equip young people with the life skills to make informed
              decisions and build independent, productive lives. Through mentorship,
              psychosocial support, and guidance, we foster confidence, resilience,
              leadership, and positive values.
            </p>
          </div>
          <div className="split-media reveal">
            <div
              className="split-img img-placeholder"
              aria-label="Photo placeholder — mentorship / guidance / skills training"
            />
          </div>
        </div>
      </section>

      {/* AIMS */}
      <section className="section">
        <div className="container">
          <div className="sec-head reveal" style={{ marginBottom: 54 }}>
            <p className="eyebrow">Our aims</p>
            <h2 className="h1">What we set out to achieve.</h2>
            <p className="lead maxw-60">
              A set of interconnected aims designed to promote the holistic
              development of children and young people.
            </p>
          </div>
          <div className="aims">
            <div className="aim reveal">
              <h3>Educational support</h3>
              <p>
                Scholarships, learning materials, tutoring, and school-retention
                initiatives that keep children in education.
              </p>
            </div>
            <div className="aim reveal">
              <h3>Life skills &amp; leadership</h3>
              <p>
                Leadership development, entrepreneurship, and vocational training
                to enhance employability and self-reliance.
              </p>
            </div>
            <div className="aim reveal">
              <h3>Protection from harm</h3>
              <p>
                Shielding children from abuse, exploitation, neglect, and harmful
                practices through awareness, advocacy, and engagement.
              </p>
            </div>
            <div className="aim reveal">
              <h3>Inclusion &amp; equal participation</h3>
              <p>
                Promoting the inclusion of marginalized and disadvantaged groups,
                ensuring no child or young person is left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container split flip">
          <div className="split-media reveal">
            <div
              className="split-img img-placeholder"
              aria-label="Photo placeholder — community leaders / partners / families"
            />
          </div>
          <div className="split-copy reveal">
            <p className="eyebrow">Community-based</p>
            <h2 className="h2">Sustainable change through local ownership.</h2>
            <p className="lead">
              We recognize that lasting change is best achieved through
              collaboration. We work closely with families, community leaders,
              government institutions, civil society organizations, and
              international partners.
            </p>
            <p className="muted" style={{ marginTop: 18 }}>
              Together we design and implement programs that respond to local needs
              while aligning with national and global development priorities —
              building resilient communities that protect children now and into the
              future.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section">
        <div className="container">
          <div className="lead-block reveal">
            <svg
              className="quote-mark"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="var(--accent)"
            >
              <path d="M10 7H6a3 3 0 0 0-3 3v7h7v-7H6c0-1 .5-2 2-2zm10 0h-4a3 3 0 0 0-3 3v7h7v-7h-4c0-1 .5-2 2-2z" />
            </svg>
            <p
              className="pq-text"
              style={{ textAlign: "left", maxWidth: "60ch" }}
            >
              We remain committed to creating lasting positive impact, nurturing
              hope, and empowering the next generation to lead meaningful,
              dignified, and productive lives.
            </p>
            <div className="lead-sign">
              <div className="leader-avatar" />
              <div>
                <div className="pq-name">Mustapha Bah</div>
                <div className="pq-role">
                  Secretary General, Support &amp; Mentor Foundation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2 className="h1" style={{ color: "#fff" }}>
              Help us reach more young people.
            </h2>
            <p
              className="lead"
              style={{ color: "rgba(255,255,255,.82)", maxWidth: "46ch" }}
            >
              Join a community of supporters investing in the safety, education,
              and futures of Gambian children.
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
              Get involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
