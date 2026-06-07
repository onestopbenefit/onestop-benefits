import { IcArrow, IcPhone, IcShield, IcCheck, IcPin, IcChevron } from "../components/icons.jsx";
import { AGENT } from "../data/agent.js";

export default function Hero({ onQuote, onContact }) {
  return (
    <section className="xhero">
      <div className="xhero-photo" aria-hidden="true"></div>
      <div className="xhero-glow" aria-hidden="true"></div>

      <div className="wrap">
        <span className="xhero-eyebrow"><span className="dot"></span> Now accepting new clients · Vineland, NJ</span>
        <h1 className="xhead">
          <span className="line"><span>Insurance you can</span></span>
          <span className="line"><span><span className="accent">trust.</span></span></span>
        </h1>
        <p className="xhero-sub">
          Personalized auto, home, life, and business coverage from a dedicated local
          agent in Vineland, New Jersey — with clear guidance, honest advice, and
          someone who answers when you call.
        </p>
        <div className="xhero-cta">
          <button className="cta-card" onClick={onQuote}>
            <span className="l"><b>Request a free quote</b><span>Takes about a minute</span></span>
            <span className="arrow"><IcArrow /></span>
          </button>
          <button className="cta-ghost" onClick={onContact}><IcPhone /> Get in touch</button>
        </div>
      </div>

      <div className="xhero-foot">
        <div className="xhero-foot-in">
          <div className="xhero-tags">
            <span className="t"><IcShield /> NJ Licensed · #{AGENT.license}</span>
            <span className="t"><IcCheck /> Free, no obligation</span>
            <span className="t"><IcPin /> Vineland, NJ</span>
          </div>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true"><IcChevron /></div>
    </section>
  );
}
