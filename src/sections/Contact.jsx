import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import { IcShield, IcPhone, IcText, IcMail, IcPin, IcClock } from "../components/icons.jsx";
import { AGENT, mapsUrl } from "../data/agent.js";

export default function Contact({ onQuote }) {
  return (
    <section className="xsection dark" id="contact">
      <div className="wrap xcontact-grid">
        <div>
          <Reveal><span className="xeyebrow">Contact</span></Reveal>
          <Reveal delay={0.06}><h2 className="xtitle">Talk to a real <span className="hl">local agent.</span></h2></Reveal>
          <Reveal delay={0.12}>
            <p style={{ color: "rgba(255,255,255,.62)", marginTop: 18, maxWidth: "40ch", fontSize: 17, lineHeight: 1.6 }}>
              Call, text, email, or stop by the Vineland office. You'll always reach a person.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div style={{ display: "flex", gap: 12, marginTop: 30, flexWrap: "wrap" }}>
              <Button size="lg" icon={<IcShield />} onClick={onQuote}>Get a Quote</Button>
              <a className="btn btn-secondary btn-lg" href={`tel:+1${AGENT.phoneRaw}`}><IcPhone /> Call now</a>
            </div>
          </Reveal>
        </div>

        <Reveal dir="right">
          <div className="xcontact-cards">
            <div className="xcontact-card">
              <span className="ic"><IcPhone /></span>
              <div>
                <div className="k">Call</div>
                <div className="v"><a href={`tel:+1${AGENT.phoneRaw}`}>{AGENT.phone}</a></div>
                <div className="x">Fax · {AGENT.fax}</div>
              </div>
            </div>
            <div className="xcontact-card">
              <span className="ic"><IcText /></span>
              <div>
                <div className="k">Text</div>
                <div className="v"><a href={`sms:+1${AGENT.phoneRaw}`}>{AGENT.phone}</a></div>
                <div className="x">Same number — text anytime</div>
              </div>
            </div>
            {AGENT.email && (
              <div className="xcontact-card span2">
                <span className="ic"><IcMail /></span>
                <div>
                  <div className="k">Email</div>
                  <div className="v" style={{ fontSize: 16 }}><a href={`mailto:${AGENT.email}`}>{AGENT.email}</a></div>
                </div>
              </div>
            )}
            <div className="xcontact-card span2">
              <span className="ic"><IcPin /></span>
              <div>
                <div className="k">Office</div>
                <div className="v">{AGENT.address}</div>
                <div className="x"><a href={mapsUrl} target="_blank" rel="noreferrer">Get Directions →</a></div>
              </div>
            </div>
            <div className="xcontact-card span2">
              <span className="ic"><IcClock /></span>
              <div>
                <div className="k">Appointment Hours</div>
                <div className="v" style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.7 }}>
                  {AGENT.hoursLines.map((h, i) => <div key={i}>{h}</div>)}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
