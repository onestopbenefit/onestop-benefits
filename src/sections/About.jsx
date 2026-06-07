import Button from "../components/Button.jsx";
import { IcPin, IcShield, IcPhone, IcCheck } from "../components/icons.jsx";
import { AGENT } from "../data/agent.js";

const SPECIALTIES = [
  "Auto & Home bundles",
  "Life & financial planning",
  "Small-business coverage",
  "Renters & condo",
];

export default function About({ onQuote, onContact }) {
  return (
    <section id="about">
      {/* full-width brand banner with headshot */}
      <div className="about-banner">
        <div className="about-banner-bg" aria-hidden="true"></div>
        <img className="about-avatar" src={AGENT.photo} alt={`${AGENT.name}, ${AGENT.title}`} loading="lazy" decoding="async" />
        <div className="about-banner-overlay">
          <div className="wrap about-banner-inner">
            <span className="pill"><IcPin /> Serving {AGENT.states.join(", ")}</span>
            <h1>{AGENT.name}</h1>
            <p className="role">{AGENT.title}</p>
          </div>
        </div>
      </div>

      {/* bio + facts */}
      <div className="section" style={{ background: "#fff" }}>
        <div className="wrap about-body">
          <div className="about-prose">
            <span className="eyebrow">About me</span>
            <h2>A neighbor you can call your insurance agent.</h2>
            <p className="first">
              I'm {AGENT.name}, a local insurance agent here in Vineland. My job is simple: help you
              figure out what coverage actually fits your life — your car, your home, your business,
              or the people who depend on you.
            </p>
            <p>
              I'll walk you through your options in plain English so you know exactly what you're
              paying for. Give me a call and let's talk.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <Button size="lg" icon={<IcShield />} onClick={onQuote}>Get a Quote</Button>
              <Button size="lg" variant="secondary" icon={<IcPhone />} onClick={onContact}>Contact Me</Button>
            </div>
          </div>

          <aside className="about-side">
            <div className="fact-card">
              <h4>NJ License</h4>
              <div className="big">#{AGENT.license}</div>
              <p style={{ fontSize: "13.5px", color: "var(--muted)", marginTop: "6px" }}>Licensed insurance producer</p>
            </div>
            <div className="fact-card">
              <h4>Licensed in</h4>
              <div className="chips">
                {AGENT.states.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
            <div className="fact-card">
              <h4>Specialties</h4>
              <ul className="spec-list">
                {SPECIALTIES.map((s) => <li key={s}><IcCheck /> {s}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
