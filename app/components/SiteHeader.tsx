"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <nav className="nav container-wide">
        <Link className="nav-brand" href="/">
          <Image
            src="/smf-emblem.png"
            alt="Support &amp; Mentor Foundation logo"
            width={48}
            height={48}
            style={{ height: 48, width: "auto" }}
          />
          <span className="nb-text">
            <span className="nb-name">Support &amp; Mentor Foundation</span>
            <span className="nb-sub">Children &amp; Young People · The Gambia</span>
          </span>
        </Link>

        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
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
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
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
    </header>
  );
}
