import { Link } from "@tanstack/react-router";
import { CONTACT_EMAIL, EIN, navLinks } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Wordmark size="lg" />
            <p className="footer-tag">
              Empowering Confidence. Creating Opportunity. Strengthening Communities.
            </p>
          </div>
          <div className="footer-cols">
            <div>
              <h2 className="footer-heading">Explore</h2>
              <ul>
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/donate">Donate</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="footer-heading">Connect</h2>
              <ul>
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
                <li>
                  <Link to="/partnerships">Partner With Us</Link>
                </li>
                <li>
                  <Link to="/contact" search={{ reason: "volunteer" }}>
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2026 Embrowerment® Foundation Inc. All Rights Reserved. Embrowerment Foundation is an
            IRS-recognized 501(c)(3) public charity. Donations are tax-deductible to the fullest
            extent permitted by law. EIN {EIN}. EMBROWERMENT® is a registered trademark.
          </p>
          <nav aria-label="Legal" className="footer-legal">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Use</Link>
            <Link to="/contact">Accessibility</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
