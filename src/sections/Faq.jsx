import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import { IcPlus } from "../components/icons.jsx";
import { AGENT } from "../data/agent.js";

const FAQS = [
  { q: "What kinds of insurance do you offer?",
    a: "Auto, home, renters, condo, life, umbrella, and business — plus financial products like annuities and retirement planning. One agent for all of it." },
  { q: "Where is your office?",
    a: `My office is at ${AGENT.address}. Stop in during the day, or use "Get Directions" in the contact section for navigation.` },
  { q: "When can we meet?",
    a: `${AGENT.apptHours}. Send an appointment request with a date and time, and I'll confirm what works. Requests outside those hours get a reply the next business day.` },
  { q: "How do I file a claim or get help fast?",
    a: "Call or text me directly and I'll walk you through it — then follow up with the carrier until it's resolved." },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="xsection tint" id="faq">
      <div className="wrap">
        <Reveal>
          <div className="section-head" style={{ textAlign: "center", margin: "0 auto 44px" }}>
            <span className="eyebrow" style={{ marginLeft: "auto", marginRight: "auto" }}>FAQ</span>
            <h2 style={{ fontSize: "clamp(28px,3.6vw,44px)", letterSpacing: "-0.03em" }}>Questions, answered.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="faq">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={"faq-item" + (isOpen ? " open" : "")}>
                  <button className="faq-q" onClick={() => setOpen(isOpen ? -1 : i)}
                          aria-expanded={isOpen}>
                    {f.q}<span className="pm" aria-hidden="true"><IcPlus /></span>
                  </button>
                  <div className="faq-a"><div className="faq-a-in"><p>{f.a}</p></div></div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
