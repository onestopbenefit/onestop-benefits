import Reveal from "../components/Reveal.jsx";
import { IcUser, IcHandshake, IcShield } from "../components/icons.jsx";

const WHY = [
  { ic: <IcUser />, t: "One point of contact", d: "Every policy, claim, and question goes through me — never a call center." },
  { ic: <IcHandshake />, t: "Advice, not a pitch", d: "I recommend what fits your life and budget, even when that means less coverage." },
  { ic: <IcShield />, t: "There when it counts", d: "When you have a claim, I help you file it and follow up until it's resolved." },
];

export default function Why() {
  return (
    <section className="xsection darker">
      <div className="wrap">
        <Reveal><span className="xeyebrow">Why Shelby</span></Reveal>
        <Reveal delay={0.06}><h2 className="xtitle">A neighbor you can <span className="hl">actually reach.</span></h2></Reveal>
        <div className="why-grid" style={{ marginTop: 56 }}>
          {WHY.map((w, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="why-card">
                <div className="idx">0{i + 1}</div>
                <div className="why-ic">{w.ic}</div>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
