import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Programs — Support & Mentor Foundation",
  description:
    "Our work spans four interconnected areas — education, child protection, life skills, and inclusion — designed with communities to address immediate needs while investing in long-term development.",
};

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list" style={{ marginTop: 24 }}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <ScrollReveal />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container ph-inner">
          <nav className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Programs</span>
          </nav>
          <h1 className="h1">
            Programs that meet today&apos;s needs and build tomorrow&apos;s
            leaders.
          </h1>
          <p className="lead">
            Our work spans four interconnected areas — designed with communities
            to address immediate needs while investing in long-term development.
          </p>
        </div>
      </section>

      {/* 01 EDUCATION */}
      <section className="section" id="education">
        <div className="container split">
          <div className="split-copy reveal">
            <p className="eyebrow">01 · Education Support</p>
            <h2 className="h2">Keeping children in school and learning.</h2>
            <p className="lead">
              We improve access to quality education and help children stay
              enrolled — removing the barriers that push young people out of the
              classroom.
            </p>
            <CheckList
              items={[
                "Scholarships and school-fee assistance",
                "Learning materials and supplies",
                "Tutoring and academic mentoring",
                "School-retention and re-enrolment initiatives",
              ]}
            />
          </div>
          <div className="split-media reveal">
            <div
              className="split-img img-placeholder"
              aria-label="Photo placeholder — students / classroom / learning"
            />
          </div>
        </div>
      </section>

      {/* 02 PROTECTION */}
      <section
        className="section"
        id="protection"
        style={{ background: "var(--cream)" }}
      >
        <div className="container split flip">
          <div className="split-media reveal">
            <div
              className="split-img img-placeholder"
              aria-label="Photo placeholder — safeguarding / community awareness"
            />
          </div>
          <div className="split-copy reveal">
            <p className="eyebrow">02 · Child Protection</p>
            <h2 className="h2">Safe from harm, exploitation, and neglect.</h2>
            <p className="lead">
              We strengthen child-protection systems and raise awareness so
              children are shielded from abuse, exploitation, neglect, and
              harmful practices.
            </p>
            <CheckList
              items={[
                "Community awareness and advocacy campaigns",
                "Strengthening local child-protection systems",
                "Psychosocial support for vulnerable children",
                "Engagement with families and community leaders",
              ]}
            />
          </div>
        </div>
      </section>

      {/* 03 LIFE SKILLS */}
      <section className="section" id="skills">
        <div className="container split">
          <div className="split-copy reveal">
            <p className="eyebrow">03 · Life Skills &amp; Leadership</p>
            <h2 className="h2">
              Equipped to build independent, productive lives.
            </h2>
            <p className="lead">
              We help young people develop the skills and confidence to make
              informed decisions, lead, and earn a living.
            </p>
            <CheckList
              items={[
                "Leadership development and mentorship",
                "Entrepreneurship and financial literacy",
                "Vocational and skills training",
                "Confidence, resilience, and positive values",
              ]}
            />
          </div>
          <div className="split-media reveal">
            <div
              className="split-img img-placeholder"
              aria-label="Photo placeholder — vocational training / youth leadership"
            />
          </div>
        </div>
      </section>

      {/* 04 INCLUSION */}
      <section
        className="section"
        id="inclusion"
        style={{ background: "var(--cream)" }}
      >
        <div className="container split flip">
          <div className="split-media reveal">
            <div
              className="split-img img-placeholder"
              aria-label="Photo placeholder — inclusive group / diverse young people"
            />
          </div>
          <div className="split-copy reveal">
            <p className="eyebrow">04 · Inclusion &amp; Equity</p>
            <h2 className="h2">No child or young person left behind.</h2>
            <p className="lead">
              We promote the inclusion and equal participation of marginalized
              and disadvantaged groups in every program we run.
            </p>
            <CheckList
              items={[
                "Reaching the most marginalized first",
                "Equal participation regardless of ability or status",
                "Gender-inclusive program design",
                "Removing barriers to opportunity",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2 className="h1" style={{ color: "#fff" }}>
              Power a program that changes a life.
            </h2>
            <p
              className="lead"
              style={{ color: "rgba(255,255,255,.82)", maxWidth: "46ch" }}
            >
              Your support keeps children learning, safe, and ready for the
              future.
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
              href="/get-involved#partner"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
