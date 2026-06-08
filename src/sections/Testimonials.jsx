import Reveal from "../components/Reveal.jsx";
import { CLIENT_COUNT, TESTIMONIALS } from "../data/testimonials.js";
import { IcCheck } from "../components/icons.jsx";

/* Social-proof section (replaces the old coverage marquee). A "600+ clients"
   trust stat headlines a staggered masonry wall of client quotes — laid out
   with CSS columns so cards of varying length tile naturally, each revealed
   on scroll via <Reveal>. Falls back to a single column on mobile. */
export default function Testimonials() {
  return (
    <section className="xsection dark tlist" id="testimonials">
      <div className="wrap">
        <div className="tlist-head">
          <Reveal>
            <div className="tlist-stat">
              <span className="tlist-num">{CLIENT_COUNT}</span>
              <span className="tlist-num-label">clients protected across South Jersey</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="xtitle">
              Neighbors who'd <span className="hl">send a friend.</span>
            </h2>
          </Reveal>
        </div>

        <div className="tlist-wall">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className="tlist-cell">
              <figure className="tcard">
                <span className="tcard-mark" aria-hidden="true">&ldquo;</span>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <span className="tcard-avatar" aria-hidden="true">
                    {t.name.charAt(0)}
                  </span>
                  <span className="tcard-id">
                    <b>{t.name}</b>
                    <span>{t.detail}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="tlist-foot">
            <IcCheck /> Verified clients across Vineland, Millville, Bridgeton &amp; beyond
          </p>
        </Reveal>
      </div>
    </section>
  );
}
