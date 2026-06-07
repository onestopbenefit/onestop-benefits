import { useState, useEffect } from "react";
import BrandLogo from "./BrandLogo.jsx";
import Button from "./Button.jsx";
import { IcShield, IcMenu, IcClose } from "./icons.jsx";
import { NAV_LINKS } from "../data/products.js";
import { useScrolled } from "../hooks/useScrolled.js";

/* The site is a single cinematic landing page, so the header always starts
   transparent over the hero and turns solid once you scroll. */
export default function Header({ active, onNav, onQuote }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(60);

  // close the mobile menu whenever the active section changes
  useEffect(() => { setOpen(false); }, [active]);

  const go = (id) => () => {
    setOpen(false);
    if (id === "quote") onQuote();
    else onNav(id);
  };

  const cls = "header lp-header" + ((scrolled || open) ? " scrolled" : "");

  return (
    <header className={cls}>
      <div className="wrap header-inner">
        <button className="brand" onClick={() => onNav("top")} aria-label="Onestop Benefits — home">
          <BrandLogo height={46} />
        </button>

        <nav className="nav" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              className={active === l.id ? "active" : ""}
              aria-current={active === l.id ? "true" : undefined}
              onClick={go(l.id)}
            >
              {l.label}
            </a>
          ))}
          <Button size="sm" className="nav-cta" icon={<IcShield />} onClick={onQuote}>
            Get a Quote
          </Button>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <IcClose /> : <IcMenu />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {NAV_LINKS.map((l) => (
            <a key={l.id} onClick={go(l.id)}>{l.label}</a>
          ))}
          <Button className="btn-block" icon={<IcShield />} onClick={onQuote}>Get a Quote</Button>
        </div>
      )}
    </header>
  );
}
