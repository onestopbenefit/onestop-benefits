import BrandLogo from "./BrandLogo.jsx";
import { AGENT } from "../data/agent.js";

export default function Footer({ onNav, onQuote }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <BrandLogo className="footer-logo" height={32} />
            <p className="footer-about">
              Independent, local insurance for Vineland, NJ and the surrounding area — auto, home,
              life, business and more, all with one agent you can actually reach.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <a onClick={() => onNav("top")}>Home</a>
            <a onClick={() => onNav("products")}>Insurance Products</a>
            <a onClick={() => onNav("about")}>About</a>
            <a onClick={() => onNav("contact")}>Contact</a>
            <a onClick={onQuote}>Get a Quote</a>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href={`tel:+1${AGENT.phoneRaw}`}>{AGENT.phone}</a>
            {AGENT.email && <a href={`mailto:${AGENT.email}`}>{AGENT.email}</a>}
            <span className="li">{AGENT.address}</span>
            <span className="li">{AGENT.apptHours}</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-fine">
            © {year} {AGENT.brandName} · {AGENT.name}. NJ license #{AGENT.license}.
            Coverage is subject to terms, conditions, and availability and may vary. This site is
            for informational purposes only and is not an offer of coverage or a contract.
          </p>
          <p className="footer-fine">Licensed in New Jersey · Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
