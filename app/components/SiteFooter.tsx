import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-top">
        <div className="footer-brand">
          <Image src="/smf-emblem.png" alt="Support &amp; Mentor Foundation" width={52} height={52} />
          <div className="fb-name">Support &amp; Mentor Foundation</div>
          <p>Protecting, mentoring, and empowering vulnerable children and young people across The Gambia.</p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/leadership">Leadership</Link></li>
            <li><Link href="/programs">Our programs</Link></li>
            <li><Link href="/get-involved">Get involved</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get Involved</h4>
          <ul>
            <li><Link href="/get-involved#donate">Donate</Link></li>
            <li><Link href="/get-involved#volunteer">Volunteer</Link></li>
            <li><Link href="/get-involved#partner">Partner with us</Link></li>
            <li><Link href="/get-involved#fundraise">Fundraise</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h4>Contact</h4>
          <div className="fc-row">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
            </svg>
            <span>+220 234 2800<br />+220 665 4300</span>
          </div>
          <div className="fc-row">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 6 10 7 10-7" />
            </svg>
            <span>
              <a href="mailto:info@supportandmentorfoundation.org">
                info@supportandmentorfoundation.org
              </a>
            </span>
          </div>
          <div className="fc-row">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>OIC Road, Bijilo<br />The Gambia</span>
          </div>
        </div>
      </div>

      <div className="container-wide footer-bottom">
        <span>© 2026 Support &amp; Mentor Foundation. All rights reserved.</span>
        <div className="fb-links">
          <a href="#">Privacy</a>
          <a href="#">Safeguarding policy</a>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
