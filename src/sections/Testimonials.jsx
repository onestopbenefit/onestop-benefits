import { useRef, useState, useEffect } from "react";
import Reveal from "../components/Reveal.jsx";
import { CLIENT_COUNT, TESTIMONIALS } from "../data/testimonials.js";
import { IcCheck } from "../components/icons.jsx";

/* Compact social-proof marquee (replaces the tall masonry wall). Two rows of
   client quotes auto-scroll in opposite directions and fade out at both edges
   via a CSS mask. Pauses on hover and when off-screen; falls back to a static
   wrap under reduced-motion. */
function Row({ items, dir }) {
  // duplicate the list so the track can loop seamlessly
  const loop = items.concat(items);
  return (
    <div className={"tmar-row" + (dir === "rev" ? " rev" : "")}>
      <div className="tmar-track">
        {loop.map((t, i) => (
          <figure className="tcard" key={i} aria-hidden={i >= items.length ? "true" : undefined}>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <span className="tcard-avatar" aria-hidden="true">{t.name.charAt(0)}</span>
              <span className="tcard-id">
                <b>{t.name}</b>
                <span>{t.detail}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const mid = Math.ceil(TESTIMONIALS.length / 2);
  const rowA = TESTIMONIALS.slice(0, mid);
  const rowB = TESTIMONIALS.slice(mid);

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
            <h2 className="xtitle">Neighbors who'd <span className="hl">send a friend.</span></h2>
          </Reveal>
        </div>
      </div>

      {/* full-bleed marquee, masked/faded at both edges */}
      <div ref={ref} className={"tmar" + (inView ? "" : " is-paused")}>
        <Row items={rowA} dir="fwd" />
        <Row items={rowB} dir="rev" />
      </div>

      <div className="wrap">
        <Reveal>
          <p className="tlist-foot">
            <IcCheck /> Verified clients across Vineland, Millville, Bridgeton &amp; beyond
          </p>
        </Reveal>
      </div>
    </section>
  );
}
