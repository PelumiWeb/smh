import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Leadership — Support & Mentor Foundation",
  description:
    "Meet the team behind Support & Mentor Foundation — experienced leaders united by a commitment to protecting and empowering young people across The Gambia.",
};

interface TeamMember {
  photo: string;
  alt: string;
  dept: string;
  role: string;
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="team-card reveal">
      <div className="team-photo">
        <Image
          src={member.photo}
          alt={member.alt}
          fill
          style={{ objectFit: "cover", objectPosition: "top center" }}
          sizes="(max-width: 440px) 100vw, (max-width: 760px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <span className="tc-dept">{member.dept}</span>
      <span className="tc-role">{member.role}</span>
    </article>
  );
}

const EXEC: TeamMember[] = [
  {
    photo: "/team/exec-director.jpg",
    alt: "Executive Director of Support & Mentor Foundation",
    dept: "Executive Office",
    role: "Executive Director",
  },
  {
    photo: "/team/deputy-exec-director.jpg",
    alt: "Deputy Executive Director of Support & Mentor Foundation",
    dept: "Executive Office",
    role: "Deputy Executive Director",
  },
];

const DIRECTORATE: TeamMember[] = [
  {
    photo: "/team/secretary-general.jpg",
    alt: "Secretary General & Partnership",
    dept: "Partnerships",
    role: "Secretary General & Partnership",
  },
  {
    photo: "/team/deputy-secretary.jpg",
    alt: "Deputy Secretary & Partnership Director",
    dept: "Partnerships",
    role: "Deputy Secretary & Partnership Director",
  },
  {
    photo: "/team/finance-director.jpg",
    alt: "Finance Director",
    dept: "Finance & Admin",
    role: "Finance Director",
  },
  {
    photo: "/team/deputy-finance.jpg",
    alt: "Deputy Finance & Admin",
    dept: "Finance & Admin",
    role: "Deputy Finance & Admin",
  },
  {
    photo: "/team/media-director.jpg",
    alt: "Media & Outreach Director",
    dept: "Media & Outreach",
    role: "Media & Outreach Director",
  },
  {
    photo: "/team/deputy-media.jpg",
    alt: "Deputy Media & Outreach",
    dept: "Media & Outreach",
    role: "Deputy Media & Outreach",
  },
  {
    photo: "/team/deputy-programs.jpg",
    alt: "Deputy Programs Director",
    dept: "Programs",
    role: "Deputy Programs Director",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <ScrollReveal />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container ph-inner">
          <nav className="crumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Leadership</span>
          </nav>
          <h1 className="h1">The people behind the mission.</h1>
          <p className="lead">
            Our leadership team brings together experience across programs,
            partnerships, finance, and outreach — united by a commitment to
            protecting and empowering young people across The Gambia.
          </p>
        </div>
      </section>

      {/* EXECUTIVE OFFICE */}
      <section className="section">
        <div className="container">
          <div className="sec-head reveal" style={{ marginBottom: 48 }}>
            <p className="eyebrow">Executive office</p>
            <h2 className="h2">Guiding our vision and direction.</h2>
          </div>
          <div className="team-exec">
            {EXEC.map((m) => (
              <TeamCard key={m.role} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTORATE */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="sec-head reveal" style={{ marginBottom: 48 }}>
            <p className="eyebrow">Directorate</p>
            <h2 className="h2">Leading our work, day to day.</h2>
            <p className="lead maxw-60">
              Directors and their deputies steward each area of the foundation
              — from partnerships and finance to programs and outreach.
            </p>
          </div>
          <div className="team-grid">
            {DIRECTORATE.map((m) => (
              <TeamCard key={m.role} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2 className="h1" style={{ color: "#fff" }}>
              Want to join the team?
            </h2>
            <p
              className="lead"
              style={{ color: "rgba(255,255,255,.82)", maxWidth: "46ch" }}
            >
              We&apos;re always looking for volunteers, mentors, and partners
              who share our commitment to young people.
            </p>
          </div>
          <div className="cta-actions">
            <Link
              className="btn btn-primary btn-lg"
              href="/get-involved#volunteer"
            >
              Get involved
            </Link>
            <Link className="btn btn-outline-light btn-lg" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
