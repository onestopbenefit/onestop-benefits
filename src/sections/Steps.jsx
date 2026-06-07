import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import { IcShield } from "../components/icons.jsx";

const STEPS = [
  { t: "Tell me what you need", d: "Pick your coverage and a time that works — online in about a minute, or over the phone." },
  { t: "I do the legwork", d: "I compare trusted carriers to find coverage that fits your life and your budget." },
  { t: "We talk it through", d: "I reach out to confirm your appointment and walk you through your options — plain English, no pressure." },
];

export default function Steps({ onQuote }) {
  return (
    <section className="xsection light">
      <div className="wrap steps-grid">
        <div className="steps-aside">
          <Reveal><span className="xeyebrow">How it works</span></Reveal>
          <Reveal delay={0.06}><h2 className="xtitle">Getting covered is <span className="hl">refreshingly simple.</span></h2></Reveal>
          <Reveal delay={0.12}><p className="lead" style={{ marginTop: 20, maxWidth: "34ch" }}>
            Three steps and a real person who handles the rest.
          </p></Reveal>
          <Reveal delay={0.18}><div style={{ marginTop: 30 }}>
            <Button size="lg" icon={<IcShield />} onClick={onQuote}>Get a Quote</Button>
          </div></Reveal>
        </div>
        <div className="steps-list">
          {STEPS.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className={"step-card" + (i === STEPS.length - 1 ? " alt" : "")}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="bignum" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
