import { useRef, useEffect } from "react";
import Reveal from "../components/Reveal.jsx";
import { PRODUCTS } from "../data/products.js";
import { PRODUCT_ICONS, IcShield, IcArrow } from "../components/icons.jsx";

/* Cards slide horizontally as you scroll the pinned section (videinfra-style).
   On touch / small screens it falls back to a native horizontal scroller (CSS). */
export default function Products({ onPick }) {
  const secRef = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const sec = secRef.current, track = trackRef.current, fill = fillRef.current;
    if (!sec || !track) return;
    let maxX = 0;

    const layout = () => {
      if (window.innerWidth <= 760) { sec.style.height = ""; track.style.transform = ""; maxX = 0; return; }
      maxX = Math.max(0, track.scrollWidth - window.innerWidth);
      sec.style.height = (window.innerHeight + maxX) + "px";
      update();
    };
    const update = () => {
      if (window.innerWidth <= 760) return;
      const rect = sec.getBoundingClientRect();
      const total = sec.offsetHeight - window.innerHeight;
      const prog = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      track.style.transform = "translateX(" + (-prog * maxX) + "px)";
      if (fill) fill.style.width = (prog * 100) + "%";
    };

    layout();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", layout);
    const t = setTimeout(layout, 300); // after fonts settle
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", layout);
      clearTimeout(t);
    };
  }, []);

  return (
    <section className="hgal" data-track ref={secRef} id="products">
      <div className="hgal-sticky">
        <div className="wrap hgal-head">
          <Reveal><span className="xeyebrow">Coverage</span></Reveal>
          <Reveal delay={0.06}><h2 className="xtitle">Protection for <span className="hl">every part of life.</span></h2></Reveal>
        </div>
        <div className="hgal-giant" aria-hidden="true">Coverage</div>
        <div className="hgal-track" ref={trackRef}>
          {PRODUCTS.map((p, i) => {
            const Icon = PRODUCT_ICONS[p.icon] || IcShield;
            return (
              <button className="pgcard" key={p.id} onClick={() => onPick(p.id)}
                      aria-label={`Get a quote for ${p.name}`}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <span className="pgic"><Icon /></span>
                <h3>{p.name}</h3>
                <p>{p.short}</p>
                <span className="go">Get a quote <IcArrow /></span>
              </button>
            );
          })}
          <button className="pgcard end" onClick={() => onPick(null)} aria-label="Get a quote">
            <span className="pgic"><IcShield /></span>
            <h3>Not sure what you need?</h3>
            <p>Let's figure it out together — free, with no obligation.</p>
            <span className="go" style={{ color: "#fff" }}>Start here <IcArrow /></span>
          </button>
        </div>
        <div className="hgal-progress" aria-hidden="true"><span ref={fillRef}></span></div>
      </div>
    </section>
  );
}
