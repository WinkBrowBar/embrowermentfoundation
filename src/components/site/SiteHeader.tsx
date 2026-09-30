import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Menu, X } from "lucide-react";
import { navLinks, EIN } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 1180 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="bar">
        <Link to="/" className="logo-tab" aria-label="Embrowerment Foundation — home">
          <Wordmark />
        </Link>

        <nav className="primary-nav" aria-label="Main navigation">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="nav-link"
              activeProps={{ className: "is-active" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="bar-actions">
          <Link to="/donate" className="donate-block">
            Donate
            <Heart size={18} strokeWidth={1.8} aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <div className="container">
          <Link
            to="/"
            className="mobile-link"
            activeOptions={{ exact: true }}
            activeProps={{ className: "is-active" }}
          >
            <span className="mobile-num">00</span>Home
          </Link>
          {navLinks.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="mobile-link"
              activeProps={{ className: "is-active" }}
            >
              <span className="mobile-num">{String(i + 1).padStart(2, "0")}</span>
              {l.label}
            </Link>
          ))}
          <Link to="/donate" className="btn btn-gold btn-block mobile-donate">
            Donate
          </Link>
          <p className="mobile-meta">IRS-Recognized 501(c)(3) · EIN {EIN}</p>
        </div>
      </div>
    </header>
  );
}
