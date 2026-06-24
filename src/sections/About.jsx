import { useState } from "react";
import Button from "../components/Button.jsx";
import { IcPin, IcShield, IcPhone, IcCheck, IcMail } from "../components/icons.jsx";
import { AGENT, TEAM } from "../data/agent.js";

export default function About({ onQuote, onContact }) {
  const [activeId, setActiveId] = useState(TEAM[0].id);
  const person = TEAM.find((m) => m.id === activeId) || TEAM[0];

  return (
    <section id="about">
      {/* brand banner — interactive team profile: tap a person to swap details */}
      <div className="about-banner">
        <div className="about-banner-bg" aria-hidden="true"></div>
        <div className="wrap">
          <span className="pill"><IcPin /> Serving {AGENT.states.join(", ")}</span>

          {/* person tabs */}
          <div className="team-tabs" role="tablist" aria-label="Meet the team">
            {TEAM.map((m) => (
              <button
                key={m.id}
                role="tab"
                aria-selected={m.id === activeId}
                className={"team-tab" + (m.id === activeId ? " active" : "")}
                onClick={() => setActiveId(m.id)}
              >
                <img src={m.photo} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <span className="team-tab-id">
                  <b>{m.name}</b>
                  <span>{m.position}</span>
                </span>
              </button>
            ))}
          </div>

          {/* active profile — keyed so it re-animates on switch */}
          <div className="about-banner-grid team-panel" key={person.id}>
            <div className="about-banner-text">
              <span className="team-position">{person.position}</span>
              <h2>{person.name}</h2>
              <p className="role">{person.role}</p>
              <div className="about-chips">
                {person.creds.map((c) => <span key={c}><IcShield /> {c}</span>)}
                <span><IcMail /> <a href={`mailto:${person.email}`}>{person.email}</a></span>
              </div>
            </div>
            <div className="about-banner-photo">
              <img src={person.photo} alt={`${person.name}, ${person.position}`} loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>

      {/* bio + facts for the selected person */}
      <div className="section" style={{ background: "#fff" }}>
        <div className="wrap about-body" key={person.id}>
          <div className="about-prose">
            <span className="eyebrow">About {person.first}</span>
            <h2>{person.position === "Manager"
              ? "Health coverage, made human."
              : "A neighbor you can call your insurance agent."}</h2>
            <p className="first">{person.blurb}</p>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <Button size="lg" icon={<IcShield />} onClick={onQuote}>Get a Quote</Button>
              <Button size="lg" variant="secondary" icon={<IcPhone />} onClick={onContact}>Contact Me</Button>
            </div>
          </div>

          <aside className="about-side">
            <div className="fact-card">
              <h3>Role</h3>
              <div className="big">{person.position}</div>
              <p style={{ fontSize: "13.5px", color: "var(--muted)", marginTop: "6px" }}>{person.role}</p>
            </div>
            <div className="fact-card">
              <h3>Credentials</h3>
              <div className="chips">
                {person.creds.map((c) => <span key={c} className="chip">{c}</span>)}
              </div>
            </div>
            <div className="fact-card">
              <h3>Specialties</h3>
              <ul className="spec-list">
                {person.specialties.map((s) => <li key={s}><IcCheck /> {s}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
