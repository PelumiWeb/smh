"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/programs", label: "Programs" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      {/* ── Main bar ── */}
      <nav className="nav container-wide">
        <Link className="nav-brand" href="/" onClick={close}>
          <Image
            src="/smf-emblem.png"
            alt="Support & Mentor Foundation logo"
            width={48}
            height={48}
            style={{ height: 48, width: "auto" }}
          />
          <span className="nb-text">
            <span className="nb-name">Support &amp; Mentor Foundation</span>
            <span className="nb-sub">
              Children &amp; Young People · The Gambia
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={pathname === href ? "active" : ""}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link className="btn btn-primary" href="/get-involved#donate">
            Donate
          </Link>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer — lives inside the sticky header, no fixed/transform issues ── */}
      <div
        className={`mobile-drawer${open ? " mobile-drawer--open" : ""}`}
        aria-hidden={!open}>
        <ul className="mobile-drawer-links container-wide ">
          {NAV_LINKS.map(({ href, label }) => (
            <li className="px-4" key={href}>
              <Link
                href={href}
                className={pathname === href ? "active" : ""}
                onClick={close}>
                {label}
              </Link>
            </li>
          ))}
          <li className="mobile-drawer-cta">
            <Link
              className="btn btn-primary"
              href="/get-involved#donate"
              onClick={close}
              style={{ width: "100%", justifyContent: "center", paddingInline: "1rem" }}>
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
