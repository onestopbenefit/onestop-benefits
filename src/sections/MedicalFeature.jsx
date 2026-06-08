import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import { MEDICAL, MEDICAL_BENEFITS } from "../data/products.js";
import { ICON_BY_NAME, IcMedical, IcArrow, IcShield } from "../components/icons.jsx";

/* Featured lead offering — Medical Insurance. Rendered ahead of the
   coverage gallery so health coverage is the first thing visitors meet.
   Benefit categories mirror how major medical carriers group plan
   benefits (original copy lives in data/products.js). */
export default function MedicalFeature({ onPick }) {
  return (
    <section className="xsection darker medfeat" id="medical">
      <div className="wrap">
        <div className="medfeat-head">
          <Reveal>
            <span className="xeyebrow">
              Coverage<span className="medfeat-badge">New · Featured</span>
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="xtitle">
              Health coverage, <span className="hl">finally on the list.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="medfeat-lead">{MEDICAL.long}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="medfeat-actions">
              <Button size="lg" icon={<IcShield />} onClick={() => onPick(MEDICAL.id)}>
                Get a medical quote
              </Button>
              <span className="medfeat-note">
                <IcMedical /> Individual, family &amp; Medicare-related plans
              </span>
            </div>
          </Reveal>
        </div>

        <div className="medfeat-grid">
          {MEDICAL_BENEFITS.map((b, i) => {
            const Icon = ICON_BY_NAME[b.icon] || IcMedical;
            return (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="medfeat-card">
                  <span className="medfeat-ic"><Icon /></span>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <button className="medfeat-cta" onClick={() => onPick(MEDICAL.id)}
                  aria-label="Get a medical insurance quote">
            <span className="l">
              <b>Not sure which plan fits?</b>
              <span>I'll compare carriers with you — free, no obligation.</span>
            </span>
            <span className="arrow"><IcArrow /></span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
