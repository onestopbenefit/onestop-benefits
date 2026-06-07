import { useState, useEffect } from "react";
import { IcArrow, IcPhone, IcShield, IcCheck, IcPin, IcChevron } from "../components/icons.jsx";
import { AGENT } from "../data/agent.js";

const ROTATING = ["trust.", "rely on.", "count on.", "depend on."];

/* Rotating last word of the headline — swaps every ~2.6s with a soft fade+rise
   (transform+opacity). Holds a single static word under reduced-motion. */
function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((p) => (p + 1) % ROTATING.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="xhead-rot">
      <span className="rot-word" key={i}>{ROTATING[i]}</span>
    </span>
  );
}

export default function Hero({ onQuote, onContact }) {
  return (
    <section className="xhero">
      <div className="xhero-photo" aria-hidden="true"></div>
      <div className="xhero-glow" aria-hidden="true"></div>

      <div className="wrap">
        <span className="xhero-eyebrow"><span className="dot"></span> Now accepting new clients · Vineland, NJ</span>
        <h1 className="xhead">
          <span className="line"><span>Insurance you can</span></span>
          <RotatingWord />
        </h1>
        <p className="xhero-sub">
          A dedicated local agent in Vineland, NJ for auto, home, life, and business —
          clear guidance and honest advice.
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
